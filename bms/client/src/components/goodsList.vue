<template>
  <div class="goods page">
    <el-table :data="goodsList.data" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="160"></el-table-column>
      <el-table-column prop="province" label="省份" width="160"></el-table-column>
      <el-table-column prop="city" label="市区" width="160"></el-table-column>
      <el-table-column prop="address" label="地址" width="400"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="160"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="goodsList.count"
      @current-change="handleChange($event)"
    ></el-pagination>
    <!-- 编辑模特框 -->
    <el-dialog title="请修改信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.date"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.province"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.city"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.zip"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSend()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  data() {
    return {
      dialogVisible: false,
      form:{},
      modifyData:{},
      page:1
    };
  },
  computed: {
    ...Vuex.mapState({
      goodsList: state => state.goodsList
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleData: "handleData",
      handleModifyGoods:"handleModifyGoods",
      goodsDel:"handleDel"
    }),
    handleDel(row){
      this.goodsDel(JSON.stringify({
        id:row.id,
        page:this.page,
        limit:10
      }))
    },
    handleClick(row) {
      //需要修改的数据
      this.modifyData = {...row};

      //双数据绑定的数据
      this.form = {...row};
      
     
      this.dialogVisible = true;
    },
    handleChange(page) {
      this.page = page;
      this.handleData(page);
    },
    //修改
    handleSend(){
      this.dialogVisible = false;

     
      this.handleModifyGoods(JSON.stringify({
        newData:this.form,
        oldData:this.modifyData,
        limit:10,
        page:this.page
      }))
    }
  }
};
</script>

<style lang="">
.goods {
  margin: 0 auto;
}
</style>
