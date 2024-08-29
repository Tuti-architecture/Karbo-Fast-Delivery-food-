const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    foodItems: [{ type: String, required: true }],
    bookingTime: { type: Date, default: Date.now },
    paymentStatus: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Booking', BookingSchema);
