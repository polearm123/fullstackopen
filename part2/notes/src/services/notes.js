import axios from 'axios'

const baseUrl = 'http://localhost:3070/notes'

const getAll = () => {

    const request =  axios.get(baseUrl)
    return request.then(response=>response.data).catch(error => {
        console.log("getAll reuqest failed.")
    })
}

const create = (newObject) => {

    const request =  axios.post(baseUrl,newObject)
    return request.then(response => response.data).catch(error => {
        console.log("post request failed")
    })

}

const update = (id,newObject) => {

    const request =  axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data).catch(error => {
        console.log("put request failed")
    })
}

export default {getAll,create,update}