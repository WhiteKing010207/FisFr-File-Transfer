const router = require("express").Router();
const { response } = require("express");
const File = require("../models/file");

router.get("/:uuid",async (req,res)=>
{
    try{
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file)
        {
            return res.render("download",{error : "Link has been expired."});
        }
        return res.render("download",{
            uuid : file.uuid,
            filename: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            //http://localhost:3000/files/download/ghvghhjnkjnvhvghbhjbjh
        })
    }
    catch(err)
    {
        return res.render("download",{error : "Something went wrong."});
    }
    
});

module.exports = router;