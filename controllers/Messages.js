import MessageModel from "../models/Message.js";
import ConversationModel from "../models/Conversation.js";


export const createMessage = async(req, res) => {
  try {
    const {senderId, receiverId, message} = req.body;
    if(!senderId || !receiverId || !message){
      return res.status(400).json({success:false,
        message: `${!senderId ? 'Sender Id ' :!receiverId ? 'Receiver Id ' :'Message '} is required`});
    }

    const newMessage = new MessageModel({
      userId:senderId,
      message,
    })
    const savedMessage = await newMessage.save()

    let conversation=await ConversationModel.findOne({
      members:{
        $all:[senderId,receiverId],
        $size:2,
      }
    })
    if(conversation){
      conversation=await ConversationModel.findByIdAndUpdate(
        conversation._id,
      {
        $push:{
          messages:[savedMessage._id]
        }
      },
      {
        new:true,
      })
    }
    else{
      conversation=new ConversationModel({
        members:[senderId,receiverId],
        messages:[savedMessage._id],
      })
      await conversation.save();
    }
    
    res.status(200).json({success:true,
      message:"Message sent successfully",
      data:{
        newMessage:savedMessage,
        conversation:conversation,
      }
    });
  } catch (error) {
    console.log('error')
    res.status(500).json({
      success:false,
      message:"Internal server error"
    });
  }
}




export const getMessages = async(req, res) => {
  try {
    const {senderId, receiverId} = req.body;
    if(!senderId || !receiverId){
      return res.status(400).json({success:false,
        message: `${!senderId ? 'Sender Id ' :!receiverId ? 'Receiver Id ' :'Message'} is required`});
    }

    const conversation=await ConversationModel.findOne({
      members:{
        $all:[senderId,receiverId],
        $size:2,
      }
    }).populate('messages');

    if(!conversation){
      const newConversation=new ConversationModel({
        members:[senderId,receiverId],
        messages:[],
      });
      await newConversation.save();
      return res.status(200).json({success:true,
        message:"Conversation created successfully",
        data:newConversation
      });
    }
    res.status(200).json({success:true,
      message:"Messages fetched successfully",
      data:{
        messages:conversation.messages,
      }
    });
  }
  catch (error) {
    console.log('error')
    res.status(500).json({
      success:false,
      message:"Internal server error"
    });
  }
}