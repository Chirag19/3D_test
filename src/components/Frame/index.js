import {MiddleComponent,React} from '../../utils/MiddleComponent';


import {withRouter,HashRouter} from 'react-router-dom';
//引入组件和资源文件
import {Layout, Menu, Icon} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import './index.css';
import orange from "../../static/images/orange.png"

//引入路由
import Router from '../../router';
//拆分antd子组件
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

export class Frame extends MiddleComponent {
	constructor(props){
		super(props);
		this.state = {
			height:window.innerHeight,
			width:window.innerWidth,
			title:'',
		}
		this.menu = [
			{
			  title:'react',
			  children:[
			  	{
			  		title:'vmodel',
			  		to:'/vmodel',
			  		desc:'基于监听器和事件的双向数据绑定'
			  	},
			  ]
			},
			{
			  title:'three',
			  children:[
			  	{
			  		title:'flyline',
			  		to:'/three_1',
			  		desc:'2000根飞线'
			  	},
			  	{
			  		title:'shader_法向贴图',
			  		to:'/three_2',
			  		desc:'shader_法向贴图'
			  	},
			  	{
			  		title:'镜头拉伸demo',
			  		to:'/three_3',
			  		desc:'镜头拉伸demo'
				},
				{
					title:'天空盒子、描边',
					to:'/three_4',
					desc:'天空盒子、描边'
				},
				{
					title:'后期_扫光',
					to:'/three_5',
					desc:'后期_扫光'
				},
				{
					title:'shader地球',
					to:'/three_6',
					desc:'shader地球'
				}
			  ]
			},
			{
				title:'cesium',
				children:[
					{
						title:'cesium_iframe',
						to:'/cesium_demo1',
						desc:'iframe方式引入'
					},
					{
						title:'cesium_react',
						to:'/cesium_demo2',
						desc:'与react框架整合'
					},
				]
			  },
		];
  		this.initHeightLight();
	}

	//初始化高亮菜单
	initHeightLight = (type)=>{
		let path = this.$route.path;
		if(path){
			var menu = this.menu;
			var desc = '';
			menu.map((item)=>{
				item.children.map((items)=>{
					if(~path.indexOf(items.to)){
							desc = items.desc||'暂无简介!';
					}
					return items;
				})
				return item;
			});
		  	this.state.title = desc;
		}
		
	}

	//点击菜单更新对应描述文字
	showTitle = (desc)=>{
		this.setData({
			title:desc||'暂无简介!'
		})
	}
	
	//解决刷新高亮的问题
	sideMenu = ()=>{
		var menu = this.menuDom();
		return withRouter(({history})=>{
			return (
				<Menu  theme="dark" mode="inline" selectedKeys={[history.location.pathname]} defaultOpenKeys={['react','d3','pixi','three','cesium']}>
					{ menu }
				</Menu>
			)
		})
	}

	//根据数据拼接菜单dom
	menuDom = ()=>{
		return this.menu.map((item)=>{
			return(
				<SubMenu key={ item.title } title={<span><Icon type="user" /> { item.title }</span>}>
					{ 
						item.children.map((items)=>{
							return (
								<Menu.Item key={ items.to } onClick={this.showTitle.bind(this,items.desc)}>
									<a href={'/#'+items.to}>
									  { items.title } 
									</a>
								</Menu.Item>
							)
						}) 
					}
				</SubMenu>
			)
		});
	}


  render() {
  	var SideMenu = this.sideMenu();
    return (
    	<HashRouter>
		<Layout>
		    <Sider style={{
		      overflow: 'auto', position: 'fixed', left: 0,width:200, height: this.state.height
		    }}
		    >
			    <Scrollbars style={{ width:'100%', height: '100%' }}>
			      <div className="logo">
			      	<img alt="logo" src={ orange }></img>
			      	桔子桑
			      </div>
			      <SideMenu />
			    </Scrollbars>
		    </Sider>
		    <Layout style={{ marginLeft: 200 }}>
		      <Header style={{ background: '#fff',height:60,padding:'0 20px' }}>
		       <h4>{ this.state.title }</h4>
		      </Header>
		      <Content style={{ margin: '24px 16px 0',height:this.state.height - 144,width:this.state.width - 230 }}>
			      <div style={{height:'100%', width:'100%'}}>
			      	<Router />
		          </div>
		      </Content>
		      <Footer style={{ textAlign: 'center',height:60 }}>
		        CopyRight ©2019 桔子桑
		      </Footer>
		    </Layout>
		</Layout>
		</HashRouter>
    );
  }


  
}

  