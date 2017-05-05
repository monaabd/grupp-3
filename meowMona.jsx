function getDataFromFirebase(updateCatsData) {
    //  firebase.database().ref('countries/').off('value')
        firebase.database().ref('cats/').on('value', function(snapshot) {
            let data = snapshot.val();
            console.log('Firebase data: ', data);
            updateCatsData(data);
            
           
   });//firebase
 }


class App extends React.Component {
  constructor(props){  
    super(props);
      
    this.state={
      submitter:null,
      catName: null,
      catColor: null,
      catBreed: null,
      catPhoto:null,  
       
       
      cats:{
        
      }
    
  };
    this.updateCatsData = this.updateCatsData.bind(this);
    this.setCat=this.setCat.bind(this);
    this.addNewObject=this.addNewObject.bind(this);
  }
    
  componentDidMount() {
            getDataFromFirebase(this.updateCatsData);
        }
  updateCatsData(data) {

              this.setState({
                  cats: data
              });
      }
    
  setCat(event){
   
     var el = event.target; // input elementet
    if (el.placeholder == "My Name")
      this.setState({ submitter: el.value });
    else if (el.placeholder == "Cat Name")
      this.setState({ catName: el.value });  
    else if (el.placeholder == "Cat Color")
      this.setState({ catColor: el.value }); 
    else if (el.placeholder == "Cat Breed")
      this.setState({ catBreed: el.value });
      else (el.placeholder == "Add Cat Photo")
      this.setState({ catPhoto: el.value });

  }
  render(){
    return (  <table className="catTable">
           
              <AddCats setCat={this.setCat} buttonClick= 
                            {this.addNewObject}/> 
              <MyList theList={this.state.cats} />
                  
            </table> 
         );
  }//render
  

  addNewObject(event) {
     var newCats = this.state.cats;
     var catList=Object.keys(newCats);
      var listItems=catList.map(prop=>{
       let itemObj=newCats[prop];   
      })
     listItems.push({
        submitter:this.state.submitter,  
        catName: this.state.catName,
        catColor: this.state.catColor,
        catBreed: this.state.catBreed,
         catPhoto:this.state.catPhoto,
        
      });

      this.setState ({
          cats: newCats,
          //uniqueId: this.state.uniqueId
      });
      firebase.database().ref('cats/').push({
        submitter:this.state.submitter,  
        catName: this.state.catName,
        catColor: this.state.catColor,
        catBreed: this.state.catBreed,
        catPhoto:this.state.catPhoto,  
        //id:this.state.id  
      });
     // console.log(this.state.cats);
  }//addnewobj

}//catListcomp

   class MyList extends React.Component {
     constructor(props) {
       super(props);
     }

     render() {
         /*
          theList:{
            oneCat:{
              catnName:'Mew',
              color: 'Cream',
              breed: 'Persian',
              id:4
            },
            anothercat: {
                ...
            }
         */
         //console.log(this.props.theList+' thelist');
         var theListObj= this.props.theList; // Object: theList:{ onecat: {...}, anotherCat: {} }
         var theListprop = Object.keys(theListObj); // Array: [key/prop=oneCat, anothercat, ...]
         //console.log(theListKeys, "listkey");
         var listItems = theListprop.map(prop=> {
             
          let itemObj = theListObj[prop]; // Object: oneCat: {...}
          //let itemProps = Object.keys(itemObj);// each properties in oneCat
          
             // id={itemObj.id}
             //var keyItem=itemObj.snabshot.key;
             //console.log(key);
           return <tr key={itemObj.catPhoto}>
               
                 <td>{itemObj.submitter + "  "}</td>
                 <td>{itemObj.catName + "  "}</td>
                 <td>{itemObj.catColor+ " "}</td>
                 <td>{itemObj.catBreed+ ""}</td>
                 <td><img src={itemObj.catPhoto}/></td> 
               </tr> 
           
         });
         return <tbody>
               {listItems}
               </tbody>;
        

     } //render
   }//MyListcomp

     class AddCats extends React.Component {
         
        constructor(props) {
          super(props);

        }
       render(){
         return (
         <thead>     
          <tr>
            <th>
            <input  
             type="text"
             placeholder="My Name"
             onChange={this.props.setCat} /> 
             </th>
             <th>
           <input
              
             type="text"
             placeholder="Cat Name"
             onChange={this.props.setCat} /> 
             </th>
             <th>
             <input
              
             type="text"
             placeholder="Cat Color"
             onChange={this.props.setCat} /> 
             </th> 
          <th>
           <input
             type="text"
             placeholder="Cat Breed"
             onChange={this.props.setCat} />
          </th>
             <th>     
             <input
             type="src"
             placeholder="Add Cat Photo"
             onChange={this.props.setCat} />
             </th>
               <th>
              <button type="button" 
               onClick={this.props.buttonClick}>Click Add</button>
             </th>
              </tr>
            </thead>);
            
       }//render

       }//inputcomp


 ReactDOM.render(<App/>,
        document.getElementById('catList'));
