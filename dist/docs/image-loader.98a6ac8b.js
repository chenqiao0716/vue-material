webpackJsonp([27,35],{478:function(e,a,t){var s=t(0)(t(509),t(570),null,null);e.exports=s.exports},509:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{src:null}},methods:{loadImage:function(){var e=["assets/joker-1.jpg","assets/joker-2.jpg","assets/joker-3.jpg","assets/card-image-1.jpg","assets/card-image-2.jpg"];this.src=e[Math.floor(5*Math.random())]},clearImage:function(){this.src=null}}},e.exports=a.default},570:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("page-content",{attrs:{"page-title":"Components - Image Loader"}},[t("docs-component",[t("div",{slot:"description"},[t("p",[e._v("Illustrations and photographs may load and transition in three phases by staggering opacity, exposure, and saturation levels.")])]),e._v(" "),t("div",{slot:"api"},[t("api-table",{attrs:{name:"md-image"}},[t("md-table",{slot:"properties"},[t("md-table-header",[t("md-table-row",[t("md-table-head",[e._v("Name")]),e._v(" "),t("md-table-head",[e._v("Type")]),e._v(" "),t("md-table-head",[e._v("Description")])],1)],1),e._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[e._v("md-src")]),e._v(" "),t("md-table-cell",[t("code",[e._v("String")])]),e._v(" "),t("md-table-cell",[e._v("The image source. Accepts any image file extension.")])],1)],1)],1)],1)],1),e._v(" "),t("div",{slot:"example"},[t("example-box",{attrs:{"card-title":"Default"}},[t("div",{slot:"demo"},[t("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(a){e.loadImage(a)}}},[e._v("Load Image")]),e._v(" "),t("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(a){e.clearImage(a)}}},[e._v("Clear Image")]),e._v(" "),t("div",[t("md-image",{attrs:{"md-src":e.src}})],1)],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-button class="md-primary md-raised" @click.native="loadImage">Load Image</md-button>\n            <md-button class="md-primary md-raised" @click.native="clearImage">Clear Image</md-button>\n\n            <div>\n              <md-image :md-src="src"></md-image>\n            </div>\n          ')]),e._v(" "),t("code-block",{attrs:{lang:"xml"}},[e._v("\n            export default {\n              data: () => ({\n                src: null\n              }),\n              methods: {\n                loadImage() {\n                  let options = [\n                    'assets/joker-1.jpg',\n                    'assets/joker-2.jpg',\n                    'assets/joker-3.jpg',\n                    'assets/card-image-1.jpg',\n                    'assets/card-image-2.jpg'\n                  ];\n\n                  this.src = options[Math.floor(Math.random() * 5)];\n                },\n                clearImage() {\n                  this.src = null;\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});