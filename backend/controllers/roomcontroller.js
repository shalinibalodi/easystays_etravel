const Room = require("../models/roomModel");

//create room
exports.createRoom = async(res, req, next) => {
    
    try{
        const room = await Room.create(req.body)
    res.status(201).json({
        success: true,
        room
    })}
    catch(err) {
        console.log(err);
    }
}
exports.getAllRooms = (req,res) => {
    res.status(200).json({message: "Route is working fine"})
}