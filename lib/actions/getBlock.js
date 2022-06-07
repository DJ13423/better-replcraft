module.exports =
/**
 * @param {number} x the x coordinate of the block (container relative)
 * @param {number} y the y coordinate of the block (container relative)
 * @param {number} z the z coordinate of the block (container relative)
 * @return {Promise<Block>}
 * @throws {CraftError}
 */
function getBlock(x, y, z) {
    return this.request({ action: 'get_block', x, y, z }).then(r => r.block)
}