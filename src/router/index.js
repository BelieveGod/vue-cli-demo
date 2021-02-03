import Vue from "vue"
import VueRouter from "vue-router";

import LayoutTest from "../view/LayoutTest";

Vue.use(VueRouter);

const R = (name) => () => import(`@/view/${name}.vue`);

const router=new VueRouter({
    routes:[
        {name:'home',path:'/', component: R('home')},
        {name:'page1',path:'/page1',component: R('Page1')},
        {name:'page2',path:'/page2',component: R('Page2')},
        {
            name:'user',
            path:'/user/:id',
            component: R('User'),
            children:[
                {
                    name:'profile',
                    path:'profile',
                    component:R('user/Profile'),
                },
                {
                    name:'posts',
                    path:'posts',
                    component:R('user/Posts')
                },
            ]
        },
    ]
});

export default router;