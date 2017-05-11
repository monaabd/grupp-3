class AppFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFact: 'On average, a cat will sleep for 16 hours a day.'
    };
    this.showFact = this.showFact.bind(this);
  }

  showFact(event) {
    console.log('before');
    let ajax = new XMLHttpRequest();
    let url = 'https://cors-anywhere.herokuapp.com/http://catfacts-api.appspot.com/api/facts';
    ajax.open('get', url);
    ajax.onreadystatechange = (function() {
      if(ajax.status == 200 && ajax.readyState == 4) {
        let response = JSON.parse(ajax.responseText);
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
  
  render() {
    return(
      <div>
        <CatFact 
          handleClick={this.showFact} 
          currentFact={this.state.currentFact} />
      </div>
    )
  } 
}

class CatFact extends React.Component {
  render() {
    return(
      <div id="facts">
        <h3>Wanna know some cool facts about cats?</h3>
        <p>{this.props.currentFact}</p>
        <button id="factBtn" onClick={this.props.handleClick}>Show something else</button>
      </div>
    )
  }
}

class AppAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);

  }
  
  logIn(event) {
    let self = this;
    let isLoggedIn = this.state.isLoggedIn;
    let provider = new firebase.auth.GithubAuthProvider();
    let authorizedUsers = ['Louice Danielsson', 'Sara', 'Aman', 'Mona Abd', 'Francina Fernando'];
    
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      //om inloggning lyckas
      console.log('logging in...');

      for(let i=0; i<authorizedUsers.length; i++) {
        if(result.user.displayName == authorizedUsers[i]) {
          console.log('user is authorized');
          self.setState({
            isLoggedIn: true
          });
        }
      }
      console.log('result: ', result);
    }).catch( function(error) {
      //om inloggningen misslyckas
      console.log('user is NOT authorized');
      console.log(`Error: ${error.code}, ${error.message}`);
    });
  }
  

  logOut(event) {
    console.log('loggar ut...');
    let self = this;
    let isLoggedIn = this.state.isLoggedIn;
    
    firebase.auth().signOut()
    .then(function(result) {
      //om utloggning lyckas
      console.log('utloggad');
      self.setState({
        isLoggedIn: false
      });
      console.log('result: ', result);
    }).catch(function(error) {
      console.log(`SIGN OUT errorCode: ${error.code}, errorMessage: ${error.message}`);

    });
  }
  
  render() {
    return(
      <div>
        <AdminBtn 
          handleClickLogin={this.logIn}
          handleClickLogOut={this.logOut}
          isLoggedIn={this.state.isLoggedIn} />
        <ColorBtns 
          isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

class AdminBtn extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return(
      <div>
        {isLoggedIn ? (
          <button onClick={this.props.handleClickLogOut}>Log Out</button>
        ) : (
          <button onClick={this.props.handleClickLogin}>Admin Log In</button>
        )}
      </div>
      
    );
  }
}

class ColorBtns extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return(
      <div>
        {isLoggedIn ? (
          <div>
          </div>
        ) : (
          null
        )}
      </div>
    )
  }
}


ReactDOM.render(
  <AppFact />,
  document.getElementById('catFactSection')
);

ReactDOM.render(
  <AppAdmin />,
  document.getElementById('adminSection')
);