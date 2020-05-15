import axios from '@/plugins/axios';

const state = {
    nameTest: '',
    descriptionTest: '',
    questions: [],
}

const getters = {
    nameTest: state => state.nameTest,
    descriptionTest: state => state.descriptionTest,
    questions: state => state.questions,
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}