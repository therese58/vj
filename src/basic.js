window.addEventListener('load', function(){
// 호출영역
    this.document.querySelector("#family h2").innerHTML = family.d1text;

    const mylist = this.document.querySelectorAll("#family li");

    console.log(
       `정체파악 : ${mylist}` ,  // [object, object, object]
       `데이터타입 : ${typeof mylist}`, 
       // object -> array도 object에 해당됨
       `배열인가? ${Array.isArray(mylist)}`
       // 배열인지 아닌지 확인하기 true, false로 출력됨
       )

       for (자리 in mylist){
        mylist[자리].innerHTML = family.familysite[자리].atext;
       } 
})

// 함수제작