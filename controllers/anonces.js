import {annoncesDAO} from '../dao/annonces.js'
import moment from 'moment';
import {chatsDAO} from "../dao/chat.js";
moment.locale('fr');

class annoncesControllerClass {
    async getAllAnnonces(req, res){
        console.log('getting all annonces')
        try {
            const result = await annoncesDAO.getAllAnnonces();
            for(let i=0; i < result.length; i++){
                result[i].date_annonce = moment(result[i].date_annonce).fromNow()
            }
            res.status(201).json(result);
        }
        catch (err){
            console.log(err)
        }
    }

    async createAnnonce(req, res){
        console.log('creating annonce')
        try{
            const id = await annoncesDAO.createAnnonce(req.body.typeAnnonce, req.body.emplacementLat, req.body.emplacementLong, req.body.dateAnnonce, req.body.annotations, req.body.idChat)
            res.status(201).json(id)
        }
        catch (err){
            console.log(err)
        }
    }

    async createAnnonceAndChat(req, res){
        console.log('creating annonce and chat')
        try{
            const chat = await chatsDAO.createChat(req.body.nom, req.body.race, req.body.couleurFourrure, req.body.couleurYeux)
            req.body.idChat = chat.id_chat
            const annonce = await annoncesDAO.createAnnonce(req.body.typeAnnonce, req.body.emplacementLat, req.body.emplacementLong, req.body.dateAnnonce, req.body.annotations, req.body.idChat)
            res.status(201).json({id_chat: chat.id_chat, id_annonce: annonce.id_annonce})
        }
        catch (err){
            console.log(err)
        }
    }
}

export const annoncesController = new annoncesControllerClass();