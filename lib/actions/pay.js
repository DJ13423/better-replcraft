module.exports =
/**
   * @param {string} target the name or UUID of the player
   * @param {number} amount the amount of money to send
   * @return {Promise}
   * @throws {CraftError}
   */
function pay(target, amount) {
    return this.request({ action: 'pay', target, amount }).then(() => {});
}