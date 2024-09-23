const family = {
        d1text : "패밀리 사이트",
        familysite : [
          "네이버", "구글", "다음"
        ]
}

//console.log(family.familysite[0], family.familysite[1], family.familysite[2])

for(let x in family.familysite){
  //index
    console.log(x)
}

for(let x of family.familysite){
  //value
    console.log(x)
}