const Room = require("../models/roomModel");

//create Room
exports.createRoom = async (req, res, next) => {
  
  req.body.user = req.user.id
  
  const room = await Room.create(req.body);
  res.status(201).json({
    success: true,
    room,
  });
 
};

exports.getAllRooms = (req, res) => {
  res.status(200).json({ message: "Route is working fine" });
};
