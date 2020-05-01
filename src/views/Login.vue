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
                    <v-form>
                    <v-text-field
                        label="Логін"
                        name="login"
                        v-model="login"
                        prepend-icon="mdi-account"
                        type="text"
                    />

                    <v-text-field
                        id="password"
                        v-model="password"
                        label="Пароль"
                        name="password"
                        prepend-icon="mdi-lock-question"
                        type="password"
                    />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{name: 'registration'}">Реєстрація</router-link>
                    <v-spacer />
                    <v-btn color="primary">Увійти</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        login: '',
        password: ''
    })
}
</script>