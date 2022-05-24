import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarsView from '../views/CalendarsView.vue'
import ChatsView from '../views/ChatsView.vue'
import CharactersView from '../views/CharactersView.vue'
import ChatView from '../views/ChatView.vue'
import LogInView from '../views/LogInView.vue'
import AddNewChatView from '../views/AddNewChatView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calendars',
    name: 'calendars',
    component: CalendarsView
  },
  {
    path: '/chats',
    name: 'chats',
    component: ChatsView
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersView
  },
  {
    path: '/chat/:chat_id',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/addChat',
    name: 'addChat',
    component: AddNewChatView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
