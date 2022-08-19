<template>
  <div class="data">
    <h1>Hello</h1>
    <ul v-for="(user, index) in list" :key="index">
      <li>{{user.ranking}}</li>
      <li>{{user.name}}</li>
      <li>{{user.dob}}</li>
      <li>{{user.country}}</li>
      <li>{{user.score}}</li>
    </ul>
    <button @click="getData()">GetData</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "sortBy",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      const result = await axios.get("http://localhost:3200/mens");

      console.log(result);
      console.log("IMP", result.data);
      this.list = result.data;
      console.log(this.list);
    },
  },
  async mounted() {},
};
</script>

<style >
.data {
  z-index: 100;
}
</style>