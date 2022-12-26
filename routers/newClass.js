const express = require("express");
const router = express.Router();
const Student = require("../modal/studentSchema");

router.use(express.json());

const middleware = (req, res, next) => {
  console.log("this is middleware");
};

router.post("/", middleware, async (req, res) => {
  try {
    const studentslist = await Student.create(req.body);
    res.json({
      status: "Success",
      studentslist,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.post("/:myClassId/students", middleware, async (req, res) => {
  try {
    const studentslist = await Student.findOne({ id: req.params.id });
    res.json({
      status: "Success",
      studentslist,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/", middleware, async (req, res) => {
  try {
    const studentslist = await Student.find({ name: req.body.name });
    res.json({
      status: "Success",
      message: "Fetched all details successfully",
      studentslist,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/:myClassId", middleware, async (req, res) => {
  try {
    const studentslist = await Student.find({ id: req.params.id });
    res.json({
      status: "Success",
      message: "Fetched all details successfully",
      studentslist,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/:myClassId/students", middleware, async (req, res) => {
  try {
    const studentslist = await Student.find({ id: req.params.id });
    res.json({
      status: "Success",
      message: "Fetched all details successfully",
      studentslist,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/:myClassId/students/:studentId", middleware, async (req, res) => {
  try {
    const studentslist = await Student.find({ id: req.params.id });
    res.json({
      status: "Success",
      message: "Fetched all details successfully",
      studentslist,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.put("/:myClassId/students/:studentId", middleware, async (req, res) => {
  try {
    const studentslist = await Student.find({ id: req.params.id });
    res.json({
      status: "Success",
      message: "Modified the data successfully",
      studentslist,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.delete("/:myClassId", middleware, async (req, res) => {
  try {
    const studentslist = await Student.find({ id: req.params.id });
    res.json({
      status: "Success",
      message: "Class deleted successfully",
      studentslist,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed",
      message: err.message,
    });
  }
});

router.delete(
  "/:myClassId/students/:studentId",
  middleware,
  async (req, res) => {
    try {
      const studentslist = await Student.find({ id: req.params.id });
      res.json({
        status: "Success",
        message: "Class deleted successfully",
        studentslist,
      });
    } catch (err) {
      res.status(400).send({
        status: "failed",
        message: err.message,
      });
    }
  }
);

router.use("*", (req, res) => {
  res.status(500).send("Invalid URL");
});

module.exports = router;
