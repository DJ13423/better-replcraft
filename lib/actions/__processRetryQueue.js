module.exports =
async function __processRetryQueue() {
    while (true) {
        await new Promise(res => this.once("__queueFilled", res));
        while (this.retryQueue.length > 0) {
            let { args, resolve, reject } = this.retryQueue.splice(0, 1)[0];
            this.request(args).then(resolve).catch(reject);
        }
    }
}