import axios from 'axios'

const fetchData = () => {
    return axios.get('https://viledcore.vlife.kz/api/v1/items')
         .then(response => response)
         .catch(error => console.log(error))
}

export default fetchData
