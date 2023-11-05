function(e, strRowValues){
	console.log(strRowValues);
	var strFirstName = strRowValues.split("|")[0];
	console.log(strFirstName);
	var strLastName = strRowValues.split("|")[1];
	console.log(strLastName);
	var strEmail = strRowValues.split("|")[2];
	console.log(strEmail);
	var strAddress = strRowValues.split("|")[3];
	console.log(strAddress);
	var strPhoneNumber = strRowValues.split("|")[4];
	console.log(strPhoneNumber);
	var strCompanyName = strRowValues.split("|")[5];
	console.log(strCompanyName);
	var strRoleInCompany = strRowValues.split("|")[6];
	//console.log(strRoleInCompany);
	//console.log("Execution Started");
	
	document.querySelectorAll('[ng-reflect-name="labelEmail"]')[0].value=strEmail;
	document.querySelectorAll('[ng-reflect-name="labelCompanyName"]')[0].value=strCompanyName;
	document.querySelectorAll('[ng-reflect-name="labelFirstName"]')[0].value=strFirstName;
	document.querySelectorAll('[ng-reflect-name="labelLastName"]')[0].value=strLastName;
	document.querySelectorAll('[ng-reflect-name="labelAddress"]')[0].value=strAddress;
	document.querySelectorAll('[ng-reflect-name="labelPhone"]')[0].value=strPhoneNumber;
	document.querySelectorAll('[ng-reflect-name="labelRole"]')[0].value=strRoleInCompany;
	
	document.querySelectorAll('[type="submit"]')[0].click();
	
	//console.log("Execution Ended");
}