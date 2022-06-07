module.exports =
function getSize(x, y, z) {
    return this.request({ action: 'get_size', x, y, z }).then(r => [r.x, r.y, r.z]);
}