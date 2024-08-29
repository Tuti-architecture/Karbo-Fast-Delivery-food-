import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const BookingScreen = () => {
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [foodItems, setFoodItems] = useState('');

    const handleBooking = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/bookings', {
                customerName,
                contactNumber,
                deliveryAddress,
                foodItems: foodItems.split(',')
            });
            alert('Booking Successful!');
        } catch (error) {
            alert('Error in Booking!');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Booking Form</Text>
            <TextInput
                placeholder="Customer Name"
                value={customerName}
                onChangeText={setCustomerName}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Contact Number"
                value={contactNumber}
                onChangeText={setContactNumber}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Delivery Address"
                value={deliveryAddress}
                onChangeText={setDeliveryAddress}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Food Items (comma-separated)"
                value={foodItems}
                onChangeText={setFoodItems}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <Button title="Book Now" onPress={handleBooking} />
        </View>
    );
};

export default BookingScreen;
