<template>
    <v-radio-group>
        <v-list-item
            v-for="(answer, index) in question.answers"
            :key="index">
            <v-list-item-action>
                <v-radio
                    v-model="answer.correct"
                    :name="'asdasd'"
                    color="primary"
                ></v-radio>
            </v-list-item-action>
            <v-list-item-content>
                <v-text-field 
                    label="Відповідь"
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