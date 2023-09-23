const listItems = document.querySelectorAll(".head-list__li");
const aboutSection = document.querySelector(".sec-about");
const expSection = document.querySelector(".sec-exp");
const projSection = document.querySelector(".sec-proj");
const contSection = document.querySelector(".sec-cont");

function changeActive(itemIndex) {
  listItems.forEach((item, index) => {
    const isCurrentItem = index === itemIndex;
    item
      .querySelector("span")
      .classList.toggle("head-list__span--active", isCurrentItem);
    item.classList.toggle("head-list__li--active", isCurrentItem);
  });
}

changeActive(0);

window.addEventListener("scroll", () => {
  const sections = [aboutSection, projSection, expSection];
  let activeIndex = sections.findIndex(
    (section) => window.scrollY < section.offsetTop + section.clientHeight
  );
  if (activeIndex === -1) {
    activeIndex = sections.length;
  }
  changeActive(activeIndex);
});

listItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.querySelector("span").classList.add("head-list__span--hovered");
  });
  item.addEventListener("mouseleave", () => {
    item.querySelector("span").classList.remove("head-list__span--hovered");
  });
});
