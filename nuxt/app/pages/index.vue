<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Start Your 3 Day Free Trial</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard
        v-for="(plan, index) in plans"
        :key="plan.title"
        :class="[
          'bg-white shadow-sm',
          index === 0 ? 'border-t-4 border-t-cyan-400' : 'border-t-4 border-t-green-400'
        ]"
      >
        <div class="mb-4">
          <h2 class="text-xl font-bold">{{ plan.title }}</h2>
          <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-2 inline-block">3-days free then:</span>
        </div>

        <div class="text-4xl font-bold mb-2">{{ plan.price }}<span class="text-sm font-normal text-gray-500">/month</span></div>
        <p class="text-sm text-gray-500 mb-4">
          billed yearly at <s class="mr-1">{{ plan.oldPrice }}</s>
          <span class="text-green-600 font-medium bg-green-50 px-1">{{ plan.savings }} in savings</span>
        </p>

        <UButton block style="background-color: #f59e0b; color: white;" class="mb-6 hover:bg-amber-600 font-bold py-2">
          Try It Free
        </UButton>

        <ul class="space-y-3 text-sm text-gray-600">
          <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2">
            <UIcon name="i-heroicons-sparkles" class="text-green-400 w-5 h-5 flex-shrink-0 mt-0.5" />
            <span v-html="feature"></span>
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Список продуктів' })
const { data: plans } = await useFetch('/api/plans')
</script>
