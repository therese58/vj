const family = {
        d1text : "패밀리 사이트",
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

console.log(family.familysite[0].atext, family.familysite[0].href);

const mytag = `<a href="${family.familysite[0].href}">${family.familysite[0].atext}</a>`;

console.log(mytag);
