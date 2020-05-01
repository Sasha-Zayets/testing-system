<template>
    <v-row>
        <v-col lg="8">
            <title-dashboard>Створення тесту</title-dashboard>
            <template v-if="showQuestions">
                <v-card
                    class="mb-4"
                    v-for="(question, index) in questions"
                    :key="index">
                    <v-col 
                        lg="12">
                        <p class="caption text-sm-right">
                            Питання №{{index + 1}}
                        </p>
                        <v-textarea
                            class="mx-2"
                            v-model="question.field"
                            label="Напишіть запитання"
                            rows="1"
                            ></v-textarea>
                        <v-divider></v-divider>
                        <p class="subtitle-1 font-weight-medium mt-3">Відповідь:</p>
                        <answers 
                            :question="question" 
                            @removeAnswer="removeAnswers" />
                        <v-btn 
                            color="success" 
                            dark
                            @click="addAnswer(question)">Додати відповідь</v-btn>
                    </v-col>
                </v-card>
                <v-row>
                    <v-col lg="12" class="d-flex">
                        <v-btn 
                            @click="addQuestion"
                            color="secondary">
                            <v-icon left>mdi-plus-thick</v-icon>
                            Додати питання
                        </v-btn>
                        <v-spacer />
                        <v-btn 
                            @click="saveQuestion"
                            color="success">
                            <v-icon left>mdi-content-save</v-icon>
                            Зберегти
                        </v-btn>
                    </v-col>
                </v-row>
            </template>
            <info-test v-else></info-test>
        </v-col>
    </v-row>
</template>

<script>
import TitleDashboard from '@/components/TitleDashboard';
import Answers from '@/components/CreateTest/Answers';
import InfoTest from '@/components/CreateTest/InfoTest';

export default {
    data: () => ({
        showQuestions: false,
        questions: [
            {
                field: 'Питання?',
                answers: [
                    {
                        value: '',
                        correct: false
                    }
                ],
                rightAnswer: ''
            }
        ]
    }),
    methods: {
        addAnswer(question) {
            question.answers.push({
                value: '',
                correct: false
            })
        },
        removeAnswers({question, index}) {
            const newQuestin = question.answers.filter((item, ind) => {
                if(index !== ind) {
                    return item;
                }
            });
            question.answers = newQuestin;
        },
        addQuestion() {
            this.questions.push({
                field: '',
                answers: [{ value: '', correct: false }],
                rightAnswer: ''
            })
        },
        saveQuestion() {
            console.log(this.questions);
        }
    },
    components: {
        TitleDashboard,
        Answers,
        InfoTest
    }
}
</script>