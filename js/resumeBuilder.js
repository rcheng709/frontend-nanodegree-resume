/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name":"Richard Cheng",
	"role":"Front-End Web Developer",
	"contacts": { "mobile": "407-000-0000","email": "rcheng709@gmail.com",
		"github": "ichard", "twitter": "twitty", "location": "Florida"},
	"bioPic": "images/me.jpg",
	"welcomeMsg": "I am seeking work as a Front-End Web Developer",
	"skills": ["javascript","python","HTML","CSS"],
};

var work = {
	"jobs":[
	{
	"employer":"AT&T","title":"Senior Switch Technician", "location":"Lake Mary,FL",
	"dates":"July 2009 to Current", "description":"Maintenance of Data Center"
	},
	{
	"employer":"Cellular One","title":"MGW/BSC Technician", "location":"Bastrop,TX",
	"dates":"February 2009 to July 2009", "description":"Maintenance of Data Center"	
	},
	{
	"employer":"Mycom USA","title":"NSS Engineer", "location":"Orlando, Florida",
	"dates":"January 2003 to January 2009", "description":"Implementation of 2G, 3G and 4G networks"
	}]
};

var education={
	"schools":[ 
			{	"name": "Champlain College", 
				"datesAttended": "August 2014 - July 2016",
				"location": "Burlington, Vermont",
				"degree": "none",
				"major": "Cybersecurity certificate",
				"url": "https://champlain.edu"
			}
	],
	"onlineCourse": [
			{
				"school":"Udacity",
				"course": "Front-End Web Developer",
				"datesAttended": "February 2017 - February 2018",
				"url": "https://udacity.com"
			}
	]

};
	
var project = {
	"projects": [
		{
			"title": "HTML_CSS responsive",
			"datesWorked": "April 2017",
			"description": "created a responsive website regardless of the devices screen",
			"images":["images/portfolio1.jpg"],
			"url": "http://www.richard.com/responsive"
		},
		{
			"title": "Online Resume",
			"datesWorked": "May 2017",
			"description": "created a responsive website to feature Javascript",
			"images":["images/onlineResume1.jpg"],
			"url": "http://www.richard.com/responsive"

		}
	]
};

var formattedName=HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);


var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
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

displayWork();

projects.display = function() {
	if(project.projects.length > 0) {
		for(i in project.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title).replace("#", project.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in project.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}
projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		/*	var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);*/

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		/*	$(".education-entry:last").append(formattedSchoolMinor);*/
		}

		if(education.onlineCourse.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourse) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[i].course).replace("#", education.onlineCourse[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[i].datesAttended);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[i].url).replace("#", education.onlineCourse[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}
education.display();

$("#mapDiv").append(googleMap);