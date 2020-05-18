<template>
    <v-row>
        <v-col md="8">
            <title-dashboard>Відгуки</title-dashboard>
            <v-row>
                <v-col md="8">
                    <v-card class="pa-3 mb-3">
                        <h2 class="title mb-2">Залишити відгук</h2>
                        <v-form ref="form">
                            <v-text-field 
                                v-model="name"
                                :rules="[rules.required]"
                                label="Ім'я"
                                ></v-text-field>
                            <v-textarea
                                v-model="description" 
                                :rules="[rules.required]"
                                label="Текст відгуку"
                                rows="2"
                                ></v-textarea>
                            <v-switch
                                v-model="showOnSite"
                                label="Показувати відгук на сайті"
                                ></v-switch>
                            <v-btn 
                                @click="sendResponse"
                                color="primary"
                                >
                                Відправити
                            </v-btn>
                        </v-form>
                    </v-card>
                    <v-progress-circular
                        :size="80"
                        v-if="loading"
                        color="primary"
                        indeterminate
                        ></v-progress-circular>
                    <template v-else>
                        <v-card class="pa-2 mt-2" v-if="reviews && reviews.length > 0">
                            <h2 class="headline mb-2">Останні відгуки:</h2>
                            <v-list three-line>
                                <template v-for="(item, index) in reviews">
                                    <v-list-item
                                        v-if="item.showOnSite === true"
                                        :key="index"
                                        >
                                        <v-list-item-avatar>
                                            <v-img 
                                                src="https://image.flaticon.com/icons/svg/1738/1738691.svg"
                                                ></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.name"></v-list-item-title>
                                            <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-list>
                        </v-card>
                        <h2 class="heading" v-else>Відгуків немає :(</h2>
                    </template>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TitleDashboard from '@/components/TitleDashboard';

export default {
    data: () => ({
        name: '',
        description: '',
        showOnSite: false,
        items: [],
        rules: {
            required: value => !!value || 'Поле обов\'язкове',
            counter: value => value.length >= 6 || 'Мінімум 6 символів',
        }
    }),
    computed: {
        ...mapGetters('reviews', ['reviews', 'loading']),
    },
    created() {
        this.getReviews();
    },
    methods: {
        ...mapActions('reviews', ['addResponse', 'getReviews']),
        sendResponse() {
            const form = this.$refs.form;
            if(form.validate()) {
                const { name, description, showOnSite } = this;
                this.addResponse({
                    name,
                    description,
                    showOnSite
                }).then(() => {
                    form.resetValidation();
                    form.reset();
                });
            }
        }
    },
    components: {
        TitleDashboard
    }
}
</script>