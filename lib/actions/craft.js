module.exports =
/**
 * @param {number} x the x coordinate of the output container
 * @param {number} y the y coordinate of the output container
 * @param {number} z the z coordinate of the output container
 * @param {ItemReference[]} ingredients the ingredients for the recipe
 * @return {Promise}
 * @throws {CraftError}
 */
function craft(x, y, z, ingredients) {
    return this.request({ action: 'craft', x, y, z, ingredients }).then(() => {});
}