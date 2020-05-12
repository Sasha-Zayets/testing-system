import axios from '@/plugins/axios';

const state = {
    token: '',
    loading: false,
}

const getters = {
    loading: state => state.loading,
}

const mutations = {
    setToken(state, payload) {
        state.token = payload;
    },
    setLoading(state, payload) {
        state.loading = payload;
    }
}

const actions = {
    async loginUser({ commit }, { login, password }) {
        try {
            commit('setLoading', true);

            const result = await axios.post('/api/login/', {
                login,
                password
            });
            if(result.status === 200) {
                const { token } = result.data;

                localStorage.setItem('token', token);
                commit('setToken', token);
            }
            commit('setLoading', false);
            return result;
        } catch(error) {
            commit('setLoading', false);
            console.log(error);
        }
    },
    async registration({ commit }, { login, password }) {
        try {
            commit('setLoading', true);

            const result = await axios.post('/api/registration/', {
                login,
                password
            });

            commit('setLoading', false);
            if(result.status === 200) {
                return result;
            }
        } catch(error) {
            commit('setLoading', false);
            console.log(error);
        }
    },
    logOut({ commit }) {
        try {
            localStorage.removeItem('token');
            commit('setToken', '');
        } catch(error) {
            console.log(error);
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