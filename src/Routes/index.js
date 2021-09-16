const courseController = require("../Controllers/courseController");

const routes = [
  {
    method: "GET",
    url: "/api/course",
    handler: courseController.getCourse,
  },
  {
    method: "GET",
    url: "/api/course/:id",
    handler: courseController.getSingleCourse,
  },
  {
    method: "POST",
    url: "/api/course",
    handler: courseController.addACourse,
  },
  {
    method: "PUT",
    url: "/api/course/:id",
    handler: courseController.updateCourse,
  },
  {
    method: "DELETE",
    url: "/api/course/:id",
    handler: courseController.deleteCourse,
  },
];
module.exports = routes;
