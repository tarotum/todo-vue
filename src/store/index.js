import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    editableTodo: { title: '', description: '' },
    editMode: false
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getEditableTodo(state) {
      return state.editableTodo;
    },
    getEditMode(state) {
      return state.editMode;
    }
  },
  mutations: {
    getTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      console.log(todo.title);

      const index = state.todos.findIndex(item => item._id === todo._id);
      if (index === -1) console.error('Todo not found in state');
      state.todos.splice(index, 1, todo);
    },
    toogleEditTodo(state, id) {
      state.editMode = !state.editMode;
      if (state.editMode) {
        state.editableTodo = state.todos.find(item => item._id === id);
      } else {
        state.editableTodo = { title: '', description: '' };
      }
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(item => item._id !== id);
    }
  },
  actions: {
    async getTodos(context) {
      try {
        const res = await axios.get('http://localhost:3000/');
        if (res.status === 200) {
          context.commit('getTodos', res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo(context, todo) {
      try {
        const res = await axios.post(`http://localhost:3000/`, todo);
        if (res.status === 201) {
          context.commit('addTodo', res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateTodo(context, todo) {
      const { _id, title, description, completed } = todo;
      try {
        const res = await axios.put(`http://localhost:3000/${_id}`, {
          title,
          description,
          completed
        });
        if (res.status === 200) {
          context.commit('updateTodo', res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async removeTodo(context, id) {
      try {
        const res = await axios.delete(`http://localhost:3000/${id}`);
        if (res.status === 200) {
          context.commit('removeTodo', id);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
});
