const fs = require("fs");
const path = require("path");

const lessonsDirectory = path.join(__dirname, "lessons");
const lessonData = {};

fs.readdirSync(lessonsDirectory).forEach((section) => {
  const sectionPath = path.join(lessonsDirectory, section);
  const files = fs
    .readdirSync(sectionPath)
    .map((file) => file.replace(".md", ""));
  lessonData[section] = files;
});

fs.writeFileSync(
  path.join(__dirname, "lessons.json"),
  JSON.stringify(lessonData)
);
