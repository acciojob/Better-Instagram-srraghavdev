let c= document.getElementsByClassName('image')
for(let i=0;i<c.length;i++){
    c[i].addEventListener('dragstart',(event)=>{
       event.dataTransfer.setData('text',event.target.id)
    })
    c[i].addEventListener('dragover',(event)=>{
        event.preventDefault()
    })
    c[i].addEventListener('drop',(event)=>{
        let g = event.target.id
        let t= event.dataTransfer.getData('text')
        let dragref=document.getElementById(t)
        let dropref=document.getElementById(g)
        let d= document.getElementById('parent')
        let dc=d.childNodes
        let dragindex=0;
        console.log(dragref)
        for(let j=0;j<dc.length;j++){
            if(dc[j].id==t){
                dragindex=j
                break
            }
        }
        console.log(dragindex)
        let temp2=event.target.cloneNode(true)
        temp2.draggable='true'
        temp2.droppable='true'
        console.log(temp2)
        d.replaceChild(dragref,dropref)
        d.replaceChild(temp2,document.getElementById('parent').childNodes[dragindex])
})
}
 
images.forEach(dragdrop);