<template>
    <v-row>
        <v-col sm="8">
            <title-dashboard>Список тестів</title-dashboard>
            <v-card>
                <v-list two-line subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Тут буде знаходитись питання</v-list-item-title>
                            <v-list-item-subtitle>Підпис до запитання</v-list-item-subtitle>
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
                        <v-list-item-action>
                            <v-btn 
                                class="mx-2" 
                                fab dark small 
                                color="primary"
                                @click="editQuestion">
                                <v-icon dark>mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-action>
                        <v-list-item-action class="ml-0">
                            <v-btn 
                                class="mx-2" 
                                fab dark small 
                                color="red"
                                @click="removeQuestion">
                                <v-icon dark>mdi-close</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Show your status</v-list-item-title>
                            <v-list-item-subtitle>Your status is visible to everyone</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import TitleDashboard from '@/components/TitleDashboard';

export default {
    methods: {
        editQuestion() {
            console.log('edit')
        },
        removeQuestion() {
            console.log('remvoe')
        }
    },
    components: {
        TitleDashboard
    }
}
</script>