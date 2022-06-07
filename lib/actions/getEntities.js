module.exports =
/**
 * @return {Promise<Entity[]>}
 * @throws {CraftError}
 */
function getEntities() {
    return this.request({ action: 'get_entities' }).then(r => r.entities);
}