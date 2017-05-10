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
      videos: [],
      id: "",
    }
    this.showPlay = this.showPlay.bind(this);
    this.showFeed = this.showFeed.bind(this);
    this.showTrain = this.showTrain.bind(this);
   
  }
    
  
  showPlay(event){
     
    let ajax = new XMLHttpRequest();
    let url  = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=play+with+your+cat";
        url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";
    
    console.log("URL: " + url);

    ajax.open("GET", url);
    ajax.onreadystatechange = (function(event) {

      if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!");
        let data = JSON.parse(ajax.responseText);

        console.log(data);
        //console.log(ajax.responseText);
        let videos = data.items;
        console.log(videos);
        let mappedVideos = videos.map(function(video) {
          return {id: video.id.videoId}
        });
        console.log("Mapped Vids: ",mappedVideos);
        this.setState({

          videos: mappedVideos
        });

        }
      }).bind(this);
    ajax.send();
  }

  showFeed(event){
    let ajax = new XMLHttpRequest();

    let url  = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=feed+your+cat";
        url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";

    ajax.open("GET", url);
    ajax.onreadystatechange = (function(event) {

      if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!");

        let data = JSON.parse(ajax.responseText);
        console.log(data);
        console.log(ajax.responseText);
        let videos = data.items;
                                                               
        console.log("Data.items: ", data.items);
        this.setState({
          videos: mappedVideos
        })
      }
    }).bind(this);
    ajax.send();
  }

  showTrain(event){
    let ajax = new XMLHttpRequest();
    let url  = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=train+your+cat";
        url += "&key=AIzaSyAx0VK9xWs4v-gREmhfa1vlUXI_RUtcLaI";

    ajax.open("GET", url);
    ajax.onreadystatechange = (function(event) {

      if(ajax.readyState == 4 && ajax.status == 200 ){
        console.log("Success!");

        let videos = data.items;
        console.log(videos);
        let mappedVideos = videos.map(function(video) {
          return {id: video.id.videoId}
        });
        console.log("Mapped Vids: ",mappedVideos);
        this.setState({
          videos: mappedVideos
        });
      }
    }).bind(this);
    ajax.send();
  }
    
render() {
  console.log('render: state', this.state);
  
  if (this.state.videos.length >= 1){

    return(
      <div>
      {/*<button id="play" onClick={this.showPlay}>Play with your cat</button>
        <button id="feed" onClick={this.showFeed}>Feed your cat</button>
      <button id="train" onClick={this.showTrain}>Train your cat</button>*/}

      <Video 
        source={this.state.source}
        id={this.state.videos[0].id}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Video 
        source={this.state.source}
        id={this.state.videos[1].id}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Video 
        source={this.state.source}
        id={this.state.videos[2].id}
        />
      </div>
        )
  }
  else 
    return(
      <div> 
      <button id="playBtn" onClick={this.showPlay}>Watch cat videos!</button>
        {/*<button id="feed" onClick={this.showFeed}>Feed your cat</button>
      <button id="train" onClick={this.showTrain}>Train your cat</button>*/}
      </div>
        )
    }    
  }


class Video extends React.Component {
  render(){
    console.log('React Video id: '+this.props.id);
    return(
      <iframe 
        width="320" 
        height="240" 
        className="play" 
        src={this.props.source + this.props.id}
        frameBorder="0" />

    )
  }
}


ReactDOM.render(
    <YouTube/>,
  document.getElementById("yt")
