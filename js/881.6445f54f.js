"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[881],{5881:function(s,t,i){i.r(t),i.d(t,{default:function(){return r}});var e=function(){var s=this,t=s._self._c;return t("div",{attrs:{id:"twoupdata"}},[t("Music"),t("div",{staticClass:"home_container"},[t("div",{staticClass:"iconback",on:{click:s.back}},[t("img",{attrs:{src:i(84),alt:""}})]),s._m(0),t("div",{staticClass:"home_info"},[t("div",{staticClass:"home_info_cont"},[t("p",[s._v("已兑换咖啡：")]),t("p",[s._v(s._s(s.userInfo.conversion_num))])]),t("div",{staticClass:"home_info_cont"},[t("p",[s._v("已生成咖啡豆：")]),t("p",[s._v(s._s(s.userInfo.beans))])]),3==s.userInfo.beans?t("div",{staticClass:"hecheng",on:{click:s.hcbtn}},[s._v(" 合成 ")]):s._e()]),t("div",{staticClass:"home_ing"},[0===s.userInfo.beans?t("img",{attrs:{src:i(2747),alt:""}}):s._e(),1===s.userInfo.beans?t("img",{attrs:{src:i(353),alt:""}}):s._e(),2===s.userInfo.beans?t("img",{attrs:{src:i(190),alt:""}}):s._e(),3===s.userInfo.beans?t("img",{attrs:{src:i(9485),alt:""}}):s._e()]),t("div",{staticClass:"pgree"},[t("van-progress",{attrs:{"pivot-color":"#ffffff","text-color":"#612a06",percentage:s.countnum,"stroke-width":"8"}})],1),t("div",{staticClass:"time"},[s._v(s._s(s.formatTime(s.totalTime/1e3)))]),s._m(1),t("div",{staticClass:"back"},[t("div",{on:{click:s.toggleCountState}},[s._v(s._s(s.isCountTime?"暂停计时":"开始计时"))])]),t("div",{staticClass:"success"},[t("van-popup",{model:{value:s.dialogValue,callback:function(t){s.dialogValue=t},expression:"dialogValue"}},[t("div",{staticClass:"dialog_title"},[t("span",[s._v("「成功提示」")])]),t("div",{staticClass:"dialog_tis",staticStyle:{"font-size":"0.5333rem","margin-top":"1.3067rem"}},[s._v(" 恭喜您! ")]),t("div",{staticClass:"dialog_tis"},[s._v("今日的专注时间挑战已完成！")]),t("div",{staticClass:"dialog_tis"},[s._v("获得三颗咖啡豆,收集后，前往兑换处，")]),t("div",{staticClass:"dialog_tis"},[s._v("兑换咖啡券吧！")]),t("div",{staticClass:"dialog_back"},[t("div",{on:{click:function(t){s.dialogValue=!1}}},[s._v("确定")])])])],1),t("div",{staticClass:"dhsuccess"},[t("van-popup",{model:{value:s.dhsuccessdialog,callback:function(t){s.dhsuccessdialog=t},expression:"dhsuccessdialog"}},[t("div",{staticClass:"dialog_title"},[t("span",[s._v("「兑换提示」")])]),t("div",{staticClass:"word"},[t("div",{staticClass:"word_left"},[t("p",[s._v("亲爱的")]),t("p",[s._v(s._s(this.name.name))]),t("p",[s._v("同学")])]),t("div",{staticClass:"word_right"},[t("p",[s._v("您拥有")]),t("p",[s._v("3")]),t("p",[s._v("颗咖啡豆，可兑换元醇香滑一罐！")])]),t("h1",[s._v("是否兑换？")])]),t("div",{staticClass:"tis"},[t("p",[s._v("请到活动现场处确认,凭借兑换成功截图才可领奖，否则无效")])]),t("div",{staticClass:"dialog_btn"},[t("div",{staticClass:"dialog_back"},[t("div",{on:{click:s.hcback}},[s._v("取消")])]),t("div",{staticClass:"dialog_back"},[t("div",{on:{click:s.coffeesynthesis}},[s._v("确定")])])])])],1),t("div",{staticClass:"timedialog"},[t("van-popup",{model:{value:s.timedialog,callback:function(t){s.timedialog=t},expression:"timedialog"}},[t("div",{staticClass:"dialog_title"},[t("span",[s._v("「剩余提示」")])]),t("div",{staticClass:"word"},[t("div",{staticClass:"word_left"},[t("p",[s._v("今天的专注小工具有效时间")])]),t("div",{staticClass:"word_right"},[t("p",[s._v("还剩")]),t("p",[s._v(s._s(s.minute))]),t("p",[s._v("分钟")])])]),t("div",{staticClass:"dialog_back"},[t("div",{on:{click:function(t){s.timedialog=!1}}},[s._v("确定")])])])],1),t("div",{staticClass:"lastdialog"},[t("van-popup",{model:{value:s.lastdialog,callback:function(t){s.lastdialog=t},expression:"lastdialog"}},[t("div",{staticClass:"lastdialog_name"},[t("p",[s._v("微信昵称:")]),t("p",[s._v(s._s(this.name.name))])]),t("div",{staticClass:"dialog_back"},[t("div",{on:{click:function(t){s.lastdialog=!1}}},[s._v("确定")])])])],1)])],1)},a=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"home_title"},[t("div",[s._v("雀巢咖啡，提醒每一天")]),t("h5",[s._v("同学，请放下手机专心读书吧！")])])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"tix"},[t("p",[s._v("集齐：三颗咖啡豆，请前往线下活动处兑换")])])}],o=(i(9512),i(8979));const n=s=>{var t=parseInt(s),i=0,e=0;t>=60&&(i=parseInt(t/60),t=parseInt(t%60),i>=60&&(e=parseInt(i/60),i=parseInt(i%60)));var a=`${e<10?"0"+e:e}:${i<10?"0"+i:i}:${t<10?"0"+t:t}`;return a};var l=i(1604),c=i(174),d={components:{Music:c.Z},data(){return{userInfo:{conversion_num:0,beans:0},gameId:"",gameValue:"",dialogValue:!1,dhsuccessdialog:!1,timedialog:!1,lastdialog:!1,count:0,timer:null,dialogIndex:0,outTime:"",name:window.sessionStorage.getItem("userInfo"),curStartTime:null,keyTime:0,totalTime:0,isCountTime:!1,lockTime:null,lockIsCountTime:!1,addNum:1,isVisible:!0}},comments:{...(0,l.rn)(["outTime"])},computed:{countnum(){return Math.floor(this.totalTime/108e3)},minute(){return Math.ceil((108e5-this.totalTime)/6e4)}},mounted(){console.log(this.outTime),window.localStorage.clear(),this.getInfo(),document.addEventListener("visibilitychange",this.handleVisiable)},destroyed(){document.removeEventListener("visibilitychange",this.handleVisiable)},methods:{...(0,l.OI)(["TimeChange"]),handleVisiable(s){switch(console.log(s),s.target.visibilityState){case"prerender":console.log("网页预渲染，内容不可见");break;case"hidden":this.hiddenHandle();break;case"visible":this.visibleHandle();break}},formatTime(s){return n(s)},iconback(){this.$router.go(-1)},hcback(){this.dhsuccessdialog=!1},getInfo(){(0,o.Rh)().then((s=>{console.log(s),200==s.data.status&&(this.userInfo.conversion_num=s.data.data.conversion_num,this.userInfo.beans=s.data.data.beans,this.totalTime=36e5*this.userInfo.beans)}))},toggleVisible(){console.log("模拟息屏操作"),this.isVisible=!this.isVisible,this.isVisible?this.visibleHandle():this.hiddenHandle()},hiddenHandle(){this.lockIsCountTime=this.isCountTime,this.isCountTime&&(this.isCountTime=!1,this.lockTime=new Date,console.log("内容不可见，处理后台、最小化、锁屏状态"))},visibleHandle(){if(!this.lockIsCountTime)return;let s=(new Date).getTime()-this.lockTime.getTime();console.log("锁屏时间",s),this.totalTime+=s,this.totalTime>72e5&&0===this.userInfo.beans&&(this.userInfo.beans+=1,this.addNum=2),this.totalTime>108e5&&(1===this.userInfo.beans&&(this.userInfo.beans+=1,this.addNum=2),2===this.userInfo.beans&&(this.userInfo.beans+=2,this.addNum=3)),this.isCountTime=!0,this.startCountTime(),console.log("处于正常打开")},toggleCountState(){console.log(this.isCountTime),this.isCountTime=!this.isCountTime,this.isCountTime&&this.startCountTime()},startCountTime(){console.log("开始计时",this.isCountTime),this.curStartTime=new Date,console.log(this.curStartTime),this.keyTime=(new Date).getTime(),this.countTime()},countTime(){if(!this.isCountTime)return;let s=(new Date).getTime(),t=s-this.keyTime;this.keyTime=s,this.totalTime+=t,this.totalTime>36e5&&0===this.userInfo.beans&&(this.userInfo.beans+=1,this.addBeans()),this.totalTime>72e5&&1===this.userInfo.beans&&(this.userInfo.beans+=1,this.addBeans()),this.totalTime>108e5&&(this.isCountTime=!1,this.totalTime=108e5,2===this.userInfo.beans&&(this.userInfo.beans+=1,this.addBeans())),requestAnimationFrame(this.countTime)},addBeans(){console.log("添加xxx颗",this.addNum),(0,o.DZ)({beans:this.addNum}).then((s=>{console.log(s),200==s.data.status?(this.addNum=1,this.timedialog=!0):this.Toast(s.data.msg||"生成咖啡豆失败，请重试")}))},stopCountTime(){},coffeesynthesis(){this.dhsuccessdialog=!1,(0,o.DP)().then((s=>{console.log(s),10003==s.data.status&&this.Toast(s.data.msg),10007==s.data.status&&this.Toast(s.data.msg),10008==s.data.status&&this.Toast(s.data.msg),15e3==s.data.status&&this.Toast(s.data.msg),200==s.data.status&&(this.lastdialog=!0,this.Toast(s.data.msg),this.userInfo.conversion_num=s.data.data.conversion_num,this.userInfo.beans=s.data.data.beans,this.totalTime=36e5*this.userInfo.beans)}))},hcbtn(){this.dhsuccessdialog=!0},back(){this.$router.push("/pagetwo")},goto(){this.getCode(),this.timedialog=!0}}},m=d,h=i(8412),u=(0,h.Z)(m,e,a,!1,null,"76356d18",null),r=u.exports},84:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAYCAYAAACyVACzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOTFGNzE5NjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFOTFGNzFBNjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUU5MUY3MTc2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5MUY3MTg2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vGhMFAAADrElEQVR42tyZW0gUURzGZ7Swm9FlKSvpAkVgRCWWFEkUXbaLFtntIQgpiZ56q16iXqqH3nrvoYigjLD7hdhuZFlk9VBKUqIR0QVLStNV9/Qd+AYOw9nZ44yzrg38mNmd/+7O+fxfj7YQwvJxjAJFoAe8Au0B7QbFMcTHZ8aACrATPAONSUQwtftvxZoEKsF+8Bv8AgvAX9ALpJsmwDiwHmwHP8EnkA/G874b4To718J1zxTLdda9Z2muda99iTUTHACbwA9wETwBXbxvc1FSlK1gGfgCzoD7ip2l2LtfC8217uG9coed4n7onjUPHAErwXtwiTmoRyPoDrAEvANnwXONnRVwQV6CiH76DV9iSQ85ChaCN+AC80/CZTeXYVcIXoDToF5j51607QoVk0NkWs7KZsgdAxPBI3AdNLseNosVr4J2d+l5jQbekUgSekE8K+1hmAv2gH1gAohRqO+uBxkBisFmkAdugCrwdQC9Q6TTs2QlO8zcI/9KV8E90OZKzCPBKrCR78nwvAZaDfOJ2xNECKLYKX4zkFiykp0AURAH1aCGrYH65REm+yir3HlWvHZNlfN6SNtnGJrah5bg89kalIJv4CYrWRd/1MkxEYZdCVsDmZ8eU1yvPJIxiTqIWHIhc8AhsIEJXOant6BbWag8TwNbWBnrGXq6FsI2FCVVP2XiQSKdYk0FB0EZQ+kl+KAp+REKVcwW4hxooJ2tnHX5xw4QVqKPnwstPLPYIkxhwv7DL8pS7qu2clwZBjqV92yDsEtnuIVaDVvASeac1WwqH9LD2hRbOeJcZmgWsmreBk85I1p+5q1+SuRpqYa2skVTAHaBcjAa1LHBbOGQnFBmv+VgMRjKankFfFRsejWDcm+S18JjoA5rkLY8cqUwEcvZVlkD9oJFzF13mMQ7lJ2F4dxtWAtmcw6s5lZMRxLBvHYbvETLWLGcYz63Ysq56BqOO82KCPI8HawDS9mLxShuE8PVVKhUImW0WE71K+XYU8Awk+PMa3qPYMuQy5CMsrI2sPeqVbxMJAnNVF5m+RQs7WKpQ/Juelk724sY578eZVGzuOFXwg2/W+SzT8/y61UDJpZzTAbbuEU8gw2r42VxxXPGghUchfKY66pYLDoNBBMGHpbxYskjh+FWyZCT28qnKIgaZtmcCMrYwEovO86wNAnD/qiIoYjVl21lOSM+YE6qZdWMa+y66UlN9LIiwy48kWQRGTM/2j7/FZbDbr5V6eaD2A2K458AAwCJWDlL/sW9gAAAAABJRU5ErkJggg=="},2747:function(s,t,i){s.exports=i.p+"img/time0.d1b5a427.png"},353:function(s,t,i){s.exports=i.p+"img/time1.cdfc2592.png"},190:function(s,t,i){s.exports=i.p+"img/time2.adc9b24b.png"},9485:function(s,t,i){s.exports=i.p+"img/time3.9f3bf98d.png"}}]);
//# sourceMappingURL=881.6445f54f.js.map