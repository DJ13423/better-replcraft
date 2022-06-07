module.exports = () =>
/**
 * Enables or disables automatic retries when out of fuel.
 * Note that requests will hang indefinitely until fuel is supplied.
 * You can monitor fuel status by listening to the "outOfFuel" event
 * @param {boolean} retry if retries should be enabled or disabled
 */
function retryOnFuelError(retry = true) {
    this.retryFuelErrors = retry;
}