
    class WeatherApp extends React.Component {
    constructor(props) {
     super(props);
      this.state={
          weather:"first time"
      };
       //his.test = this.test.bind(this);
        this.weatherApi=this.weatherApi.bind(this);
     }
   
       componentDidMount(){
          
           this.weatherApi();
       }   
     weatherApi(){
         
        let urlx='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?';

        urlx += 'q=' + 'Gothenburg' +',uk&APPID=5d224fafcdf9102b03d9243837eb00d4' + '&units=metric'

        //AJAX request

        let ajaxx = new XMLHttpRequest();

        ajaxx.onreadystatechange=() => {

            if(ajaxx.status==200 && ajaxx.readyState==4){

                var object=JSON.parse(ajaxx.responseText);

                var data = object.weather[0];
                 console.log(data,"data")
                var weatherIcon = data.icon;
                var iconURL = 'https://www.openweathermap.org/img/w/'+weatherIcon+'.png';
                this.setState({
                    weather: data, iconURL: iconURL

                })
            }

        }
        ajaxx.open("get",urlx);

        ajaxx.send(); 
       
} //func weather app
   // }//testfunc
		render() {
            
            return (<div>
                    <span><img id="weatherImg" src="pictures/catweather.jpg" /><br/>
                        <span id="weatherResult"> {this.state.weather.description} </span> <img src={this.state.iconURL}/></span>
                    </div>

			);
		}
		
	}//weatherapp comp

	ReactDOM.render(
     <WeatherApp/>,
		document.getElementById('weather')
	);
     
     