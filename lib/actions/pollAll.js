module.exports =
/**
 * @fires block update
 * @return {Promise}
 * @throws {CraftError}
 */
function pollAll() {
    return this.request({ action: 'poll_all' }).then(() => {})
}