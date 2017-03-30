<template>
  <div class="select-box-wrap clearfix">
    <div class="left-wrap col-sm-5 clearfix">
      <div class="select-header">
        {{ leftHeader }}
      </div>
      <div id="leftBox" class="select-container">
        <ul>
          <li
            v-for="value, index in leftOptions"
            @click="selectLeft(index, $event)">
            {{ value[valueKey] }}
          </li>
        </ul>
      </div>
    </div>
    <div class="center-wrap col-sm-2 clearfix">
      <span class="move" @click="toLeft">←</span>
      <span class="move" @click="toRight">→</span>
    </div>
    <div class="right-wrap col-sm-5 clearfix">
      <div class="select-header">
        {{ rightHeader }}
      </div>
      <div id="rightBox" class="select-container">
        <ul>
          <li
            v-for="value, index in rightOptions"
            @click="selectRight(index, $event)">
            {{ value[valueKey] }}
          </li>
        </ul>
      </div>
    </div>
    <div class="hide">{{ _rightOptions }}</div>
    <div class="hide">{{ _leftOptions }}</div>
  </div>
</template>

<style lang="scss" src="./mdSelectBox.scss"></style>

<script type="text/ecmascript-6">
  let _splitData = (allOptions = [], haveOptions = [], optionKey = 'key') => {
    let urlKeyStr = ',';
    let noOptions = [];

    haveOptions.forEach((value) => {
      urlKeyStr += value[optionKey] + ',';
    });
    allOptions.forEach((value) => {
      if (urlKeyStr.indexOf(',' + value[optionKey] + ',') === -1) {
        noOptions.push(value);
      }
    });
    return noOptions;
  };
  let _selectItem = (options, index, selected, src) => {
    if (!src.selected) {
      selected.push(options[index]);
      src.className = 'selected';
      src.selected = true;
      src.selectedIndex = index;
      return selected;
    }
    src.className = '';
    src.selected = false;
    let selectedIndex = parseInt(src.selectedIndex, 10);
    let temp = [];

    selected.forEach((value, index) => {
      if (index !== selectedIndex) {
        temp.push(value);
      }
    });
    return temp;

};

export default {
    mounted() {
      console.log(this.$el.querySelector('#rightBox').offsetHeight);
    },
    data() {
      return {
        leftSelected: [],
        leftSelectedElements: [],
        leftOptions: [],
        rightOptions: [],
        rightSelected: [],
        rightSelectedElements: []
      };
    },
    props: {
      allOptions: {
        type: Array,
        default: () => [],
        required: true
      },
      haveOptions: {
        type: Array,
        default: () => [],
        required: true
      },
      optionKey: {
        type: String,
        default: 'key'
      },
      valueKey: {
        type: String,
        default: 'value'
      },
      type: {
        type: String,
        default: 'no-yes'
      },
      noHeader: {
        type: String,
        default: '未拥有'
      },
      yesHeader: {
        type: String,
        default: '已拥有'
      }
    },
    computed: {
      _rightOptions() {
        if (this.type === 'no-yes') {
          this.rightOptions = this.haveOptions;
          return '';
        }
        this.rightOptions = _splitData(this.allOptions, this.haveOptions, this.optionKey);
        return '';

      },
      rightHeader() {
        if (this.type === 'no-yes') {
          return this.yesHeader;
        }
        return this.noHeader;

      },
      _leftOptions() {
        if (this.type === 'no-yes') {
          this.leftOptions = _splitData(this.allOptions, this.haveOptions, this.optionKey);
          return '';
        }
        this.leftOptions = this.haveOptions;
        return '';

      },
      leftHeader() {
        if (this.type === 'no-yes') {
          return this.noHeader;
        }
        return this.yesHeader;

      }
    },
    methods: {
      selectedData() {
        if (this.type === 'no-yes') {
          this.$emit('change', this.rightOptions);
        } else {
          this.$emit('change', this.leftOptions);
        }
      },
      selectLeft(index, $event) {
        this.leftSelected = _selectItem(this.leftOptions, index, this.leftSelected, $event.srcElement);
      },
      toRight() {
        if (!this.leftSelected.length) {
          return;
        }
        this.rightOptions = this.rightOptions.concat(this.leftSelected);
        this.leftSelected = [];
        this.leftOptions = _splitData(this.leftOptions, this.rightOptions, this.optionKey);
        this.$el.querySelector('#leftBox').querySelectorAll('li').forEach((value) => {
          value.className = '';
          value.selected = false;
        });
        this.selectedData('left');
      },
      selectRight(index, $event) {
        this.rightSelected = _selectItem(this.rightOptions, index, this.rightSelected, $event.srcElement);
      },
      toLeft() {
        if (!this.rightSelected.length) {
          return;
        }
        this.leftOptions = this.leftOptions.concat(this.rightSelected);
        this.rightSelected = [];
        this.rightOptions = _splitData(this.rightOptions, this.leftOptions, this.optionKey);
        this.$el.querySelector('#rightBox').querySelectorAll('li').forEach((value) => {
          value.className = '';
          value.selected = false;
        });
        this.selectedData('right');
      }
    }
  };
</script>
