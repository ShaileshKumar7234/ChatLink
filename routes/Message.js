import express from 'express';
import { createMessage, getMessages } from '../controllers/Messages.js';

const MessageRoutes = express.Router();

MessageRoutes.post('/create-message', createMessage);
MessageRoutes.post('/get-message', getMessages);


export default MessageRoutes;