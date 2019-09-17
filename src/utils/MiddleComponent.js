import React, { Component } from 'react';
import route from './Route'
import $store from '../redux'

class MiddleComponent extends Component {
	constructor(props){
		super(props);
		this.$store = $store;
		this.$route = route.getRoute();
		this.state = {};
		this.mounted = true;
		var vm = this;
		var temp = null;
		this.lock = false;
		this.updateData = null;
		this.oldState = {};
		this.newState = {};
		Object.defineProperty(vm,'state',{
			get:function(){
				return temp;
			},
			set:function(value){
				this.newState = value;
				if(vm.props.update&&vm.updateData!==null){
					vm.props.update(value,vm.updateData)
				}
				temp = value
			}
		})
	}
	copyProps2State =()=>{
		if(this.state){
			for(var key2 in this.state){
				var value2 = this.state[key2];
				if((typeof value2 !== 'function' && Object.prototype.toString.call(value2) !== '[object Object]' && value2 !==undefined)){
					var obj2 = {};
					obj2[key2] = value2;
					if(!this.state){
						this.state = {}
					}
					Object.assign(this.state,obj2);
					Object.assign(this.oldState,obj2);
				}
			}
		}else if(this.props){
			for(var key1 in this.props){
				var value1 = this.props[key1];
				if((typeof value1 !== 'function' && Object.prototype.toString.call(value1) !== '[object Object]' && value1 !==undefined)){
					var obj1 = {};
					obj1[key1] = value1;
					if(!this.state){
						this.state = {}
					}
					Object.assign(this.state,obj1);
					Object.assign(this.oldState,obj1);
				}
			}
		}
	}
	componentWillReceiveProps(nextProps) {
	      this.setState({
	        model: nextProps.model,
	      })
	      this.updateData = nextProps.model;
  	}
	handleChange =(e)=>{
		this.updateData = e.target.value;
		this.setState({
			model:e.target.value
		})
    }
    update = (value,updateData)=>{
    	var vm = this;
    	var oldValue = value[Object.keys(value)[0]];
    	var oldState = this.oldState;
    	var updateKey = '';
    	for (var key in oldState) {
    		if(oldState[key] === oldValue){
    			updateKey = key;
    			break;
    		}
    	}
    	this.newState[key] = updateData;
    	var obj = {};
    	obj[updateKey] = updateData;
    	if(!this.lock){
    		this.setState(obj);
		}
    	this.lock = true;
    	setTimeout(function(){
    		vm.lock = false;
    	});

    	this.oldState[key] = updateData;
    }
    

	componentWillUnmount() {
		this.mounted = false;
	}

	componentDidMount() {
  	}
	setData = (obj)=>{
		if(this.mounted){
			this.setState(obj);
		}
	}
}

  
export {MiddleComponent,React};