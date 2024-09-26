window.addEventListener('load', function(){
// 호출영역
    this.document.querySelector("#family h2").innerHTML = family.d1text;

    let familylist = '';

    familylist += `<li>${family.familysite[0].atext}</li>`;
    familylist += `<li>${family.familysite[1].atext}</li>`;
    familylist += `<li>${family.familysite[2].atext}</li>`;

    this.document.querySelector("#family ul").innerHTML = familylist;
})

// 함수제작