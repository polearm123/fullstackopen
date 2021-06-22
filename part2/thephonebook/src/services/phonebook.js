import axios from 'axios'

const baseUrl = "/api/people"

//returns all people in the phonebook
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {

    const request = axios.post(baseUrl,newPerson)
    return request.then(response => response.data)

}

const deletePerson = (id) => {
    console.log(id)
    const deleteUrl = baseUrl+`/${id}`
    const request = axios.delete(deleteUrl)
    return request.then(deleteObject => deleteObject.data)

}

const updatePerson = (newPerson) => {

    const updateUrl = baseUrl+`/${newPerson._id}`
    const request = axios.put(updateUrl,newPerson)
    return request.then(response=>response.data)

}

export default {getAll,create,deletePerson,updatePerson}