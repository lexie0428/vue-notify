import loadMore from "../assets/js/loadMore";
import axios from "axios";

export default {
  state: {
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload;
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload;
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload];
    },
  },
  actions: {
    setMessage({ commit }, payload) {
      commit("setMessage", payload);
    },
    setMessageMain({ commit }, payload) {
      commit("setMessageMain", payload);
    },
    loadMessages({ commit, getters }) {
      let res = getters.getMessageFilter;
      commit("loadMessages", loadMore(res));
    },
    getNotify({ commit, dispatch }) {
      dispatch("setLoading", true);
      axios
        .get("https://tocode.ru/static/c/vue-pro/notifyApi.php")
        .then((response) => {
          let res = response.data.notify,
            messages = [],
            messagesMain = [];

          //filter
          for (let i = 0; i < res.length; i++) {
            if (res[i].main) messagesMain.push(res[i]);
            else messages.push(res[i]);
          }
          dispatch('setMessage', messages);
          dispatch('setMessageMain', messagesMain)
        })
        .catch((err) => {
          console.log(err);
          dispatch("setError", "Error: Network Error");
        })
        .finally(() => dispatch("setLoading", false));
    },
      getNotifyLazy({ dispatch }) {
        dispatch("setLoading", true);
        setTimeout(() => {
          dispatch("getNotify");
        }, 1800);
      },
  },
  getters: {
    getMessage(state) {
      return state.messages;
    },
    getMessageFilter(state) {
      return state.messages.filter((mes) => mes.main === false);
    },
    getMessageMain(state) {
      return state.messagesMain;
    },
  },
};
