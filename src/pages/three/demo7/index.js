import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"
import {seashader} from './shader'

export class demo7 extends MiddleComponent {
	constructor(props){
		super(props);
    this.camera=null;
    this.scene=null;
    this.renderer=null;
    this.mesh=null;
    this.controls=null;
    this.composer = null;
    this.clock = null;
    this.myShaderMaterial = null;
    this.time = -2.0;
    this.type = 'add';
	}
	

  render() {
    return (
      <div id="webgl" style={{width:'100%',height:'100%',position:'relative'}}></div>
    );
  }

  componentDidMount() {
    this.init();
    this.animate();
  }
  addsea=()=>{
    var seaMaterial = new THREE.ShaderMaterial({
      uniforms: { 
        time:{type:'f',value:0}
      },
      vertexShader: seashader.vs,
      fragmentShader: seashader.fs,
      side:THREE.DoubleSide
    });
    var geometry = new THREE.PlaneGeometry( 500,500,40000);
    var plane = new THREE.Mesh( geometry, seaMaterial );
    plane.rotation.x= -Math.PI/3;
    this.scene.add( plane );
  }
  init = ()=> {
    var dom = document.getElementById('webgl');
    this.renderer = new THREE.WebGLRenderer();
    // this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( dom.clientWidth, dom.clientHeight );
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    // renderer.autoClear = false;
    dom.appendChild( this.renderer.domElement );
    //
    this.camera = new THREE.PerspectiveCamera( 70, dom.clientWidth / dom.clientHeight, 1, 1000 );
    this.camera.position.set(-300,100,400);
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog( 0x000000, 1, 1000 );

    var axesHelper = new THREE.AxesHelper( 500 );
    this.scene.add( axesHelper );

    this.addsea();
    
    // var object = new THREE.Object3D();
    // this.scene.add( object );
    // var geometry = new THREE.SphereBufferGeometry( 1, 4, 4 );
    // for ( var i = 0; i < 100; i ++ ) {
    //   var material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random(), flatShading: true } );
    //   var mesh = new THREE.Mesh( geometry, material );
    //   mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
    //   mesh.position.multiplyScalar( Math.random() * 400 );
    //   mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
    //   mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
    //   object.add( mesh );
    // }

    this.scene.add( new THREE.AmbientLight( 0x222222 ) );
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    this.scene.add( light );

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    // 如果使用animate方法时，将此函数删除
    //controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    this.controls.enableDamping = false;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    this.controls.enableZoom = true;
    //是否自动旋转
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = 3;
    //设置相机距离原点的最近距离
    this.controls.minDistance = 100;
    //设置相机距离原点的最远距离
    this.controls.maxDistance = 500;
    //是否开启右键拖拽
    this.controls.enablePan = false;

  }
  animate = ()=>{
    var vm = this;
    requestAnimationFrame( vm.animate );
    if(this.composer){
      this.composer.render();
    }else{
      this.renderer.render(this.scene,this.camera);
    }
  }

  
}

  