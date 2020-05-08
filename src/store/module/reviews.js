import axios from '@/plugins/axios';

const state = {
    reviews: []
}

const getters = {
    reviews: state => state.reviews,
}

const mutations = {
    setReviews(state, payload) {
        state.reviews = [...state.reviews, ...payload];
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
                console.log(result);
                commit('setReviews', {...result.data});
                return result;
            }
        } catch(error) {
            console.log(error);
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