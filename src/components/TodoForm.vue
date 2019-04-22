<template>
  <form class="todo-form">
    <input class="todo-form__title" type="text">
    <textarea class="todo-form__description"></textarea>
    <button class="todo-form__button">Add todo</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm"
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
}
.todo-form__description {
  min-height: 7em;
  font-size: 1.5em;
  padding: 0.5em;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  margin-bottom: 1.5em;
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


