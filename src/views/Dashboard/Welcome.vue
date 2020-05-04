<template>
    <v-row>
        <v-col md="6">
            <h1 class="display-2 mb-2">Ласкаво просимо</h1>
            <p class="subtitle-1">
                Ми раді, що ви завітали до нашого сервісу,
                <br>
                Ви цілком безкоштовно маєте можливість: <strong>скласти та провести</strong> тестування,
                серед учні або ж студентів
            </p>
            <v-divider class="mb-2" />
            <p class="subtitle-1">
                Для того, щоб користуватись сервісом на повну, 
                ми рекомендуємо Вам заповнити Ваш профіль,
                для цього перейдіть за посиланням нижче
            </p>
            <v-btn
                :to="{name: 'settings'}" 
                color="primary"
                >Налаштування профілю</v-btn>
        </v-col>
        <v-col md="6">
            <v-img src="https://www.staffingproxy.com/assets/svgs/homepage/home-job-seekers.svg"></v-img>
        </v-col>
    </v-row>
</template>