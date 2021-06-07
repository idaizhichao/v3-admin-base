<template>
  <div>
    <el-row>
      <el-col :span="4">
        <h4 style="height: 48px"> ADMIN捷禾云ERP</h4>
        <el-row>
        <!--<el-col :span="10">
            <el-menu
                :uniqueOpened="true"
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
              <el-menu-item :index="item" v-for="item in [1,2,3,4]">
                <i class="el-icon-setting"></i>
                <template #title>导航{{ item }}</template>
              </el-menu-item>
            </el-menu>
          </el-col>-->
          <el-col :span="24">
            <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="right-menu"
              background-color="#f8f9fa"
              text-color="#5D5E73"
              active-text-color="#2E88FF">
              <el-scrollbar>
                <el-submenu v-for="item in menuList" :index="item.id">
                  <i :class="item.source"></i>
                  <template #title>{{ item.name }}</template>
                  <el-menu-item-group v-if="item.children">
                    <el-menu-item v-for="children in item.children" :index="children.id" @click="handleMenuItemClick(children)" >{{ children.name }}</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-scrollbar>
            </el-menu>
          </el-col>
        </el-row>
      </el-col>      
      <el-col :span="20">
        <el-row class="nav-box">
          <el-col :span="1" class="fold-class-wrapper">
            <i class="el-icon-s-fold fold-class" ></i>
          </el-col>
          <el-col :span="20">
            <el-tabs v-model="tabsValue" type="card" closable @tab-remove="removeTab">
              <el-tab-pane
                v-for="item in tabsList"
                :key="item.id"
                :label="item.name"
                :name="item.id"
              >
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="3" class="nav-right">
            <span>通知</span>
            <span>userInfo</span>
          </el-col>
        </el-row>
        <div class="content-wrapper">
          123
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import NavBar from './components/NavBar/index.vue'
import { getRoutes, Menu } from '../api/layout';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    NavBar
  },
  setup() {
    const menuList = ref<Menu[]>([])
    getRoutes().then((res: any)=> {
      menuList.value = res.data as Menu[]
    })
    const tabsList = ref<Menu[]>([])
    const tabsValue = ref('')
    const handleMenuItemClick = (menuItem: Menu)=> {
      const index = tabsList.value.findIndex((item: Menu)=> item.id === menuItem.id)
      if(index === -1 || tabsValue.value.length === 1) {
        tabsList.value.push(menuItem)
        tabsValue.value = menuItem.id
      }
    }
    const removeTab = (targetName: string)=> {
      const index = tabsList.value.findIndex(item=> {
        return item.id === tabsValue.value
      })
      tabsList.value.splice(index, 1)
    }
    return { menuList, tabsList, tabsValue, handleMenuItemClick, removeTab}
  }
})
</script>

<style lang="scss" scoped>
@import "index";
</style>
