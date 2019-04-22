<template>
  <div class="todo">
    <h4 class="todo__title">{{ title }}</h4>
    <p class="todo__description">{{ description }}</p>
    <label for="checkbox">{{ completed }}</label>
    <input class="todo__checkbox" type="checkbox" id="checkbox" v-model="completed">
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      completed: this.isCompleted
    };
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


