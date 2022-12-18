import axios from 'axios';

   export const doGet = (url, param) => {
        const promise = new Promise((resolve, reject) => {
            if (param == null) {
                axios.get(url)
                .then(resp => resolve(resp.data))
                .catch(err => reject(err));
            } else {
                axios.get(`${url}/${param}`)
                .then(resp => resolve(resp.data))
                .catch(err => reject(err));
            }
            
        });
        return promise;
    }

   export const doPost = (url, body) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(url, body)
            .then(resp => resolve(resp.data))
            .catch(err => reject(err));

        });
        return promise;
    }

    export const doUpdate = (url, id, body) => {
        const promise = new Promise((resolve, reject) => {
            axios.patch(`${url}/${id}`, body)
            .then(resp => resolve(resp.data))
            .catch(err => reject(err));

        });
        return promise;
    }

    export const doDelete = (url, id) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete(`${url}/${id}`)
            .then(resp => resolve(resp.data))
            .catch(err => reject(err));

        });
        return promise;
    }