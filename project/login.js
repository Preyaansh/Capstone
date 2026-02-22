const form = document.getElementById("loginForm");
const loading = document.getElementById("loading");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    loading.style.display = "block";

    setTimeout(() => {
        loading.innerText = "Access Granted ✔";
        loading.style.color = "lime";
    }, 2000);
});