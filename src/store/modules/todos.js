import axios from "axios";

import config from "../../config";

const apiURL = config.API_BASE;

const state = {
  todos: [],
  editableTodo: null,
  editMode: false,
  errors: []
};
const getters = {
  getTodos: state => state.todos,
  getEditableTodo: state => state.editableTodo,
  getErrors: state => state.errors
};
const mutations = {
  // payload must be array of todos
  SET_TODOS: (state, payload) => {
    state.todos = payload;
  },
  // payload must be todo object
  ADD_TODO: (state, payload) => {
    state.todos = [...state.todos, payload];
  },
  // payload must be todo object
  EDIT_TODO(state, payload) {
    const index = state.todos.findIndex(item => item._id === payload._id);
    state.todos.splice(index, 1, payload);
  },
  // payload must be todo id string
  DELETE_TODO: (state, payload) => {
    state.todos = state.todos.filter(item => item._id !== payload);
  },
  // payload must be todo id string
  SET_EDIT_TODO(state, payload) {
    state.editMode = !state.editMode;
    if (state.editMode) {
      state.editableTodo = state.todos.find(item => item._id === payload);
    } else {
      state.editableTodo = null;
    }
  },

  SET_ERROR: (state, payload) => {
    state.errors = [...state.errors, payload];
  }
};
const actions = {
  GET_TODOS: async context => {
    try {
      const { data, status } = await axios.get(apiURL);
      if (status === 200) context.commit("SET_TODOS", data);
    } catch (error) {
      global.console.error(error.responce);
      context.commit("SET_ERROR", "get todos error");
    }
  },
  SAVE_TODO: async (context, payload) => {
    try {
      const { data, status } = await axios.post(apiURL, payload);
      if (status === 206) {
        context.commit("SET_ERROR", data.errors);
      } else {
        context.commit("ADD_TODO", data);
      }
    } catch (error) {
      global.console.error(error.responce);
      context.commit("SET_ERROR", {
        network: { message: "Lost connection with server" }
      });
    }
  },
  UPDATE_TODO: async (context, payload) => {
    const { _id, title, description, completed } = payload;
    try {
      const { data, status } = await axios.put(`${apiURL}/${_id}`, {
        title,
        description,
        completed
      });

      if (status === 206) {
        context.commit("SET_ERROR", data.errors);
      } else {
        context.commit("EDIT_TODO", data);
      }
    } catch (error) {
      global.console.error(error.responce);
      context.commit("SET_ERROR", {
        network: { message: "Lost connection with server" }
      });
    }
  },
  REMOVE_TODO: async (context, payload) => {
    try {
      await axios.delete(`${apiURL}/${payload}`);
      context.commit("DELETE_TODO", payload);
    } catch (error) {
      global.console.error(error.responce);
      context.commit("SET_ERROR", "remove todo error");
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
