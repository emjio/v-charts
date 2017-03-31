export default {
  name: '瀑布图',
  type: 'waterfall',
  data: [
    {
      name: '瀑布图',
      data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      },
      settings: {}
    },
    {
      name: '设定总量瀑布图',
      data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      },
      settings: {
        totalNum: 24
      }
    },
    {
      name: '设定总量并且子项超标瀑布图',
      data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 20 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      },
      settings: {
        totalNum: 24
      }
    },
    {
      name: '设定数据类型瀑布图',
      data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 0.1 },
          { '活动': '睡觉', '时间': 0.2 },
          { '活动': '打豆豆', '时间': 0.3 }
        ]
      },
      settings: {
        totalNum: 1,
        dataType: 'percent'
      }
    },
    {
      name: '设定总量及其他名称名称瀑布图',
      data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      },
      settings: {
        totalNum: 24,
        totalName: '总时间',
        remainName: '剩余时间'
      }
    }
  ]
}
