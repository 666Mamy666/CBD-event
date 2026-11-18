(() => {
  const openButton = document.querySelector("[data-menu-open]");
  const closeButton = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  // Some pages do not contain the navigation overlay.
  if (!openButton || !closeButton || !menu) return;

  const setMenuState = (isOpen) => {
    menu.classList.toggle("is-hidden", !isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    menu.inert = !isOpen;
    openButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);

    if (isOpen) {
      closeButton.focus();
    } else {
      openButton.focus();
    }
  };

  openButton.addEventListener("click", () => setMenuState(true));
  closeButton.addEventListener("click", () => setMenuState(false));

  menu.addEventListener("click", (event) => {
    if (event.target === menu) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.classList.contains("is-hidden")) {
      setMenuState(false);
    }
  });
})();
