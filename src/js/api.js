let token = process.env.API_TOKEN;

let axios = require('axios');

let config = {
  headers: {
    Accept: 'application/json',
    Authrorization: 'Bearer ' + token,
  },
};

let request = async (url, config) =>
  await fetch(url, config).then((r) => r.json());
