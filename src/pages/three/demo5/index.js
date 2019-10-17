import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import * as THREE from "three"
import {RenderPass,EffectComposer,OutlinePass} from "three-outlinepass"
import * as PostProcessing from "postprocessing";

import {SweepingLightShader,FXAAShader} from '../../lib/Shader'

export class demo5 extends MiddleComponent {
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
    this.addcomposer();
    this.animate();
    this.addbutton();
  }
  addbutton=()=>{
    var button = document.createElement('div');
    button.setAttribute("class","button");
    button.innerText = 'Restart';
    button.style.cssText = `
        height:32px;
        line-height:32px;
        font-size:16px;
        font-weight:700;
        width:100px;
        text-align:center;
        border:2px solid #4091f7;
        position:absolute;
        right:20px;
        top:10px;
        color:white;
        cursor:pointer;
        border-radius:4px;
    `;
    button.addEventListener('click',()=>{
      this.time = -2.0;
    })
    document.getElementById('webgl').appendChild(button);
  }
  addcomposer=()=>{
    var dom = document.getElementById('webgl');

    //扫光shader
    this.composer.addPass(new PostProcessing.RenderPass(this.scene, this.camera));
    this.myShaderMaterial = new THREE.ShaderMaterial({
      defines: { LABEL: "value" },
      uniforms: { 
        tDiffuse: new THREE.Uniform(null),
        time:new THREE.Uniform(this.time)
      },
      vertexShader: SweepingLightShader.vertexShader,
      fragmentShader: SweepingLightShader.fragmentShader
    });
    const myShaderPass = new PostProcessing.ShaderPass(this.myShaderMaterial, "tDiffuse");
    this.composer.addPass(myShaderPass);
    //抗锯齿shader
    var FXAAShaderMaterial = new THREE.ShaderMaterial({
      defines: { LABEL: "value" },
      uniforms: { 
        tDiffuse: new THREE.Uniform(null),
        resolution:new THREE.Uniform(new THREE.Vector2(1/dom.clientWidth,1/dom.clientHeight))
      },
      vertexShader: FXAAShader.vertexShader,
      fragmentShader: FXAAShader.fragmentShader
    });
    const FXAAShaderPass = new PostProcessing.ShaderPass(FXAAShaderMaterial, "tDiffuse");
    this.composer.addPass(FXAAShaderPass);
    //辉光Effect提供场景光照
    var effect = new PostProcessing.BloomEffect();
    const effectPass = new PostProcessing.EffectPass(this.camera, effect);
    effectPass.renderToScreen = true;
    this.composer.addPass(effectPass);
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
    this.camera.position.z = 400;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
    var object = new THREE.Object3D();
    this.scene.add( object );
    var geometry = new THREE.SphereBufferGeometry( 1, 4, 4 );
    for ( var i = 0; i < 100; i ++ ) {
      var material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random(), flatShading: true } );
      var mesh = new THREE.Mesh( geometry, material );
      mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
      mesh.position.multiplyScalar( Math.random() * 400 );
      mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
      object.add( mesh );
    }
    this.scene.add( new THREE.AmbientLight( 0x222222 ) );
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    this.scene.add( light );
    this.composer = new PostProcessing.EffectComposer(this.renderer);

  }
  animate = ()=>{
    var vm = this;
    requestAnimationFrame( vm.animate );
    //扫光结束场景变亮
    if(this.myShaderMaterial){
      this.time += 0.02;
      this.myShaderMaterial.uniforms.time= new THREE.Uniform(this.time);
    }
    if(this.composer){
      this.composer.render();
    }else{
      this.renderer.render(this.scene,this.camera);
    }
  }

  
}

  