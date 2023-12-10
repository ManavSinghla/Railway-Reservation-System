function bookTicket() {
    // Get values from form
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    // Check if any field is empty
    if (!name || !from || !to || !date || !seats) {
        alert('Please fill in all fields before booking.');
        return;
    }

    alert('Ticket booked successfully!');
    document.getElementById('bookingForm').reset();
}
