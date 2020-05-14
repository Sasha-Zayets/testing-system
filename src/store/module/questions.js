import axios from '@/plugins/axios';

const state = {
    listTest: [],
}

const getters = {
    listTest: state => state.listTest,
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
            const { token } = rootState.auth;
            const result = await axios.post('/api/all-test/', {
                token
            });

            if(result.status === 200) {
                commit('setListTest', result.data);
            }
        } catch(error) {
            console.log(error);
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}