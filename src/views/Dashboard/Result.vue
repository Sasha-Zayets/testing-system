<template>
    <v-row>
        <v-col md="12">
            <title-dashboard>Результати проходження тесту: {{ name }}</title-dashboard>
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
                <v-simple-table
                    :dense="dense"
                    :fixed-header="fixedHeader"
                    >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Ім'я користувача</th>
                                <th class="text-left">Кількість балів</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="resultTest.length > 0">
                                <tr 
                                    v-for="item in resultTest" 
                                    :key="item.name_user"
                                    >
                                    <td>{{ item.name_user }}</td>
                                    <td>{{ item.scores }}</td>
                                </tr>
                            </template>
                            <h2 
                                class="subtitle-1 pa-3" 
                                v-else
                                >
                                Тест не пройшов жоден з користувачів
                            </h2>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 
import TitleDashboard from '@/components/TitleDashboard';
export default {
    data: () => ({
        dense: false,
        fixedHeader: false,
    }),
    computed: {
        ...mapGetters('questions', [
            'resultTest', 
            'loadContent',
            'name'
        ])
    },
    created() {
        const { id } = this.$route.params;

        this.getResultTest(id);
    },
    methods: {
        ...mapActions('questions', ['getResultTest']),
    },
    components: {
        TitleDashboard
    }
}
</script>