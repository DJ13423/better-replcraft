module.exports =
/**
     * @param {Object} args: the request to make
     * @return {Promise<Object>}
     * @throws {CraftError}
     */
async function request(args) {
    if (!this.ws) {
        let error = new Error("connection closed")
        error.type = "connection closed"
        throw error
    }
    const nonce = (this.nonce++).toString()
    const request = { nonce, ...args }
    this.ws.send(JSON.stringify(request))

    return await new Promise((res, rej) => {
        this.handlers.set(nonce, response => {
            if (!response.ok) {
                let error = new Error(response.error + ': ' + response.message)
                error.type = response.error
                if (response.error == 'out of fuel') {
                    this.emit("outOfFuel", error)
                }
                if (response.error == 'out of fuel' && this.retryFuelErrors) {
                    setTimeout(() => {
                        this.retryQueue.push({ args, resolve: res, reject: rej })
                        // this.request(args).then(resolve).catch(reject);
                        this.emit("__queueFilled")
                    }, 500)
                } else {
                    rej(error)
                }
            } else {
                res(response)
            }
        })
    })
}