document.addEventListener('DOMContentLoaded', function () {
    // Sample bookings data (replace this with your actual data)
    const bookings = [
        { name: 'John Doe', from: 'City A', to: 'City B', date: '2023-12-01', seats: 2 },
        { name: 'Jane Smith', from: 'City C', to: 'City D', date: '2023-12-02', seats: 1 },
    ];

    displayBookings(bookings);
});

function displayBookings(bookings) {
    const bookingsList = document.getElementById('bookingsList');

    if (bookings.length === 0) {
        bookingsList.innerHTML = '<p>No bookings available.</p>';
    } else {
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Date</th>
                    <th>Seats</th>
                </tr>
            </thead>
            <tbody>
                ${bookings.map(booking => `
                    <tr>
                        <td>${booking.name}</td>
                        <td>${booking.from}</td>
                        <td>${booking.to}</td>
                        <td>${booking.date}</td>
                        <td>${booking.seats}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        bookingsList.appendChild(table);
    }
}
