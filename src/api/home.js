import axios from 'axios'
const HomeApi = {
    getBookTable() {
        return axios.get('http://localhost:8181/booklist/findAll');
    }
}
export default HomeApi