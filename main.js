for (const accordion of document.querySelectorAll(".accordion"))
  accordion.addEventListener("click", () =>
    accordion.classList.toggle("hidden")
  );
