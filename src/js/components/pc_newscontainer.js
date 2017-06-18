import React from 'react';
import { Row, Col } from 'antd';

import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block'
import PCProduct from './pc_product'

export default class PCNewsContianer extends React.Component{
	render(){

		const setting = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};

		return (
			<div>
			  <Row>
			    <Col span={2}></Col>
			    <Col span={20} className="container">
			      <div className="leftContainer">
			        <div className="carousel">
			          <Carousel {...setting}>
			            <div><img src={require('../../images/carousel_1.jpg')} /></div>
			            <div><img src={require('../../images/carousel_2.jpg')} /></div>
			            <div><img src={require('../../images/carousel_3.jpg')} /></div>
			            <div><img src={require('../../images/carousel_4.jpg')} /></div>
			          </Carousel>
			        </div>
			        <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际新闻" imageWidth="112px" />
			      </div>
			      <Tabs className="tabs_news">
			        <TabPane tab="新闻" key="1">
			           <PCNewsBlock count={22} type="top" width="100%" boedered="false" />
			        </TabPane>
			        <TabPane tab="国际" key="2">
			           <PCNewsBlock count={22} type="guoji" width="100%" boedered="false" />
			        </TabPane>
			      </Tabs>
			      <Tabs class="tabs_product">
			        <TabPane tab="ReactNews 产品" key="1">
			          <PCProduct />
			        </TabPane>
			      </Tabs>
			      <div>
			      	<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="125px" />
			      	<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="125px" />
			      </div>
			    </Col>
			    <Col span={2}></Col>
			  </Row>
			</div>
		);
	};
}