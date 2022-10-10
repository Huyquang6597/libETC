<template>
  <a-layout-header>
    <div class="logo"/>
    <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <routerLink to="/getall">View All</routerLink>
      </a-menu-item>
      <a-menu-item key="2">
        <RouterLink to="/add">Add</RouterLink>
      </a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: "HeaderMain"
}
</script>

<style scoped>

</style>