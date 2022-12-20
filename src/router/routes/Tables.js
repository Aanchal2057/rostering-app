import { lazy } from 'react'

const TablesRoutes = [
  {
    path: '/tables/reactstrap',
    component: lazy(() => import('../../views/tables/reactstrap'))
  }
]

export default TablesRoutes
