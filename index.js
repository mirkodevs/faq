const faqList = document.getElementById("faq-list");
const faqListElements = document.querySelectorAll("#faq-list li")

faqListElements.forEach((o, idx) => {

    o.addEventListener("click", () => {

        o.classList.toggle("hidden")


    })


})