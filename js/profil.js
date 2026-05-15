// FAQ ACCORDION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  if (!question) return;

  question.addEventListener("click", () => {
    // tutup item lain
    faqItems.forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });

    // toggle item sekarang
    item.classList.toggle("active");
  });
});
