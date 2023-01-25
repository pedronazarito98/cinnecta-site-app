const path = require("path");
const blogPost = path.resolve(`./src/pages/blog/post.jsx`);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/MainTemplate",
    component: path.resolve("src/templates/MainTemplate.jsx"),
    defer: true,
  });
};
