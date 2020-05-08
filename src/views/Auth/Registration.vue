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
                    <v-toolbar-title>Реєстрація</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="form">
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
                            :rules="[rules.required, rules.counter]"
                            prepend-icon="mdi-lock-question"
                            type="password"
                        />
                        <v-text-field
                            id="confirmPassword"
                            v-model="confirmPassword"
                            label="Повторіть пароль"
                            name="password"
                            :rules="[rules.required, rules.confirm(password)]"
                            prepend-icon="mdi-lock-question"
                            type="password"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{name: 'login'}">Вхід до системи</router-link>
                    <v-spacer />
                    <v-btn 
                        @click="send"
                        color="primary"
                        >
                        Реєстрація
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data: () => ({
        login: '',
        password: '',
        confirmPassword: '',
        rules: {
            required: value => !!value || 'Поле обов\'язкове',
            counter: value => value.length >= 6 || 'Мінімум 6 символів',
            confirm: password => value => value === password || 'Паролі не співпадають',
        }
    }),
    methods: {
        ...mapActions('auth', ['registration']),
        send() {
            const form = this.$refs.form;
            if(form.validate()) {
                const { login, password } = this;
                this.registration({ login, password })
                    .then(() => {
                        this.$router.push({ name: 'login' });
                    });
            }
        }
    }
}
</script>