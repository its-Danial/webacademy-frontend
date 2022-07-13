type courseType = {
  type: string;
  text: string;
  heading: string;
  paragraph: string;
};

export const courses: courseType[] = [
  {
    type: "category",
    text: "Web Development",
    heading: "Build websites and applications with Web Development",
    paragraph:
      "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on...",
  },
  {
    type: "category",
    text: "Data Science",
    heading: "Lead data-driven decisions with Data Science",
    paragraph:
      "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics,...",
  },
  {
    type: "topic",
    text: "Python",
    heading: "Expand your career opportunities with Python",
    paragraph:
      "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..",
  },
  {
    type: "topic",
    text: "JavaScript",
    heading: "Grow your software development skills with JavaScript",
    paragraph:
      "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build...",
  },
];
