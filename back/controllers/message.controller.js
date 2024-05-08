import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReciverSocketId, io } from "../socket/socket.js";
import { Server } from "socket.io";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      currentconvo: { $all: [senderId, reciverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        currentconvo: [senderId, reciverId],
      });
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    const reciverSocketId = getReciverSocketId(reciverId);
    if (reciverSocketId) {
      io.to(reciverSocketId).emit("newMessage", newMessage);
    }

    await conversation.save();
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sending message", error.message);
    res.status(500).json({ error: "interal server error " });
  }
};

export const getmessages = async (req, res) => {
  try {
    const { id: chatToChatID } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      currentconvo: { $all: [senderId, chatToChatID] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getting message", error.message);
    res.status(500).json({ error: "interal server error " });
  }
};
