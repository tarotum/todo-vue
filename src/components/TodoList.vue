<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :id="todo._id"
      :title="todo.title"
      :description="todo.description"
      :isCompleted="todo.completed"
    />
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    async getTodos() {
      const result = await this.$http.get("http://localhost:3000/");
      if (result.status === 200) {
        this.todos = result.data;
      }
    }
  },
  mounted() {
    this.getTodos();
  }
};
</script>
<style scoped>
.todo-list {
  grid-area: TodoList;
  overflow-y: scroll;
  max-height: 70vh;
  margin-top: 5em;
  padding-right: 1em;
}
</style>

