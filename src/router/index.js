import Vue from 'vue'
import VueRouter from 'vue-router'

// layouts
import Auth from '@/layouts/Auth';
import Dashboard from '@/layouts/Dashboard';

// Auth page
import Login from '@/views/Login';
import Registration from '@/views/Registration';

// Dashboard page
import Welcome from '@/views/Dashboard/Welcome';
import ListTests from '@/views/Dashboard/ListTests';
import Create from '@/views/Dashboard/Create';
import Settings from '@/views/Dashboard/Settings';
import Help from '@/views/Dashboard/Help';
import SendFeedback from '@/views/Dashboard/SendFeedback';
import Result from '@/views/Dashboard/Result';

Vue.use(VueRouter)

const routes = [
    {
        path: '/auth',
        component: Auth,
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login
            },
            {
                path: 'registration',
                name: 'registration',
                component: Registration
            }
        ]
    },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'welcome',
                component: Welcome
            },
            {
                path: 'list-tests',
                name: 'list-test',
                component: ListTests
            },
            {
                path: 'created',
                name: 'create-test',
                component: Create
            },
            {
                path: 'settings',
                name: 'settings',
                component: Settings
            },
            {
                path: 'send-feedback',
                name: 'send-feedback',
                component: SendFeedback
            },
            {
                path: 'help',
                name: 'help',
                component: Help
            },
            {
                path: 'result',
                name: 'result-test',
                component: Result
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
