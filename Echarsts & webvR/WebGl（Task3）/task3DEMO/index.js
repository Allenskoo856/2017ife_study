/**
 * Created by Administrator on 2017/2/27 0027.
 */

function init() {
    /*创建场景，相机*/
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight,1,1000);

    /*设定相机指向和位置*/
    camera.position.set(-4,7,7);//位置
    camera.lookAt(scene.position);//对准的焦点
    scene.add(camera);

    /*渲染器设置颜色、长宽大小*/
    var renderer = new THREE.WebGLRenderer({
        antialias: true,   //  开启消除锯齿,默认false
        precision: "highp"   // 渲染精度  highp/mediump/lowp*/
    });
    renderer.setClearColor(0x666666,1.0);
    renderer.setSize(window.innerWidth,window.innerHeight);
    /*开启阴影*/
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    document.getElementById("main").appendChild(renderer.domElement);

    // 建立三维坐标系的尺寸
    var axes = new THREE.AxisHelper(10);
    scene.add(axes);


    /*车型的材料*/
    var Cubematerial = [];
    for (var i = 1; i <= 6; i++) {
        Cubematerial.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture("images/" + i + ".png",{},function () {
                renderer.render(scene,camera);
            }),
            overdraw: true
        }));
    }

    /*增加长方形*/
    var cube = new THREE.Mesh(
        new THREE.BoxGeometry(3, 1, 1),
        new THREE.MultiMaterial(Cubematerial)
    );
    scene.add(cube);
    cube.position.set(1, 0.2, 0.2);
    cube.castShadow = true;


    /*建立两个车轮*/
    var TorusGeometry1 = new THREE.Mesh(
        new  THREE.TorusGeometry(.3, 0.3/3, 32, 32),
        new THREE.MeshPhongMaterial({
            color: 0x7777ff
        })
    );
    var TorusGeometry2 = new THREE.Mesh(
        new  THREE.TorusGeometry(.3, 0.3/3, 32, 32),
        new THREE.MeshPhongMaterial({
            color: 0x7777ff
        })
    );
    TorusGeometry2.castShadow = true;
    TorusGeometry1.castShadow = true;

    TorusGeometry2.position.set(0.03,-0.22,.68);
    TorusGeometry1.position.set(1.80,-0.18,.68);
    scene.add(TorusGeometry1);
    scene.add(TorusGeometry2);


    var floorMeterial = THREE.ImageUtils.loadTexture("images/floor.jpg",{},function () {
        renderer.render(scene, camera)
    })
    /*这是平面*/
    var plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(6,6,1,1),
        new  THREE.MeshLambertMaterial({
            map: floorMeterial
        })
    );
    plane.rotation.x = -0.5*Math.PI;
    plane.position.y = -0.5;

    plane.receiveShadow = true;
    scene.add(plane);


    /*点光源*/
    var spotlights = new THREE.DirectionalLight(0xffffff,1,100);
    spotlights.position.set(8,8,6);
    spotlights.castShadow = true;
    spotlights.target = cube;
    scene.add(spotlights);

    spotlights.shadow.camera.near = 1
    spotlights.shadow.camera.far = 100
    spotlights.shadow.camera.visible = true
    spotlights.shadow.mapSize.Width = 1024
    spotlights.shadow.mapSize.Height = 1024


    /*图形渲染*/
    renderer.render(scene,camera);
}

