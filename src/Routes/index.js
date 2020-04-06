import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "../components/Home/HomeComponent";
import SirModel from "../components/Sir/Model/ModelComponent"
import SirExample from "../components/Sir/Example/ExampleComponent"
import SirTheory from "../components/Sir/Theory/TheoryComponent"


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/sir/model',
        component: SirModel,
    },
    {
        path: '/sir/example',
        component: SirExample,
    },
    {
        path: '/sir/theory',
        component: SirTheory,
    },
];

export default new VueRouter({
    routes
});