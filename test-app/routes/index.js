import myPage from '../pages/form/index.vue'
import Index from '../pages'
 
const allRoutes = [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/mypage',
      name: 'page',
      component: myPage
    }
  ];


export default allRoutes;