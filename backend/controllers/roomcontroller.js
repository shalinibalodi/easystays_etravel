const Room = require("../models/roomModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//create Room
exports.createRoom = async (req, res, next) => {
  
  req.body.user = req.user.id
  
  const room = await Room.create(req.body);
  res.status(201).json({
    success: true,
    message: "Room created successfully",
    room,
  });
 
};


// Update room
exports.updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = Room.findById(req.params.id);

  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Room successfully updated",
    room,
  });
});

// Delete room
exports.deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  await room.remove();

  res.status(201).json({
    success: true,
    message: "Room deleted successfully!",
  });
});
