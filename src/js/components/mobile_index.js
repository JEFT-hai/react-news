import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from './mobile_list';
import MobileListPullRefresh from './mobile_list_pull_refresh';
export default class MobileIndex extends React.Component{
	
	render() {

		const setting = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};

		return (
			<div>
				<MobileHeader />
				<Tabs>
				  <TabPane tab="头条" key="1">
				    <div className="carousel">
			          <Carousel {...setting}>
			            <div><img src={require('../../images/carousel_1.jpg')} /></div>
			            <div><img src={require('../../images/carousel_2.jpg')} /></div>
			            <div><img src={require('../../images/carousel_3.jpg')} /></div>
			            <div><img src={require('../../images/carousel_4.jpg')} /></div>
			          </Carousel>
			        </div>
				    <MobileList type="top" count={5} />
				  </TabPane>
				  <TabPane tab="社会" key="2">
				    <MobileList type="shehui" count={20} />
				  </TabPane>
				  <TabPane tab="国内" key="3">
				    <MobileListPullRefresh type="guonei" count={20} />
				  </TabPane>
				  <TabPane tab="国际" key="4">
				    <MobileList type="guoji" count={20} />
				  </TabPane>
				  <TabPane tab="娱乐" key="5">
				    <MobileList type="yule" count={20} />
				  </TabPane>
				</Tabs>
				<MobileFooter />
			</div>
		);
	};
}