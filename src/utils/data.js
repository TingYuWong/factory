const data = {
  type: 'sheet',
  question_groups: [
    {
      type: 'question_group',
      title: '跟水果有關ㄉ問題',
      questions: [
        {
          type: 'question',
          title: '最喜歡哪種水果',
          inputItems: [
            {
              type: 'radio',
              title: '芒果'
            },
            {
              type: 'radio',
              title: '葡萄'
            },
            {
              type: 'radio',
              title: '櫻桃'
            }
          ],
        }
      ],
    },
    {
      type: 'question_group',
      title: '跟動物有關ㄉ問題',
      questions: [
        {
          type: 'question',
          title: '最喜歡哪種動物',
          inputItems: [
            {
              type: 'radio',
              title: '狗'
            },
            {
              type: 'radio',
              title: '貓'
            },
            {
              type: 'radio',
              title: '兔子'
            }
          ],
        }
      ],
    },
    {
      type: 'question_group',
      title: '跟顏色有關ㄉ問題',
      questions: [
        {
          type: 'question',
          title: '最喜歡哪種顏色',
          inputItems: [
            {
              type: 'radio',
              title: '粉紅色'
            },
            {
              type: 'radio',
              title: '天空藍'
            },
            {
              type: 'radio',
              title: '祖母綠'
            }
          ],
        },
        {
          type: 'question',
          title: '最討厭哪種顏色',
          inputItems: [
            {
              type: 'radio',
              title: '灰色'
            },
            {
              type: 'radio',
              title: '螢光粉'
            }
          ],
        }
      ],
    },
    {
      type: 'question_group',
      title: '跟食物有關ㄉ問題',
      questions: [
        {
          type: 'question',
          title: '平常晚餐都吃什麼(自由填答)',
          inputItems: [
            {
              type: 'text',
              title: '晚餐都吃什麼'
            },
          ],
        },
      ],
    },
  ],
}

export default data