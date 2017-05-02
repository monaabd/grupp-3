class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFact: '',
      isLoggedIn: false
    };
    this.showFact = this.showFact.bind(this);
    this.logIn = this.logIn.bind(this);
    this.updateLogInStatus = this.updateLogInStatus.bind(this);
  }

  showFact(event) {
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
  } //ajax cat fact
  
  logIn(event) {
    let provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      //om inloggning lyckas
      console.log('logging in...');
      if(result.user.displayName == 'Louice Danielsson') {
        console.log('sign in ok');
        updateLogInStatus();
      }
    }).catch( function(error) {
      //om inloggningen misslyckas
      console.log(`Error: ${error.code}, ${error.message}`);
    });
  }
  
  updateLogInStatus() {
    console.log('update körs');
    this.setState({
      isLoggedIn: true
    });
  }
  render() {
    return(
      <div>
        <CatFact 
          handleClick={this.showFact} 
          currentFact={this.state.currentFact} />
        <Admin 
          handleClick={this.logIn} 
          status={this.updateLogInStatus} />
      </div>
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

class Admin extends React.Component {
  render() {
    return(
      <div id="admin">
        <button onClick={this.props.handleClick}>Admin</button>
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
