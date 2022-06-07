module.exports =
/**
 * @param {number} x the x coordinate of the block (container relative)
 * @param {number} y the y coordinate of the block (container relative)
 * @param {number} z the z coordinate of the block (container relative)
 * @return {Promise}
 * @throws {CraftError}
 */
function unpoll(x, y, z) {
    return this.request({ action: 'unpoll', x, y, z }).then(() => {})
}