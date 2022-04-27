<template>
  <div @click="validate">RadioInput: {{ inputInstance.title }}</div>
</template>

<script>
export default {
  name: 'RadioInput',
  props: ['inputInstance'],
  methods: {
    validate() {
      console.log(this.inputInstance.validate() + this.inputInstance.title)
    },
  },
  
}
</script>

<style scoped>

</style>