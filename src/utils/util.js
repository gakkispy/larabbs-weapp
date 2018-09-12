import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (data, format='YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(data, format).fromNow()
}

const getCurrentPageUrl = (app) => {
  // 获取加载的页面
  let pages = app.getCurrentPages()
  // 获取当前页面对象
  let currentPage = pages[pages.length -1]
  // 当前页面 url
  let url = currentPage.route

  return url
}

export default {
  diffForHumans,
  getCurrentPageUrl
}
