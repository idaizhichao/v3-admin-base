<template>
<!--  <div style="margin-bottom: 20px;">
    <el-button
      size="small"
      @click="addTab(editableTabsValue)"
    >
      add tab
    </el-button>
  </div>-->
  <el-row class="nav-box">
    <el-col :span="1" class="fold-class-wrapper">
      <i class="el-icon-s-fold fold-class" ></i>
    </el-col>
    <el-col :span="20">
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="3" class="nav-right">
      <span>通知</span>
      <span>userInfo</span>
    </el-col>
  </el-row>

</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue = newTabName;
    },
    
  }
}
</script>

<style scoped>
.nav-box {
  height: 48px;
  line-height: 48px;
}
.nav-right {
  text-align: end;  
}
.fold-class-wrapper {
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  padding-left: 1px;
}
.fold-class {
  font-size: 30px;
  color: #595959;
}
::v-deep(.el-tabs__header)  {
  margin: 0;
}
</style>