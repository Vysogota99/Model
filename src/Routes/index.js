import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "../components/Home/HomeComponent";
import SirModel from "../components/Sir/Model/ModelComponent"
import SirExample from "../components/Sir/Example/ExampleComponent"
import SirTheory from "../components/Sir/Theory/TheoryComponent"
import SeirdModel from "../components/Seird/Model/ModelComponent"

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
    {
        path: '/seird',
        component: SeirdModel,
    },
];

export default new VueRouter({
    routes
});