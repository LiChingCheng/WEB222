// All you JavaScript code for assignment 4 should be in this file
window.onload=function(){
	var subtitle;
	var row = "";
	generateTable("list");
	subtitle=document.getElementById("subtitle");
	document.querySelector("#menu_21").onclick=function(){ generateTable("pop100"); };
	document.querySelector("#menu_22").onclick=function(){ generateTable("pop1-2"); };
	document.querySelector("#menu_31").onclick=function(){ generateTable("area1"); };
	document.querySelector("#menu_32").onclick=function(){ generateTable("allSize"); };
	document.querySelector("#menu_41").onclick=function(){ generateTable("lanEng"); };
	document.querySelector("#menu_42").onclick=function(){ generateTable("lanAra"); };
	document.querySelector("#menu_43").onclick=function(){ generateTable("lanChinese"); };
	document.querySelector("#menu_44").onclick=function(){ generateTable("lanFre"); };
	document.querySelector("#menu_45").onclick=function(){ generateTable("lanHin"); };
	document.querySelector("#menu_46").onclick=function(){ generateTable("lanKor"); };
	document.querySelector("#menu_47").onclick=function(){ generateTable("lanJpn"); };
	document.querySelector("#menu_48").onclick=function(){ generateTable("lanRus"); };


	function generateTable(select){
		var table=document.querySelector("#outputTable");

		var tblexist=table.querySelector("tbody");
		if(tblexist) table.removeChild(tblexist);

		var tblBody=document.createElement("tbody");

		for(var i=0;i<countries.length;i++){
			row=document.createElement("tr");
			switch(select){
				case 'list':
					getRow(countries[i].Code,countries[i].Code,countries[i].Name.English,countries[i].Continent,
					countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;
			
				case 'pop100':
					subtitle.innerHTML="List of Countries and Dependencies - Population greater than 100 million";
					if(countries[i].Population > 100000000){				
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.English,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					}  //pop100 if{}
				break;

				case 'pop1-2':
					subtitle.innerHTML="List of Countries and Dependencies - Population between 1 and 2 million";
					if(countries[i].Population>=1000000&&countries[i].Population<=2000000){
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.English,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					}  //pop1-2 if{}
				break;

				case 'area1':
					subtitle.innerHTML="List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
					if(countries[i].AreaInKm2>1000000&&countries[i].Continent=='Americas'){
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.English,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					}  //area1 if{}
				break;

				case 'allSize':
					subtitle.innerHTML="List of Countries and Dependencies - All countries in Asia";
					if(countries[i].Continent=='Asia'){
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.English,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					}  //allSize if{}
				break;

				case 'lanEng':
					subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in English";
					getRow(countries[i].Code,countries[i].Code,countries[i].Name.English,countries[i].Continent,
					countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
				break;

				case 'lanChinese':
					subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Chinese (中文)";
					getRow(countries[i].Code,countries[i].Code,countries[i].Name.Chinese,countries[i].Continent,
					countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
				break;

				/*	case 'lanAra':
						subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Arabic";
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.Arabic,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;
					case 'lanFre':
						subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Franch";
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.Franch,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;

					case 'lanHin':
						subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Hindi";
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.Hindi,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;

					case 'lanKor':
						subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Korean";
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.Korean,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;

					case 'lanJpn':
						subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Japanese";
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.Japanese,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;

					case 'lanRus':
						subtitle.innerHTML="List of Countries and Dependencies – Country/Dep. Name in Russian";
						getRow(countries[i].Code,countries[i].Code,countries[i].Name.Russian,countries[i].Continent,
						countries[i].AreaInKm2,countries[i].Population,countries[i].Capital);
					break;
				*/

			}  //switch{}
			tblBody.appendChild(row);
		} //for{}
		table.appendChild(tblBody);
	} //function generateTable{}  
				
	function getRow(rflag,rcode,rcountry,rcontinent,rarea,rpopulation,rcapital){
		var flag=document.createElement("td");
		flag.appendChild(getImg("./flags/"+rflag+".png","",20,35));
		row.appendChild(flag);

		var code=document.createElement("td");
		var text=document.createTextNode(rcode);
		code.appendChild(text);
		row.appendChild(code);

		var country=document.createElement("td");
		var name=document.createTextNode(rcountry);
		country.appendChild(name);
		row.appendChild(country);

		var continent=document.createElement("td");
		var place=document.createTextNode(rcontinent);
		continent.appendChild(place);
		row.appendChild(continent);

		var area=document.createElement("td");
		var size=document.createTextNode(rarea);
		area.appendChild(size);
		row.appendChild(area);

		var population=document.createElement("td");
		var count=document.createTextNode(rpopulation);
		population.appendChild(count);
		row.appendChild(population);

		var capital=document.createElement("td");
		var location=document.createTextNode(rcapital);
		capital.appendChild(location);
		row.appendChild(capital);
		return row;
	} //function getRow{}

	function getImg(url,alt,height,width){
		var image=document.createElement("img");
		image.setAttribute("src",url);
		image.setAttribute("alt",alt);
		image.setAttribute("height",height);
		image.setAttribute("width",width);
	return image;
	}  //function getImg{}
} //window.onload{}


