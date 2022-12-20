import { Settings, Calendar, FileText, Circle, ShoppingCart, User, Users  } from 'react-feather'
export default [
  {
    id: 'user',
    title: 'Staffs',
    icon: <User size={20} />,
    navLink: '/apps/user/list'
  },
  {
    id: 'roster',
    title: 'Roster',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
    // children: [
    //   {
    //     id: 'invoiceList',
    //     title: 'List',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/list'
    //   },
    //   {
    //     id: 'invoicePreview',
    //     title: 'Preview',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/preview'
    //   },
    //   {
    //     id: 'invoiceEdit',
    //     title: 'Edit',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/edit'
    //   },
    //   {
    //     id: 'invoiceAdd',
    //     title: 'Add',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/invoice/add'
    //   }
    // ]
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
    id: 'payroll',
    title: 'Payroll',
    icon: <Users size={20} />,
    children: [
      {
        id: 'shop',
        title: 'Shop',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/shop'
      },
      {
        id: 'detail',
        title: 'Details',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/product-detail'
      },
      {
        id: 'wishList',
        title: 'Wish List',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/wishlist'
      },
      {
        id: 'checkout',
        title: 'Checkout',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/checkout'
      }
    ]
    
},
{
  id: 'settings',
  title: 'Settings',
  icon: <Settings size={20} />
}
]
