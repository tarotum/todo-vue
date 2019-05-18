<template>
  <div class="todo" :class="{completed: todo.completed, editing: todo._id == editedTodoId}">
    <input class="todo__checkbox" type="checkbox" v-model="todo.completed" @change="handleChange">
    <h4 class="todo__title">{{ todo.title }}</h4>
    <input
      class="todo__edit-title"
      type="text"
      autocomplete="false"
      v-focus="todo._id == editedTodoId"
      v-model="todo.title"
      @keyup.enter="doneEditigTodo"
      @keyup.esc="cancelEditing"
      @blur="doneEditigTodo"
    >
    <button v-if="!editedTodoId" class="todo__edit" type="button" @click="editTodo(todo._id)">edit</button>
    <button v-else class="todo__edit" type="button" @click="cancelEditing">cancel</button>
    <button class="todo__remove" type="button" @click="removeTodo">remove</button>
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
  data() {
    return {
      tempTitle: null,
      editedTodoId: null
    };
  },
  methods: {
    handleChange() {
      this.$store.dispatch("Todos/UPDATE_TODO", this.todo);
    },
    removeTodo() {
      this.$store.dispatch("Todos/REMOVE_TODO", this.todo._id);
    },
    editTodo(todoId) {
      this.tempTitle = this.todo.title;
      this.editedTodoId = todoId;
    },
    doneEditigTodo() {
      if (this.editedTodoId === null) return;
      this.$store.dispatch("Todos/UPDATE_TODO", this.todo);
      this.editedTodoId = null;
    },
    cancelEditing() {
      this.editedTodoId = null;
      this.todo.title = this.tempTitle;
    }
  },
  directives: {
    focus(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
.todo {
  padding: 1em;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1em;
  border-bottom: 1px solid #000;
}
.todo__checkbox {
  margin-right: 1em;
}
.todo__title {
  margin: 0;
  flex-grow: 1;
}
.todo__edit-title {
  display: none;
  margin: 0;
  flex-grow: 1;
}
.todo.editing .todo__title {
  display: none;
}
.todo.editing .todo__edit-title {
  display: block;
}
</style>


