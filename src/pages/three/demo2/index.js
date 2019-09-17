import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"


export class demo2 extends MiddleComponent {
	constructor(props){
		super(props);
    this.camera=null;
    this.scene=null;
    this.renderer=null;
    this.mesh=null;
	}
	

  render() {
    return (
      <div id="webgl" style={{width:'100%',height:'100%'}}></div>
    );
  }

  componentDidMount() {
    this.init();
    this.add();
    this.animate();
  }

  init = ()=>{
    var dom = document.getElementById('webgl');
    const width = dom.clientWidth;
    const height = dom.clientHeight;
    const draw = dom;
    this.camera = new THREE.PerspectiveCamera(130,width/height,0.01,10);
    this.camera.position.z = 1;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(width,height);
    draw.appendChild(this.renderer.domElement);
  }
  add = ()=>{
    let geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    let material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(geometry,material);
    this.scene.add(this.mesh);
    //this.renderer.render(this.scene,this.camera);
  }
  animate = ()=>{
    this.mesh.rotation.x += 0.03;
    this.mesh.rotation.y += 0.03;
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(this.animate);
  }

  
}

  