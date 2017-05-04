window.onload = function(){ "use strict";
                           


/*let addYourName = document.getElementById("addYourName");    
let addCatName = document.getElementById("addCatName");
let addColor = document.getElementById("addColor");
let addBreed = document.getElementById("addBreed");
let addImg = document.getElementById("addImg");
let addBtn = document.getElementById("add");                         
let table = document.getElementById("table");
let sortBtn = document.getElementById("sortBtn");
let find = document.getElementById("select");                           
let totalCats = 0;

/***Event listeners*** 
                           
addBtn.addEventListener("click", function(event){
    saveToFirebase();
    addProductToTable();
});  
                           
sortBtn.addEventListener("click", function(event){
    limitToYourName();
    
})                           
                                        
                         
/***Functions***  
getAndWrite();                         
                         
function saveToFirebase(){ 
    let object = {
        submitter: addYourName.value,
        catName: addCatName.value,
        catColor: addColor.value,
        catBreed: addBreed.value,
        catPhoto: addImg.value,
        id: totalCats
    }
    
    firebase.database().ref("cats/" + totalCats).set(object);
    addYourName.value = "";
    addCatName.value = ""; 
    addColor.value = ""; 
    addBreed.value = "";
    addImg.value = "";
};
                         
 function getAndWrite(){                           
    firebase.database().ref("cats/").on("value", function(snapshot) {
        let data = snapshot.val();
        totalCats = data.length;
        table.innerHTML = "";
        addProductToTable(data);
    })
};                        
    
function addProductToTable(data) { //Funktion som lägger till inputvalue i tabellen
    for (let object in data) {
    let tr = document.createElement("tr");
    tr.innerHTML = "<td>" + data[object].YourName + "<td>" + data[object].catName + "<td>" + data[object].color + "<td>" + data[object].breed + "<td>" + "<img src=" + data[object].img + ">";
    table.appendChild(tr);
    console.log("Tillagt i tabellen");
        }
    
    };
                           
 function sortByYourName() {
    table.innerHTML = "";
	   firebase.database().ref("cats/").orderByChild("YourName").once("value", function(snapshot){
        snapshot.forEach( YourNameRef => {
	addToTable(YourNameRef.val());  
        })
    })
    console.log("Sorted by name.");   
 }
                           
 function addToTable(data){
    let newTr = document.createElement("tr");
    newTr.innerHTML = "<td>" + data.submitter + "<td>" + data.catName + "<td>" + data.catBreed + "<td>" + data.catColor + "<td>" + "<img src=" + data.catPhoto + ">";
    table.appendChild(newTr);
}
                           
//Limitera att endast visa de objekt som jag sökt på
function limitToYourName(){
    table.innerHTML = "";
    let sort = find.value;
    
    if(sort != ""){
        firebase.database().ref("cats/").orderByChild("sumbitter").on("value", function(snapshot){
            snapshot.forEach(catRef => {
                addToTable(catRef.val());
                
            })
        })      
    }     
    console.log("Ordered by name " + find.value);
    }
 function limitToYourName(){
    table.innerHTML = "";
     
let myVariableDependingOnInput = find.value;
firebase.database().ref("cats/").orderByChild().limitToFirst(myVariableDependingOnInput)
    .once("value", function(snapshot) {
	snapshot.forEach( catRef => {
		addToTable(catRef.val());
	})
});
 }*/
 
      var tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
          height: "390",
          width: "640",
          videoId: "scxVFWyuai0",
          events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player"s state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 1000000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

}
                           