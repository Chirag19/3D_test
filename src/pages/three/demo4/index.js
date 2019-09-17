import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"


export class demo4 extends MiddleComponent {
	constructor(props){
		super(props);
    this.camera=null;
    this.scene=null;
    this.renderer=null;
    this.mesh=null;
    this.controls=null;
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
    this.camera.position.z = 10;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(width,height);


    var amlight = new THREE.AmbientLight(0xAAFFCC);
    amlight.castShadow = true;

    this.scene.add(amlight);

        var light = new THREE.PointLight(0x444444);
        light.position.set(10,10,0);

        //告诉平行光需要开启阴影投射
        light.castShadow = true;

        this.scene.add(light);

    draw.appendChild(this.renderer.domElement);
  }
  add = ()=>{
    let geometry = new THREE.PlaneGeometry(4,2);
    let material = new THREE.MeshNormalMaterial(0x444444);
    this.mesh = new THREE.Mesh(geometry,material);
    this.mesh.rotation.x = -Math.PI/5
    this.scene.add(this.mesh);
    // this.renderer.render(this.scene,this.camera);


    var axesHelper = new THREE.AxesHelper( 400 );
    this.scene.add( axesHelper );

    var objLoader = new THREE.OBJLoader();
    //objLoader.setMaterials(material);
    objLoader.load('/model/o.obj', (object)=> {
        //将模型缩放并添加到场景当中
         object.scale.set(0.05,0.05,0.05);
        console.log(object)
        object.children[0].material = material;
        object.receiveShadow = true;
        object.position.setX(0);
        object.position.setZ(0);
        object.position.setY(0);

        object.children[0].material.side = THREE.DoubleSide;

        this.scene.add(object);
    })

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        // 如果使用animate方法时，将此函数删除
        //controls.addEventListener( 'change', render );
        // 使动画循环使用时阻尼或自转 意思是否有惯性
        this.controls.enableDamping = true;
        //动态阻尼系数 就是鼠标拖拽旋转灵敏度
        //controls.dampingFactor = 0.25;
        //是否可以缩放
        this.controls.enableZoom = true;
        //是否自动旋转
        this.controls.autoRotate = false;
        this.controls.autoRotateSpeed = 3;
        //设置相机距离原点的最远距离
        this.controls.minDistance = 1;
        //设置相机距离原点的最远距离
        this.controls.maxDistance = 500;
        //是否开启右键拖拽
        this.controls.enablePan = true;
  }
  animate = ()=>{
    this.renderer.render(this.scene,this.camera);
    this.controls.update();

    requestAnimationFrame(this.animate);
  }

  
}

  