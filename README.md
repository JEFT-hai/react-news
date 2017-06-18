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
  1. 设置setting　const setting = {dots: true,infinite: true,speed: 500,slidesToShow: 1,autoplay: true};
  2. < Carousel {...setting}>< div>< img src={require('../../images/carousel_1.jpg')} /></div></Carousel>
* Menu:
  1. < Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)} >
  2. < Menu.Item key="top"><Icon type="appstore" />头条</Menu.Item>  </Menu>
* Icon:　（< Icon type="appstore" />）<br>
* Tabs:　(< Tabs type="card" onChange={this.callback.bind(this)}><TabPane tab="登录" key="1"></Tabpane></Tabs>)(callback根据key的值选择登陆还是注册）<br>
*　Input:
  1. const {getFieldDecorator} = this.props.form;
  2. {getFieldDecorator('userName')(<Input placeholder="请输入您的账号" />)}　　　　　
  3. var formData = this.props.form.getFieldsValue();取值<br>
*　Button:　
  1. < Button type="primary,dashed,ghost" htmlType="button"></Button>
  2. 在表单中htmlType="submit"
* Modal:　
  1. < Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
  2. onCancel={()=>this.setModalVisible(false)}
  3. onOk={()=>this.setModalVisible(false)} okText="关闭">　visible控制显隐
* Row:
  1. Row,Col类似栅格系统，平分24分 用法　
  2. < Row>< Col span={2}></Col>< Col span={22}></Col></Row>
* Col<br>
