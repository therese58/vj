window.addEventListener('load', function(){
  //햄버거 버튼
  const allMenubtn = this.document.querySelector("#hd_allmenu_kcr");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen')
  })
});

