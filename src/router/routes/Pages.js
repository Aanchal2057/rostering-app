import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/login',
    component: import('../../views/pages/authentication/Login'),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/login-v1',
    component: lazy(() => import('../../views/pages/authentication/LoginV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/login-v2',
    component: lazy(() => import('../../views/pages/authentication/LoginV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/pages/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/register-v1',
    component: lazy(() => import('../../views/pages/authentication/RegisterV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/register-v2',
    component: lazy(() => import('../../views/pages/authentication/RegisterV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/forgot-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/forgot-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV2.js')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/profile',
    component: lazy(() => import('../../views/pages/profile'))
  }
  
]

export default PagesRoutes
