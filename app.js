const navItems = document.querySelectorAll(".nav-link");
console.log(navItems);

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    const href = el.getAttribute("href");
    console.log(href);
    window.scrollTo({ behavior: "smooth" }, href);
  });
});
