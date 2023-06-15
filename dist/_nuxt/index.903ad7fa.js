import{_ as k}from"./page-header.vue.529b007a.js";import{a as b,r as _,k as f,l as C,u as i,h as a,m as s,w as c,p as R,o,q as e,x as g,s as h,I as w,J as z,t as l,K as B,L as G,E as q}from"./entry.be01013c.js";import{G as N}from"./grid.35dcc269.js";/* empty css                  */import{U}from"./user-request-group.21db651d.js";import{P as V}from"./product-request-group.c1fcd81e.js";import{C as $}from"./catalog-request-group.bad82dbe.js";import{c as E}from"./local-firewall.102d6951.js";const P={key:0},A={class:"flex justify-end"},D=e("div",{class:"mt-10 h-8 mb-5 grid grid-cols-12 items-center bg-gray-100 gap-x-5"},[e("p",{class:"text-center text-base font-medium"},"ID"),e("p",{class:"text-left col-span-4 font-medium text-base"},"Название"),e("p",{class:"text-center col-span-2 font-medium text-base"},"Описание"),e("div",{class:"grid grid-cols-2"},[e("p",{class:"text-left col-span-2 font-medium text-base ml-3"},"Цена")]),e("p",{class:"text-center font-medium text-base"},"Изображение"),e("div"),e("div")],-1),I={class:"h-16 outline outline-1 outline-gray-200/50 outline-offset-2 mb-5 grid grid-cols-12 gap-x-5 items-center"},L={class:"text-center"},S=["title"],j=["title"],F={key:1,class:"truncate col-span-2 text-center"},J={class:"grid grid-cols-2"},K={class:"text-right mr-1"},M=e("p",null,"₽",-1),T={class:"text-center"},H=e("div",null,null,-1),ae=b({__name:"index",setup(O){const d=_(!1),m=_([]);new V(f());const x=new $(f());return C(async()=>{await E(U.Admin,async()=>{d.value=!0}),await x.getSorted(n=>m.value=n)}),(n,u)=>{const v=k,r=G,p=q,y=N;return i(d)?(o(),a("div",P,[s(v,{header:"Админ-панель "}),s(y,null,{default:c(()=>[e("div",A,[s(p,{onClick:u[0]||(u[0]=t=>("useRouter"in n?n.useRouter:i(g))().push("/admin-panel/add-new-product")),type:"primary",size:"large"},{default:c(()=>[s(r,{class:"mr-2",size:"20",name:"ep:circle-plus"}),h(" Добавить товар ")]),_:1})]),D,(o(!0),a(w,null,z(i(m),t=>(o(),a("div",I,[e("p",L,l(t.id),1),e("p",{class:"truncate col-span-4",title:t.name},l(t.name),9,S),t.description!=null&&t.description.length>0?(o(),a("p",{key:0,class:"truncate col-span-2 text-center",title:t.description},l(t.description),9,j)):(o(),a("p",F,[s(r,{name:"ic:sharp-circle",class:"text-red-500",size:"20"})])),e("div",J,[e("p",K,l(t.price),1),M]),e("div",T,[s(r,{name:"ic:sharp-circle",class:B({"text-red-500":t.imageUrl==null,"text-green-500":t.imageUrl!=null}),size:"20"},null,8,["class"])]),H,s(p,{onClick:Q=>("useRouter"in n?n.useRouter:i(g))().push(`/admin-panel/edit-product/${t.id}`),class:"col-span-2"},{default:c(()=>[h("Редактировать")]),_:2},1032,["onClick"])]))),256))]),_:1})])):R("",!0)}}});export{ae as default};