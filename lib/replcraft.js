const EventEmitter = require('events')


class ReplCraft extends EventEmitter {
    constructor() {
        super()
        this.ws = null
        this.handlers = null
        this.nonce = 0
        this.retryFuelErrors = false
        this.retryQueue = []
        this.__processRetryQueue()
    }

    utils = {
        fill: require('./utils/fill')
    }

    /** Starts a task to process the retry queue */
    __processRetryQueue = require('./actions/__processRetryQueue')()
    /** Crafts an item, which is then stored into the given container */
    craft             = require('./actions/craft')()
    /** Disconnects the client */
    disconnect        = require('./actions/disconnect')()
    /** Obtains detailed fuel usage info for all connections */
    fuelInfo          = require('./actions/fuelInfo')()
    /** Retrieves a block at the given structure-local coordinates */
    getBlock          = require('./actions/getBlock')()
    /** Gets all entities inside the region */
    getEntities       = require('./actions/getEntities')()
    /** Gets all items from a container such as a chest or hopper */
    getInventory      = require('./actions/getInventory')()
    /** Gets a block's redstone power level */
    getPowerLevel     = require('./actions/getPowerLevel')()
    /** Retrieves the text of a sign at the given coordinates */
    getSignText       = require('./actions/getSignText')()
    /** */
    getSize           = require('./actions/getSize')()
    /** Retrieves the world coordinate location of the (0,0,0) inner coordinate */
    location          = require('./actions/location')()
    /** Logs the client in and returns a promise that resolves once authenticated. */
    login             = require('./actions/login')()
    /** Moves an item between containers */
    moveItem          = require('./actions/moveItem')()
    /** Sends money to a player out of your own account */
    pay               = require('./actions/pay')()
    /** */
    poll              = require('./actions/poll')()
    /** */
    pollAdd           = require('./actions/pollAll')()
    /** */
    request           = require('./actions/request')()
    /** */
    retryOnFuelError  = require('./actions/retryOnFuelError')()
    /** */
    setBlock          = require('./actions/setBlock')()
    /** */
    setSignTest       = require('./actions/setSignText')()
    /** */
    tell              = require('./actions/tell')()
    /** */
    unpoll            = require('./actions/unpoll')()
    /** */
    unpollAll         = require('./actions/unpollAll')()
    /** */
    unwatch           = require('./actions/unwatch')()
    /** */
    unwatchAll        = require('./actions/unwatchAll')()
    /** */
    watch             = require('./actions/watch')()
    /** 
     * Begins watching all blocks in the structure for updates.
     * Note that this isn't perfectly reliable and doesn't catch all possible updates.
     */
    watchAll          = require('./actions/watchAll')
}


module.exports = ReplCraft