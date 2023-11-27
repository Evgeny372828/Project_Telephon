const bur= document.getElementById('bur')
const menu= document.getElementById('menu')
const close=document.getElementById('close')
const categ=document.getElementById('categ')
const div_img=document.getElementById('img')
const cont=document.getElementById('content')
const info=document.getElementById('info')

bur.addEventListener('click',function open() {
  if (bur.style.display ==="flex") {
    bur.style.display="none"
    menu.style.display="flex"
  }
  else {
    bur.style.display = "flex";
    menu.style.display="none"
  }
})
close.addEventListener('click',function open() {
  if (close.style.display ==="flex") {
    close.style.display="none"
    menu.style.display="none"
    bur.style.display="flex"
  }
  else {
    close.style.display = "flex";
    menu.style.display="flex"
  }
})



fetch("http://127.0.0.1:8000/vivod")
.then(res=>res.json())
.then(data=> {
  for (i in data  ){
    comp=data[0]
    telep=data[1]
    name_company=comp[i].name_company
    telep_img=telep[i].img
    label=document.createElement("label")
    a=document.createElement("input")
    a.type="radio"
    a.name="1"
    a.id="inp"
    label.innerText=name_company
    img=document.createElement("img")
    div_telephone=document.createElement("div")
    div_telephone.className="telephone"
    div_info=document.createElement("div")
    div_info.className="info"
    div_mod=document.createElement("div")
    div_mod.className="mod"
    div_mod.innerText = "Модель: "+telep[i].model_name
    div_ram=document.createElement("div")
    div_ram.className="ram"
    div_ram.innerText = "Опереативной памяти : " +telep[i].ram
    div_core=document.createElement("div")
    div_core.className="core"
    div_core.innerText ="Ядер: "+ telep[i].core
    div_comp=document.createElement("div")
    div_comp.className="comp"
    for(b in data[0]){
      if (comp[b].id==telep[i].name_company) {
        div_comp.innerText ="Название компании: "+ comp[b].name_company
        a.className=comp[b].name_company
        div_telephone.id=comp[b].name_company
      }
    }
  
    img.src=telep_img
    categ.append(a)
    categ.appendChild(label)
    div_info.appendChild(div_mod)
    div_info.appendChild(div_comp)
    div_info.appendChild(div_ram)
    div_info.appendChild(div_core)
    div_telephone.appendChild(img)
    div_telephone.appendChild(div_info)
    cont.appendChild(div_telephone)
    a.addEventListener("click",function(){
      inputs=document.querySelectorAll("#inp")
      len=Object.keys(inputs).length
      telephons=document.querySelectorAll(".telephone")
      len2=Object.keys(telephons).length
      if(a.checked){
      for (let p =0 ; p< len;p++){
        for(let f =0 ; p< len2;f++){
          if(inputs[p].className!=telephons[f].id){
            telephons[f].remove() 
        }  
        }
    }
    }
    })
  }
  }

)

