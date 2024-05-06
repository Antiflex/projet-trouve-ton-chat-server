import {db} from '../database/database.js'

class annoncesDAOClass{
    async getAllAnnonces(){
        const result = await db("annonces").limit(20);
        return result;
    }
}

export const annoncesDAO = new annoncesDAOClass();