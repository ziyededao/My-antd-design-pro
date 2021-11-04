export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/hook',
    name: 'Hook用法',
    icon: 'smile',
    // component: './Welcome',
    routes: [
      {
        name: 'useMemo的用法',
        path: '/hook/myusememo',
        component: './Myhooks/Myusememo',
      },
      {
        name: 'useCallback的用法',
        path: '/hook/myusecallback',
        component: './Myhooks/Myusecallback',
      },
      // {
      //   name: 'useMemo的用法',
      //   path: '/hook/myusememo',
      //   component: './Myhooks/Myusememo',
      // },
    ],
  },
  {
    path: '/kuayu',
    name: '跨域解决方法',
    icon: 'crown',
    // access: 'canAdmin',
    // component: './Admin',
    routes: [
      {
        path: '/kuayu/jsonp',
        name: 'Jsonp原理',
        icon: 'smile',
        component: './Kuayu/Jsonp',
      },
      {
        path: '/kuayu/cors',
        name: 'Cors原理',
        icon: 'smile',
        component: './Kuayu/Cors',
      },

      // {
      //   component: './404',
      // },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
