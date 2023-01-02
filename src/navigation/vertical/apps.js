import { Settings, Calendar, Home, FileText, Circle, ShoppingCart, User, Users, Briefcase  } from 'react-feather'
export default [

  {
    id:'dashboards',
    title:'Dashboard',
    icon:<Home size={20}/>,
    navLink: '/dashboard/ecommerce'
   },
  {
   id:'clients',
   title:'Clients',
   icon:<Briefcase size={20}/>,
   navLink: '/apps/clients/list'
  },
  {
    id: 'user',
    title: 'Staffs',
    icon: <User size={20} />,
    navLink: '/apps/user/list'
  },
  {
    id: 'calender',
    title: 'Calender',
    icon: <Calendar size={20} />,
    children: [
      {
        id: 'Roster',
        title: 'Roster',
        icon: <Calendar size={20}/>,
        navLink: '/apps/calendar'
      },
      {
        id: 'Upcoming list',
        title: 'Upcoming Schedules list',
        icon: <Circle size={12} />,
        navLink: '/apps/schedule'
      
      },
      {
        id: 'Approve',
        title: 'Approve Tasks',
        icon: <Circle size={12} />,
        navLink: '/apps/approve'
      }
    ]
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },
  
{
  id: 'settings',
  title: 'Settings',
  icon: <Settings size={20} />,
  navLink:'/apps/settings'
}
]
