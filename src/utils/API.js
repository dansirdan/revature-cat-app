import axios from "axios";

export default {
    baseURL: "http://localhost:8080/CatCollectorServer",
    getOwners: function(){
        return axios.get(`${this.baseURL}/owner`);
    },
    getOwnersByUsername: function(username) {
        return axios.get(`${this.baseURL}/owner?username=${username}`);
    },
    updateOwnerByUsername: function(username, userObj) {
        return axios.put(`${this.baseURL}/owner?username=${username}`, userObj);
    },
    createOwner: function(userObj) {
        return axios.post(`${this.baseURL}/owner`, userObj);
    },
    deleteOwner: function(username) {
        return axios.delete(`${this.baseURL}/owner?username=${username}`);
    },
    getCats: function(){
        return axios.get(`${this.baseURL}/cat`);
    },
    getCatsByUsername: function(owner) {
        return axios.get(`${this.baseURL}/cat?owner=${owner}`);
    },
    getCatByUID: function(UID) {
        return axios.get(`${this.baseURL}/cat?UID=${UID}`);
    },
    updateCatByUID: function(UID, catObj) {
        return axios.put(`${this.baseURL}/cat?UID=${UID}`, catObj);
    },
    createCat: function(catObj) {
        return axios.post(`${this.baseURL}/cat`, catObj);
    },
    deleteCatByUID: function(UID) {
        return axios.delete(`${this.baseURL}/cat?UID=${UID}`);
    }
}