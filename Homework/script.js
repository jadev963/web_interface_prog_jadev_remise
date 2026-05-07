const fetchBtn = document.getElementById('fetchBtn');
const statusP = document.getElementById('statusP');
const output = document.getElementById('output');

fetchBtn.addEventListener("click", () => {
    statusP.textContent = "Loading post";

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(post => {
            console.log('2 seconds past!');
            console.log(post);
        });
        
    }, 2000);
})