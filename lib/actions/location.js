module.exports =
/**
 * @return {Promise<XYZ>}
 * @throws {CraftError}
 */
function location() {
    return this.request({ action: 'get_location', x, y, z }).then(r => [r.x, r.y, r.z])
}