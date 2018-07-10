import "../css/app.scss"
//Using import to test traspiling babel
import { eddyAB } from './messages.js'
import zeroImg from "../img/zero.png"
import testVideo from "../videos/Core.mp4"

//VueJs 
import Vue from 'vue'
import App from './App/App.vue'

let zero = document.getElementById('zero')
zero.setAttribute('src', zeroImg)

let video = document.createElement('video')
video.setAttribute('src', testVideo)
video.setAttribute('width',480)
video.setAttribute('autoplay',480)
video.setAttribute('controls', true)
document.body.append(video)


new Vue({
    render: h => h(App)
  }).$mount('#app')
