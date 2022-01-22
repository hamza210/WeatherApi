class Storage{
    constructor(){
        this.city;
        this.defaultcity = 'Mumbai'
    }

    getLocationdata(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultcity;
        }else{
            this.city = localStorage.getItem('city')
        }

        return {
            city: this.city
        }
    }

    setLocationdata(city){
        localStorage.setItem('city',city) 
    }

}