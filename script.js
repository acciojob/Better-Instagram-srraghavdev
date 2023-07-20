let drag=null
let c= document.getElementsByClassName('image')
for(let i=0;i<c.length;i++){
    c[i].addEventListener('dragstart',(event)=>{
        drag=event.target
    })
}
let parent= document.getElementById("parent")
parent.addEventListener('dragover',(event)=>{
    event.preventDefault()
})
parent.addEventListener("drop",(event)=>{
    event.preventDefault()
    console.log(drag)
    console.log(event)
    let temp=drag.id
    drag.id=event.target.id
    event.target.id=temp
})