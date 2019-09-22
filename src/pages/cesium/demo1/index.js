import {MiddleComponent,React} from '../../../utils/MiddleComponent'

export class cesium_demo1 extends MiddleComponent {
	constructor(props){
		super(props);
	}
	

  render() {
    return (
      <iframe title="load" src="/html/cesium.html" frameBorder="none" style={{width:'100%',height:'100%'}} />
    );
  }

  componentDidMount() {

  }


  
}

  