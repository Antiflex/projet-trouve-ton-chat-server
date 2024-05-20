import {db} from '../database/database.js'

class chatsDAOClass{
    async getAllChats(){
        const result = await db.select('*').from('chat').limit(20);
        return result;
    }

    async createChat(nom, race, couleurFourrure, couleurYeux){
        const [row] = await db('chat').insert({nom: nom, race: race, couleur_fourrure: couleurFourrure, couleur_yeux: couleurYeux}).returning(['id_chat']);
        return row;
    }
}

export const chatsDAO = new chatsDAOClass();