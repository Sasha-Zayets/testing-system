<template>
    <v-row>
        <v-col md="12">
            <title-dashboard>Результати проходження тесту: "Назва тесту"</title-dashboard>
            <v-card class="pa-2">
                <v-simple-table
                    :dense="dense"
                    :fixed-header="fixedHeader"
                    :height="height"
                    >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Ім'я користувача</th>
                                <th class="text-left">Кількість балів</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import TitleDashboard from '@/components/TitleDashboard';
export default {
    data: () => ({
        dense: false,
        fixedHeader: false,
        height: 300,
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 10,
            },
        ]
    }),
    components: {
        TitleDashboard
    }
}
</script>