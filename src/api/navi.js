window.addEventListener('load', function(){

  let navitag = ""; // 값변경가능한 변수를 선언
  const navitarget = this.document.querySelector("#navi >ul"); 

   for(x of mynavi){
    navitag += `<li class="position-relative">
                <a href="${x.title.link}" class="d-block px-lg-5">${x.title.text}</a>
                <div class="position-absolute">
                  <ul>`;
         for( i of x.subMenu){
                    navitag += `<li><a href="${i.link}" class="text-nowrap">${i.text}</a></li>`;
         }                   
    navitag += ` </ul>
                </div>
              </li>`
             }
             navitarget.innerHTML = navitag;

  //호출영역
  this.document.querySelector("#family h2").innerHTML = family.d1text;

  let familylist  = '';

  for(x of family.faimilysite ){
    familylist += `<li>${x.atext}</li>`;
  }
  this.document.querySelector("#family ul").innerHTML = familylist;

 //faq
 
 let faqtag = ""; // 값변경가능한 변수를 선언
 const faqtarget = this.document.querySelector("#faqcontent  .content"); 

  faqtag += `<dl class="container py-5">`;
  for(x of faqcontent){
    faqtag += `<dt class="border-bottom py-3 justify-content-between d-flex">
                   <span> ${x.faqQ} </span>
                   <i class="bi bi-chevron-down"></i></dt>
                   <dd class="py-4 d-none">`;
                   const faqcontentArr = x.faqA.split("|");                  
                  for(j of faqcontentArr){
                    faqtag +=`<span class='d-block'> ${j} </span>`;
                  }                    
    faqtag += `</dd>`;
            }
  faqtag += `</dl>`;
  faqtarget.innerHTML = faqtag;

  //패밀리노출
  this.document.querySelector("#family h2").addEventListener('click', function(){
    this.parentNode.classList.toggle('open');
  })


  const faqdts = document.querySelectorAll("#faqcontent .content dt");

  // 모든 dt 요소에 클릭 이벤트 추가
  faqdts.forEach((ele) => {
    ele.addEventListener('click', function() {
      
      faqdts.forEach((sibling) => {
        if (sibling === ele) {
          // 클릭한 요소라면
          if (sibling.classList.contains('expand')) {
            sibling.classList.remove('expand'); // 이미 확장되어 있으면 제거
          } else {
            sibling.classList.add('expand'); // 확장되지 않은 경우 추가
          }
        } else {
          // 클릭한 요소가 아니면
          sibling.classList.remove('expand'); // 다른 모든 dt는 'expand' 제거
        }
      });
      
    });
  });

})
