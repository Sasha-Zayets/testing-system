<template>
    <v-row>
        <v-col md="12">
            <v-card
                color="#385F73"
                dark
                class="mb-3"
            >
                <v-card-title class="headline">{{ nameTest }}</v-card-title>

                <v-card-subtitle>
                    {{ descriptionTest }}
                </v-card-subtitle>
            </v-card>

            <v-card
                class="mb-3"
            >
                <v-card-title class="headline">
                    Введіть ваше ім'я
                </v-card-title>

                <v-card-subtitle>
                    <v-text-field 
                        v-model="name"
                        label="Ім'я"
                        />
                </v-card-subtitle>
            </v-card>
            
            <v-card 
                v-for="(question, index) in questions"
                :key="index"
                class="mb-3"
                >
                <v-card-title class="headline pb-0">
                    {{ question.field }}
                </v-card-title>
                <v-card-actions>
                    <v-radio-group
                        v-model="question.rightAnswer"
                        >
                        <v-radio
                            v-for="(item, index) in question.answers"
                            :key="index"
                            :label="item.value">
                        </v-radio>
                    </v-radio-group>
                </v-card-actions>
            </v-card>
            <v-btn
                dark
                color="purple"
                :loading="loading"
                class="mt-3"
                @click="sendTest"
                >
                Надіслати
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        name: ''
    }),
    computed: {
        ...mapGetters('passing', [
            'nameTest',
            'descriptionTest',
            'questions',
            'loading'
        ])
    },
    created() {
        const { id } = this.$route.params;
        this.getTest(id);
    },
    methods: {
        ...mapActions('passing', ['getTest', 'sendResultTest']),
        sendTest() {
            const id = this.$route.params.id;
            const data = {
                id,
                name: this.name,
                questions: this.questions
            }
            
            this.sendResultTest(data)
                .then(() => {
                    this.$router.push({ name: 'send-test' });
                });
        }
    }
}
</script>