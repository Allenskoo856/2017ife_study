/**
 * Created by Administrator on 2017/2/27 0027.
 */

function init() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight,1,1000);
    var renderer = new THREE.WebGLRenderer({
        antialias: true,   //  开启消除锯齿,默认false
        precision: "highp"   // 渲染精度  highp/mediump/lowp
    });
    renderer.setClearColor(0xEEEEEE,1.0);
    renderer.setSize(window.innerWidth,window.innerHeight);
    /*影音开关*/
    document.getElementById("main").appendChild(renderer.domElement);

    var axes = new THREE.AxisHelper(20);
    scene.add(axes);


    /*增加方块*/
    var cube = new THREE.Mesh(
        new THREE.CubeGeometry(3, 1, 1),
        new THREE.MeshBasicMaterial({
            color:0xAAAAAA,
            /*wireframe:true*/
        })
    );
    scene.add(cube);
    cube.position.set(1, 0.2, 0.2);

    var TorusGeometry1 = new THREE.Mesh(
        new  THREE.TorusGeometry(.3, 0.3/3, 32, 32),
        new THREE.MeshPhongMaterial({
            specular: 0xff0000,
            shininess: 1000
        })
    );
    var TorusGeometry2 = new THREE.Mesh(
        new  THREE.TorusGeometry(.3, 0.3/3, 32, 32),
        new THREE.MeshPhongMaterial({
            specular: 0xff0000,
            shininess: 1000
        })
    );

    TorusGeometry2.position.set(0.03,-0.22,.68);
    TorusGeometry1.position.set(1.89,-0.18,.68);
    scene.add(TorusGeometry1);
    scene.add(TorusGeometry2);

    //light
    var ambientLight = new THREE.AmbientLight(0x666666);   // 添加环境光
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0x989898);  // 添加平行光
    directionalLight.position.set(5,6,4);   // 设置平行光光源位置
    scene.add(directionalLight);



    camera.position.set(3.8, 1.8, 4);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene,camera);
}

