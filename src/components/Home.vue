<template>
    <div class="flex-container">
  <div><router-link to="/company"> Company Intelligence Report</router-link></div>
  <div><router-link to="/technology"> Technology  Intelligence Report</router-link></div>
</div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.flex-container {
  display: flex;
  /* background-color: #969fa8; */
  justify-content: center;
  cursor:pointer;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>