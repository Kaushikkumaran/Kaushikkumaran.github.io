
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kaushik Kumaran",
  title: "Hi all, I'm Kaushik Kumaran",
  subTitle: emoji("Currently pursuing Masters of Science in Business Analytics at the University of Texas at Austin - Red McCombs School of Business. Worked as an Analyst at Lowe's companies and as a Decision Scientist at Mu Sigma."),
  resumeLink: "https://drive.google.com/file/d/1NntLvw2uZiL6ot9jVBTJrhyD1eL5U-4G/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Kaushikkumaran?tab=projects",
  linkedin: "https://www.linkedin.com/in/kaushik-kumaran/",
  gmail: "kaushikkumaran@gmail.com",
};
// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ENTHUSIAST PASSIONATE TO SOLVE BUSINESS PROBLEMS",
  skills: [
    emoji("⚡ Develop scalable models to help forecast/optimize problems"),
    emoji("⚡ Part of creating data backed solutions and informed decisions for a world class clientele"),
    emoji("⚡ Solving business problems using an interdisciplinary approach consisting of business perspectives, applied math, technology and behavioural sciences")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "PySpark",
      image: require("./assets/images/PySpark.jpeg"),
      size: "80px"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      image: require("./assets/images/R_Programming.jpeg"),
      size: "80px"
    },
    {
      skillName: "SQL",
      image: require("./assets/images/sql.png"),
      size: "80px"
    },
    {
      skillName: "Excel",
      image: require("./assets/images/Excel.png"),
      size: "60px"
    },
    {
      skillName: "PowerBI",
      image: require("./assets/images/power_bi.jpeg"),
      size: "80px"
    },
    {
      skillName: "Statistics",
      image: require("./assets/images/Stat.jpeg"),
      size: "60px"
    },
    {
      skillName: "CPG Analytics",
      image: require("./assets/images/cpg.jpeg"),
      size: "60px"
    },
    {
      skillName: "Retail Analytics",
      image: require("./assets/images/Retail.png"),
      size: "80px"
    },
    {
      skillName: "Storyboarding",
      image: require("./assets/images/Storyboard.jpeg"),
      size: "80px"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "The University of Texas at Austin | McCombs School of Business",
      logo: require("./assets/images/TexasMccombs.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "July 2021 - Present",
      desc: "Advanced Machine Learning, Optimization, Unstructured Data Analytics, Unsupervised Learning, Marketing Analytics, Supply Chain Analytics"
    },
    {
      schoolName: "Sir MVIT",
      logo: require("./assets/images/sirMVIT.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2014 - May 2018",
      desc: "Artificial Intelligence, Database Management Systems, Operations Research, Java Programming, Analysis and Design of Algorithms, Computer Networks, Cloud Computing, Data Structures, Programming the Web"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Consulting",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Analyst - Data Analytics and Computational Intelligence",
      company: "Lowe’s Services Private Ltd",
      companylogo: require("./assets/images/LowesLogo.png"),
      date: "May 2020 – June 2021",
      descBullets: [
        "Reduced overall cancellation rate from 18% to 13% resulting in top-line savings of $400M by building a cancellation prediction model, a delay prediction model and an inventory prediction model with Random Forest and XGBoost",
        "Proposed key self-service features to be enabled in the Order portal resulting in reduction of call rate by 4% translating into bottom line savings of $10M, also built a customer segmentation model utilizing PCA followed by k means to identify correct set of customers for several use cases"
      ]
    },
    
    {
      role: "Decision Scientist",
      company: "Mu Sigma",
      companylogo: require("./assets/images/MuSigmaLogo.jpeg"),
      date: "Nov 2018 – May 2020",
      descBullets: [
        "Researched the art of problem solving by identifying current and desired future state, addressing gaps utilizing factor maps, hypothesis testing, exploratory data analysis, modeling thereby generating insights and recommendations",
        "Estimated number of inventory units using Prophet Time Series Forecasting Model in Python. Scenario-based modelling was built to account for probabilistic scenarios leveraging Monte Carlo Simulation approach",
        "Provided insights and enabled clients to make several strategic revenue decisions by using PySpark to harmonize data, PowerBI to visualize a decision board and Azure Data Factory for automation"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "aditya-prasad-projects", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS THAT I HAVE BUILT TO EMPOWER PEOPLE WITH DATA",
  projects: [
    {
      image: require("./assets/images/InsideAirbnb.png"),
      link: "https://aditya-prasad-projects.github.io/Data-Pipeline-for-analyzing-Inside-Airbnb-dataset/"
    },
    {
      image: require("./assets/images/bostonRent.jpeg"),
      link: "https://aditya-prasad-projects.github.io/Airbnb-Analysis-Using-Spark/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Data Science Career Coach",
      subtitle: "As a Data Science Career Coach at Board Infinity, helped students get desired roles by conducting mock interviews, assigning capstone projects and improve network as a whole",
      image: require("./assets/images/Data_Science_Coach.png"),
    },
    {
      title: "Spot Award and Team Excellence Award at Lowe’s",
      subtitle: "Spot Award at Lowe’s for exhibiting high ownership, Team excellence award for creating high impact and also received Exceeded Expectations performance",
      image: require("./assets/images/Recognition.jpg")
    },
    {
      title: "Academic Excellence",
      subtitle: "Awarded Gold medal for Academic Excellence across all semesters in Engineering",
      image: require("./assets/images/academic_excellence.png"),
    },
    {
      title: "Coursera Certifications",
      subtitle: "1. Machine Learning from Stanford University by Andrew Ng, 2. Neural Networks and Deep Learning by Andrew Ng, 3. Discrete Optimization from the University of Melbourne",
      image: require("./assets/images/Coursera.png"),
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+1 (512) 661-1729",
  email_address: "kaushikkumaran@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo};
