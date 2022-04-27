<template>
  <div class="question-group">
    <div class="question" v-for="(inputItem, index) in inputItems" :key="index">
      <component :is="compNam(inputItem.type)" :inputInstance="inputItem"/>
    </div>
  </div>
</template>

<script>
import RadioInput from './InputItems/RadioInput.vue'
import TextInput from './InputItems/TextInput.vue'

export default {
  name: 'Question',
  props: ['inputItems'],
  components: {
    RadioInput,
    TextInput,
  },
  computed: {
    compNam() {
      return (typ) => {
        switch (typ) {
          case 'radio':
            return 'RadioInput'
          case 'text':
            return 'TextInput'
        }
      }
    }
  },
}
</script>

<style scoped>
.question-group {
  border: 5px solid rgb(0, 162, 255);
  border-radius: 10px;
  margin-bottom: 10px;
  width: 60%;
  height: 50px;
  display: flex;
}

.question {
  margin-right: 20px;
}
</style>