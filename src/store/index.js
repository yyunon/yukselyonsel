import { createStore } from 'vuex'

const PageStateE = {
  BlogView: "blogView",
  ContentView: "contentView",
};
const store = createStore({
  state() {
    return {
      PageState:  PageStateE.BlogView,
      ContentTypes: [],
      contentTypeUnderView: "All",
      blogUnderView: {
        id: "",
        title: "",
        contentType: "",
        sourcePath: "",
        content: "",
        createdAt: "",
        logoImagePath: "",
      },
      mobile: false,
    }
  },
  mutations: {
    changePageState(state, payload) {
      state.PageState = payload.state
    },
    changeContentTypeOnView(state, payload) {
      state.ContentTypes.push(payload.newType)
    },
    updateBlogUnderView(state, payload) {
      state.blogUnderView = payload.blog
    },
    updateContentTypeUnderView(state, payload) {
      state.contentTypeUnderView = payload.contentType
    },
    updateMobileState(state, payload) {
      state.mobile = payload.mobile
    },
  },
  actions: {
  },
  modules: {
  }
});

export {PageStateE, store}
