"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[579],{4579:function(t,s,i){i.r(s),i.d(s,{default:function(){return g}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"twoupdata"}},[s("Music"),s("div",{staticClass:"home_container"},[s("div",{staticClass:"iconback",on:{click:t.back}},[s("img",{attrs:{src:i(84),alt:""}})]),t._m(0),s("div",{staticClass:"home_info"},[s("div",{staticClass:"home_info_cont"},[s("p",[t._v("已兑换咖啡：")]),s("p",[t._v(t._s(t.userInfo.conversion_num))])]),s("div",{staticClass:"home_info_cont"},[s("p",[t._v("已生成咖啡豆：")]),s("p",[t._v(t._s(t.userInfo.beans))])]),3==t.userInfo.beans&&2==t.timedata?s("div",{staticClass:"hecheng",on:{click:t.hcbtn}},[t._v(" 合成 ")]):t._e()]),s("div",{staticClass:"home_ing"},[0===t.userInfo.beans?s("img",{attrs:{src:i(2747),alt:""}}):t._e(),1===t.userInfo.beans?s("img",{attrs:{src:i(353),alt:""}}):t._e(),2===t.userInfo.beans?s("img",{attrs:{src:i(190),alt:""}}):t._e(),3===t.userInfo.beans?s("img",{attrs:{src:i(9485),alt:""}}):t._e()]),s("div",{staticClass:"pgree"},[s("van-progress",{attrs:{"pivot-color":"#ffffff","text-color":"#612a06",percentage:t.min(t.totalTime/1e3),"pivot-text":t.min(t.totalTime/1e3)+"min","stroke-width":"8"}}),s("img",{staticClass:"pgree_img_1",attrs:{src:i(7321),alt:""}}),s("img",{staticClass:"pgree_img_2",attrs:{src:i(7321),alt:""}}),s("img",{staticClass:"pgree_img_3",attrs:{src:i(7321),alt:""}})],1),s("div",{staticClass:"time"},[t._v(t._s(t.formatTime(t.totalTime/1e3)))]),t._m(1),s("div",{staticClass:"back"},[s("div",{on:{click:t.toggleCountState}},[t._v(" "+t._s(t.isCountTime?"暂停计时":"开始计时")+" ")])]),s("div",{staticClass:"success"},[s("van-popup",{model:{value:t.dialogValue,callback:function(s){t.dialogValue=s},expression:"dialogValue"}},[s("div",{staticClass:"dialog_title"},[s("span",[t._v("「成功提示」")])]),s("div",{staticClass:"dialog_tis",staticStyle:{"font-size":"0.5333rem","margin-top":"2rem"}}),s("div",{staticClass:"dialog_tis"},[t._v(" 恭喜您完成今日挑战，请在周二前往活动现场领取奖励； ")]),s("div",{staticClass:"dialog_back"},[s("div",{on:{click:function(s){t.dialogValue=!1}}},[t._v("确定")])])])],1),s("div",{staticClass:"dhsuccess"},[s("van-popup",{model:{value:t.dhsuccessdialog,callback:function(s){t.dhsuccessdialog=s},expression:"dhsuccessdialog"}},[s("div",{staticClass:"dialog_title"},[s("span",[t._v("「兑换提示」")])]),s("div",{staticClass:"word"},[s("div",{staticClass:"word_left"},[s("p",[t._v("亲爱的")]),s("p",[t._v(t._s(this.name))]),s("p",[t._v("同学")])]),s("div",{staticClass:"word_right"},[s("p",[t._v("您拥有")]),s("p",[t._v("3")]),s("p",[t._v("颗咖啡豆，可兑换元醇香滑一罐！")])]),s("h1",[t._v("是否兑换？")])]),s("div",{staticClass:"tis"},[s("p",[t._v("请到活动现场处确认,凭借兑换成功截图才可领奖，否则无效")])]),s("div",{staticClass:"dialog_btn"},[s("div",{staticClass:"dialog_back"},[s("div",{on:{click:t.hcback}},[t._v("取消")])]),s("div",{staticClass:"dialog_back"},[s("div",{on:{click:t.coffeesynthesis}},[t._v("确定")])])])])],1),s("div",{staticClass:"timedialog"},[s("van-popup",{model:{value:t.timedialog,callback:function(s){t.timedialog=s},expression:"timedialog"}},[s("div",{staticClass:"dialog_title"},[s("span",[t._v("「剩余提示」")])]),s("div",{staticClass:"word"},[s("div",{staticClass:"word_left"},[s("p",[t._v("今天的专注小工具有效时间")])]),s("div",{staticClass:"word_right"},[s("p",[t._v("还剩")]),s("p",[t._v(t._s(t.minute))]),s("p",[t._v("分钟")])])]),s("div",{staticClass:"dialog_back"},[s("div",{on:{click:function(s){t.timedialog=!1}}},[t._v("确定")])])])],1),s("div",{staticClass:"lastdialog"},[s("van-popup",{model:{value:t.lastdialog,callback:function(s){t.lastdialog=s},expression:"lastdialog"}},[s("div",{staticClass:"lastdialog_name"},[s("p",[t._v("微信昵称:")]),s("p",[t._v(t._s(this.name))])]),s("div",{staticClass:"dialog_back"},[s("div",{on:{click:function(s){t.lastdialog=!1}}},[t._v("确定")])])])],1)])],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"home_title"},[s("div",[t._v("雀巢咖啡，提醒每一天")]),s("h5",[t._v("同学，请放下手机专心读书吧！")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tix"},[s("p",[t._v("计时过程中，如需退出H5，请先点击暂停计时按钮")])])}],o=(i(6513),i(8979));const n=t=>{var s=parseInt(t),i=0,e=0;s>=60&&(i=parseInt(s/60),s=parseInt(s%60),i>=60&&(e=parseInt(i/60),i=parseInt(i%60)));var a=`${e<10?"0"+e:e}:${i<10?"0"+i:i}:${s<10?"0"+s:s}`;return a};var l=i(1604),c=i(4545),d={components:{Music:c.Z},data(){return{userInfo:{conversion_num:0,beans:0},gameId:"",gameValue:"",dialogValue:!1,dhsuccessdialog:!1,timedialog:!1,lastdialog:!1,count:0,timer:null,dialogIndex:0,outTime:"",name:"",curStartTime:null,keyTime:0,totalTime:0,isCountTime:!1,lockTime:null,lockIsCountTime:!1,addNum:1,isVisible:!0,timedata:"",todayTitle:!1}},comments:{...(0,l.rn)(["outTime","jlnowTime"])},computed:{countnum(){console.log(this.totalTime)},minute(){return Math.ceil((54e5-this.totalTime)/6e4)}},mounted(){console.log(this.$store.state.jlnowTime);let t=JSON.parse(window.sessionStorage.getItem("userInfo"));this.name=t.nickname,console.log(this.name),window.localStorage.clear(),this.getInfo(),document.addEventListener("visibilitychange",this.handleVisiable),this.getTime()},destroyed(){document.removeEventListener("visibilitychange",this.handleVisiable)},created(){},methods:{...(0,l.OI)(["TimeChange","jlnowTimeChange"]),getnowsj(){this.totalTime=this.$store.state.jlnowTime},getTime(){(0,o.Yg)().then((t=>{console.log(t),200==t.data.status&&(this.timedata=t.data.data.week)}))},handleVisiable(t){switch(console.log(t),t.target.visibilityState){case"prerender":console.log("网页预渲染，内容不可见");break;case"hidden":this.getnowsj(),this.hiddenHandle();break;case"visible":this.visibleHandle();break}},formatTime(t){return n(t)},min(t){return console.log(t),parseInt(t/60)},iconback(){this.$router.go(-1)},hcback(){this.dhsuccessdialog=!1},getInfo(){(0,o.Rh)().then((t=>{console.log(t),200==t.data.status&&(this.userInfo.conversion_num=t.data.data.conversion_num,this.userInfo.beans=t.data.data.beans,0==this.$store.state.jlnowTime?(this.totalTime=18e5*this.userInfo.beans,console.log(this.totalTime)):this.totalTime=this.$store.state.jlnowTime,this.totalTime=5399e3)}))},toggleVisible(){console.log("模拟息屏操作"),this.isVisible=!this.isVisible,this.isVisible?this.visibleHandle():this.hiddenHandle()},hiddenHandle(){this.lockIsCountTime=this.isCountTime,this.isCountTime&&(this.isCountTime=!1,this.lockTime=new Date,console.log("内容不可见，处理后台、最小化、锁屏状态"))},visibleHandle(){if(!this.lockIsCountTime)return;let t=(new Date).getTime()-this.lockTime.getTime();console.log("锁屏时间",t),this.totalTime+=t,this.totalTime>36e5&&0===this.userInfo.beans&&(this.userInfo.beans+=1,this.addNum=2),this.totalTime>54e5&&(1===this.userInfo.beans&&(this.userInfo.beans+=1,this.addNum=2),2===this.userInfo.beans&&(this.userInfo.beans+=2,this.addNum=3)),this.isCountTime=!0,this.startCountTime(),console.log("处于正常打开")},toggleCountState(){console.log(this.isCountTime),this.isCountTime=!this.isCountTime,this.isCountTime&&this.startCountTime()},startCountTime(){console.log("开始计时",this.isCountTime),3==this.userInfo.beans&&(this.todayTitle=!0),this.curStartTime=new Date,console.log(this.curStartTime),this.keyTime=(new Date).getTime(),this.countTime()},countTime(){if(this.jlnowTimeChange(this.totalTime),this.todayTitle&&this.Toast(" 您今日已完成挑战，周二兑换奖励后，可重新开始；"),!this.isCountTime)return;let t=(new Date).getTime(),s=t-this.keyTime;this.keyTime=t,this.totalTime+=s,this.totalTime>18e5&&0===this.userInfo.beans&&(this.userInfo.beans+=1,this.addBeans()),this.totalTime>36e5&&1===this.userInfo.beans&&(this.userInfo.beans+=1,this.addBeans()),this.totalTime>54e5&&(this.isCountTime=!1,this.totalTime=54e5,2===this.userInfo.beans&&(this.userInfo.beans+=1,this.addBeans())),requestAnimationFrame(this.countTime)},addBeans(){console.log("添加xxx颗",this.addNum),(0,o.DZ)({beans:this.addNum}).then((t=>{console.log(t),200==t.data.status?(this.addNum=1,3==t.data.data.beans?(this.dialogValue=!0,this.todayTitle=!0):this.timedialog=!0):this.Toast(t.data.msg||"生成咖啡豆失败，请重试")}))},stopCountTime(){},coffeesynthesis(){this.dhsuccessdialog=!1,(0,o.DP)().then((t=>{console.log(t),10003==t.data.status&&this.Toast(t.data.msg),10007==t.data.status&&this.Toast(t.data.msg),10008==t.data.status&&this.Toast(t.data.msg),15e3==t.data.status&&this.Toast(t.data.msg),200==t.data.status&&(this.lastdialog=!0,this.userInfo.conversion_num=t.data.data.conversion_num,this.userInfo.beans=t.data.data.beans,this.totalTime=36e5*this.userInfo.beans)}))},hcbtn(){this.dhsuccessdialog=!0},back(){this.$router.push("/pagetwo")},goto(){this.getCode(),this.timedialog=!0}}},m=d,h=i(8412),u=(0,h.Z)(m,e,a,!1,null,"1ecf8d54",null),g=u.exports},84:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAYCAYAAACyVACzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOTFGNzE5NjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFOTFGNzFBNjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUU5MUY3MTc2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5MUY3MTg2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vGhMFAAADrElEQVR42tyZW0gUURzGZ7Swm9FlKSvpAkVgRCWWFEkUXbaLFtntIQgpiZ56q16iXqqH3nrvoYigjLD7hdhuZFlk9VBKUqIR0QVLStNV9/Qd+AYOw9nZ44yzrg38mNmd/+7O+fxfj7YQwvJxjAJFoAe8Au0B7QbFMcTHZ8aACrATPAONSUQwtftvxZoEKsF+8Bv8AgvAX9ALpJsmwDiwHmwHP8EnkA/G874b4To718J1zxTLdda9Z2muda99iTUTHACbwA9wETwBXbxvc1FSlK1gGfgCzoD7ip2l2LtfC8217uG9coed4n7onjUPHAErwXtwiTmoRyPoDrAEvANnwXONnRVwQV6CiH76DV9iSQ85ChaCN+AC80/CZTeXYVcIXoDToF5j51607QoVk0NkWs7KZsgdAxPBI3AdNLseNosVr4J2d+l5jQbekUgSekE8K+1hmAv2gH1gAohRqO+uBxkBisFmkAdugCrwdQC9Q6TTs2QlO8zcI/9KV8E90OZKzCPBKrCR78nwvAZaDfOJ2xNECKLYKX4zkFiykp0AURAH1aCGrYH65REm+yir3HlWvHZNlfN6SNtnGJrah5bg89kalIJv4CYrWRd/1MkxEYZdCVsDmZ8eU1yvPJIxiTqIWHIhc8AhsIEJXOant6BbWag8TwNbWBnrGXq6FsI2FCVVP2XiQSKdYk0FB0EZQ+kl+KAp+REKVcwW4hxooJ2tnHX5xw4QVqKPnwstPLPYIkxhwv7DL8pS7qu2clwZBjqV92yDsEtnuIVaDVvASeac1WwqH9LD2hRbOeJcZmgWsmreBk85I1p+5q1+SuRpqYa2skVTAHaBcjAa1LHBbOGQnFBmv+VgMRjKankFfFRsejWDcm+S18JjoA5rkLY8cqUwEcvZVlkD9oJFzF13mMQ7lJ2F4dxtWAtmcw6s5lZMRxLBvHYbvETLWLGcYz63Ysq56BqOO82KCPI8HawDS9mLxShuE8PVVKhUImW0WE71K+XYU8Awk+PMa3qPYMuQy5CMsrI2sPeqVbxMJAnNVF5m+RQs7WKpQ/Juelk724sY578eZVGzuOFXwg2/W+SzT8/y61UDJpZzTAbbuEU8gw2r42VxxXPGghUchfKY66pYLDoNBBMGHpbxYskjh+FWyZCT28qnKIgaZtmcCMrYwEovO86wNAnD/qiIoYjVl21lOSM+YE6qZdWMa+y66UlN9LIiwy48kWQRGTM/2j7/FZbDbr5V6eaD2A2K458AAwCJWDlL/sW9gAAAAABJRU5ErkJggg=="},7321:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAFWklEQVRIibWXeUzTdxTAPxxFzqLxjFY8tsXBwK06t7gImQku0THn7Tbvc2CTjXmySaZoPJYg0cVORZ2KugwcBhhO3dQZdRpFLOwADTCnFJggNxREoMv3t/5+aaGUYrb3R/u+L+99P/0e731fXcxmM/+D+AH13U3r+h9xVUAA8AGQBNQBJUApkAwstxekrFyn1TwTVW8wJgIrrG0tJhMe3t4dXVfotJpDlhjJ4P5MxH+hUcBsYGJ7WxsN1ZUUZF2nKPc2pQX5PDYWIxYWOD6U+XEJIiQUOGQ9R4/heoNRC3wJTBDjiof3uZi0n5xL56ivrlT8PL198fJVY25rp/XpU9xVqoV6g9FFp9UslH16tO16g3E/8KHQG6oqSY2PI/unDNpaWxWfXl4+TF7+ES+OD2Vo4GjFbnUU3wNTnV653mDsDRwBppnb27mSkkTKF7E2Pq6ubkRErmHSUh2ubm60t7fxZ24WNzNTybnwAwGjgpm3JYHeAwa9A8wHTnS7cr3BOBjIAMbWPS7n1M7PuXMx08bHR92Hdccz6B8wQhqb6mpI372d2+czaDY1KH5hsxYwd+MOoZ4BIhzC9QbjSOACMOLBHzkcXL2S6vJSG59+Q4YRk3weLx9faVyUk4VeN58npsZO84k7EH81D0sq+neZ53qD8TngqgDn/3IZ/aoFncB9Bgy2AV86cZCEJdPtgoU0NdQhMgNQi9pgF643GMX+ZQODf7v8I4lrV9JYV93Jb/3JTAWce+kcqbviulqLJC6urjzM/1Ueju0Et5yxqFL+2WfT+DpGR0uzqdNEby2OQt1vgKTXlP9N4hq7RcxWzGYeFRXIpiB7K98ncri08B4nt26g5UmT3Xne/Xij9C1uf+Iny7oHS2wznr5+8rDWBm6pWlPFhLuXzeJJk/2ze33KTEXPu/YzD/JynYILaaytkdW+ClxvML4ASHUwKTba7hnLMnPdZkX/dvtnToOFDBkVKKs51iuPF1XxZnoKt86e7jI4JHQS3mp/SX9c/IC6qnKnwcMCRzPspVeEagBuyfA58nanJmx1OMG06Bjp1go5s2+XVLedlQmzFsieIoWV93yx+EiN3+xwu6dHxzJo5ChJr6145HCHOkr/oSMYFzFDtu6X4QOByaLw30hP6TI4JGwS4YsiJb2luYm9UfOcBgtZuvMrVB69hHoMyJfh4p0l78ZlmzpsLWFzFhG554hi+SZuPaVFd50Gh86cR0BQiFCzgCjZLuBvCOV+brbdQFFM5n66TdJbW1pI2RnL7fNpToMHDX+e92K/kId7dVqNUjjEkypdV78+fZUAFxcXgieEMyUymoCglyVbZWkxaQnbOr1ojsS/30CiD38nexzWaTVJ1u4Cfk0oYe8vwUvtT0lBPq+9PYPhIWMUpyvJxzh3cA+1lc6nlbhgG05kSnMCp623W1mk5Uk9CiySjQ3VVZQV3qX47u9S41Bh/MtpqJCRIWNYfTRNTslTAqzTapQeq2MDKVLtoihuWWdOk7ZnB4211Txtae4RVOXhScSqtUpWWG52lPU5W4t1GyX9TLETNRVlPYJ6+fhJqTg7Zgve6t6yeZdOq1nrKM4aLlWdV6dMo7qshAvHD2Cqr3UIdVeppHIbviSK4cFa2Sw6n006reZ6dz/apo3SG4wHgJVi3NxQz430ZMoK71FSkIebu4qGmiqpexkaFCxdyODQcNw9POS57oi+XKfV7OsOKp95px5ObzBOBFaLBs86oNnUiKe3j6SLN0Cu76J7EmVep9UkdAftEm5HxlmqXzAgGvCxQCEgIt8ExC5tAh45C+0oPfmXKpo+0XUKcQOkTvCZBfgH3MwK393+MJ0AAAAASUVORK5CYII="},2747:function(t,s,i){t.exports=i.p+"img/time0.d1b5a427.png"},353:function(t,s,i){t.exports=i.p+"img/time1.cdfc2592.png"},190:function(t,s,i){t.exports=i.p+"img/time2.adc9b24b.png"},9485:function(t,s,i){t.exports=i.p+"img/time3.9f3bf98d.png"}}]);
//# sourceMappingURL=579.73ad160e.js.map