import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
const status=document.querySelector('#status'),canvas=document.querySelector('canvas');
async function start(){
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-4,4,4,-4,.05,100);
 const controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.09;controls.minZoom=.45;controls.maxZoom=5;controls.maxPolarAngle=Math.PI*.49;controls.autoRotateSpeed=.7;
 scene.add(new THREE.HemisphereLight(0xd7e5ff,0x504537,1.65));
 const key=new THREE.DirectionalLight(0xffebd1,3.2);key.position.set(-3,7,4);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:20});key.shadow.bias=-.00015;key.shadow.normalBias=.012;scene.add(key);
 const fill=new THREE.DirectionalLight(0xbad5ff,1.05);fill.position.set(4,4,1);scene.add(fill);
 for(const x of [-1.2,0,1.2]){const l=new THREE.PointLight(0x009bff,.8,3,2);l.position.set(x,.3,-1.7);scene.add(l);}
 const gltf=await new GLTFLoader().loadAsync('./studio.glb');scene.add(gltf.scene);
 gltf.scene.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=!o.name.startsWith('presenter');}});
 const bounds=new THREE.Box3().setFromObject(gltf.scene),center=bounds.getCenter(new THREE.Vector3());
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.22}));ground.rotation.x=-Math.PI/2;ground.position.y=bounds.min.y-.015;ground.receiveShadow=true;scene.add(ground);
 const presets={iso:new THREE.Vector3(-6,6.3,8),front:new THREE.Vector3(0,1.5,10),top:new THREE.Vector3(0,10,.001)};
 let view='iso',dirty=true;
 function fit(){
  const w=innerWidth,h=innerHeight,aspect=w/h;renderer.setSize(w,h,false);camera.updateMatrixWorld(true);let px=0,py=0;
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const v=new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);px=Math.max(px,Math.abs(v.x));py=Math.max(py,Math.abs(v.y));}
  const half=Math.max(py,px/aspect)*1.18;camera.left=-half*aspect;camera.right=half*aspect;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();dirty=true;
 }
 function setView(name){view=name;controls.autoRotate=false;document.querySelector('#rotate').setAttribute('aria-pressed','false');controls.target.copy(center);camera.position.copy(center).add(presets[name]);camera.zoom=1;camera.lookAt(center);controls.update();fit();document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===name)));}
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
 document.querySelector('#reset').addEventListener('click',()=>setView('iso'));
 document.querySelector('#rotate').addEventListener('click',e=>{controls.autoRotate=!controls.autoRotate;e.currentTarget.setAttribute('aria-pressed',String(controls.autoRotate));});
 document.querySelector('#light').addEventListener('input',e=>{renderer.toneMappingExposure=Number(e.target.value);dirty=true;});
 controls.addEventListener('change',()=>{dirty=true;});addEventListener('resize',fit);
 setView('iso');status.hidden=true;document.body.dataset.ready='true';
 function frame(){requestAnimationFrame(frame);if(document.hidden)return;controls.update();if(dirty||controls.autoRotate){renderer.render(scene,camera);dirty=false;}}frame();
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();status.textContent='A visualização foi interrompida. Recarregue a página.';status.hidden=false;});
 window.studioViewer={scene,camera,renderer,controls,setView};
}
start().catch(error=>{console.error(error);status.textContent='Não foi possível abrir o 3D. Tente um navegador atualizado com aceleração gráfica habilitada.';status.classList.add('error');document.body.dataset.ready='error';});
