import { Router } from './route.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/exploracao', '/pages/exploracao.html')
router.add('/universo', '/pages/universo.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function changeBackGround (){
    let universoBack = document.querySelector('.universoButton')
    universoBack.addEventListener('click',function(){
        document.querySelector("body").classList.add("newbg")
        document.querySelector("body").classList.remove("newbgTwo")
    })
}

function changeBackGroundTwo (){
    let exploracaoBack = document.querySelector('.exploracaoButton')
    exploracaoBack.addEventListener('click',function(){
        document.querySelector("body").classList.add("newbgTwo")
        document.querySelector("body").classList.remove("newbg")
    })
}
function changeBackGroundThree (){
    let homeBack = document.querySelector('.homeButton')
    homeBack.addEventListener('click',function(){
        document.querySelector("body").classList.remove("newbg")
        document.querySelector("body").classList.remove("newbgTwo")
    })
}

changeBackGround()
changeBackGroundTwo()
changeBackGroundThree()

