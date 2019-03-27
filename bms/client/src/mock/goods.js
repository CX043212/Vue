import Mock from "mockjs";

import dataBase from "../utils/database";

//  /goodsList
Mock.mock(/\/goodsList/,"get",dataBase.pageGoods);
Mock.mock(/\/modifyGoods/,"post",dataBase.modifyGoods)
Mock.mock(/\/goodsDel/,"post",dataBase.GoodsDel);