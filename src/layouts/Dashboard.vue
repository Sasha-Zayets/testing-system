<template>
	<v-app id="inspire">
		<sidebar :drawer="drawer" />

		<v-app-bar
			:clipped-left="$vuetify.breakpoint.lgAndUp"
			app
			color="blue darken-3"
			dark
			>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title
				style="width: 300px"
				class="ml-0 pl-4"
				>
				<span class="hidden-sm-and-down">Testing System</span>
			</v-toolbar-title>
		
			<v-spacer />
			<v-btn 
				:to="{name: 'welcome'}"
				icon
				>
				<v-icon>mdi-home-circle</v-icon>
			</v-btn>
			<router-link
				:to="{name: 'settings'}">
				<v-avatar
					size="32px"
					item>
					<v-img
						src="https://image.flaticon.com/icons/svg/1077/1077012.svg"
						alt="Vuetify"
					/>
				</v-avatar>
			</router-link>
			<v-btn 
				@click="logOutUser"
				icon
				>
					<v-icon>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-content>
		<v-snackbar
			:color="snackbarOptions.type"
			v-model="snackbarOptions.show"
			>
			{{ snackbarOptions.message }}
			<v-btn
				color="white"
				text
				@click="fadeSnackbar"
			>
				Закрити
			</v-btn>
		</v-snackbar>
  </v-app>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import Sidebar from '@/components/Navigation/Sidebar';

export default {
    props: {
        source: String,
    },
    data: () => ({
        dialog: false,
        drawer: true,
	}),
	computed: {
		...mapGetters('global', ['snackbarOptions']),
	},
	created() {
		const token = localStorage.getItem('token');

		if(token) this.setToken(token);
	},
	methods: {
		...mapMutations('auth', ['setToken']),
		...mapActions('auth', ['logOut']),
		...mapActions('global', ['fadeSnackbar']),
		logOutUser() {
			this.logOut()
				.then(() => {
					this.$router.push({ name: 'home' });
				});
		}
	},
    components: {
        Sidebar
	}
}
</script>