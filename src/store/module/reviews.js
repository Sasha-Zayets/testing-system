import axios from '@/plugins/axios';

const state = {
    reviews: []
}

const getters = {
    reviews: state => state.reviews,
}

const mutations = {
    setReviews(state, payload) {
        state.reviews = [...payload];
    },
    setNewResponse(state, payload) {
        state.reviews.unshift(payload);
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
            const result = await axios.get('/api/all-reviews');
            
            if(result.status === 200) {
                commit('setReviews', result.data);
                return result;
            }
        } catch(error) {
            console.log(error);
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