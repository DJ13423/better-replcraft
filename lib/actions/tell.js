module.exports = () =>
/**
   * Sends a message to a player. The player must be online and inside
   * the structure.
   * @param {string} target the name or UUID of the player
   * @param {string} message the message to send to the player
   * @return {Promise}
   * @throws {CraftError}
   */
function tell(target, message) {
    return this.request({ action: 'tell', target, message }).then(() => {});
  }