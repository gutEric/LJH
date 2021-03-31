export default {
  memberInfo(state) {
    
    switch (parseInt(state.userStatus)) {
      case 0:
        return '普通会员'
        break
      case 1:
        return 'vip会员'
        break
      case 2:
        return 'vip1会员'
        break
      case 3:
        return 'vip2会员'
        break
      case 4:
        return 'vip4会员'
        break
    }
  }
}
