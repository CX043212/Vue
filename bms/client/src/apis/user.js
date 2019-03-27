import http from "../utils/http";

export const login = (params)=>http("post","/api/bms/login",params);