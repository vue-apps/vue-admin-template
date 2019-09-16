const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  options: state => state.user.options,
  userdata: state => state.user.userdata
}
export default getters
