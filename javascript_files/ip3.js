function runScript() {
  printTitle();
  getAddress();
  timeModified();
  getDescription();
}

function printTitle() {
  document.getElementById('headingTitle').innerHTML = document.title;
}

function getAddress() {
  document.getElementById('address').innerHTML = document.URL;
}

function timeModified() {
  var x = String(new Date(document.lastModified));
  document.getElementById('modified').innerHTML = x.substring(0, 21);
}

function getDescription() {
  //** Variable declarations **/
  var home = '/test/html/index.html';
  var art = '/test/xml_data_files/art-plain.xml',
    artHTML = '',
    artXSL = '/test/xml_data_files/art.xml';
  var family = '/test/xml_data_files/family-plain.xml',
    familyHTML = '',
    familyXSL = '/test/xml_data_files/family.xml';
  var movies = '/test/xml_data_files/movies-plain.xml',
    moviesHTML = '',
    moviesXSL = '/test/xml_data_files/movies.xml';
  var music = '/test/xml_data_files/music-plain.xml',
    musicHTML = '',
    musicXSL = '/test/xml_data_files/music.xml';
  var verses = '/test/xml_data_files/verses-plain.xml',
    versesHTML = '',
    versesXSL = '/test/xml_data_files/verses.xml';

  if (window.location.pathname != home) {
    //** Creating the XMLHttpRequest Object **/
    if (window.XMLHttpRequest) {
      // Code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else {
      // Code for IE5, IE6
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //** Determining Path **/
    if (
      //** Determining Path - Art **/
      window.location.pathname == artHTML ||
      window.location.pathname == artXSL
    ) {
      //** Creating GET Request for Art XML File **/
      xmlhttp.open('GET', art, false);
    } else if (
      //** Determining Path - Family **/
      window.location.pathname == familyHTML ||
      window.location.pathname == familyXSL
    ) {
      //** Creating GET Request for Family XML File **/
      xmlhttp.open('GET', family, false);
    } else if (
      //** Determining Path - Movies **/
      window.location.pathname == moviesHTML ||
      window.location.pathname == moviesXSL
    ) {
      //** Creating GET Request for Movies XML File **/
      xmlhttp.open('GET', movies, false);
    } else if (
      //** Determining Path - Music **/
      window.location.pathname == musicHTML ||
      window.location.pathname == musicXSL
    ) {
      //** Creating GET Request for Music XML File **/
      xmlhttp.open('GET', music, false);
    } else if (
      //** Determining Path - Verses **/
      window.location.pathname == versesHTML ||
      window.location.pathname == versesXSL
    ) {
      //** Creating GET Request for Verses XML File **/
      xmlhttp.open('GET', verses, false);
    }

    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var desc = xmlDoc.getElementsByTagName('description')[0].childNodes[0]
      .nodeValue;

    var newSpan = document.createElement('span');
    var allDiv = document.getElementsByTagName('div');
    var thirteenthDiv = allDiv[14];

    newSpan.setAttribute('id', 'description');
    newSpan.innerHTML = desc;

    thirteenthDiv.appendChild(newSpan);
  } else {
    if (window.innerWidth <= 1200) {
      alert(
        'New Updates:\nResponsive Design for Smaller Screens.\nRemoved Footer for Smaller Screens.'
      );
    } else {
      alert(
        'New Updates:\n   - Responsive Design for Smaller Screens.\n   - Removed Footer for Smaller Screens.'
      );
    }
  }
}
