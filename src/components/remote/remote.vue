<template>
  <div class="remote">
    <el-form :inline="true" :model="remoteForm" class="demo-form-inline toolbar">
      <el-form-item label="闸门名称:" style="margin-bottom: 0;">
        <el-select v-model="remoteForm.name" placeholder="请选择" @change="selectChange">
          <el-option v-for="(item,index) in optionList" :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item style="margin-bottom: 0;">-->
      <!--<el-button type="primary" :disabled="searchBtn" @click="searchRemoteBtn">查询</el-button>-->
      <!--</el-form-item>-->
    </el-form>
    <el-form :inline="true" :model="switchRemoteForm" class="demo-form-inline">
      <el-form-item label="远程/遥控：">
        <el-radio-group v-model="switchRemoteForm.message" @change="switchClick">
          <el-radio label="0" :disabled="remoteCtrlBtn">遥控</el-radio>
          <el-radio label="1" :disabled="sceneCtrlBtn">现地</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <!--<div class="settingWrapper">-->
      <!--<div class="settingHeader">参数设置</div>-->
      <!--<div class="settingContent">-->
        <!--<el-form :inline="true" :model="gatePositionForm" :label-position="labelPosition" label-width="110px"-->
                 <!--ref="gatePositionForm" :rules="gatePositionFormRules" class="demo-form-inline">-->
          <!--<el-form-item label="闸位开度：" prop="name">-->
            <!--<el-input v-model.number="gatePositionForm.name" placeholder="闸位开度" style="width: 200px;"></el-input>-->
            <!--<i style="font-size: 16px;">mm</i>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button type="primary" :disabled="gatePositionBtn" @click="gatePositionSubmit">-->
              <!--<i class="el-icon-setting"></i>-->
              <!--设置-->
            <!--</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<el-form :inline="true" :model="flowCtrlForm" :label-position="labelPosition" label-width="110px"-->
                 <!--ref="flowCtrlForm"-->
                 <!--:rules="flowCtrlFormRules" class="demo-form-inline">-->
          <!--<el-form-item label="流量控制：" prop="name">-->
            <!--<el-input v-model.number="flowCtrlForm.name" placeholder="流量控制" style="width: 200px;"></el-input>-->
            <!--<i style="font-size: 16px;">mm</i>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button type="primary" :disabled="flowCtlrBtn" @click="flowCtrlSubmit">-->
              <!--<i class="el-icon-setting"></i>-->
              <!--设置-->
            <!--</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--&lt;!&ndash;<el-form :inline="true" :model="waterCtrlForm" :label-position="labelPosition" label-width="110px"&ndash;&gt;-->
        <!--&lt;!&ndash;ref="waterCtrlForm" :rules="waterCtrlFormRules" class="demo-form-inline">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-form-item label="水位控制" prop="name">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-input v-model.number="waterCtrlForm.name" placeholder="水位控制" style="width: 200px;"></el-input>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-form-item>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="primary" :disabled="waterCtrlBtn" @click="waterCtrlSubmit">&ndash;&gt;-->
        <!--&lt;!&ndash;<i class="el-icon-setting"></i>&ndash;&gt;-->
        <!--&lt;!&ndash;设置&ndash;&gt;-->
        <!--&lt;!&ndash;</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form>&ndash;&gt;-->
      <!--</div>-->
    <!--</div>-->
    <div class="remote-content">
      <!--<h3>闸门基本信息：</h3>-->
      <!--<el-row class="remote-message">-->
        <!--<el-col :xs="24" :sm="24" :md="6" :lg="4" style="margin-bottom: 5px;">-->
          <!--<div class="grid-content bg-purple">闸门名称：{{sluice.name}}</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :md="11" :lg="8" style="margin-bottom: 5px;">-->
          <!--<div class="grid-content bg-purple-light">位置：{{sluice.position}}</div>-->
        <!--</el-col>-->
        <!--&lt;!&ndash;<el-col :xs="24" :sm="24" :md="24" :lg="3">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="grid-content bg-purple">SIM卡信息：{{sluice.simMessage}}</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
        <!--<el-col :xs="24" :sm="24" :md="6" :lg="4">-->
          <!--<div class="grid-content bg-purple-light">断面设置：{{sluice.sectionType}}</div>-->
        <!--</el-col>-->
        <!--&lt;!&ndash;<el-col :xs="24" :sm="24" :md="24" :lg="4">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="grid-content bg-purple-light">水闸通讯地址：{{sluice.macAddress}}</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col :xs="24" :sm="24" :md="24" :lg="4">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="grid-content bg-purple-light">remark：{{sluice.remark}}</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
      <!--</el-row>-->
      <el-form :model="openCtrlForm" ref="openCtrlForm" class="demo-form-inline">
        <el-form-item label="闸门参数设置：" style="color: #333;">
          <el-radio-group v-model="openCtrlForm.radio2" @change="checkOpenChannel">
            <el-row>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" style="margin-bottom: 10px;">
                <el-radio :label="1" :disabled = flowDisabled>流量控制：</el-radio>
                <el-input type="number" v-model.number="openCtrlForm.flow" :disabled="flowReadonly" placeholder="流量控制" style="width: 200px; margin-right: 10px;" @change="flowChange"></el-input>
                <span class="error-mes" v-show="flowShow">请输入流量控制参数</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-radio :label="2" :disabled = gateDisabled>闸位开度：</el-radio>
                <el-input type="number" v-model.number="openCtrlForm.gate" :disabled="gateReadonly" placeholder="闸位开度" style="width: 200px; margin-right: 10px;" @change="gateChange"></el-input>
                <span class="error-mes" v-show="gateShow">请输入闸位开度参数</span>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <el-row class="remote-ctrl">
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-button type="primary" size="large" :disabled="openBtn" :loading="openLoading" @click="openGate">开闸
          </el-button>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-button type="primary" size="large" :disabled="closeBtn" :loading="closeLoading" @click="closeGate">关闸
          </el-button>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-button type="primary" size="large" :disabled="stopBtn" :loading="stopLoading" @click="stopGate">停止
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <!--v-if="this.gatePositionList.length"-->
        <el-col :span="24">
          <div id="chartLine" style="width:100%; height:400px;" v-show="this.gatePositionList.length"></div>
          <h2 v-show="!this.gatePositionList.length" style="width:100%;text-align: center;">当前无历史数据</h2>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import {
    postOpenGate,
    postCloseGate,
    postStopGate,
    postSwitchREmote,
    postGetRemoteOper,
    postOpenGatePosition,
    postFlowCtrl,
    getsetEchoData,
    postGateCtrlMode,
    postGatePostionData
  } from 'src/api/api'

  export default {
    name: 'remote',
    components: {},
    data() {
      return {
        flowShow: false,
        gateShow: false,
        flowDisabled: false,
        gateDisabled: false,
        flowReadonly: false,
        gateReadonly: true,
        openCtrlForm: {
          radio2: '',
          flow: '',
          gate: ''
        },
        gatePositionBtn: true,
        flowCtlrBtn: true,
        labelPosition: 'right',
        openLoading: false,
        remoteCtrlBtn: false,
        sceneCtrlBtn: false,
        closeLoading: false,
        stopLoading: false,
        gateTimer: '',
        remoteForm: {
          name: ''
        },
        switchRemoteForm: {
          message: ''
        },
        openBtn: true,
        closeBtn: false,
        stopBtn: false,
        searchBtn: false,
        optionList: [],
        gatePositionList: [],
        gatePositionTime: [],
        gatePosition: [],
        sluice: {},
        chartLine: null
      }
    },
    mounted() {
      this.getUsers()
    },
    updated: function () {
      this.drawCharts()
    },
    methods: {
      //流量控制产生变化时是否显示错误信息以及能否开闸
      flowChange() {
        if (this.openCtrlForm.flow !== '' && this.openCtrlForm.flow >= 0) {
          this.flowShow = false
          this.openBtn = false
        } else {
          this.flowShow = true
          this.openBtn = true
        }
      },
      //闸位开度产生变化时是否显示错误信息以及能都开闸
      gateChange() {
        if (this.openCtrlForm.gate !== '' && this.openCtrlForm.gate >= 0) {
          this.gateShow = false
          this.openBtn = false
        } else {
          this.gateShow = true
          this.openBtn = true
        }
      },
      //是否显示错误信息
//      showError() {
//        if (this.openCtrlForm.radio2 === 1 && (this.openCtrlForm.flow < 0 || !this.openCtrlForm.flow)) {
//          this.flowShow = false
//        } else {
//          this.flowShow = true
//        }
//        if (this.openCtrlForm.radio2 === 2 && (this.openCtrlForm.gate < 0 || !this.openCtrlForm.gate)) {
//          this.gateShow = true
//        } else {
//          this.gateShow = false
//        }
//      },
      //信息被查询之后判断是否可以开闸
//      whetherOPenGate() {
//        if (this.openCtrlForm.flow !== undefined || this.openCtrlForm.gate !== undefined) {
//          this.openBtn = false
//        } else {
//          this.openBtn = true
//        }
//      },
      //开闸、关闸、停止之后调取数据库接口
      postGatedetails() {
        let params = {
          name: this.remoteForm.name
        }
        postGatePostionData(params).then((res) => {
          this.gatePositionList = res.data
          this.gatePositionTime = []
          for (let i = 0; i < this.gatePositionList.length; i++) {
            this.gatePositionTime.push(this.$moment(this.gatePositionList[i].time).format('YYYY-MM-DD hh:mm:ss'))
          }
          this.gatePosition = []
          for (let i = 0; i < this.gatePositionList.length; i++) {
            this.gatePosition.push(this.gatePositionList[i].gatePosition)
          }
          this.drawCharts()
//          this.RepeatCall()
        })
      },
      //闸位开度模式
      gateCtrl() {
        let params = {
          name: this.remoteForm.name,
          gateControl: this.openCtrlForm.radio2
        }
        postGateCtrlMode(params).then((res) => {
          if (res.data.code === 200) {
            console.log(res.data.message)
          } else {
            console.log(res.data.message)
            return
          }
        })
      },
      //闸位开度提交
      gatePositionSet() {
        let params = {
          name: this.remoteForm.name,
          gatePositionOpening: this.openCtrlForm.gate
        }
        postOpenGatePosition(params).then((res) => {
          if (res.data.code === 200) {
            console.log(res.data.message)
          } else {
            console.log(res.data.message)
            return
          }
        })
      },
      //流量控制提交
      flowCtrlSet() {
        let params = {
          name: this.remoteForm.name,
          flowControl: this.openCtrlForm.flow
        }
        postFlowCtrl(params).then((res) => {
          if (res.data.code === 200) {
            console.log(res.data.message)
          } else {
            console.log(res.data.message)
            return
          }
        })
      },
      //选择开闸参数设置
      checkOpenChannel() {
//        this.showError()
        if (this.openCtrlForm.radio2 === 1) {
          this.gateShow = false
          this.flowReadonly = false
          this.gateReadonly = true
        } else if (this.openCtrlForm.radio2 === 2) {
          this.flowShow = false
          this.flowReadonly = true
          this.gateReadonly = false
        } else {}
      },
      //查询回显接口
      searchMessage() {
        let params = {
          name: this.remoteForm.name
        }
        getsetEchoData(params).then((res) => {
          this.openCtrlForm.radio2 = res.data.gateControl
          if (!res.data.gateControl) {
            this.openCtrlForm.radio2 = 1
          }
          this.openCtrlForm.flow = res.data.flowControl
          this.openCtrlForm.gate = res.data.gatePositionOpening
          this.switchRemoteForm.message = res.data.switchRemote
          if (this.switchRemoteForm.message === null) {
            this.switchRemoteForm.message = "0"
          } else {
            this.switchRemoteForm.message = res.data.switchRemote
          }
          if (this.openCtrlForm.radio2 === 1) {
            this.flowReadonly = false
            this.gateReadonly = true
          } else if (this.openCtrlForm.radio2 === 2) {
            this.flowReadonly = true
            this.gateReadonly = false
          } else {
          }
          if (this.openCtrlForm.radio2 === 1 && (this.openCtrlForm.flow || this.openCtrlForm.flow >= 0)) {
            this.flowShow = false
            this.openBtn = false
            this.gateShow = false
          } else {}
          if (this.openCtrlForm.radio2 === 2 && (this.openCtrlForm.gate || this.openCtrlForm.gate >= 0)) {
            this.gateShow = false
            this.openBtn = false
            this.flowShow = false
          } else {}
        })
      },
      //下拉框变化时查询
      selectChange() {
//        this.searchRemoteBtn()
        this.searchMessage()
//        setTimeout(() => {
////          this.showError()
//          this.whetherOPenGate()
//        }, 20)
      },
      //选择远程或者现地
      switchClick() {
        let params = {
          name: this.remoteForm.name,
          switchRemote: this.switchRemoteForm.message
        }
        postSwitchREmote(params).then((res) => {
          if (res.data.code === 200) {
            if (Number(this.switchRemoteForm.message) === 0) {
              this.closeBtn = false
              this.stopBtn = false
              this.flowReadonly = false
              this.flowDisabled = false
              this.gateDisabled = false
              this.gateReadonly = false
              if (this.openCtrlForm.flow || this.openCtrlForm.gate) {
                this.openBtn = false
              }
              if (this.openCtrlForm.radio2 === 1) {
                this.flowReadonly = false
                this.gateReadonly = true
                this.flowChange()
              } else if (this.openCtrlForm.radio2 === 2) {
                this.flowReadonly = true
                this.gateReadonly = false
                this.gateChange()
              } else {
              }
            } else {
              this.openBtn = true
              this.closeBtn = true
              this.stopBtn = true
              this.flowReadonly = true
              this.gateReadonly = true
              this.flowDisabled = true
              this.gateDisabled = true
              this.flowShow = false
              this.gateShow = false
              return
            }
          } else {
            this.openBtn = true
            return false
          }
        })
      },
      //获取水闸列表
      getUsers() {
        postGetRemoteOper().then((res) => {
          this.optionList = res.data.name
          for (let i = 0; i < this.optionList.length; i++) {
            if (this.optionList[i] === '陈木闸断面') {
//              console.log(i)
              this.optionList.splice(i, 1)
            }
          }
          this.remoteForm.name = this.optionList[0]
          this.gatePositionBtn = false
          this.flowCtlrBtn = false
//            this.switchRemoteForm.message = res.data.switchRemote
//            this.searchRemoteBtn()
        }).catch((rej) => {
          console.log(rej)
        })
      },
      //根据名称查询详细信息
//      searchRemoteBtn() {
//        let params = {
//          name: this.remoteForm.name
//        }
//        getDevice(params).then((res) => {
//          this.sluice = res.data.waterGateInfo
//          this.gatePositionList = res.data.pageInfo.list
//          this.gatePositionTime = []
//          this.switchRemoteForm.message = res.data.switchRemote
//          if (this.switchRemoteForm.message === null) {
//            this.switchRemoteForm.message = "0"
//          } else {
//            this.switchRemoteForm.message = res.data.switchRemote
//          }
//          for (let i = 0; i < this.gatePositionList.length; i++) {
//            this.gatePositionTime.push(this.$moment(this.gatePositionList[i].dataTime).format('YYYY-MM-DD hh:mm:ss'))
//          }
          //console.log(this.gatePositionTime)
//          this.gatePosition = []
//          for (let i = 0; i < this.gatePositionList.length; i++) {
//            this.gatePosition.push(this.gatePositionList[i].gatePosition)
//          }
//            console.log(this.gatePosition)
//          console.log(this.switchRemoteForm.message)
//          this.drawCharts()
//          setTimeout(() => {
//            this.showError()
//            this.whetherOPenGate()
//          }, 20)
//        })
//      },
      //开闸
      openGate() {
        this.openLoading = true
        this.gateCtrl()
        if (this.openCtrlForm.radio2 === 1) {
          this.flowCtrlSet()
        } else if (this.openCtrlForm.radio2 === 2) {
          this.gatePositionSet()
        } else {}
        let params = {name: this.remoteForm.name}
        postOpenGate(params).then((res) => {
          if (res.data.result.code === 200) {
            this.openLoading = false
            this.openBtn = true
            this.closeBtn = false
            this.stopBtn = false
//              this.remoteCtrlBtn = true
//              this.sceneCtrlBtn = true
            this.$message({
              showClose: true,
              message: res.data.result.message + '开闸',
              type: 'success'
            })
            this.postGatedetails()
//            this.gatePositionList = res.data.gatePostions
//            this.gatePositionTime = []
//            for (let i = 0; i < this.gatePositionList.length; i++) {
//              this.gatePositionTime.push(this.$moment(this.gatePositionList[i].time).format('YYYY-MM-DD hh:mm:ss'))
//            }
//            this.gatePosition = []
//            for (let i = 0; i < this.gatePositionList.length; i++) {
//              this.gatePosition.push(this.gatePositionList[i].gatePosition)
//            }
//            this.drawCharts()
            this.RepeatCall()
          } else {
            this.openLoading = false
            this.$message.error('开闸失败')
          }
        })
      },
      //定时器
      RepeatCall() {
        clearInterval(this.gateTimer)
        this.gateTimer = setInterval(() => {
          this.postGatedetails()
//            this.openGate()
//          let params = {name: this.remoteForm.name}
//          postOpenGate(params).then((res) => {
//            if (res.data.result.code === 200) {
////                this.closeBtn = false
////                this.stopBtn = false
//              this.gatePositionList = res.data.gatePostions
//              this.gatePositionTime = []
//              for (let i = 0; i < this.gatePositionList.length; i++) {
//                this.gatePositionTime.push(this.$moment(this.gatePositionList[i].time).format('YYYY-MM-DD hh:mm:ss'))
//              }
//              this.gatePosition = []
//              for (let i = 0; i < this.gatePositionList.length; i++) {
//                this.gatePosition.push(this.gatePositionList[i].gatePosition)
//              }
//              this.drawCharts()
//              this.RepeatCall()
//            } else {
//              this.$message.error('开闸失败')
//            }
//          })
        }, 10000)
      },
      //关闸
      closeGate() {
        this.closeLoading = true
        this.gateCtrl()
        if (this.openCtrlForm.radio2 === 1) {
          this.flowCtrlSet()
        } else if (this.openCtrlForm.radio2 === 2) {
          this.gatePositionSet()
        } else {}
        let params = {
          name: this.remoteForm.name
        }
        postCloseGate(params).then((res) => {
          if (res.data.result.code === 200) {
            this.closeLoading = false
            this.openBtn = false
            this.closeBtn = true
            this.stopBtn = false
//              this.remoteCtrlBtn = false
//              this.sceneCtrlBtn = false
            this.$message({
              showClose: true,
              message: res.data.result.message + '关闸',
              type: 'success'
            })
//              clearTimeout(closeTimer)
//              closeTimer = setTimeout(() => {
            clearInterval(this.gateTimer)
            this.postGatedetails()
            this.RepeatCall()
//              }, 2000)
//            this.gatePositionList = res.data.gatePostions
//            this.gatePositionTime = []
//            for (let i = 0; i < this.gatePositionList.length; i++) {
//              this.gatePositionTime.push(this.$moment(this.gatePositionList[i].time).format('YYYY-MM-DD hh"mm:ss'))
//            }
//            this.gatePosition = []
//            for (let i = 0; i < this.gatePositionList.length; i++) {
//              this.gatePosition.push(this.gatePositionList[i].gatePosition)
//            }
//            this.drawCharts()
          } else {
            this.closeLoading = false
            this.closeBtn = false
            this.$message.error('关闸失败')
          }
        })
      },
      //停止
      stopGate() {
        this.stopLoading = true
        let params = {
          name: this.remoteForm.name
        }
        postStopGate(params).then((res) => {
          if (res.data.result.code === 200) {
            this.stopLoading = false
            this.openBtn = false
            this.closeBtn = false
            this.stopBtn = true
//              this.remoteCtrlBtn = false
//              this.sceneCtrlBtn = false
            this.$message({
              showClose: true,
              message: res.data.result.message + '停止',
              type: 'success'
            })
            clearInterval(this.gateTimer)
            this.postGatedetails()
//            this.RepeatCall()
//            this.gatePositionList = res.data.gatePostions
//            this.gatePositionTime = []
//            for (let i = 0; i < this.gatePositionList.length; i++) {
//              this.gatePositionTime.push(this.$moment(this.gatePositionList[i].time).format('YYYY-MM-DD hh:mm:ss'))
//            }
//            this.gatePosition = []
//            for (let i = 0; i < this.gatePositionList.length; i++) {
//              this.gatePosition.push(this.gatePositionList[i].gatePosition)
//            }
//            this.drawCharts()
          } else {
            this.stopLoading = false
            this.$message.error('停止失败')
          }
        })
      },
      //echart图表展示
      drawLineChart() {
        this.chartLine = echarts.init(document.getElementById('chartLine'))
        this.chartLine.resize()
        this.chartLine.showLoading()
        this.chartLine.setOption({
          title: {
            text: '历史数据'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['闸位']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.gatePositionTime
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '闸位',
              type: 'line',
              stack: '总量',
              data: this.gatePosition
            }
          ]
        })
        this.chartLine.hideLoading()
        window.onresize = this.chartLine.resize
      },
      drawCharts() {
        this.drawLineChart()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .remote
    .toolbar
      background-color: #f2f2f2
      padding: 10px
      margin: 10px 0
    .settingWrapper
      display: flex
      flex-direction: row
      align-items: center
      border: 1px solid #dfe6ec
      .settingHeader
        width: 136px
        text-align: center
      .settingContent
        display: flex
        flex-direction: column
        border-left: 1px solid #dfe6ec
        padding-top: 24px
    .remote-content
      .error-mes
        display: block
        font-size: 14px
        color: red
        margin 10px 0 0 93px
      .remote-ctrl
        padding: 20px
        text-align: center
      .remote-message
        padding: 0 20px 20px 20px
        font-size: 16px
        /*font-weight: 700*/
      .remote-btn
        display: flex
        justify-content space-around
        padding: 20px 0
</style>
