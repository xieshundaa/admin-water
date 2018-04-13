<template>
  <div class="setting">
    <el-form :inline="true" :model="setForm" class="demo-form-inline toolbar">
      <el-form-item label="站点名称:" style="margin-bottom: 0;">
        <el-select v-model="setForm.name" placeholder="请选择" @change="settingChange">
          <el-option v-for="(item,index) in optionList" :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="settingWrapper">
      <div class="settingHeader">时间设置</div>
      <div class="settingContent">
        <el-form :inline="true" :model="intervalForm" :label-position="labelPosition" label-width="110px"
                 class="demo-form-inline" ref="intervalForm" :rules="intervalFormRules">
          <el-form-item label="时间间隔：" prop="time">
            <el-input v-model.number="intervalForm.time" placeholder="时间间隔" style="width: 200px;"></el-input>
            <i style="font-size: 16px;">min</i>
          </el-form-item>
          <el-form-item style="margin-left: 5px;">
            <el-button type="primary" :disabled="timeBtn" @click="intervalSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="upDataForm" :label-position="labelPosition" label-width="110px" class="demo-form-inline" ref="upDataForm" :rules="upDataFormRules">
          <el-form-item label="同步时间：" prop="date">
            <el-date-picker type="datetime" placeholder="选择同步时间" editabl="true" v-model="upDataForm.date" style="width: 200px;"></el-date-picker>
          </el-form-item>
          <el-form-item style="margin-left: 39px;">
            <el-button type="primary" :disabled="updateBtn" @click="upDataSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="settingWrapper">
      <div class="settingHeader">报警阈值</div>
      <div class="settingContent">
        <el-form :inline="true" :model="alArmForm" :label-position="labelPosition" label-width="110px"
                 class="demo-form-inline" ref="alArmForm" :rules="alArmFormRules">
          <el-form-item label="高水位阈值：" prop="H">
            <el-input v-model.number="alArmForm.H" placeholder="高水位阈值" style="width: 200px;"></el-input>
            <i style="font-size: 16px;">mm</i>
          </el-form-item>
          <el-form-item style="margin-left: 6px;">
            <el-button type="primary" :disabled="alArmHighBtn" @click="alArmSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="alArmLowForm" :label-position="labelPosition" label-width="110px"
                 class="demo-form-inline" ref="alArmLowForm" :rules="alArmLowFormRules">
          <el-form-item label="低水位阈值：" prop="L">
            <el-input v-model.number="alArmLowForm.L" placeholder="低水位阈值" style="width: 200px;"></el-input>
            <i style="font-size: 16px;">mm</i>
          </el-form-item>
          <el-form-item style="margin-left: 6px;">
            <el-button type="primary" :disabled="alArmLowBtn" @click="alArmLowSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="settingWrapper">
      <div class="settingHeader">参数设置</div>
      <div class="settingContent">
        <el-form :inline="true" :model="gatePositionForm" :label-position="labelPosition" label-width="110px"
                 ref="gatePositionForm" :rules="gatePositionFormRules" class="demo-form-inline">
          <el-form-item label="闸位开度：" prop="name">
            <el-input v-model.number="gatePositionForm.name" placeholder="闸位开度" style="width: 200px;"></el-input>
            <i style="font-size: 16px;">mm</i>
          </el-form-item>
          <el-form-item style="margin-left: 5px;">
            <el-button type="primary" :disabled="gatePositionBtn" @click="gatePositionSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="flowCtrlForm" :label-position="labelPosition" label-width="110px" ref="flowCtrlForm"
                 :rules="flowCtrlFormRules" class="demo-form-inline">
          <el-form-item label="流量控制：" prop="name">
            <el-input v-model.number="flowCtrlForm.name" placeholder="流量控制" style="width: 200px;"></el-input>
            <i style="font-size: 16px;">m³/s</i>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="flowCtlrBtn" @click="flowCtrlSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <!--<el-form :inline="true" :model="waterCtrlForm" :label-position="labelPosition" label-width="110px"-->
                 <!--ref="waterCtrlForm" :rules="waterCtrlFormRules" class="demo-form-inline">-->
          <!--<el-form-item label="水位控制" prop="name">-->
            <!--<el-input v-model.number="waterCtrlForm.name" placeholder="水位控制" style="width: 200px;"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button type="primary" :disabled="waterCtrlBtn" @click="waterCtrlSubmit">-->
              <!--<i class="el-icon-setting"></i>-->
              <!--设置-->
            <!--</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
      </div>
    </div>
    <div class="settingWrapper">
      <div class="settingHeader">闸位开度模式</div>
      <div class="settingContent">
        <el-form :inline="true" :model="gateCtrlForm" :label-position="labelPosition" label-width="110px"
                 class="demo-form-inline" ref="gateCtrlForm" :rules="gateCtrlRules">
          <el-form-item label="闸位开度模式" prop="type">
            <el-select v-model="gateCtrlForm.type" placeholder="请选择闸位控制模式" style="width: 200px;">
              <el-option label="流量" value="1"></el-option>
              <el-option label="闸位" value="2"></el-option>
              <!--<el-option label="水位" value="3"></el-option>-->
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left: 40px;">
            <el-button type="primary" :disabled="gateCtrlBtn" @click="gateCtrlSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="settingWrapper">
      <div class="settingHeader">内部系统参数</div>
      <div class="settingContent">
        <el-form :inline="true" :model="transParaForm" :label-position="labelPosition" label-width="110px" ref="transParaForm" :rules="transParaFormRules" class="demo-form-inline">
          <el-form-item label="传动参数" prop="name">
            <el-input v-model.number="transParaForm.name" placeholder="传动参数" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
          </el-form-item>
          <el-form-item style="margin-left: 40px;">
            <el-button type="primary" :disabled="transParaBtn" @click="transParaSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="waterZeroForm" :label-position="labelPosition" label-width="110px" ref="waterZeroForm" :rules="waterZeroFormRules" class="demo-form-inline">
          <el-form-item label="水位零点" prop="name">
            <el-input v-model.number="waterZeroForm.name" placeholder="水位零点" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
          </el-form-item>
          <el-form-item style="margin-left: 40px;">
            <el-button type="primary" :disabled="waterZeroBtn" @click="waterZeroSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="flowParaForm" :label-position="labelPosition" label-width="110px" ref="flowParaForm" :rules="flowParaFormRules" class="demo-form-inline">
          <el-form-item label="流量因子" prop="name">
            <el-input v-model.number="flowParaForm.name" placeholder="流量因子" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
          </el-form-item>
          <el-form-item style="margin-left: 40px;">
            <el-button type="primary" :disabled="flowParaBtn" @click="flowParaSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="exploreParaForm" :label-position="labelPosition" label-width="110px" ref="exploreParaForm" :rules="exploreParaFormRules" class="demo-form-inline">
          <el-form-item label="探测因子" prop="name">
            <el-input v-model.number="exploreParaForm.name" placeholder="探测因子" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
          </el-form-item>
          <el-form-item style="margin-left: 40px;">
            <el-button type="primary" :disabled="exploreParaBtn" @click="exploreParaSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="settingWrapper">
      <div class="settingHeader">水价设置</div>
      <div class="settingContent">
        <el-form :inline="true" :model="waterQuotaForm" :label-position="labelPosition" label-width="110px" ref="waterQuotaForm" :rules="waterQuotaFormRules" class="demo-form-inline">
          <el-form-item label="用水定额" prop="name">
            <el-input v-model.number="waterQuotaForm.name" placeholder="用水定额" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
            <i style="font-size: 16px;">m³</i>
          </el-form-item>
          <el-form-item style="margin-left: 15px;">
            <el-button type="primary" :disabled="waterQuotaBtn" @click="waterQuotaSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="waterPriceForm" :label-position="labelPosition" label-width="110px" ref="waterPriceForm" :rules="waterPriceFormRules" class="demo-form-inline">
          <el-form-item label="基本水价" prop="name">
            <el-input v-model.number="waterPriceForm.name" placeholder="基本水价" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
            <i style="font-size: 16px;">元/m³</i>
          </el-form-item>
          <el-form-item style="margin-left: -7px;">
            <el-button type="primary" :disabled="waterPriceBtn" @click="waterPriceSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="progressivePriceForm" :label-position="labelPosition" label-width="110px" ref="progressivePriceForm" :rules="progressivePriceFormRules" class="demo-form-inline">
          <el-form-item label="超定额累进水价" prop="name">
            <el-input v-model.number="progressivePriceForm.name" placeholder="超定额累进水价" style="width: 200px;"></el-input>
            <!--<i style="font-size: 16px;">mm</i>-->
            <i style="font-size: 16px;">元/m³</i>
          </el-form-item>
          <el-form-item style="margin-left: -7px;">
            <el-button type="primary" :disabled="progressivePriceBtn" @click="progressivePriceSubmit">
              <i class="el-icon-setting"></i>
              设置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getUserName,
    postInterval,
    postUpData,
    postalArmHigh,
    postalArmLow,
    postOpenGatePosition,
    postFlowCtrl,
//    postWaterCtrl,
    postGateCtrlMode,
    postTransPara,
    postWaterZero,
    postFlowPara,
    postExplorePara,
    getsetEchoData,
    postWaterPrice,
    postBasicPrice,
    postOverTotalPrice
  } from 'src/api/api'

  export default {
    name: 'setting',
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('时间间隔不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value <= 5 || value >= 1440) {
              callback(new Error('时间间隔必须是5-1440之间的数'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      return {
        labelPosition: 'right',
        timeBtn: true,
        updateBtn: true,
        alArmHighBtn: true,
        alArmLowBtn: true,
        gatePositionBtn: true,
        flowCtlrBtn: true,
        waterCtrlBtn: true,
        gateCtrlBtn: true,
        transParaBtn: true,
        waterZeroBtn: true,
        flowParaBtn: true,
        exploreParaBtn: true,
        waterQuotaBtn: true,
        waterPriceBtn: true,
        progressivePriceBtn: true,
        optionList: [],
        transParaForm: {
          name: ''
        },
        transParaFormRules: {
          name: [
            {required: true, message: '传动参数不能为空'},
            {type: 'number', message: '传动参数必须为数字值'}
          ]
        },
        waterZeroForm: {
          name: ''
        },
        waterZeroFormRules: {
          name: [
            {required: true, message: '水位零点不能为空'},
            {type: 'number', message: '水位零点必须为数字值'}
          ]
        },
        flowParaForm: {
          name: ''
        },
        flowParaFormRules: {
          name: [
            {required: true, message: '流量因子不能为空'},
            {type: 'number', message: '流量因子必须为数字值'}
          ]
        },
        exploreParaForm: {
          name: ''
        },
        exploreParaFormRules: {
          name: [
            {required: true, message: '探测因子不能为空'},
            {type: 'number', message: '探测因子必须为数字值'}
          ]
        },
        flowFormRules: {
          name: [
            {required: true, message: '流量不能为空'},
            {type: 'number', message: '流量必须为数字值'}
          ]
        },
        intervalFormRules: {
          time: [
            {required: true, validator: checkAge, trigger: 'blur, change'}
          ]
        },
        upDataFormRules: {
          date: [
            {required: true, message: '请选择正确的同步时间'}
          ]
        },
        alArmFormRules: {
          H: [
            {required: true, message: '高水位阈值不能为空'},
            {type: 'number', message: '高水位阈值必须为数字值'}
          ],
          L: [
            {required: true, message: '低水位阈值不能为空'},
            {type: 'number', message: '低水位阈值必须为数字值'}
          ]
        },
        alArmLowFormRules: {
          L: [
            {required: true, message: '低水位阈值不能为空'},
            {type: 'number', message: '低水位阈值必须为数字值'}
          ]
        },
        gatePositionFormRules: {
          name: [
            {required: true, message: '闸位开度的值不能为空'},
            {type: 'number', message: '闸位开度的值必须为数字值'}
          ]
        },
        flowCtrlFormRules: {
          name: [
            {required: true, message: '流量控制的值不能为空'},
            {type: 'number', message: '流量控制的值必须为数字值'}
          ]
        },
//        waterCtrlFormRules: {
//          name: [
//            {required: true, message: '水位控制的值不能为空'},
//            {type: 'number', message: '水位控制的值必须为数字值'}
//          ]
//        },
        gateCtrlRules: {
          type: [
            {required: true, message: '请选择闸位控制模式', trigger: 'change, blur'}
          ]
        },
        gateCtrlForm: {
          type: ''
        },
//        waterCtrlForm: {
//          name: ''
//        },
        flowCtrlForm: {
          name: ''
        },
        gatePositionForm: {
          name: ''
        },
        alArmForm: {
          H: ''
        },
        alArmLowForm: {
          L: ''
        },
        intervalForm: {
          time: ''
        },
        setForm: {
          name: ''
        },
        upDataForm: {
          date: ''
        },
        waterQuotaForm: {
          name: ''
        },
        waterQuotaFormRules: {
          name: [
            {required: true, message: '用水定额的值不能为空'},
            {type: 'number', message: '用水定额的值必须为数字值'}
          ]
        },
        waterPriceForm: {
          name: ''
        },
        waterPriceFormRules: {
          name: [
            {required: true, message: '基本水价的值不能为空'},
            {type: 'number', message: '基本水价的值必须为数字值'}
          ]
        },
        progressivePriceForm: {
          name: ''
        },
        progressivePriceFormRules: {
          name: [
            {required: true, message: '超定额累计水价的值不能为空'},
            {type: 'number', message: '超定额累计水价的值必须为数字值'}
          ]
        }
      }
    },
    mounted() {
      this.getUsers()
//      setTimeout(() => {
//        this.inItEchoData()
//      }, 20)
    },
    methods: {
      //清空输入框的值
      clearValue() {
        this.$refs['intervalForm'].resetFields()
        this.$refs['upDataForm'].resetFields()
        this.$refs['alArmForm'].resetFields()
        this.$refs['alArmLowForm'].resetFields()
        this.$refs['gatePositionForm'].resetFields()
        this.$refs['flowCtrlForm'].resetFields()
//        this.$refs['waterCtrlForm'].resetFields()
        this.$refs['gateCtrlForm'].resetFields()
        this.$refs['transParaForm'].resetFields()
        this.$refs['waterZeroForm'].resetFields()
        this.$refs['flowParaForm'].resetFields()
        this.$refs['exploreParaForm'].resetFields()
      },
      //初始化时设置的数据回显
//      inItEchoData() {
//        let params = {
//          name: this.setForm.name
//        }
//        getSettingIndex(params).then((res) => {
//          let InitMessage = res.data.configInfo
//          this.clearValue()
//          this.intervalForm.time = InitMessage.conInterval
//          this.upDataForm.date = this.$moment(InitMessage.syncDate).format('YYYY-MM-DD HH:mm:ss')
//          console.log(this.upDataForm)
//          this.alArmForm.H = InitMessage.highWaterPosition
//          this.alArmLowForm.L = InitMessage.lowWaterPosition
//          this.gatePositionForm.name = InitMessage.gatePositionOpening
//          this.flowCtrlForm.name = InitMessage.flowControl
////          this.waterCtrlForm.name = InitMessage.waterPositionControl
//          switch (InitMessage.gateControl) {
//            case 1:
//              InitMessage.gateControl = '流量'
//              break
//            case 2:
//              InitMessage.gateControl = '闸位'
//              break
//            case 3:
//              InitMessage.gateControl = '水位'
//              break
//            default:
//              break
//          }
//          this.gateCtrlForm.type = InitMessage.gateControl
//          this.transParaForm.name = InitMessage.transPara
//          this.waterZeroForm.name = InitMessage.waterZero
//          this.flowParaForm.name = InitMessage.flowPara
//          this.exploreParaForm.name = InitMessage.explorePara
//          this.waterQuotaForm.name = InitMessage.waterLines
//          this.waterPriceForm.name = InitMessage.basicPrice
//          this.progressivePriceForm.name = InitMessage.overTotalPrice
//        })
//      },
      settingChange() {
        this.timeBtn = false
        this.updateBtn = false
        this.alArmHighBtn = false
        this.alArmLowBtn = false
        this.gatePositionBtn = false
        this.flowCtlrBtn = false
        this.waterCtrlBtn = false
        this.gateCtrlBtn = false
        this.transParaBtn = false
        this.waterZeroBtn = false
        this.flowParaBtn = false
        this.exploreParaBtn = false
        this.waterQuotaBtn = false
        this.waterPriceBtn = false
        this.progressivePriceBtn = false
        let para = {
          name: this.setForm.name
        }
        //查询数据回显
        getsetEchoData(para).then((res) => {
          this.clearValue()
          let searchEchoMessage = res.data
          this.intervalForm.time = searchEchoMessage.conInterval
//          console.log(this.$moment(1501498659000).format('YYYY-MM-DD hh:mm:ss'))
//          console.log(this.$moment(1501502822000).format('YYYY-MM-DD hh:mm:ss'))
          this.upDataForm.date = this.$moment(searchEchoMessage.syscDate).format('YYYY-MM-DD HH:mm:ss')
//          console.log(this.upDataForm.date)
          this.alArmForm.H = searchEchoMessage.highWaterPosition
          this.alArmLowForm.L = searchEchoMessage.lowWaterPosition
          this.gatePositionForm.name = searchEchoMessage.gatePositionOpening
          this.flowCtrlForm.name = searchEchoMessage.flowControl
//          this.waterCtrlForm.name = searchEchoMessage.waterPositionControl
          switch (searchEchoMessage.gateControl) {
            case 1:
              searchEchoMessage.gateControl = '流量'
              break
            case 2:
              searchEchoMessage.gateControl = '闸位'
              break
            case 3:
              searchEchoMessage.gateControl = '水位'
              break
            default:
              break
          }
          this.gateCtrlForm.type = searchEchoMessage.gateControl
          this.transParaForm.name = searchEchoMessage.transPara
          this.waterZeroForm.name = searchEchoMessage.waterZero
          this.flowParaForm.name = searchEchoMessage.flowPara
          this.exploreParaForm.name = searchEchoMessage.explorePara
          this.waterQuotaForm.name = searchEchoMessage.waterLines
          this.waterPriceForm.name = searchEchoMessage.basicPrice
          this.progressivePriceForm.name = searchEchoMessage.overTotalPrice
        })
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
          }
          this.setForm.name = this.optionList[0]
        }).catch((rej) => {
          console.log(rej)
        })
      },
      //时间间隔提交
      intervalSubmit() {
        this.$refs['intervalForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              conInterval: this.intervalForm.time
            }
            postInterval(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置时间间隔' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '水闸名称不能为空'
                })
                return
              } else {
                this.$message.error({
                  showClose: true,
                  message: '设置时间间隔' + res.data.message
                })
                return
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      //同步时间提交
      upDataSubmit() {
//        (this.$moment(this.upDataForm.date).format('YYYY-MM-DD HH:mm:ss')).toString()
        this.$refs['upDataForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              syncDate: this.$moment(this.upDataForm.date).format('YYYY-MM-DD HH:mm:ss')
            }
            postUpData(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置同步时间' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '水闸名称不能为空'
                })
                return
              } else {
                this.$message.error({
                  showClose: true,
                  message: '设置同步时间' + res.data.message
                })
                return
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      //报警高水位阀值
      alArmSubmit() {
        this.$refs['alArmForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              highWaterPosition: this.alArmForm.H
            }
            postalArmHigh(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置高水位阈值' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '站点名称不能为空'
                })
                return
              } else {
                this.$message.error({
                  showClose: true,
                  message: '设置高水位阈值' + res.data.message
                })
                return
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //低水位阀值
      alArmLowSubmit() {
        this.$refs['alArmLowForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              lowWaterPosition: this.alArmLowForm.L
            }
            postalArmLow(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置低水位阈值' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '站点名称不能为空'
                })
                return
              } else {
                this.$message.error({
                  showClose: true,
                  message: '设置低水位阈值' + res.data.message
                })
                return
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //闸位开度提交
      gatePositionSubmit() {
        this.$refs['gatePositionForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              gatePositionOpening: this.gatePositionForm.name
            }
            postOpenGatePosition(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置闸位开度' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '站点名称不能为空'
                })
                return
              } else {
                this.$message.error({
                  showClose: true,
                  message: '设置闸位开度' + res.data.message
                })
                return
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //流量控制提交
      flowCtrlSubmit() {
        this.$refs['flowCtrlForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              flowControl: this.flowCtrlForm.name
            }
            postFlowCtrl(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置流量控制' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '站点名称不能为空'
                })
                return
              } else {
                if (res.data.code !== 200 && res.data.code !== 409) {
                  this.$message.error({
                    showClose: true,
                    message: '设置流量控制' + res.data.message
                  })
                  return
                }
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //水位控制提交
//      waterCtrlSubmit() {
//        this.$refs['waterCtrlForm'].validate((valid) => {
//          if (valid) {
//            let params = {
//              name: this.setForm.name,
//              waterPositionControl: this.waterCtrlForm.name
//            }
//            postWaterCtrl(params).then((res) => {
//              if (res.data.code === 200) {
//                this.$message({
//                  showClose: true,
//                  message: '设置水位控制' + res.data.message,
//                  type: 'success'
//                })
//              } else if (res.data.code === 409) {
//                this.$message.error({
//                  showClose: true,
//                  message: '站点名称不能为空'
//                })
//                return
//              } else {
//                this.$message.error({
//                  showClose: true,
//                  message: '设置水位控制' + res.data.message
//                })
//                return
//              }
//            })
//          } else {
//            console.log('error submit')
//            return false
//          }
//        })
//      },
      //
      //闸位开度模式
      gateCtrlSubmit() {
        this.$refs['gateCtrlForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              gateControl: this.gateCtrlForm.type
            }
            switch (params.gateControl) {
              case '流量':
                params.gateControl = 1
                break
              case '闸位':
                params.gateControl = 2
                break
//              case '水位':
//                params.gateControl = 3
//                break
              default:
                break
            }
            postGateCtrlMode(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  message: '设置闸位开度模式' + res.data.message,
                  type: 'success'
                })
              } else if (res.data.code === 409) {
                this.$message.error({
                  showClose: true,
                  message: '站点名称不能为空'
                })
                return
              } else {
                this.$message.error({
                  showClose: true,
                  message: '设置闸位控制模式' + res.data.message
                })
                return
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //传动参数提交
      transParaSubmit() {
        this.$refs['transParaForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              transPara: this.transParaForm.name
            }
            postTransPara(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置传动参数成功' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置传动参数' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //水位零点
      waterZeroSubmit() {
        this.$refs['waterZeroForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              waterZero: this.waterZeroForm.name
            }
            postWaterZero(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置水位零点' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置水位零点' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //流量因子
      flowParaSubmit() {
        this.$refs['flowParaForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              flowPara: this.flowParaForm.name
            }
            postFlowPara(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置流量因子' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置流量因子' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //探测因子
      exploreParaSubmit() {
        this.$refs['exploreParaForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              explorePara: this.exploreParaForm.name
            }
            postExplorePara(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置探测因子' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置探测因子' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //用水额度
      waterQuotaSubmit() {
        this.$refs['waterQuotaForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              waterLines: this.waterQuotaForm.name
            }
            postWaterPrice(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置用水额度' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置用水额度' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //基本水价接口
      waterPriceSubmit() {
        this.$refs['waterPriceForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              basicPrice: this.waterPriceForm.name
            }
            postBasicPrice(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置基本水价额度' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置基本水价额度' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      //超定额累进水价
      progressivePriceSubmit() {
        this.$refs['progressivePriceForm'].validate((valid) => {
          if (valid) {
            let params = {
              name: this.setForm.name,
              overTotalPrice: this.progressivePriceForm.name
            }
            postOverTotalPrice(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  showClose: true,
                  type: 'success',
                  message: '设置超定额累进水价' + res.data.message
                })
              } else if (res.data.code === 409) {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '站点名称不能为空'
                })
                return false
              } else {
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: '设置超定额累进水价' + res.data.message
                })
                return false
              }
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      }

    },
    components: {}
  }
</script>

<style scoped lang="stylus">
  .setting
    .toolbar
      background-color: #f2f2f2
      padding: 10px
      margin: 10px 0
    .settingWrapper
      display: flex
      flex-direction: row
      align-items: center
      border: 1px solid #dfe6ec
      overflow-x: auto
      white-space: nowrap
      &:nth-of-type(2)
        border-top-color: transparent
        border-bottom-color: transparent
      &:nth-of-type(3)
        border-bottom-color transparent
      &:nth-of-type(4)
        border-bottom-color transparent
      &:nth-of-type(5)
        /*border-top-color: transparent*/
        border-bottom-color: transparent
      .settingHeader
        width: 136px
        text-align: center
      .settingContent
        display: flex
        flex-direction: column
        border-left: 1px solid #dfe6ec
        padding-top: 24px
</style>
