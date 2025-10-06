// Load the nav HTML into the #navbar div
fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(err => console.error('Nav load error:', err));