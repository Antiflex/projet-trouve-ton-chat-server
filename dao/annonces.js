import {db} from '../database/database.js'

class annoncesDAOClass{
    async getAllAnnonces(){
        const result = await db.select('*').from('annonce').join('chat', 'annonce.id_chat', '=','chat.id_chat').limit(20);
        return result;
    }
}

export const annoncesDAO = new annoncesDAOClass();