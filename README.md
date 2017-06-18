# react-news

##### 遇到的问题
1. 打包问题
  * css与image要在js中引用，才会打包
  * 并且react中图片不自动打包，要用require引用图片路径：<img src={require('../../images/logo.png')} />才可以并且应该是直接打包到了js中
2. 下拉加载插件不好用，尚未解决；

##### 项目资源
1. 项目用到的外部框架：antd https://ant.design/index-cn
* 相似的库 http://www.material-ui.com/#/
2. icon下载iconfinder     https://www.iconfinder.com/
* 相似的库 http://www.iconfont.cn/
3. react插件库 https://github.com/enaqx/awesome-react

##### 知识点
1. 到的的antd
* Carousel:
  * 设置setting　const setting = {dots: true,infinite: true,speed: 500,slidesToShow: 1,autoplay: true};
  * < Carousel {...setting}>< div>< img src={require('../../images/carousel_1.jpg')} /></div></Carousel>
* Menu:
  * < Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)} >
  * < Menu.Item key="top"><Icon type="appstore" />头条</Menu.Item>  </Menu>
* Icon:
  * < Icon type="appstore" />
* Tabs:
  * < Tabs type="card" onChange={this.callback.bind(this)}><TabPane tab="登录" key="1"></Tabpane></Tabs>
  * callback根据key的值选择登陆还是注册
* Input:
  * const {getFieldDecorator} = this.props.form;
  * {getFieldDecorator('userName')(<Input placeholder="请输入您的账号" />)}　　　　　
  * var formData = this.props.form.getFieldsValue();取值<br>
* Button:　
  * < Button type="primary,dashed,ghost" htmlType="button"></Button>
  * 在表单中htmlType="submit"
* Modal:　
  * < Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
  * onCancel={()=>this.setModalVisible(false)}
  * onOk={()=>this.setModalVisible(false)} okText="关闭">　visible控制显隐
* Row:
  * Row,Col类似栅格系统，平分24分 用法　
  * < Row>< Col span={2}></Col>< Col span={22}></Col></Row>
* BackTop:
  * <BackTop />直接放到页面尾部就好了
2. 登录与注册
* this.state = {
		current: 'top',(Menu选中的状态)<br>
		modalVisible: false,(是否可见)<br>
		action: 'login',(登录还是注册)<br>
	        hasLogined: false,(是否登录)<br>
		userNickName: '',(缓存用户名)<br>
		userid: 0(用户id)<br>
		 　};<br>
* setModalVisible(value){ this.setState({modalVisible:value}); };
* PC端 通过Menu的handleClick事件控制modal的显示，通过Tabs的callback事件传递"登录"还是"注册",louout事件清除缓存，设置未登录状态=》显示注册/登录
  　handleClick(e){<br>
		 　if (e.key=="register") {<br>
			 　this.setState({current:'register'});<br>
			 　this.setModalVisible(true);<br>
		 　} else {<br>
			 　this.setState({current: e.key});<br>
	 　}<br>
   callback(key){<br>
		  　if (key==1){<br>
			  　　this.setState({action: 'login'});<br>
		  　} else if (key==2) {<br>
			 　 　this.setState({action: 'register'});<br>
		  　}<br>
	  };<br>
   logout(){<br>
		 　localStorage.React_userid = '';<br>
		 　localStorage.userNickName = '';<br>
		 　this.setState({hasLogined:false});<br>
	  };
* mobile
  * mobile_header login点击图标显示modal，eventProxy.on监听hasLogined事件<br>
    login(){<br>
		 　　this.setModalVisible(true);<br>
	 　};<br>
   componentDidMount() {<br>
  	// 监听 hasLogined 事件<br>
    　eventProxy.on('hasLogined', (hasLogined) => {<br>
        　this.setState({<br>
         　hasLogined<br>
        　});<br>
      　});<br>
    }<br>
  * mobile_usercenter 在另一个插件中退出logout要使用eventProxy函数触发hasLogined
    logout(){<br>
      　localStorage.React_userid = '';<br>
      　localStorage.userNickName = '';<br>
      　eventProxy.trigger('hasLogined', false);<br>
    }<br>
3. 用fetch()获取数据
  * 登录与注册 改变action="+this.state.action+ "的action状态决定登录还是注册
  * 设置标签标题 document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
  * fetch()
      　.then(response=>response.json())<br>
      　.then(json=>{<br>
       　 this.setState({xxx:json});<br>
      　})<br>
4. 路由
* root.js:
  * import {Route,Switch,HashRouter} from 'react-router-dom';
  * < HashRouter>
	< Switch><br>
		< Route exact path="/" component={PCIndex}></Route><br>
		< Route path="/details/:uniquekey" component={PCNewsDetails}></Route><br>
		< Route path="/usercenter" component={PCUserCenter}></Route><br>
	< /Switch><br>
　　 < /HashRouter><br>
* PC_news_block:
  * news.map((newsItem,index)=>(
	 　　< li key={index}><br>
	 　　　<HashRouter><br>
	 　　　　<Link to={`details/${newsItem.uniquekey}`} target="_blank"><br>
	 　　　　　　{newsItem.title}<br>
	 　　　　</Link><br>
	 　　　</HashRouter><br>
	 　　< /li><br>
	))<br>
	
5. 详情页
* 获取网址参数: this.props.match.params.uniquekey
* 非DOM属性dangerouslySetinnerHTML标签
  * <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
  * componentDidMount(){}中获取this.state.newsItem
  * createMarkup() {return {__html: this.state.newsItem.pagecontent};};
  
6. 评论模块
