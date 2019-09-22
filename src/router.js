import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';
import {demo1} from './pages/three/demo1'
import {demo2} from './pages/three/demo2'
import {demo3} from './pages/three/demo3'
import {demo4} from './pages/three/demo4'

import {cesium_demo1} from './pages/cesium/demo1'



import {vmodel} from './pages/react/v_model'



const BasicRoute = () => (
	<HashRouter>
        <Switch>
			<Route exact path="/three_4" component={demo4} />
			<Route exact path="/three_3" component={demo3} />
        	<Route exact path="/three_2" component={demo2} />
        	<Route exact path="/three_1" component={demo1} />
			
        	<Route exact path="/vmodel" component={vmodel} />

        	<Route exact path="/cesium_demo1" component={cesium_demo1} />

        </Switch>
    </HashRouter>


);


export default BasicRoute;