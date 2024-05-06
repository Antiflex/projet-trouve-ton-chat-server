import {annoncesDAO} from '../dao/annonces.js'

class annoncesControllerClass {
    async getAllAnnonces(req, res){
        console.log('getting all annonces')
        try {
            const result = await annoncesDAO.getAllAnnonces();
            res.status(201).json(result);
        }
        catch (err){
            console.log(err)
        }
    }
}

export const annoncesController = new annoncesControllerClass();