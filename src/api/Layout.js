import request from "@/utils/request";

/**
 * 获取分类列表
 * 
 * **/

export function getcategoryList(){
  return request({
    url:'/home/category/head',
    method:'get'
  })
}