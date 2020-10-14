
//Back to top functions
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 90) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


// Help button functions.
function openHelp() {
    document.querySelector(".help-box").style.display = "block";
    document.querySelector(".help").style.display = "none";
    document.querySelector(".close").style.display = "block";
  
  }
  
  function closeHelp() {
    document.querySelector(".help-box").style.display = "none";
    document.querySelector(".help").style.display = "block";
    document.querySelector(".close").style.display = "none";
  }


  // login logout
  let name = null;
  function LogIn() {
    loginid = document.querySelector(".login-input").value
      if(loginid === ""){
        loginid = document.querySelector(".login-input").value
          document.querySelector(".please").style.color = "#e90a0a"
          document.querySelector(".login-input").style.borderColor = "#e90a0a"
      }else{
        personselect(loginid);
    document.querySelector(".logIn-btn").style.display = "none";
    document.querySelector(".logOut-btn").style.display = "inline-block";
    document.querySelector(".login-input").style.display = "none";
    document.querySelector(".welcome").innerHTML = "Welcome " + name + "!"
    document.querySelector(".login-input").value = "";
    document.querySelector(".Landing-content").style.display = "none";
    document.querySelector(".left-bar").style.display = "block";
    document.querySelector(".main-content").style.display = "block";
    
    }
    

  }

  function LogOut() {
    document.querySelector(".login-input").style.borderColor = "black"
    document.querySelector(".logOut-btn").style.display = "none";
    document.querySelector(".logIn-btn").style.display = "inline-block";
    document.querySelector(".login-input").style.display = "inline-block";
    document.querySelector(".please").style.display = "block";
    document.querySelector(".welcome").innerHTML = null;
  }

//





// functions to display inputfields in komplettera

  function utbInput() {
    if (document.getElementById("tidutb-sel").value == "Utlänsk utbildning") {
      document.getElementById("utb-input").style.display = "inline-block"
    } else {
      document.getElementById("utb-input").style.display = "none"
    }
  }


  function utbInput() {
    if (document.getElementById("tidutb-sel").value == "Utlänsk utbildning") {
      document.getElementById("utb-input").style.display = "inline-block"
    } else {
      document.getElementById("utb-input").style.display = "none"
    }
  }


  function nuvSysInput() {
    if (document.getElementById("sys-sel").value == "Annat") {
      document.getElementById("annat-input").style.display = "inline-block"
      document.getElementById("stud-input").style.display = "none"
    } else if (document.getElementById("sys-sel").value == "Studerar"){
      document.getElementById("stud-input").style.display = "inline-block"
      document.getElementById("annat-input").style.display = "none"
    } else {
      document.getElementById("annat-input").style.display = "none"
      document.getElementById("stud-input").style.display = "none"
    }
  }

  function utbSysInput() {
    if (document.getElementById("utbsys-sel").value == "Välj") {
      document.getElementById("kurs-input").style.display = "none"
      document.getElementById("yrke-input").style.display = "none"
    } else if (document.getElementById("utbsys-sel").value == "Prövning"){
      document.getElementById("kurs-input").style.display = "inline-block"
      document.getElementById("yrke-input").style.display = "none"
    } else {
      document.getElementById("kurs-input").style.display = "none"
      document.getElementById("yrke-input").style.display = "inline-block"
    }
  }
   
  // calender
  
    x = document.createElement("INPUT");
    x.setAttribute("type", "date");
    x.setAttribute("value", "2020-01-01");
    document.getElementById("startdatum").appendChild(x);
 

// courses and contact info

    var listUser = [
      {personnummer: "911111-1111", förnamn: "förnamn11",efternamn: "efternamn11",adress: "adress11",coadress: "coaddress11", postnummer: "25111", postadress: "postaddress11",telefon: "111111111",mobil: "111111111",epostadress: "epostadress11@domain.com",epostadress2: "epostadress11@domain.com",hemkommun: "kommun01",modersmål: "English"},
      {personnummer: "911111-1112", förnamn: "förnamn12",efternamn: "efternamn12",adress: "adress12",coadress: "coaddress12", postnummer: "25112", postadress: "postaddress12",telefon: "111111112",mobil: "111111112",epostadress: "epostadress12@domain.com",epostadress2: "epostadress12@domain.com",hemkommun: "kommun02",modersmål: "Arabic"},
      {personnummer: "911111-1113", förnamn: "förnamn13",efternamn: "efternamn13",adress: "adress13",coadress: "coaddress13", postnummer: "25113", postadress: "postaddress13",telefon: "111111113",mobil: "111111113",epostadress: "epostadress13@domain.com",epostadress2: "epostadress13@domain.com",hemkommun: "kommun01",modersmål: "Chinese"},
      {personnummer: "911111-1114", förnamn: "förnamn14",efternamn: "efternamn14",adress: "adress14",coadress: "coaddress14", postnummer: "25114", postadress: "postaddress14",telefon: "111111114",mobil: "111111114",epostadress: "epostadress14@domain.com",epostadress2: "epostadress14@domain.com",hemkommun: "kommun02",modersmål: "Turkish"},
      {personnummer: "911111-1115", förnamn: "förnamn15",efternamn: "efternamn15",adress: "adress15",coadress: "coaddress15", postnummer: "25115", postadress: "postaddress15",telefon: "111111115",mobil: "111111115",epostadress: "epostadress15@domain.com",epostadress2: "epostadress15@domain.com",hemkommun: "kommun03",modersmål: "Hindi"},
      {personnummer: "911111-1116", förnamn: "förnamn16",efternamn: "efternamn16",adress: "adress16",coadress: "coaddress16", postnummer: "25116", postadress: "postaddress16",telefon: "111111116",mobil: "111111116",epostadress: "epostadress16@domain.com",epostadress2: "epostadress16@domain.com",hemkommun: "kommun04",modersmål: "Tamil"},
      {personnummer: "911111-1117", förnamn: "förnamn17",efternamn: "efternamn17",adress: "adress17",coadress: "coaddress17", postnummer: "25117", postadress: "postaddress17",telefon: "111111117",mobil: "111111117",epostadress: "epostadress17@domain.com",epostadress2: "epostadress17@domain.com",hemkommun: "kommun05",modersmål: "French"},
      {personnummer: "911111-1118", förnamn: "förnamn18",efternamn: "efternamn18",adress: "adress18",coadress: "coaddress18", postnummer: "25118", postadress: "postaddress18",telefon: "111111118",mobil: "111111118",epostadress: "epostadress18@domain.com",epostadress2: "epostadress18@domain.com",hemkommun: "kommun06",modersmål: "German"},
      {personnummer: "911111-1119", förnamn: "förnamn19",efternamn: "efternamn19",adress: "adress19",coadress: "coaddress19", postnummer: "25119", postadress: "postaddress19",telefon: "111111119",mobil: "111111119",epostadress: "epostadress19@domain.com",epostadress2: "epostadress19@domain.com",hemkommun: "kommun03",modersmål: "Swedish"},
      {personnummer: "911111-1120", förnamn: "förnamn20",efternamn: "efternamn20",adress: "adress20",coadress: "coaddress20", postnummer: "25120", postadress: "postaddress20",telefon: "111111120",mobil: "111111120",epostadress: "epostadress20@domain.com",epostadress2: "epostadress20@domain.com",hemkommun: "kommun04",modersmål: "Arabic"},
      {personnummer: "911111-1121", förnamn: "förnamn21",efternamn: "efternamn21",adress: "adress21",coadress: "coaddress21", postnummer: "25121", postadress: "postaddress21",telefon: "111111121",mobil: "111111121",epostadress: "epostadress21@domain.com",epostadress2: "epostadress21@domain.com",hemkommun: "kommun05",modersmål: "English"},
      {personnummer: "911111-1122", förnamn: "förnamn22",efternamn: "efternamn22",adress: "adress22",coadress: "coaddress22", postnummer: "25122", postadress: "postaddress22",telefon: "111111122",mobil: "111111122",epostadress: "epostadress22@domain.com",epostadress2: "epostadress22@domain.com",hemkommun: "kommun06",modersmål: "Polish"},
      {personnummer: "911111-1123", förnamn: "förnamn23",efternamn: "efternamn23",adress: "adress23",coadress: "coaddress23", postnummer: "25123", postadress: "postaddress23",telefon: "111111123",mobil: "111111123",epostadress: "epostadress23@domain.com",epostadress2: "epostadress23@domain.com",hemkommun: "kommun01",modersmål: "Swedish"},
      {personnummer: "911111-1124", förnamn: "förnamn24",efternamn: "efternamn24",adress: "adress24",coadress: "coaddress24", postnummer: "25124", postadress: "postaddress24",telefon: "111111124",mobil: "111111124",epostadress: "epostadress24@domain.com",epostadress2: "epostadress24@domain.com",hemkommun: "kommun02",modersmål: "English"},
      {personnummer: "911111-1125", förnamn: "förnamn25",efternamn: "efternamn25",adress: "adress25",coadress: "coaddress25", postnummer: "25125", postadress: "postaddress25",telefon: "111111125",mobil: "111111125",epostadress: "epostadress25@domain.com",epostadress2: "epostadress25@domain.com",hemkommun: "kommun03",modersmål: "Swedish"}
  ];
  var listCourse = [
      {grupp: "särskilt" ,kurs: "Stöd AD", skol: "Vuxenutbildningen", kurskod: "STA", skolkurskod: "Stöd - diagnos",           år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 0, studietakt: "Dag"},
      {grupp: "särskilt", kurs: "Stöd dy", skol: "Vuxenutbildningen", kurskod: "DYD", skolkurskod: "Stöd - läs o skriv",       år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 0, studietakt: "Dag"},
      {grupp: "särskilt", kurs: "Stöd ma", skol: "Vuxenutbildningen", kurskod: "DYM", skolkurskod: "Stöd - matematik",         år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 0, studietakt: "Dag"},
      {grupp: "särskilt" ,kurs: "Stöd med",skol: "Vuxenutbildningen", kurskod: "STM", skolkurskod: "Stöd - medicinska hinder", år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 0, studietakt: "Dag"},
      {grupp: "sva grund", kurs: "Svenska som andraspråk",skol: "Komvux Helsingborg",kurskod: "GRNSVA2",skolkurskod: "KH GRNSVA2 KV",år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 700,studietakt: "Kväll"},
      {grupp: "sva grund", kurs: "Svenska som andraspråk",skol: "Komvux Helsingborg",kurskod: "GRNSVA2",skolkurskod: "KH GRNSVA2 DG",år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 700,studietakt: "Dag"},
      {grupp: "sva grund", kurs: "Svenska som andraspråk",skol: "Everystep",kurskod: "GRNSVA2",skolkurskod: "EV GRNSVA2 KV",år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 700,studietakt: "Kväll"},
      {grupp: "sva grund", kurs: "Svenska som andraspråk",skol: "Everystep",kurskod: "GRNSVA2",skolkurskod: "EV GRNSVA2 DI",år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 700,studietakt: "Distans"},
      {grupp: "sva grund", kurs: "Svenska som andraspråk",skol: "Everystep",kurskod: "GRNSVA2",skolkurskod: "EV GRNSVA2 DG",år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 700,studietakt: "Dag"},
      {grupp: "gndårs7-9dag", kurs: "Engelska",skol: "Komvux Helsingborg",kurskod: "GRNENG2",skolkurskod: "KH GRNENG2",år: 2020, fråntilldatum: "26 Oct 2020 - 3 Jan 2021", poang: 600,studietakt: "Dag"},
      {grupp: "gndårs7-9dag", kurs: "Matematik",skol: "Komvux Helsingborg",kurskod: "GRNMAT2",skolkurskod: "KH GRNMAT2",år: 2020, fråntilldatum: "26 Oct 2020 - 3 Jan 2021", poang: 450,studietakt: "Dag"},
      {grupp: "gndårs7-9dag", kurs: "Svenska",skol: "Komvux Helsingborg",kurskod: "GRNSVE2",skolkurskod: "KH GRNSVE2",år: 2020, fråntilldatum: "26 Oct 2020 - 3 Jan 2021", poang: 700,studietakt: "Dag"},
      {grupp: "gndårs7-9kväll", kurs: "Engelska",skol: "Komvux Helsingborg",kurskod: "GRNENG2",skolkurskod: "KH GRNENG2 kv",år: 2020, fråntilldatum: "26 Oct 2020 - 3 Jan 2021", poang: 100,studietakt: "Kväll"},
      {grupp: "gymnasienivå", kurs: "Biologi 1",skol: "Komvux Helsingborg",kurskod: "BIOBIO01",skolkurskod: "KH BIOBIO01",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Biologi 2",skol: "Komvux Helsingborg",kurskod: "BIOBIO02",skolkurskod: "KH BIOBIO02",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Engelska 5",skol: "Komvux Helsingborg",kurskod: "ENGENG05",skolkurskod: "KH ENGENG05",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Engelska 6",skol: "Komvux Helsingborg",kurskod: "ENGENG06",skolkurskod: "KH ENGENG06 10 v",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Engelska 6",skol: "Komvux Helsingborg",kurskod: "ENGENG06",skolkurskod: "KH ENGENG06",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Engelska 7",skol: "Komvux Helsingborg",kurskod: "ENGENG07",skolkurskod: "KH ENGENG07",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Filosofi 1",skol: "Komvux Helsingborg",kurskod: "FIOFIO01",skolkurskod: "KH FIOFIO01",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 50,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Geografi 1",skol: "Komvux Helsingborg",kurskod: "GEOGEO01",skolkurskod: "KH GEOGEO01",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Historia 1a2",skol: "Komvux Helsingborg",kurskod: "HISHIS01a2",skolkurskod: "KH HISHIS01a2",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 50,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Historia 1b",skol: "Komvux Helsingborg",kurskod: "HISHIS01b",skolkurskod: "KH HISHIS01b",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Historia 2a",skol: "Komvux Helsingborg",kurskod: "HISHIS02a",skolkurskod: "KH HISHIS02a",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Matematik 1a",skol: "Komvux Helsingborg",kurskod: "MATMAT01a",skolkurskod: "KH MATMAT01a",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Matematik 1b",skol: "Komvux Helsingborg",kurskod: "MATMAT01b",skolkurskod: "KH MATMAT01b",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Matematik 1c",skol: "Komvux Helsingborg",kurskod: "MATMAT01c",skolkurskod: "KH MATMAT01c",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Matematik 2a",skol: "Komvux Helsingborg",kurskod: "MATMAT02a",skolkurskod: "KH MATMAT02a",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Matematik 2b",skol: "Komvux Helsingborg",kurskod: "MATMAT02b",skolkurskod: "KH MATMAT02b",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Matematik 2c",skol: "Komvux Helsingborg",kurskod: "MATMAT02c",skolkurskod: "KH MATMAT02c",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Moderna språk 2, Arabiska",skol: "Komvux Helsingborg",kurskod: "MODARA02",skolkurskod: "KH MODARA02",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Moderna språk 4, Arabiska",skol: "Komvux Helsingborg",kurskod: "MODARA04",skolkurskod: "KH MODARA04",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Naturkunskap 1a2",skol: "Komvux Helsingborg",kurskod: "NAKNAK01a2",skolkurskod: "KH NAKNAK01a2",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 50,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Naturkunskap 1b",skol: "Komvux Helsingborg",kurskod: "NAKNAK01b",skolkurskod: "KH NAKNAK01b",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Naturkunskap 2",skol: "Komvux Helsingborg",kurskod: "NAKNAK02",skolkurskod: "KH NAKNAK02",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Psykologi 2a",skol: "Komvux Helsingborg",kurskod: "PSKPSY02a",skolkurskod: "KH PSKPSY02a",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 50,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Religionskunskap 1",skol: "Komvux Helsingborg",kurskod: "RELREL01",skolkurskod: "KH RELREL01",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 50,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Samhällskunskap 1a2",skol: "Komvux Helsingborg",kurskod: "SAMSAM01a2",skolkurskod: "KH SAMSAM01a2",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 50,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Samhällskunskap 1b",skol: "Komvux Helsingborg",kurskod: "SAMSAM01b",skolkurskod: "KH SAMSAM01b",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Samhällskunskap 2",skol: "Komvux Helsingborg",kurskod: "SAMSAM02",skolkurskod: "KH SAMSAM02",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska 1",skol: "Komvux Helsingborg",kurskod: "SVESVE01",skolkurskod: "KH SVESVE01",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska 2",skol: "Komvux Helsingborg",kurskod: "SVESVE02",skolkurskod: "KH SVESVE02",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska 3",skol: "Komvux Helsingborg",kurskod: "SVESVE03",skolkurskod: "KH SVESVE03",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska som andraspråk 1",skol: "Komvux Helsingborg",kurskod: "SVASVA01",skolkurskod: "KH SVASVA01",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska som andraspråk 2",skol: "Komvux Helsingborg",kurskod: "SVASVA02",skolkurskod: "KH SVASVA02",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska som andraspråk 3",skol: "Komvux Helsingborg",kurskod: "SVASVA03",skolkurskod: "KH SVASVA03",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "gymnasienivå", kurs: "Svenska som andraspråk 3",skol: "Komvux Helsingborg",kurskod: "SVASVA03",skolkurskod: "KH SVASVA03 10 v",år: 2020, fråntilldatum: "26 Oct 2020 - 1 Jan 2021", poang: 100,studietakt: "Dag"},
      {grupp: "SFI-BAS", kurs: "SFI BAS (matematik och samhällskunskap)",skol: "Komvux Helsingborg",kurskod: "8SFI",skolkurskod: "ANSÖKAN SFI BAS aug",år: 2020, fråntilldatum: "2 Nov 2020 - 3 Jan 2021", poang: 0,studietakt: "Dag"},
      {grupp: "sva grund", kurs: "Svenska som andraspråk",skol: "Eductus",kurskod: "GRNSVA2",skolkurskod: "ED GRNSVA2 DI",år: 2020, fråntilldatum: "30 Dec 2019 - 3 Jan 2021", poang: 700,studietakt: "Distans"},
      {grupp: "Bygganlägg", kurs: "BygganläggYV",skol: "Rönnowska skolan",kurskod: "11ByaYV",skolkurskod: "Bygg-Anläggning Nov YV",år: 2020, fråntilldatum: "30 Nov 2020 - 3 Jan 2021", poang: 0,studietakt: "Dag"},
      {grupp: "Bygg-Trä", kurs: "Bygg-träarbetare NOV YV",skol: "Rönnowska skolan",kurskod: "11BytYV",skolkurskod: "Bygg-träarbet NOV YV",år: 2020, fråntilldatum: "30 Nov 2020 - 3 Jan 2021", poang: 0,studietakt: "Dag"},
      {grupp: "vård", kurs: "11 Vård- o Omsorg sva",skol: "Hermods",kurskod: "11Osva",skolkurskod: "OMV sva NOV",år: 2020, fråntilldatum: "9 Nov 2020 - 3 Jan 2021", poang: 0,studietakt: "Dag"},
      {grupp: "nätverk", kurs: "Nätverkstekniker",skol: "Movant AB",kurskod: "11Nät",skolkurskod: "Nätverkstekniker",år: 2020, fråntilldatum: "30 Nov 2020 - 3 Jan 2021", poang: 0,studietakt: "Dag"},
      {grupp: "målare", kurs: "Målare",skol: "Movant AB",kurskod: "11Mål",skolkurskod: "Målare",år: 2020, fråntilldatum: "30 Nov 2020 - 3 Jan 2021", poang: 0,studietakt: "Dag"}
  ];
  var varukorg = new Stack([]);
  var shortList = "";
  
  function btnselect(btnid, schoolcoursecode) {
      var buttonid="button"+btnid.toString();
      var table = document.getElementById("korg");
      var row = table.insertRow(table.length);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
  
      varukorg.push(schoolcoursecode);
      document.getElementById(buttonid).disabled = true;
      cell1.innerHTML = shortList[btnid].skolkurskod;
      cell2.innerHTML = shortList[btnid].poang;
      cell3.innerHTML = "<input type=\"button\" value=\"🗑️\" id=\"trash\" onclick=\"deletekorg(\'"+shortList[btnid].skolkurskod+"\',\'"+buttonid +"\')\">";
  }
  
  // Function to delete the row from the varukorg table and array
  function deletekorg(code,btn) {
      var korgArray = varukorg.getBuffer();
  
      for( var i = 0; i < korgArray.length; i++) {
          if ( korgArray[i] == code) {
              document.getElementById(btn).disabled = false;
              document.getElementById("korg").deleteRow(i);
              varukorg.splice(i,1);
              korgArray.splice(i,1);
              break;
          }
      }
  }
      
  // Fill in the Personal Info tab based on the Personal Number
  function personselect(personId) {
      var tempObj = {};
  
      for (let i=0; i < listUser.length; i++) {
          tempObj = listUser[i];
          if (tempObj.personnummer == personId) {
              document.getElementById("pers-id").innerHTML = tempObj.personnummer;
              document.getElementById("fname").innerHTML = tempObj.förnamn;
              document.getElementById("lname").innerHTML = tempObj.efternamn;
              document.getElementById("adress").innerHTML = tempObj.adress;
              document.getElementById("coadress").innerHTML = tempObj.coadress;
              document.getElementById("postnummer").innerHTML = tempObj.postnummer;
              document.getElementById("postadress").innerHTML = tempObj.postadress;
              document.getElementById("telefon").value = tempObj.telefon;
              document.getElementById("mobil").value = tempObj.mobil;
              document.getElementById("epost1").value = tempObj.epostadress;
              document.getElementById("epost2").value = tempObj.epostadress2;
              document.getElementById("kommun").innerHTML = tempObj.hemkommun;
              setSelectedIndex(document.getElementById("modersmål"), tempObj.modersmål);
              name = tempObj.förnamn + " " +  tempObj.efternamn;
              return;
          }
      }
      return;
  }
  //  Function to set the selected option in language selection dropdown list
  function setSelectedIndex(s, valsearch) {
      // Loop through all the items in drop down list
      for (i = 0; i< s.options.length; i++) { 
          if (s.options[i].innerHTML == valsearch)
          {
              // Item is found. Set its property and exit
              s.options[i].selected = true;
              break;
          }
      }
      return;
  }
  
  // Function to shortlist the courses list based on COURSE NAME
  // And display it in the div
  function courseselect(coursecode) {
      shortList = listCourse.filter(minilist => {return minilist.grupp.includes(coursecode);});
      txt = "<table width=100%; border='0'>";
      txt += "<tr><th>Course</th><th>Institution</th><th>Course Code</th><th>Year</th><th>Duration</th><th>Points</th><th>Study Pace</th><th>Select</th></tr>"
  // the next three comments - altered not to display two values
  //    txt += "<tr><th>Group</th><th>Course</th><th>Institution</th><th>Code</th><th>Course Code</th><th>Year</th><th>Duration</th><th>Points</th><th>Study Pace</th><th>Select</th></tr>"
      for (x in shortList) {
          txt += "<tr><td>" //+ shortList[x].grupp + "</td><td>"
                          + shortList[x].kurs + "</td><td>"
                          + shortList[x].skol + "</td><td>"
                          //+ shortList[x].kurskod + "</td><td>"
                          + shortList[x].skolkurskod + "</td><td>"
                          + shortList[x].år + "</td><td>"
                          + shortList[x].fråntilldatum + "</td><td>"
                          + shortList[x].poang + "</td><td>"
                          + shortList[x].studietakt + "</td><td>"
                          + "<input type=\"button\" value=\"Select\" id=\"button"+x.toString()+"\" onclick=\"btnselect("+x+", \'"+shortList[x].skolkurskod+"\')\">" +"</td></tr>"
      }
      txt += "</table>";
      document.getElementById("courses").innerHTML = txt;
  }
  
  // stack handling
  function Stack(array) {
      this.array = [];
      if (array) this.array = array;
  }
  
  Stack.prototype.getBuffer = function() {return this.array.slice();}
  
  Stack.prototype.peak = function() {return this.array[this.array.length - 1];}
  
  Stack.prototype.pop = function() {return this.array.pop();}
  
  Stack.prototype.push = function(value) {this.array.push(value);}
  
  Stack.prototype.splice = function(value,count) {this.array.splice(value,count);}
  
  Stack.prototype.isEmpty = function() {return this.array.length == 0;}
  
  function stackSearch(sstack, element) {
      var bufferArray = sstack.getBuffer();
  
      var bufferStack = new Stack(bufferArray)
  
      while (!bufferStack.isEmpty()) {
          console.log(bufferStack.peak(), element);
          if (bufferStack.pop() == element) {
              return true;
          }
      }
  }
  

  //Aktuella utbildningar divs opens
  function showDiv() {
    var mainbutton = document.getElementById("main-container");
    if(mainbutton.style.display == "none") {
      mainbutton.style.display = "block";
    } else {
      mainbutton.style.display = "none";
    }
}



 function exitDiv() {
  document.getElementById("main-container").style.display = "none";
}


 function togglediv(id) {
  document.querySelectorAll(".open").forEach(function(div) {
    if (div.id == id) {
      div.style.display = div.style.display == "none" ? "block" : "none";
    } else {
      div.style.display = "none";
    }
  });
}



/* Gå vidare left-bar button */

function Gavidare() {
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".non-nav-content").style.display = "block";
  document.querySelector(".komplettera-content").style.display = "block";
  document.querySelector(".gå-vidare").style.display = "none";
  document.querySelector(".tillbaka-korg").style.display = "block";
}

function tillbakakorg() {
  document.querySelector(".main-content").style.display = "block";
  document.querySelector(".non-nav-content").style.display = "none";
  document.querySelector(".komplettera-content").style.display = "none";
  document.querySelector(".gå-vidare").style.display = "block";
  document.querySelector(".tillbaka-korg").style.display = "none";
  document.querySelector(".info-container").style.display = "none";
}

function komplnästabtn() {
  document.querySelector(".komplettera-content").style.display = "none";
  document.querySelector(".info-container").style.display = "block";
}


function kontaktföregående() {
  document.querySelector(".komplettera-content").style.display = "block";
  document.querySelector(".info-container").style.display = "none";
}

function kontaktnästabtn() {
 /* document.querySelector(".info-container").style.display = "none"; */
}

function visastudieplan() {
  var a = document.querySelector(".nav-studyplan").style.display 
  if (a == "none"){
  document.getElementById("output").style.display = "block";
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".left-bar").style.display = "none";
  document.querySelector(".non-nav-content").style.display = "none";
  document.querySelector(".nav-studyplan").style.display = "block";
} else {
  document.getElementById("output").style.display = "none";
  document.querySelector(".main-content").style.display = "block";
  document.querySelector(".left-bar").style.display = "block";
  document.querySelector(".non-nav-content").style.display = "none";
  document.querySelector(".nav-studyplan").style.display = "none";

}
}