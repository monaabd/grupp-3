

//baskomponent, skall rendera componenterna:
//Weather
//CatFact
//Yt
//Lists
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFact: ''
    };
    this.showFact = this.showFact.bind(this);
  }

  showFact() {
    console.log('before');
    let ajax = new XMLHttpRequest();
    let url = 'http://catfacts-api.appspot.com/api/facts';
    ajax.open('get', url);
    ajax.onreadystatechange = (function() {
      if(ajax.status == 200 && ajax.readyState == 4) {
        let response = JSON.parse(ajax.responseText)
        let fact = response.facts[0];
        console.log(`fact: ${fact}`);
        this.setState({
          currentFact: fact
        })
      }
    }).bind(this);
    ajax.send();
    console.log('after');

  }
  



  render() {
    return(
      <CatFact handleClick={this.showFact} currentFact={this.state.currentFact} />
    )
  }
}

class CatFact extends React.Component {
  render() {
    return(
      <div id="facts">
        <h3>Facts</h3>
        <button onClick={this.props.handleClick}>Show something else</button>
        <p>{this.props.currentFact}</p>
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);