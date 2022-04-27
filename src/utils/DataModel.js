/*
factory將後端撈回來的資料整理成前端需要的格式
到最底層會對應到不同component
*/

export default function factory(jsonData) {
  let formData = {}
  formData = new Sheet()

  if (jsonData.type === 'sheet') {
    if(jsonData.question_groups.length) {
      jsonData.question_groups.forEach(qgroupData => {
        let questionGroupData = buildQGroup(qgroupData)
        formData.question_groups.push(questionGroupData)
      })
    }
  }

  return formData
}

class Sheet {
  constructor() {
    this.question_groups = []
  }
}

class QGroup {
  constructor(qgroupData) {
    this.questions = []
    this.title = qgroupData.title
  }
}

class Question {
  constructor(q) {
    this.inputItems = []
    this.title = q.title
  }
}

class InputItem {
  constructor(item) {
    this.type = item.type
    this.title = item.title
  }
}

export class RadioInput extends InputItem {
  constructor(props) {
    super(props)
  }
  validate() {
    return 'RadioInput validate: '
  }
}

export class TextInput extends InputItem {
  constructor(props) {
    super(props)
  }
  validate() {
    return 'TextInput validate: '
  }
}


function buildQGroup(qgroupData) {
  let qgroupObj = {}
  if(qgroupData.type === 'question_group') {
    qgroupObj = new QGroup(qgroupData)
    qgroupData.questions.forEach(q => {
      let question = buildQuestion(q)
      qgroupObj.questions.push(question)
    })
  }
  return qgroupObj
}

function buildQuestion(q) {
  let qObj = {}
  if(q.type === 'question') {
    qObj = new Question(q)
    q.inputItems.forEach(item => {
      let inputItem = buildInputItem(item)
      qObj.inputItems.push(inputItem)
    })
  }
  return qObj
}

function buildInputItem(item) {
  switch(item.type) {
    case 'text':
      return new TextInput(item)
    case 'radio':
      return new RadioInput(item)
  }
}


