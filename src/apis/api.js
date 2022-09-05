import axios from 'axios';

// const BASE_URL1 = 'http://restapi.adequateshop.com';
// const BASE_URL2 = 'https://dummyjson.com';

export const getAxiosInstance = async () => {
  console.log('CALL API FUCTION=====');
  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: [''],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    instance.interceptors.request.use(
      function (config) {
        // console.log('APICONFIG=======   ', config);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          // console.log(response, 'response');
          resolve(response);
        }),
      error => {
        if (!error.response) {
          console.log(error, 'error');
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
    );
    return instance;
  }
};

// Email: "sdfsdsd@dfghg.vghk"
// Id: 142409
// Name: "sfsdfs"
// Token: "fc761c68-3a5d-47d8-8c5c-fdf1ff6d4a92"
