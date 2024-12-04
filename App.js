import React, { useState } from 'react';

function App() {
    const [bookings, setBookings] = useState([]);
    const [form, setForm] = useState({ roomId: '', customerName: '', checkInDate: '', checkOutDate: '' });

    const fetchBookings = async () => {
        const response = await fetch('/api/bookings');
        const data = await response.json();
        setBookings(data);
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        await fetch('/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        fetchBookings();
    };

    return (
        <div>
            <h1>Hotel Booking</h1>
            <form onSubmit={handleBooking}>
                <input type="text" placeholder="Room ID" onChange={(e) => setForm({ ...form, roomId: e.target.value })} />
                <input type="text" placeholder="Customer Name" onChange={(e) => setForm({ ...form, customerName: e.target.value })} />
                <input type="date" placeholder="Check-in Date" onChange={(e) => setForm({ ...form, checkInDate: e.target.value })} />
                <input type="date" placeholder="Check-out Date" onChange={(e) => setForm({ ...form, checkOutDate: e.target.value })} />
                <button type="submit">Book Now</button>
            </form>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((b, idx) => (
                    <li key={idx}>{`Room ${b.roomId} booked by ${b.customerName}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
