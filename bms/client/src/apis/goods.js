import http from "../utils/http";

export const goodsList = (page=1)=>http("get","/goodsList?page="+page+"&limit=10")
export const modifyGoods = (params)=>http("post","/modifyGoods",params)
export const GoodsDel = (params)=>http("post","/goodsDel",params)