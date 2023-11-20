/* ==============================
    Drawer
  ============================== */
const buttonHamburger = document.querySelector(".js-drawer") as HTMLButtonElement;
const body = document.querySelector("body") as HTMLElement;

buttonHamburger.addEventListener("click", function () {
  body.classList.toggle("is-drawerActive");
  const getAreaExpanded: string | null = this.getAttribute("aria-expanded");
  getAreaExpanded === "false" ? this.setAttribute("aria-expanded", "true") : this.setAttribute("aria-expanded", "false");
});

console.log("test");
