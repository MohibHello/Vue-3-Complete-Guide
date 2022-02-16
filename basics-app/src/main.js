import { createApp } from 'vue'
import App from './App.vue'
import FriendsContact from "./components/FriendsContact";
import PropsExample from "./components/PropsExample";
import NewFriend from './components/props-comunication/NewFriend';

const app = createApp(App);

app.component('friend-contact',FriendsContact)
app.component('props-example',PropsExample)
app.component('new-friend',NewFriend)

app.mount('#app')
