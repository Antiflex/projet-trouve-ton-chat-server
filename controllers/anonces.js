import {annoncesDAO} from '../dao/annonces.js'

class annoncesControllerClass {
    async getAllAnnonces(){
        console.log('getting all annonces')
        try{
            const result = await annoncesDAO.getAllAnnonces();
            return result
        }
        catch (err){
            console.log(err)
        }
    }
}

export const annoncesController = new annoncesControllerClass();