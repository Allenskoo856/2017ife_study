/**
 * Created by Administrator on 2017/2/27 0027.
 */
        /*立方体（CubeGeometry）*/
        //    函数的使用
    THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
        /*
        *   with : X轴
        *   height: Y轴
        *   depth是z方向上的长度 后三个参数分别是在三个方向上的分段数，* */

        /*平面图形 （PlaneGeometry） */
    THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
        // width是x方向上的长度；height是y方向上的长度；后两个参数同样表示分段。
    new THREE.PlaneGeometry(2, 4); // 创建x为2 y为4 的一个x,y 方向的平面。

        /*球体  （SphereGeometry） */
    THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength)
    // 参数详解：   １．radius是半径
    // 2. segmentsWidth表示经度上的切片数  3. segmentsHeight表示纬度上的切片数
    // 4. phiStart表示经度开始的弧度 5. phiLength表示经度跨过的弧度； 6. thetaStart表示纬度开始的弧度   7. thetaLength表示纬度跨过的弧度。

    /**** 圆形（CircleGeometry） */
    THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
new THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4)
    //可以创建一个在x轴和y轴所在平面的三分之二圆的扇形：

    /*******圆柱体 （CylinderGeometry）*/
    THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
/*  参数详解：radiusTop与radiusBottom分别是顶面和底面的半径，由此可知，当这两个参数设置为不同的值时，实际上创建的是一个圆台；
    height是圆柱体的高度；radiusSegments与heightSegments可类比球体中的分段；

    openEnded是一个布尔值，表示是否没有顶面和底面，缺省值为false，表示有顶面和底面。 */
    new THREE.CylinderGeometry(2, 2, 4, 18, 3)
   // 创建一个顶面与底面半径都为2，高度为4的圆柱体，效果如下：
    new THREE.CylinderGeometry(2, 3, 4, 18, 3)
    // 将底面半径设为3创建一个圆台

    /****无顶面曲面*/
    new THREE.CylinderGeometry(2, 3, 4, 18, 3, true)
   // 正四面体（TetrahedronGeometry）
    THREE.TetrahedronGeometry(radius, detail)
   // 正八面体（OctahedronGeometry）
    THREE.OctahedronGeometry(radius, detail)
   // 正二十面体（IcosahedronGeometry）
    THREE.IcosahedronGeometry(radius, detail)

    new THREE.TetrahedronGeometry(3) ///创建一个半径为3的正四面体：
    new THREE.OctahedronGeometry(3) //创建一个半径为3的正八面体：

    // 圆环面（TorusGeometry）
    THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
    /* 参数详解：
        radius是圆环半径；tube是管道半径；
        radialSegments与tubularSegments分别是两个分段数，详见上图
        arc是圆环面的弧度，缺省值为Math.PI * 2。
    * */

    // 圆环结 圆环结（TorusKnotGeometry）
    //就是打了结的甜甜圈，其构造参数为：
    THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);
    
