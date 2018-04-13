<template>
  <div class="alarm-management">
    <!--查询框-->
    <el-form :inline="true" :model="deviceValue" ref="deviceForm" class="demo-form-inline toolbar">
      <el-form-item label="站点名称：" prop="name" style="margin-bottom: 0;">
        <el-select v-model="deviceValue.name" placeholder="请选择" @change="initChange">
          <el-option v-for="(item,index) in optionList" :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item style="margin-bottom: 0;">-->
      <!--<el-button type="primary" icon="search" @click="searchDevice">查询</el-button>-->
      <!--</el-form-item>-->
    </el-form>
    <div class="device-warnList">
      <h3>报警履历：</h3>
      <el-table :data="alarmList" border style="width: 100%">
        <el-table-column prop="name" label="站点名称" min-width="120">
        </el-table-column>
        <el-table-column prop="alarmValue" label="异常状态" min-width="150">
        </el-table-column>
        <el-table-column prop="gatePosition" label="闸位(mm)" min-width="120">
        </el-table-column>
        <el-table-column prop="waterPosition" label="水位(mm)" min-width="120">
        </el-table-column>
        <!--<el-table-column prop="dl" label="电池电量(A.h)" width="150">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="dy" label="电压(V)" width="150">无-->
        <!--</el-table-column>-->
        <el-table-column prop="flow" label="瞬时流量(m³/s)" min-width="140">
        </el-table-column>
        <el-table-column prop="dataTime" label="报警时间" min-width="190" :formatter="dateFormat">无
        </el-table-column>
        <!--<el-table-column prop="totalFlow" label="累计流量(m³)" min-width="150">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="dataTime" label="上报时间" :formatter="dateFormat" width="180">-->
        <!--</el-table-column>-->
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
</template>

<script>
    import { getUserName, getAlarm } from 'src/api/api'
    export default {
      name: 'alarmManagement',
      components: {},
      data() {
        return {
          //水闸名称列表
          optionList: [],
          alramTimer: '',
          deviceValue: {
            name: ''
          },
          alarmList: [],
          dangerPage: 1,
          dangerPageSize: 10,
          dangerTotal: ''
        }
      },
      mounted() {
        this.getUsers()
      },
      beforeRouteLeave (to, from, next) {
        if (from.path === '/home/alarmManagement') {
          clearInterval(this.alramTimer)
          next()
        }
      },

      methods: {
        //报警履历分页函数
        alarmHistoryChange(val) {
          this.dangerPage = val
          this.getAlarmHistory()
        },
        //时间戳过滤
        dateFormat(row, column) {
          let date = row[column.property]
          if (date === undefined) {
            return ""
          }
          return this.$moment(date).format("YYYY-MM-DD HH:mm:ss")
        },
        initChange() {
          this.getAlarmHistory()
          clearInterval(this.alramTimer)
          //自动刷新
          this.alramTimer = setInterval(() => { this.getAlarmHistory() }, 60000)
        },
        //获取水闸名称
        getUsers() {
          getUserName().then((res) => {
            this.optionList = res.data
//            for (let i = 0; i < this.optionList.length; i++) {
//              if (this.optionList[i] === '陈木闸断面') {
////              console.log(i)
//                this.optionList.splice(i, 1)
//              }
//            }
            this.deviceValue.name = this.optionList[0]
          }).catch((rej) => {
            console.log(rej)
          })
        },
        //查询报警履历
        getAlarmHistory() {
          let params = {
            currentPage: this.dangerPage,
            pageSize: this.dangerPageSize,
            name: this.deviceValue.name
          }
          getAlarm(params).then((res) => {
            this.dangerTotal = res.data.total
            this.alarmList = res.data.list
            for (let i = 0; i < this.alarmList.length; i++) {
              this.alarmList[i].flow = (this.alarmList[i].flow) / 1000
            }
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
  .alarm-management
    .toolbar
      background-color: #f2f2f2
      padding: 24px
      margin: 10px 0
</style>
