const SubCategory = require('../../models/SubCategory');

exports.getAllSubCategories = async (req, res) => {

    try{

        const subcategories = await SubCategory.find();
        res.status(200).json({data: subcategories});

    }catch(err){

        res.status(500).json({error: err.message});
    }

}