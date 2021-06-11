import axios from "axios"

export default class resumeService{
    getByCandidate_Id(id){
        return axios.get("http://localhost:8080/api/resumes/getByCandidate_Id?id="+id)
    }
}