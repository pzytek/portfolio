const listItems = document.querySelectorAll(".head-list__li");
const aboutSection = document.querySelector(".sec-about");
const expSection = document.querySelector(".sec-exp");
const projSection = document.querySelector(".sec-proj");
const contSection = document.querySelector(".sec-cont");

const contactForm = document.querySelector("#contact-form");
const namee = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const text = document.querySelector("#text");

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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("data sent");
  const params = {
    name: namee.value,
    email: email.value,
    subject: subject.value,
    message: text.value,
  };
  emailjs
    .send("service_tyxryes", "template_hgnxywg", params)
    .then((res) => {
      alert(`Success! Your message has been sent. Res.status: ${res.status}`);
    })
    .catch((error) => {
      console.error("Error sending the message:", error);
      alert(
        "An error occurred while sending the message. Please try again later."
      );
    });
});
