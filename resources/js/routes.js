import Accueil from './components/accueil.vue';
import Viewarticles from "./components/articles/Viewarticles.vue"
import Addarticle from "./components/articles/Addarticle.vue"
import Editarticle from "./components/articles/Editarticle.vue"

export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },
    {
        name: 'viewarticles',
        path: '/listart',
        component: Viewarticles
    },
    {
        name: 'addarticle',
        path: '/addarticle',
        component: Addarticle
    },
    {
        name: "editarticle",
        path: "/editarticle/:id",
        component: Editarticle
    },

];