import axios from 'axios'
const HomeApi = {
    getBookTable() {
        return axios.get('/home/bookList');
    },
    getUserTable() {
        return axios.get('/user/getUser');
    }
}
export default HomeApi