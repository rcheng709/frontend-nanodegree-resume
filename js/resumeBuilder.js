/*
Project Resume
 */
var bio = {
	"name":"Richard Cheng",
	"role":"Front-End Web Developer",
	"contacts": { "mobile": "407-000-0000","email": "rcheng709@gmail.com",
		"github": "https://github.com/rcheng709/frontend-nanodegree-resume", "twitter": "Richard@twitter", "location": "Florida"},
	"welcomeMessage": "I am seeking work as a Front-End Web Developer",
    "skills": ["javascript","python","HTML","CSS","Cybersecurity","Data Center"],
	"biopic": "images/me.jpg",
};

var work = {
	"jobs":[
	{
	"employer":"AT&T","title":"Senior Switch Technician", "location":"Lake Mary,FL",
	"dates":"July 2009 to Current", "description":"Maintenance and operations of Regional Data Center and Mobile Telephone Switching Office switch at Lake Mary, Florida."+
	"Break/Fix on hardware of servers, network equipment using recommended tools"+"Ensure high reliability of network equipment such as routers in the data center facility by performing routines in diligent manner."

	},
	{
	"employer":"Cellular One","title":"MGW/BSC Technician", "location":"Bastrop,TX",
	"dates":"February 2009 to July 2009", "description":"Responsible for maintaining high reliability of Mobile switching center in Bastrop, Texas."+
	"Maintained and operated Nokia MGW, Nokia BSC3i"+"Ensure that all transmission, switching and cell site equipment are with 100% reliability"+
	"Provisioning and turn-up of OC12 circuits"	
	},
	{
	"employer":"Mycom USA","title":"NSS Engineer", "location":"Orlando, Florida",
	"dates":"January 2003 to January 2009", "description":"Implemented core network equipment for major wireless providers."+
	"Successfully troubleshoots hardware and software alarms on network equipment"+
	"Commissioned effectively the following equipment BSS, MSC, BTS, MGW and SGSN with minimal deviations"
	}]
};

var education={
	"schools":[ 
			{	"name": "Champlain College", 
				"dates": "August 2014 - July 2016",
				"location": "Burlington, Vermont",
				"degree": "none",
				"majors": ["Cybersecurity certificate"],
				"url": "https://champlain.edu"
			}
	],
	"onlineCourse": [
			{
				"school":"Udacity",
				"title": "Front-End Web Developer",
				"dates": "February 2017 - February 2018",
				"url": "https://udacity.com"
			}
	]

};
	
var projects = {
	"projects": [
		{
			"title": "HTML_CSS responsive",
			"dates": "April 2017",
			"description": "created a responsive website regardless of the devices screen",
			"images":["images/portfolio1.jpg"],
			"url": "http://www.richard.com/responsive"
		},
		{
			"title": "Online Resume",
			"dates": "May 2017",
			"description": "created a responsive website to feature Javascript",
			"images":["images/onlineResume1.jpg"],
			"url": "http://www.richard.com/responsive"

		}
	]
};
/*Display Contact Info Header and Footer section*/
bio.display =function(){
	var formattedName=HTMLheaderName.replace("%data%", bio.name);
	$("#topContacts").append(formattedName);

	var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
	$("#topContacts").prepend(formattedRole);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#topContacts").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#topContacts").append(formattedWelcomeMsg);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#header").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		var formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkills);
	});
};	
bio.display();

/*Display for Work Experience modified 06/05/17*/
work.display = function() {
		work.jobs.forEach(function (job) {
		$("#workExperience").append(HTMLworkStart);
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);

        });
};
work.display();

/*Display for project completed*/
projects.display = function() {
	projects.projects.forEach(function(project){
	
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
    });	
			projects.projects.forEach(function(image) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", image.images);
				$(".project-entry:last").append(formattedProjectImage);
	        });
};
projects.display();
/*Display for Education background*/
education.display = function() {
	
		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
		/*	var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);*/

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		/*	$(".education-entry:last").append(formattedSchoolMinor);*/
		});

		
			$("#education").append(HTMLonlineClasses);
			education.onlineCourse.forEach(function(online) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title).replace("#", online.url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url).replace("#", online.url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			});
		

};
education.display();
/*Google Map API*/
$("#mapDiv").append(googleMap);