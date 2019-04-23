<template>
  <div class="todo">
    <h4 class="todo__title">{{ todo.title }}</h4>
    <p class="todo__description">{{ todo.description }}</p>
    <label for="checkbox">{{ todo.completed }}</label>
    <input
      class="todo__checkbox"
      type="checkbox"
      id="checkbox"
      v-model="todo.completed"
      @change="handleChange"
    >
    <button @click="editTodo">Edit</button>
    <button @click="removeTodo">Remove</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleChange() {
      this.$store.dispatch("updateTodo", this.todo);
    },
    removeTodo() {
      this.$store.dispatch("removeTodo", this.todo._id);
    },
    editTodo() {
      this.$store.commit("toogleEditTodo", this.todo._id);
    }
  }
};
</script>

<style scoped>
.todo {
  color: #fff;
  text-align: left;
  background-color: #1c252d;
  padding: 1.5em 1em;
  margin: 1em 0;
}
.todo:first-child {
  margin-top: 0;
}
.todo:last-child {
  margin-bottom: 0;
}
.todo__title {
  font-size: 1.3em;
  line-height: 1;
  margin: 0;
}
.todo__description {
  margin: 1em 0;
}
</style>


