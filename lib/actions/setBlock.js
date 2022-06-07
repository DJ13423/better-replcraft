module.exports =
/**
 * @param {number} x the x coordinate of the block (container relative)
 * @param {number} y the y coordinate of the block (container relative)
 * @param {number} z the z coordinate of the block (container relative)
 * @param {Block} blockData
 * @param {number?} source_x the x coordinate of the container to take the block from
 *                           if excluded, uses the structure inventory instead.
 * @param {number?} source_y the y coordinate of the container to take the block from
 *                           if excluded, uses the structure inventory instead.
 * @param {number?} source_z the z coordinate of the container to take the block from
 *                           if excluded, uses the structure inventory instead.
 * @param {number?} target_x the x coordinate of the container to put the drops into
 *                           if excluded, uses the structure inventory instead.
 * @param {number?} target_y the y coordinate of the container to put the drops into
 *                           if excluded, uses the structure inventory instead.
 * @param {number?} target_z the z coordinate of the container to put the drops into
 *                           if excluded, uses the structure inventory instead.
 * @return {Promise}
 * @throws {CraftError}
 */
function setBlock(
    x, y, z,
    blockData,
    source_x = null, source_y = null, source_z = null,
    target_x = null, target_y = null, target_z = null
) {
    return this.request({
        action: 'set_block',
        x, y, z,
        blockData,
        source_x, source_y, source_z,
        target_x, target_y, target_z
    }).then(() => { });
}