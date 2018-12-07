Page({
  data: {
    text:'Hello New Page!',
  },
  onLoad() {},
 
  onclick:function(){
    var self = this;
    dd.httpRequest({
        url: 'https://api.apiopen.top/searchAuthors/',
        method: 'POST',
        data: {
          //from: '钉钉',
          //production: 'Dingtalk',
          name:'李白',
        },
        dataType: 'json',
        success: function(res) {  
          self.setData({
            arr:res.data.result,
          });
          //dd.alert({content: 'success'});
        },
        fail: function(res) {
          self.setData({
            text:JSON.stringify(res),
          });
          dd.alert({content: JSON.stringify(res)});
        },
        complete: function(res) {
          dd.hideLoading();
          //dd.alert({content: 'complete'});
        }
      });
  },
  /**
  * 打开本地视频
  */
 bindButtonTap: function() {
  var that = this
  //拍摄视频或从手机相册中选视频
  // dd.chooseVideo({
  //   sourceType: ['album','camera'],
  //   maxDuration: 60,
  //   success:(res)=> {
  //     console.log(res.apFilePath)
  //   },
  //   fail: (err)=> {
  //     console.log(err)
  //   }
  // });
  // dd.chooseVideo({
  //  //album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
  //  sourceType: ['album', 'camera'],
  //  //拍摄视频最长拍摄时间，单位秒。最长支持60秒
  //  maxDuration: 60,
  //  //前置或者后置摄像头，默认为前后都有，即：['front', 'back']
  //  camera: ['front','back'],
  //  //接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
  //  success: function(res) {
  //   console.log(res.tempFilePaths[0])
  //   that.setData({
  //    src: res.tempFilePaths[0]
  //   })
  //  }
  // })
 },
 /**
  * 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'}
  */
 videoErrorCallback: function(e) {
  dd.alert({content: e.detail.errMsg})
  console.log('视频错误信息:')
  console.log(e.detail.errMsg)
 }
});
