// PAGE MODULE

import Github from '../../api/Github';
import * as page from '../mutation-types/Page';

const state = {
  user: {},
  events: [],
};

const getters = {
  user: state => state.user,
  events: state => state.events,
  lastcommit: state => state.events.shift(),
};

const actions = {
  fetchUser ({ commit }) {
    Github.fetchUserAPI(
      (success) => {
        commit(page.FETCH_USER, success);
      }
    );
  },
  fetchUserEvents ({ commit }) {
    Github.fetchUserEventsAPI(
      (success) => {
        commit(page.FETCH_USER_EVENTS, success);
      }
    );
  },
};

const mutations = {
  [page.FETCH_USER] (state, payload){
    state.user = payload;
  },
  [page.FETCH_USER_EVENTS] (state, payload){
    state.events = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
