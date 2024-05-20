import {chatsDAO} from '../dao/chat.js'
import moment from "moment/moment.js";

class chatsControllerClass {
    async getAllChats(req, res){
        console.log('getting all chats')
        try {
            const result = await chatsDAO.getAllChats();
            res.status(201).json(result);
        }
        catch (err){
            console.log(err)
        }
    }

    async createChat(req, res){
        console.log("creating chat")
        try{
            const id = await chatsDAO.createChat(req.body.nom, req.body.race, req.body.couleurFourrure, req.body.couleurYeux)
            res.status(201).json(id)
        }
        catch (err){
            console.log(err)
        }
    }
}

export const chatsController = new chatsControllerClass();