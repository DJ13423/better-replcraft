module.exports =
/**
 * @return {Promise}
 * @throws {CraftError}
 */
function unwatchAll() {
    return this.request({ action: 'unwatch_all' }).then(() => {})
}