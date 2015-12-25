/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = [
              "Java           | Certified Java programmer; Web Application, JSP, Servlet, Web Services(JAX-RS).",
              "Python       | Industry and tutoring experience; Data Science, Web Application, Flask, Pylons, SQLAlchemy, Docopt.",
              "Javascript | Industry experience; Web application, jQuery, angularjs, node.js.",
              "C++             | Many school projects; Multithreads/multicore, Information Retrival, Data Comm/Socket.",
              "Famliar with full stack development, from frontend to script automation in Bash.",
              "Good Knowledge of data structures, algorithms, design patterns and OOP design.",
              "Good Knowledge of networking basics and data science fundamentals.",
            ];
var bio = {"name":"Xingyu Zhou",
           "role":"Software Developer & Graduate Student In CS",
           "contacts":{
                "email":"ryan.zxy@gmail.com",
                "github":"https://github.com/perceptron-XYZ",
                "mobile":"613-263-8767",
                "location":"Ottawa, Canada<span style='color:#E05151'>||</span>Chengdu, China",
           },
           "welcome_message":"It is best to learn wisdom by the experience of others",
           "skills":skills,
           "biopic":"https://raw.githubusercontent.com/udacity/frontend-nanodegree-resume/master/images/fry.jpg"
          }

var work = {"jobs":[
            {
              "employer":"Datacats",
              "title":"Software Developer",
              "location":"Ottawa,Ontario",
              "dates":"2015.10-2015.12",
              "description":"Datacats uses Python and Docker to reduce the complexivity for the development of Open Data "+
              "Platforms in CKAN. I improved several development tools and libraries, such as an API to "+
              "do bulk data download/upload. I also contributed to the upgrade of data catalogues for city of Surrey "+
              "and province of British Columbia."
            },
            {
              "employer":"Wordlink",
              "title":"Intern-Software Development",
              "location":"Montreal, Quebec",
              "dates":"2014.07-2014.10",
              "description":"I independently developed the frontend and backend frameworks of the Restful news feed app "+
              "of Wordlink, which was selected as part of Cossette Montreal's incubator lab. The stack includes "+
              "Javascript, node.js, angular.js, hapi.js",
            }
]};
var education = {"schools":[
                  {"name":"University of Ottawa",
                   "location":"Ottawa,Ontario",
                   "degree":"Master of Computer Science",
                   "GPA":"10/10",
                   "awards":["Admission Scholarship"],
                   "majors":["Computer Science"],
                   "dates":"2015.09-Present",
                   "url":"www.uottawa.ca",
                 },
                 {"name":"Concordia University",
                  "location":"Montreal,Quebec",
                  "degree":"Bachelor of Computer Science",
                  "GPA":"4.13/4.30",
                  "awards":["Graduation with Great Distinction",
                           "Dean's List every year",
                           "Arts and Science Scholar",
                           "Monsignor Andrew Sinal Memorial Scholarship"],
                  "majors":["Honours in Computer Applications"],
                  "minors":["Mathematics & Statistics"],
                  "dates":"2012.09-2015.05",
                  "url":"www.concordia.ca",
                }],
                "onlineCourses":[{
                  "title":"Machine Learning",
                  "school":"Stanford University",
                  "date":""
                }]
               };

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  for(i in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  }
};

for(i in formattedContactInfo){
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork(){
  if(work.jobs.length > 0){
    for(i in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

education.display = function(){
  if(education.schools.length > 0){
    for(i in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      var formattedSchoolGPA = HTMLschoolGPA.replace("%data%", education.schools[i].GPA);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
      if("minors" in education.schools[i]){
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minors);
        $(".education-entry:last").append(formattedSchoolMinor);
      }
      $(".education-entry:last").append(formattedSchoolGPA);
      if("awards" in education.schools[i]){
        $(".education-entry:last").append(HTMLschoolAwardsStart);
        for(j in education.schools[i].awards){
          var formattedSchoolAward = HTMLschoolAward.replace("%data%",education.schools[i].awards[j]);
          $(".awards:last").append(formattedSchoolAward);
        }
      }
    }
  }
}

displayWork();
education.display();
$("#mapDiv").append(googleMap);
