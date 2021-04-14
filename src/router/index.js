import Vue from 'vue'
import VueRouter from 'vue-router'

import GalleryView from '../views/GalleryView.vue'
import HonorsHallView from '../views/HonorsHallView.vue'
import MyPageView from '../views/MyPageView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        {
            path:'/home',
            component:HomeView,
        },
        {
            path:'/gallery',
            component:GalleryView,
        },
        {
            path:'/honors',
            component:HonorsHallView,
        },
        {
            path:'/mypage',
            component:MyPageView,
        },

    ]
})