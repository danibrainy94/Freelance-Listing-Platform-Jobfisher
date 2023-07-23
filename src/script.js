// declaring the variables from the html document using DOM
const hamBtn = document.querySelector('.hamburger');
const closeHamBtn = document.querySelector('.close-ham');
const navContent = document.querySelector('.links');

//function to display nav conteents when the hamburger button is clicked
function displayNavContent() {
    navContent.classList.toggle('hide-content');

    hamBtn.classList.add('hide-ham');
    closeHamBtn.classList.remove('hide-ham');
    
}

//function to display nav conteents when the hamburger button is clicked
function hideNavContent () {
    navContent.classList.toggle('hide-content');
    closeHamBtn.classList.add('hide-ham');
    hamBtn.classList.toggle('hide-ham');

}

// Designating actions to each click-event button
hamBtn.addEventListener('click', displayNavContent);
closeHamBtn.addEventListener('click', hideNavContent);



