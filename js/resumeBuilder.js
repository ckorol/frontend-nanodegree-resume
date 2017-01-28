// JSON for bio data

var bio = {
  "name" : "Chris Korol",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "206-276-8099",
    "email" : "chris@lauckhart.com",
    "github" : "ckorol",
    "location" : "8202 19th Ave NE, Seattle, WA  98115"
  },
  "biopic" : "images/headshot6.jpg",
  "welcomeMessage" : "After 20 years in product managment and marketing at Internet companies (including one I started and sold), I decided to cross over to web development!",
  "skills" : ["HTML5", "CSS3", "Creative Cloud", "Javascript", "SQL"]
};

// Function to replace placeholders and append formatted bio data to header
bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $('#header').prepend(formattedName + formattedRole);
  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').append(formattedLocation);

  $('#header').append(formattedPic);
  $('#header').append(formattedWelcome);

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    // var i = 0;
    // while (i<bio.skills.length) {
    for (var i=0; i<bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
      $('#header').append(formattedSkills);
      // i = i+1;
    }
  }
  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedGithub);
  $('#footerContacts').append(formattedLocation);

};
bio.display();

//JSON for work history
var work = {
  "jobs" : [
    {
    "employer" : "n/a",
    "title" : "Retired",
    "dates" : "2016 - present",
    "location" : "Seattle, WA",
    "description" : "Retired after Full Slate was sold to Internet Brands as part of a larger divestiture.  Relocated from Bay Area back to Seattle. Began exploring ideas for a new venture, developing business model and conducting market research.  Enrolled in software development nanodegree program through Udacity."
    },
    {
    "employer" : "Intuit",
    "title" : "Senior Product Line Manager",
    "dates" : "2014 - 2016",
    "location" : "San Francisco, CA",
    "description" : "Developed opportunities to integrate and cross-promote Full Slate with QuickBooks Online and other Intuit products.   Oversaw product marketing, website, SEO and SEM for Demandforce; managed 7 person team and outside agencies.  Developed and evangelized new product concept for low-end SMB marketing offering."
    },
    {
    "employer" : "Full Slate",
    "title" : "Co-founder, VP Product & Marketing",
    "dates" : "2008 - 2014",
    "location" : "Seattle, WA",
    "description" : "Created online scheduling software for small businesses.  Boostraped SaaS business from concept to multi-million dollar run-rate.  Acquired thousands of paying subscribers at 4:1 CAC ratio through cost-effective marketing and word of mouth.  Achieved Net Promoter score of 62 by focusing on exceptional usability and custmer service."
    }
  ]
};
//Alternative approach to display
// if (work.jobs.length > 0) {
//   for (var i=0; i<work.jobs.length; i++) {
//     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
//     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
//     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
//     var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
//     $("#workExperience").append(HTMLworkStart);
//     $(".work-entry:last").append(formattedEmployer + formattedTitle);
//     $(".work-entry:last").append(formattedDates + formattedLocation);
//     $(".work-entry:last").append(formattedDesc);
//   }
// };

// Function to replace placeholders and append formatted data to Work Experience section
work.display = function() {
  if (work.jobs.length > 0) {
    work.jobs.forEach(function(job){
      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
      var formattedDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
      var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(formattedEmployer + formattedTitle);
      $('.work-entry:last').append(formattedDates + formattedLocation);
      $('.work-entry:last').append(formattedDescription);
    });
  }
};

//Call work.display function
work.display();

//JSON for projects
var projects = {
  "projects" : [
    {
    "title" : "Responsive Website",
    "dates" : "2016",
    "description" : "Coded fully responsive website from scratch using HTML5 and CSS3.",
    "images" :["images/portfolio.png"]
    },
    {
    "title" : "Javascript Resume",
    "dates" : "2017",
    "description" : "Used javascript, JSON and jQuery to populate data in resume.",
    "images" :[]
    }
  ]
};

//Function to replace placeholders and append formatted project data
projects.display = function(){
  if (projects.projects.length > 0) {
    projects.projects.forEach(function(project){
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);
      if (project.images.length > 0) {
        for (var i = 0; i<project.images.length; i++) {
          var formattedImage = HTMLprojectImage.replace('%data%', project.images[i]);
          $('.project-entry:last').append(formattedImage);
        }
      }
    });
  }
};
//Call projects.display function if array isn't empty
projects.display();

//JSON for schools and courses
var education = {
  "schools" : [
    {
    "name" : "University of Wisconsin",
    "dates" : "1993-1996",
    "location" : "Madison, WI",
    "degree" : "Bachelor of Business Administration",
    "majors" : ["Marketing"],
    "url" : "https://wsb.wisc.edu/"
    }
  ],
  "onlineCourses" : [
    {
    "school" : "Udacity",
    "title" : "Frontend Web Developer Nanodegree",
    "dates" : "2016-present",
    "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

//Function to display school and course data if said array isn't empty
education.display = function(){
  if (education.schools.length > 0) {
    education.schools.forEach(function(school){
      var formattedSchool = HTMLschoolName.replace('%data%', school.name);
      var formattedSchool = formattedSchool.replace('#', school.url);
      var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
      var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
      var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedSchool + formattedDegree);
      $('.education-entry:last').append(formattedDates + formattedLocation);
      $('.education-entry:last').append(formattedMajor);
    });
  }
  if (education.onlineCourses.length > 0) {
    education.onlineCourses.forEach(function(course){
      var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
      var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
      var formattedTitle = formattedTitle.replace('#', course.url);
      var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
      var formattedURL = HTMLonlineURL.replace('%data%', course.url);
      $('#education').append(HTMLonlineClasses);
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedTitle + formattedSchool);
      $('.education-entry:last').append(formattedDates);
      $('.education-entry:last').append(formattedURL);
    });
  }
};

//Call education.display function.  Function itself tests if array is empty
education.display();

// $('#main').append(internationalizeButton);
// function inName(someName) {
//   nameArray = someName.split(' ');
//   nameArray[0] = nameArray[0].substr(0,1).toUpperCase() + nameArray[0].substr(1).toLowerCase();
//   nameArray[1] = nameArray[1].toUpperCase();
//   intlName = nameArray[0] + ' ' + nameArray[1]
//   return intlName
// };

$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
