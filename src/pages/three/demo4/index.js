import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"
import {RenderPass,EffectComposer,OutlinePass} from "three-outlinepass"

export class demo4 extends MiddleComponent {
	constructor(props){
		super(props);
    this.camera=null;
    this.scene=null;
    this.renderer=null;
    this.mesh=null;
    this.controls=null;
    this.compose = null;
    this.clock = null;
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
    this.clock = new THREE.Clock();
    var dom = document.getElementById('webgl');
    const width = dom.clientWidth;
    const height = dom.clientHeight;
    const draw = dom;
    this.camera = new THREE.PerspectiveCamera(45,width/height,0.01,200);
    this.camera.position.z = 50;
    this.camera.position.y = 25;
    this.camera.position.x = 50;


    this.scene = new THREE.Scene();


    //给场景添加天空盒子纹理
    var cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath( '/texture/' );
    //六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
    var cubeTexture = cubeTextureLoader.load( [
        'px.jpg', 'nx.jpg',
        'py.jpg', 'ny.jpg',
        'pz.jpg', 'nz.jpg'
    ] );


    this.scene.background = cubeTexture;




    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(width,height);


    var amlight = new THREE.AmbientLight(0xffffff);
    amlight.castShadow = true;

    this.scene.add(amlight);

        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(10,10,0);

        //告诉平行光需要开启阴影投射
        //light.castShadow = true;

        //this.scene.add(light);

    draw.appendChild(this.renderer.domElement);
  }
  add = ()=>{
    let geometry = new THREE.SphereGeometry(1,40,40);

    
    // this.renderer.render(this.scene,this.camera);


    var axesHelper = new THREE.AxesHelper( 400 );
    this.scene.add( axesHelper );



    var gezi = new THREE.TextureLoader().load("/texture/gezi.jpeg");
    var water = new THREE.TextureLoader().load("/texture/demo.jpg");

    var plaster = new THREE.TextureLoader().load("/texture/plaster.jpg");
    var plaster_normal = new THREE.TextureLoader().load("/texture/plaster-normal.jpg");


    var material1 = new THREE.MeshPhongMaterial({
        // specularMap:gezi,
        // color:0x666666,
        // specular:new THREE.Color(0x00ffff),
        // shininess :30,
        map:gezi
    });
    var material2 = new THREE.MeshPhongMaterial({
        map:water
    });
    var material3 = new THREE.MeshPhongMaterial({
        map:plaster
    });
    material3.normalMap = plaster_normal;
    
    var mat = [material1,material2,material3]

    for(var i =0;i<3;i++){
      var maten = new THREE.MeshLambertMaterial( { envMap: this.scene.background } );
      var mesh = new THREE.Mesh(geometry,mat[i]);
      mesh.position.setY(i* 3 + 5);
      mesh.position.setX(15);

      this.scene.add(mesh);
    }



    var objLoader = new THREE.OBJLoader();
    objLoader.load('/model/o.obj', (object)=> {
        //将模型缩放并添加到场景当中
        var obj = object.children[0];


        obj.material = material1;
        obj.scale.set(0.05,0.05,0.05);

        console.log(obj)
        obj.receiveShadow = true;
        obj.position.setX(15);
        obj.position.setZ(1);
        obj.position.setY(0);

        // object.children[0].material.side = THREE.DoubleSide;

        this.scene.add(obj);
        var selectedObjects = [obj];

        this.compose = new EffectComposer(this.renderer);
        var renderPass = new RenderPass(this.scene, this.camera);
       

        var dom = document.getElementById('webgl');
        const width = dom.clientWidth;
        const height = dom.clientHeight;
        var outlinePass = new OutlinePass(new THREE.Vector2(width,height),this.scene,this.camera);
        outlinePass.renderToScreen = true;
        outlinePass.selectedObjects = selectedObjects;

        this.compose.addPass(renderPass);
        this.compose.addPass(outlinePass);

        //type1
        var params = {
            edgeStrength: 2.0,
            edgeGlow: 1,
            edgeThickness: 1.0,
            pulsePeriod: 0,
            usePatternTexture: false
        };
        outlinePass.edgeStrength = params.edgeStrength;
        outlinePass.edgeGlow = params.edgeGlow;
        outlinePass.visibleEdgeColor.set(0x00FFAA);
        outlinePass.hiddenEdgeColor.set(0x444444);

        //type2
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
    var delta = this.clock.getDelta();
    this.renderer.render(this.scene,this.camera);
    this.controls.update();
    if(this.compose){
    this.compose.render(delta);

    }
    requestAnimationFrame(this.animate);
  }

  
}

  