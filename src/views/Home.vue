<template>
    <v-app>
        <v-app-bar
            :fixed="true"
			app
			color="#02152b"
			dark
            class="app-bar"
			>
			<v-toolbar-title
				style="width: 300px"
				class="ml-0 pl-4"
				>
                <v-img max-width="200" src="/images/logo.png"></v-img>
			</v-toolbar-title>
		</v-app-bar>
        
        <section class="home-section">
            <v-container>
                <v-row>
                    <v-col md="4" class="d-flex flex-column justify-center">
                        <h1 class="display-2 mb-2">Вітаємо</h1>
                        <p class="subtitle-1">
                            Раді, що Ви завітали до нашої платформи для створення
                            та проходження тестів. <br>
                        </p>
                        <div class="d-flex">
                            <v-btn
                                :to="{ name: 'login' }"
                                color="#52a4ff"
                                dark
                                >
                                Вхід
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                :to="{ name: 'registration' }"
                                color="#113f8f"
                                dark
                                >
                                Реєстрація
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col 
                        offset-md="2" 
                        md="6" 
                        class="d-flex align-items-center">
                        <v-img src="/images/notebook.png"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </v-app>
</template>

<style lang="scss">
.app-bar {
    position: relative !important;
}

.home-section {
    flex-grow: 2;
    width: 100%;
    height: 100%;
}
</style>
