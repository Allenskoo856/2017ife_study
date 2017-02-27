/**
 * Created by xcallen on 2017/2/25 0025.
 */
function init() {
    // 渲染器
    var renderer = new THREE.WebGLRenderer;
        renderer.setSize(400, 300);
        document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
        renderer.setClearColor(0x000000); // black

    // 场景scene
    var scene = new THREE.Scene();

    // 相机
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    // 创建一个x,y,z方向长度分别为1、2、3的长方体，并设置为红色
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
        new THREE.MeshBasicMaterial({
            color: 0xff0000
        })
    );
    scene.add(cube);

    // 渲染器渲染出二维的结果
    renderer.render(scene, camera);
}
/*  three.js 的对象说明
     Cameras（照相机，控制投影方式）
             Camera
             OrthographicCamera （正交投影照相机）
             // 用法：THREE.OrthographicCamera(left, right, top, bottom, near, far)
     这六个参数分别代表正交投影照相机拍摄到的空间的六个面的位置，这六个面围成一个长方体，我们称其为视景体（Frustum）。只有在视景体内部（下图中的灰色部分）的物体才可能显示在屏幕上，而视景体外的物体会在显示之前被裁减掉。
        需要保证(right - left)与(top - bottom)的比例与Canvas宽度与高度的比例一致。
        near与far 因此这两个值应该均为正值。一般near的值设置得较小，far的值设置得较大


             PerspectiveCamera  （透视投影照相机）
        THREE.PerspectiveCamera(fov, aspect, near, far)
        fov是视景体竖直方向上的张角（是角度制而非弧度制），如侧视图所示。

    aspect等于width / height，是照相机水平方向和竖直方向长度的比值，通常设为Canvas的横纵比例。
    near和far分别是照相机到视景体最近、最远的距离，均为正值，且far应大于near。


     Core（核心对象）

         BufferGeometry
         Clock（用来记录时间）
         EventDispatcher
         Face3
         Face4
         Geometry
         Object3D
         Projector
         Raycaster（计算鼠标拾取物体时很有用的对象）
 *
*       Lights（光照）
                 Light
                 AmbientLight
                 AreaLight
                 DirectionalLight
                 HemisphereLight
                 PointLight
                 SpotLight

     Loaders（加载器，用来加载特定文件）
     Loader
     BinaryLoader
     GeometryLoader
     ImageLoader
     JSONLoader
     LoadingMonitor
     SceneLoader
     TextureLoader

     Materials（材质，控制物体的颜色、纹理等）
     Material
     LineBasicMaterial
     LineDashedMaterial
     MeshBasicMaterial
     MeshDepthMaterial
     MeshFaceMaterial
     MeshLambertMaterial
     MeshNormalMaterial
     MeshPhongMaterial
     ParticleBasicMaterial
     ParticleCanvasMaterial
     ParticleDOMMaterial
     ShaderMaterial
     SpriteMaterial

     Math（和数学相关的对象）

     Box2
     Box3
     Color
     Frustum
     Math
     Matrix3
     Matrix4
     Plane
     Quaternion
     Ray
     Sphere
     Spline
     Triangle
     Vector2
     Vector3
     Vector4

     Objects（物体）

     Bone
     Line
     LOD
     Mesh（网格，最常用的物体）
     MorphAnimMesh
     Particle
     ParticleSystem
     Ribbon
     SkinnedMesh
     Sprite

     Renderers（渲染器，可以渲染到不同对象上）

     CanvasRenderer
     WebGLRenderer（使用WebGL渲染，这是本书中最常用的方式）
     WebGLRenderTarget
     WebGLRenderTargetCube
     WebGLShaders（着色器，在最后一章作介绍）

     Renderers / Renderables

     RenderableFace3
     RenderableFace4
     RenderableLine
     RenderableObject
     RenderableParticle
     RenderableVertex

     Scenes（场景）

     Fog
     FogExp2
     Scene

     Textures（纹理）

     CompressedTexture
     DataTexture
     Texture

     Extras

     FontUtils
     GeometryUtils
     ImageUtils
     SceneUtils

     Extras / Animation

     Animation
     AnimationHandler
     AnimationMorphTarget
     KeyFrameAnimation

    Extras / Cameras

     CombinedCamera
     CubeCamera

     Extras / Core

     Curve
     CurvePath
     Gyroscope
     Path
     Shape

     Extras / Geometries（几何形状）

     CircleGeometry
     ConvexGeometry
     CubeGeometry
     CylinderGeometry
     ExtrudeGeometry
     IcosahedronGeometry
     LatheGeometry
     OctahedronGeometry
     ParametricGeometry
     PlaneGeometry
     PolyhedronGeometry
     ShapeGeometry
     SphereGeometry
     TetrahedronGeometry
     TextGeometry
     TorusGeometry
     TorusKnotGeometry
     TubeGeometry

     Extras / Helpers

     ArrowHelper
     AxisHelper
     CameraHelper
     DirectionalLightHelper
     HemisphereLightHelper
     PointLightHelper
     SpotLightHelper

     Extras / Objects

 ImmediateRenderObject
 LensFlare
 MorphBlendMesh

 Extras / Renderers / Plugins

 DepthPassPlugin
 LensFlarePlugin
 ShadowMapPlugin
 SpritePlugin

 Extras / Shaders

 ShaderFlares
 ShaderSprite
*
*
*
*
*
*
*
*
*
*
*
*
* */
