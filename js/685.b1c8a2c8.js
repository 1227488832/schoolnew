"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[685],{8685:function(a,t,e){e.r(t),e.d(t,{default:function(){return u}});var i=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"updata"}},[t("div",{staticClass:"home_container"},[t("div",{staticClass:"iconback"},[t("van-icon",{attrs:{name:"arrow-left"},on:{click:a.back}})],1),a._m(0),t("div",{staticClass:"title"},[a._v("上传游戏信息")]),t("div",{staticClass:"home_form"},[t("van-field",{attrs:{label:"游戏ID:"},model:{value:a.userForm.gameId,callback:function(t){a.$set(a.userForm,"gameId",t)},expression:"userForm.gameId"}}),t("van-field",{attrs:{label:"游戏段位:"},model:{value:a.userForm.gameValue,callback:function(t){a.$set(a.userForm,"gameValue",t)},expression:"userForm.gameValue"}})],1),a._m(1),t("div",{staticClass:"uploader"},[a._m(2),a.loadimg?a._e():t("van-uploader",{attrs:{"after-read":a.afterRead}},[t("div",{staticClass:"updatabtn"},[a._v("上传游戏截图")])])],1),a._m(3),t("div",{staticClass:"back",staticStyle:{"margin-bottom":"0.2rem"}},[t("div",{on:{click:a.truebtn}},[a._v("确认上传")])]),t("van-popup",{model:{value:a.dialogValue,callback:function(t){a.dialogValue=t},expression:"dialogValue"}},[t("div",{staticClass:"dialog_title"},[t("span",[a._v("「上传提示」")])]),t("div",{staticClass:"word"},[t("div",{staticClass:"word_left"},[t("p",[a._v("请到活动现场处确认")]),t("p",[a._v("凭借上传成功截图方可领奖")]),t("p",[a._v("否则无效")])])]),t("div",{staticClass:"dialog_btn"},[t("div",{staticClass:"dialog_back"},[t("div",{on:{click:a.hcback}},[a._v("取消")])]),t("div",{staticClass:"dialog_back"},[t("div",{on:{click:a.goto}},[a._v("确定")])])])]),a.loadingData?a._e():t("van-loading",{attrs:{type:"spinner",size:"24px"}},[a._v("加载中...")])],1)])},s=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"home_title"},[t("div",{staticClass:"line"}),t("div",[a._v("雀巢咖啡，提醒每一天")]),t("div",{staticClass:"line"})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"tixs"},[t("p",[a._v("示例:")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"upload-bg"},[t("img",{attrs:{src:e(8091),alt:""}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"tix"},[t("p",[a._v("每位ID限量只能领取一次奖励！重复领取无效")])])}],l=(e(7658),e(5214)),o=e(70),n={data(){return{userForm:{gameId:"",gameValue:""},dialogValue:!1,updataimg:{cont:"",name:"",lastModified:""},picdata:{recognize_id:"",recognize_level:"",img_uri:""},file:null,loadingData:!0,loadimg:!1,option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}]}},methods:{hcback(){this.dialogValue=!1},truebtn(){this.dialogValue=!0},back(){this.$router.push("/pagefive")},afterRead(a){this.loadingData=!1,console.log(a),this.file=a,this.updataimg.lastModified=a.file.type,this.updataimg.cont=a.content;let t="wUbxngjGDBUEsS-kulRcXh2Jp-9dXkVM",e="gxcRJD0wqwVElf2OemeFMLWqLIo9ywNR",i=a.content,s=new FormData;s.append("api_key",t),s.append("api_secret",e),s.append("image_base64",i),(0,o.ZP)({url:"https://api-cn.faceplusplus.com/imagepp/v2/generalocr",method:"post",data:s}).then((a=>{if(console.log(a),200==a.status){this.loadimg=this.updataimg.cont,this.loadingData=!0;let s=a.data.text_info;console.log(s);let l=s[s.length-5].line_content.indexOf("我的排名");if(0==l){console.log(s[s.length-4].line_content),console.log(s[s.length-1].line_content);let l=s[s.length-1].line_content;var t=l,e=/[\u4e00-\u9fa5]/g,i=t.match(e);t=i.join(""),console.log(t),this.picdata.recognize_level=t,this.picdata.recognize_id=a.data.request_id}}}))},confirm(){this.dialogValue=!1},async goto(a){if(console.log(a),this.loadingData=!1,""==this.userForm.gameId)return this.Toast("请输入游戏ID"),void(this.loadingData=!0);if(""==this.userForm.gameValue)return this.Toast("请输入段位"),void(this.loadingData=!0);if(""==this.picdata.recognize_id)return this.Toast("请先上传图片"),void(this.loadingData=!0);let t=await(0,l.WA)(),e=t.data.data;console.log(e);const i=new FormData,s=this.file.file.name;i.append("name",`${(new Date).getTime()}${s}`),i.append("key",e.dir+s),i.append("policy",e.policy),i.append("OSSAccessKeyId",e.accessid),i.append("callback",e.callback),i.append("signature",e.signature),i.append("file",this.file.file),console.log(this.file);await(0,l.F_)(e.host,i).then((a=>{console.log(a),200==a.data.status&&(this.picdata.img_uri=a.data.data.filename)}));(0,l.FF)({game_id:this.userForm.gameId,game_level:this.userForm.gameValue,recognize_id:this.picdata.recognize_id,recognize_level:this.picdata.recognize_level,img_uri:this.picdata.img_uri}).then((a=>{console.log(a),this.loadingData=!0,200==a.data.status?this.dialogValue=!0:this.Toast(a.data.msg)}))}}},c=n,d=e(1001),r=(0,d.Z)(c,i,s,!1,null,"4378eef0",null),u=r.exports},8091:function(a,t,e){a.exports=e.p+"img/yxsl.2bbd8d45.png"}}]);
//# sourceMappingURL=685.b1c8a2c8.js.map