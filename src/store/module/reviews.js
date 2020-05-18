import axios from '@/plugins/axios';

const state = {
    reviews: [],
    loading: false,
}

const getters = {
    reviews: state => state.reviews,
    loading: state => state.loading,
}

const mutations = {
    setReviews(state, payload) {
        state.reviews = [...payload];
    },
    setNewResponse(state, payload) {
        state.reviews.unshift(payload);
    },
    setLoading(state, payload) {
        state.loading = payload;
    }
}

const actions = {
    async addResponse({ commit }, { name, description, showOnSite }) {
        try {
            const result = await axios.post('/api/add-review/', { 
                name, 
                description, 
                showOnSite 
            });
            if(result.status === 200) {
                commit('setNewResponse', {
                    name,
                    description,
                    showOnSite
                });
                commit('global/setSnackbarOptions', {
                    type: 'success',
                    show: true,
                    message: 'Відгук успішно додано'
                }, { root: true });
                return result;
            }
        } catch(error) {
            console.log(error);
            commit('global/setSnackbarOptions', {
                type: 'error',
                show: true,
                message: 'Сталась помилка при відправленні відгуку'
            }, { root: true });
        }
    },
    async getReviews({ commit }) {
        try {
            commit('setLoading', true);

            const result = await axios.get('/api/all-reviews');
            
            if(result.status === 200) {
                commit('setReviews', result.data);
                commit('setLoading', false);
                return result;
            }
        } catch(error) {
            console.log(error);
            commit('setLoading', false);
            commit('global/setSnackbarOptions', {
                type: 'error',
                show: true,
                message: 'Сталась помилка при завантаженні відгуку'
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