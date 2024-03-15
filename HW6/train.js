let availableSeats = [];
let bookedTickets = [];
function addAvailableSeats(destination, date) 
{

}
function displayAvailableSeats() 
{
    let seatsDiv = document.getElementById("seats");
    seatsDiv.innerHTML = "<h3>Available places: </h3>";
}
function displayBookedTickets() 
{
    let ticketsDiv = document.getElementById("bookedTickets");
    ticketsDiv.innerHTML = "<h3>Booked tickets: </h3>";
}
document.getElementById("bookingForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    availableSeats = [];
    bookedTickets = [];
    addAvailableSeats(destination, date);
    displayBookedTickets();
    displayAvailableSeats();
});