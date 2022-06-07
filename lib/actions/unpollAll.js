module.exports =
/**
 * @return {Promise}
 * @throws {CraftError}
 */
function unpollAll() {
    return this.request({ action: 'unpoll_all' }).then(() => {})
}