import axios from "axios";

export default {
    baseURL: "http://52.14.32.218:8080/catCollectorServer",
    getOwners: function(){
        return axios.get(`${this.baseURL}/owner`);
    },
    getOwnerByUsername: function(username) {
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
    // BROKEN IF NO CATS EXIST
    getCatsByUsername: function(owner) {
        return axios.get(`${this.baseURL}/cat?owner=${owner}`);
    },
    getCatByUID: function(UID) {
        return axios.get(`${this.baseURL}/cat?UID=${UID}`);
    },
    updateCatByUID: function(catObj) {
        return axios.put(`${this.baseURL}/cat`, catObj);
    },
    createCat: function(catObj) {
        return axios.post(`${this.baseURL}/cat`, catObj);
    },
    deleteCatByUID: function(UID) {
        return axios.delete(`${this.baseURL}/cat?UID=${UID}`);
    }
}