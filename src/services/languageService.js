import axios from "axios"

export default class languageService{
    getByResume_Id(id){
        return axios.get("http://localhost:8080/api/languages/getByResume_Id?id="+id)
    }
}
