<template>
  <div class="root">
      <SortableList lockAxis="y" v-model="items">
        <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
      </SortableList>
    </div>
</template>

<style>
  li{
    margin:3px;
    background-color:green;
  }
</style>

<script>

</script>
