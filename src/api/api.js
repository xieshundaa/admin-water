import axios from 'axios'

const apiHost = 'http://192.168.188.123:8080'
// const apiHost = 'http://47.92.73.3:80'
const htfd = {
  //明渠流量计数据初始化数据接口
  channelMessage: apiHost + '/wg/openChannel/index.json',
  //查询名流数据信息
  searchChannel: apiHost + '/wg/openChannel/find.json',
  //设备管理
  getUsers: apiHost + '/wg/device/manage/list.json',
  addUsers: apiHost + '/wg/device/manage/addOrupdate.json',
  removeUser: apiHost + '/wg/device/manage/delete.json',
  //设备信息
  getUserName: apiHost + '/wg/device/message/info.json',
  getDevice: apiHost + '/wg/device/message/list.json',
  getAlarm: apiHost + '/wg/device/message/alarm.json',
  //历史数据
  // getSearchHistory: apiHost + '/wg/history/query/list.json',
  getSearchHistory: apiHost + '/wg/history/query/find.json',
  //召测
  searchRealMessage: apiHost + '/wg/device/query/zhaoce.json',
  //设置页面回显初始化接口
  settingIndex: apiHost + '/wg/setting/index.json',
  //设置页面查询数据回显接口
  setEchoData: apiHost + '/wg/setting/echoData.json',
  //时间间隔
  postInterval: apiHost + '/wg/setting/query/interval.json',
  //上传时间
  postUpData: apiHost + '/wg/setting/query/sysncDate.json',
  //报警高水位阀值
  postalArmHigh: apiHost + '/wg/setting/query/high.json',
  //报警低水位阀值
  postalArmLow: apiHost + '/wg/setting/query/low.json',
  //闸位开度
  openGatePosition: apiHost + '/wg/setting/query/gateOpen.json',
  //流量控制
  postFlowCtrl: apiHost + '/wg/setting/query/flowControl.json',
  //水位控制
  postWaterCtrl: apiHost + '/wg/setting/query/waterControl.json',
  //闸位控制模式
  gateCtrlMode: apiHost + '/wg/setting/query/gateControl.json',
  //传动参数
  postTransPara: apiHost + '/wg/setting/query/transPara.json',
  //水位零点
  postWaterZero: apiHost + '/wg/setting/query/waterZero.json',
  //流量因子
  postFlowPara: apiHost + '/wg/setting/query/flowPara.json',
  //探测因子
  postExplorePara: apiHost + '/wg/setting/query/explorePara.json',
  //用水额度
  postWaterPrice: apiHost + '/wg/setting/waterPrice.json',
  //基本水价
  postBasicPrice: apiHost + '/wg/setting/query/basicPrice.json',
  //超定额累进水价
  postOverTotalPrice: apiHost + '/wg/setting/query/overTotalPrice.json',
  //远程控制开闸接口
  openGate: apiHost + '/wg/remoteOper/openGate.json',
  //关闸接口
  closeGate: apiHost + '/wg/remoteOper/closeGate.json',
  //停止接口
  stopGate: apiHost + '/wg/remoteOper/stopGate.json',
  //开闸、关闸、停止刷数据库接口
  gatePostionData: apiHost + '/wg/remoteOper/gatePostionData.json',
  //远程、现地接口
  switchREmote: apiHost + '/wg/remoteOper/switchRemote',
  //初始化远程控制列表接口
  getRemoteOper: apiHost + '/wg/remoteOper/index.json'
}
//用水额度
export const postWaterPrice = (params) => { return axios({method: 'post', url: htfd.postWaterPrice, params: params}) }
//基本水价
export const postBasicPrice = (params) => { return axios({method: 'post', url: htfd.postBasicPrice, params: params}) }
//超定额累进水价
export const postOverTotalPrice = (params) => { return axios({method: 'post', url: htfd.postOverTotalPrice, params: params}) }
//初始化水闸信息列表
export const getUserList = (params) => { return axios({method: 'post', url: htfd.getUsers, params: params, timeout: 3000}) }

//编辑和新增接口
export const addUser = (data) => { return axios({method: 'post', url: htfd.addUsers, data: data}) }

//删除接口
export const removeUser = (params) => { return axios({method: 'post', url: htfd.removeUser, params: params}) }

//获取水闸名称接口
export const getUserName = () => { return axios.get(htfd.getUserName) }

//根据水闸名称获取水闸详细信息接口
export const getDevice = (params) => { return axios({method: 'post', url: htfd.getDevice, params: params}) }

//根据水闸名称获取水闸报警信息接口
export const getAlarm = (params) => { return axios({method: 'post', url: htfd.getAlarm, params: params}) }

//召测
export const searchRealMessage = (params) => { return axios({method: 'post', url: htfd.searchRealMessage, params: params}) }
//根据水闸名称查询历史数据
export const getSearchHistory = (params) => { return axios({method: 'post', url: htfd.getSearchHistory, params: params}) }

//设置页面回显初始化接口
export const getSettingIndex = (params) => { return axios({method: 'post', url: htfd.settingIndex, params: params}) }

//设置页面查询数据回显接口
export const getsetEchoData = (params) => { return axios({method: 'post', url: htfd.setEchoData, params: params}) }

//时间间隔设置接口
export const postInterval = (params) => { return axios({method: 'post', url: htfd.postInterval, params: params}) }

//上传时间
export const postUpData = (params) => { return axios({method: 'post', url: htfd.postUpData, params: params}) }

//报警高水位阀值
export const postalArmHigh = (params) => { return axios({method: 'post', url: htfd.postalArmHigh, params: params}) }

//报警低水位阀值
export const postalArmLow = (params) => { return axios({method: 'post', url: htfd.postalArmLow, params: params}) }

//闸位开度
export const postOpenGatePosition = (params) => { return axios({method: 'post', url: htfd.openGatePosition, params: params}) }

//流量控制
export const postFlowCtrl = (params) => { return axios({method: 'post', url: htfd.postFlowCtrl, params: params}) }

//水位控制
export const postWaterCtrl = (params) => { return axios({method: 'post', url: htfd.postWaterCtrl, params: params}) }

//闸位控制模式
export const postGateCtrlMode = (params) => { return axios({method: 'post', url: htfd.gateCtrlMode, params: params}) }

//传动参数
export const postTransPara = (params) => { return axios({method: 'post', url: htfd.postTransPara, params: params}) }

//水位零点
export const postWaterZero = (params) => { return axios({method: 'post', url: htfd.postWaterZero, params: params}) }

//流量因子
export const postFlowPara = (params) => { return axios({method: 'post', url: htfd.postFlowPara, params: params}) }

//探测因子
export const postExplorePara = (params) => { return axios({method: 'post', url: htfd.postExplorePara, params: params}) }

//初始化远程控制列表接口
export const postGetRemoteOper = (params) => { return axios({method: 'post', url: htfd.getRemoteOper, params: params}) }

//远程控制开闸接口
export const postOpenGate = (params) => { return axios({method: 'post', url: htfd.openGate, params: params}) }

//关闸接口
export const postCloseGate = (params) => { return axios({method: 'post', url: htfd.closeGate, params: params}) }

//停止接口
export const postStopGate = (params) => { return axios({method: 'post', url: htfd.stopGate, params: params}) }

//开闸、关闸、停止刷数据库接口
export const postGatePostionData = (params) => { return axios({method: 'post', url: htfd.gatePostionData, params: params}) }
//远程、现地接口
export const postSwitchREmote = (params) => { return axios({method: 'post', url: htfd.switchREmote, params: params}) }

//明渠流量计数据
export const getchannelMessage = () => { return axios({method: 'post', url: htfd.channelMessage}) }

//查询名流数据信息
export const postsearchChannel = (params) => { return axios({method: 'post', url: htfd.searchChannel, params: params}) }
