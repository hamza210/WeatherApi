class Weather {
    constructor(city){
        this.apikey = '8808d4d06f2135e5b21f1e6f352ababd'
        this.city = city;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apikey}`);

        const responseData = await response.json();

        return responseData;
    }

    async changeLocation(city){
        this.city = city
    }
}
