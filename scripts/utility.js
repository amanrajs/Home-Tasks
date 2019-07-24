function emailSave(){
  let regexEmail = /\S+@\S+\.\S+/;
  let Emailid= document.getElementById('email').value;
  if(regexEmail.test(Emailid)){
    window.localStorage.setItem(Emailid, JSON.stringify(Emailid));
    alert("Subscribed successfully");
  }
  else{
    alert("Invalid Emailid");
  }
}
function clicked(){
  return clickevent => {
    if(/^\d+$/.test(clickevent.srcElement.id)){
      let newWin = window.open("about:blank", "News", "width=500,height=300");
      newWin.document.write(obj[Number(clickevent.srcElement.id)].postDesc);
      newWin.moveBy(250,250);
    }
    else{
      popup.style.display = 'none';
      fullContainer.style.opacity = '1';
    }
  }
}
