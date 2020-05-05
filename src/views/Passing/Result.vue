<template>
    <v-card
        class="mb-3"
    >
        <v-card-title class="headline">Назва тесту</v-card-title>

        <v-card-subtitle>
            Опис
        </v-card-subtitle>
        <v-card-actions>
            <router-link 
                :to="{name: 'passing-test', params: { id: $route.params.id }}"
                >
                Пройти ще раз
            </router-link>
        </v-card-actions>
    </v-card>
</template>