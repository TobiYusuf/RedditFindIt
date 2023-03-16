import reddit from './redditapi'

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Form Event Listener
searchForm.addEventListener('submit', e => {
    // Get search term
    const searchTerm = searchInput.value;
    // Get Sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // Get limit 
    const searchLimit = document.getElementById("limit").value;
    // console.log(searchLimit)

    if (searchTerm === "") {
        // show message
        showMessage('Please add a search Term', 'alert-danger');
    }

    // clear output
    searchInput.value = "";

    // search reddit
    reddit.search(searchTerm, searchLimit, sortBy);

    e.preventDefault();
});

// show message
function showMessage(message, className) {
    // create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent 
    const searchContainer = document.getElementById('search-container');
    // Get child
    const search = document.getElementById('search');
    // show message
    searchContainer.insertBefore(div, search);
    // message timeout
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);

}