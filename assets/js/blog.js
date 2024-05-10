
// written with guidance from Sandy & Medium article
// https://shadowcoder.medium.com/dynamic-card-rendering-in-javascript-unleashing-the-power-of-flexibility-72e55130b091

// target card container div from blog.html
const cardContainer = document.getElementById('card-container');

// retrieve items from local storage
const allEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];

// function to add card elements to html
function newPostCard(x, y, z) {

    // create html elements & set class attributes for styling
    const fancyCard = document.createElement('div');
    fancyCard.setAttribute('class', 'card')
    const fancyBox = document.createElement('div');
    fancyBox.setAttribute('class', 'fancy-box');
    const postCard = document.createElement('div');
    postCard.setAttribute('class', 'display-card');

    // create html text elements and assign input variables to be referenced/replaced in for loop interation
    const postTitle = document.createElement('h2');
    postTitle.textContent = x;

    const postAuthor = document.createElement('h3');
    postAuthor.textContent = `by ${y}`;

    const postContent = document.createElement('p');
    postContent.textContent = z;

    // attach and order appearance of elements
    postCard.appendChild(postTitle);
    postCard.appendChild(postAuthor);
    postCard.appendChild(postContent);

    fancyBox.appendChild(postCard);
    fancyCard.appendChild(fancyBox);

    //attach to existing html div container
    cardContainer.appendChild(fancyCard);
}

// iterate through stored array and render cards with retrieved information
for (let i = 0; i < allEntries.length; i++) {
    //identify parsed information and assign to variables for use in this js file
    const blogAuthor = allEntries[i].author;
    const blogTitle = allEntries[i].entryTitle;
    const blogContent = allEntries[i].postContent;

    //call function to render cards
    newPostCard(blogTitle, blogAuthor, blogContent);
}

changeColorMode();