module.exports = () =>
/** 
 * Begins polling all blocks in the structure for updates.
 * Updates will be very slow!
 * @fires block update
 * @return {Promise}
 * @throws {CraftError}
 */
function pollAll() {
    return this.request({ action: 'poll_all' }).then(() => {})
}