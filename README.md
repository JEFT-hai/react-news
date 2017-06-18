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
  *　const setting = {dots: true,infinite: true,speed: 500,slidesToShow: 1,autoplay: true};<br>
  *　< Carousel {...setting}><div>< img src={require('../../images/carousel_1.jpg')} /></div></Carousel>)<br>
* Menu,(表单框架<Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)} ><br><Menu.Item key="mail"><Icon type="mail" />Navigation One</Menu.Item>）<br>
* Icon,　（< Icon type="appstore" />）<br>
* Tabs,　(< Tabs type="card" onChange={this.callback.bind(this)}><TabPane tab="登录" key="1"></Tabpane></Tabs>)(callback根据key的值选择登陆还是注册）<br>
*　Input,　const {getFieldDecorator} = this.props.form;（{getFieldDecorator('userName')(<Input placeholder="请输入您的账号" />)}）　　　　　var formData = this.props.form.getFieldsValue();取值<br>
*　Button,　（< Button type="primary,dashed,ghost" htmlType="button"></Button>）在表单中htmlType="submit"<br>
* Modal,　(< Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}<br>
			      onCancel={()=>this.setModalVisible(false)}<br>
			      onOk={()=>this.setModalVisible(false)} okText="关闭">)　visible控制显隐<br>
* Row,　（Row,Col类似栅格系统，平分24分 用法　< Row>< Col span={2}></Col>< Col span={22}></Col></Row><br>
* Col<br>
