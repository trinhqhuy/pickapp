import{l as b,_ as j,j as e,L as c,u as D,a as R,b as T,r as n,g as V,d as G,c as v,M as W,e as J}from"./index-6bd8cebf.js";const Y=b(()=>j(()=>import("./UpdateCollection-a0234465.js"),["assets/UpdateCollection-a0234465.js","assets/index-6bd8cebf.js","assets/index-4ae2895e.css","assets/FolderIcon-44e77bfa.js"]),{fallback:e.jsx(c,{})}),q=b(()=>j(()=>import("./ActionSheet-057b7196.js"),["assets/ActionSheet-057b7196.js","assets/index-6bd8cebf.js","assets/index-4ae2895e.css"]),{fallback:e.jsx(c,{})}),$=b(()=>j(()=>import("./AvatarCard-89e0573f.js"),["assets/AvatarCard-89e0573f.js","assets/index-6bd8cebf.js","assets/index-4ae2895e.css"]),{fallback:e.jsx(c,{})}),K=b(()=>j(()=>import("./ManageMember-5026973a.js"),["assets/ManageMember-5026973a.js","assets/index-6bd8cebf.js","assets/index-4ae2895e.css","assets/AvatarCard-89e0573f.js"]),{fallback:e.jsx(c,{})}),Q=b(()=>j(()=>import("./SearchBar-316407fc.js"),["assets/SearchBar-316407fc.js","assets/index-6bd8cebf.js","assets/index-4ae2895e.css"]),{fallback:e.jsx(c,{})}),X=({onClose:a})=>e.jsx(n.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(W,{title:"Update collection",onClose:a,children:e.jsx(Y,{})})}),Z=({onClose:a})=>{const{user:s,axiosJWT:t,useAppDispatch:o}=T(),{state:r}=D(),{dispatch:m}=R(),h=()=>{m({type:"isReset",payload:!0}),m({type:"isLoadPalette",payload:{status:!1,collection:null}}),m({type:"isRightHamberger",payload:!r.isRightHamberger})},g=()=>{var p;return J((p=r.isLoadPalette.collection)==null?void 0:p._id,s==null?void 0:s.accessToken,t,o).then(_=>{var f;const k=(f=s==null?void 0:s.user)==null?void 0:f.id;v(k,s==null?void 0:s.accessToken,t,o),a(),h()})};return e.jsx(n.Suspense,{fallback:e.jsx(c,{}),children:e.jsxs(q,{title:"Would you like to delete this collection ?",icon:"trash",color:"#ff5365",mobileTitle:"This collection will be deleted from all of your application. You cannot undo this action.",message:"You cannot undo this action.",onClose:a,children:[e.jsx("button",{className:"w-full h-12 text-greatRed text-lg px-2 block sm:block md:block lg:hidden xl:hidden 2xl:hidden",onClick:g,children:"Delete collection"}),e.jsx("button",{className:"w-full h-12 text-greatRed text-lg px-2 hidden sm:hidden md:hidden lg:block xl:block 2xl:block",onClick:g,children:"Delete"})]})})},ee=({onClose:a,manageList:s,manageMember:t})=>e.jsx(n.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(Q,{title:"Manage member",onClose:a,children:e.jsx(K,{manageMember:t,manageList:s})})}),se=()=>{const{state:a}=D(),{dispatch:s}=R(),{user:t,axiosJWT:o,useAppDispatch:r,memberList:m}=T(),h=m,[g,p]=n.useState(!1),[_,k]=n.useState(!1),[f,E]=n.useState(!1),[y,F]=n.useState(!1),[L,C]=n.useState(!1),P=()=>{p(!0)},U=()=>{p(!1)},I=g&&e.jsx(X,{onClose:U}),O=(l,i)=>{var u;return!l&&((u=t==null?void 0:t.user)==null?void 0:u.id)!==i},w=n.useMemo(()=>{if(Array.isArray(h))return h.map((l,i)=>{const d=l.user.map((x,A)=>e.jsx($,{idMember:l._id,username:x.username,avatar:x.avatar,isAdmin:l.isAdmin,isActive:!1,isIntive:!1,isDelete:O(l.isAdmin,l._idUser),manageMember:()=>N},x.id+A));return e.jsx(n.Fragment,{children:d},l._id+i)})},[m]),H=()=>{const l=()=>{var i;v((i=t==null?void 0:t.user)==null?void 0:i.id,t==null?void 0:t.accessToken,o,r),s({type:"isReset",payload:!0}),s({type:"isLoadPalette",payload:{status:!1,collection:null}}),s({type:"isRightHamberger",payload:!a.isRightHamberger})};if(Array.isArray(h)){let i=!1,u;return h.filter(d=>{var x;d.isAdmin&&((x=t==null?void 0:t.user)==null?void 0:x.id)===d._idUser?i=!0:(u=d._id,i=!1)}),e.jsxs("a",{href:"",onClick:d=>{d.preventDefault(),i?k(!_):G(u,t==null?void 0:t.accessToken,o,r).then(x=>{var S;const A=(S=t==null?void 0:t.user)==null?void 0:S.id;v(A,t==null?void 0:t.accessToken,o,r),l()})},className:"flex flex-row items-center",children:[e.jsx("div",{className:"bg-gray-300/30 dark:bg-white/40 w-10 h-10 inline-flex  justify-center items-center rounded-full mx-2.5 ",children:e.jsx("i",{className:"fa-solid fa-trash text-black dark:text-white"})}),e.jsx("span",{className:"text-black dark:text-white text-md truncate ...",children:i?"Delete collection":"Leave collection"})]})}},z=f&&e.jsxs("ul",{className:"divide-y divide-gray-300",children:[e.jsxs("li",{className:"w-full ml-3 pb-3 flex flex-row items-center",children:[e.jsx("div",{className:"bg-gray-300/30 dark:bg-white/40 w-10 h-10 flex justify-center items-center rounded-full",children:e.jsx("i",{className:"fa-solid fa-user-group text-black dark:text-white"})}),e.jsxs("span",{className:"text-black dark:text-white text-md ml-3 ",children:[w==null?void 0:w.length," member"]})]}),e.jsx("li",{className:"ml-3 py-3",children:e.jsxs("button",{onClick:()=>C(!0),className:"w-full flex flex-row items-center",children:[e.jsx("div",{className:"bg-gray-300/30 dark:bg-white/40 w-10 h-10 flex justify-center items-center rounded-full",children:e.jsx("i",{className:"fa-solid fa-gear text-black dark:text-white"})}),e.jsx("span",{className:"text-black dark:text-white text-md ml-3",children:"Manage"})]})})]}),B=y&&e.jsxs("ul",{className:"w-auto divide-y divide-gray-300",children:[e.jsx("li",{className:"w-auto pb-3 flex flex-row items-center",children:e.jsxs("button",{className:"flex flex-row items-center",onClick:P,children:[e.jsx("div",{className:"bg-gray-300/30 dark:bg-white/40 w-10 h-10 flex justify-center items-center rounded-full mx-3",children:e.jsx("i",{className:"fa-solid fa-pen-to-square text-black dark:text-white"})}),e.jsx("span",{className:"text-black dark:text-white text-md truncate ...",children:"Edit collection"})]})}),e.jsx("li",{className:"w-auto py-3",children:H()})]}),M=l=>l?e.jsx("i",{className:"fa-solid fa-angle-up"}):e.jsx("i",{className:"fa-solid fa-angle-right"}),N=()=>{var l;V((l=a.isLoadPalette.collection)==null?void 0:l._id,t==null?void 0:t.accessToken,o,r)};return n.useEffect(()=>{N()},[a.isRightHamberger]),a.isRightHamberger?e.jsxs("aside",{className:"bg-whiteGreen dark:bg-darkBlue transition-transform transform-gpu delay-500 duration-500 motion-safe:translate-y-0 h-full absolute z-30 md:sticky lg:sticky xl:sticky 2xl:sticky overflow-hidden right-0 w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/4",children:[I,_&&e.jsx(Z,{onClose:()=>k(!1)}),L&&e.jsx(ee,{manageList:w,manageMember:N,onClose:()=>C(!1)}),e.jsx("div",{className:"flex justify-center items-center h-28 ",children:e.jsx("label",{className:" text-black text-xl font-bold dark:text-white truncate ...",children:"Infomation"})}),e.jsxs("div",{className:"flex flex-col m-3 w-auto h-38 content-center bg-[#F3FFFF] dark:bg-[#83ABD6] transform-gpu shadow-[2px_2px_15px_2px_#9ceaef] dark:shadow-[2px_2px_15px_2px_#32679D] rounded-md ",children:[e.jsx("div",{className:"p-3 ",children:e.jsxs("button",{className:"text-black dark:text-white text-lg font-medium w-full h-full text-start flex items-center justify-between",onClick:()=>{E(!f)},children:[e.jsx("span",{children:"Members"}),M(f)]})}),z]}),e.jsxs("div",{className:"flex flex-col m-3 w-auto h-38 content-center bg-[#F3FFFF] dark:bg-[#83ABD6] transform-gpu shadow-[2px_2px_15px_2px_#9ceaef] dark:shadow-[2px_2px_15px_2px_#32679D] rounded-md ",children:[e.jsx("div",{className:"p-3 ",children:e.jsxs("button",{className:"text-black dark:text-white text-lg font-medium w-full h-full text-start flex items-center justify-between",onClick:()=>F(!y),children:[e.jsx("span",{children:"Customize"}),M(y)]})}),B]})]}):e.jsx("div",{})};export{se as default};
