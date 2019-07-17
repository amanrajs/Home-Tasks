
function init(){
    const app = document.querySelector('main');
    const fullcont=document.createElement('div');
    fullcont.setAttribute('class', 'fullcont');
    const container = document.createElement('div');
    container.setAttribute('class', 'left-container');
    const c = document.createElement('div');
    c.setAttribute('class','main-container');

    const headerbox=document.createElement('headerbox');
    const toptag=document.createElement('h2');
    toptag.textContent="NEWSFEED";
    const toptagitalic=document.createElement('i');
    toptagitalic.textContent="  yet Another Newsfeed";

    haederbox.appendChild(toptag);
    haederbox.appendChild(toptagitalic);

    const header = document.querySelector('header');
    header.appendChild(headerbox);

    const tag=document.createElement('p');
    var str = " \u00A9 NewsFeed 2019 ";
    tag.textContent=str;
    //div popup=document.createElement('div);
    tag.style.textAlign = 'center';
    tag.style.padding = "15px"
    const foot = document.querySelector('footer');
    foot.appendChild(tag);
    app.prepend(c);
    c.append(fullcont);
     for (var i=0;i<10;i++){
        const card = document.createElement('div');
        card.setAttribute('class', 'box');
        const image = document.createElement('img');
        image.src="resource/download.png";
        image.style.width='15%'
        image.style.height='15%'
        const right = document.createElement('div');
        right.setAttribute('class','vertical');
        const title = document.createElement('h4')
        title.textContent = "Chapter 1"
        const metadisc = document.createElement('h6')
        metadisc.setAttribute('class','metadisc')
        metadisc.setAttribute('id','meta')
        metadisc.style.fontStyle = "italic";
        metadisc.textContent = "created at 21 July 2019"
        const description = document.createElement('p')
        description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        description.style.margin='10px 0px';
        const btn = document.createElement('button')
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
        fullcont.appendChild(container);
      }
      const right_container = document.createElement('div');
      right_container.setAttribute('class', 'right-container');
      container.append(right_container);
      const title1 = document.createElement('h4');
      title1.textContent = "Select Category"
      var select = document.createElement("select");
      select.options.add( new Option("BBC","BBC", true, true) );
      select.options.add( new Option("CNBC","CNBC") );
      select.options.add( new Option("ANI","ANI") );
      select.options.add( new Option("NDTV","NDTV") );
      select.style.width="50%"
      const title2 = document.createElement('h4');
      title2.textContent = "Subscribe"
      const check=document.createElement('div');
      check.setAttribute('class','check');
      var input = document.createElement("input");
      input.type = "text";
      input.className = "css-class-name";
      input.style.width='50%';
      const btn = document.createElement('button')
      btn.innerHTML="Subscribe";
      check.appendChild(input);
      check.appendChild(btn);
      right_container.appendChild(title1);
      right_container.appendChild(select);
      right_container.appendChild(title2);
      right_container.appendChild(check);
      fullcont.appendChild(right_container);
}
window.onload = init;
