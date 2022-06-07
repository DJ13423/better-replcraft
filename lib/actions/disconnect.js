module.exports =
function disconnect() {
    if (this.ws) {
        this.ws.close();
    }
}