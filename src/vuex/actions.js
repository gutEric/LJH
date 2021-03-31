
export default {
  buyVIP({ commit }, e) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("setMemberInfo", {
          userStatus: e.LevelBuyID,
          vipLevel: e.LevelBuyID
        })
        resolve('购买成功！')
      },
        localStorage.setItem('UserMemberuserStatus', e.LevelBuyID),
        localStorage.setItem('vipLevel', e.LevelBuyID)
      )
    }, 1000)
  }
}
