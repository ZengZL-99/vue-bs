import request from '@/utils/request'


export function get_test(params) {
  return request({
    url: '/hello',
    method: 'get',
    params
  })
}
