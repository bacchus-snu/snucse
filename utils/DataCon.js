import Cookies from 'js-cookie';
import 'whatwg-fetch';

const DataCon = {
  loadDataFromServer(url) {
    return DataCon.postDataToServer(url, 'GET');
  },

  postDataToServer(url, method, data) {
    const user_id = localStorage.getItem('snucsesession');
    const headers = {
      Authorization: `Token token=${user_id}`
    };
    if (data != null) headers['Content-Type'] = 'application/json';
    const options = {
      method,
      headers,
      body: data != null ? JSON.stringify(data) : undefined
    };
    return fetch(url, options).then(res => {
      if (!res.ok) {
        throw res;
      } else {
        return res.json();
      }
    }).catch(err => {
      if (err.status === 401) {
        location.href = '/login';
      }
      throw err;
    });
  }
};

export default DataCon;
