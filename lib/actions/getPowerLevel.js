module.exports =
/**
   * @param {number} x the x coordinate of the block (container relative)
   * @param {number} y the y coordinate of the block (container relative)
   * @param {number} z the z coordinate of the block (container relative)
   * @return {Promise<number>}
   * @throws {CraftError}
   */
function getPowerLevel(x, y, z) {
    return this.request({ action: 'get_power_level', x, y, z }).then(r => r.power);
}