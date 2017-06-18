import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {Route,BrowserRouter,Switch,HashRouter} from 'react-router-dom';
import { Button } from 'antd';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCUserCenter from './components/pc_usercenter'
import mobileUserCenter from './components/mobile_usercenter'
import '../css/mobile.css';
import '../css/pc.css';

export default class Root extends React.Component{
	render(){
		return (
			<div>
			  <MediaQuery query='(min-device-width: 1224px)'>
			    <HashRouter>
			    	<Switch>
			    	  <Route exact path="/" component={PCIndex}></Route>
			    	  <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
			    	  <Route path="/usercenter" component={PCUserCenter}></Route>
			    	</Switch>
			    </HashRouter>
			  </MediaQuery>
			  <MediaQuery query='(max-device-width: 1224px)'>
			    <HashRouter>
			    	<Switch>
			    	  <Route exact path="/" component={MobileIndex}></Route>
			    	  <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
			    	  <Route path="/usercenter" component={mobileUserCenter}></Route>
			    	</Switch>
			    </HashRouter>
			  </MediaQuery>
            </div>
		);
	}
}

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);