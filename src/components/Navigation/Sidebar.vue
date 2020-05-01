<template>
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        >
        <v-list dense>
            <template v-for="item in items">
                <v-row
                    v-if="item.heading"
                    :key="item.heading"
                    align="center"
                >
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-col>
                    <v-col
                        cols="6"
                        class="text-center"
                    >
                        <a
                            href="#!"
                            class="body-2 black--text"
                        >EDIT</a>
                    </v-col>
                </v-row>
                <v-list-item
                    v-else
                    :to="{name: item.name}"
                    :exact="true"
                    :key="item.text"
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawer: {
            type: Boolean
        }
    },
    data: () => ({
        items: [
            { icon: 'mdi-home-account', text: 'Головна', name: 'welcome' },
            { icon: 'mdi-format-list-bulleted', text: 'Список тестів', name: 'list-test' },
            { icon: 'mdi-plus-circle-outline', text: 'Cтворити тест', name: 'create-test' },
            { icon: 'mdi-account-cog-outline', text: 'Налаштування', name: 'settings' },
            { icon: 'mdi-message', text: 'Надіслати відгук', name: 'send-feedback' },
            { icon: 'mdi-help-circle', text: 'Допомога', name: 'help' },
        ],
    })
}
</script>