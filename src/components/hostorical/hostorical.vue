<template>
  <!--chart-container-->
  <section class="history-message">
    <div class="history-tool">
      <el-form :inline="true" :model="formInline" ref="formInline" :rules="formInlineRules" class="demo-form-inline">
        <el-form-item label="站点名称：" prop="name" style="margin-bottom: 0;">
          <el-select v-model="formInline.name" placeholder="请选择">
            <el-option v-for="(item,index) in optionList" :key="index" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间段：" style="margin-bottom: 0;" prop="startTime">
          <el-date-picker
            v-model="formInline.startTime"
            type="datetimerange"
            placeholder="选择时间范围">
          </el-date-picker>
        </el-form-item>
        <!--<el-form-item label="结束时间：" style="margin-bottom: 0;" prop="endTime">-->
          <!--<el-date-picker-->
            <!--v-model="formInline.endTime"-->
            <!--type="datetime"-->
            <!--placeholder="选择结束时间范围">-->
          <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <el-form-item style="margin-bottom: 0;">
          <el-button type="primary" icon="search" @click="searchBtn">查询</el-button>
        </el-form-item>
        <!--<el-form-item label="数据类型" prop="type" style="margin-bottom: 0;">-->
        <!--<el-select v-model="formInline.type" placeholder="请选择数据类型">-->
        <!--<el-option label="闸位" value="闸位"></el-option>-->
        <!--<el-option label="水位" value="水位"></el-option>-->
        <!--<el-option label="流量" value="流量"></el-option>-->
        <!--<el-option label="累积流量" value="累积流量"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="活动区域" prop="region" style="margin-bottom: 0;">-->
        <!--<el-select v-model="formInline.region" placeholder="请选择期间">-->
        <!--<el-option label="天" value="1"></el-option>-->
        <!--<el-option label="周" value="2"></el-option>-->
        <!--<el-option label="月" value="3"></el-option>-->
        <!--<el-option label="半年" value="4"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
      </el-form>
    </div>
    <div class="history-container" v-if="deviceList.length">
      <h3>站点基本信息：</h3>
      <el-row class="device-header">
        <el-col :xs="24" :sm="24" :md="6" :lg="4">
          <div class="grid-content bg-purple">站点名称：{{deviceMessage.name}}</div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="11" :lg="8">
          <div class="grid-content bg-purple-light">位置：{{deviceMessage.position}}</div>
        </el-col>
        <!--<el-col :xs="24" :sm="24" :md="24" :lg="4">-->
        <!--<div class="grid-content bg-purple">SIM卡信息：{{deviceMessage.simMessage}}</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :md="6" :lg="4">-->
          <!--<div class="grid-content bg-purple-light">断面设置：{{deviceMessage.sectionType}}</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :md="24" :lg="4">-->
        <!--<div class="grid-content bg-purple-light">水闸通讯地址：{{deviceMessage.macAddress}}</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :md="24" :lg="4">-->
        <!--<div class="grid-content bg-purple-light">remark：{{deviceMessage.remark}}</div>-->
        <!--</el-col>-->
      </el-row>
    </div>
    <el-row>
      <el-col :span="24">
        <div ref="chartLine" v-show="this.deviceList.length" style="width:100%; height:400px;"></div>
        <h2 v-if="!this.deviceList.length" style="width:100%;text-align: center;">当前无历史数据</h2>
      </el-col>
    </el-row>
    <!--<div class="search-btn">-->
    <!--<el-button type="info" @click="getMessage()">查看历史数据</el-button>-->
    <!--</div>-->
  </section>
</template>

<script>
  import echarts from 'echarts'
  import {getUserName, getSearchHistory} from 'src/api/api'

  export default {
    name: 'hostorical',
    components: {},
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('查询时间段不能为空'))
        } else {
          callback()
        }
      }
      return {
        formInline: {
          name: '',
//            type: '',
//            region: '',
          startTime: ''
//          endTime: ''
        },
        startTime: '',
        endTime: '',
        optionList: [],
        deviceMessage: {},
        deviceList: [],
        TotalGatePosition: [],
        TotalWaterLevel: [],
        TotalFlowVolume: [],
        deviceData: [],
        device: [],
        chartLine: null,
        option: {},
        formInlineRules: {
          name: [
            {required: true, message: '请选择站点名称', trigger: 'change, blur'}
          ],
//            region: [
//              {required: true, message: '请选择活动区域', trigger: 'change, blur'}
//            ],
          startTime: [
            {required: true, validator: checkAge}
          ]
//          endTime: [
//            {required: true, type: 'date', message: '请选择结束时间', trigger: 'change, blur'}
//          ]
        }
      }
    },
    methods: {
      //获取水闸列表
      getUsers() {
        getUserName().then((res) => {
          this.optionList = res.data
//          for (let i = 0; i < this.optionList.length; i++) {
//            if (this.optionList[i] === '陈木闸断面') {
////              console.log(i)
//              this.optionList.splice(i, 1)
//            }
//          }
        }).catch((rej) => {
          console.log(rej)
        })
      },
      //查询
      searchBtn() {
        this.$refs['formInline'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.formInline.name,
//                dataType: '',
//                data: '',
//                date: this.formInline.region,
              startTime: this.$moment(this.formInline.startTime[0]).format('YYYY-MM-DD HH:mm:ss'),
              endTime: this.$moment(this.formInline.startTime[1]).format('YYYY-MM-DD HH:mm:ss')
            }
//            console.log(params)
            getSearchHistory(params).then((res) => {
              this.deviceMessage = res.data.waterGateInfo
              this.deviceList = res.data.list
              this.deviceData = []
              for (let i = 0; i < this.deviceList.length; i++) {
                this.deviceData.push(this.$moment(this.deviceList[i].dataTime).format('YYYY-MM-DD HH:mm:ss'))
              }
              //闸位总量
              this.device = res.data.list
              this.TotalGatePosition = []
              for (let i = 0; i < this.device.length; i++) {
                this.TotalGatePosition.push(this.device[i].gatePosition)
              }
              //console.log(this.TotalGatePosition)
//              //水位总量
//              this.TotalWaterLevel = []
//              for (let i = 0; i < this.device.length; i++) {
//                this.TotalWaterLevel.push(this.device[i].waterPosition)
//              }
              //console.log(this.TotalWaterLevel)
              //流量总量
              this.TotalFlowVolume = []
              for (let i = 0; i < this.device.length; i++) {
                this.TotalFlowVolume.push(this.device[i].flow)
              }
              //console.log(this.TotalFlowVolume)
              this.drawLineChart()
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //echart图表展示
      drawLineChart() {
        this.chartLine = echarts.init(this.$refs.chartLine)
//          window.onresize = this.chartLine.resize
        this.chartLine.resize()
        this.chartLine.showLoading()
        this.option = {
          title: {
            text: '历史数据'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['闸位', '流量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: {
            type: 'value'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.deviceData
          },
          series: [
            {
              name: '流量',
              type: 'line',
              stack: '总量',
              data: this.TotalFlowVolume
            },
            {
              name: '闸位',
              type: 'line',
              stack: '总量',
              data: this.TotalGatePosition
            }
//            {
//              name: '水位',
//              type: 'line',
//              stack: '总量',
//              data: this.TotalWaterLevel
//            },

          ]
        }
        this.chartLine.setOption(this.option)
        this.chartLine.hideLoading()
        window.onresize = this.chartLine.resize
      }
    },
    mounted () {
      this.getUsers()
//        setTimeout(() => {
//          this.drawLineChart()
//        }, 20)
    },
    updated () {
      this.drawLineChart()
    }
  }
</script>

<style scoped lang="stylus">
  .history-message
    .history-tool
      background-color: #f2f2f2
      padding: 24px
      margin: 10px 0
      overflow-x: auto
      white-space: nowrap
    .history-container
      margin: 15px 5px
      .device-header
        font-size: 16px
        /*font-weight: 700*/
        padding: 0px 20px 20px 20px
      .history-content
        display: flex
        justify-content: space-around
        padding: 20px
    .search-btn
      display: flex
      justify-content: flex-end
      padding: 10px 0
</style>
