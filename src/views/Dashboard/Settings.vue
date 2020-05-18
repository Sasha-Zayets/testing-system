<template>
    <v-row>
        <v-col md="8">
            <title-dashboard>Налаштування</title-dashboard>
            <v-progress-linear
                v-if="loadContent"
                indeterminate
                color="primary"
                class="mt-3"
                ></v-progress-linear>
            <v-card 
                v-else
                class="pa-2"
                >
                <v-row>
                    <v-col md="6" class="justify-center align-center d-flex">
                        <v-avatar
                            size="125">
                            <img
                                src="https://image.flaticon.com/icons/svg/1077/1077012.svg"
                                alt="John"
                            >
                        </v-avatar>
                    </v-col>
                    <v-col md="6">
                        <v-text-field
                            v-model="settings.name" 
                            label="Ім'я" />
                        <v-text-field 
                            v-model="settings.lastName"
                            label="Прізвище" />
                        <v-textarea
                            v-model="settings.description" 
                            rows="2"
                            label="Опис" />
                        <v-btn
                            @click="saveSettings" 
                            :loading="loading"
                            color="success"
                            >
                            Зберегти
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TitleDashboard from '@/components/TitleDashboard';

export default {
    computed: {
        ...mapGetters('settings', [
            'settings', 
            'loading',
            'loadContent'
        ]),
    },
    created() {
        this.getSettings();
    },
    methods: {
        ...mapActions('settings', ['getSettings', 'updateSettings']),
        saveSettings() {
            this.updateSettings(this.settings);
        }
    },
    components: {
        TitleDashboard
    }
}
</script>