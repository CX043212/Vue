//import Mock from "mockjs";
const Mock = require("mockjs");
const queryString = require("querystring");
let data = Mock.mock({
    "data|100":[
        {   
            "id|+1":0,
            "date":'@date(yyyy-MM-dd)',
            "name":'@cname()',
            "province":'@province()',
            "city":"@city",
            "address":"@county(true)",
            "zip":"@zip()",
            "img":"@image('200x100', '#50B347', '#FFF', 'Mock.js')"
        }
    ]
})


/*
    page     limit 10 
    1         0-9
    2         10-19
    3         20 -29


    data.data == [{},{}];


    index<=page*limit-1  &&  index>=(page-1)*limit

*/
function filterData(page,limit) { 
    let arr =  data.data.filter((item,index)=>{
        return  index<=page*limit-1  &&  index>=(page-1)*limit
    })
    
    return {
        data:arr,
        count:data.data.length
    }
}

function pageGoods(options){
  

    let {page,limit} = queryString.parse(options.url.split("?")[1]);

    return filterData(page,limit);
}






function modifyGoods(options){
    let {newData,oldData,page,limit} = JSON.parse(options.body);
        
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].id == oldData.id){
            data.data[i] = newData;
            break;
        }
    }

   return filterData(page,limit);

}


function GoodsDel(options){
   
    let {id,page,limit} = JSON.parse(options.body);
    console.log({id,page,limit})
    let index;

    for(var i=0;i<data.data.length;i++){
        if(data.data[i] && data.data[i].id == id){
            index = i;
            break;
        }
    }

    //delete删除数组 与splice删除数组有什么不同  delete删除的时候数据会删除但是会用一个空来代替当前的数据位置

    //delete data.data[index];

    data.data.splice(index,1);

    console.log(data.data);
    return filterData(page,limit)
}









export default {
    pageGoods,
    modifyGoods,
    GoodsDel
}

