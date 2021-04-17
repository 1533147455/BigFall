import axios from 'axios'
const HomeApi = {
    getBookTable() {
        return axios.get('/home/bookList');
    },
    getResource() {
        return axios.get('/home/book');
    },
    getUserTable() {
        return axios.get('/user/getUser');
    }
}
export default HomeApi