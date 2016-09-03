var bio = {
    "name": "Marcello Valenca",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "988776655",
        "email": "marcello@email.com",
        "github": "https://github.com/marcelloclv",
        "twitter": "twitter.com/myaccount",
        "blog": "myblog.com",
        "location": "Brazil"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my resume",
    "skills": [".NET", "C#", "Java", "JavaScript"]
};

bio.display = function() {
    var myHeaderRole = HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(myHeaderRole);

    var myHeaderName = HTMLheaderName.replace("%data%", this.name);
    $("#header").prepend(myHeaderName);

    var mobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    $("#topContacts").append(mobile);
    $("#footerContacts").append(mobile);

    var email = HTMLemail.replace("%data%", this.contacts.email);
    $("#topContacts").append(email);
    $("#footerContacts").append(email);

    var twitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
    $("#topContacts").append(twitter);
    $("#footerContacts").append(twitter);

    var github = HTMLgithub.replace("%data%", this.contacts.github);
    $("#topContacts").append(github);
    $("#footerContacts").append(github);

    var blog = HTMLblog.replace("%data%", this.contacts.blog);
    $("#topContacts").append(blog);
    $("#footerContacts").append(blog);

    var myLocation = HTMLlocation.replace("%data%", this.contacts.location);
    $("#topContacts").append(myLocation);
    $("#footerContacts").append(myLocation);

    var biopic = HTMLbioPic.replace("%data%", this.biopic);
    $("#header").append(biopic);

    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(welcomeMessage);

    $("#header").append(HTMLskillsStart);

    this.skills.forEach(function(skill) {
        var newSkill = HTMLskills.replace("%data%", skill);
        $("#header").append(newSkill);
    });
};

var work = {
    "jobs": [{
        "employer": "My Company",
        "title": "Software Developer",
        "location": "Malta",
        "dates": "2015-2015",
        "description": "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of the software and systems that make computers or anything containing software work."
    }, {
        "employer": "Work Here",
        "title": "Software Engineer",
        "location": "Brazil",
        "dates": "2013-2015",
        "description": "Prior to the mid-1960s, software practitioners called themselves computer programmers or software developers, regardless of their actual jobs. Many people prefer to call themselves software developer and programmer, because most widely agree what these terms mean, while software engineer is still being debated. In many companies, the titles programmer and software developer were changed to software engineer, for many categories of programmers."
    }]
};

work.display = function() {
    for (var i = 0; i < this.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var employer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
        var title = HTMLworkTitle.replace("%data%", this.jobs[i].title);
        $(".work-entry:last").append(employer + title);

        var dates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
        $(".work-entry:last").append(dates);

        var joblocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
        $(".work-entry:last").append(joblocation);

        var description = HTMLworkDescription.replace("%data%", this.jobs[i].description);
        $(".work-entry:last").append(description);
    }
};

var projects = {
    "projects": [{
        "title": "First Project",
        "dates": "2015-2016",
        "description": "This is my first project. About half of all practitioners today have degrees in computer science, information systems, or information technology. A small, but growing, number of practitioners have software engineering degrees.",
        "images": ["images/proj1.jpg"]
    }, {
        "title": "Second Project",
        "dates": "2014-2015",
        "description": "This is my second project.",
        "images": ["images/proj2.jpg", "images/proj2-2.jpg"]
    }, {
        "title": "Third Project",
        "dates": "2010-2013",
        "description": "This is my third project.",
        "images": ["images/proj3.jpg"]
    }]
};

projects.display = function() {
    for (var proj in this.projects) {
        if (this.projects[proj]){
			$("#projects").append(HTMLprojectStart);

			var title = HTMLprojectTitle.replace("%data%", this.projects[proj].title);
			$(".project-entry:last").append(title);

			var dates = HTMLprojectDates.replace("%data%", this.projects[proj].dates);
			$(".project-entry:last").append(dates);

			var description = HTMLprojectDescription.replace("%data%", this.projects[proj].description);
			$(".project-entry:last").append(description);

			for (var img in this.projects[proj].images) {
				if (this.projects[proj].images[img]){
					var image = HTMLprojectImage.replace("%data%", this.projects[proj].images[img]);
					$(".project-entry:last").append(image);
				}
			}
		}
    }
};

var education = {
    "schools": [{
        "name": "UFPE",
        "location": "Recife",
        "degree": "Bachelors",
        "dates": "2008-2012",
        "url": "https://www.ufpe.br",
        "majors": ["CS"]
    }, {
        "name": "UFPE",
        "location": "Recife",
        "degree": "Masters",
        "dates": "2014-2015",
        "url": "https://www.ufpe.br",
        "majors": ["CS", "MA"]
    }],
    "onlineCourses": [{
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://udacity.com"
    }, {
        "title": "Android basics",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://udacity.com"
    }]
};

education.display = function() {
    this.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var name = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var degree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(name + degree);

        var dates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(dates);

        var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(schoolLocation);

        school.majors.forEach(function(maj) {
            var major = HTMLschoolMajor.replace("%data%", maj);
            $(".education-entry:last").append(major);
        });
    });

    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var title = HTMLonlineTitle.replace("%data%", course.title);
        var schoolName = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(title + schoolName);

        var dates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(dates);

        var url = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(url);
    });
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// Function used to internationalizeButton
function inName(name) {
    var firstName = name.split(" ")[0];
    var lastName = name.split(" ")[1];

    var iName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();

    return iName;
}

// Disabled
//$("#main").append(internationalizeButton);