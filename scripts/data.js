const faculties = [
  "Information Systems and Technologies",
  "Tourism and Hotel Management",
  "Architecture",
  "Communication and Design",
  "Fine Arts",
  "Graphic Design",
  "Interior Architecture and Environmental Design",
  "Urban Design and Landscape Architecture",
  "Management",
  "Economics",
  "International Relations",
  "Political Science and Public Administration",
  "Psychology",
  "Computer Engineering",
  "Electrical and Electronics Engineering",
  "Industrial Engineering",
  "Mechanical Engineering",
  "American Culture and Literature",
  "Archaeology",
  "Translation and Interpretation",
  "English Language and Literature",
  "Philosophy",
  "Music",
  "Performing Arts",
  "Chemistry",
  "Mathematics",
  "Molecular Biology and Genetics",
  "Physics",
];

const hobbies = [
  "Reading",
  "Painting",
  "Running",
  "Gardening",
  "Cooking",
  "Playing chess",
  "Dancing",
  "Watching movies",
  "Photography",
  "Listening to music",
  "Playing guitar",
  "Swimming",
  "Doing yoga",
  "Cycling",
  "Mountaineering",
  "Traveling",
  "Collecting",
  "Camping",
  "Fishing",
  "Knitting",
  "Handicrafts",
  "Ceramics",
  "Programming",
  "Birdwatching",
  "Woodworking",
  "Basketball",
  "Football",
  "Tennis",
  "Fitness",
  "Bodybuilding"
];

const select = document.getElementById("hobbie");

select.addEventListener("change", function() {
  if (select.value !== "") {
    select.style.backgroundImage = "none";
  } else {
    select.style.backgroundImage = "url('your-image-url.png')";
  }
});
