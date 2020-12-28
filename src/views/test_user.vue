<template>
  <div class="test_user">
    <h1>This is an test_user page</h1>
    <button @click="handleCORS">测试</button>
    <router-view/>
  </div>
</template>

<script>
import { get_hello } from '@/api/test_api'

export default {
  methods: {
    handleCORS(){
      get_hello().then( res => {
        alert(res.data)
      })
    }
  }
}
</script>