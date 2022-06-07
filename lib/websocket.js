const { WebSocket } = require('ws')

class ReplCraftSocket extends WebSocket {
    send(data, isJSON = true) {
        if (isJSON) {
            super.send(JSON.stringify(data))
        } else {
            super.send(data)
        }
    }
}

module.exports = ReplCraftSocket