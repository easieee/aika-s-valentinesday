document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.querySelector('input');

    inputElement.addEventListener('click', function() {
        window.location.href = 'home.html'; // Navigate to home.html
    });
});

document.getElementById("checkbox").addEventListener("click", function() {
    this.checked = false;
});
