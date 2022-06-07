module.exports =
/**
 * @param {boolean} retry if retries should be enabled or disabled
 */
function retryOnFuelError(retry = true) {
    this.retryFuelErrors = retry;
}