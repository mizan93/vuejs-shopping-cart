<template>
<div v-if="!loading" class="row">
  <div class="col-sm-6">
<img :src="item.photo" alt="">
  </div>
  <div class="col-sm-6">
    <h2>{{item.title}}</h2>
<p>{{item.description}}</p>
 <span class=" float-left">${{ item.price }}</span>

      <a @click="addtoCart(item)" class="btn btn-primary float-right">+add</a>
  </div>
  </div>
  <h2 v-else class="text-center pt-5">Loading...</h2>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
    item:null,
    loading:true
  }
},
mounted(){
  this.fetchItem()
},
methods: {
  fetchItem(){
    axios.get('http://localhost:3000/item/'+this.$route.params.id)
    .then(response=>{
      var self=this
      setTimeout(() => {
      self.item=response.data
self.loading=false
      }, 500);
    })
  },
  addtoCart(item){
    this.$store.commit('addToCart',item)

  }
},
}
</script>

<style>

</style>
