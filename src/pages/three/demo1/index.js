import {MiddleComponent,React} from '../../../utils/MiddleComponent'


export class demo1 extends MiddleComponent {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <iframe title="load" src="/html/loadjson.html" frameBorder="none" style={{width:'100%',height:'100%'}} />
    );
  }

}

  