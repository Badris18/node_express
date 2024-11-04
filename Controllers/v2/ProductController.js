const Product = require('../../models/Product');

exports.getAllProducts = async (req,res) => {

    try{

        const Products = await Product.find();
        res.status(200).json({data: Products});

    }catch(error){

        res.status(500).json({error: error.message})
    }
    
};