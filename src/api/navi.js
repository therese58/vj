window.addEventListener('load', function(){

  let navitag = ""; //값변경가능한 변수선언
  const navitarget = this.document.querySelector("#navi>ul");

  for (x of mynavi){
    navitag += `<li class="position-relative">
            <a href="${x.href}" class="d-block px-lg-5 px-4">${x.title}</a>
            <div class="position-absolute">
              <ul>`;
              
      for(i of x.submenu){
        navitag += `<li><a href="${i.href}" class="text-nowrap">${i.text}</a></li>`;
        }

        navitag += `</ul>
            </div>
          </li>`;
  }

  navitarget.innerHTML = navitag

  //호출영역
  this.document.querySelector("#family h2").innerHTML = family.d1text;

  let familylist  = '';

  // for(x in family.faimilysite ){
  //     familylist += `<li>${family.faimilysite[x].atext}</li>`;
  // }

  for(x of family.familysite ){
    familylist += `<li><a href=${x.href}>${x.atext}</a></li>`;
  }
  this.document.querySelector("#family ul").innerHTML = familylist;


  //패밀리노출
  this.document.querySelector("#family").addEventListener('click', function(){
    this.classList.toggle('open');
  })

  //const allMenubtn = this.document.querySelector("#hd_allmenu_kcr");

  //allMenubtn.addEventListener('click', function(){
  //  document.body.classList.toggle('menuOpen')
 // })

});
// 함수제작