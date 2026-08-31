document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "&#8593;";
  document.body.appendChild(btn);
  const toggle = () => {
    if (window.scrollY > 300) btn.classList.add("visible");
    else btn.classList.remove("visible");
  };
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
});
