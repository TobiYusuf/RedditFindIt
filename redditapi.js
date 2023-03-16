export default {
    search: function (searchTerm, searchLimit, sortBy) {
        // console.log("searching...")
        fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
            .then(res => res.json)
            .then(data => console.log(data))
    }
};