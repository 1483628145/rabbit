<template>
  <el-button type="primary" @click="getText">点击</el-button>
</template>

<script setup>
import request from "@/utils/request";

async function getText() {
  let {result} = await request({
    url: "/home/banner",
  });
  console.log(result);
}
</script>

<style>
</style>