module.exports =
/**
 * @param {number} index the item index in the source container
 * @param {number} source_x the x coordinate of the source container (container relative)
 * @param {number} source_y the y coordinate of the source container (container relative)
 * @param {number} source_z the z coordinate of the source container (container relative)
 * @param {number} target_x the x coordinate of the source container (container relative)
 * @param {number} target_y the y coordinate of the source container (container relative)
 * @param {number} target_z the z coordinate of the source container (container relative)
 * @param {number|null} target_index the target index in the destination container, or any if null
 * @param {number|null} amount the amount of items to move, or all if null
 * @return {Promise}
 * @throws {CraftError}
 */
function moveItem(index, source_x, source_y, source_z, target_x, target_y, target_z, target_index = null, amount = null) {
    return this.request({
        action: 'move_item',
        amount,
        index, source_x, source_y, source_z,
        target_index, target_x, target_y, target_z
    }).then(() => { });
}