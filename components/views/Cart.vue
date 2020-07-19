<template>
  <ul class="list-group">
    <h2>Cart</h2>

    <li class="list-group-item">
      <span>Name</span>
      <span class="float-right">Price</span>
    </li>
    <hr />
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <button @click="removeItem(index)" type="button" class="btn btn-danger">
        -
      </button>
      <span>{{ item.title }}</span>
      <span class="float-right">${{ item.price }}</span>
    </li>
    <hr />
    <li class="list-group-item">
      <span><b>total</b></span>
      <span class="float-right">${{ totalPrice }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      var total = 0;
      this.items.forEach(item => {
        total += parseFloat(item.price);
      });
      return total;
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit("removeItem", index);
    }
  }
};
</script>

<style></style>
