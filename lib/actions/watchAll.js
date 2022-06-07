module.exports = 
/**
 * @returns {Promise}
 */
function watchAll() {
    console.log(this.request)
    return this.request({ action: 'watch_all' })
}