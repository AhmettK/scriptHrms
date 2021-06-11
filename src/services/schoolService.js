import axios from "axios"

export default class schoolService{
    getByResume_Id(id){
        return axios.get("http://localhost:8080/api/schools/getByResume_Id?id="+id)
    }
}
