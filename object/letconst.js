const family = {
        d1text : " Relativesite",
        familysite : [
          {
              atext: "GIT",
              href : "https://github.com/therese58/vj"
          },
          {
              atext: "Notion",
              href : "https://www.notion.so/ko"
          },
         {
             atext: "Figma",
              href : "https://www.figma.com/files/team/1392596935766494522"
          }
        ]
}


window.addEventListener('load', function(){

        this.document.querySelector("#family h2").innerHTML = family.d1text;

        this.document.querySelector("#family ul").innerHTML = `<li>${family.familysite[0].atext}</li>`;
        this.document.querySelector("#family ul").innerHTML += `<li>${family.familysite[1].atext}</li>`;
        this.document.querySelector("#family ul").innerHTML += `<li>${family.familysite[2].atext}</li>`;
})