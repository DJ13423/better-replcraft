module.exports =
class Entity {
    constructor(type, name, x, y, z, health, max_health, player_uuid) {
        this.type = type
        this.name = name
        this.x = x
        this.y = y
        this.z = z
        this.health = health
        this.max_health = max_health
        this.player_uuid = player_uuid
    }
}