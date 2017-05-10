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
      <button id="play" onClick={this.showPlay}>Play with your cat</button>
        {/*<button id="feed" onClick={this.showFeed}>Feed your cat</button>
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
  document.getElementById("yt"))