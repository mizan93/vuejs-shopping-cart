<template>
  <div v-if="!loading" class="row">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card ml-1"
      style="width:13rem;"
    >
      <router-link tag="div" :to="{ path: '/item/' + item.id }">
        <img class="card-img-top" :src="item.photo" alt="image" />

        <div class="card-body">
          <h4 class="card-title">{{ item.title }}</h4>
        </div>
      </router-link>
      <div class="card-footer">
        <span class=" float-left">${{ item.price }}</span>

        <a @click="addToCart(item)" class="btn btn-primary float-right">+add</a>
      </div>
    </div>
  </div>
  <h2 v-else class="text-center pt-5">Loading...</h2>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    items(){
      return this.$store.getters.getInventory
    }
  },
  mounted() {
    this.fetchInvenory();
  },

  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
    fetchInvenory() {
      var self = this;
      axios.get("http://localhost:3000/items").then(response => {
        setTimeout(function() {

          self.$store.commit("setInventory", response.data);
          self.loading = false;
        }, 500);
      });
    }
  }
};
</script>

<style></style>
