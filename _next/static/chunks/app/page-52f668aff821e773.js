(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3566:function(e,n,t){Promise.resolve().then(t.bind(t,6839))},6839:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(7090),s=t(3882),o=t(7486),r=t(6246),a=t(8979),l=function(e,n,t,i){let s;let r=a=>{s||(s=a);let l=Math.min((a-s)/t,1),c=new o.Pa4().lerpVectors(e,n,l);i.object.position.copy(c),l<1&&requestAnimationFrame(r)};requestAnimationFrame(r)},c=function(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let n=e.current;if(!n)return;let t=new o.xsS;t.background=new o.Ilk("black");let i=new o.CP7({canvas:n});i.setSize(n.clientWidth,n.clientHeight);let s=new o.cPb(30,1);s.position.set(0,1,3);let c=new o.Ox3("purple",10),d=new o.Ox3("purple",10),w=new o.Ox3("white",5),u=new o.Ox3("white",5);u.position.set(0,20,0),c.position.set(-10,-20,5),w.position.set(0,-.5,0),d.position.set(10,-20,5),t.add(w),t.add(u),t.add(c),t.add(d);let p=new r.z(s,n);p.enableDamping=!0,p.dampingFactor=.2;let m=new a.E,f=()=>{m.load("/aladdin/genie/scene.gltf",e=>{e.scene.scale.set(1.5,1.5,1.5),e.scene.position.set(0,1.9,0),e.scene.rotation.set(1.2,0,0),t.add(e.scene)})};m.load("/aladdin/lamp/scene.gltf",e=>{t.add(e.scene);let n=()=>{p.update(),i.render(t,s),requestAnimationFrame(n)};n()});let h=()=>{let e=window.innerWidth,n=window.innerHeight;i.setSize(e,n),s.aspect=e/n,s.updateProjectionMatrix()},b=()=>{l(p.object.position.clone(),new o.Pa4(0,-6,3),2e3,p)},g=e=>{let n=new o.FM8(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight*2)+1),i=new o.iMs;i.setFromCamera(n,s);let r=i.intersectObjects(t.children,!0);r.length>0&&"LampBottom_0"===r[0].object.name&&(f(),setTimeout(()=>{b()},100))};return window.addEventListener("click",g),window.addEventListener("resize",h),h(),()=>{window.removeEventListener("click",g),window.removeEventListener("resize",h)}},[]),(0,i.jsx)("canvas",{ref:e,className:"w-full h-screen"})}}},function(e){e.O(0,[116,894,546,538,744],function(){return e(e.s=3566)}),_N_E=e.O()}]);