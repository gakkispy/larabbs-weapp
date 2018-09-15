import wepy from 'wepy'
import api from '@/utils/api'

export default class unreadCount extends wepy.mixin {
  data = {
    // 轮训
    interval: null,
    // 未读消息数
    unreadCount: 0
  }
  // 页面显示
  onShow() {
    this.updateUnreadCount()
    this.interval = setInterval(() => {
      this.updateUnreadCount()
    }, 30000)
  }
  // 页面隐藏
  onHide() {
    // 关闭轮询
    clearInterval(this.interval)
  }
  // 设置未读消息数
  updateUnreadCount() {
    this.unreadCount = this.$parent.globalData.unreadCount
    this.$apply()

    if (this.unreadCount) {
      // 设置 badge
      wepy.setTabBarBadge({
        index: 1, // tabBar的哪一项，从左边算起,
        text: this.unreadCount.toString() // 显示的文本，超过 3 个字符则显示成“…”,
      })
    } else {
      // 移除 badge
      wepy.removeTabBarBadge({
        index: 1 // tabBar的哪一项，从左边算起,
      })
    }
  }
}
