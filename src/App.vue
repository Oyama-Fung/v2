<template>
<div>
  <h1>elTable大数据加载优化</h1>

  <el-table v-my-scroll height="300" :data="tableData.slice(start,over)" :cell-style="{padding: '0'}" :header-cell-style="{padding: '0'}">
    <el-table-column prop="date" label="Date"  />
    <el-table-column prop="name" label="Name"  />
    <el-table-column prop="address" label="Address" />
  </el-table>
</div>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      setTimeout(()=> {
        let arr = []
        for (let i = 0; i < 100; i++) {
          arr.push({
            date: `date_${i+1}`,
            name: `name_${i+1}`,
            address: `address_${i+1}`,
          })
        }
        this.tableData = arr
      }, 1000)
    }
  }
</script>

<style>
.tableStyle {
  margin: 0 auto;
}
.el-table__row {
  height: 40px;
}
.el-table .el-table__cell {
  padding: 0;
}
</style>
