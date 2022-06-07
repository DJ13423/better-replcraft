module.exports = () =>
/** 
 * Stops watching all blocks for updates.
 * @return {Promise}
 * @throws {CraftError}
 */
function unwatchAll() {
    return this.request({ action: 'unwatch_all' }).then(() => {})
}