import axios from 'axios';

export function setTokenHeader(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }
  

export function apiCall(method, path, data){
    let herokuPath=`https://bb-hub-server.herokuapp.com${path}` // prefix of heroku api app
    return new Promise((resolve, reject)=>{
        return axios[method.toLowerCase()](herokuPath, data)
        .then(res=>{
           return resolve(res.data)
        })
        .catch(err=>{
            return reject(err.response.data.error)
        })
    })
}