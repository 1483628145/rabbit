<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav/index.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader/index.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter/index.vue";
</script>

<style>
</style>