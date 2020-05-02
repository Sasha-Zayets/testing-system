<template>
    <v-row>
        <v-col md="8">
            <title-dashboard>Налаштування</title-dashboard>
            <v-card class="pa-2">
                <v-row>
                    <v-col md="6" class="justify-center d-flex">
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
                            label="Ім'я" />
                        <v-text-field 
                            label="Прізвище" />
                        <v-textarea 
                            rows="2"
                            label="Опис" />
                        <v-btn color="success">Зберегти</v-btn>
                    </v-col>
                </v-row>
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