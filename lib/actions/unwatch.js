module.exports =
/**
   * @param {number} x the x coordinate of the block (container relative)
   * @param {number} y the y coordinate of the block (container relative)
   * @param {number} z the z coordinate of the block (container relative)
   * @fires block update
   * @return {Promise}
   * @throws {CraftError}
   */
function watch(x, y, z) {
    return this.request({ action: 'watch', x, y, z }).then(() => {})
}