const obj=[
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Delhi CEO writes to EC over Modi web series",
        postDate: "29th June , 2019",
        postCategory: "BBC",
        postDesc: "Delhi Chief Electoral Officer Ranbir Singh has written to the poll panel saying that a web series on Modi available on the Eros Now website was streaming without certification from the Media Certification and Monitoring Committee (MCMC).A senior official at the Delhi CEO's office reportedly said that they have brought to the notice of the ECI that a series on PM Narendra Modi is being screened on the Eros Now platform without MCMC certification. Since it not a Delhi specific matter, the CEO office has asked the ECI to take cognizance of the matter."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "New guidelines to tackle mental health of inmates",
        postDate: "22th June , 2019",
        postCategory: "BBC",
        postDesc: "At present, only Pennsylvania has constituted a detailed manual on mental health for prisoners. Dr Nand Kumar, professor of psychiatry at AIIMS has framed these guidelines on mental health condition for prisoners.Doctors of AII India Institute of Medical Sciences (AIIMS) in collaboration with Delhi Prison Administration have drafted first guidelines on mental health issues for inmates in jail. The manual known as 'Psychological First Aid' will be released on Tuesday."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "City ring vowing jobs in Territorial Army busted",
        postDate: "20th June , 2019",
        postCategory: "IndiaToday",
        postDesc: "The fraudsters, police said, have interstate links and they confidently organised physical and medical tests in park adjacent to cantonment area of Bhubaneswar.The entire nexus was unearthed after Delhi crime branch received a complaint from one of the job seeker on April 13. The complainant also given a lead that the accused are coming here in Mahipalpur area of Delhi to distribute admit cards."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Traders' ire to impact election results in Delhi",
        postDate: "20th June , 2019",
        postCategory: "FoxNews",
        postDesc: "The Delhi High Court asked Delhi Pollution Control Committee (DPCC) not to take coercive steps against traders until the next day of hearing on April 26.The violence that rocked the area a month before Delhi votes in the Lok Sabha elections left many wounded on both sides and renewed the old political slugfest over the hot button issue.Since December 2017, about 10,000 commercial establishments have been sealed across the National Capital for land misuse (converting residential units into commercial ones), non-payment of conversion charges and increased pollution emissions."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Ahead of polls, MLA hostel searched in Chennai",
        postDate: "29th June , 2019",
        postCategory: "TV9",
        postDesc: "With just a few days left for the Lok Sabha elections in Tamil Nadu, a team of officials from the flying squad of the Election Commission along with Income Tax officials carried out raids in Tamil Nadu MLA’s Hostel in Omandurar Government Estate.Sources in the IT department said rooms of Tamil Nadu revenue minister RB Udhayakumar and two others were searched. However, it is not clear whether the team seized any cash or incriminating documents from the minister’s room."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Canada drops reference to Sikh extremism from terror threat report",
        postDate: "22th June , 2019",
        postCategory: "Republic",
        postDesc: "Pro-Khalistan group Sikhs for Justice (SFJ) has called upon Canadian Prime Minister Justin Trudeau to step down for practising the politics of expediency in having his government drop Sikh extremism from a report on terror the day before he participated in Baisakhi parade.The damage has been done Mr Prime Minister and you should resign over this, said Gurpatwant Singh Pannun, SFJ legal adviser."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Jet puts off date to resume foreign flights",
        postDate: "20th June , 2019",
        postCategory: "TV5",
        postDesc: "Jet Airways has stopped accepting bookings for its Mumbai-Paris flight until June 10 and closed reservations for its Mumbai-London, Mumbai-Amsterdam-Mumbai and Bangalore-Amsterdam flights, up to April 18.Meanwhile, the airline's pilots who are on the warpath have also decided to defer their strike which was scheduled from Monday as they want to give the airline a chance to survive, keeping in mind the meeting with banks tomorrow."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "SP, BJP battle over national security",
        postDate: "20th June , 2019",
        postCategory: "AajTak",
        postDesc: "Prime Minster Narendra Modi also targeted SP-BSP alliance while addressing a rally in Uttar Pradesh's Moradabad district. PM Modi said, The irony is that 'elephant is riding on bicycle for personal gains. They have done nothing for the poor in the state during their regimes, and now they are trying to lure public on fake promises."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Summer assault! Delhi again in big water crisis",
        postDate: "20th June , 2019",
        postCategory: "CNBC",
        postDesc: "The crisis turns so grave that violent fights over water among neighbours in summers are common. Delhi Police said they are gearing up to tackle water clashes that left three dead and many injured last summer.All experts are unanimous that Delhi must revive its water bodies, ensure groundwater recharge through storm drains, store rainwater, and recycle and reuse its waste water."
    },
    {
        imageSrc: "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg",
        postTitle: "Melbourne nightclub shooting leaves 1 dead, 3 injured",
        postDate: "20th June , 2019",
        postCategory: "NewsToday",
        postDesc: "Sunday's shooting took place around 3.20 a.m. in the lively entertainment district of Melbourne's southeastern suburb of Prahran, police said.Three security guards and a man queuing to enter were taken to hospital with gunshot injuries, police said in a televised news conference in Melbourne."
    },
];
const fullcontainer=document.createElement('div');
const container = document.createElement('div');
const popup = document.createElement('div');

function changeContent(val){
  container.innerHTML = '';
  for(i in obj){
    if(obj[i].postCategory==val){
      const card = document.createElement('div');
      card.setAttribute('class', 'box');
      const image = document.createElement('img');
      image.setAttribute('class','image');
      image.src="resource/download.png";
      const right_side = document.createElement('div');
      right_side.setAttribute('class','vertical');
      const title = document.createElement('h4')
      title.textContent = obj[i].postTitle;
      const metadisc = document.createElement('h6');
      metadisc.setAttribute('class','metadisc');
      metadisc.setAttribute('id','meta');
      metadisc.textContent = obj[i].postDate;
      const description = document.createElement('p');
      description.setAttribute('class','description')
      description.textContent = obj[i].postDesc;
      const btn = document.createElement('button')
      btn.setAttribute('id',i);
      btn.innerHTML="Continue Reading";
      btn.setAttribute('class','btncontinue')
      var horizontalline = document.createElement("HR");
      right_side.appendChild(title);
      right_side.appendChild(metadisc);
      right_side.appendChild(description);
      right_side.appendChild(btn);
      card.appendChild(image)
      card.appendChild(right_side)
      container.appendChild(card);
      container.appendChild(horizontalline);
    }
  }
}
function clicked(){
  return clickevent => {
    if(/^\d+$/.test(clickevent.srcElement.id)){
      console.log('in side wrong ');
      popup.style.display = 'flex';
      popup.textContent = obj[Number(clickevent.srcElement.id)].postDesc;
      fullcontainer.style.opacity = '0.3';
    } else{
      popup.style.display = 'none';
      fullcontainer.style.opacity = '1';
    }
  }
}
function EmailSave(){
  var regexEmail = /\S+@\S+\.\S+/;
  let Emailid= document.getElementById('email').value;
  if(regexEmail.test(Emailid)){
  window.localStorage.setItem(Emailid, JSON.stringify(Emailid));
  alert("Subscribed successfully");
}
else{
  alert("Invalid Emailid");
}
}

function setRightContent(){
  const right_container = document.createElement('div');
  right_container.setAttribute('class', 'right-container');
  const title1 = document.createElement('h4');
  title1.textContent = "Select Category"
  var select = document.createElement("select");
  select.options.add( new Option("Select a NEWS Channel",null) );
  select.options.add( new Option("BBC","BBC") );
  select.options.add( new Option("CNBC","CNBC") );
  select.options.add( new Option("IndiaToday","IndiaToday") );
  select.options.add( new Option("TV9","TV9") );
  select.options.add( new Option("TV5","TV5") );
  select.options.add( new Option("FoxNews","FoxNews") );
  select.options.add( new Option("Republic","Republic") );
  select.options.add( new Option("AajTak","AajTak") );
  select.style.width="50%"
  const title2 = document.createElement('h4');
  title2.textContent = "Subscribe"
  const check=document.createElement('div');
  check.setAttribute('class','check');
  var input = document.createElement("input");
  input.setAttribute('id','email');
  input.type = "text";

  const btn = document.createElement('button')
  btn.innerHTML="Subscribe";
  btn.setAttribute('id','btn-email');
  btn.addEventListener("click", EmailSave);
  check.appendChild(input);
  check.appendChild(btn);
  right_container.appendChild(title1);
  right_container.appendChild(select);
  right_container.appendChild(title2);
  right_container.appendChild(check);
  fullcontainer.appendChild(right_container);
  select.options[0].disabled = true;
  select.onchange = () => {
    let val=select.value;
    changeContent(val);
  }
}
  function setLeftContent(){
    for (var i=0;i<1;i++){
       const card = document.createElement('div');
       card.setAttribute('class', 'box');
       const image = document.createElement('img');
       image.src="resource/download.png";
       image.setAttribute('class','image');

       const right = document.createElement('div');
       right.setAttribute('class','vertical');
       const title = document.createElement('h4')
       title.textContent = "SAMPLE NEWS HEADING"
       const metadisc = document.createElement('h6')
       metadisc.setAttribute('class','metadisc')
       metadisc.setAttribute('id','meta')
       metadisc.style.fontStyle = "italic";
       metadisc.textContent = "created at 21 July 2019"
       const description = document.createElement('p');
       description.setAttribute('class','description');
       description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
       const btn = document.createElement('button')
       btn.setAttribute('id',i);
       btn.innerHTML="Continue Reading";
       btn.setAttribute('class','btncontinue')
       var horizontalline = document.createElement("HR");
       right.appendChild(title);
       right.appendChild(metadisc);
       right.appendChild(description);
       right.appendChild(btn);
       card.appendChild(image)
       card.appendChild(right)
       container.appendChild(card);
       container.appendChild(horizontalline);
       fullcontainer.appendChild(container);
     }
  }
function init(){
    popup.setAttribute('class','popup');
    const app = document.querySelector('main');
    app.appendChild(popup);
    fullcontainer.setAttribute('class', 'fullcont');
    container.setAttribute('class', 'left-container');
    const  appbody= document.createElement('div');
    appbody.setAttribute('class','main-container');
    const headerbox=document.createElement('div');
    headerbox.setAttribute('class','headerbox')
    const toptag=document.createElement('h2');
    toptag.textContent="NEWSFEED";
    const toptagitalic=document.createElement('i');
    toptagitalic.textContent="  yet Another Newsfeed";
    headerbox.appendChild(toptag);
    headerbox.appendChild(toptagitalic);
    const header = document.querySelector('header');
    header.appendChild(headerbox);
    const footertag=document.createElement('p');
    footertag.setAttribute('id','footertag');
    var str = " \u00A9 NewsFeed 2019 ";
    footertag.textContent=str;
    const foot = document.querySelector('footer');
    foot.appendChild(footertag);
    app.prepend(appbody);
    appbody.append(fullcontainer);
    setLeftContent();
    setRightContent();
    document.addEventListener("click", clicked(this));

}
window.onload = init;
