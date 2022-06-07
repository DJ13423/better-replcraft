const ReplCraftSocket = require('../websocket')

module.exports =
/**
 * @param {String} token your api token
 * @return {Promise}
 * @throws {CraftError}
 */
function login(token) {
    if (this.ws) this.ws = null
    token = token.replace(/\s*(http:\/\/)?\s*/, "")
    let config = JSON.parse(atob(token.split('.')[1]))
    this.ws = new ReplCraftSocket("ws://" + config.host + "/gateway", {})
    this.handlers = new Map()

    this.ws.on('close', () => {
        this.emit('close')
        for (let [_nonce, handler] of this.handlers.entries()) {
            handler({ ok: false, error: "connection closed", message: "connection closed" })
        }
        this.handlers = null
        this.ws = null
    })

    this.ws.on('error', err => {
        this.emit('error', err)
    })

    this.ws.on('message', msg => {
        msg = JSON.parse(msg)
        if (this.handlers.has(msg.nonce)) {
            this.handlers.get(msg.nonce)(msg)
            this.handlers.delete(msg.nonce)
        }
        switch (msg.type) {
            case "block update":
                this.emit("block update", msg.cause, msg.block, msg.x, msg.y, msg.z)
                break

            case "transact":
                this.emit("transact", {
                    query: msg.query,
                    amount: msg.amount,
                    player: msg.player,
                    player_uuid: msg.player_uuid,
                    accept: () => {
                        return this.request({
                            action: 'respond',
                            queryNonce: msg.queryNonce,
                            accept: true
                        })
                    },
                    deny: () => {
                        return this.request({
                            action: 'respond',
                            queryNonce: msg.queryNonce,
                            accept: false
                        })
                    }
                })
                break
        }
        if (msg.event) {
            this.emit(msg.event, msg.cause, msg.block, msg.x, msg.y, msg.z)
        }
    })

    return new Promise((res, rej) => {
        this.ws.once('open', () => {
            this.emit('open')
            this.request({ action: 'authenticate', token }).then(res).catch(rej)
        })
    })
}
