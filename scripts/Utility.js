
function clicked(){
  return clickEvent => {
    if(/^\d+$/.test(clickEvent.srcElement.id)){
      let newWin = window.open("about:blank", "News", "width=500,height=300");
      let content=(document.getElementById(clickEvent.srcElement.id)).data;
      newWin.document.write(content);
      newWin.moveBy(250,250);
    } else{
      popup.style.display = 'none';
      fullContainer.style.opacity = '1';
    }
  }
}
function emailSave(){
  let regexEmail = /\S+@\S+\.\S+/;
  let emailid= document.getElementById('email').value;
  if(regexEmail.test(emailid)){
    localStorage.setItem(emailid, JSON.stringify(emailid));
    alert("Subscribed successfully");
  }
  else{
    alert("Invalid Emailid");
  }
}
