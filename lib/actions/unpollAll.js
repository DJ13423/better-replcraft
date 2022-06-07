module.exports = () =>
/** 
 * Stops polling all blocks in the structure.
 * @return {Promise}
 * @throws {CraftError}
 */
function unpollAll() {
    return this.request({ action: 'unpoll_all' }).then(() => {})
}