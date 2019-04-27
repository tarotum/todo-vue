<template>
  <form class="todo-form" @submit.prevent="handleSumit">
    <template v-if="editMode">
      <input class="todo-form__title" type="text" v-model="editableTodo.title">
      <textarea class="todo-form__description" v-model="editableTodo.description"></textarea>
      <button class="todo-form__button">Edit</button>
    </template>
    <template v-else>
      <input class="todo-form__title" type="text" v-model="title">
      <textarea class="todo-form__description" v-model="description"></textarea>
      <button class="todo-form__button">Add</button>
    </template>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: {
    editMode() {
      return this.$store.state.Todos.editMode;
    },
    editableTodo() {
      return this.$store.getters["Todos/getEditableTodo"];
    }
  },
  methods: {
    async handleSumit() {
      if (!this.editMode) {
        await this.$store.dispatch("Todos/SAVE_TODO", {
          title: this.title,
          description: this.description,
          completed: false
        });
      } else {
        await this.$store.dispatch("Todos/UPDATE_TODO", {
          _id: this.editableTodo._id,
          title: this.editableTodo.title,
          description: this.editableTodo.description,
          completed: this.editableTodo.completed
        });

        this.$store.commit("Todos/SET_EDIT_TODO");
      }

      this.title = "";
      this.description = "";
    }
  }
};
</script>

<style scoped>
.todo-form {
  grid-area: TodoForm;
  display: flex;
  flex-direction: column;
  margin-top: 5em;
}

.todo-form__title {
  font-size: 1.5em;
  line-height: 1.5;
  padding: 0 0.5em;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  margin-bottom: 1em;
  width: 100%;
}
.todo-form__description {
  min-height: 7em;
  font-size: 1.5em;
  padding: 0.5em;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  margin-bottom: 1.5em;
  width: 100%;
}

.todo-form__button {
  font-size: 1.5em;
  line-height: 2;
  text-transform: uppercase;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  cursor: pointer;
}
</style>


