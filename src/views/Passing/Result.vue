<template>
    <v-card
        class="mb-3"
    >
        <v-card-title class="headline">
            Тест пройдено, результати були надіслані
        </v-card-title>
       
        <v-card-actions>
            <a
                href="#"
                @click.prevent="$router.go(-1)"
                >
                Пройти ще раз
            </a>
        </v-card-actions>
    </v-card>
</template>