$(document).ready(function(){
//-----------------THIS IS FOR ALL SNIPPET PART
	var experienceSnippetJsonLink = "/rinkeshpatel/assets/data/resume.json";		//=====Only for GitHub
	var resumeSnippetLink = "/rinkeshpatel/snippets/resume-snippet.html";
	var sectionTitleSnippetHtml = "/rinkeshpatel/snippets/section-title-snippet.html";
	var experienceCategorySnippetLink = "/rinkeshpatel/snippets/education-category-snippet.html";
	var workexCatSnippetLink = "/rinkeshpatel/snippets/work-experience-category-snippet.html";
	var projectsSnippetLink = "/rinkeshpatel/snippets/project-details-snippet.html";
	var awardsSnippetLink = "/rinkeshpatel/snippets/award-details-snippet.html";
	var porfolioSnippetLink = "/rinkeshpatel/snippets/portfolio-snippet.html";

//======For other than github part
	// var resumeSnippetLink = "../../snippets/resume-snippet.html";
	// var sectionTitleSnippetHtml = "../../snippets/section-title-snippet.html";
	// var experienceSnippetJsonLink = "../../assets/data/resume.json";		//=====Only for all other case
	// var experienceCategorySnippetLink = "../../snippets/education-category-snippet.html";
	// var workexCatSnippetLink = "../../snippets/work-experience-category-snippet.html";
	// var projectsSnippetLink = "../../snippets/project-details-snippet.html";
	// var awardsSnippetLink = "../../snippets/award-details-snippet.html";
	// var porfolioSnippetLink = "../../snippets/portfolio-snippet.html";


	var insertHtml = function(selector,htmlCode){
		var targetElement = document.querySelector(selector);
		targetElement.innerHTML = htmlCode;
	};

	var insertProperty = function(string, propertyName, propertyValue) {
		var propToReplace = "{{" + propertyName + "}}";
		string = string
				.replace(new RegExp(propToReplace, "g"), propertyValue);
		return string;
	};

	var checkForEnter = function(string) {
		var propertyValue = "<br>";
		var propToReplace = "\n";
		string = string
				.replace(new RegExp(propToReplace, "g"), propertyValue);
		return string;
	};

	var buildExperienceDetailsPartHTML = function(experienceCat,
												experienceCategorySnippetHtml) {
		var finalCatHtml = "";
		var categoryDetailsID = experienceCat.categoryDetailsID;
		var experienceCatDetails = experienceCat.categoryDetails;
		for(var j = 0; j < experienceCatDetails.length; j++) {
			finalCatHtml += experienceCategorySnippetHtml;
			finalCatHtml = insertProperty(finalCatHtml, "name", experienceCatDetails[j].name);
			finalCatHtml = insertProperty(finalCatHtml, "timeDuration", experienceCatDetails[j].timeDuration);
			finalCatHtml = insertProperty(finalCatHtml, "place", experienceCatDetails[j].place);
		}
		insertHtml(categoryDetailsID, finalCatHtml);
	};

	var buildWorkExHTML = function(experienceCat,
									workexCatSnippetHtml,
									projectDetailsHtml) {
		var finalCatHtml = "";
		var categoryDetailsID = experienceCat.categoryDetailsID;
		var experienceCatDetails = experienceCat.categoryDetails;
		for(var j = 0; j < experienceCatDetails.length; j++) {
			finalCatHtml += workexCatSnippetHtml;
			finalCatHtml = insertProperty(finalCatHtml, "companyName", experienceCatDetails[j].companyName);
			finalCatHtml = insertProperty(finalCatHtml, "location", experienceCatDetails[j].location);
			finalCatHtml = insertProperty(finalCatHtml, "duration", experienceCatDetails[j].duration);
			var projects = experienceCatDetails[j].workedOn;
			for(var i = 0; i < projects.length; i++)
			{
				finalCatHtml += projectDetailsHtml;
				finalCatHtml = insertProperty(finalCatHtml, "projectName", projects[i].projectName);
				finalCatHtml = insertProperty(finalCatHtml, "timeDuration", projects[i].timeDuration);
				finalCatHtml = insertProperty(finalCatHtml, "designation", projects[i].designation);
				projects[i].details = checkForEnter(projects[i].details);
				finalCatHtml = insertProperty(finalCatHtml, "projectDetails", projects[i].details);
				if(projects[i].isUrl) {
					finalCatHtml = insertProperty(finalCatHtml, "isUrl", "");
					finalCatHtml = insertProperty(finalCatHtml, "url", projects[i].url);
				}
				else {
					finalCatHtml = insertProperty(finalCatHtml, "isUrl", "d-none");
				}

			}
		}
		insertHtml(categoryDetailsID, finalCatHtml);
	};

	var buildAwardsDetailsHTML = function(experienceCat, 
											awardSnippetHtml){
		var finalCatHtml = "";
		var categoryDetailsID = experienceCat.categoryDetailsID;
		var awardsDetails = experienceCat.categoryDetails;
		for(var j = 0; j < awardsDetails.length; j++) {
			finalCatHtml += awardSnippetHtml;
			finalCatHtml = insertProperty(finalCatHtml, "eventType", awardsDetails[j].eventType);
			finalCatHtml = insertProperty(finalCatHtml, "eventName", awardsDetails[j].eventName);
			finalCatHtml = insertProperty(finalCatHtml, "eventDate", awardsDetails[j].eventDate);
			finalCatHtml = insertProperty(finalCatHtml, "eventDetails", awardsDetails[j].eventDetails);
		}
		insertHtml(categoryDetailsID, finalCatHtml);
	};

	var buildPortfolioLISTHTML = function(portfolioListID,
											portfolioList,
											porfolioSnippetHtml) {
		var finalPortHtml = "";
		// var categoryDetailsID = experienceCat.categoryDetailsID;
		var tagsHtml = "";
		// var awardsDetails = experienceCat.categoryDetails;
		for(var j = 0; j < portfolioList.length; j++) {
			finalPortHtml += porfolioSnippetHtml;
			finalPortHtml = insertProperty(finalPortHtml, "projectName", portfolioList[j].projectName);
			finalPortHtml = insertProperty(finalPortHtml, "projectDetails", portfolioList[j].projectDetails);
			finalPortHtml = insertProperty(finalPortHtml, "projectImgLink", portfolioList[j].projectImgLink);
			finalPortHtml = insertProperty(finalPortHtml, "tagsID", portfolioList[j].tagsID.substring(1));
		}
		insertHtml(portfolioListID, finalPortHtml);
		for(var j = 0; j < portfolioList.length; j++) {
			tagsHtml = "";
			for (var i = 0; i < portfolioList[j].tags.length; i++) {
				tagsHtml += '<span class="tag"><i class="fas fa-tags text-right align-middle"></i> ' + portfolioList[j].tags[i] + '</span>';
			}
			insertHtml(portfolioList[j].tagsID, tagsHtml);
		}

	};

	var buildPortfolioHTML = function(experienceSnippetHtml,
										jsonData) {
		var portfolioCat = jsonData.portfolio;
		var id = portfolioCat.id;
		var portfolioList = portfolioCat.portfolioList;
		var portfolioListID = portfolioCat.portfolioListID;
		var finalCatHtml = '<div class="row">' 
							+ experienceSnippetHtml
							+ '<div class="col-md-9 section-body" id="'+portfolioListID.substring(1)+'"></div>'
							+ '</div>';
		finalCatHtml = insertProperty(finalCatHtml, "category", portfolioCat.sectionTitle);
		finalCatHtml = insertProperty(finalCatHtml, "faTagName", portfolioCat.faTagName);
		insertHtml(id,finalCatHtml);
		$ajaxUtils.sendGetRequest(porfolioSnippetLink,
									function(porfolioSnippetHtml) {
										buildPortfolioLISTHTML(portfolioListID,
																portfolioList,
																porfolioSnippetHtml);
									},
									false);
	};

	var buildExperienceHTML = function(	experienceSnippetHtml,
										jsonData) {
		var experienceCat = jsonData.experience;
		// console.log(jsonData);
		for(var i = 0; i < experienceCat.length; i++) {
			var id = experienceCat[i].id;
			var experienceCatDetails = experienceCat[i].categoryDetails;
			var categoryDetailsID = experienceCat[i].categoryDetailsID;
			var finalCatHtml = '<div class="row">' 
								+ experienceSnippetHtml
								+ '<div class="col-md-9 section-body" id="'+categoryDetailsID.substring(1)+'"></div>'
								+ '</div>';
			finalCatHtml = insertProperty(finalCatHtml, "category", experienceCat[i].category);
			finalCatHtml = insertProperty(finalCatHtml, "faTagName", experienceCat[i].faTagName);
			insertHtml(id,finalCatHtml);
			// var iTagIcon = '<i class="fas fa-graduation-cap"></i>';
		}
		$ajaxUtils.sendGetRequest(experienceCategorySnippetLink,
							function(experienceCategorySnippetHtml) {
								buildExperienceDetailsPartHTML(experienceCat[0],
									experienceCategorySnippetHtml);
							},
							false);										
		$ajaxUtils.sendGetRequest(workexCatSnippetLink,
									function(workexCatSnippetHtml) {
										$ajaxUtils.sendGetRequest( projectsSnippetLink,
										function(projectDetailsHtml) {
											buildWorkExHTML(experienceCat[1],
											workexCatSnippetHtml,
											projectDetailsHtml);
										},false)
									},
								  false);
		$ajaxUtils.sendGetRequest(awardsSnippetLink,
							function(awardSnippetHtml) {
								buildAwardsDetailsHTML(experienceCat[2],
									awardSnippetHtml);
							},
							false);	
	};

	var buildAndShowResumeHTML = function(resumeSnippetHtml, jsonData) {
		var resumeCat = jsonData.resume;
		var id = resumeCat.id;
		var finalCatHtml = resumeSnippetHtml;
		finalCatHtml = insertProperty(finalCatHtml, "sectionTitle", resumeCat.sectionTitle);
		finalCatHtml = insertProperty(finalCatHtml, "details", resumeCat.details);
		finalCatHtml = insertProperty(finalCatHtml, "resumeLink", resumeCat.resumeLink);
		finalCatHtml = insertProperty(finalCatHtml, "faTagName", resumeCat.faTagName);
		insertHtml(id,finalCatHtml);
	};

	var buildAndShowExperienceHTML = function(jsonData) {
		$ajaxUtils.sendGetRequest(	resumeSnippetLink, 
									function(resumeSnippetHtml) {
										buildAndShowResumeHTML(resumeSnippetHtml, jsonData);
									},
									false);

		$ajaxUtils.sendGetRequest(	sectionTitleSnippetHtml, 
									function(experienceSnippetHtml) {
										buildExperienceHTML(experienceSnippetHtml, jsonData);
										buildPortfolioHTML(experienceSnippetHtml, jsonData);
									},
									false);
	}

	$ajaxUtils.sendGetRequest(experienceSnippetJsonLink, buildAndShowExperienceHTML);

});