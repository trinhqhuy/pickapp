const User = require("../models/user.js");
const Member = require("../models/member.js");
const memberController = {
  searchMember: async (req, res) => {
    try {
      const member = await User.findOne({ username: req.params.name });
      if (!member) return res.status(400).json("Cant find this user!");
      const isIntive = await Member.findOne({
        _idUser: member.id,
        _idCollection: req.body.idCollection,
      });
      return res.status(200).json({ member, isIntive: isIntive });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  addMember: async (req, res) => {
    try {
      const newMember = new Member({
        _idUser: req.body.idUser,
        _idCollection: req.body.idCollection,
        isAdmin: false,
        isIntive: req.body.isIntive,
        isActive: req.body.isActive,
        isSeenNotify: req.body.isSeenNotify,
      });
      await newMember.save();
      return res.status(200).json({ message: "The new member was added" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getAllMember: async (req, res) => {
    try {
      const members = await Member.aggregate([
        {
          $match: {
            _idCollection: req.params.id,
            isIntive: true,
            isActive: true,
            isSeenNotify: true, //For latter
          },
        },
        {
          $lookup: {
            from: "users",
            let: { idUser: { $toObjectId: "$_idUser" } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$_id", "$$idUser"],
                  },
                },
              },
              {
                $sort: {
                  createdAt: -1, // Sort by createdAt field in descending order
                },
              },
              {
                $project: {
                  password: 0,
                  updatedAt: 0,
                  createdAt: 0,
                  __v: 0,
                },
              },
            ],
            as: "user",
          },
        },
        {
          $project: {
            updatedAt: 0,
            createdAt: 0,
            __v: 0,
          },
        },
      ]);
      const memberArr = members.map((items) => {
        return items;
      });
      return res.status(200).json(memberArr);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteMember: async (req, res) => {
    try {
      await Member.deleteOne({
        _id: req.params.id,
      });
      return res.status(200).json({ message: "Delete was successfully" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getAllNotify: async (req, res) => {
    try {
      const notification = await Member.aggregate([
        {
          $match: {
            _idUser: req.params.id,
            isIntive: true,
            isActive: false,
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
              {
                $project: {
                  updatedAt: 0,
                  createdAt: 0,
                  __v: 0,
                },
              },
            ],
            as: "collection",
          },
        },
        {
          $project: {
            updatedAt: 0,
            createdAt: 0,
            __v: 0,
          },
        },
      ]);
      const NLength = notification.filter((state) => !state.isSeenNotify);
      return res.status(200).json({ notification, numberNoti: NLength.length });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  seenNotify: async (req, res) => {
    try {
      await Member.updateMany(
        {
          _idUser: req.params.id,
          isIntive: true,
          isActive: false,
          isSeenNotify: false,
        },
        {
          $set: {
            isIntive: req.body.isIntive,
            isActive: req.body.isActive,
            isSeenNotify: req.body.isSeenNotify,
          },
        }
      );
      return res.status(200).json({ message: "Update was successfully" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  updateNotify: async (req, res) => {
    try {
      await Member.updateOne(
        { _id: req.params.id },
        {
          $set: {
            isIntive: req.body.isIntive,
            isActive: req.body.isActive,
            isSeenNotify: req.body.isSeenNotify,
          },
        }
      );
      return res.status(200).json({ message: "Update was successfully" });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = memberController;
