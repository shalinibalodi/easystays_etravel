const Room = require("../models/roomModel");

//create room
exports.createRoom = async(req, res, next) => {
    
    try{
         const room = await Room.create(req.body);
         res.status(201).json({
             success: true,
             message: "Room created successfully",
             room
    });
}
    catch(err) {
        console.log(err);
    }
}

//Get Room details
exports.getRoomDetails = async(req,res,next) => {
    const room = await Room.findById(req.params.id)
    if(!room) {
        return res.status(500).json({
            success: false,
            message: "Room not found"
        })
    }

    res.status(201).json({
        success: true,
        room
    })

}

// Get all rooms
exports.getAllRooms = async(req,res) => {

    const rooms = await Room.find();

    res.status(201).json({
             success: true,
             rooms
    });
}

//Update room
exports.updateRoom = async(req,res,next) => {

    let room = Room.findById(req.params.id);
    if(!room) {
        return res.status(500).json({
            success: false,
            message: "Room not found"
        })    
    }

    room = await Room.findByIdAndUpdate(req.params.id, req.body, 
        {new: true,
         runValidators: true,
         useFindAndModify:false
        });

     res.status(200).json({ 
         success:true,
         message: "Room successfully updated",
         room
    })   

}

// Delete room
exports.deleteRoom = async(req,res,next) => {
    const room = await Room.findById(req.params.id);
    if(!room) {
        return res.status(500).json({
            success: false,
            message: "Room not found"
        })
    }
    await room.remove();
    
    res.status(201).json({
        success: true,
        message: "Room deleted successfully!"
    })

}