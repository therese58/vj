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

let familytag = '';
familytag += `<h2>${family.d1text}</h2><ul>`;

for ( x of family.familysite ) {
    familytag += `<li>${x.atext}</li>`;
}

familytag +='</ul>';

window.addEventListener('load', function(){

        this.document.querySelector("#family").innerHTML = familytag;
})