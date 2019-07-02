import defaultSettings from '@/settings'

const { siteName, siteTitle, siteLogo, showSettings, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  siteName: siteName,
  siteTitle: siteTitle,
  siteLogo: siteLogo,
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

