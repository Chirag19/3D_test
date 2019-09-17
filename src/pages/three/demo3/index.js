import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"


export class demo3 extends MiddleComponent {
	constructor(props){
		super(props);
    this.camera=null;
    this.scene=null;
    this.renderer=null;
    this.mesh=null;
    this.controls=null;
    this.process = 0;
    this.curve = null;
    this.building = null;
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
    this.camera.position.set(4, 2, 3);
    //this.camera.lookAt(-3.5,0,-4);

    this.scene = new THREE.Scene();
    var directionalLight = new THREE.DirectionalLight(0xAAFFCC);
    var amlight = new THREE.AmbientLight(0xAAFFCC);
    //amlight.castShadow = true;

    this.scene.add(amlight);

        var light = new THREE.PointLight(0x444444);
        light.position.set(10,10,0);

        //告诉平行光需要开启阴影投射
        light.castShadow = true;

        this.scene.add(light);
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    
    this.renderer.setSize(width,height);
    this.renderer.setClearColor(0xffffff);
    //this.renderer.shadowMapEnabled = true;
    draw.appendChild(this.renderer.domElement);
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
  add = ()=>{
    this.curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3( 7,0,7),
      new THREE.Vector3( 6,3,1),
      new THREE.Vector3( 5,3,1),
      new THREE.Vector3( 2,2,1 )
    );
    var geometry = new THREE.Geometry();
    geometry.vertices = this.curve.getPoints(50);
    var material = new THREE.LineBasicMaterial({color : 0xff0000});
    var line = new THREE.Line(geometry, material);
    //this.scene.add( line );



    var axesHelper = new THREE.AxesHelper( 400 );
    this.scene.add( axesHelper );
    var loader1 = new THREE.ObjectLoader();
        loader1.load("/model/chair.json",(obj)=> {
            //this.scene.add(obj);
        });

    var loader = new THREE.ColladaLoader();
    this.meshgroup = new THREE.Group();
        loader.load("/model/building.dae", (result)=> {
          // mesh = result.scene.children[1].clone();
          //   console.log(mesh)
          //   mesh.scale.set(0.1,0.1,0.1);
          //   this.scene.add(mesh);

            var group = result.scene.children;
          for(var i =0;i<group.length;i++){
            var cur = group[i].clone();
            console.log(cur)
            //cur.scale.set(0.1,0.1,0.1);
            //this.scene.add(cur);
            this.meshgroup.add(cur);

          }
          this.meshgroup.scale.set(0.1,0.1,0.1);
          this.meshgroup.rotation.x = -1.5;
          //meshgroup.rotation.y = -0.5;

            //this.scene.add(meshgroup);

        });
        var mtlLoader = new THREE.MTLLoader();
        //加载mtl文件
        mtlLoader.load('/model/building3.mtl', (material)=> {
            var objLoader = new THREE.OBJLoader();
            //设置当前加载的纹理
            objLoader.setMaterials(material);
            objLoader.load('/model/building3.obj', (object)=> {
                //将模型缩放并添加到场景当中
                object.scale.set(0.1,0.1,0.1);
                //object.receiveShadow = true;
                this.building = object;
                this.building.position.setX(3);
                this.building.position.setZ(4);


                this.scene.add(this.building);
            })
        });

        // var objLoader = new THREE.OBJLoader();
        //     //设置当前加载的纹理
        //     objLoader.load('/model/building.obj', (object)=> {

        //         //将模型缩放并添加到场景当中
        //         object.scale.set(0.1,0.1,0.1);
        //         this.scene.add(object);
        //     })


    //this.renderer.render(this.scene,this.camera);
  }
  animate = ()=>{
    // this.mesh.rotation.x += 0.03;
    // this.mesh.rotation.y += 0.03;
    this.controls.update();
    if(this.process < 1&&this.curve&&this.building){
      this.process+=(0.01 * (this.process+0.05)/1);
      var point = this.curve.getPoint(this.process);

      this.camera.position.set(point.x,point.y,point.z);

    }
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(this.animate);
  }

  
}

  