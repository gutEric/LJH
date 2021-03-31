<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
  import * as Three from 'three'

  export default {
    name: 'ThreeTest',
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null
      }
    },
    methods: {
      init: function () {
        //定位ID
        let container = document.getElementById('container')

        //创建摄像机
        this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)

        //定位在页面的位置
        this.camera.position.z = 6

        //创建场景
        this.scene = new Three.Scene()

        //创建模型 THREE.BoxGeometry("x轴长"，"y轴长"，"z轴长")
        //let geometry = new Three.CylinderGeometry(1.5,1.5,3,100)
        let geometry = new Three.SphereGeometry(2,100,100)
        //let geometry = new Three.SphereGeometry(2,0,0,10)

        const texture = new Three.TextureLoader().load(require('../assets/Img/test.jpg'))



        //设置材质（暂时不知道这个材质是什么玩意）
        let material = new Three.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: false,
          map: texture
        })
        /**
       * 光源设置
       */
        //点光源
        var point = new Three.PointLight(0xffffff);
        point.position.set(4, 2, 3); //点光源位置
        this.scene.add(point); //点光源添加到场景中
        //环境光
        var ambient = new Three.AmbientLight(0x444444);
        this.scene.add(ambient);

        //把模型和材质结合起来。建立成网格对象
        this.mesh = new Three.Mesh(geometry, material)

        //把结合体放入场景进行渲染
        this.scene.add(this.mesh)

        //位置偏移量
        this.mesh.rotation.x = 0.5

        //创建渲染器
        this.renderer = new Three.WebGLRenderer({ antialias: true }/*去掉锯齿*/)

        //设置大小
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        //把场景渲染到dom树上
        container.appendChild(this.renderer.domElement)
      },
      animate: function () {
        //定义动画
        requestAnimationFrame(this.animate)
        //this.mesh.rotation.x += 0.01
        //旋转方法
        this.mesh.rotation.y -= 0.002

        //添加场景和摄像机
        this.renderer.render(this.scene, this.camera)
      }
    },
    mounted() {
      this.init()
      this.animate()
      var that = this;
      window.addEventListener('resize', () => {
        that.camera.aspect = window.innerWidth / window.innerHeight;
        that.camera.updateProjectionMatrix();
        that.renderer.setSize(window.innerWidth, window.innerHeight)
      })
    }
  }
</script>
<style scoped>
  #container {

  }
</style>
