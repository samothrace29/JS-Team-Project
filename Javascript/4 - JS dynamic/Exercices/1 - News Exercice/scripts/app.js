// 1 -  Generate the article elements
//      from the title and the category
//      inside the #trending
for (const articleData of articles) {
  console.log(articleData.title);
  //cloning process
  const mockup = document.querySelector("#trending article");
  const newClone = mockup.cloneNode(true);
  document.querySelector("#trending").append(newClone);
  //modify
  newClone.querySelector("h2").innerText = articleData.title;
  // p ?
  newClone.querySelector("p").innerText = articleData.content;
  // put the caterogy as a class of the clone ?
  newClone.classList.add(articleData.category);
  // a href ?
  newClone.querySelector("a").href = articleData.url;
}

document.querySelector("article").style.display = "none"; //hide the first example article

// 2 -  Handle the form submission (preventDefault...)
//      Filter the section to show only the good category
//          - hide all elements (docuemnt.querySelectorAll("article"))
//          - only show the element where the category is good
//            (docuemnt.querySelectorAll(".sport"))

const myForm = document.querySelector("form");
myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // dancing teacher...
  //hide all <article>
  const allArticles = document.querySelectorAll("article"); // -> []
  for (const htmlArticle of allArticles) {
    htmlArticle.style.display = "none";
  }
  // what is the category selected ?
  const selectedCategory = document.querySelector("select").value;
  console.log(selectedCategory); // "science", "politics", "all"

  //show the good elements
  //let selectedArticles = document.querySelectorAll("." + selectedCategory);
  let selectedArticles = document.getElementsByClassName(selectedCategory);
  // warning, if the category is "all", none of the article have the class ".all"
  if (selectedCategory == "all") {
    selectedArticles = allArticles;
  }
  for (const htmlArticle of selectedArticles) {
    htmlArticle.style.display = "block";
  }
  document.querySelector("article").style.display = "none"; //hide the first example article
})


/*
    News website
    You are now in charge of the coding of a news related website.
    The data are provided by google news service
    and will be avaible in you code thanks to the file data.js

    You are required today to add each article to a section
    that will be filtered by category.

    Hint :
    1 - Start by creating a variable form the <section> #trending

    2 - Create a loop over all the articles that will
        - Duplicate a mockup <article> tag to the <section>
        - Add the good class from the category like this : <article class="science">...
        - Modify the *title* (<h3>) to the newly duplicated <article> element
        - Modify the *content* (<p>) of the article
        - modify the <a> "read more" link (<a>) pointing to the *url*

    3  Create an Event Listener so that
    when the form with the select is submitted
    you will show only the good caterogy article
     get the value from the <select> input (the property is called .value)
     Applied a display none to EACH article (using .style.display)
     Show EACH article that has that class corresponding to the category




     BONUS : to make this even more interactive a list of category can replace the form submission
     uncomment this part of the HTML code
     Create an Event listener that will listen to "click" FOR EACH of the links an launch an function called "filterArticles"
     The function "filterArticles" will :
         remove the CSS class "selected" FOR EACH of the links inside this list
         add the CSS class "selected" to the clicked link using this line
            this.classList.add("selected"); // "this" is the current html element that triggered the event
         filter the section articles using the algorythm from question 3 (time for a function maybe ?)
*/