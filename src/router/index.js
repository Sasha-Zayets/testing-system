import Vue from 'vue'
import VueRouter from 'vue-router'

// layouts
import Auth from '@/layouts/Auth';
import Dashboard from '@/layouts/Dashboard';
import Passing from '@/layouts/Passing';
// Auth page
import Login from '@/views/Auth/Login';
import Registration from '@/views/Auth/Registration';

// Dashboard page
import Welcome from '@/views/Dashboard/Welcome';
import ListTests from '@/views/Dashboard/ListTests';
import Create from '@/views/Dashboard/Create';
import Settings from '@/views/Dashboard/Settings';
import Help from '@/views/Dashboard/Help';
import SendFeedback from '@/views/Dashboard/SendFeedback';
import Result from '@/views/Dashboard/Result';

// Passing page
import PassingTest from '@/views/Passing/Test';
import ResultTest from '@/views/Passing/Result';

Vue.use(VueRouter)

const routes = [
    {
        path: '/auth',
        component: Auth,
        meta: {
            requiresAuth: false
        },
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
        meta: {
            requiresAuth: true
        },
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
    },
    {
        path: '/passing',
        component: Passing,
        meta: {
            requiresAuth: false,
            openUsers: true
        },
        children: [
            {
                path: ':id',
                name: 'passing-test',
                component: PassingTest
            },
            {
                path: 'result/:id',
                name: 'result',
                component: ResultTest
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(token) 
            next();
        else 
            next({ name: 'login' });
    } else {
        if(to.matched.some(record => record.meta.openUsers)) {
            next();
        } else {
            if(token) 
                next({ name: 'welcome' });
            else 
                next();
        }
    }
})

export default router;
