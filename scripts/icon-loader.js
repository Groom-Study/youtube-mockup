document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll("[data-icon]");
  icons.forEach(el => {
    const name = el.dataset.icon;
    const path = `assets/icons/${name}.svg`;
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`Icon not found: ${path}`);
        return res.text();
      })
      .then(svg => {
        el.innerHTML = svg;

        const svgEl = el.querySelector("svg");
        if (!svgEl) return;

        svgEl.setAttribute("aria-hidden", "true");
        svgEl.setAttribute("focusable", "false");
        svgEl.removeAttribute("width");
        svgEl.removeAttribute("height");
      })
      .catch(err => {
        console.warn(err.message);
      });
  });
});