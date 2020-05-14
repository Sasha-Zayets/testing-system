<template>
    <v-row>
        <v-col sm="8">
            <title-dashboard>Список тестів</title-dashboard>
            <v-card>
                <v-list two-line subheader>
                    <v-list-item
                        v-for="(item, index) in listTest"
                        :key="index">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.description }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn 
                                class="mx-2" 
                                fab dark small 
                                color="primary"
                                to="/dashboard/result">
                                <v-icon dark>mdi-chart-sankey</v-icon>
                            </v-btn>
                        </v-list-item-action>
                        
                        <v-list-item-action class="ml-0">
                            <v-btn 
                                class="mx-2" 
                                fab dark small 
                                color="red"
                                @click="showConfirm(item._id)">
                                <v-icon dark>mdi-close</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-dialog
            v-model="dialog"
            max-width="340"
            >
            <v-card>
                <v-card-title class="headline">Бажаєте видалити тест?</v-card-title>
                <v-card-text>
                    Після підтвердження видалення, тест повернути буде не можливо!!!
                </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        text
                        @click="dialog = false"
                    >
                        Скасувати
                    </v-btn>

                    <v-btn
                        color="error"
                        text
                        @click="confirmRemove"
                    >
                        Видалити
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
    </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TitleDashboard from '@/components/TitleDashboard';

export default {
    data: () => ({
        dialog: false,
        idPost: 0
    }),
    computed: {
        ...mapGetters('questions', ['listTest'])
    },
    created() {
        this.allQuestions();
    },
    methods: {
        ...mapActions('questions', ['allQuestions', 'removeQuestion']),
        showConfirm(id) {
            this.idPost = id;
            this.dialog = true;
        },
        confirmRemove() {
            this.removeQuestion(this.idPost)
                .finally(() => this.dialog = false)
        }
    },
    components: {
        TitleDashboard
    }
}
</script>