<template>
  <div class="table">
    <!--工具条-->

    <el-form :inline="true" :model="filters" class="toolbar demo-form-inline" labelWidth="220px">
      <el-form-item class="tool-input">
        <el-button icon="plus" @click="handleAdd" type="primary">新增</el-button>
      </el-form-item>
      <el-form-item class="tool-input">
        <el-input icon="search" v-model="filters.name" placeholder="请输入站点名称" @click="getUsers"></el-input>
      </el-form-item>
    </el-form>

    <!--<el-row :gutter="10" style="margin-left: 0;margin-right: 0;">-->
      <!--<el-table class="strobeList" :data="userList" v-loading="Listloading" element-loading-text="拼命加载中" stripe border style="width: 100%;" :highlight-current-row="true">-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column label="操作" width="180">-->
            <!--<template scope="scope">-->
              <!--<el-button class="edit-btn" type="text"  size="small"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
              <!--<el-button class="delete-btn" type="text" size="small"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
            <!--</template>-->
          <!--</el-table-column>-->
        <!--</el-col>-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column prop="remark" label="备注">-->
          <!--</el-table-column>-->
        <!--</el-col>-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column prop="creatTime" label="创建时间":formatter="dateFormat">-->
          <!--</el-table-column>-->
        <!--</el-col>-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column prop="macAddress" label="设备编码">-->
          <!--</el-table-column>-->
        <!--</el-col>-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column prop="position" width="180" label="地址">-->
          <!--</el-table-column>-->
        <!--</el-col>-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column prop="simMessage" label="SIM信息">-->
          <!--</el-table-column>-->
        <!--</el-col>-->
        <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
          <!--<el-table-column prop="name" label="站点名称">-->
          <!--</el-table-column>-->
        <!--</el-col>-->
      <!--</el-table>-->
    <!--</el-row>-->




    <!--用户列表-->
    <el-table class="strobeList" :data="userList" v-loading="Listloading" element-loading-text="拼命加载中" stripe border style="width: 100%;" :highlight-current-row="true">
      <!--<el-table-column prop="infoId" label="#" width="60">-->
      <!--</el-table-column>-->
      <el-table-column prop="name" label="站点名称" min-width="120">
      </el-table-column>
      <el-table-column prop="simMessage" label="SIM信息" min-width="160">
      </el-table-column>
      <!--<el-table-column prop="sectionType" label="断面设置" width="120">-->
      <!--</el-table-column>-->
      <el-table-column prop="position" label="地址" min-width="180">
      </el-table-column>
      <el-table-column prop="macAddress" label="设备编码" min-width="120">
      </el-table-column>
      <el-table-column prop="creatTime" label="创建时间" min-width="120" :formatter="dateFormat">
      </el-table-column>
      <el-table-column prop="remark" label="备注" min-width="160">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button class="edit-btn" type="text"  size="small"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button class="delete-btn" type="text" size="small"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--用户列表-->

    <!--分页-->
    <el-row style="padding-top: 10px;" v-if="userList.length">
      <el-col :span="24">
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :page-size="pageSize" :page-sizes="[1, 5, 10, 20, 30, 40, 50]" :total="total" @current-change="handleCurrentChange" @size-change="handleSizeChange" style="float: right; padding-right: 0;">
        </el-pagination>
      </el-col>
    </el-row>
    <!--分页-->

    <!--编辑框-->
    <el-dialog title="编辑" v-model="editFormVisible" size="small">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <!--<el-form-item label="id" prop="infoId">-->
          <!--<el-input type="infoId" v-model.number="editForm.infoId" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="站点名称" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SIM信息" prop="simMessage">
          <el-input v-model="editForm.simMessage"></el-input>
        </el-form-item>
        <!--<el-form-item label="断面设置">-->
          <!--<el-select v-model="editForm.sectionType"  placeholder="请选择断面设置" style="width: 100%;">-->
            <!--<el-option v-for="(item, index) in sectionTypeList" :key="item.index" :label="item.text" :value="item.val">{{item.text}}-->
            <!--</el-option>-->
            <!--&lt;!&ndash;<el-option label="矩形" :value="2"></el-option>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-option label="U型" :value="3"></el-option>&ndash;&gt;-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item label="地址" prop="position">
          <el-input type="textarea" v-model="editForm.position"></el-input>
        </el-form-item>
        <el-form-item label="设备编码" prop="macAddress">
          <el-input type="textarea" v-model="editForm.macAddress"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" prop="creatTime">
          <el-date-picker v-model="editForm.creatTime" type="date" placeholder="选择日期" size="large" :formatter="dateFormat" style="width: 100%;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="editForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit('editForm')" :loading="editLoading">确 定</el-button>
      </span>
    </el-dialog>
    <!--新增框-->
    <el-dialog title="新增" v-model="addFormVisible" size="small">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <!--<el-form-item label="id" prop="infoId">-->
          <!--<el-input type="infoId" v-model.number="addForm.infoId" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="站点名称" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SIM信息" prop="simMessage">
          <el-input v-model="addForm.simMessage"></el-input>
        </el-form-item>
        <!--<el-form-item label="断面设置" prop="sectionType">-->
          <!--<el-select v-model="addForm.sectionType" placeholder="请选择断面设置" style="width: 100%;">-->
            <!--<el-option label="梯形" value="1"></el-option>-->
            <!--<el-option label="矩形" value="2"></el-option>-->
            <!--<el-option label="U型" value="3"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item label="地址" prop="position">
          <el-input type="textarea" v-model="addForm.position"></el-input>
        </el-form-item>
        <el-form-item label="设备编码" prop="macAddress">
          <el-input type="textarea" v-model="addForm.macAddress"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" prop="creatTime">
          <el-date-picker v-model="addForm.creatTime" type="date" placeholder="选择日期" :formatter="dateFormat" style="width: 100%;">
            <!--:picker-options="pickerOptions0"-->
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="remark" v-model="addForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit('addForm')" :loading="addLoading">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {getUserList, addUser, removeUser} from 'src/api/api'
  export default {
    name: 'management',
    components: {},
    data() {
      return {
        editLoading: false,
        addLoading: false,
        filters: {
          name: ''
        },
//        pickerOptions0: {
//          disabledDate(time) {
//            return time.getTime() < Date.now() - 8.64e7
//          }
//        },
        total: 0,
        page: 1,
        pageSize: 5,
        Listloading: false,
        editFormVisible: false,
        addFormVisible: false,
        sectionTypeList: [
          {val: 1, text: '梯形'},
          {val: 2, text: '矩形'},
          {val: 3, text: 'U形'}
        ],
        //编辑界面数据
        editForm: {
          infoId: 0,
          simMessage: '',
          name: '',
          macAddress: '',
//          sectionType: '',
          position: '',
          creatTime: '',
          remark: ''
        },
        editFormRules: {
          name: [{required: true, message: '请输入站点名称', trigger: 'blur, change'}],
          macAddress: [{required: true, message: '请输入设备编码'}],
//          sectionType: [
//            { required: true, message: '请选择断面设置信息', trigger: 'change' }
//          ],
          simMessage: [{required: true, message: '请输入SIM卡信息'}],
//          position: [{required: true, message: '请输入地址'}],
          creatTime: [{required: true, message: '请输入创建时间'}]
//          remark: [{required: true, message: '请输入备注信息'}]
        },
//        新增界面数据
        addForm: {
          infoId: '',
          simMessage: '',
          name: '',
          macAddress: '',
//          sectionType: '',
          position: '',
          creatTime: new Date(),
          remark: ''
        },
        addFormRules: {
          name: [{required: true, message: '请输入站点名称'}],
          macAddress: [{required: true, message: '请输入设备编码'}],
//          sectionType: [
//            {required: true, message: '请选择断面设置信息'}
//          ],
          simMessage: [{required: true, message: '请输入SIM卡信息'}],
//          position: [{required: true, message: '请输入地址'}],
          creatTime: [{required: true, message: '请输入创建时间'}]
//          remark: [{required: true, message: '请输入备注信息'}]
        },
        //闸门列表
        userList: []
      }
    },
    methods: {
      dateFormat(row, column) {
        let date = row[column.property]
        if (date === undefined) {
          return ""
        }
        return this.$moment(date).format("YYYY-MM-DD")
      },
//      optionVal(value, obj) {
//        let newObj = {}
//        if (value === '请选择') {
//          return value
//        } else {
//          for (let i = 0; i < obj.length; i++) {
//            newObj[obj[i].text] = obj[i].val
//            return newObj[value]
//          }
//        }
//      },
      handleCurrentChange(val) {
        this.page = val
        this.getUsers()
      },
      handleSizeChange(val, curVal) {
        this.pageSize = val
        this.page = curVal
        this.getUsers()
      },
//      重置新增框
//      resetForm(formName) {
//        this.$refs[formName].resetFields()
//      },
//      显示编辑框
      handleEdit(index, row) {
//        console.log(index, row)
//        console.log(row.infoId)
        this.editFormVisible = true
        this.editForm = Object.assign({}, row)
      },
//      编辑
      editSubmit(editForm) {
        this.$refs[editForm].validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true
              let para = Object.assign({}, this.editForm)
              switch (para.sectionType) {
                case "梯形":
                  para.sectionType = 1
                  break
                case "矩形":
                  para.sectionType = 2
                  break
                case "U形":
                  para.sectionType = 3
                  break
                default:
                  break
              }
              addUser(para).then((res) => {
                if (res.data.code === 200) {
                  this.editLoading = false
                  this.$message({
                    showClose: true,
                    message: '修改' + res.data.message,
                    type: 'success'
                  })
                  this.editFormVisible = false
                  this.getUsers()
                } else {
                  this.$message({
                    showClose: true,
                    message: res.data.message,
                    type: 'warning'
                  })
                  this.editFormVisible = false
                  this.getUsers()
                  return false
                }
              }).catch((res) => {
                console.log(res.data.message)
                return false
              })
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      //显示新增框
      handleAdd() {
        this.addFormVisible = true
//        this.resetForm('addForm')
//        this.$refs['addForm'].resetFields()
        this.$refs.addForm.resetFields()
      },
      //新增
      addSubmit(addForm) {
        this.$refs[addForm].validate((valid) => {
          if (valid) {
            this.$confirm('确认新增吗？', '提示', {}).then(() => {
              this.addLoading = true
              let para = Object.assign({}, this.addForm)
              addUser(para).then((res) => {
                if (res.data.code === 200) {
                  this.addLoading = false
                  this.$message({
                    showClose: true,
                    message: '新增' + res.data.message,
                    type: 'success'
                  })
                  this.addFormVisible = false
                  this.getUsers()
                } else {
                  this.$message({
                    showClose: true,
                    message: res.data.message,
                    type: 'warning'
                  })
                  this.addFormVisible = false
                  this.getUsers()
                  return false
                }
              }).catch((res) => {
                console.log(res.data.message)
                return false
              })
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //删除
      handleDelete(index, row) {
//        console.log(index, row)
        this.$confirm('确认删除该条数据吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.Listloading = true
          let params = {infoId: row.infoId}
          removeUser(params).then((res) => {
            if (res.data.code === 200) {
              this.$message({
                showClose: true,
                message: '删除' + res.data.message,
                type: 'success'
              })
              this.Listloading = false
              this.getUsers()
            } else {
              this.$message({
                showClose: true,
                message: res.data.message,
                type: 'warning'
              })
              this.Listloading = false
              this.getUsers()
              return false
            }
          }).catch((reject) => {
            console.log(reject)
            return false
          })
        })
      },
      //获取闸门列表
      getUsers() {
        this.Listloading = true
        let params = {
          currentPage: this.page,
          name: this.filters.name,
          pageSize: this.pageSize
        }
        getUserList(params)
          .then((res) => {
            this.userList = res.data.list
            this.total = res.data.total
            this.Listloading = false
          }).catch((rej) => {
            console.log(rej)
          })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {
          })
      }
    },
    mounted() {
      this.getUsers()
    }
  }
</script>

<style scoped lang="stylus">
  .table
    .strobeList
      .edit-btn
        padding: 7px 9px
        &:hover
          border: 1px solid #408080
          padding: 7px 9px
      .delete-btn
        color: red
        padding: 7px 9px
        &:hover
          border: 1px solid red
          padding: 7px 9px
    .toolbar
      display: flex
      justify-content: space-between
      background-color: #f2f2f2
      padding: 10px
      margin: 10px 0
      .tool-input
        margin-bottom: 0
</style>
