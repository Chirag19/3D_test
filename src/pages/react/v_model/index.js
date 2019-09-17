import {MiddleComponent,React} from '../../../utils/MiddleComponent'

import { Input } from '../../../components/Input'


export class vmodel extends MiddleComponent {
	constructor(props){
		super(props);
    this.state = {
      name:'tom',

    	gender:'tom',
      age:90
    };
    this.copyProps2State();
	}
  render() {
    return (
      <div>
        这是子组件的值：<Input model={ this.state.name } update={this.update}/><br />

        这是父组件的值：{ this.state.name }  <br />
        
        <button onClick={this.click.bind(this)}>将父组件name值置为"桔子桑"</button>
      </div>
    );
  }

  click = ()=>{
    this.setState({
      name:'桔子桑'
    })
  }

}

  