import {annoncesDAO} from '../dao/annonces.js'
import moment from 'moment';

class annoncesControllerClass {
    async getAllAnnonces(req, res){
        console.log('getting all annonces')
        try {
            const result = await annoncesDAO.getAllAnnonces();
            result.date_annonce = moment(result.date_annonce).fromNow()
            res.status(201).json(result);
        }
        catch (err){
            console.log(err)
        }
    }
}

export const annoncesController = new annoncesControllerClass();