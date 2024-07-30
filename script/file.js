let start=document.getElementById("inizia")
let figure=document.getElementById("scelta")
let you=document.getElementById("you")
let cpu=document.getElementById("cpu")
let foglia=document.getElementById("foglia")
let forbice=document.getElementById("forbice")
let sasso=document.getElementById("sasso")
let punteggioYou=document.getElementById("punteggioYou")
let punteggioCpu=document.getElementById("punteggioCpu")
let risultato=document.getElementById("risultato")

start.addEventListener("click",function(){
   start.style.opacity="0";
   figure.style.display="block"
   you.style.backgroundImage=""
   cpu.style.backgroundImage=""
   risultato.style.display="none"
  })
  foglia.addEventListener("click",function(){
    let immagini=["foglia.png","forbice.png","sasso.png"]
    numRand=Math.floor(Math.random()*3)
    you.style.backgroundImage="url(immagini/foglia.png)"
    cpu.style.backgroundImage="url(immagini/"+immagini[numRand]+")"
    punteggioYouAggiornato=Number(punteggioYou.innerHTML)
    punteggioCpuAggiornato=Number (punteggioCpu.innerHTML)
    if(numRand==0){
        risultato.style.display="block"
        risultato.innerHTML="patta"
        risultato.style.color="#ceb900"
        scelta.style.display="none"
        start.style.opacity="1"
      }
       else if(numRand==1){
        risultato.style.display="block"
        risultato.innerHTML="perso"
        risultato.style.color="#1d6600"
        scelta.style.display="none"
        start.style.opacity="1"
        punteggioCpu.innerHTML=punteggioCpuAggiornato + 1
      }
      else  if(numRand==2){
        risultato.style.display="block"
        risultato.innerHTML="hai vinto"
        risultato.style.color="#e22d00"
        scelta.style.display="none"
        start.style.opacity="1"
        punteggioYou.innerHTML=punteggioYouAggiornato + 1
      }
    })
    forbice.addEventListener("click",function(){
        let immagini=["foglia.png","forbice.png","sasso.png"]
        numRand=Math.floor(Math.random()*3)
        you.style.backgroundImage="url(immagini/forbice.png)"
        cpu.style.backgroundImage="url(immagini/"+immagini[numRand]+")"
        punteggioYouAggiornato= Number(punteggioYou.innerHTML)
        punteggioCpuAggiornato= Number(punteggioCpu.innerHTML)
      
        if(numRand==1){
            risultato.style.display="block"
            risultato.innerHTML="patta"
            risultato.style.color="#ceb900"
            scelta.style.display="none"
            start.style.opacity="1"
          }
           else if(numRand==2){
            risultato.style.display="block"
            risultato.innerHTML="perso"
            risultato.style.color="#1d6600"
            scelta.style.display="none"
            start.style.opacity="1"
            punteggioCpu.innerHTML=punteggioCpuAggiornato + 1
          }
          else  if(numRand==0){
            risultato.style.display="block"
            risultato.innerHTML="hai vinto"
            risultato.style.color="#e22d00"
            scelta.style.display="none"
            start.style.opacity="1"
            punteggioYou.innerHTML=punteggioYouAggiornato + 1
          }
      })
      sasso.addEventListener("click",function(){
        let immagini=["foglia.png","forbice.png","sasso.png"]
        numRand=Math.floor(Math.random()*3)
        you.style.backgroundImage="url(immagini/sasso.png)"
        cpu.style.backgroundImage="url(immagini/"+immagini[numRand]+")"
        punteggioYouAggiornato= Number(punteggioYou.innerHTML)
        punteggioCpuAggiornato= Number(punteggioCpu.innerHTML)
        if(numRand==2){
            risultato.style.display="block"
            risultato.innerHTML="patta"
            risultato.style.color="#ceb900"
            scelta.style.display="none"
            start.style.opacity="1"
           }
           else if(numRand==0){
            risultato.style.display="block"
            risultato.innerHTML="perso"
            risultato.style.color="#1d6600"
            scelta.style.display="none"
            start.style.opacity="1"
            punteggioCpu.innerHTML=punteggioCpuAggiornato + 1
            }
           else  if(numRand==1){
            risultato.style.display="block"
            risultato.innerHTML="hai vinto"
            risultato.style.color="#e22d00"
            scelta.style.display="none"
            start.style.opacity="1"
            punteggioYou.innerHTML=punteggioYouAggiornato + 1
            }
      })

