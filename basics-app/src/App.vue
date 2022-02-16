<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <friends-contact @delete2="deleteContact" :friends="friends" />
  <!-- <friends-contact/> -->
  <new-friend @add-contact="addContact" />
</template>

<script>
import FriendsContact from './components/FriendsContact.vue'

export default {
  name: 'App',
  data(){
    return {
      friends:[
        {
          id:"1",
          name:"M1",
          phone:'123',
          email:"123@123.in"
        }
      ]
    }
  },
  components: {
    FriendsContact
  },
  methods: {
    addContact(name,phone,email){
      const newFriendList = {
        id:new Date().toISOString,
        name: name,
        phone:phone,
        email:email,
        isFavorite:false
      };
  this.friends.push(newFriendList);
    },
    deleteContact(friendId) {
       this.friends = this.friends.filter(friend => friend.id !==friendId)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
