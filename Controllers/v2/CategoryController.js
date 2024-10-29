const Category = require('../../models/Category');

exports.getAllCategories = async (req,res) => {

    try{

        const categories = await Category.find();
        res.status(200).json({data: categories});

    }catch(error){

        res.status(500).json({error: error.message})
    }
    
};