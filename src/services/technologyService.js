import axios from "axios"

export default class technologyService{
    getByResume_Id(id){
        return axios.get("http://localhost:8080/api/technologies/getByResume_Id?id="+id)
    }
}
