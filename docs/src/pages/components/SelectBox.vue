<template>
  <page-content page-title="Components - SelectBox">
    <docs-component>
      <div slot="description">
        <p>选择框插件</p>
        <p>根据 "所有" 和条目 "已选" 条目进行切分, 生成 "未选" 区域 与 "已选" 区域, 可以多选双方区域中内容进行移动</p>
        <!--
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-warn</code></li>
        </ul>
        -->
      </div>

      <div slot="api">
        <api-table name="md-selectbox">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
                <md-table-head>Required</md-table-head>
                <md-table-head>Default</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>allOptions</md-table-cell>
                <md-table-cell><code>Array[Object]</code></md-table-cell>
                <md-table-cell>所有选项列表,目前只支持Object的数组</md-table-cell>
                <md-table-cell>true</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>haveOptions</md-table-cell>
                <md-table-cell><code>Array[Object]</code></md-table-cell>
                <md-table-cell>已有选项列表,目前只支持Object的数组</md-table-cell>
                <md-table-cell>true</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>optionKey</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>option对象key的键,需要保证唯一</md-table-cell>
                <md-table-cell>false</md-table-cell>
                <md-table-cell>key</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>valueKey</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>option对象value,需要保证唯一</md-table-cell>
                <md-table-cell>false</md-table-cell>
                <md-table-cell>value</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>"所有"、"已有"BOX的排列顺序; 'no-yse', 'yes-no'</md-table-cell>
                <md-table-cell>false</md-table-cell>
                <md-table-cell>no-yes</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>noHeader</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>"所有"Box的title</md-table-cell>
                <md-table-cell>false</md-table-cell>
                <md-table-cell>no-yes</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>yesHeader</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>"已有"Box的title</md-table-cell>
                <md-table-cell>false</md-table-cell>
                <md-table-cell>已拥有</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>change</md-table-cell>
                <md-table-cell>options<code>Array[Object]</code></md-table-cell>
                <md-table-cell>执行左移或者右移操作后,会返回"已拥有"的Options</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-select-box
              valueKey="name"
              optionKey="id"
              :allOptions="allOptions"
              :haveOptions="haveOptions"
              type="no-yes"
              noHeader="未分配"
              yesHeader="已分配"
              v-on:change="optionsChanged"
            ></md-select-box>
            <div class="result-box">
              <h4>当前拥有option:</h4>
              {{ newOptions }}
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-select-box
                valueKey=&quot;name&quot;
                optionKey=&quot;id&quot;
                :allOptions=&quot;allOptions&quot;
                :haveOptions=&quot;haveOptions&quot;
                type=&quot;no-yes&quot;
                noHeader=&quot;未分配&quot;
                yesHeader=&quot;已分配&quot;
                v-on:change=&quot;optionsChanged&quot;
              &gt;&lt;/md-select-box&gt;
            </code-block>
            <code-block lang="javascript">
              export default{
                data() {
                  return {
                    title: '角色分配',
                    chooseRoles: [],
                    okText: '确定',
                    cancelText: '取消',
                    allOptions: [{id: 1, name: '张三'}, {id: 2, name: '李四'}, {id: 3, name: '王五'}, {id: 4, name: '张六'}],
                    haveOptions: [{id: 1, name: '张三'}, {id: 2, name: '李四'}],
                    newOptions: [{id: 1, name: '张三'}, {id: 2, name: '李四'}]
                  };
                },
                methods: {
                  optionsChanged(options) {
                    this.newOptions = options;
                  }
                }
              };
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>
<style lang="scss" scoped>
  .result-box {
    margin-top: 20px
  }
</style>
<script>
  export default{
    data() {
      return {
        title: '角色分配',
        chooseRoles: [],
        okText: '确定',
        cancelText: '取消',
        allOptions: [{id: 1, name: '张三'}, {id: 2, name: '李四'}, {id: 3, name: '王五'}, {id: 4, name: '张六'}],
        haveOptions: [{id: 1, name: '张三'}, {id: 2, name: '李四'}],
        newOptions: [{id: 1, name: '张三'}, {id: 2, name: '李四'}]
      };
    },
    methods: {
      optionsChanged(options) {
        this.newOptions = options;
      }
    }
  };
</script>
