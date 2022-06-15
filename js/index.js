import Contact from "./Contact";

const formInfo = document.getElementById("formInfo");
let hasJob = false;
if (hasJob) {
    showMessage("Thanks for visiting, I'm currently employed.");
} else {
    showMessage("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my returning your email.");
}
function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>"
}
function clearMessage(message) {
    formInfo.innerHTML = "";
}
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event){
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});
const experiences = document.getElementsByClassName("experience");
for (let i = 0; i < experiences.length; i++) {
    const item = experiences[i];
    item.addEventListener("mouseenter", function (event){
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function (event){
        event.target.style = "";
    });
}
