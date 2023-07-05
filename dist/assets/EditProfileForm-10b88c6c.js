import{r,j as e,i as c,b as F,k as U,m as k,n as E}from"./index-6bd8cebf.js";const I=({getName:t,isIcon:n})=>{const[i,d]=r.useState(n),u=(s,l)=>{s.preventDefault(),t(l),d(l)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"scrollbar-hidden px-[15vw] sm:px-[15vw] md:px-[15vw] lg:px-[15vw] xl:px-[13vw] 2xl:px-[13vw] w-full flex snap-x overflow-x-auto self-center",children:Object.keys(c).map(s=>e.jsx("div",{children:e.jsx("input",{type:"image",value:s,id:`1${s}`,name:"status",src:c[s],className:`w-12 h-12 my-2 mx-10 rounded-full ${i.toString()===s?"border-4 border-greatGreen":""}`,alt:"button",onClick:l=>u(l,Number(s))})},`11${s}`))})})},B=()=>{var p,h,w;const{user:t,axiosJWT:n,useAppDispatch:i}=F(),[d,u]=r.useState(""),s=U(),[l,v]=r.useState((p=t==null?void 0:t.user)==null?void 0:p.avatar),[x,N]=r.useState((h=t==null?void 0:t.user)==null?void 0:h.email),[m,y]=r.useState(""),[g,S]=r.useState((w=t==null?void 0:t.user)==null?void 0:w.username),[f,C]=r.useState(!1),P=()=>{var b,j;const a={id:(b=t==null?void 0:t.user)==null?void 0:b.id,username:g,password:m,email:x,avatar:l};k((j=t==null?void 0:t.user)==null?void 0:j.id,a,t==null?void 0:t.accessToken,n,i).then(o=>{o.status===200&&E(a==null?void 0:a.id,t==null?void 0:t.accessToken,n,i,s),o.status===500&&u("Username or email already used")}).catch(o=>console.log(o))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"py-5",children:[e.jsx("div",{className:"flex flex-row w-full mt-2 mb-3 justify-center",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"p-2 m-1 flex flex-row justify-center items-center",children:[e.jsx("div",{className:"absolute z-10 rounded-full w-200 h-32 grid justify-items-center items-center",children:e.jsx("img",{className:"w-24 h-24 rounded-full",alt:"Profile",draggable:"false",loading:"lazy",src:c[l]})}),e.jsx("button",{className:"absolute z-20 -right-1 top-24 self-start w-10 h-10 rounded-full bg-greatGreen",onClick:()=>C(!f),children:e.jsx("i",{className:"fa-solid fa-user-pen text-white"})}),e.jsx("div",{className:"blur-[18px] transform-gpu rounded-full w-200 h-32 grid justify-items-center items-center",children:e.jsx("img",{className:"w-24 h-24",alt:"Profile",draggable:"false",loading:"lazy",src:c[l]})})]})})}),f&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-md py-2",children:"Avatar"}),e.jsx("div",{className:"w-full empty:before:content-[attr(placeholder)] empty:before:text-gray-600 bg-white/60 dark:bg-white/30 rounded-lg focus-visible:outline-none px-4 py-2 caret-greatBlue cursor-text",children:e.jsx(I,{getName:v,isIcon:l})})]}),e.jsx("div",{className:"text-md py-2",children:"Username"}),e.jsx("input",{className:"w-full empty:before:content-[attr(placeholder)] empty:before:text-gray-600 bg-white/60 dark:bg-white/30 rounded-lg focus-visible:outline-none px-4 py-2 caret-greatBlue cursor-text",onChange:a=>S(a.target.value),autoFocus:!0,defaultValue:g}),e.jsx("div",{className:"text-md py-2",children:"Email"}),e.jsx("input",{type:"text",autoComplete:"false",className:"w-full empty:before:text-gray-600 bg-white/60 dark:bg-white/30 rounded-lg focus-visible:outline-none px-4 py-2 caret-greatBlue cursor-text",onChange:a=>N(a.target.value),defaultValue:x}),e.jsx("p",{className:"text-lg text-greatRed",children:d}),e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx("div",{className:"text-md py-2",children:"Password"}),e.jsx("button",{className:"text-md text-greatBlue",children:"Forgot password"})]}),e.jsx("input",{type:"password",className:"w-full empty:before:content-[attr(placeholder)] empty:before:text-gray-600 bg-white/60 dark:bg-white/30 rounded-lg focus-visible:outline-none px-4 py-2 caret-greatBlue cursor-text",onChange:a=>y(a.target.value),autoFocus:!0,defaultValue:m,placeholder:"Change your password"})]}),e.jsx("div",{className:"px-4 py-3 text-right",children:e.jsxs("button",{className:"h-10 w-fit px-5 text-white bg-gradient-to-br from-greatOrange to-whiteGreen hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-white dark:focus:ring-greatblue font-medium rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center",onClick:P,children:[e.jsx("i",{className:"fas fa-plus"})," Update"]})})]})};export{B as default};
