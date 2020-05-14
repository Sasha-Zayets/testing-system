import axios from '@/plugins/axios';

const state = {
    settings: {
        name: '',
        lastName: '',
        descriptions: ''
    },
    loading: false
}

const getters = {
    settings: state => state.settings,
    loading: state => state.loading,
}

const mutations = {
    setSettings(state, payload) {
        state.settings= {
            ...payload
        }
    },
    setLoading(state, payload) { 
        state.loading = payload;
    }
}

const actions = {
    async getSettings({ commit, rootState }) {
        try {
            const { token } = rootState.auth;
            const result = await axios.post('/api/all-settings/', {
                token
            });
            
            if(result.status === 200) {
                commit('setSettings', result.data);
            } else {
                throw result.message;
            }
        } catch(error) {
            commit('global/setSnackbarOptions', {
                type: 'error',
                show: true,
                message: error
            }, { root: true });
        }
    },
    async updateSettings({ commit, rootState }, payload) {
        try {
            commit('setLoading', true);
            
            const { token } = rootState.auth;
            const result = await axios.put('/api/update-settings', {
                token,
                ...payload
            });
            
            if(result.status === 200) {
                commit('setSettings', result.data);
                commit('setLoading', false);
                commit('global/setSnackbarOptions', {
                    type: 'success',
                    show: true,
                    message: 'Налаштування оновлено успішно'
                }, { root: true });
            } else {
                throw result.message;
            }
        } catch(error) {
            commit('setLoading', false);
            commit('global/setSnackbarOptions', {
                type: 'error',
                show: true,
                message: error
            }, { root: true });
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}