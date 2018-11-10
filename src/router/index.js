import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
    {
        path: '/login',
        component: () =>
            import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: false,
        children: [{
            path: 'dashboard',
            component: () =>
                import('@/views/dashboard/index'),
            meta: {
                title: 'Dashboard',
                icon: 'dashboard',
                keepAlive: true 
            },
        }]
    },
    {
        path: '/restaurantManagement',
        component: Layout,
        redirect: '/restaurantManagement/restaurantDetails',
        name: 'Restaurant Management',
        meta: {
            title: 'Restaurant Management',
            icon: 'restaurant'
        },
        children: [
            {
                path: 'restaurantDetails',
                name: 'Restaurant Details',
                component: () =>
                    import('@/views/restaurantDetails/index'),
                meta: {
                    title: 'Restaurant Details',
                    icon: 'link',
                    keepAlive: true 
                }
            },
            {
                path: 'subscription',
                name: 'Subscription',
                component: () =>
                    import('@/views/subscription/index'),
                meta: {
                    title: 'Subscription',
                    icon: 'link',
                    keepAlive: true 
                }
            },
        ]
    },
    /*
    {
        path: '/menuPreparation',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Menu Preparation',
                component: () =>
                    import('@/views/menuPreparation/index'),
                meta: {
                    title: 'Menu Preparation',
                    icon: 'form'
                },
            },
            {
                path: 'reviewContent',
                name: 'Review Content',
                component: () =>
                    import('@/views/reviewContent/index'),
                meta: {
                    title: 'Review Content',
                    icon: 'link'
                },
                hidden: true
            },
        ]
    },*/
    {
        path: '/menuManagement',
        component: Layout,
        redirect: '/menuManagement/uploadMenu',
        name: 'Menu Management',
        meta: {
            title: 'Menu Management',
            icon: 'menu',
            keepAlive: true 
        },
        children: [
            {
                path: 'uploadMenu',
                name: 'Upload Menu',
                component: () =>
                    import('@/views/uploadMenu/index'),
                meta: {
                    title: 'Upload Menu',
                    icon: 'link',
                    keepAlive: true 
                }
            },
            {
                 path: 'reviseMenu',
                 name: 'Revise Menu',
                 component: () =>
                     import('@/views/reviseMenu/index'),
                 meta: {
                     title: 'Revise Menu',
                     icon: 'link',
                     keepAlive: true // 需要缓存 
                 },
            },
            {
                path: 'viewDemo',
                name: 'View Demo',
                component: () =>
                    import('@/views/viewDemo/index'),
                meta: {
                    title: 'View Demo',
                    icon: 'link',
                    keepAlive: true // 需要缓存 
                }
            },
            {
                path: 'launchMenu',
                name: 'Launch Menu',
                component: () =>
                    import('@/views/launchMenu/index'),
                meta: {
                    title: 'Launch Menu',
                    icon: 'link',
                    keepAlive: true // 需要缓存 
                }
            },
            {
                path: 'reviewContent',
                name: 'Review Content',
                component: () =>
                    import('@/views/reviewContent/index'),
                meta: {
                    title: 'Review Content',
                    icon: 'link',
                    keepAlive: true // 需要缓存 
                },
                hidden: true
            },
            /*
            {
                path: 'addNewDish',
                name: 'Add New Dish',
                component: () =>
                    import('@/views/addNewDish/index'),
                meta: {
                    title: 'Add New Dish',
                    icon: 'link'
                }
            },
            {
                path: 'reviewContent',
                name: 'Review Content',
                component: () =>
                    import('@/views/reviewContent/index'),
                meta: {
                    title: 'Review Content',
                    icon: 'link'
                },
                hidden: true
            },
            {
                path: 'myDemos',
                name: 'My Demos',
                component: () =>
                    import('@/views/myDemos/index'),
                meta: {
                    title: 'My Demos',
                    icon: 'link'
                }
            },
            */
        ]
    },
    {
        path: '/marketingCampaign',
        component: Layout,
        children: [{
            path: 'index',
            name: 'Marketing Campaign',
            component: () =>
                import('@/views/marketingCampaign/index'),
            meta: {
                title: 'Marketing Campaign',
                icon: 'marketing',
                keepAlive: true 
            }
        }]
    },
    {
        path: '/myAccount',
        component: Layout,
        children: [{
            path: 'index',
            name: 'My Account',
            component: () =>
                import('@/views/myAccount/index'),
            meta: {
                title: 'My Account',
                icon: 'user',
                keepAlive: true 
            }
        }]
    },
    {
        path: '/forgetPassword',
        component: () =>
            import('@/views/forgetPassword/index'),
        hidden: true
    },
    /*
    {
        path: '/yourAccount',
        component: Layout,
        redirect: '/yourAccount/profile',
        name: 'Your Account',
        meta: {
            title: 'Your Account',
            icon: 'user'
        },
        children: [
            {
                path: '/profile',
                name: 'Profile',
                component: () =>
                    import('@/views/profile/index'),
                meta: {
                    title: 'Profile',
                    icon: 'link'
                }
            },
            {
                path: 'settings',
                name: 'Settings',
                component: () =>
                    import('@/views/settings/index'),
                meta: {
                    title: 'Settings',
                    icon: 'link'
                }
            },
        ]
    },
    /*
    {
        path: '/statistics',
        component: Layout,
        children: [{
            path: 'index',
            name: 'Statistics',
            component: () =>
                import('@/views/statistics/index'),
            meta: {
                title: 'Statistics',
                icon: 'form'
            }
        }]
    },
    */
    /*
    {
        path: '/form',
        component: Layout,
        children: [{
            path: 'index',
            name: 'Form',
            component: () =>
                import('@/views/form/index'),
            meta: {
                title: 'Form',
                icon: 'form'
            }
        }]
    },
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'nested',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () =>
                    import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: {
                    title: 'menu1'
                },
                children: [
                    {
                        path: 'menu1-1',
                        component: () =>
                            import('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: {
                            title: 'menu1-1'
                        }
                    },
                    {
                        path: 'menu1-2',
                        component: () =>
                            import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: {
                            title: 'menu1-2'
                        },
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () =>
                                    import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: {
                                    title: 'menu1-2-1'
                                }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () =>
                                    import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: {
                                    title: 'menu1-2-2'
                                }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () =>
                            import('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: {
                            title: 'menu1-3'
                        }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () =>
                    import('@/views/nested/menu2/index'),
                meta: {
                    title: 'menu2'
                }
            }
        ]
    },
    {
        path: 'external-link',
        component: Layout,
        children: [{
            path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
            meta: {
                title: 'externalLink',
                icon: 'link'
            }
        }]
    },
    */
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    //mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
