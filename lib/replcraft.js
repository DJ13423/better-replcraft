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
    __processRetryQueue = require('./actions/__processRetryQueue')
    /** Crafts an item, which is then stored into the given container */
    craft             = require('./actions/craft')
    /** Disconnects the client */
    disconnect        = require('./actions/disconnect')
    /** Obtains detailed fuel usage info for all connections */
    fuelInfo          = require('./actions/fuelInfo')
    /** Retrieves a block at the given structure-local coordinates */
    getBlock          = require('./actions/getBlock')
    /** Gets all entities inside the region */
    getEntities       = require('./actions/getEntities')
    /** Gets all items from a container such as a chest or hopper */
    getInventory      = require('./actions/getInventory')
    /** Gets a block's redstone power level */
    getPowerLevel     = require('./actions/getPowerLevel')
    /** Retrieves the text of a sign at the given coordinates */
    getSignText       = require('./actions/getSignText')
    /** */
    getSize           = require('./actions/getSize')
    /** Retrieves the world coordinate location of the (0,0,0) inner coordinate */
    location          = require('./actions/location')
    /** Logs the client in and returns a promise that resolves once authenticated. */
    login             = require('./actions/login')
    /** Moves an item between containers */
    moveItem          = require('./actions/moveItem')
    /** Sends money to a player out of your own account */
    pay               = require('./actions/pay')
    /**
     * Begins polling a block for updates.
     * Note that this catches all possible block updates, but only one block is polled per tick.
     * The more blocks you poll, the slower each individual block will be checked.
     * Additionally, if a block changes multiple times between polls, only the latest change
     * will be reported
     */
    poll              = require('./actions/poll')
    /**
     * Begins polling all blocks in the structure for updates.
     * Updates will be very slow!
     */
    pollAdd           = require('./actions/pollAll')
    /** Makes a request to the server. You probably shouldn't use this directly. */
    request           = require('./actions/request')
    /**
     * Enables or disables automatic retries when out of fuel.
     * Note that requests will hang indefinitely until fuel is supplied.
     * You can monitor fuel status by listening to the "outOfFuel" event
     */
    retryOnFuelError  = require('./actions/retryOnFuelError')
    /**
     * Sets a block at the given structure-local coordinates. The block must be available
     * in the specified source chest or the structure inventory. Any block replaced by this call
     * is stored in the specified target chest or the structure inventory, or dropped in the
     * world if there's no space.
     */
    setBlock          = require('./actions/setBlock')
    /** Sets the text of a sign at the given coordinates */
    setSignText       = require('./actions/setSignText')
    /** Sends a message to a player. The player must be online and inside the structure */
    tell              = require('./actions/tell')
    /** Stops watching a block for updates */
    unpoll            = require('./actions/unpoll')
    /** Stops polling all blocks in the structure. */
    unpollAll         = require('./actions/unpollAll')
    /** Stops watching a block for updates */
    unwatch           = require('./actions/unwatch')
    /** Stops watching all blocks for updates. */
    unwatchAll        = require('./actions/unwatchAll')
    /**
     * Begins watching a block for updates.
     * Note that this isn't perfectly reliable and doesn't catch all possible updates.
     */
    watch             = require('./actions/watch')
    /** 
     * Begins watching all blocks in the structure for updates.
     * Note that this isn't perfectly reliable and doesn't catch all possible updates.
     */
    watchAll          = require('./actions/watchAll')
}


module.exports = ReplCraft