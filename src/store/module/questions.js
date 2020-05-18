import axios from '@/plugins/axios';

const state = {
    listTest: [],
    resultTest: [],
    loadContent: false,
}

const getters = {
    listTest: state => state.listTest,
    resultTest: state => state.resultTest,
    loadContent: state => state.loadContent,
}

const mutations = {
    setListTest(state, payload) {
        state.listTest = payload;
    },
    setRemoveItemTest(state, id) {
        const newTest = state.listTest.filter(item => {
            if(item._id !== id) return item;
        });

        state.listTest = newTest;
    },
    setResultTest(state, payload) {
        state.resultTest = payload;
    },
    setLoadContent(state, payload) {
        state.loadContent = payload;
    }
}

const actions = {
    async saveQuestions({ commit, rootState }, { name, description, questions}) {
        try {
            const { token } = rootState.auth;
            const result = await axios.post('/api/add-test/', {
                token,
                name,
                description,
                questions
            });
            
            if(result.status === 200) {
                commit('global/setSnackbarOptions', {
                    type: 'success',
                    show: true,
                    message: 'Тест було успішно створено'
                }, { root: true });

                return result;
            } else {

            }
        } catch(error) {
            console.log(error);
        }
    },
    async allQuestions({ commit, rootState }) {
        try {
            commit('setLoadContent', true);

            const { token } = rootState.auth;
            const result = await axios.post('/api/all-test/', {
                token
            });

            if(result.status === 200) {
                commit('setListTest', result.data);
                commit('setLoadContent', false);
            }
        } catch(error) {
            console.log(error);
            commit('setLoadContent', false);
        }
    },
    async removeQuestion({ commit, rootState }, idPost) {
        try {
            const { token } = rootState.auth;
            const result = await axios.delete('/api/remove-test/', {
                data: {
                    token,
                    idPost
                }
            });

            if(result.status === 200) {
                commit('setRemoveItemTest', idPost);
                commit('global/setSnackbarOptions', {
                    type: 'success',
                    show: true,
                    message: 'Тест було видалено'
                }, { root: true });
                return result;
            }
        } catch(error) {
            console.log(error);
            commit('global/setSnackbarOptions', {
                type: 'error',
                show: true,
                message: 'Сталась помилка при видаленні тесту'
            }, { root: true });
        }
    },
    async getResultTest({ commit }, id) {
        try {
            commit('setLoadContent', true);

            const result = await axios.get(`/api/result-test/${id}`);
            
            console.log(result);
            if(result.status === 200) {
                commit('setResultTest', result.data);
                commit('setLoadContent', false);
            }
        } catch(error) {
            console.log(error);
            commit('setLoadContent', false);
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