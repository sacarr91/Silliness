// written with guidance from tutor (Sandy) and YouTube video ("JS - How to STORE and USE an Array in Local Storage" by Melvin Adekanye) 

// purpose: gather value of user input, group together as object, add to array, store in local storage, final step: redirect to blog.html

function addToSeries(e) {
    
    // Prevent form from automatically refreshing the page. Thanks, Sandy!
    e.preventDefault();
    
    // Grab input from form to establish variables
    const author = document.getElementById("author").value.trim();
    const entryTitle = document.getElementById("entry-title").value.trim();
    const postContent = document.getElementById("new-post-content").value.trim();

    let blogPost = {
        author: author,
        entryTitle: entryTitle,
        postContent: postContent
    }
    console.log(blogPost)

    // This part tripped me up for a long time until finding the YouTube video.
    
    // Establishes empty array to push into, only if there is not one already.
    if(localStorage.getItem('blogEntries') == null) {
        localStorage.setItem('blogEntries', '[]');
    }
    
    // Parse existing stored array in preparation for adding new post object.
    const allEntries = JSON.parse(localStorage.getItem('blogEntries'));

    // add new post object to array
    allEntries.push(blogPost);
    console.log(`Updated array: ${allEntries}`)

    // return to string & store in local storage
    localStorage.setItem('blogEntries', JSON.stringify(allEntries));

    //redirect to blog.html, per client's instructions 
    location.href = './blog.html'
}

document.getElementById(`submit-button`).addEventListener("click", addToSeries)