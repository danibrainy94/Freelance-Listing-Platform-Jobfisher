
/************==========================********
 *  script for the customer feedback page
 ***********============================********/

const imgChange = document.querySelector("#img");
const author = document.querySelector("#name");
const about = document.querySelector(".title-description");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let currentItem = 0;
//array of different objects 
const reviews = [
    {
        Id: 1,
        name: "Mr. Ugwu Daniel Stephen",
        image: "/images/profile-danny.jpg",
        info: "An affiliate marketer is an independent marketer who partners with businesses to promote their goods instead of producing those goods. They commission every sale without worrying about customer service or inventory management.",

    },
    {
        Id: 2,
        name: "Mrs. Cynthia",
        image: "/images/profile-cynthia.jpg",
        info: "The UX designer role is to make a product or service usable, enjoyable, and accessible. While many companies design user experiences, the term is most often associated with digital design for websites and apps.",

    },
    {
        Id: 3,
        name: "Mr. Anochiwa Alfred",
        image: "/images/profile-alfred.jpg",
        info: "Software developers create software to meet user needs by employing diagrams and models, writing code, and ensuring overall functionality. These professionals design, build, and implement computer programs and applications.",

    }
]

// //initialize items in the array.
function showPerson (person) {
    const item = reviews[person];

    imgChange.src = item.image;
    author.textContent = item.name;
    about.textContent = item.info;
    
}


function defaultPerson(person) {
    showPerson(currentItem);
}


// function that specifies what the previous and the next button does
function showPersonNext() {
    currentItem++;
    if (currentItem > reviews.length-1){
        currentItem = 3;
    }
    showPerson(currentItem);   

}


function showPersonPrevious() {
    currentItem--;
    if (currentItem < 0){
        currentItem = 0;
    }
    showPerson(currentItem);
}

// buttons execute functions on click
nextBtn.addEventListener("click", showPersonNext);
previousBtn.addEventListener("click", showPersonPrevious);
window.addEventListener("DOMContentLoaded", defaultPerson);