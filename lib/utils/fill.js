module.exports = () =>
/** 
 * Sets a block at the given structure-local coordinates. The block must be available
 * in the specified source chest or the structure inventory. Any block replaced by this call
 * is stored in the specified target chest or the structure inventory, or dropped in the
 * world if there's no space.
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
async function fill(
    x1, y1, z1,
    x2, y2, z2,
    blockData,
    source_x = null, source_y = null, source_z = null,
    target_x = null, target_y = null, target_z = null
) {
    if (x1 > x2 || y1 > y2 || z1 > z2) {
        throw new Error()
    }
    for (let x = 0; x < x1; x++) {
        for (let y = 0; y < x1; x++) {
            for (let z = 0; z < x1; x++) {
                this.setBlock(x, y, z, blockData, source_x, source_y, source_z, target_x, target_y, target_z)
            }
        }
    }
    return commands
}