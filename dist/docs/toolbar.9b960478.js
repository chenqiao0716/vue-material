webpackJsonp([21,35],{495:function(t,n,a){a(600);var d=a(0)(null,a(563),"data-v-2bf259f9",null);t.exports=d.exports},530:function(t,n,a){n=t.exports=a(4)(),n.push([t.i,".md-toolbar+.md-toolbar[data-v-2bf259f9]{margin-top:16px}.complete-example[data-v-2bf259f9]{height:540px;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative;overflow:hidden;z-index:1}.complete-example .md-fab[data-v-2bf259f9]{margin:0;position:absolute;bottom:-20px;left:16px}.complete-example .md-title[data-v-2bf259f9]{color:#fff}.complete-example .md-list[data-v-2bf259f9]{overflow:auto}.complete-example .md-list-action .md-icon[data-v-2bf259f9]{color:rgba(0,0,0,.26)}.complete-example .md-avatar-icon .md-icon[data-v-2bf259f9]{color:#fff!important}.complete-example .md-sidenav .md-list-text-container>[data-v-2bf259f9]:nth-child(2){color:hsla(0,0%,100%,.54)}.complete-example .md-account-header .md-list-item:hover .md-button[data-v-2bf259f9]:hover{background-color:inherit}.complete-example .md-account-header .md-avatar-list .md-list-item-container[data-v-2bf259f9]:hover{background:none!important}",""])},563:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("page-content",{attrs:{"page-title":"Components - Toolbar"}},[a("docs-component",[a("div",{slot:"description"},[a("p",[t._v("Toolbars appear a step above the content they affect. They may constrain their width to accommodate material passing over them.")]),t._v(" "),a("p",[t._v("You need to wrap all the elements of your toolbar in a element with the class "),a("code",[t._v("md-toolbar-container")]),t._v(" for medium and large toolbars. On large toolbars you can have two containers to push content to bottom.")]),t._v(" "),a("p",[t._v("The following classes can be applied to change the color palette:")]),t._v(" "),a("ul",{staticClass:"md-body-2"},[a("li",[a("code",[t._v("md-accent")])]),t._v(" "),a("li",[a("code",[t._v("md-warn")])]),t._v(" "),a("li",[a("code",[t._v("md-transparent")])])])]),t._v(" "),a("div",{slot:"api"},[a("api-table",{attrs:{name:"md-toolbar"}},[a("md-table",{slot:"classes"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[t._v("Name")]),t._v(" "),a("md-table-head",[t._v("Description")])],1)],1),t._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[t._v("md-dense")]),t._v(" "),a("md-table-cell",[t._v("Create a small and dense toolbar.")])],1),t._v(" "),a("md-table-row",[a("md-table-cell",[t._v("md-medium")]),t._v(" "),a("md-table-cell",[t._v("Create a medium.")])],1),t._v(" "),a("md-table-row",[a("md-table-cell",[t._v("md-large")]),t._v(" "),a("md-table-cell",[t._v("Create a large.")])],1),t._v(" "),a("md-table-row",[a("md-table-cell",[t._v("md-account-header")]),t._v(" "),a("md-table-cell",[t._v("Create a account header toolbar to show user accounts inside sidenav. See example below and the complete example")])],1)],1)],1)],1),t._v(" "),a("api-table",[a("code-block",{attrs:{lang:"xml",height:"none"}},[t._v('\n          <md-toolbar class="md-account-header">\n            <md-list class="md-transparent">\n              <md-list-item class="md-avatar-list">\n                <md-avatar class="md-large">\n                  <img src="https://placeimg.com/64/64/people/8" alt="People">\n                </md-avatar>\n\n                <span style="flex: 1"></span>\n\n                <md-avatar>\n                  <img src="https://placeimg.com/40/40/people/3" alt="People">\n                </md-avatar>\n\n                <md-avatar>\n                  <img src="https://placeimg.com/40/40/people/4" alt="People">\n                </md-avatar>\n              </md-list-item>\n\n              <md-list-item>\n                <div class="md-list-text-container">\n                  <span>John Doe</span>\n                  <span>johndoe@email.com</span>\n                </div>\n\n                <md-button class="md-icon-button md-list-action">\n                  <md-icon>arrow_drop_down</md-icon>\n                </md-button>\n              </md-list-item>\n            </md-list>\n          </md-toolbar>\n        ')])],1)],1),t._v(" "),a("div",{slot:"example"},[a("example-box",{attrs:{"card-title":"Sizes"}},[a("div",{slot:"demo"},[a("md-toolbar",[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title"},[t._v("Default")]),t._v(" "),a("md-input-container",{staticStyle:{flex:"1"}},[a("md-input",{attrs:{placeholder:"Search..."}})],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("favorite")])],1)],1),t._v(" "),a("md-toolbar",{staticClass:"md-dense"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Dense")]),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("favorite")])],1)],1),t._v(" "),a("md-toolbar",{staticClass:"md-medium"},[a("div",{staticClass:"md-toolbar-container"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Medium")]),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("search")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("filter_list")])],1)],1)]),t._v(" "),a("md-toolbar",{staticClass:"md-large"},[a("div",{staticClass:"md-toolbar-container"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("span",{staticStyle:{flex:"1"}}),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("search")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("filter_list")])],1)],1),t._v(" "),a("div",{staticClass:"md-toolbar-container"},[a("h2",{staticClass:"md-title"},[t._v("Large")])])])],1),t._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-toolbar>\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Default</h2>\n\n              <md-button class="md-icon-button">\n                <md-icon>favorite</md-icon>\n              </md-button>\n            </md-toolbar>\n\n            <md-toolbar class="md-dense">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Dense</h2>\n\n              <md-button class="md-icon-button">\n                <md-icon>favorite</md-icon>\n              </md-button>\n            </md-toolbar>\n\n            <md-toolbar class="md-medium">\n              <div class="md-toolbar-container">\n                <md-button class="md-icon-button">\n                  <md-icon>menu</md-icon>\n                </md-button>\n\n                <h2 class="md-title" style="flex: 1;">Medium</h2>\n\n                <md-button class="md-icon-button">\n                  <md-icon>search</md-icon>\n                </md-button>\n\n                <md-button class="md-icon-button">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n              </div>\n            </md-toolbar>\n\n            <md-toolbar class="md-large">\n              <div class="md-toolbar-container">\n                <md-button class="md-icon-button">\n                  <md-icon>menu</md-icon>\n                </md-button>\n\n                <span style="flex: 1;"></span>\n\n                <md-button class="md-icon-button">\n                  <md-icon>search</md-icon>\n                </md-button>\n\n                <md-button class="md-icon-button">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n              </div>\n\n              <div class="md-toolbar-container">\n                <h2 class="md-title">Large</h2>\n              </div>\n            </md-toolbar>\n          ')])],1)]),t._v(" "),a("example-box",{attrs:{"card-title":"Palettes"}},[a("div",{slot:"demo"},[a("md-toolbar",{staticClass:"md-accent"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("favorite")])],1)],1),t._v(" "),a("md-toolbar",{staticClass:"md-warn"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),a("md-button",[t._v("Add")]),t._v(" "),a("md-button",[t._v("Remove")])],1),t._v(" "),a("md-toolbar",{staticClass:"md-transparent"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),a("md-button",{staticClass:"md-raised"},[t._v("Add")]),t._v(" "),a("md-button",{staticClass:"md-raised md-warn"},[t._v("Remove")])],1)],1),t._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-toolbar class="md-accent">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Vue Material</h2>\n\n              <md-button class="md-icon-button">\n                <md-icon>favorite</md-icon>\n              </md-button>\n            </md-toolbar>\n\n            <md-toolbar class="md-warn">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Vue Material</h2>\n\n              <md-button>Add</md-button>\n              <md-button>Remove</md-button>\n            </md-toolbar>\n\n            <md-toolbar class="md-transparent">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Vue Material</h2>\n\n              <md-button class="md-raised">Add</md-button>\n              <md-button class="md-raised md-warn">Remove</md-button>\n            </md-toolbar>\n          ')])],1)]),t._v(" "),a("example-box",{attrs:{"card-title":"Themes"}},[a("div",{slot:"demo"},[a("md-toolbar",{attrs:{"md-theme":"green"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("favorite")])],1)],1),t._v(" "),a("md-toolbar",{staticClass:"md-large",attrs:{"md-theme":"brown"}},[a("div",{staticClass:"md-toolbar-container"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("span",{staticStyle:{flex:"1"}}),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("search")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("filter_list")])],1)],1),t._v(" "),a("div",{staticClass:"md-toolbar-container"},[a("h2",{staticClass:"md-title"},[t._v("Vue Material")])])]),t._v(" "),a("md-toolbar",{attrs:{"md-theme":"orange"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),a("md-button",[t._v("Add")]),t._v(" "),a("md-button",[t._v("Remove")])],1),t._v(" "),a("md-toolbar",{attrs:{"md-theme":"blue"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),a("md-button",{staticClass:"md-raised"},[t._v("Add")]),t._v(" "),a("md-button",{staticClass:"md-raised md-warn"},[t._v("Remove")])],1)],1),t._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-toolbar md-theme="green">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Vue Material</h2>\n\n              <md-button class="md-icon-button">\n                <md-icon>favorite</md-icon>\n              </md-button>\n            </md-toolbar>\n\n            <md-toolbar class="md-large" md-theme="brown">\n              <div class="md-toolbar-container">\n                <md-button class="md-icon-button">\n                  <md-icon>menu</md-icon>\n                </md-button>\n\n                <span style="flex: 1;"></span>\n\n                <md-button class="md-icon-button">\n                  <md-icon>search</md-icon>\n                </md-button>\n\n                <md-button class="md-icon-button">\n                  <md-icon>filter_list</md-icon>\n                </md-button>\n              </div>\n\n              <div class="md-toolbar-container">\n                <h2 class="md-title">Vue Material</h2>\n              </div>\n            </md-toolbar>\n\n            <md-toolbar md-theme="orange">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Vue Material</h2>\n\n              <md-button>Add</md-button>\n              <md-button>Remove</md-button>\n            </md-toolbar>\n\n            <md-toolbar md-theme="blue">\n              <md-button class="md-icon-button">\n                <md-icon>menu</md-icon>\n              </md-button>\n\n              <h2 class="md-title" style="flex: 1">Vue Material</h2>\n\n              <md-button class="md-raised">Add</md-button>\n              <md-button class="md-raised md-warn">Remove</md-button>\n            </md-toolbar>\n          ')])],1)]),t._v(" "),a("example-box",{attrs:{"card-title":"Complete example"}},[a("div",{slot:"demo"},[a("div",{staticClass:"phone-viewport complete-example"},[a("md-whiteframe",{staticClass:"md-large",attrs:{"md-tag":"md-toolbar","md-elevation":"2","md-theme":"light-blue"}},[a("div",{staticClass:"md-toolbar-container"},[a("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(n){t.$refs.sidenav.toggle()}}},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("span",{staticStyle:{flex:"1"}}),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("search")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("view_module")])],1)],1),t._v(" "),a("div",{staticClass:"md-toolbar-container"},[a("h2",{staticClass:"md-title"},[t._v("My Files")]),t._v(" "),a("md-button",{staticClass:"md-fab md-mini"},[a("md-icon",[t._v("add")])],1)],1)]),t._v(" "),a("md-list",{staticClass:"md-double-line"},[a("md-subheader",{staticClass:"md-inset"},[t._v("Folders")]),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon"},[a("md-icon",[t._v("folder")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Photos")]),t._v(" "),a("p",[t._v("Jan 9, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1)],1),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon"},[a("md-icon",[t._v("folder")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Recipes")]),t._v(" "),a("p",[t._v("Jan 17, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1)],1),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon"},[a("md-icon",[t._v("folder")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Work")]),t._v(" "),a("p",[t._v("Jan 28, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1),t._v(" "),a("md-divider",{staticClass:"md-inset"})],1),t._v(" "),a("md-subheader",{staticClass:"md-inset"},[t._v("Files")]),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon md-primary",attrs:{"md-theme":"blue"}},[a("md-icon",[t._v("insert_drive_file")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Vacation Itinerary")]),t._v(" "),a("p",[t._v("Jan 20, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1)],1),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon md-primary",attrs:{"md-theme":"orange"}},[a("md-icon",[t._v("collections")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Kitchen Remodel")]),t._v(" "),a("p",[t._v("Jan 10, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1)],1),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon md-primary",attrs:{"md-theme":"green"}},[a("md-icon",[t._v("view_list")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Grocery Shop")]),t._v(" "),a("p",[t._v("Jan 10, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1)],1),t._v(" "),a("md-list-item",[a("md-avatar",{staticClass:"md-avatar-icon md-primary",attrs:{"md-theme":"orange"}},[a("md-icon",[t._v("collections")])],1),t._v(" "),a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("Weekend Pictures")]),t._v(" "),a("p",[t._v("Jan 10, 2014")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("info")])],1)],1)],1),t._v(" "),a("md-sidenav",{ref:"sidenav",staticClass:"md-left",attrs:{"md-theme":"blue"}},[a("md-toolbar",{staticClass:"md-account-header"},[a("md-list",{staticClass:"md-transparent"},[a("md-list-item",{staticClass:"md-avatar-list"},[a("md-avatar",{staticClass:"md-large"},[a("img",{attrs:{src:"https://placeimg.com/64/64/people/8",alt:"People"}})]),t._v(" "),a("span",{staticStyle:{flex:"1"}}),t._v(" "),a("md-avatar",[a("img",{attrs:{src:"https://placeimg.com/40/40/people/3",alt:"People"}})]),t._v(" "),a("md-avatar",[a("img",{attrs:{src:"https://placeimg.com/40/40/people/4",alt:"People"}})])],1),t._v(" "),a("md-list-item",[a("div",{staticClass:"md-list-text-container"},[a("span",[t._v("John Doe")]),t._v(" "),a("span",[t._v("johndoe@email.com")])]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("arrow_drop_down")])],1)],1)],1)],1),t._v(" "),a("md-list",[a("md-list-item",{staticClass:"md-primary",nativeOn:{click:function(n){t.$refs.sidenav.toggle()}}},[a("md-icon",[t._v("insert_drive_file")]),t._v(" "),a("span",[t._v("My files")])],1),t._v(" "),a("md-list-item",{nativeOn:{click:function(n){t.$refs.sidenav.toggle()}}},[a("md-icon",[t._v("people")]),t._v(" "),a("span",[t._v("Shared with me")])],1),t._v(" "),a("md-list-item",{nativeOn:{click:function(n){t.$refs.sidenav.toggle()}}},[a("md-icon",[t._v("access_time")]),t._v(" "),a("span",[t._v("Recent")])],1),t._v(" "),a("md-list-item",{nativeOn:{click:function(n){t.$refs.sidenav.toggle()}}},[a("md-icon",[t._v("start")]),t._v(" "),a("span",[t._v("Starred")])],1),t._v(" "),a("md-list-item",{nativeOn:{click:function(n){t.$refs.sidenav.toggle()}}},[a("md-icon",[t._v("delete")]),t._v(" "),a("span",[t._v("Trash")])],1)],1)],1)],1)]),t._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[t._v('\n            <div class="phone-viewport complete-example">\n              <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-large">\n                <div class="md-toolbar-container">\n                  <md-button class="md-icon-button" @click.native="$refs.sidenav.toggle()">\n                    <md-icon>menu</md-icon>\n                  </md-button>\n\n                  <span style="flex: 1"></span>\n\n                  <md-button class="md-icon-button">\n                    <md-icon>search</md-icon>\n                  </md-button>\n\n                  <md-button class="md-icon-button">\n                    <md-icon>view_module</md-icon>\n                  </md-button>\n                </div>\n\n                <div class="md-toolbar-container">\n                  <h2 class="md-title">My Files</h2>\n\n                  <md-button class="md-fab md-mini">\n                    <md-icon>add</md-icon>\n                  </md-button>\n                </div>\n              </md-whiteframe>\n\n              <md-list class="md-double-line">\n                <md-subheader class="md-inset">Folders</md-subheader>\n\n                <md-list-item>\n                  <md-avatar class="md-avatar-icon">\n                    <md-icon>folder</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Photos</span>\n                    <p>Jan 9, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n                </md-list-item>\n\n                <md-list-item>\n                  <md-avatar class="md-avatar-icon">\n                    <md-icon>folder</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Recipes</span>\n                    <p>Jan 17, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n                </md-list-item>\n\n                <md-list-item>\n                  <md-avatar class="md-avatar-icon">\n                    <md-icon>folder</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Work</span>\n                    <p>Jan 28, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n\n                  <md-divider class="md-inset"></md-divider>\n                </md-list-item>\n\n                <md-subheader class="md-inset">Files</md-subheader>\n\n                <md-list-item>\n                  <md-avatar md-theme="blue" class="md-avatar-icon md-primary">\n                    <md-icon>insert_drive_file</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Vacation Itinerary</span>\n                    <p>Jan 20, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n                </md-list-item>\n\n                <md-list-item>\n                  <md-avatar md-theme="orange" class="md-avatar-icon md-primary">\n                    <md-icon>collections</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Kitchen Remodel</span>\n                    <p>Jan 10, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n                </md-list-item>\n\n                <md-list-item>\n                  <md-avatar md-theme="green" class="md-avatar-icon md-primary">\n                    <md-icon>view_list</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Grocery Shop</span>\n                    <p>Jan 10, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n                </md-list-item>\n\n                <md-list-item>\n                  <md-avatar md-theme="orange" class="md-avatar-icon md-primary">\n                    <md-icon>collections</md-icon>\n                  </md-avatar>\n\n                  <div class="md-list-text-container">\n                    <span>Weekend Pictures</span>\n                    <p>Jan 10, 2014</p>\n                  </div>\n\n                  <md-button class="md-icon-button md-list-action">\n                    <md-icon>info</md-icon>\n                  </md-button>\n                </md-list-item>\n              </md-list>\n\n              <md-sidenav md-theme="blue" class="md-left" ref="sidenav">\n                <md-toolbar class="md-account-header">\n                  <md-list class="md-transparent">\n                    <md-list-item class="md-avatar-list">\n                      <md-avatar class="md-large">\n                        <img src="https://placeimg.com/64/64/people/8" alt="People">\n                      </md-avatar>\n\n                      <span style="flex: 1"></span>\n\n                      <md-avatar>\n                        <img src="https://placeimg.com/40/40/people/3" alt="People">\n                      </md-avatar>\n\n                      <md-avatar>\n                        <img src="https://placeimg.com/40/40/people/4" alt="People">\n                      </md-avatar>\n                    </md-list-item>\n\n                    <md-list-item>\n                      <div class="md-list-text-container">\n                        <span>John Doe</span>\n                        <span>johndoe@email.com</span>\n                      </div>\n\n                      <md-button class="md-icon-button md-list-action">\n                        <md-icon>arrow_drop_down</md-icon>\n                      </md-button>\n                    </md-list-item>\n                  </md-list>\n                </md-toolbar>\n\n                <md-list>\n                  <md-list-item @click.native="$refs.sidenav.toggle()" class="md-primary">\n                    <md-icon>insert_drive_file</md-icon> <span>My files</span>\n                  </md-list-item>\n\n                  <md-list-item @click.native="$refs.sidenav.toggle()">\n                    <md-icon>people</md-icon> <span>Shared with me</span>\n                  </md-list-item>\n\n                  <md-list-item @click.native="$refs.sidenav.toggle()">\n                    <md-icon>access_time</md-icon> <span>Recent</span>\n                  </md-list-item>\n\n                  <md-list-item @click.native="$refs.sidenav.toggle()">\n                    <md-icon>start</md-icon> <span>Starred</span>\n                  </md-list-item>\n\n                  <md-list-item @click.native="$refs.sidenav.toggle()">\n                    <md-icon>delete</md-icon> <span>Trash</span>\n                  </md-list-item>\n                </md-list>\n              </md-sidenav>\n            </div>\n          ')]),t._v(" "),a("code-block",{attrs:{lang:"sass"}},[t._v("\n            .complete-example {\n              height: 540px;\n              display: flex;\n              flex-flow: column;\n              position: relative;\n              overflow: hidden;\n              z-index: 1;\n\n              .md-fab {\n                margin: 0;\n                position: absolute;\n                bottom: -20px;\n                left: 16px;\n              }\n\n              .md-title {\n                color: #fff;\n              }\n\n              .md-list {\n                overflow: auto;\n              }\n\n              .md-list-action .md-icon {\n                color: rgba(#000, .26);\n              }\n\n              .md-avatar-icon .md-icon {\n                color: #fff !important;\n              }\n\n              .md-sidenav .md-list-text-container > :nth-child(2) {\n                color: rgba(#fff, .54);\n              }\n\n              .md-account-header {\n                .md-list-item:hover .md-button:hover {\n                  background-color: inherit;\n                }\n\n                .md-avatar-list .md-list-item-container:hover {\n                  background: none !important;\n                }\n              }\n            }\n          ")])],1)])],1)])],1)},staticRenderFns:[]}},600:function(t,n,a){var d=a(530);"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);a(5)("5d79e148",d,!0)}});