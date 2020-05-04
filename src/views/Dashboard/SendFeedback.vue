<template>
    <v-row>
        <v-col md="8">
            <title-dashboard>Відгуки</title-dashboard>
            <v-row>
                <v-col md="8">
                    <v-card class="pa-3 mb-3">
                        <h2 class="title mb-2">Залишити відгук</h2>
                        <v-text-field 
                            v-model="name"
                            label="Ім'я"
                            ></v-text-field>
                        <v-textarea
                            v-model="reviews" 
                            label="Текст відгуку"
                            rows="2"
                            ></v-textarea>
                        <v-switch
                            v-model="showName"
                            label="Не показувати ім'я на сайті"
                            ></v-switch>
                        <v-btn color="primary">Відправити</v-btn>
                    </v-card>
                    <v-card class="pa-2 mt-2">
                        <h2 class="headline mb-2">Останні відгуки:</h2>
                        <v-list three-line>
                            <template v-for="item in items">
                                <v-list-item
                                    :key="item.title"
                                    >
                                    <v-list-item-avatar>
                                        <v-img :src="item.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-html="item.title"></v-list-item-title>
                                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import TitleDashboard from '@/components/TitleDashboard';
export default {
    data: () => ({
        name: '',
        reviews: '',
        showName: false,
        items: [
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
            },
        ],
    }),
    components: {
        TitleDashboard
    }
}
</script>