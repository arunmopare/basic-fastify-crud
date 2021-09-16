const { mongo, Mongoose } = require("mongoose");
const Course = require("../Models/Course");

// get all courses
exports.getCourse = async (req, reply) => {
  try {
    const couses = await Course.find();
    return couses;
  } catch (error) {
    throw error;
  }
};

//get single course
exports.getSingleCourse = async (req, reply) => {
  try {
    const courseId = req.params.id;
    const course = Course.findById(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};

// add a single course
exports.addACourse = async (req, reply) => {
  try {
    const course = new Course(req.body);
    return course.save();
  } catch (error) {
    throw error;
  }
};

//update an existing course
exports.updateCourse = async (req, reply) => {
  try {
    const courseId = req.params.id;
    const course = req.body;
    const { ...updatedCourse } = course;
    const update = await Course.findByIdAndUpdate(courseId, updatedCourse, {
      new: true,
    });
    return update;
  } catch (error) {
    throw error;
  }
};

//delete and existing course
exports.deleteCourse = async (req, reply) => {
  try {
    const courseId = req.params.id;
    const course = Course.findByIdAndDelete(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};
