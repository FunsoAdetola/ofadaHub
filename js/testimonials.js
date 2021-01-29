const testimonialContent = document.querySelector(".testimonial-content");
var button = document.getElementById("testimonial-button");
const testimonialForm = document.querySelector(".form");
const year = document.querySelector(".year");
let inputName = document.querySelector(".testimonial-name").value;
let inputComment = document.querySelector(".testimonial-comment").value;

button.addEventListener("click", () => {
  testimonialForm.classList.add("show-form");
});

let testimonials = [];
// tname.addEventListener("input", nameValue);
// function nameValue(e) {
//   let inputName = e.target.value;

//   return inputName;
// }

// comment.addEventListener("input", commentValue);
// function commentValue(e) {
//   let inputComment = e.target.value;
//   return inputComment;
// }

console.log(inputName);
console.log(inputComment);

testimonialForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let testimonialObject = {
    name: inputName,
    comment: inputComment,
  };
  testimonials.push(testimonialObject);
  console.log(testimonials);
  testimonialForm.classList.remove("show-form");
});

if (testimonials.length === 0)
  testimonialContent.innerHTML = `<div>No results found</div>`;
testimonials.map((testimonial) => {
  testimonialContent.innerHTML = `<div class="tname">${testimonial.name}</div>
    <div class="tcomment">${testimonail.comment}</div>`;
});

const date = new Date().getFullYear();
year.innerHTML = date;
