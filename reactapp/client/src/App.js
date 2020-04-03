import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Login from './components/Login'
import Menu from './components/Menu'
import lines from 'svg-patterns/p/lines';
import stringify from 'virtual-dom-stringify';
import TweetEmbed from 'react-tweet-embed';
import {Container} from 'semantic-ui-react';
import CardGame from './components/CardGame';
import DragList from './components/DragList';
import DragTest from './components/DragTest';


const TWEET_IDS = [
  '808749253556314112',
  '889582057625718784',
  '845730837823840256',
  '853789166987038720',
  '848625244956901376',
  '858171537928499200',
  '889197346344493056',
  '855335347248484357',
  '840875459730657283',
  '808809048355258369',
  '895427772767588352',
  '845321540627521536',
  '865630046970499073',
  '848625514826711040',
  '839959274738552832',
  '833488391148822528',
];
const pattern = lines({
  stroke: '#9c92ac',
  background: '#dfdbe5',
  orientations: [45]
});

const BackgroundPattern = ({ children, pttrn }) =>
  <div className="patterns-container">
    <svg className="patterns-content">
      <defs dangerouslySetInnerHTML={{ __html: stringify(pttrn) }}></defs>
      <rect width="100%" height="100%" style={{ 'fill': pttrn.url()}}/>
    </svg>
    {children}
  </div>
  
const TweetWall = ({ tweetsIds }) =>
  <div className="tweet-wall">
    {tweetsIds.map(id =>
      <div key={id} className="tweet-wall_item">
        <TweetEmbed
          id={id}
          options={{ cards: 'hidden', conversation: 'none' }}
        />
      </div>
    )}
  </div>

  

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

    render() {
      return (
        <div>
          
           <h1 className="tweet-wall_headline"> What People Are Saying</h1>
           <TweetWall tweetsIds={TWEET_IDS} />
           <CardGame name="Edite" />
           <DragTest></DragTest>
           <DragList></DragList>
        </div>
      );
    }

}

const LinePattern = () =>
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs dangerouslySetInnerHTML={{ __html: stringify(pattern) }} />
    <rect
      width="500"
      height="500"
      style={{ fill: pattern.url() }}
    />
  </svg>

export default App;