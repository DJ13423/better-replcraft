module.exports =
/**
   * @param {number} x the x coordinate of the sign (container relative)
   * @param {number} y the y coordinate of the sign (container relative)
   * @param {number} z the z coordinate of the sign (container relative)
   * @return {Promise<string[]>}
   * @throws {CraftError}
   */
function getSignText(x, y, z) {
    return this.request({ action: 'get_sign_text', x, y, z }).then(r => r.lines)
}