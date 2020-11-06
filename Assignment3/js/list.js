// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload=function(){

var countrylist=document.querySelector("#country");

var country= "<ul>" + 
				"<li>" + "Canada" + 
					"<ol>" +
						 "<li>" + "Ontario" + 
						 	"<ul>" + "<li>" + "Toronto" + "</li>" +
						 			 "<li>" + "Hamilton" + "</li>" + 		
						 	"</ul>" + "</li>" + 
				     	 "<li>" + "British Columbia" + 
				     	 	"<ul>" + "<li>" + "Vancouver" + "</li>" + 
				     	 			 "<li>" + "Burnaby" + "</li>" + 
				     	 	"</ul>" + "</li>" +"</ol>" +
			    "<li>" + "Taiwan" + 
			          "<ol>" + 
			          	  "<li>" + "Kaohsiung" + 
			          	  	"<ul>" + "<li>" + "Zuoying" + "</li>" + 
			          	  			 "<li>" + "Sanmin" + "</li>" + 
			          	  	"</ul>" + "</li>" +
				    	 "<li>" + "Taipei" + 
				     		"<ul>" + "<li>" + "Sanchong" + "</li>" + 
				     			 	 "<li>" + "Xinyi" + "</li>" + 
				     		"</ul>" + "</li>" + "</ol>" + "</li>" + "</ul>"
			          
countrylist.innerHTML=country;


var fruitlist=document.querySelector("#fruit");

var fruit= "<ol>";

for(var i=0;i<fruits.length;i++){
fruit += "<li>" + fruits[i] + "</li>"; 
}

fruit += "</ol>";

fruitlist.innerHTML=fruit;


var filelist=document.querySelector("#file");

var file= "<ul>";

for(var i=0;i<directory.length;i++){

	if(directory[i].type=="file"){
		file += "<li>" + directory[i].name + "</li>"; 
	}

	if(directory[i].type== "directory"){
		file += "<li>" + directory[i].name + "<ul>";

		for(var l=0;l<directory[i].files.length;l++){
		file += "<li>" + directory[i].files[l].name + "</li>";	
		}

 		file += "</ul>" + "</li>";
	}

}

file += "</ul>";

filelist.innerHTML=file;

}




