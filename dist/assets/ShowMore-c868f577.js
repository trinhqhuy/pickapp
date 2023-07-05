import{l as J,_ as K,j as e,L as N,b as Q,r as d,o as Y,v as Z,w as C,q as p,x as ee}from"./index-6bd8cebf.js";import{H as te,R as oe}from"./HSVtoRGB-88920adb.js";const S=J(()=>K(()=>import("./PickerPanel-a28d4e9f.js"),["assets/PickerPanel-a28d4e9f.js","assets/index-6bd8cebf.js","assets/index-4ae2895e.css","assets/HSVtoRGB-88920adb.js"]),{fallback:e.jsx(N,{})}),ne=({onClose:i,setColorPalette:t,isColorPalette:s})=>e.jsx(d.Suspense,{fallback:e.jsx(N,{}),children:e.jsx(S,{onClose:i,setColorPalette:t,isColorPalette:s,onUpdate:!0})}),se=({onClose:i,setColorPalette:t,isColorPalette:s})=>e.jsx(d.Suspense,{fallback:e.jsx(N,{}),children:e.jsx(S,{onClose:i,setColorPalette:t,isColorPalette:s,onUpdate:!0})});let P=document.getElementById("context-menu");if(!P){const i=document.createElement("div");i.id="context-menu",document.body.appendChild(i),P=i}const le=({top:i,left:t,onAdd:s,onEdit:l,onDelete:h,onClose:a,arrayLength:m})=>Z.createPortal(e.jsx("div",{className:"fixed z-40 overflow-y-auto top-0 w-full h-full",onClick:()=>{a(!1)},children:e.jsx("div",{className:"fixed z-50",style:{top:i+"px",left:t+"px"},children:e.jsxs("div",{className:"absolute z-50 w-28 h-fit bg-white/80 backdrop-blur-2xl flex flex-col items-center rounded-xl",children:[m<5&&e.jsx("button",{onClick:()=>s(!0),className:"relative text-black px-1 py-2",children:"Add color"}),e.jsx("button",{onClick:l,className:"relative text-black px-1 py-2",children:"Edit color"}),e.jsx("button",{onClick:h,className:"relative text-greatRed px-1 py-2",children:"Delete"})]})})}),P),re=({paletteItem:i})=>{const{user:t,axiosJWT:s,useAppDispatch:l}=Q(),{name:h,_idCollection:a,_idUser:m,pin:g,color:k,id:b}=i,[r,w]=d.useState([...k]),[T,A]=d.useState(!1),[R,v]=d.useState({positionT:0,positionL:0}),[y,j]=d.useState(0),[E,B]=d.useState(!1),[H,ce]=d.useState([...k]),[G,M]=d.useState(!1),_=d.useRef(null),L=()=>{B(!0)},U=()=>{M(!1)},D=()=>{B(!1)},$=o=>{const{top:n,left:c}=o.currentTarget.getBoundingClientRect(),x=112/2,u=80;if(n+u*2<window.innerHeight){const f=n+u/3;v({positionT:f,positionL:c+window.scrollX-x})}else if(n+u*2>window.innerHeight){const f=n-u;v({positionT:f,positionL:c+window.scrollX-x})}else{const f=n-u;v({positionT:f,positionL:c+window.scrollX-x})}},z=()=>{if(r.length>1){const o=r.filter(c=>c!==r[y]);C({name:h,idUser:m,idCollection:a,color:o,pin:g},b,t==null?void 0:t.accessToken,s,l).then(c=>{w(o),p(a,t==null?void 0:t.accessToken,s,l)})}else ee(b,t==null?void 0:t.accessToken,s,l).then(o=>{p(a,t==null?void 0:t.accessToken,s,l)})},F=o=>{const n={name:h,idUser:m,idCollection:a,color:[...r,o],pin:g};C(n,b,t==null?void 0:t.accessToken,s,l).then(c=>{w([...r,o]),p(a,t==null?void 0:t.accessToken,s,l)})},I=o=>{var x;const n=/^#[0-9a-fA-F]{6}$/,c=/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;if(n.test(o)){const f=new te(o).convertToRGB();return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"group-hover:block group-focus:block hidden mx-1 text-center",children:`rgb(${f})`}),e.jsxs("span",{className:"group-hover:block group-focus:block hidden mx-1 text-center",children:["hex ",e.jsx("br",{}),o]})]})}if(c.test(o)){const u=(x=o.match(/\(([^)]+)\)/))==null?void 0:x[1],O=new oe(u).RGBtoHex();return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"group-hover:block group-focus:block hidden mx-1 text-center",children:o}),e.jsxs("span",{className:"group-hover:block group-focus:block hidden mx-1 text-center",children:["hex",e.jsx("br",{}),O]})]})}},V=r==null?void 0:r.map((o,n)=>e.jsxs("div",{className:"group flex flex-col justify-between items-center w-full h-full",style:{background:o,flex:1,color:Y(o)},children:[e.jsx("button",{className:"",onClick:c=>{$(c),A(!T),j(n)},children:e.jsx("i",{className:"fa-solid fa-ellipsis"})}),I(o)]},`1${n}`)),W=()=>{_.current.focus()},X=o=>{const n=[...r];n[y]=o,C({name:h,idUser:m,idCollection:a,color:n,pin:g},b,t==null?void 0:t.accessToken,s,l).then(x=>{w(n),p(a,t==null?void 0:t.accessToken,s,l),j(0)}).catch(()=>{w(n),p(a,t==null?void 0:t.accessToken,s,l),j(0)})},q=o=>{const n=`${o.currentTarget.textContent}`;n!==h&&C({name:n,idUser:m,idCollection:a,color:k,pin:g},b,t==null?void 0:t.accessToken,s,l).then(x=>{p(a,t==null?void 0:t.accessToken,s,l),j(0)})};return e.jsxs(e.Fragment,{children:[T===!0&&e.jsx(le,{top:R.positionT,left:R.positionL,onAdd:M,onEdit:L,onDelete:z,onClose:A,arrayLength:r.length}),E&&e.jsx(ne,{onClose:D,setColorPalette:X,isColorPalette:r}),G&&e.jsx(se,{onClose:U,setColorPalette:F,isColorPalette:H}),g&&e.jsx("div",{className:"absolute z-10 top-[20px] self-start",children:e.jsx("i",{className:"fa-solid fa-star text-greatRed text-2xl"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"w-full h-56 bg-white/30 my-5 rounded-xl flex justify-center items-center",children:e.jsx("div",{className:"flex ring-2 rounded-lg overflow-hidden ring-white/0 h-full flex-auto w-[15rem]",children:V})}),e.jsx("div",{className:"text-xl font-semibold focus-visible:border-white focus-visible:border-b-2 focus-visible:outline-none rounded-sm caret-greatBlue w-fit pr-2",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:o=>q(o),ref:_,children:h}),e.jsxs("div",{className:"flex flex-row justify-end gap-2",children:[e.jsx("button",{className:"h-10 w-fit px-5 text-white bg-gradient-to-br from-lightBlue to-greatBlue hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-white dark:focus:ring-greatblue font-medium rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center",onClick:W,children:"Rename"}),e.jsx("button",{className:"h-10 w-fit px-5 text-white bg-gradient-to-br from-cyanBlue to-greatGreen hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-white dark:focus:ring-greatblue font-medium rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center",type:"submit",children:"View"})]})]})]})};export{re as default};
