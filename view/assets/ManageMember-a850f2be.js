import{b as S,a as j,u as w,r as m,j as t,y as M}from"./index-453d9d77.js";import u from"./AvatarCard-f0c0862e.js";const N="/assets/404Page-f02e8912.svg",k=({manageList:h,manageMember:d})=>{const{user:c,axiosJWT:p,useAppDispatch:b}=S(),{dispatch:n}=j(),{state:l}=w(),[A,f]=m.useState(""),o=m.useRef(null),e=l.isSearchedMember,v=(r,s)=>{let a=null;return(...i)=>{a&&clearTimeout(a),a=window.setTimeout(()=>{r.apply(null,i)},s)}},x=r=>{var s;if(r!==""){const a={idCollection:(s=l.isLoadPalette.collection)==null?void 0:s._id};M(a,r,c==null?void 0:c.accessToken,p,b).then(i=>{n({type:"isSearchedMember",payload:i.data}),n({type:"isSearchedStatusMember",payload:i.status})}).catch(i=>{n({type:"isSearchedStatusMember",payload:i.status})})}},g=r=>{const s=r.target.value;f(s),o.current&&clearTimeout(o.current);const a=v(x,1e3);o.current=window.setTimeout(()=>{a(s)},1e3)},y=()=>(e==null?void 0:e.isIntive)===null?t.jsx(u,{idMember:e.member.id,username:e.member.username,avatar:e.member.avatar,isAdmin:!1,isIntive:e.isIntive,isActive:!1,isDelete:!1,manageMember:d}):t.jsx(u,{idMember:e.member.id,username:e.member.username,avatar:e.member.avatar,isAdmin:!1,isIntive:e.isIntive.isIntive,isActive:e.isIntive.isActive,isDelete:!1,manageMember:()=>d});return t.jsxs("div",{className:"relative my-5",children:[t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:t.jsx("div",{className:"pr-2 border-r-2 border-gray-400 dark:border-white",children:t.jsx("i",{className:"fa-solid fa-magnifying-glass text-gray-400 dark:text-white"})})}),t.jsx("input",{type:"search",id:"search",autoComplete:"off",onChange:g,className:"block h-14 pl-14 w-full text-sm empty:before:content-[attr(placeholder)] empty:before:text-gray-600 bg-white/60 dark:bg-white/30 rounded-lg focus-visible:outline-none px-4 py-2 caret-greatBlue cursor-text",placeholder:"Search member here for add more people"})]}),t.jsxs("div",{className:"relative divide-y divide-white/50",children:[h,l.isSearchedStatusMember===200?y():l.isSearchedStatusMember===400&&t.jsxs("div",{className:"flex flex-col justify-center items-center w-full",children:[t.jsx("img",{src:N,className:"w-44 h-44",alt:"Empty",draggable:"false",loading:"lazy"}),t.jsx("p",{className:"text-lg font-semibold text-white/80",children:"No matching results."})]})]})]})};export{k as default};