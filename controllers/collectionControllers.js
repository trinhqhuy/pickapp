const Collection = require("../models/collection.js");
const Member = require("../models/member.js");
const Palette = require("../models/palette.js");
const collectionController = {
  readCollection: async (req, res) => {
    try {
      const collection = await Member.aggregate([
        {
          $match: {
            _idUser: req.params.id,
            isIntive: true,
            isActive: true,
            isSeenNotify: true,
          },
        },
        {
          $lookup: {
            from: "collections",
            let: { idCollection: { $toObjectId: "$_idCollection" } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$_id", "$$idCollection"],
                  },
                },
              },
              {
                $sort: {
                  createdAt: -1, // Sort by createdAt field in descending order
                },
              },
            ],
            as: "collection",
          },
        },
      ]);
      const collectionsArr = collection.map((m) => m.collection[0]);
      if (!collectionsArr) {
        return res.status(500).json({ message: "Can't find this collection" });
      }
      return res.status(200).json(collectionsArr);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  createCollection: async (req, res) => {
    try {
      const newCollection = new Collection({
        name: req.body.name,
        _idUser: req.body.idUser,
        icon: req.body.icon,
        color: req.body.color,
      });
      const collection = await newCollection.save();
      const theOwner = new Member({
        _idUser: req.body.idUser,
        // _idCollection: collection._id.valueOf(),
        _idCollection: collection._id,
        isAdmin: true,
        isIntive: true,
        isActive: true,
        isSeenNotify: true,
      });
      await theOwner.save();
      return res.status(200).json({ message: "The collection was create" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  updateCollection: async (req, res) => {
    try {
      await Collection.updateOne(
        { _id: req.params.id },
        {
          name: req.body.name,
          icon: req.body.icon,
          color: req.body.color,
        }
      );
      return res.status(200).json({ message: "The collection was updated" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteCollection: async (req, res) => {
    try {
      await Collection.deleteOne({ id: req.params.id });

      await Member.deleteMany({
        _idCollection: req.params.id,
      });
      await Palette.deleteMany({
        _idCollection: req.params.id,
      });
      return res.status(200).json({ message: "The collection was deleted" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.export = collectionController;
