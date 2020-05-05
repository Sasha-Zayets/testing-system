<template>
    <v-row>
        <v-col md="12">
            <v-card
                color="#385F73"
                dark
                class="mb-3"
            >
                <v-card-title class="headline">Назва тесту</v-card-title>

                <v-card-subtitle>
                    Опис
                </v-card-subtitle>
            </v-card>
            
            <v-card 
                v-for="(question, index) in questions"
                :key="index"
                class="mb-3"
                >
                <v-card-title class="headline pb-0">
                    {{ question.name }}
                </v-card-title>
                <v-card-actions>
                    <v-radio-group>
                        <v-radio
                            v-for="(item, index) in question.data"
                            :key="index"
                            :label="item.label">
                        </v-radio>
                    </v-radio-group>
                </v-card-actions>
            </v-card>
            <v-btn
                dark
                color="purple"
                class="mt-3"
                @click="sendTest">
                Надіслати
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        questions: [
            {
                name: 'Імя питання??',
                data: [
                    {
                        label: 'Відповідь 1',
                    },
                    {
                        label: 'Відповідь 2',
                    }
                ]
            },
            {
                name: 'Імя питання??',
                data: [
                    {
                        label: 'Відповідь 1',
                    },
                    {
                        label: 'Відповідь 2',
                    }
                ]
            }
        ]
    }),
    methods: {
        sendTest() {
            const id = this.$route.params.id;

            this.$router.push(`/passing/result/${id}`);
        }
    }
}
</script>