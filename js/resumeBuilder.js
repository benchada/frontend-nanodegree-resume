/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Chada El Islam"
var role = "ITLP - GE Digital"

var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);

var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').prepend(formattedName);

//Preparing the object of BIO
var skills = ['python', 'SQL', 'Communication'];
var msg = "Welcome to my page .. You will spend awesome time knowing me!";
var URL = "https://s32.postimg.org/alnwpm8x1/Photo_Chada_2.jpg";

var bio = {
	"name" : name,
	"role": role,
	"contactInfo": {
		"M": "+54826945200",
		"email": "benchada@gmail.com",
		"github": "@benchada",
		"twitter": "@chadou20",
		"blog": "benchada.wordpress.com"	
	},

	"location": "Algeria",
	"PictureURL": URL,
	"welcomeMSG": msg,
	"skills": skills

}

var formattedMobile = HTMLmobile.replace('%data%',bio.contactInfo.M);
var formattEmail =  HTMLemail.replace('%data%', bio.contactInfo.email);
var formatedTwitter = HTMLtwitter.replace('%data%',bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contactInfo.github);
var formattedBlog = HTMLblog.replace('%data%', bio.contactInfo.blog);
var formattedLocation = HTMLlocation.replace('%data%', bio.location);
var formattedPic =  HTMLbioPic.replace('%data%', bio.PictureURL);
var formattedmsg   = HTMLwelcomeMsg.replace('%data%', bio.welcomeMSG);

var skill_1 = HTMLskills.replace('%data%',skills[0]);
var skill_2 = HTMLskills.replace('%data%',skills[1]);
var skill_3 = HTMLskills.replace('%data%',skills[2]);


$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattEmail);
$('#topContacts').append(formatedTwitter);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedBlog);
$('#topContacts').append(formattedLocation);
$('#topContacts').append(formattedPic);
$('#topContacts').append(formattedmsg);


// //Preparing the object of Work
// var work = {};
// work.employer = 'GE';
// work.title = "ITLP-Algeria";
// work.years = 1;
// work.city = "Algiers";

// var formattedWork = HTMLworkEmployer.replace('%data%',work.employer) ;
// var formattedWorkTitle =  HTMLworkTitle.replace('%data%',work.employer)

// $('#workExperience').append(HTMLworkStart);
// $('#workExperience').append(formattedWork);
// $('#workExperience').append(formattedWorkTitle);

// var education = {};
// education ["school"] = "AUC";
// education ["year"] = "2015";
// education ["city"] = "Cairo";



// $('#Education').append(HTMLschoolStart);
// $('#Education').append(HTMLschoolName.replace('%data%',education.school)+HTMLschoolDegree.replace('%data%', 'Computer Science'));


var bio = {
	"name" : name,
	"role": role,
	"contactInfo": {
		"M": "+54826945200",
		"email": "benchada@gmail.com",
		"github": "@benchada",
		"twitter": "@chadou20",
		"blog": "benchada.wordpress.com"	
	},

	"location": "Algeria",
	"PictureURL": URL,
	"welcomeMSG": msg,
	"skills": skills

};

var education = {
	"schools":[ 
	{
		"name": "The American University in Cairo",
		"city": "Cairo, Egypt",
		"majors": ["CS"],
		"minors": ["Business"],
		"dates": "2015"

	},
	{
		"name": "Colorado University",
		"city": "Colorado, Boulder",
		"majors": ["CS"],
		"dates":"2013"
	}
	],
	"Online Courses": [
		{
			"name": "javascript"
		}
	]

};

var projects = {
	"projects": 
	[
	{
		"title": "Algesco Convertibility",
		"Dates": "2016",
		"Description": "Identifying the gaps in spare order trends of our customers"
	}
	]

};

var work = {
	"experiences": [
	{
		"employer" :'GE',
		"title" : "ITLP-Algeria",
		"years": 1,
		"city" : "Algiers",
		"Description" : " Data As A Service DaaS"
	},

	{
		"employer": "Halliburton",
		"title" : "IT Intern",
		"years" : 0.2,
		"city" : "Cairo - Egypt",
		"Description" : " Providing on-site support to the employees, Networks, and customer support"
	},

	{
		"employer" :'Sonatrach',
		"title" : "Databases Dev Intern",
		"years": 0.2,
		"city" : "Hassi Rmel - Algeria",
		"Description": "Using SQL/PL forms in order to track the interns data in the system"
	}

	]
	
};

//Checking if there are any skills in the objct
if ( bio.skills.length !== 0)
{
	 $('#header').append(HTMLskillsStart);
	 for (skill in bio['skills'])
	 {
	 	var formatted_skill = HTMLskills.replace('%data%',bio["skills"][skill]);
	 	$('#skills').append(formatted_skill);
	 };

};

//Displaying all the work experiences

function displayWork() {
	for ( exp in work.experiences)
{
	$('#workExperience').append(HTMLworkStart);
	
	var formattedemployer = HTMLworkEmployer.replace('%data%', work["experiences"][exp].employer );
	var formateedTitle = HTMLworkTitle.replace('%data%', work["experiences"][exp].title );
	var formattedemployerTitle = formattedemployer+formateedTitle ;
	$('.work-entry:last').append(formattedemployerTitle);

	var formattedDates = HTMLworkDates.replace('%data%',work["experiences"][exp].years);
	$('.work-entry:last').append(formattedDates);

	var formattedLoc =  HTMLworkLocation.replace('%data%',work["experiences"][exp].city);
	$('.work-entry:last').append(formattedLoc);	

	var formattedDesc = HTMLworkDescription.replace('%data%',work["experiences"][exp].Description);
	$('.work-entry:last').append(formattedDesc);	


};

};

displayWork();

$("#main").append(internationalizeButton);

//Displaying the projects using functions inside the object (Encapsulation)
projects.display = function () 
{
	for ( project in projects)
	{

	}

}

$("#mapDiv").append(googleMap);

