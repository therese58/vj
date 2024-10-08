window.addEventListener('load', function(){
  //햄버거 버튼
  const allMenubtn = this.document.querySelector("#hd_allmenu_kcr");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen')
  })

  thist.addEventListener("scroll", scrolltop0);

  window.addEventListener("scroll", scrolltop0);

  function scrolltop0() {
    // 현재 스크롤 위치와 윈도우 높이를 출력
    console.log("scroll position", window.scrollY, window.innerHeight, typeof window.innerHeight);
  
    // 스크롤 위치와 페이지 높이를 계산
    const pagetop = window.scrollY; // 페이지의 스크롤 위치
    const targetscrolleffect = window.innerHeight; // 윈도우의 높이
    
    // 스크롤이 50px 이상일 때 class 추가
    if (pagetop > 50) {
      document.body.classList.add('scrolldown');
    } else {
      document.body.classList.remove('scrolldown');
    }
  }
  
});

