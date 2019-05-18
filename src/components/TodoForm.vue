<template>
  <form class="todo-form" @submit.prevent="handleSumit">
    <input class="todo-form__title" type="text" v-model="title" autofocus autocomplete="false">
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      title: null
    };
  },
  methods: {
    isFormValid() {
      if (this.title && this.title.trim()) {
        return true;
      }
      return false;
    },
    async handleSumit() {
      if (this.isFormValid()) {
        await this.$store.dispatch("Todos/SAVE_TODO", {
          title: this.title.trim(),
          completed: false
        });
      }

      this.title = "";
    }
  }
};
</script>

<style scoped>
.todo-form {
  width: 100%;
  display: flex;
  margin-bottom: 1em;
}
.todo-form__title {
  flex-grow: 1;
  padding: 0.3em 1em;
  font-size: 1.5em;
}
</style>


