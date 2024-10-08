const family = {
        d1text : "관련 사이트",
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

const mynavi = [
  {
    title: "about",
    href: "http://www.naver.com",
    submenu: [
      { text: "소메뉴", href: "#" },
      { text: "소메뉴", href: "#" },
      { text: "소메뉴", href: "#" },
      { text: "소메뉴", href: "#" }
    ]
  },
    {
      title: "portfolio",
      href: "#portfolio",
      submenu: [
        { text: "소메뉴1-1", href: "#" },
        { text: "소메뉴1-2", href: "#" },
        { text: "소메뉴1-3", href: "#" },
        { text: "소메뉴1-4", href: "#" }
      ]
    },
    {
      title: "info",
      href: "#info",
      submenu: [
        { text: "소메뉴1-1", href: "#" },
        { text: "소메뉴1-2", href: "#" },
        { text: "소메뉴1-3", href: "#" },
        { text: "소메뉴1-4", href: "#" }
      ]
    },
    {
      title: "contact",
      href: "#contact",
      submenu: [
        { text: "소메뉴1-1", href: "#" },
        { text: "소메뉴1-2", href: "#" },
        { text: "소메뉴1-3", href: "#" },
        { text: "소메뉴1-4", href: "#" }
      ]
    }
  ];

  const menuContainer = document.getElementById("menu-container");

  mynavi.forEach(item => {
    // 서브메뉴 목록을 템플릿 문자열로 생성
    const submenuHTML = item.submenu
      .map(submenuItem => `<li><a href="${submenuItem.href}" class="text-nowrap">${submenuItem.text}</a></li>`)
      .join("");

    // 대메뉴 및 서브메뉴를 포함한 HTML 템플릿 생성
    menuHTML += `
      <li class="position-relative">
        <a href="${item.href}" class="d-block ${item.title.length > 10 ? 'text-nowrap' : ''}">${item.title}</a>
        <div class="position-absolute">
          <ul>
            ${submenuHTML}
          </ul>
        </div>
      </li>
    `;
  });

  // menuContainer에 HTML 삽입
  menuContainer.innerHTML = menuHTML;
