import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"


export class demo4 extends MiddleComponent {
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

    var amlight = new THREE.AmbientLight(0xAAFFCC);
    //amlight.castShadow = true;

    this.scene.add(amlight);

        var light = new THREE.PointLight(0x444444);
        light.position.set(10,10,0);

        //告诉平行光需要开启阴影投射
        light.castShadow = true;

        this.scene.add(light);

    draw.appendChild(this.renderer.domElement);
  }
  add = ()=>{
    // let geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    // let material = new THREE.MeshNormalMaterial();
    // this.mesh = new THREE.Mesh(geometry,material);
    // this.scene.add(this.mesh);
    //this.renderer.render(this.scene,this.camera);


    var axesHelper = new THREE.AxesHelper( 400 );
    this.scene.add( axesHelper );

    var objLoader = new THREE.OBJLoader();
    objLoader.load('/model/podyshki1.obj', (object)=> {
        //将模型缩放并添加到场景当中
        object.scale.set(2,2,2);
        console.log(object)
        object.receiveShadow = true;
        object.position.setX(0);
        object.position.setZ(0);
        object.position.setY(1);



        this.scene.add(object);
    })
  }
  animate = ()=>{
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(this.animate);
  }

  
}

  