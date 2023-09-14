const features = document.getElementsByClassName("features");
const price = document.getElementsByClassName("price");
const contact = document.getElementsByClassName("contact");

function check_features() {
    features.item(0).style.display = "block";
}
function check_price() {

    price.item(0).style.display = "block";
}

function check_contact() {
    console.log(contact.item(0));
    contact.item(0).style.display = "block";
}

