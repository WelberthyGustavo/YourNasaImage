
export  class NasaApi {

    constructor(apiKey, date){
        this.apiKey = apiKey;
        this.date = date;
    }

    async getImageOfTheDay(){

        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${this.date}`;

        try {
            const response = await fetch(apiUrl);
      
            if (!response.ok) {
              throw new Error('Error');
            }
      
            return response.json();
          } catch (error) {
            throw error;
          }
    }

}


