<template>
  <DashboardLayout>
    <!-- This RouterView will show either IndexView or SettingsView -->
    <RouterView />
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
</script>
