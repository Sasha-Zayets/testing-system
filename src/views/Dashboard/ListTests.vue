<template>
    <v-row>
        <v-col sm="8">
            <title-dashboard>Список тестів</title-dashboard>
            <v-card>
                <v-list two-line subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Profile photo</v-list-item-title>
                            <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
                        </v-list-item-content>
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
    components: {
        TitleDashboard
    }
}
</script>