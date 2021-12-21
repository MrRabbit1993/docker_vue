type routesMapItemType = {
  name: string
  icon?: string
  path: string
  exact?: boolean
  redirect?: string
  key: string
  component?: any
  isNoFormat?: boolean
}
type routesMapType = { [key: string]: routesMapItemType }

export const routesMap: routesMapType = {
  templates: {
    name: 'commonTitle_nest',
    icon: 'thunderbolt',
    path: '/pageCenter/nestRoute',
    exact: true,
    redirect: '/pageCenter/light',
    key: '123'
  },

  login: {
    name: 'commonTitle_login',
    path: '/pageCenter/login',
    exact: true,
    component: 'hello',
    key: '456'
  },

  moderate: {
    path: '/pageCenter/moderate',
    name: 'Moderate of React',
    icon: 'fire',
    isNoFormat: true,
    redirect: '/pageCenter/start',
    key: '789'
  }
}
const pathKey = { path: '/pageCenter/moderate' }
if (typeof pathKey === 'object') {
  const queryData = Object.entries(pathKey)[0] as (keyof routesMapItemType)[]
  const route = Object.values(routesMap).find((item) => {
    const pKey = queryData[0]
    return item[pKey] === queryData[1]
  })
  console.log(route)
}
