//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   latitude:28.697999,
   longitude:115.855718,
   scale: 18,
   marks:
   {"data":
   [{"id":0,"title":"去这里","iconPath":"/images/marker.png","latitude":28.714621,"longitude":115.82749,"width":45,"height":50},
   {"id":1,"title":"去这里","iconPath":"/images/markers.png","latitude":28.715375,"longitude":115.828924,"width":45,"height":50},
   {"id":2,"title":"去这里","iconPath":"/images/marker.png","latitude":28.711442,"longitude":115.827014,"width":45,"height":50},
   {"id":3,"title":"去这里","iconPath":"/images/markers.png","latitude":28.71259,"longitude":115.828344,"width":45,"height":50},
   {"id":4,"title":"去这里","iconPath":"/images/markers.png","latitude":28.717671,"longitude":115.825963,"width":45,"height":50},
   {"id":5,"title":"去这里","iconPath":"/images/markers.png","latitude":28.731232,"longitude":115.832978,"width":45,"height":50},
   {"id":6,"title":"去这里","iconPath":"/images/markers.png","latitude":28.724559,"longitude":115.834195,"width":45,"height":50},
   {"id":7,"title":"去这里","iconPath":"/images/markers.png","latitude":28.682892,"longitude":115.858198,"width":45,"height":50}]}
  },
  bindregionchange: function (e) {
    if(e.type == "begin"){
      console.log("begin");
    }
    else if (e.type == "end") {
      console.log("end");
    }
  },
  bindcontroltap: function (e) {
    console.log(e);
    switch(e.controlId){
      case 1:this.movetoPosition();
      break;
      case 2: wx.scanCode({
        success:(res) => {
          console.log(res);
        }
      })
    }
  },
  movetoPosition: function () {
    this.mapCtx.moveToLocation()
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    wx.getLocation({
      type:"gcj02",
      success:(res) => {
        console.log(res);
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      }
    }),
    wx.getSystemInfo({
      success:(res) => {
        this.setData({
          controls:[{
            id: 1,
            iconPath: '/images/location.png',
            position: {
              left: 20,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '/images/use.png',
            position: {
              left: res.windowWidth/2 - 45,
              top: res.windowHeight - 100,
              width: 90,
              height: 90
            },
            clickable: true
          },
          {
            id: 3,
            iconPath: '/images/warn.png',
            position: {
              left: res.windowWidth - 70,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 4,
            iconPath: '/images/marker.png',
            position: {
              left: res.windowWidth/2 - 11,
              top: res.windowHeight/2 - 45,
              width: 22,
              height: 45
            },
            clickable: true
          },
          {
            id: 5,
            iconPath: '/images/avatar.png',
            position: {
              left: res.windowWidth - 68,
              top: res.windowHeight - 155,
              width: 45,
              height: 45
            },
            clickable: true
          }]
        })
      }
    })
  },
  onShow: function () {
    console.log("onShow");
    this.mapCtx = wx.createMapContext("ofoMap");
    this.movetoPosition()
  }
})
