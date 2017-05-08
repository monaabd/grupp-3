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
 }
    

let yt = document.getElementById("yt");
let iframe = document.getElementById("iframe");
                           
let url  = "https://www.googleapis.com/youtube/v3/search?part=snippet";
    url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";
    url += "&q=play+with+your+cat";
let source = "https://www.youtube.com/embed/";
                           
let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(event) {

    
    if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!")
        
        var data = JSON.parse(ajax.responseText);
        console.log(data);
        console.log(data.items);
        console.log(data.items[0]);
        console.log(ajax.responseText);
        }
    
     let cat = {
        videoId: "scxVFWyuai0"
      }

console.log(source + cat.videoId);     
iframe.innerHTML = `<iframe width="320" height="240" class="play" src="${source + cat.videoId}" frameborder="0"></iframe>`;                       
}

    
ajax.open("GET", url);
ajax.send();*/

/*********React********/

class YouTube extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      source: "https://www.youtube.com/embed/",
      //query: "",
      videos: []
    }
  }

  showPlay(event){
    let ajax = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet";
        url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";
        url += "&q=play+with+your+cat";
    ajax.open("GET", url);
    ajax.onreadystatechange = (function(event) {

      if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!");

        let data = JSON.parse(ajax.responseText);
        console.log(data);
        //console.log(ajax.responseText);
        let videos = data.items;
        this.setState({
          videos: videos
          //query: "&q=play+with+your+cat"
        })
      }
    }).bind(this);
    ajax.send();
  }

  showFeed(event){
    let ajax = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet";
        url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";
        url += "&q=feed+your+cat";
    ajax.open("GET", url);
    ajax.onreadystatechange = (function(event) {

      if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!");

        let data = JSON.parse(ajax.responseText);
        console.log(data);
        console.log(ajax.responseText);
        let videos = data.items;
        this.setState({
          videos: videos
          //query: "&q=feed+your+cat"
        })
      }
    }).bind(this);
    ajax.send();
  }

  showTrain(event){
    let ajax = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet";
        url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";
        url += "&q=train+your+cat";
    ajax.open("GET", url);
    ajax.onreadystatechange = (function(event) {

      if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!");

        let data = JSON.parse(ajax.responseText);
        console.log(data);
        console.log(ajax.responseText);
        let videos = data.items;
        console.log(videos);
        this.setState({
          videos: videos
          //query: "&q=train+your+cat"
        })
      }
    }).bind(this);
    ajax.send();
  }
  
  render() {
    return(
      <div>
        <Buttons 
          handlePlay={this.showPlay} 
          handleFeed={this.showFeed} 
          handlePlay={this.showPlay}/>
        
        <Video 
        source={this.state.source}
        videoId={this.state.videos[0].id.videoId}
        />
        <Video 
          source={this.state.source}
          videoId={this.state.videos[1].id.videoId}
        />
        <Video 
          source={this.state.source}
          videoId={this.state.videos[2].id.videoId}
        />
      </div>
    )
  }
}

class Buttons extends React.Component {
  render() {
    return(
      <div>
        <button className="play" onClick={this.props.handlePlay}>Play with your cat</button>
        <button className="feed" onClick={this.props.handleFeed}>Feed your cat</button>
        <button className="train" onClick={this.props.handleTrain}>Train your cat</button>
      </div>
    )
  }
}

class Video extends React.Component {
  render(){
    return(
      <iframe 
        width="320" 
        height="240" 
        class="play" 
        src={this.props.source + this.props.videoId}
        frameborder="0" />
    )
  }
}


ReactDOM.render(
<YouTube />,
  document.getElementById("yt")
)