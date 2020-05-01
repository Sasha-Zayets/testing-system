<template>
    <v-card class="pa-4">
        <v-form
            ref="form">
            <v-text-field
                v-model="name"
                :rules="[rules.required]"
                label="Назва тесту" />
            <v-text-field
                v-model="description"
                label="Опис" />
            <v-btn
                @click="created" 
                color="primary">Створити</v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        name: '',
        description: '' ,
        rules: {
            required: v => !!v || 'Поле обов\'язкове',
        }
    }),
    methods: {
        created() {
            const validForm = this.$refs.form.validate();
            if(validForm) {
                this.$emit('addDescription', {name, description})
            }
        }
    }
}
</script>