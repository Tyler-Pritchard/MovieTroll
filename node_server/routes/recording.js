const Recording = require("../models/Recording");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newRecording = new Recording(req.body)

    try {
        const savedRecording = await newRecording.save();
        res.status(200).json(savedRecording);
    } catch {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedRecording = await Recording.findByIdAndUpdate(
            req.params.id, 
            {
            $set: req.body
            }, 
            {new: true}
        );
        res.status(200).json(updatedRecording);
    } catch(err) {
        res.status(500).json(err);
    };
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await Recording.findByIdAndDelete(req.params.id);
      res.status(200).json("Recording Deleted");
    } catch(err) {
      res.status(500).json(err);
    }
});

//GET Recording
router.get("/find/:id", async (req, res) => {
    try {
      const recording = await Recording.findById(req.params.id);
      res.status(200).json(recording);
    } catch(err) {
      res.status(500).json(err);
    };
});
  
//GET ALL RECORDINGS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let recordings;

        if (qNew) {
            recordings = await Recording.find().sort({createdAt: -1}).limit(5);
        } else if (qCategory) {
            recordings = await Recording.find({categories:{
                $in: [qCategory],
            }, 
        });
        } else {
            recordings = await Recording.find();
        }
    
        res.status(200).json(recordings);
    } catch(err) {
      res.status(500).json(err);
    };
});

module.exports = router;