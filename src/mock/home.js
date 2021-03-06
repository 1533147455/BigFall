import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          vue: Mock.Random.float(100, 8000, 0, 2),
          wechat: Mock.Random.float(100, 8000, 0, 2),
          ES6: Mock.Random.float(100, 8000, 0, 2),
          Redis: Mock.Random.float(100, 8000, 0, 2),
          React: Mock.Random.float(100, 8000, 0, 2),
          springBoot: Mock.Random.float(100, 8000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        pieChart: [
          {
            name: 'HTML5',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'CSS3',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'JavaScript',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ES6',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '其它',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        barChart: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        lineChart: {
          date: ['2020-10', '2020-11', '2020-12', '2021-01', '2021-02', '2021-03', '2021-04'],
          data: List
        },
        tableData: [
          {
            name: 'HTML',
            browseCount: Mock.Random.integer(100, 1000),
            likeCount: Mock.Random.integer(3000, 5000),
            commentCount: Mock.Random.integer(400, 1000)
          },
          {
            name: 'CSS',
            browseCount: Mock.Random.integer(100, 1000),
            likeCount: Mock.Random.integer(3000, 5000),
            commentCount: Mock.Random.integer(400, 1000)
          },
          {
            name: 'JavaScript',
            browseCount: Mock.Random.integer(100, 1000),
            likeCount: Mock.Random.integer(3000, 5000),
            commentCount: Mock.Random.integer(400, 1000)
          },
          {
            name: 'ES6',
            browseCount: Mock.Random.integer(100, 1000),
            likeCount: Mock.Random.integer(3000, 5000),
            commentCount: Mock.Random.integer(400, 1000)
          },
          {
            name: 'Vue',
            browseCount: Mock.Random.integer(100, 1000),
            likeCount: Mock.Random.integer(3000, 5000),
            commentCount: Mock.Random.integer(400, 1000)
          },
          {
            name: 'HTTP',
            browseCount: Mock.Random.integer(100, 1000),
            likeCount: Mock.Random.integer(3000, 5000),
            commentCount: Mock.Random.integer(400, 1000)
          }
        ]
      }
    }
  }
}
