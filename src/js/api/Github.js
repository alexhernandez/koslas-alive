// GITHUB API
//

import axios from 'axios';

const fetchUserAPI = (success, error) => {
  axios.get('https://api.github.com/users/jonathonwang').then(
    (response) => success(response.data),
    (response) => error(response)
  );
};

const fetchUserEventsAPI = (success, error) => {
  axios.get('https://api.github.com/users/jonathonwang/events').then(
    (response) => success(response.data),
    (response) => error(response)
  );
};

export default {
  fetchUserAPI,
  fetchUserEventsAPI,
}
