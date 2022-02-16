<template>
  <section>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreAvailable">
      <div :key="friend.id" v-for="friend in friends">
        <!-- <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li> -->

        <!-- passign dynamic values as props -->
    <!-- <props-example :name="friend.name" :phone="friend.phone" :email="friend.email" /> -->

      <!-- passing dynamic data as props with data trigger from child  -->
    <props-example :id="friend.id" :name="friend.name" :phone="friend.phone" :email="friend.email" @dataEmit="getAndPrint" @delete="deleteContact" />
      </div>
    </ul>

    <!-- passing string values -->
    <!-- <props-example name="mohib" phone="123456789111111" email="123@123.com" /> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      detailsAreAvailable: false,
    };
  },
  props:['friends'],
  // emits : ['getAndPrint'],
  //emit type validation
  emits: {
    'delete': function () {
     return true
    },
    'delete2': function () {
     return true
    },
    'getAndPrint' : function (name) {
      if (name) {
        return true;
      } else {
        console.warn("Name is Missing");
        return false;
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreAvailable = !this.detailsAreAvailable;
    },
    getAndPrint(name){
      console.log("name :",name)
    },
    deleteContact(fid){
      this.$emit('delete2',fid)
    }
  },
};
</script>

<style>
</style>