import {db} from '../database/database.js'

class annoncesDAOClass{
    async getAllAnnonces(){
        const result = await db.select('*').from('annonce').join('chat', 'annonce.id_chat', '=','chat.id_chat').limit(20);
        return result;
    }

    async createAnnonce(typeAnnonce, emplacementLat, emplacementLong, dateAnnonce, annotations, idChat){
        const [row] = await db('annonce').insert({type_annonce: typeAnnonce, emplacement_lat:emplacementLat, emplacement_long: emplacementLong, date_annonce:dateAnnonce, annotations: annotations, id_chat: idChat}).returning(['id_annonce']);
        return row;
    }
}

export const annoncesDAO = new annoncesDAOClass();