import axios from '@/plugins/axios';

const state = {
    nameTest: '',
    descriptionTest: '',
    questions: [],
    loading: false,
}

const getters = {
    nameTest: state => state.nameTest,
    descriptionTest: state => state.descriptionTest,
    questions: state => state.questions,
    loading: state => state.loading,
}

const mutations = {
    setNameTest(state, payload) {
        state.nameTest = payload;
    },
    setDescriptionTest(state, payload) {
        state.descriptionTest = payload;
    },
    setQuestions(state, payload) {
        state.questions = payload;
    },
    setLoading(state, payload) {
        state.loading = payload;
    }
}

const actions = {
    async getTest({ commit }, id) {
        try {
            const result = await axios.post('/api/get-test/', {
                id
            });
            
            if(result.status === 200) {
                const { name, description, questions } = result.data;

                commit('setNameTest', name);
                commit('setDescriptionTest', description);
                commit('setQuestions', questions);
            }
        } catch(error) {
            console.log(error);
        }
    },
    async sendResultTest({ commit }, { id, name, questions}) {
        try {
            commit('setLoading', true);

            const result = await axios.post('/api/result-test', {
                id, 
                name, 
                questions
            });
            
            if(result.status === 200) {
                commit('setQuestions', []);
                commit('setLoading', false);
                return result;
            }
        } catch(error) {
            console.log(error);
            commit('setLoading', false);
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