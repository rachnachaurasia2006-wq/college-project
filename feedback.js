
   function rate(rating) {
    const stars = document.querySelectorAll(".stars span");

    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = "gold";
        } else {
            star.style.color = "gray";
        }
    });

    document.getElementById("rating").textContent =
        "You selected " + rating + " out of 5";
}
