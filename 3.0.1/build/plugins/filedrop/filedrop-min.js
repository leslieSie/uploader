/*!build time : 2015-04-09 10:11:32 AM*/
KISSY.add("kg/uploader/3.0.1/plugins/filedrop/filedrop",function(a,b,c){var d="",e=b.all,f=a.UA,g=function(a){var b=this;g.superclass.constructor.call(b,a),b.set("mode",h())},h=function(){return f.webkit>=7||f.firefox>=3.6?"supportDrop":f.ie?"notSupportDropIe":f.webkit<7||f.firefox<3.6?"notSupportDrop":void 0};return a.mix(g,{event:{AFTER_DROP:"afterdrop"}}),a.extend(g,c,{pluginInitializer:function(b){var c,d=this,e=d.get("mode");if(!b)return!1;if(d.set("uploader",b),"flash"==b.get("type"))return a.log("flash\u4e0a\u4f20\u65b9\u5f0f\u4e0d\u652f\u6301\u62d6\u62fd\uff01"),d.set("isSupport",!1),!1;if("supportDrop"!=e)return a.log("\u8be5\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u62d6\u62fd\u4e0a\u4f20\uff01"),d.set("isSupport",!1),!1;var f=b.get("target");d.set("target",f),c=d._createDropArea(),c.on("click",d._clickHandler,d),b.on("afterDisabledChange",function(a){d[a.newVal&&"hide"||"show"]()}),d.fire("render",{buttonTarget:d.get("buttonWrap")})},show:function(){var a=this,b=a.get("dropContainer");b.show()},hide:function(){var a=this,b=a.get("dropContainer");b.hide()},_createDropArea:function(){var b=this,c=e(b.get("target")),d=b.get("mode"),f=a.substitute(b.get("tpl")[d],{name:b.get("name")}),g=e(f),h=g.all(".J_ButtonWrap");return g.appendTo(c),g.on("dragover",function(a){a.stopPropagation(),a.preventDefault()}),g.on("drop",function(a){a.stopPropagation(),a.preventDefault(),b._dropHandler(a)}),b.set("dropContainer",g),b.set("buttonWrap",h),b._setStyle(),g},_setStyle:function(){var a=this,b=a.get("dropContainer");return b.length?(b.parent().css("position","relative"),void b.css({position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"1000"})):!1},_clickHandler:function(){var a=this,b=a.get("uploader"),c=b.get("button"),d=c.get("fileInput");d.fire("click")},_dropHandler:function(b){var c=this,e=g.event,f=b.originalEvent.dataTransfer.files,h=[],i=c.get("uploader");return f.length&&i!=d?(a.each(f,function(b){a.isObject(b)&&h.push({name:b.name,type:b.type,size:b.size,data:b})}),c.fire(e.AFTER_DROP,{files:h}),void i._select({files:h})):!1}},{ATTRS:{pluginId:{value:"filedrop"},target:{value:d,getter:function(a){return e(a)}},uploader:{value:d},dropContainer:{value:d},isSupport:{value:!0},tpl:{value:{supportDrop:'<div class="drop-wrapper"></div>',notSupportDropIe:'<div class="drop-wrapper"><p>\u60a8\u7684\u6d4f\u89c8\u5668\u53ea\u652f\u6301\u4f20\u7edf\u7684\u56fe\u7247\u4e0a\u4f20\uff0c</p><p class="suggest J_ButtonWrap">\u63a8\u8350\u4f7f\u7528chrome\u6d4f\u89c8\u5668\u6216firefox\u6d4f\u89c8\u5668</p></div>',notSupportDrop:'<div class="drop-wrapper"><p>\u60a8\u7684\u6d4f\u89c8\u5668\u53ea\u652f\u6301\u4f20\u7edf\u7684\u56fe\u7247\u4e0a\u4f20\uff0c</p><p class="suggest J_ButtonWrap">\u63a8\u8350\u5347\u7ea7\u60a8\u7684\u6d4f\u89c8\u5668</p></div>'}},name:{value:""}}}),g},{requires:["node","base"]});