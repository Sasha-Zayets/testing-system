<template>
    <v-row
        align="center"
        justify="center"
        >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Вхід до системи</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="authForm">
                        <v-text-field
                            label="Логін"
                            name="login"
                            v-model="login"
                            :rules="[rules.required]"
                            prepend-icon="mdi-account"
                            type="text"
                        />

                        <v-text-field
                            id="password"
                            v-model="password"
                            label="Пароль"
                            name="password"
                            prepend-icon="mdi-lock-question"
                            :rules="[rules.required, rules.counter]"
                            type="password"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{name: 'registration'}">Реєстрація</router-link>
                    <v-spacer />
                    <v-btn 
                        @click="authentication"
                        :loading="loading"
                        color="primary"
                        >
                        Увійти
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
export default {
    data: () => ({
        login: '',
        password: '',
        rules: {
            required: value => !!value || 'Поле обов\'язкове',
            counter: value => value.length >= 6 || 'Мінімум 6 символів',
        }
    }),
    computed: {
        ...mapGetters('auth', ['loading'])
    },
    methods: {
        ...mapActions('auth', ['loginUser']),
        authentication() {
            const authForm = this.$refs.authForm;
            if(authForm.validate()) {
                const { login, password } = this;
                this.loginUser({ login, password })
                    .then(() => {
                        this.$router.push({ name: 'welcome' });
                    });
            }
        }
    }
}
</script>