const Home = { template: '<div>Home</div>' };
const HelloWorld = { template: '<div>HelloWorld</div>' };

const routes = [
    { path: '/', component: Home },
    { path: 'HelloWorld', component: HelloWorld },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({});

app.use(router);
app.mount('#app');