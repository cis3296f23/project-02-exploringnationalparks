/**
 * Fetches weather information from the Open-Meteo API based on longitude and latitude.
 * @async
 * @function Weather

 * @global 
 * @param {number} latitude - The latitude of the park to fetch information for.
 * @param {number} longitude - The longitude of the park to fetch information for.
 * @returns {Promise<Object>} - A promise that resolves to the weather information as an object.
 * @throws {Error} - If the network response is not successful or an error occurs during the process.
 */

export const Weather = async (latitude, longitude) => {
    try {
      await latitude;
      await longitude;
      if (!latitude || !longitude){
        return {current:{temperature_2m:'No data', weather_code:'No data'}};
      }
      var url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,weather_code`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };
  