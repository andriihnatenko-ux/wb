<template>
  <div>
    <UCard class="bg-white shadow-md rounded-lg overflow-hidden" :ui="{ body: { padding: 'p-0 sm:p-0' } }">

      <div class="p-4 border-b flex justify-between items-center bg-gray-50">
        <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass" placeholder="Пошук продуктів..." class="w-64" />
      </div>

      <div class="overflow-x-auto">
        <UTable
          :data="paginatedRows"
          :columns="columns"
          :loading="status === 'pending'"
          class="w-full min-w-[800px]"
        >
          <template #thumbnail-cell="{ row }">
            <img v-if="row.original.thumbnail" :src="row.original.thumbnail" alt="Product" class="w-[80px] h-[80px] object-cover rounded border bg-white" />
          </template>

          <template #description-cell="{ row }">
            <div class="truncate max-w-[250px] text-gray-500" :title="row.original.description">
              {{ row.original.description }}
            </div>
          </template>

          <template #rating-cell="{ row }">
            <span :class="row.original.rating < 4.5 ? 'text-red-500 font-bold' : 'text-green-500 font-bold'">
              {{ row.original.rating }}
            </span>
          </template>

          <template #price-cell="{ row }">
            <span class="font-medium text-gray-900">${{ row.original.price }}</span>
          </template>
        </UTable>
      </div>

      <div class="p-4 border-t bg-gray-50 flex justify-end">
        <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.length" />
      </div>
    </UCard>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

useHead({ title: 'Таблиця продуктів' })

const { data, status } = useFetch('https://dummyjson.com/products?limit=0')
const products = computed(() => data.value?.products || [])

const searchQuery = ref('')
const page = ref(1)
const pageCount = ref(5)

const columns = [
  { id: 'thumbnail', accessorKey: 'thumbnail', header: 'Фото' },
  { id: 'title', accessorKey: 'title', header: 'Назва' },
  { id: 'description', accessorKey: 'description', header: 'Опис' },
  { id: 'price', accessorKey: 'price', header: 'Ціна' },
  { id: 'rating', accessorKey: 'rating', header: 'Оцінка' },
  { id: 'brand', accessorKey: 'brand', header: 'Бренд' },
  { id: 'category', accessorKey: 'category', header: 'Категорія' }
]

const filteredRows = computed(() => {
  if (!searchQuery.value) return products.value
  const query = searchQuery.value.toLowerCase()
  return products.value.filter(product =>
    Object.values(product).some(val =>
      val !== null && val !== undefined && String(val).toLowerCase().includes(query)
    )
  )
})

const paginatedRows = computed(() => {
  const start = (page.value - 1) * pageCount.value
  const end = start + pageCount.value
  return filteredRows.value.slice(start, end)
})

watch(searchQuery, () => {
  page.value = 1
})
</script>

<style scoped>
/* Примусово робимо шапку таблиці темною, точно як у 5-й лабі */
:deep(thead th) {
  background-color: #2d2d2d !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  text-align: left !important;
}
</style>
