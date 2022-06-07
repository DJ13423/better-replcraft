module.exports =
/**
   * @return {Promise<FuelInfo>}
   * @throws {CraftError}
   */
function fuelInfo() {
    return this.request({ action: 'fuelinfo' });
  }