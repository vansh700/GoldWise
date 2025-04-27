function productBody() {
    fetch('Text.html')  // Path to your footer.html file
        .then(response => response.text())
        .then(data => {
            document.getElementById('productBody').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}
// Call the loadFooter function when the page loads
window.onload = productBody();