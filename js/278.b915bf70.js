"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[278],{4278:function(t,s,a){a.r(s),a.d(s,{default:function(){return r}});var i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"fourpm"}},[s("Music"),s("div",{staticClass:"home_container"},[s("div",{staticClass:"iconback",on:{click:t.iconback}},[s("img",{attrs:{src:a(84),alt:""}})]),t._m(0),t._m(1),s("div",{staticClass:"home_bt_cont"},t._l(t.getList.data,(function(a,i){return s("div",{key:i,staticClass:"cont"},[s("div",{staticClass:"cont_left"},[t._v(t._s(i+1))]),null==a.wxInfo?s("div",{staticClass:"cont_center"},[t._v(" 无 ")]):s("div",{staticClass:"cont_center"},[t._v(t._s(a.wxInfo.nickname))]),s("div",{staticClass:"cont_right"},[t._v(t._s(a.step_num))])])})),0),s("div",{staticClass:"home_footer"},[s("div",{staticClass:"home_my"},[t._v("我的")]),s("div",{staticClass:"cont"},[s("div",{staticClass:"cont_left"},[t._v(t._s(t.myData.sort))]),s("div",{staticClass:"cont_center"},[t._v(t._s(t.myData.nickname))]),s("div",{staticClass:"cont_right"},[t._v(t._s(t.myData.step_num))])])])])],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"home_title"},[s("div",[t._v("排行榜")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"home_bt"},[s("div",{staticClass:"bt_left"},[t._v("排名")]),s("div",{staticClass:"bt_center"},[t._v("昵称")]),s("div",{staticClass:"bt_right"},[t._v("步数")])])}],n=(a(9512),a(8979)),c=a(174),o=a(1604),m={name:"HomeView",data(){return{myData:{step_num:"",sort:"",nickname:""},getList:[]}},components:{Music:c.Z},mounted(){this.getData(),this.init()},computed:{...(0,o.rn)(["schoolindex"])},methods:{init(){(0,n.nX)({url:""}).then((t=>{if(console.log(t),200===t.status){let s=t.data||{};jWeixin.config({debug:!1,appId:s.appId,timestamp:s.timestamp,nonceStr:s.nonceStr,signature:s.signature,jsApiList:[]}),jWeixin.ready((()=>{jWeixin.hideMenuItems({menuList:["menuItem:copyUrl","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone"]}),jWeixin.hideOptionMenu()}))}else this.handleError(t)}))},getData(){let t=this.schoolindex;(0,n.Ru)({addr:t}).then((t=>{if(console.log(t),200==t.data.status){if(console.log(t.data.data.my),t.data.data.my){console.log(222222),this.myData.step_num=t.data.data.my.step_num,this.myData.sort=t.data.data.my.sort;let s=window.sessionStorage.getItem("userInfo");console.log(s),s=JSON.parse(s||"{}"),console.log(s),this.myData.nickname=s.nickname||"无"}else{this.myData.sort="暂未参加排名",this.myData.total_step="",this.myData.nickname="",console.log(11111);let t=window.sessionStorage.getItem("userInfo");t=JSON.parse(t||"{}"),console.log(t),this.myData.nickname=t.nickname||"无"}this.getList=t.data.data.list}}))},iconback(){this.$router.push("/fourupdata")}}},l=m,d=a(8412),A=(0,d.Z)(l,i,e,!1,null,"0c0a118a",null),r=A.exports},84:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAYCAYAAACyVACzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOTFGNzE5NjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFOTFGNzFBNjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUU5MUY3MTc2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5MUY3MTg2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vGhMFAAADrElEQVR42tyZW0gUURzGZ7Swm9FlKSvpAkVgRCWWFEkUXbaLFtntIQgpiZ56q16iXqqH3nrvoYigjLD7hdhuZFlk9VBKUqIR0QVLStNV9/Qd+AYOw9nZ44yzrg38mNmd/+7O+fxfj7YQwvJxjAJFoAe8Au0B7QbFMcTHZ8aACrATPAONSUQwtftvxZoEKsF+8Bv8AgvAX9ALpJsmwDiwHmwHP8EnkA/G874b4To718J1zxTLdda9Z2muda99iTUTHACbwA9wETwBXbxvc1FSlK1gGfgCzoD7ip2l2LtfC8217uG9coed4n7onjUPHAErwXtwiTmoRyPoDrAEvANnwXONnRVwQV6CiH76DV9iSQ85ChaCN+AC80/CZTeXYVcIXoDToF5j51607QoVk0NkWs7KZsgdAxPBI3AdNLseNosVr4J2d+l5jQbekUgSekE8K+1hmAv2gH1gAohRqO+uBxkBisFmkAdugCrwdQC9Q6TTs2QlO8zcI/9KV8E90OZKzCPBKrCR78nwvAZaDfOJ2xNECKLYKX4zkFiykp0AURAH1aCGrYH65REm+yir3HlWvHZNlfN6SNtnGJrah5bg89kalIJv4CYrWRd/1MkxEYZdCVsDmZ8eU1yvPJIxiTqIWHIhc8AhsIEJXOant6BbWag8TwNbWBnrGXq6FsI2FCVVP2XiQSKdYk0FB0EZQ+kl+KAp+REKVcwW4hxooJ2tnHX5xw4QVqKPnwstPLPYIkxhwv7DL8pS7qu2clwZBjqV92yDsEtnuIVaDVvASeac1WwqH9LD2hRbOeJcZmgWsmreBk85I1p+5q1+SuRpqYa2skVTAHaBcjAa1LHBbOGQnFBmv+VgMRjKankFfFRsejWDcm+S18JjoA5rkLY8cqUwEcvZVlkD9oJFzF13mMQ7lJ2F4dxtWAtmcw6s5lZMRxLBvHYbvETLWLGcYz63Ysq56BqOO82KCPI8HawDS9mLxShuE8PVVKhUImW0WE71K+XYU8Awk+PMa3qPYMuQy5CMsrI2sPeqVbxMJAnNVF5m+RQs7WKpQ/Juelk724sY578eZVGzuOFXwg2/W+SzT8/y61UDJpZzTAbbuEU8gw2r42VxxXPGghUchfKY66pYLDoNBBMGHpbxYskjh+FWyZCT28qnKIgaZtmcCMrYwEovO86wNAnD/qiIoYjVl21lOSM+YE6qZdWMa+y66UlN9LIiwy48kWQRGTM/2j7/FZbDbr5V6eaD2A2K458AAwCJWDlL/sW9gAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=278.b915bf70.js.map