<template>
  <div class="flow-count">
    <el-form :inline="true" :model="deviceValue" ref="deviceForm" class="demo-form-inline toolbar">
      <el-form-item label="站点名称：" prop="name" style="margin-bottom: 0;">
        <el-select v-model="deviceValue.name" placeholder="请选择" @change="searchMeaasge">
          <el-option v-for="(item,index) in optionList" :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="device-realList">
      <h3>明渠流量数据列表：</h3>
      <el-table :data="gateSiteMessageList" border style="width: 100%">
        <el-table-column prop="gateSiteName" label="站点名称" min-width="120">
        </el-table-column>
        <el-table-column prop="waterPosition" label="水位(mm)" min-width="150">
        </el-table-column>
        <!--<el-table-column prop="instantFlow" label="流速">-->
        <!--</el-table-column>-->
        <el-table-column prop="instantFlow" label="瞬时流量(m³/s)" min-width="150">
        </el-table-column>
        <el-table-column prop="totalFlow" label="累计流量(m³)" min-width="140">
        </el-table-column>
        <el-table-column prop="reportTime" label="上报时间" :formatter="dateFormat" min-width="180">
        </el-table-column>
      </el-table>
      <!--<el-row type="flex" class="row-bg realList-footer" justify="end">-->
        <!--<el-col></el-col>-->
        <!--<el-col></el-col>-->
        <!--<el-col>-->
          <!--&lt;!&ndash;实时数据分页&ndash;&gt;-->
          <!--<el-row v-if="this.gateSiteMessageList.length">-->
            <!--<el-col :span="24">-->
              <!--<el-pagination layout="total, prev, pager, next" :total="total" :page-size="pageSize" @current-change="handleCurrentChange" style="padding-right: 0; float: right;">-->
              <!--</el-pagination>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--&lt;!&ndash;实时数据分页&ndash;&gt;-->
        <!--</el-col>-->
      <!--</el-row>-->
    </div>
  </div>
</template>

<script>
    import { getchannelMessage, postsearchChannel } from 'src/api/api'
    export default {
      name: '',
      components: {},
      data() {
        return {
          deviceValue: {
            name: ''
          },
          optionList: [],
          optionList1: [],
          gateSiteNames: '',
          waterPositions: '',
          instantFlows: '',
          reportTimes: '',
          totalFlows: '',
          gateSiteMessageList: []
        }
      },
      mounted() {
        this.getChannelList()
      },

      methods: {
        dateFormat(row, column) {
          let date = row[column.property]
          if (date === undefined) {
            return ""
          }
          return this.$moment(date).format("YYYY-MM-DD HH:mm:ss")
        },
        getChannelList() {
          getchannelMessage().then((res) => {
//            for (let i = 0; i < res.data.length; i++) {
//              this.optionList = res.data[i].gateSiteName
//              this.optionList.push(this.gateSiteNames)
//            }
//            this.gateSiteMessageList = res.data
//            this.optionList.push(res.data[0].gateSiteName)
//            this.optionList.push(res.data[1].gateSiteName)
//            console.log(this.optionList)
            this.optionList = res.data
            this.deviceValue.name = this.optionList[0]
          })
        },
        searchMeaasge() {
          let params = {
            name: this.deviceValue.name
          }
          postsearchChannel(params).then((res) => {
            this.gateSiteMessageList = res.data
            for (let i = 0; i < this.gateSiteMessageList.length; i++) {
              this.gateSiteMessageList[i].instantFlow = (this.gateSiteMessageList[i].instantFlow) / 1000
            }
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
  .flow-count
    .toolbar
      background-color: #f2f2f2
      padding: 24px
      margin: 10px 0
</style>
