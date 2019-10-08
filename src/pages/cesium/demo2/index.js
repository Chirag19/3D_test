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
    const TOKEN2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwN2YxMWJmMi1lOWI3LTQ3MGUtYTFlYi1mZGQzMzhhMWIxNmYiLCJpZCI6MTU5NjYsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1NjkyOTkyMjF9.KLSIwDfkS-pAcHWITpJBb_82OXzt_qadEVXpCZEE06Y';
    window.CESIUM_BASE_URL = "";
    Cesium.Ion.defaultAccessToken = TOKEN2;
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
     //viewer.trackedEntity = entity1; // 镜头追踪，将镜头固定在对象上


     var scene = viewer.scene;
        var primitives = scene.primitives;
        var colors = [
            new Cesium.Color(77 / 255, 201 / 255, 255 / 255, 1),
            new Cesium.Color(255 / 255, 201 / 255, 38 / 255, 1),
            new Cesium.Color(221 / 255, 221 / 255, 221 / 255, 1)
        ];
        function add() {
            for (var i = 0, len = 10; i < len; i++) {
                var startPoint = Cesium.Cartesian3.fromDegrees(Math.random() * 100, Math.random() * 100);
                var endPoint = Cesium.Cartesian3.fromDegrees(Math.random() * 100, Math.random() * 100);
                var positions = Cesium.getLinkedPointList(startPoint, endPoint, 10000, 5000);
                var color =Cesium.Color.fromRandom({
                    alpha: 1.0
                });
                var glowingLine = viewer.entities.add({
                    polyline: {
                        positions: positions,
                        width: 5,
                        material:new Cesium.PolylineArrowMaterialProperty(color),
                        // material: new Cesium.PolylineArrowLinkMaterialProperty({
                        //     color: color,
                        //     duration:1000
                        // }),
                        extrudedHeight:60000
                    }
                });
            }
        }
        // add();

  }
  
  
}

  