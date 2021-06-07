import request from '@/util/request'

const api = {
  getRoutes: '/api/blade-system/menu/routes'
}

export const getRoutes = ()=>  {
  return request({
    url: api.getRoutes,
    methods: 'GET'
  })
}

export interface Menu {
  action: number,
  actionName: string,
  alias: string,
  category: number,
  categoryName: string,
  children: Menu[],
  code: string,
  hasChildren: boolean,
  id: string,
  isDeleted: number,
  isOpen: number,
  name: string,
  parentId: number,
  parentName: string,
  path: string,
  remark: string,
  sort: number,
  source: string
}
export default {
  getRoutes,
}