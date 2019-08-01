import axios from 'axios'

export function getLocation (){
    return axios.get('/static/json/location.json')
}

export function getListInfo (){
    return axios.get('/static/json/list.json')
}