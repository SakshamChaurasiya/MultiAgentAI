import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const createConversation = async (req, res) => {
    try {
        const userId = req.header["x-user-id"];
        console.log("userId", userId);
        const conversation = await Conversation.create({
            userId: userId
        });

        return res.status(200).json(conversation);
    } catch (error) {
        console.log("Error in createConveration controller in chat service", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getConversations = async (req, res) => {
    try {
        const userId = req.header["x-user-id"];
        console.log("userId", userId);
        const conversations = await Conversation.find({
            userId: userId
        }).sort({ updatedAt: -1 });

        return res.status(200).json(conversations);
    } catch (error) {
        console.log("Error in getConverations controller in chat service", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateConversation = async (req, res) => {
    try {
        const { id, title } = req.body;
        const conversation = await Conversation.findByIdAndUpdate(id, {
            title
        });

        return res.status(200).json(conversation);
    } catch (error) {
        console.log("Error in updateConveration controller in chat service", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const saveMessage = async (req, res) => {
    try {
        const { conversationId, role, content } = req.body;
        const message = await Message.create({
            conversationId,
            content,
            role
        });

        return res.status(200).json(message);
    } catch (error) {
        console.log("Error in saveMessage in chat controller in chat service");
        return res.status(500).json("Internal Server Error");
    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId:req.params.conversationId
        }).sort({ createdAt: -1 });

        return res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages in chat controller in chat service");
        return res.status(500).json("Internal Server Error");
    }
}
