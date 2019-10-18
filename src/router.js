import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';
import {demo1} from './pages/three/demo1'
import {demo2} from './pages/three/demo2'
import {demo3} from './pages/three/demo3'
import {demo4} from './pages/three/demo4'
import {demo5} from './pages/three/demo5'
import {demo6} from './pages/three/demo6'
import {demo7} from './pages/three/demo7'




import {cesium_demo1} from './pages/cesium/demo1'
import {cesium_demo2} from './pages/cesium/demo2'




import {vmodel} from './pages/react/v_model'



const BasicRoute = () => (
	<HashRouter>
        <Switch>
			<Route exact path="/three_7" component={demo7} />
			<Route exact path="/three_6" component={demo6} />
			<Route exact path="/three_5" component={demo5} />
			<Route exact path="/three_4" component={demo4} />
			<Route exact path="/three_3" component={demo3} />
        	<Route exact path="/three_2" component={demo2} />
        	<Route exact path="/three_1" component={demo1} />
			
        	<Route exact path="/vmodel" component={vmodel} />

        	<Route exact path="/cesium_demo1" component={cesium_demo1} />
        	<Route exact path="/cesium_demo2" component={cesium_demo2} />


        </Switch>
    </HashRouter>


);


export default BasicRoute;