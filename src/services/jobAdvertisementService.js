import axios from "axios"

export default class jobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsActiveSorted")
    }

    add(advert){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",advert)
    }
}
