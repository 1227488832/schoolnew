"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[587],{3388:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"updata"}},[a("Music"),a("div",{staticClass:"home_container"},[a("div",{staticClass:"iconback",on:{click:t.back}},[a("img",{attrs:{src:e(84),alt:""}})]),t._m(0),a("div",{staticClass:"title"},[t._v("上传游戏信息")]),a("div",{staticClass:"home_form"},[a("van-field",{attrs:{label:"游戏ID:",readonly:""},on:{focus:t.userId},model:{value:t.userForm.gameId,callback:function(a){t.$set(t.userForm,"gameId",a)},expression:"userForm.gameId"}}),a("van-field",{attrs:{label:"游戏段位:"},on:{focus:function(a){t.show=!0}},model:{value:t.userForm.gameValue,callback:function(a){t.$set(t.userForm,"gameValue",a)},expression:"userForm.gameValue"}}),a("van-action-sheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}})],1),t._m(1),a("div",{staticClass:"uploader"},[a("div",{staticClass:"upload-bg"},[t.scanData?a("img",{staticStyle:{width:"100%"},attrs:{src:t.scanData,alt:""}}):a("img",{attrs:{src:e(8091),alt:""}})]),a("van-uploader",{attrs:{"after-read":t.afterRead}},[a("div",{staticClass:"updatabtn"},[t._v("上传游戏截图")])]),t.picloalog?a("Vue-imageCutting",{attrs:{picturePath:t.fileContent,crossDomain:t.crossDomainData},on:{confirm:t.confirmMethod,cancel:t.cancelMethod,rotate:t.rotateMethod,restore:t.restoreMethod,loading:t.loadingMethod,touching:t.touchingMethod}}):t._e()],1),t._m(2),a("div",{staticClass:"back",staticStyle:{"margin-bottom":"0.2rem"}},[a("div",{on:{click:t.truebtn}},[t._v("确认上传")])]),a("div",{staticClass:"up"},[a("van-popup",{model:{value:t.dialogValue,callback:function(a){t.dialogValue=a},expression:"dialogValue"}},[a("div",{staticClass:"dialog_title"},[a("span",[t._v("「上传提示」")])]),a("div",{staticClass:"word"},[a("div",{staticClass:"word_left"},[a("p",[t._v("请到活动现场处确认")]),a("p",[t._v("凭借上传成功截图方可领奖")]),a("p",[t._v("否则无效")])])]),a("div",{staticClass:"dialog_btn"},[a("div",{staticClass:"dialog_back"},[a("div",{on:{click:t.hcback}},[t._v("取消")])]),a("div",{staticClass:"dialog_back"},[a("div",{on:{click:t.goto}},[t._v("确定")])])])])],1),a("div",{staticClass:"uploadSuccess"},[a("van-popup",{model:{value:t.uploadSuccessVisible,callback:function(a){t.uploadSuccessVisible=a},expression:"uploadSuccessVisible"}},[a("div",{staticClass:"successContent"},[a("div",{staticClass:"id"},[t._v("您的游戏ID："+t._s(t.userForm.gameId||"无"))]),a("div",{staticClass:"v"},[t._v("您的游戏段位："+t._s(t.userForm.gameValue||"无"))]),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.scanData}})]),a("div",{staticClass:"tip"},[t._v("请将此页面出示给现场工作人员兑换奖品！")]),a("div",{staticClass:"dialog_back"},[a("div",{on:{click:function(a){t.uploadSuccessVisible=!1}}},[t._v("确定")])])])])],1),t.loadingData?t._e():a("van-loading",{attrs:{type:"spinner",size:"24px"}},[t._v("加载中...")])],1)],1)},s=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home_title"},[a("div",[t._v("雀巢咖啡，提醒每一天")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"tixs"},[a("p",[t._v("示例:")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"tix"},[a("p",[t._v("每位ID限量只能领取一次奖励！重复领取无效")])])}],o=(e(9512),e(8979)),l=e(1093),n=e(174),c={components:{Music:n.Z},data(){return{picturePathData:"xxx.jpg",crossDomainData:!1,show:!1,actions:[{name:"最强王者"},{name:"无双王者"},{name:"荣耀王者"}],userForm:{gameId:"",gameValue:""},getInfo:{id:"",val:""},uploadSuccessVisible:!1,dialogValue:!1,updataimg:{cont:"",name:"",lastModified:""},picdata:{recognize_id:"",recognize_level:"",img_uri:""},fileContent:"",file:null,loadingData:!0,loadimg:!1,option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],picloalog:!1,scanData:""}},mounted(){this.init()},methods:{userId(t){this.Toast("无需输入，请先上传图片")},init(){(0,o.nX)({url:""}).then((t=>{if(console.log(t),200===t.status){let a=t.data||{};jWeixin.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:[]}),jWeixin.ready((()=>{jWeixin.hideMenuItems({menuList:["menuItem:copyUrl","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone"]}),jWeixin.hideOptionMenu()}))}else this.handleError(t)}))},touchingMethod(t){},restoreMethod(t){console.log(t)},rotateMethod(t){console.log(t)},cancelMethod(t){console.log(t),this.picloalog=!1},loadingMethod(t){console.log(t)},confirmMethod(t){this.picloalog=!1,this.scanData=t.base64,this.getImageInfo()},cutDown(t){console.log(t)},onSelect(t){this.show=!1,this.userForm.gameValue=t.name},hcback(){this.dialogValue=!1},truebtn(){this.dialogValue=!0},back(){this.$router.push("/pagefive")},afterRead(t){console.log(t),this.file=t,this.updataimg.lastModified=t.file.type,this.updataimg.cont=t.content,this.fileContent=t.content,this.picloalog=!0},confirm(){this.dialogValue=!1},async getImageInfo(){this.getInfo.val="",this.getInfo.id="",this.loadingData=!1;let t="wUbxngjGDBUEsS-kulRcXh2Jp-9dXkVM",a="gxcRJD0wqwVElf2OemeFMLWqLIo9ywNR",e=this.scanData,i=new FormData;i.append("api_key",t),i.append("api_secret",a),i.append("image_base64",e),(0,l.ZP)({url:"https://api-cn.faceplusplus.com/imagepp/v2/generalocr",method:"post",data:i}).then((t=>{if(this.loadingData=!0,200==t.status){let a=t.data.text_info,e=a.findIndex((t=>"我的排名"===t.line_content));if(e<0)return void this.Toast("请截图包含我的排名部分");let i=a[e+1]||{};this.userForm.gameId=i.line_content||"未获取到",this.getInfo.id=i.line_content||"未获取到";let s=["最强王者","无双王者","荣耀"],o="";for(let t of a.slice(e)){let a=t.line_content,e=s.findIndex((t=>a.includes(t)));e>=0&&(o=s[e])}if(!o)return void this.Toast("很遗憾 您的段位没达到活动要求，邀请小伙伴们一起上分吧！");this.userForm.gameValue=o,this.getInfo.val=o}else this.Toast("获取截图信息失败，请重试")}))},async goto(){if(this.loadingData=!1,!this.getInfo.val)return this.Toast("很遗憾 您的段位没达到活动要求，邀请小伙伴们一起上分吧！"),void(this.loadingData=!0);if(""==this.userForm.gameId)return this.Toast("请输入游戏ID"),void(this.loadingData=!0);if(""==this.userForm.gameValue)return this.Toast("请输入段位"),void(this.loadingData=!0);if(this.getInfo.val!==this.userForm.gameValue)return this.Toast("请选择与上传图片一致的游戏段位！"),void(this.loadingData=!0);this.loadingData=!1;let t=await(0,o.WA)(),a=t.data.data;console.log(a);const e=new FormData,i=(new Date).getTime()+".jpg";e.append("name",`${i}`),e.append("key",a.dir+i),e.append("policy",a.policy),e.append("OSSAccessKeyId",a.accessid),e.append("callback",a.callback),e.append("signature",a.signature),e.append("file",this.file.file),console.log(this.file);await(0,o.F_)(a.host,e).then((t=>{console.log(t),200==t.data.status&&(this.picdata.img_uri=t.data.data.filename)}));console.log(this.picdata.img_uri),(0,o.FF)({game_id:this.userForm.gameId,game_level:this.userForm.gameValue,recognize_id:this.getInfo.id,recognize_level:this.getInfo.val,img_uri:this.picdata.img_uri}).then((t=>{console.log(t),this.loadingData=!0,200==t.data.status?(this.dialogValue=!1,this.uploadSuccessVisible=!0):this.Toast(t.data.msg)}))}}},d=c,r=e(8412),u=(0,r.Z)(d,i,s,!1,null,"4f183870",null),g=u.exports},84:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAYCAYAAACyVACzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOTFGNzE5NjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFOTFGNzFBNjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUU5MUY3MTc2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5MUY3MTg2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vGhMFAAADrElEQVR42tyZW0gUURzGZ7Swm9FlKSvpAkVgRCWWFEkUXbaLFtntIQgpiZ56q16iXqqH3nrvoYigjLD7hdhuZFlk9VBKUqIR0QVLStNV9/Qd+AYOw9nZ44yzrg38mNmd/+7O+fxfj7YQwvJxjAJFoAe8Au0B7QbFMcTHZ8aACrATPAONSUQwtftvxZoEKsF+8Bv8AgvAX9ALpJsmwDiwHmwHP8EnkA/G874b4To718J1zxTLdda9Z2muda99iTUTHACbwA9wETwBXbxvc1FSlK1gGfgCzoD7ip2l2LtfC8217uG9coed4n7onjUPHAErwXtwiTmoRyPoDrAEvANnwXONnRVwQV6CiH76DV9iSQ85ChaCN+AC80/CZTeXYVcIXoDToF5j51607QoVk0NkWs7KZsgdAxPBI3AdNLseNosVr4J2d+l5jQbekUgSekE8K+1hmAv2gH1gAohRqO+uBxkBisFmkAdugCrwdQC9Q6TTs2QlO8zcI/9KV8E90OZKzCPBKrCR78nwvAZaDfOJ2xNECKLYKX4zkFiykp0AURAH1aCGrYH65REm+yir3HlWvHZNlfN6SNtnGJrah5bg89kalIJv4CYrWRd/1MkxEYZdCVsDmZ8eU1yvPJIxiTqIWHIhc8AhsIEJXOant6BbWag8TwNbWBnrGXq6FsI2FCVVP2XiQSKdYk0FB0EZQ+kl+KAp+REKVcwW4hxooJ2tnHX5xw4QVqKPnwstPLPYIkxhwv7DL8pS7qu2clwZBjqV92yDsEtnuIVaDVvASeac1WwqH9LD2hRbOeJcZmgWsmreBk85I1p+5q1+SuRpqYa2skVTAHaBcjAa1LHBbOGQnFBmv+VgMRjKankFfFRsejWDcm+S18JjoA5rkLY8cqUwEcvZVlkD9oJFzF13mMQ7lJ2F4dxtWAtmcw6s5lZMRxLBvHYbvETLWLGcYz63Ysq56BqOO82KCPI8HawDS9mLxShuE8PVVKhUImW0WE71K+XYU8Awk+PMa3qPYMuQy5CMsrI2sPeqVbxMJAnNVF5m+RQs7WKpQ/Juelk724sY578eZVGzuOFXwg2/W+SzT8/y61UDJpZzTAbbuEU8gw2r42VxxXPGghUchfKY66pYLDoNBBMGHpbxYskjh+FWyZCT28qnKIgaZtmcCMrYwEovO86wNAnD/qiIoYjVl21lOSM+YE6qZdWMa+y66UlN9LIiwy48kWQRGTM/2j7/FZbDbr5V6eaD2A2K458AAwCJWDlL/sW9gAAAAABJRU5ErkJggg=="},8091:function(t,a,e){t.exports=e.p+"img/yxsl.2bbd8d45.png"}}]);
//# sourceMappingURL=587.8d5b27be.js.map