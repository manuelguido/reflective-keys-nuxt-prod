(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5],{277:function(e,t,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(109).default)("06a64569",content,!0,{sourceMap:!1})},280:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(109).default)("2e19815e",content,!0,{sourceMap:!1})},283:function(e,t,n){"use strict";n(277)},284:function(e,t,n){var o=n(108)(!1);o.push([e.i,".key-white[data-v-64cfaed0]{border-left:1px solid #bbb;border-bottom:1px solid #bbb;border-radius:0 0 5px 5px;box-shadow:inset -1px 0 0 hsla(0,0%,100%,.8),inset 0 0 5px #ccc,0 0 3px rgba(0,0,0,.2);background:linear-gradient(180deg,#eee 0,#fff);margin:0 0 0 -1em;width:4.25rem;z-index:1}.key-white.pressing[data-v-64cfaed0],.key-white[data-v-64cfaed0]:active{border-top:1px solid #777;border-left:1px solid #999;border-bottom:1px solid #999;box-shadow:inset 2px 0 3px rgba(0,0,0,.1),inset -5px 5px 20px rgba(0,0,0,.2),0 0 3px rgba(0,0,0,.2);background:linear-gradient(180deg,#fff 0,#e9e9e9)}.key-black[data-v-64cfaed0]{background:linear-gradient(45deg,#222,#555);border:1px solid #333;border-radius:0 0 4px 4px;box-shadow:inset -1px -1px 2px hsla(0,0%,100%,.2),inset 0 -5px 2px 3px rgba(0,0,0,.6),0 2px 4px rgba(10,10,10,.75);height:8rem;margin:0 0 0 -2rem;width:2rem;z-index:2}.key-black.pressing[data-v-64cfaed0],.key-black[data-v-64cfaed0]:active{box-shadow:inset -1px -1px 2px hsla(0,0%,100%,.2),inset 0 -2px 2px 3px rgba(10,10,10,.6),0 1px 2px rgba(10,10,10,.5);background:linear-gradient(90deg,#555 0,#333)}",""]),e.exports=o},290:function(e,t,n){"use strict";n.r(t);n(289),n(80),n(15),n(32);var o={props:{keyboardKey:{type:String,default:""},octave:{type:Number,default:4},pianoKey:{type:Object,default:function(){}}},computed:{isWhite:function(){return!!this.pianoKey&&1===this.pianoKey.note.length},note:function(){return"".concat(this.pianoKey.note).concat(this.octave)},classList:function(){return[this.isWhite?"key-white":"key-black",this.pressing?"pressing":""]}},data:function(){return{pressing:!1}},mounted:function(){this.addEventListeners()},beforeDestroy:function(){this.removeEventListeners()},methods:{addEventListeners:function(){var e=this;window.addEventListener("keydown",(function(t){e.handleKeyDown(t)})),window.addEventListener("keyup",(function(t){e.handleKeyUp(t)}))},removeEventListeners:function(){window.removeEventListener("keydown",(function(){})),window.removeEventListener("keyup",(function(){}))},pressedMyKey:function(e,t){return this.pianoKey.keys[e]===t},pressedMyOctave:function(e){return this.octave===e},imPressed:function(e,t,n){return this.pressedMyKey(e,n)&&this.pressedMyOctave(t)},playCondition:function(e){return this.imPressed(0,3,e.key)||this.imPressed(1,4,e.key)},handleKeyDown:function(e){!this.pressing&&this.playCondition(e)&&this.playNote()},handleKeyUp:function(e){this.pressing&&this.playCondition(e)&&this.stopNote()},playNote:function(){this.pressing=!0,this.$emit("playNote",this.note)},stopNote:function(){this.$emit("stopNote",this.note),this.pressing=!1}}},r=o,c=(n(283),n(46)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classList,on:{mousedown:e.playNote,mouseup:e.stopNote}})}),[],!1,null,"64cfaed0",null);t.default=component.exports},293:function(e,t,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(109).default)("5e92640e",content,!0,{sourceMap:!1})},294:function(e,t,n){"use strict";n(280)},295:function(e,t,n){var o=n(108)(!1);o.push([e.i,".keys[data-v-3586b8a1]{width:100%;height:100%}.keys[data-v-3586b8a1],.keys .inner[data-v-3586b8a1]{display:flex}",""]),e.exports=o},305:function(e,t,n){"use strict";n.r(t);var o={name:"PianoKeys",methods:{playNote:function(e){this.$emit("playNote",e)},stopNote:function(e){this.$emit("stopNote",e)}},data:function(){return{octaves:[3,4,5],keys:[{id:1,note:"C",keys:["z","q"]},{id:2,note:"C#",keys:["s","2"]},{id:3,note:"D",keys:["x","w"]},{id:4,note:"D#",keys:["d","3"]},{id:5,note:"E",keys:["c","e"]},{id:6,note:"F",keys:["v","r"]},{id:7,note:"F#",keys:["g","5"]},{id:8,note:"G",keys:["b","t"]},{id:9,note:"G#",keys:["h","6"]},{id:10,note:"A",keys:["n","y"]},{id:11,note:"A#",keys:["j","7"]},{id:12,note:"B",keys:["m","u"]}]}}},r=(n(294),n(46)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keys"},[e._l(e.octaves,(function(t){return n("span",{key:t,staticClass:"inner"},e._l(e.keys,(function(o){return n("PianoKey",{key:""+o.id+t,attrs:{"piano-key":o,octave:t},on:{playNote:e.playNote,stopNote:e.stopNote}})})),1)})),e._v(" "),n("PianoKey",{attrs:{"piano-key":e.keys[0],octave:6},on:{playNote:e.playNote}})],2)}),[],!1,null,"3586b8a1",null);t.default=component.exports;installComponents(component,{PianoKey:n(290).default})},308:function(e,t,n){"use strict";n(293)},309:function(e,t,n){var o=n(108)(!1);o.push([e.i,".piano[data-v-0721a8c8]{height:25vh;position:relative}",""]),e.exports=o},312:function(e,t,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(109).default)("45f4f6d0",content,!0,{sourceMap:!1})},323:function(e,t,n){"use strict";n.r(t);n(82);var o=n(322),r={name:"Piano",data:function(){return{synth:new o.c(o.d).toDestination(),lowpassFilter:{level:1,effect:new o.b(this.level,"lowpass").toDestination()},highpassFilter:{level:1,effect:new o.b(this.level,"highpass").toDestination()},feedbackDelay:{level1:.1,level2:.001,effect:null}}},mounted:function(){},methods:{playNote:function(e){this.synth.triggerAttackRelease(e,o.e())},stopNote:function(e){this.synth.triggerRelease([e],o.e())},connectEffect:function(e){this.synth.connect(e)},setupEffects:function(){this.feedbackDelay.effect=new o.a(this.feedbackDelay.level1,this.feedbackDelay.level2).toDestination(),this.connectEffect(this.feedbackDelay.effect);var e=this;setTimeout((function(){e.feedbackDelay.level1=0,e.feedbackDelay.level2=0}),3e3)}}},c=(n(308),n(46)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"piano"},[n("PianoKeys",{on:{playNote:e.playNote,stopNote:e.stopNote}})],1)}),[],!1,null,"0721a8c8",null);t.default=component.exports;installComponents(component,{PianoKeys:n(305).default})},325:function(e,t,n){"use strict";n(312)},326:function(e,t,n){var o=n(108),r=n(327),c=n(328),l=o(!1),d=r(c);l.push([e.i,".homepage[data-v-b54cc592]{background-image:url("+d+");background-repeat:no-repeat;background-position:0;background-size:cover;height:100vh;margin:0;padding:0;width:100vw}.homepage .filter[data-v-b54cc592]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem;height:100vh;width:100vw;background-color:rgba(0,0,0,.75)}",""]),e.exports=l},327:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},328:function(e,t,n){e.exports=n.p+"img/wallpaper.a2463d9.jpg"},380:function(e,t,n){"use strict";n.r(t);var o={name:"IndexPage",head:function(){return{title:this.title}},data:function(){return{title:"Reflective Keys"}}},r=(n(325),n(46)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"homepage"},[t("div",{staticClass:"filter"},[t("Piano")],1)])}),[],!1,null,"b54cc592",null);t.default=component.exports;installComponents(component,{Piano:n(323).default})}}]);