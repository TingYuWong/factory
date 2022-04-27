<template>
  <div class="hello">
    <div v-for="(group, index) in formData.question_groups" :key="index">
      <div v-for="(question, i) in group.questions" :key="i">
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
