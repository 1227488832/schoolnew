"use strict";(self["webpackChunkschoolactivities"]=self["webpackChunkschoolactivities"]||[]).push([[443],{1287:function(i,t,e){e.r(t),e.d(t,{default:function(){return r}});var n=function(){var i=this,t=i._self._c;return t("div",{attrs:{id:"pageone"}},[t("Music"),t("div",{staticClass:"home_container"},[t("div",{staticClass:"iconback",on:{click:i.iconback}},[t("img",{attrs:{src:e(84),alt:""}})]),i._m(0),i._m(1),t("div",{staticClass:"line"}),i._m(2),t("div",{staticClass:"back"},[t("div",{on:{click:i.iconback}},[i._v("返回")])])])],1)},s=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"home_title"},[t("div",[i._v("雀巢咖啡,提醒每一天")])])},function(){var i=this,t=i._self._c;return t("div",{staticClass:"home_banner"},[t("img",{attrs:{src:e(7701),alt:""}})])},function(){var i=this,t=i._self._c;return t("div",{staticClass:"introduce"},[t("h1",[i._v("早起党-活力清晨,自信迎战")]),t("h1",{staticStyle:{"margin-top":"0.9333rem"}},[i._v("活动详情:")]),t("p",{staticStyle:{"margin-top":"0.32rem"}},[i._v(" 活动期间的每周一早上7点-10点，在参加活动的超市（具体以各活动现场公示的为准）内购买雀巢咖啡“丝滑拿铁”瓶装、“招牌美式”瓶装或“原醇香滑”罐装任意产品1瓶/罐及以上的，凭当日该超市购物小票即可参与现场幸运抽奖活动。 ")]),t("h1",{staticStyle:{"margin-top":"0.5333rem"}},[i._v("奖品内容:")]),t("p",{staticStyle:{"margin-top":"0.2667rem"}},[i._v("奖品1:音乐闹钟1个（限量3个），奖品为非卖品，无市场价；")]),t("p",[i._v("奖品2:雀巢咖啡丝滑拿铁1瓶（限量12瓶），厂商建议零售价6.5元/瓶；")]),t("p",[i._v("奖品3:帆布袋1个（限量15个），奖品为非卖品，无市场价；")]),t("p",[i._v("奖品4:明信片、海报、圆珠笔、零食夹任意1个（每种限量30个），奖品为非卖品，无市场价。")])])}],c=e(8979),a=e(4545),m={name:"HomeView",components:{Music:a.Z},mounted(){this.init()},methods:{iconback(){this.$router.go(-1)},init(){(0,c.nX)({url:""}).then((i=>{if(console.log(i),200===i.status){let t=i.data||{};jWeixin.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:[]}),jWeixin.ready((()=>{jWeixin.hideMenuItems({menuList:["menuItem:copyUrl","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone"]}),jWeixin.hideOptionMenu()}))}else this.handleError(i)}))}}},A=m,l=e(8412),o=(0,l.Z)(A,n,s,!1,null,"11d7c705",null),r=o.exports},84:function(i){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAYCAYAAACyVACzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOTFGNzE5NjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFOTFGNzFBNjNGMDExRURCQ0JBRUIzQjRFRjFCNEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUU5MUY3MTc2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUU5MUY3MTg2M0YwMTFFREJDQkFFQjNCNEVGMUI0RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vGhMFAAADrElEQVR42tyZW0gUURzGZ7Swm9FlKSvpAkVgRCWWFEkUXbaLFtntIQgpiZ56q16iXqqH3nrvoYigjLD7hdhuZFlk9VBKUqIR0QVLStNV9/Qd+AYOw9nZ44yzrg38mNmd/+7O+fxfj7YQwvJxjAJFoAe8Au0B7QbFMcTHZ8aACrATPAONSUQwtftvxZoEKsF+8Bv8AgvAX9ALpJsmwDiwHmwHP8EnkA/G874b4To718J1zxTLdda9Z2muda99iTUTHACbwA9wETwBXbxvc1FSlK1gGfgCzoD7ip2l2LtfC8217uG9coed4n7onjUPHAErwXtwiTmoRyPoDrAEvANnwXONnRVwQV6CiH76DV9iSQ85ChaCN+AC80/CZTeXYVcIXoDToF5j51607QoVk0NkWs7KZsgdAxPBI3AdNLseNosVr4J2d+l5jQbekUgSekE8K+1hmAv2gH1gAohRqO+uBxkBisFmkAdugCrwdQC9Q6TTs2QlO8zcI/9KV8E90OZKzCPBKrCR78nwvAZaDfOJ2xNECKLYKX4zkFiykp0AURAH1aCGrYH65REm+yir3HlWvHZNlfN6SNtnGJrah5bg89kalIJv4CYrWRd/1MkxEYZdCVsDmZ8eU1yvPJIxiTqIWHIhc8AhsIEJXOant6BbWag8TwNbWBnrGXq6FsI2FCVVP2XiQSKdYk0FB0EZQ+kl+KAp+REKVcwW4hxooJ2tnHX5xw4QVqKPnwstPLPYIkxhwv7DL8pS7qu2clwZBjqV92yDsEtnuIVaDVvASeac1WwqH9LD2hRbOeJcZmgWsmreBk85I1p+5q1+SuRpqYa2skVTAHaBcjAa1LHBbOGQnFBmv+VgMRjKankFfFRsejWDcm+S18JjoA5rkLY8cqUwEcvZVlkD9oJFzF13mMQ7lJ2F4dxtWAtmcw6s5lZMRxLBvHYbvETLWLGcYz63Ysq56BqOO82KCPI8HawDS9mLxShuE8PVVKhUImW0WE71K+XYU8Awk+PMa3qPYMuQy5CMsrI2sPeqVbxMJAnNVF5m+RQs7WKpQ/Juelk724sY578eZVGzuOFXwg2/W+SzT8/y61UDJpZzTAbbuEU8gw2r42VxxXPGghUchfKY66pYLDoNBBMGHpbxYskjh+FWyZCT28qnKIgaZtmcCMrYwEovO86wNAnD/qiIoYjVl21lOSM+YE6qZdWMa+y66UlN9LIiwy48kWQRGTM/2j7/FZbDbr5V6eaD2A2K458AAwCJWDlL/sW9gAAAAABJRU5ErkJggg=="},7701:function(i,t,e){i.exports=e.p+"img/banner1.e6100fe3.jpg"}}]);
//# sourceMappingURL=about.bb415135.js.map