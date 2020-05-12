const state = {
    snackbarOptions: {
        show: false,
        type: 'success',
        message: '',
    }
}

const getters = {
    snackbarOptions: state => state.snackbarOptions,
}

const mutations = {
    setSnackbarOptions(state, payload) {
        state.snackbarOptions = {
            ...state.snackbarOptions,
            ...payload
        }
    }
}

const actions = {
    fadeSnackbar({ commit }) {
        commit('setSnackbarOptions', {
            show: false
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}