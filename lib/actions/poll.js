module.exports =
/**
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