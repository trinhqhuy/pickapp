const Palette = require("../models/palette.js");
const paletteController = {
  create: async (req, res) => {
    try {
      const newPalette = new Palette({
        name: req.body.name,
        _idUser: req.body.idUser,
        _idCollection: req.body.idCollection,
        pin: false,
        color: req.body.color,
      });
      await newPalette.save();
      return res.status(200).json("Create palette was success");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  read: async (req, res) => {
    try {
      const palette = await Palette.find({ _idCollection: req.params.id });
      return res.status(200).json(palette);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    try {
      await Palette.updateOne(
        { _id: req.params.id },
        { name: req.body.name, pin: req.body.pin, color: req.body.color }
      );
      return res.status(200).json("Update palette is success");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      await Palette.deleteOne({ _id: req.params.id });
      return res.status(200).json("Delete palette is success");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = paletteController;
