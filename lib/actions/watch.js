module.exports = () =>
/** 
   * Stops watching a block for updates
   * @param {number} x the x coordinate of the block (container relative)
   * @param {number} y the y coordinate of the block (container relative)
   * @param {number} z the z coordinate of the block (container relative)
   * @return {Promise}
   * @throws {CraftError}
   */
function unwatch(x, y, z) {
    return this.request({ action: 'unwatch', x, y, z }).then(() => {})
}