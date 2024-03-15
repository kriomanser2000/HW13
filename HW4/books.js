document.getElementById("orderForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var name = formData.get("name");
    var book = formData.get("book");
    var quantity = formData.get("quantity");
    var deliveryDate = formData.get("deliveryDate");
    var address = formData.get("address");
    var confirmationMessage = name + ", thnx for pursache. " + quantity + " quantity book " + book + " will deliv) " + deliveryDate + " in Address: " + address;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
    document.getElementById("orderConfirmation").style.display = "block";
    form.reset();
});