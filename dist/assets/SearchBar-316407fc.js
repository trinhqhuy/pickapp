import{a as r,v as i,j as e}from"./index-6bd8cebf.js";let a=document.getElementById("modal-root");if(!a){const l=document.createElement("div");l.id="modal-root",document.body.appendChild(l),a=l}const n=({onClose:l,title:t,children:o})=>{const{dispatch:s}=r();return i.createPortal(e.jsx("div",{className:"fixed z-40 overflow-y-auto top-0 w-full h-full left-0 ",children:e.jsxs("div",{className:"flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity",children:e.jsx("div",{className:"absolute inset-0 backdrop-blur-[2px]",onClick:()=>{l(),s({type:"isSearchedMember",payload:null}),s({type:"isSearchedStatusMember",payload:0})}})}),e.jsx("span",{className:"inline-block align-middle h-full  md:h-screen lg:h-screen xl:h-screen 2xl:h-screen"}),e.jsx("div",{className:"inline-block align-center backdrop-filter backdrop-blur-2xl bg-white/40 border-[1.5px]  border-white rounded-lg text-left overflow-hidden shadow-xl transform-gpu transition-all sm:my-8 align-middle max-w-lg w-full",role:"PopOvers","aria-modal":"true","aria-labelledby":"modal-headline",children:e.jsxs("div",{className:"px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsx("div",{className:"flex flex-row justify-between items-center",children:e.jsx("span",{className:"text-2xl font-bold",children:t})}),o]})})]})}),a)};export{n as default};
