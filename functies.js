function kop() {
 	// bepalen eigen filenaam en volgende en vorige pagina.
 	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	var nummer = filename.slice(3,4);
	//console.log("Het is: " + nummer);
	var volgende = parseInt(nummer) + 1;
	if (volgende>40) volgende=40;
	var vorige = parseInt(nummer) - 1;
	if (vorige<1) vorige = 1;
	var volgendePagina = "git" + volgende.toString() +  ".html";
	var vorigePagina = "git" + vorige.toString() +  ".html";
	//alert(filename);
	if (filename=="index.html") {
		volgendePagina = "git1.html";
		vorigePagina = "index.html";
	} else if (filename=="git1.html"){
		vorigePagina = "index.html";
	}
	
	// Als volgende pagina niet bestaat verwijst die pagina naar zichzelf.
	if (!fileExists(volgendePagina)) volgendePagina=filename;
	
 
  var logo = "gitlogo.png";
  var kopTekst = "<img src=\"" + logo + "\" />"+ " &nbsp;&nbsp;&nbsp;&nbsp;<i>aantekeningen</i>";

  var knops = "<br><br><hr><span style=\"text-align: right\" title=\"vorige pagina\"><a class=\"kop\" href=\"" + vorigePagina + "\"><span class=\"knopje\">&lt;</span></a>";
  knops += " <a class=\"kop\"  href=\"index.html\" title=\"Index\"><span class=\"knopje\">*</span></a> ";
  knops += "<a class=\"kop\" href=\""+ volgendePagina + "\" title=\"volgende pagina\"><span class=\"knopje\">&gt;</span></a><hr></span>";
  kopTekst += knops;

  $('header').html(kopTekst);
  //console.log(kopTekst);

  // voettekst aanmaken
  var d = new Date();
  var voetTekst = knops + "<br><h6> &copy;" + d.getFullYear() + " dsf - <a href=\"index.html\">home<\a></h6>";
  $("footer").html(voetTekst);
  
}

// deze functie is leeg, referenties weghalen! tot die tijd zo laten
function voet() {
}

function fileExists(url) {
    if(url){
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status==200;
    } else {
        return false;
    }
}
