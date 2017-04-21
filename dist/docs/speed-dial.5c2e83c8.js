webpackJsonp([19,35],{489:function(d,t,m){m(614);var e=m(0)(null,m(580),"data-v-714a4355",null);d.exports=e.exports},544:function(d,t,m){t=d.exports=m(4)(),t.push([d.i,".speed-dial-demo[data-v-714a4355]{height:250px}",""])},580:function(d,t){d.exports={render:function(){var d=this,t=d.$createElement,m=d._self._c||t;return m("page-content",{attrs:{"page-title":"Components - Speed Dial"}},[m("docs-component",[m("div",{slot:"description"},[m("p",[d._v("The floating action button can fling out related actions upon press. The button should remain on screen after the menu is invoked. Tapping in the same spot should either activate the most commonly used action or close the open menu.")]),d._v(" "),m("p",[d._v("You will need to add the "),m("code",[d._v("md-fab-trigger")]),d._v(" attribute in the first md-button to indicate the trigger.")]),d._v(" "),m("p",[d._v('If you want the "morph" effect on icons, you should create two icons inside the '),m("code",[d._v("md-fab-trigger")]),d._v(" element and add the "),m("code",[d._v("md-icon-morph")]),d._v(" attribute to the first one. When the speed dial gets activated the md-icon-morph will be shown.")])]),d._v(" "),m("div",{slot:"api"},[m("api-table",{attrs:{name:"md-speed-dial"}},[m("md-table",{slot:"classes"},[m("md-table-header",[m("md-table-row",[m("md-table-head",[d._v("Name")]),d._v(" "),m("md-table-head",[d._v("Description")])],1)],1),d._v(" "),m("md-table-body",[m("md-table-row",[m("md-table-cell",[d._v("md-fab-top-left")]),d._v(" "),m("md-table-cell",[d._v("Position the md-fab absolutely on the top left of his parent")])],1),d._v(" "),m("md-table-row",[m("md-table-cell",[d._v("md-fab-top-center")]),d._v(" "),m("md-table-cell",[d._v("Position the md-fab absolutely on the top center of his parent")])],1),d._v(" "),m("md-table-row",[m("md-table-cell",[d._v("md-fab-top-right")]),d._v(" "),m("md-table-cell",[d._v("Position the md-fab absolutely on the top right of his parent")])],1),d._v(" "),m("md-table-row",[m("md-table-cell",[d._v("md-fab-bottom-left")]),d._v(" "),m("md-table-cell",[d._v("Position the md-fab absolutely on the bottom left of his parent")])],1)],1)],1),d._v(" "),m("md-table",{slot:"properties"},[m("md-table-header",[m("md-table-row",[m("md-table-head",[d._v("Name")]),d._v(" "),m("md-table-head",[d._v("Type")]),d._v(" "),m("md-table-head",[d._v("Description")])],1)],1),d._v(" "),m("md-table-body",[m("md-table-row",[m("md-table-cell",[d._v("md-open")]),d._v(" "),m("md-table-cell",[m("code",[d._v("String")])]),d._v(" "),m("md-table-cell",[d._v("The type of event that will trigger the Speed Dial. Accepts: "),m("code",[d._v("click")]),d._v("|"),m("code",[d._v("hover")]),d._v(". Default: "),m("code",[d._v("click")]),d._v(" "),m("br"),m("small",[d._v("* This attribute is not reactive.")])])],1),d._v(" "),m("md-table-row",[m("md-table-cell",[d._v("md-mode")]),d._v(" "),m("md-table-cell",[m("code",[d._v("String")])]),d._v(" "),m("md-table-cell",[d._v("The type of effect that will be applied. Accepts: "),m("code",[d._v("fling")]),d._v("|"),m("code",[d._v("scale")]),d._v(". Default: "),m("code",[d._v("fling")])])],1),d._v(" "),m("md-table-row",[m("md-table-cell",[d._v("md-direction")]),d._v(" "),m("md-table-cell",[m("code",[d._v("String")])]),d._v(" "),m("md-table-cell",[d._v("The direction that the Speed Dial will dispose the buttons. Accepts: "),m("code",[d._v("top")]),d._v("|"),m("code",[d._v("right")]),d._v("|"),m("code",[d._v("bottom")]),d._v("|"),m("code",[d._v("left")]),d._v(". Default: "),m("code",[d._v("top")])])],1)],1)],1)],1)],1),d._v(" "),m("div",{slot:"example"},[m("example-box",{attrs:{"card-title":"Mode and event type"}},[m("div",{staticClass:"speed-dial-demo",slot:"demo"},[m("md-speed-dial",{staticClass:"md-fab-bottom-left",attrs:{"md-open":"hover","md-theme":"purple"}},[m("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[m("md-icon",{attrs:{"md-icon-morph":""}},[d._v("close")]),d._v(" "),m("md-icon",[d._v("share")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("email")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("content_copy")])],1)],1),d._v(" "),m("md-speed-dial",{staticClass:"md-fab-bottom-right",attrs:{"md-mode":"scale"}},[m("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[m("md-icon",{attrs:{"md-icon-morph":""}},[d._v("close")]),d._v(" "),m("md-icon",[d._v("share")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-mini md-clean"},[m("md-icon",[d._v("email")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-mini md-clean"},[m("md-icon",[d._v("content_copy")])],1)],1)],1),d._v(" "),m("div",{slot:"code"},[m("code-block",{attrs:{lang:"xml"}},[d._v('\n            <md-speed-dial md-open="hover" class="md-fab-bottom-left" md-theme="purple">\n              <md-button class="md-fab" md-fab-trigger>\n                <md-icon md-icon-morph>close</md-icon>\n                <md-icon>share</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>email</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>content_copy</md-icon>\n              </md-button>\n            </md-speed-dial>\n\n            <md-speed-dial md-mode="scale" class="md-fab-bottom-right">\n              <md-button class="md-fab" md-fab-trigger>\n                <md-icon md-icon-morph>close</md-icon>\n                <md-icon>share</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-mini md-clean">\n                <md-icon>email</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-mini md-clean">\n                <md-icon>content_copy</md-icon>\n              </md-button>\n            </md-speed-dial>\n          ')])],1)]),d._v(" "),m("example-box",{attrs:{"card-title":"Directions"}},[m("div",{staticClass:"speed-dial-demo",slot:"demo"},[m("md-speed-dial",{staticClass:"md-fab-top-left",attrs:{"md-open":"hover","md-direction":"bottom","md-theme":"light-blue"}},[m("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[m("md-icon",{attrs:{"md-icon-morph":""}},[d._v("event")]),d._v(" "),m("md-icon",[d._v("add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("note_add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("alarm_add")])],1)],1),d._v(" "),m("md-speed-dial",{staticClass:"md-fab-top-right",attrs:{"md-open":"hover","md-direction":"left","md-theme":"light-blue"}},[m("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[m("md-icon",{attrs:{"md-icon-morph":""}},[d._v("event")]),d._v(" "),m("md-icon",[d._v("add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("note_add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("alarm_add")])],1)],1),d._v(" "),m("md-speed-dial",{staticClass:"md-fab-bottom-right",attrs:{"md-open":"hover","md-direction":"top","md-theme":"light-blue"}},[m("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[m("md-icon",{attrs:{"md-icon-morph":""}},[d._v("event")]),d._v(" "),m("md-icon",[d._v("add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("note_add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("alarm_add")])],1)],1),d._v(" "),m("md-speed-dial",{staticClass:"md-fab-bottom-left",attrs:{"md-open":"hover","md-direction":"right","md-theme":"light-blue"}},[m("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[m("md-icon",{attrs:{"md-icon-morph":""}},[d._v("event")]),d._v(" "),m("md-icon",[d._v("add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("note_add")])],1),d._v(" "),m("md-button",{staticClass:"md-fab md-primary md-mini md-clean"},[m("md-icon",[d._v("alarm_add")])],1)],1)],1),d._v(" "),m("div",{slot:"code"},[m("code-block",{attrs:{lang:"xml"}},[d._v('\n            <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-top-left" md-theme="light-blue">\n              <md-button class="md-fab" md-fab-trigger>\n                <md-icon md-icon-morph>event</md-icon>\n                <md-icon>add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>note_add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>alarm_add</md-icon>\n              </md-button>\n            </md-speed-dial>\n\n            <md-speed-dial md-open="hover" md-direction="left" class="md-fab-top-right" md-theme="light-blue">\n              <md-button class="md-fab" md-fab-trigger>\n                <md-icon md-icon-morph>event</md-icon>\n                <md-icon>add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>note_add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>alarm_add</md-icon>\n              </md-button>\n            </md-speed-dial>\n\n            <md-speed-dial md-open="hover" md-direction="top" class="md-fab-bottom-right" md-theme="light-blue">\n              <md-button class="md-fab" md-fab-trigger>\n                <md-icon md-icon-morph>event</md-icon>\n                <md-icon>add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>note_add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>alarm_add</md-icon>\n              </md-button>\n            </md-speed-dial>\n\n            <md-speed-dial md-open="hover" md-direction="right" class="md-fab-bottom-left" md-theme="light-blue">\n              <md-button class="md-fab" md-fab-trigger>\n                <md-icon md-icon-morph>event</md-icon>\n                <md-icon>add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>note_add</md-icon>\n              </md-button>\n\n              <md-button class="md-fab md-primary md-mini md-clean">\n                <md-icon>alarm_add</md-icon>\n              </md-button>\n            </md-speed-dial>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}},614:function(d,t,m){var e=m(544);"string"==typeof e&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals);m(5)("626a8d1a",e,!0)}});