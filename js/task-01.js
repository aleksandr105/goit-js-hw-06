const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(function (element) {
  const titlesRef = element.querySelector("h2");
  console.log(`Category: ${titlesRef.textContent}`);
  const itemsRef = element.querySelectorAll("li");
  console.log(`Elements: ${itemsRef.length}`);
});
