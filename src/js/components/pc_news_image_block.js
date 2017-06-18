import React from 'react';
import { Card } from 'antd';
import {HashRouter,Link} from 'react-router-dom';

export default class PCNewsBlock extends React.Component{

	constructor() {
		super();
		this.state = {
			news: ''
		};
	}

	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
		.then(response => response.json())
		.then(json => this.setState({news: json}));		

	};

	render(){

		const styleImage = {
			display:"block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styleH3 = {
			width: this.props.imageWidth,
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			overflow:"hidden"
		}

		const {news} = this.state;
		const newsList = news.length
		      ?
		      news.map((newsItem,index)=>(
		      	<div key={index} className="imageblock">
		      	  <HashRouter>
		      	    <Link to={`details/${newsItem.uniquekey}`} target="_block">
		      	      <div className="custom-image">
		      	        <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
		      	      </div>
		      	      <div className="custom-card">
		      	        <h3 style={styleH3}>{newsItem.title}</h3>
		      	        <p>{newsItem.author_name}</p>
		      	      </div>
		      	    </Link>
		      	  </HashRouter>
		      	  
		      	</div>
		      ))
		      :
		      '没有加载到任何新闻'

		return (
			<div className="topNewsList">
			  <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
			    {newsList}
			  </Card>
			</div>
		);
	};
}