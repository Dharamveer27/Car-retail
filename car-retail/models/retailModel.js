import mongoose from 'mongoose';


const RetailSchema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true,
        unique: true

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
})

const Retail = new mongoose.model('Retail', RetailSchema);
export default Retail;