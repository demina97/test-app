(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aedf"],{be39:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("h1",[e._v("Edit Account INFO")]),r("div",{staticClass:"data-field"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.storeRecord.first_name,expression:"storeRecord.first_name",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:e.storeRecord.first_name},on:{change:function(t){return e.$set(e.storeRecord,"first_name",t.target.value)}}})]),r("div",{staticClass:"data-field"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.storeRecord.last_name,expression:"storeRecord.last_name",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:e.storeRecord.last_name},on:{change:function(t){return e.$set(e.storeRecord,"last_name",t.target.value)}}})]),r("div",{staticClass:"data-field"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.storeRecord.email,expression:"storeRecord.email",modifiers:{lazy:!0}}],attrs:{type:"email"},domProps:{value:e.storeRecord.email},on:{change:function(t){return e.$set(e.storeRecord,"email",t.target.value)}}})]),r("div",{staticClass:"data-field"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.storeRecord.avatar,expression:"storeRecord.avatar",modifiers:{lazy:!0}}],attrs:{type:"url"},domProps:{value:e.storeRecord.avatar},on:{change:function(t){return e.$set(e.storeRecord,"avatar",t.target.value)}}})]),r("p",[e._v(e._s(e.storeRecord.updatedAt))]),r("br"),r("button",{attrs:{type:"submit"},on:{click:function(t){return e.editRecord()}}},[e._v("edit")])])},o=[],s={name:"editRecord",methods:{editRecord:function(){this.$store.dispatch("editRecord")}},computed:{updatedAt:function(){return this.$store.getters.record.updatedAt},storeRecord:{get:function(){return this.$store.getters.record},set:function(e){this.$store.commit("SET_RECORD",e)}}},created:function(){this.$store.commit("LOAD_USER",this.$route.params.id)}},i=s,d=r("2877"),n=Object(d["a"])(i,a,o,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d21aedf.36bb6f9c.js.map