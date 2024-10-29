const Brand = require('../../models/Brand');

exports.getAllBrands = async (req, res)=>{

    try{

        const brands = await Brand.find();

        res.status(200).json({data: brands});

    }catch(err){

        res.status(500).json({error: err.message});
        
    }

};