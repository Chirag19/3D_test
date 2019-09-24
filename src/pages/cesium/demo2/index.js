import {MiddleComponent,React} from '../../../utils/MiddleComponent'
import Cesium from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css';


export class cesium_demo2 extends MiddleComponent {
	constructor(props){
		super(props);
    console.log(Cesium)
	}
	

  render() {
    return (
      <div id="cesiumContainer" style={{width:'100%',height:'100%'}}></div>
    );
  }

  componentDidMount() {
    this.init();
  }

  init = ()=>{
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNjZiZDQxNS0xNDNlLTRkZDYtOGQ2MC1jZjYzOGI3MDcxYzAiLCJpZCI6MTU5NjYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjkyOTQwMjZ9.g_e448zt1KzP-BzI82lgrI6CraWgOTHgLe-UaEANwNs'
    window.CESIUM_BASE_URL = "";
    Cesium.Ion.defaultAccessToken = TOKEN;
    var viewer = new Cesium.Viewer('cesiumContainer',{
      animation: true, //是否显示动画控件(左下方那个)
      baseLayerPicker: true, //是否显示图层选择控件
      geocoder: true, //是否显示地名查找控件·
      timeline: true, //是否显示时间线控件
      sceneModePicker: true, //是否显示投影方式控件
      navigationHelpButton: false, //是否显示帮助信息控件
      infoBox: true, //是否显示点击要素之后显示的信息
    });
    // viewer.scene.debugShowFramesPerSecond = true;
     viewer.scene.globe.depthTestAgainstTerrain = true;

     var entity1 = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
      ellipse : {
          semiMinorAxis : 250000.0,
          semiMajorAxis : 400000.0,
          material : Cesium.Color.BLUE.withAlpha(0.5)//可设置不同的MaterialProperty
      }
    });
        viewer.trackedEntity = entity1; // 镜头追踪，将镜头固定在对象上

  }
  
  
}

  