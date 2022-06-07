module.exports =
/**
   * @param {number} x the x coordinate of the block (container relative)
   * @param {number} y the y coordinate of the block (container relative)
   * @param {number} z the z coordinate of the block (container relative)
   * @return {Promise<Item[]>}
   * @throws {CraftError}
   */
function getInventory(x, y, z) {
    const res = this.request({ action: 'get_inventory', x, y, z })
    console.log(res)
    return res.items
}