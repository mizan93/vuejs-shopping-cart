<template>
  <div id="app" class=" container">
    <!-- <router-link :to="{path:'/'}">HOme</router-link>
    <router-link :to="{path:'/test/1'}">Test1</router-link>
    <router-link :to="{path:'/test/2'}">Test2</router-link>
    <router-link :to="{path:'/test/3'}">Test3</router-link>
    <router-link :to="{path:'/test/4'}">Test4</router-link> -->


  <Navbar  @searchItem="search"></Navbar>
  <div class="container">
<div class="row py-3">
<div class="col-sm-9">
   <router-view ></router-view>
<!-- <Inventory @newItemAdded="addtoCart" :items="items"></Inventory> -->
</div>
<div class="col-sm-3">
<Cart @itemRomved="removeItem"  :cart="cart"></Cart>
</div>
</div>
</div>
  </div>
</template>

<script>
import Navbar from './components/views/Navbar'
// import Inventory from './components/Inventory'
import Cart from './components/views/Cart'
import data from './data'

export default {
     name:'App',
     data(){
       return{
         items:[],
         cart:[]
       }
     },
    components:{
      Navbar,
      // Inventory,
      Cart
    },
    mounted(){
      this.items=data
    },
    methods: {
      search(keyword){
       this.items= data.filter(item=>{
          return  item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
         })
       },
      addtoCart(item){
        this.cart.push(item)
      },
      removeItem(index){
        this.cart.splice(index,1)
      }
    }
}
</script>

<style>

</style>
