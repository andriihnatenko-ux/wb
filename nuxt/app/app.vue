<template>
  <div class="bg-gray-50 min-h-screen text-gray-900">
    <UContainer class="py-6">
      <nav class="flex gap-4 mb-8 pb-4 border-b border-gray-200">
        <UButton to="/" variant="soft" color="gray">Лаба 4 (Список)</UButton>
        <UButton to="/table" variant="soft" color="gray">Лаба 5 (Таблиця)</UButton>
      </nav>

      <NuxtPage />
    </UContainer>
  </div>
</template>

<script setup>
// Примусово вмикаємо світлу тему
const colorMode = useColorMode()
colorMode.preference = 'light'
</script>
