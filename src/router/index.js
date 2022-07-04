import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.jsx'),  
  },
  {
    path: '/ahead',
    name: 'ahead',
    redirect: '/interFace',
    component: () => import('@/views/ahead/index.jsx'),
    children: [
      {
        path: '/interFace',
        name: 'interFace',
        component: () => import('@/components/frontStage/interFace.jsx')
      }
    ]
  },
  {
    path: '/regular',
    name: 'regular',
    component: () => import('@/views/regular/index.jsx')
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router