export default {
  userInfo: '' || { 'account': localStorage.getItem('UserInfoAccount'), 'password': localStorage.getItem('UserInfopPssword') },
  userStatus: '' || localStorage.getItem('UserMemberuserStatus'),
  vipLevel: '' ||  localStorage.getItem('UserMembervipLevel'),
  token: '' || localStorage.getItem('UserToken')
}
