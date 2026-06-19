const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchTerm = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

function validateEnquiryForm(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

if(name.length < 3){

alert(
"Name must be at least 3 characters"
);

return false;

}

if(!email.includes("@")){

alert(
"Please enter a valid email address"
);

return false;

}

alert(
"Enquiry submitted successfully!"
);

return true;

}