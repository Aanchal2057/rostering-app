import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/schedule',
    component: lazy(() => import('../../views/apps/calendar/schedules'))
  },
  {
    path: '/apps/approve',
    component: lazy(() => import('../../views/apps/calendar/approve'))
  },
  {
    path: '/apps/settings',
    component: lazy(() => import('../../views/apps/settings'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/clients/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/staffs/list',
    component: lazy(() => import('../../views/apps/staffs/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  }
]

export default AppRoutes
