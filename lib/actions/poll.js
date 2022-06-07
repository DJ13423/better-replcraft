module.exports = () =>
/** 
 * Begins polling a block for updates.
 * Note that this catches all possible block updates, but only one block is polled per tick.
 * The more blocks you poll, the slower each individual block will be checked.
 * Additionally, if a block changes multiple times between polls, only the latest change
 * will be reported.
 * @param {number} x the x coordinate of the block (container relative)
 * @param {number} y the y coordinate of the block (container relative)
 * @param {number} z the z coordinate of the block (container relative)
 * @fires block update
 * @return {Promise}
 * @throws {CraftError}
 */
function poll(x, y, z) {
    return this.request({ action: 'poll', x, y, z }).then(() => {})
}