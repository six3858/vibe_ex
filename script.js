// 모바일에서 햄버거 버튼으로 내비게이션을 열고 닫습니다.
const menuButton = document.querySelector(".menu-button");
const mainMenu = document.querySelector(".main-menu");

function closeMenu() {
  mainMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "메뉴 열기");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
    return;
  }

  mainMenu.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "메뉴 닫기");
  document.body.classList.add("menu-open");
});

// 메뉴를 선택하면 모바일 메뉴가 자동으로 닫힙니다.
mainMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// 화면이 넓어졌을 때 모바일 메뉴의 상태를 초기화합니다.
window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    closeMenu();
  }
});

// 저작권 연도가 매년 자동으로 바뀌도록 현재 연도를 표시합니다.
document.querySelector("#current-year").textContent = new Date().getFullYear();
