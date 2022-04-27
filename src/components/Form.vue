<template>
  <div class="hello">
    <div v-for="(group, index) in formData.question_groups" :key="index">
      <div class="question-group-title">{{ `${index+1}. ${group.title}` }}</div>
      <div v-for="(question, i) in group.questions" :key="i">
        <div class="question-title">{{ `(${i+1}) ${question.title}` }}</div>
        <Question :inputItems="question.inputItems"/>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../utils/data'
import factory from '../utils/DataModel'
import Question from './Question.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      formData: {}
    }
  },
  components: {
    Question,
  },
  mounted() {
    this.formData = factory(data)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question-group-title {
  text-align: left;
  font-size: 20px;
}

.question-title {
  text-align: left;
  font-size: 16px;
}
</style>
