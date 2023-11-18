const bur= document.getElementById('bur')
const menu= document.getElementById('menu')
const close=document.getElementById('close')
const categ=document.getElementById('categ')
const div_img=document.getElementById('img')
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
  for (i in data){
    comp=data[0]
    telep=data[1]
    model=telep[i].model_name
    ram=telep[i].ram
    name_company=comp[i].name_company
    telep_img=telep[i].img
    a=document.createElement("a")
    img=document.createElement("img")
    p=document.createElement("p")
    img.src=telep_img
    a.href="file:///C:/Users/Admin/Desktop/Fastapi2/proj/index.html"
    a.innerHTML=name_company
    p.innerHTML=model,ram
    img.innerHTML
    div_img.append(img)
    categ.append(a)
    info.append(p)
  }
  
})


