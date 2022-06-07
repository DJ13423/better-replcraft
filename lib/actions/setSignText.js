module.exports =
/**
   * @param {number} x the x coordinate of the sign (container relative)
   * @param {number} y the y coordinate of the sign (container relative)
   * @param {number} z the z coordinate of the sign (container relative)
   * @param {string[]} lines the lines of text to set the sign to
   * @return {Promise}
   * @throws {CraftError}
   */
function setSignText(x, y, z, lines) {
    return this.request({ action: 'set_sign_text', x, y, z, lines }).then(() => {})
}