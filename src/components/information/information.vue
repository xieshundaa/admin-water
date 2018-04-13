<template>
  <div class="deviceMessage">
    <!--查询框-->
    <el-form :inline="true" :model="deviceValue" ref="deviceForm" :rules="deviceFormRules" class="demo-form-inline toolbar">
      <el-form-item label="闸门名称：" prop="name" style="margin-bottom: 0;">
        <el-select v-model="deviceValue.name" placeholder="请选择" @change="initChange">
          <el-option v-for="(item,index) in optionList" :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item style="margin-bottom: 0;">-->
        <!--<el-button type="primary" icon="search" @click="searchDevice">查询</el-button>-->
      <!--</el-form-item>-->
    </el-form>
    <div class="device-container">
      <div class="device-content" v-if="deviceList.length">
        <h3>闸门基本信息：</h3>
        <el-row class="device-header">
          <el-col :xs="24" :sm="24" :md="6" :lg="4" style="margin-bottom: 5px;">
            <div class="grid-content bg-purple">闸门名称：{{deviceMessage.name}}</div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="11" :lg="8" style="margin-bottom: 5px;">
            <div class="grid-content bg-purple-light">位置：{{deviceMessage.position}}</div>
          </el-col>
          <!--<el-col :xs="24" :sm="24" :md="3" :lg="3">-->
            <!--<div class="grid-content bg-purple">SIM卡信息：{{deviceMessage.simMessage}}</div>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="6" :lg="4">-->
            <!--<div class="grid-content bg-purple-light">断面设置：{{deviceMessage.sectionType}}</div>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="4" :lg="4">-->
            <!--<div class="grid-content bg-purple-light">水闸通讯地址：{{deviceMessage.macAddress}}</div>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="4" :lg="4">-->
            <!--<div class="grid-content bg-purple-light">remark：{{deviceMessage.remark}}</div>-->
          <!--</el-col>-->
        </el-row>
        <!--<el-row :gutter="8" class="device-messageList">-->
          <!--<el-col :xs="24" :sm="24" :md="8" :lg="8">-->
            <!--<div class="device-wrapper text-blue">-->
              <!--<span>闸位：</span>-->
              <!--<span class="deviceMessage-text">{{deviceWater.gatePosition}}</span>-->
            <!--</div>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="8" :lg="8">-->
            <!--<div class="device-wrapper text-blue">-->
              <!--<span>水位：</span>-->
              <!--<span class="deviceMessage-text">{{deviceWater.waterPosition}}</span>-->
            <!--</div>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="8" :lg="8">-->
            <!--<div class="device-wrapper text-blue">-->
              <!--<span>流量：</span>-->
              <!--<span class="deviceMessage-text">{{deviceWater.flow}}</span>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-row>-->
      </div>
      <div class="device-realList">
        <h3>数据列表：</h3>
        <!--<el-row :gutter="10" style="margin-left: 0;margin-right: 0;">-->
          <!--<el-table :data="deviceList" border style="width: 100%">-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="dataTime" label="上报时间" :formatter="dateFormat">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="totalYearPrice" label="年度水费(元)">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="totalYearFlow" label="年度累计流量(m³)">-->
                <!--<template scope="scope">-->
                  <!--<span v-if="scope.row.totalYearFlow > scope.row.waterLines" style="color: red;">{{scope.row.totalYearFlow}}</span>-->
                  <!--<span v-else >{{scope.row.totalYearFlow}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
            <!--</el-col>-->

            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="totalFlow" label="累计流量(m³)">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="flow" label="瞬时流量(m³/s)">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="waterPosition" label="水位(mm)">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="gatePosition" label="闸位(mm)">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="alarmValue" label="闸位状态">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
            <!--<el-col :xs="2" :sm="2" :md="2" :lg="2">-->
              <!--<el-table-column prop="name" label="闸门名称">-->
              <!--</el-table-column>-->
            <!--</el-col>-->
          <!--</el-table>-->
        <!--</el-row>-->

        <el-table :data="deviceList" border style="width: 100%">
          <el-table-column prop="name" label="闸门名称" min-width="120">
          </el-table-column>
          <el-table-column prop="alarmValue" label="闸位状态" min-width="120">
          </el-table-column>
          <el-table-column prop="gatePosition" label="闸位(mm)" min-width="110">
          </el-table-column>
          <el-table-column prop="waterPosition" label="水位(mm)" min-width="110">
          </el-table-column>
          <el-table-column prop="flow" label="瞬时流量(m³/s)" min-width="140">
          </el-table-column>
          <el-table-column prop="totalFlow" label="累计流量(m³)" min-width="130">
          </el-table-column>
          <el-table-column prop="totalFlow" label="年度累计流量(m³)" min-width="160">
            <template scope="scope">
              <span v-if="scope.row.totalFlow > scope.row.waterLines" style="color: red;">{{scope.row.totalFlow}}</span>
              <span v-else >{{scope.row.totalFlow}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="totalYearPrice" label="年度水费(元)" min-width="130">
          </el-table-column>
          <el-table-column prop="dataTime" label="上报时间" :formatter="dateFormat" min-width="160">
          </el-table-column>
        </el-table>
        <el-row type="flex" class="row-bg realList-footer" justify="end">
          <el-col>
            <el-button type="primary" :disabled="searchRealBtn" :loading="measureLoad" @click="searchRealMessages">召测</el-button>
          </el-col>
          <el-col></el-col>
          <el-col>
            <!--实时数据分页-->
            <el-row v-if="this.deviceList.length">
              <el-col :span="24">
                <el-pagination layout="total, prev, pager, next" :total="total" :page-size="pageSize" @current-change="handleCurrentChange" style="padding-right: 0; float: right;">
                </el-pagination>
              </el-col>
            </el-row>
            <!--实时数据分页-->
          </el-col>
        </el-row>
      </div>

      <div class="device-warnList" style="display: none;">
        <h3>报警履历：</h3>
        <el-table :data="alarmList" border style="width: 100%">
          <el-table-column prop="name" label="闸门名称" width="180">
          </el-table-column>
          <el-table-column prop="alarm" label="闸位状态" min-width="100">
          </el-table-column>
          <el-table-column prop="gatePosition" label="闸位">
          </el-table-column>
          <el-table-column prop="waterPosition" label="水位">
          </el-table-column>
          <el-table-column prop="flow" label="流量">
          </el-table-column>
          <el-table-column prop="totalFlow" label="累计流量" min-width="100">
          </el-table-column>
          <el-table-column prop="dataTime" label="时间" :formatter="dateFormat" width="180">
          </el-table-column>
        </el-table>

        <!--报警履历分页-->
        <el-row style="padding-top: 10px;" v-if="this.alarmList.length">
          <el-col :span="24">
            <el-pagination layout="total, prev, pager, next" :page-size="dangerPageSize" :total="dangerTotal" @current-change="alarmHistoryChange" style="float: right; padding-right: 0;">
            </el-pagination>
          </el-col>
        </el-row>
        <!--报警履历分页-->
      </div>
    </div>
  </div>
</template>

<script>
  import { getUserName, getDevice, searchRealMessage } from 'src/api/api'
//  var timer = ''
//  var realTimer = ''
  export default {
    name: 'information',
    components: {},
    data() {
      return {
        measureLoad: false,
        realTimer: '',
        timer: '',
        //水闸列表
        optionList: [],
        searchRealBtn: true,
        total: 0,
        page: 1,
        pageSize: 10,
        dangerTotal: '',
        dangerPage: 1,
        dangerPageSize: 5,
        deviceWater: {},
        deviceList: [],
        alarmList: [],
        waterLiness: '',
        deviceValue: {
          name: ''
        },
        deviceMessage: {},
        tableData: [],
        deviceFormRules: {
          name: [
            {required: true, message: '请选择水闸名称', trigger: 'change blur'}
          ]
        }
      }
    },
    mounted() {
      this.getUsers()
    },
//    beforeDestroy() {},
    beforeRouteLeave (to, from, next) {
      if (from.path === '/home/information') {
        clearInterval(this.realTimer)
        next()
      }
    },
    methods: {
      initChange() {
        this.searchDevice()
      },
      //获取水闸名称
      getUsers() {
        getUserName().then((res) => {
          this.optionList = res.data
          for (let i = 0; i < this.optionList.length; i++) {
            if (this.optionList[i] === '陈木闸断面') {
//              console.log(i)
              this.optionList.splice(i, 1)
            }
//            console.log(this.optionList)
          }
          this.deviceValue.name = this.optionList[0]
        }).catch((rej) => {
          console.log(rej)
        })
      },
      //拿到实时数据实时数据
      getRealMessage() {
        let params = {
          currentPage: this.page,
          pageSize: this.pageSize,
          name: this.deviceValue.name
        }
        getDevice(params).then((res) => {
          this.total = res.data.pageInfo.total
          this.deviceMessage = res.data.waterGateInfo
          this.deviceWater = res.data.pageInfo.list[0]
          this.deviceList = res.data.pageInfo.list
          this.waterLiness = res.data.configInfo[0].waterLines
          for (let i = 0; i < this.deviceList.length; i++) {
            this.deviceList[i].flow = (this.deviceList[i].flow) / 1000
            this.deviceList[i].waterLines = this.waterLiness
//            console.log(this.deviceList[i].totalYearPrice)
            this.deviceList[i].totalYearPrice = this.deviceList[i].totalYearPrice.toFixed(2)
//            console.log(this.deviceList[i].totalYearPrice.toString().split(".")[1].length)
//            console.log(this.deviceList[i])
          }
        }).catch((rej) => { console.log(rej) })
//        clearTimeout(this.timer)
//        this.timer = setTimeout(() => {
//          this.getAlarmHistory()
//        }, 100)
      },
      //查询水闸详细信息以及实时数据每1分钟自动刷新
      searchDevice() {
        this.$refs['deviceForm'].validate((valid) => {
          if (valid) {
            this.getRealMessage()
            setTimeout(() => {
              if (this.deviceList.length) {
                this.searchRealBtn = false
              } else {
                this.searchRealBtn = true
              }
            }, 200)
//            setTimeout(() => {
//              if (this.deviceList.length) {
//                this.searchRealBtn = false
//              } else {
//                this.searchRealBtn = true
//              }
//            }, 20)
            clearInterval(this.realTimer)
            this.realTimer = setInterval(() => {
              this.getRealMessage()
            }, 60000)
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //查询报警履历
//      getAlarmHistory() {
//        let params = {
//          currentPage: this.dangerPage,
//          pageSize: this.dangerPageSize,
//          name: this.deviceValue.name
//        }
//        getAlarm(params).then((res) => {
//          this.dangerTotal = res.data.total
//          this.alarmList = res.data.list
//        })
//      },
      //召测
      searchRealMessages() {
        this.measureMessage = true
        let params = {
          name: this.deviceValue.name
        }
        searchRealMessage(params).then((res) => {
          if (res.data.code === 200) {
            this.measureLoad = false
            this.$message({
              showClose: true,
              type: 'success',
              message: res.data.message + '召测'
            })
            this.getRealMessage()
            clearInterval(this.realTimer)
            this.realTimer = setInterval(() => {
              this.getRealMessage()
            }, 60000)
          } else if (res.data.code === 400) {
            this.measureLoad = false
            this.$message({
              showClose: true,
              type: 'error',
              message: '召测' + res.data.message
            })
            return false
          } else {
            this.measureLoad = false
            console.log(res.data)
            return false
          }
        })
      },
      //实时数据分页函数
      handleCurrentChange(val) {
        this.page = val
        this.searchDevice()
      },
      //报警履历分页函数
//      alarmHistoryChange(val) {
//        this.dangerPage = val
//        this.searchDevice()
//      },
      //时间戳过滤
      dateFormat(row, column) {
        let date = row[column.property]
        if (date === undefined) {
          return ""
        }
        return this.$moment(date).format("YYYY-MM-DD HH:mm:ss")
      }
    }
  }
</script>

<style scoped lang="stylus">
  .deviceMessage
    .toolbar
      background-color: #f2f2f2
      padding: 24px
      margin: 10px 0
      .deviceBtn
        margin-left: 10px
    .device-container
      margin: 0 5px
      .device-content
        .device-header
          padding: 0 20px
          font-size: 16px
          /*font-weight: 700*/
        .device-messageList
          .device-wrapper
            height: 80px
            line-height: 80px
            padding: 20px
            margin-bottom: 10px
            border-radius: 6px
            color: #fff
            text-align: center
            font-size: 20px
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
          .text-danger
            background-color: #FF4949
          .text-Warning
            background-color: #F7BA2A
          .text-blue
            background-color: #20A0FF
          .text-success
            background-color: #13CE66
      .device-realList
        /*margin-top: 30px*/
        .realList-footer
          padding-top: 10px
      .device-warnList
        margin-top: 10px
</style>
