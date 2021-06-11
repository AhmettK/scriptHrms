import axios from "axios";

export default class experienceService{
    getByResume_Id(id){
        return axios.get("http://localhost:8080/api/experiences/getByResume_Id?id="+id)
    }
}
