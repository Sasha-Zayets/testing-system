<template>
    <v-radio-group v-model="question.value">
        <v-list-item
            v-for="(answer, index) in question.answers"
            :key="index">
            <v-list-item-action>
                <v-radio
                    :name="question.field"
                    color="primary"
                ></v-radio>
            </v-list-item-action>
            <v-list-item-content>
                <v-text-field 
                    :label="`Відповідь ${index + 1}`"
                    v-model="answer.value" />
            </v-list-item-content>
            <v-list-item-action>
                <v-btn 
                    class="mx-2" 
                    fab dark small
                    @click="$emit('removeAnswer', {question, index})" 
                    color="red">
                    <v-icon dark>mdi-close</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-radio-group>
</template>

<script>
export default {
    props: {
        question: {
            type: Object
        }
    }
}
</script>