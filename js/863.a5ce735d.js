"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[863],{4863:function(t,i,e){e.r(i),e.d(i,{default:function(){return r}});var n=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"pagetwo"}},[i("Music"),i("div",{staticClass:"home_container"},[i("div",{staticClass:"iconback",on:{click:t.iconback}},[i("img",{attrs:{src:e(84),alt:""}})]),t._m(0),t._m(1),i("div",{staticClass:"line"}),t._m(2),i("div",{staticClass:"back"},[i("div",{on:{click:t.goto}},[t._v("上传截图")])])])],1)},s=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"home_title"},[i("div",[t._v("雀巢咖啡,提醒每一天")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"home_banner"},[i("img",{attrs:{src:e(6334),alt:""}})])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"introduce"},[i("h1",[t._v("运动党-酷黑态度，热爱无限")]),i("h1",{staticStyle:{"margin-top":"0.56rem"}},[t._v("活动详情:")]),i("p",{staticStyle:{"margin-top":"0.28rem"}},[t._v(" 活动期间需每日行走步数超一万步，将本人当日微信步数截图，上传到活动界面，在活动期间的每周四根据上周五到本周三上传的微信步数累计排名情况进行奖励（每周四24点重置数据）。各场活动中累计步数排名的奖励总人数为10人，如遇步数相同，则为并列名次，将均计算到总人数（总人数共计10人）内；如最后一位有并列情况，【则以最后一次上传截图的时间进行排名，先上传的排名靠前】。 ")]),i("h1",{staticStyle:{"margin-top":"1.0133rem"}},[t._v("奖品内容:")]),i("p",{staticStyle:{"margin-top":"0.2933rem"}},[t._v(" 活动期间上周五到本周三，总计累积步数前1-5名：每人奖励雀巢咖啡招牌美式1箱（15瓶）厂商建议零售价6.5元/瓶；总计累计步数6-10名：每人奖励运动套装一套（包含运动发带、护腕、手环），奖品为非卖品，无市场价。 ")]),i("p",[t._v(" 注：活动期间上周五到本周三中，累积5天参与“运动党”活动者，每人奖励即雀巢咖啡招牌美式咖啡1瓶（限量100瓶），厂商建议零售价6.5元/瓶。 ")])])}],a=(e(9512),e(8979)),c=e(174),m={name:"HomeView",components:{Music:c.Z},mounted(){this.init()},methods:{init(){(0,a.nX)({url:""}).then((t=>{if(console.log(t),200===t.status){let i=t.data||{};jWeixin.config({debug:!1,appId:i.appId,timestamp:i.timestamp,nonceStr:i.nonceStr,signature:i.signature,jsApiList:[]}),jWeixin.ready((()=>{jWeixin.hideMenuItems({menuList:["menuItem:copyUrl","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone"]}),jWeixin.hideOptionMenu()}))}else this.handleError(t)}))},goto(){this.$router.push("fourupdata")},iconback(){this.$router.push("/")}}},A=m,l=e(8412),o=(0,l.Z)(A,n,s,!1,null,"58931270",null),r=o.exports},84:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAYCAYAAACyVACzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOTFGNzE5NjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFOTFGNzFBNjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUU5MUY3MTc2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5MUY3MTg2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vGhMFAAADrElEQVR42tyZW0gUURzGZ7Swm9FlKSvpAkVgRCWWFEkUXbaLFtntIQgpiZ56q16iXqqH3nrvoYigjLD7hdhuZFlk9VBKUqIR0QVLStNV9/Qd+AYOw9nZ44yzrg38mNmd/+7O+fxfj7YQwvJxjAJFoAe8Au0B7QbFMcTHZ8aACrATPAONSUQwtftvxZoEKsF+8Bv8AgvAX9ALpJsmwDiwHmwHP8EnkA/G874b4To718J1zxTLdda9Z2muda99iTUTHACbwA9wETwBXbxvc1FSlK1gGfgCzoD7ip2l2LtfC8217uG9coed4n7onjUPHAErwXtwiTmoRyPoDrAEvANnwXONnRVwQV6CiH76DV9iSQ85ChaCN+AC80/CZTeXYVcIXoDToF5j51607QoVk0NkWs7KZsgdAxPBI3AdNLseNosVr4J2d+l5jQbekUgSekE8K+1hmAv2gH1gAohRqO+uBxkBisFmkAdugCrwdQC9Q6TTs2QlO8zcI/9KV8E90OZKzCPBKrCR78nwvAZaDfOJ2xNECKLYKX4zkFiykp0AURAH1aCGrYH65REm+yir3HlWvHZNlfN6SNtnGJrah5bg89kalIJv4CYrWRd/1MkxEYZdCVsDmZ8eU1yvPJIxiTqIWHIhc8AhsIEJXOant6BbWag8TwNbWBnrGXq6FsI2FCVVP2XiQSKdYk0FB0EZQ+kl+KAp+REKVcwW4hxooJ2tnHX5xw4QVqKPnwstPLPYIkxhwv7DL8pS7qu2clwZBjqV92yDsEtnuIVaDVvASeac1WwqH9LD2hRbOeJcZmgWsmreBk85I1p+5q1+SuRpqYa2skVTAHaBcjAa1LHBbOGQnFBmv+VgMRjKankFfFRsejWDcm+S18JjoA5rkLY8cqUwEcvZVlkD9oJFzF13mMQ7lJ2F4dxtWAtmcw6s5lZMRxLBvHYbvETLWLGcYz63Ysq56BqOO82KCPI8HawDS9mLxShuE8PVVKhUImW0WE71K+XYU8Awk+PMa3qPYMuQy5CMsrI2sPeqVbxMJAnNVF5m+RQs7WKpQ/Juelk724sY578eZVGzuOFXwg2/W+SzT8/y61UDJpZzTAbbuEU8gw2r42VxxXPGghUchfKY66pYLDoNBBMGHpbxYskjh+FWyZCT28qnKIgaZtmcCMrYwEovO86wNAnD/qiIoYjVl21lOSM+YE6qZdWMa+y66UlN9LIiwy48kWQRGTM/2j7/FZbDbr5V6eaD2A2K458AAwCJWDlL/sW9gAAAAABJRU5ErkJggg=="},6334:function(t,i,e){t.exports=e.p+"img/banner4.f71fd0d9.jpg"}}]);
//# sourceMappingURL=863.a5ce735d.js.map