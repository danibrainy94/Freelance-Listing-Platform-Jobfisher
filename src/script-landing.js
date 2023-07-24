
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
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique est ut unde, nulla asperiores quibusdam perspiciatis adipisci expedita dolor repellat, labore non alias quis, obcaecati numquam aut quasi itaque praesentium impedit dolorum!",

    },
    {
        Id: 2,
        name: "Ms. Okonkowo Mary  Cynthia",
        image: "/images/profile-cynthia.jpg",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repudiandae aliquid ipsa quo saepe illo ducimus laudantium. Totam, consectetur officiis eligendi accusamus tempora voluptatibus magnam illo exercitationem obcaecati",

    },
    {
        Id: 3,
        name: "Ms. Mercy Ebere Achara",
        image: "/images/profile-mercy.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam, est odio reprehenderit voluptatum eaque? Quidem laudantium ullam reiciendis non blanditiis delectus reprehenderit quaerat, impedit ut eos totam! Modi assumenda ipsam",

    },
    {
        Id: 4,
        name: "Mr. Nwaro Odera Brian",
        image: "/images/profile-bryan.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora earum consequatur adipisci, dolorum accusamus dolorem, quaerat voluptatum eum magnam labore itaque libero deserunt neque. Labore iusto expedita veritatis quod.",

    },
    {
        Id: 5,
        name: "Mr. Anochiwa Alfred",
        image: "/images/profile-alfred.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea inventore sit, ad tenetur quibusdam reiciendis harum officia vitae, amet velit deleniti consequuntur hic, autem fuga atque ex optio. Necessitatibus, odio voluptate! ipsum dolor sit",

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
        currentItem = 5;
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