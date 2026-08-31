document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  if (!container || document.querySelector(".site-nav")) return;
  const path = location.pathname;
  const isRef = path.endsWith("reference.html");
  const isGlossary = path.endsWith("glossary.html");
  const isLessonsIndex = path.endsWith("/lessons/index.html") || path.endsWith("/lessons/") || path.endsWith("lessons/index.html");
  const inLessons = path.includes("/lessons/");
  const inReference = path.includes("/reference/");
  let refHref, lessonsHref, glossaryHref;
  if (inLessons) {
    refHref = "reference.html";
    lessonsHref = "index.html";
    glossaryHref = "../reference/glossary.html";
  } else if (inReference) {
    refHref = "../lessons/reference.html";
    lessonsHref = "../lessons/index.html";
    glossaryHref = "glossary.html";
  } else {
    refHref = "lessons/reference.html";
    lessonsHref = "lessons/index.html";
    glossaryHref = "reference/glossary.html";
  }

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Site");
  nav.innerHTML = `
    <div class="site-tabs">
      <a href="${lessonsHref}" class="site-tab ${isLessonsIndex ? "active" : ""}">Lessons</a>
      <a href="${refHref}" class="site-tab ${isRef ? "active" : ""}">Reference</a>
      <a href="${glossaryHref}" class="site-tab ${isGlossary ? "active" : ""}">Glossary</a>
    </div>
  `;
  container.prepend(nav);
});
