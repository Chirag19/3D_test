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

  //创建ShaderMaterial纹理的函数
  createMaterial=(vertexShader, fragmentShader)=> {
    var dom = document.getElementById('webgl');
    const width = dom.clientWidth;
    const height = dom.clientHeight;
    //配置着色器里面的attribute变量的值
    var attributes = {};
    //配置着色器里面的uniform变量的值
    var uniforms = {
        scale: {type: 'f', value: 10},
        resolution: {type: "v2", value: new THREE.Vector2(width, height)}
    };
    var meshMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        defaultAttributeValues : attributes,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
    });
    return meshMaterial;
}

  init = ()=>{
    var dom = document.getElementById('webgl');
    const width = dom.clientWidth;
    const height = dom.clientHeight;
    const draw = dom;
    this.camera = new THREE.PerspectiveCamera(130,width/height,0.01,10);
    this.camera.position.z = 2;
    this.camera.position.y = 3;

    this.scene = new THREE.Scene();

    //聚光灯
    var spotLight = new THREE.SpotLight( 0xAAFFCC );
    spotLight.position.set( 0,5,0 );

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 5;
    spotLight.shadow.camera.far = 40;
    spotLight.shadow.camera.fov = 30;

    // this.scene.add( spotLight );

    var amlight = new THREE.AmbientLight(0x444444,0.1);
    this.scene.add(amlight);

    var pointlight = new THREE.PointLight( 0xffffff, 0.5, 100 );
    pointlight.position.set( 0, 5, 5 );
    pointlight.castShadow = true;

    this.scene.add( pointlight );


  
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(width,height);
    draw.appendChild(this.renderer.domElement);

    //给场景添加天空盒子纹理
    var cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath( '/texture/' );
    //六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
    var cubeTexture = cubeTextureLoader.load( [
        'px.jpg', 'nx.jpg',
        'py.jpg', 'ny.jpg',
        'pz.jpg', 'nz.jpg'
    ] );


    // this.scene.background = cubeTexture;

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
        this.controls.maxDistance = 1000;
        //是否开启右键拖拽
        this.controls.enablePan = true;

  }
  add = ()=>{
    var axesHelper = new THREE.AxesHelper( 400 );
    this.scene.add( axesHelper );

    var vs = `
    varying vec2 vUv;
    void main(){
        vUv = uv; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1);
    }
    `;
    var fs = `
      uniform sampler2D map;   
      varying vec2 vUv;
      void main() {
        vec3 Normal;
        vec4 NormalMap = texture2D( map, vUv );
        Normal = NormalMap.rgb *  2.0  -  1.0 ;
        gl_FragColor = vec4(Normal,1.0);
  
      }
    `;
    var normal = new THREE.TextureLoader().load("/texture/plaster-normal.jpg");
    //var normal = new THREE.TextureLoader().load("/texture/nz.jpg");

    var mt = this.createMaterial(vs,fs);
    mt.uniforms.map={
      type:'t', 
      value:normal,
    }
    var mt6 = [mt,mt,mt,mt,mt,mt];



    let geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    let material = new THREE.MeshLambertMaterial();
    this.mesh = new THREE.Mesh(geometry,mt6);
    this.mesh.position.setY(1);
    this.mesh.castShadow = true;
    this.scene.add(this.mesh);



    var geometry1 = new THREE.PlaneGeometry( 20, 10);
    var material1 = new THREE.MeshStandardMaterial( {color: 0xaaaaaa} );
    var plane = new THREE.Mesh( geometry1, material1 );
    plane.rotation.x  =-Math.PI/2;
    plane.castShadow = true;
    plane.receiveShadow = true;
    this.scene.add( plane );

    //this.renderer.render(this.scene,this.camera);
  }
  animate = ()=>{
    // this.mesh.rotation.x += 0.03;
    // this.mesh.rotation.y += 0.03;
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(this.animate);
  }

  
}

  