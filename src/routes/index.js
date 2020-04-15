import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/Index";
import List from "../pages/admin/products/List"
import Edit from "../pages/admin/products/Edit"
import PageNotFound from "../pages/PageNotFound";
import Analysis from "../pages/admin/Analys/Analysis";

export const mainRoutes = [{
  path: '/login',
  component: Login
}, {
  path: '/404',
  component: PageNotFound
}]

export const adminRoutes = [{
  path: '/admin/dashboard',
  component: Index,
  isShow: true,
  title: 'Food plan',
}, {
  path: '/admin/products',
  component: List,
  exact: true,
  isShow: true,
  title: 'Diet management',
}, {
  path: '/admin/products/edit/:id?',
  component: Edit
}, {
  path: '/admin/analy/',
  component: Analysis,
  isShow: true,
  title: 'Analysis'
}
]