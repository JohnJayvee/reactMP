import{r as n,j as e}from"./index-BxT-2LuN.js";const i=()=>{const[s,l]=n.useState("dashboard"),[t,a]=n.useState(!1);return e.jsxs("div",{className:"flex h-screen bg-gray-100",children:[e.jsx("div",{className:`fixed md:static inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transition-transform duration-300 transform ${t?"translate-x-0":"-translate-x-full"} md:translate-x-0 z-50`,children:e.jsx("nav",{children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{className:`${s==="dashboard"?"bg-gray-700":""} rounded-lg`,children:e.jsx("a",{href:"#dashboard",className:"block p-2 rounded-lg transition duration-300 transform hover:scale-105",onClick:()=>{l("dashboard"),a(!1)},children:"Dashboard"})}),e.jsx("li",{className:`${s==="users"?"bg-gray-700":""} rounded-lg`,children:e.jsx("a",{href:"#users",className:"block p-2 rounded-lg transition duration-300 transform hover:scale-105",onClick:()=>{l("users"),a(!1)},children:"Users"})}),e.jsx("li",{className:`${s==="settings"?"bg-gray-700":""} rounded-lg`,children:e.jsx("a",{href:"#settings",className:"block p-2 rounded-lg transition duration-300 transform hover:scale-105",onClick:()=>{l("settings"),a(!1)},children:"Settings"})})]})})}),e.jsxs("div",{className:`flex-1 flex flex-col transition-all duration-300 ${t?"ml-64 md:ml-0":""}`,children:[e.jsxs("header",{className:"bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg",children:[e.jsx("button",{className:"md:hidden text-white focus:outline-none",onClick:()=>a(!t),children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})}),e.jsx("h1",{className:"text-2xl font-bold transition duration-300 transform hover:scale-105",children:"Admin Panel"}),e.jsx("div",{children:e.jsx("button",{className:"bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300 transform hover:scale-105",children:"Logout"})})]}),e.jsxs("main",{className:"p-4 flex-1 overflow-y-auto",children:[e.jsxs("section",{id:"dashboard",className:`${s==="dashboard"?"block":"hidden"} p-4`,children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Dashboard"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Card 1"}),e.jsx("p",{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]}),e.jsxs("div",{className:"bg-white p-4 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Card 2"}),e.jsx("p",{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]}),e.jsxs("div",{className:"bg-white p-4 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Card 3"}),e.jsx("p",{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})]}),e.jsxs("section",{id:"users",className:`${s==="users"?"block":"hidden"} p-4`,children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Users"}),e.jsx("p",{children:"This is the Users page."})]}),e.jsxs("section",{id:"settings",className:`${s==="settings"?"block":"hidden"} p-4`,children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Settings"}),e.jsx("p",{children:"This is the Settings page."})]})]})]}),t&&e.jsx("div",{className:"fixed inset-0 bg-black opacity-50 md:hidden",onClick:()=>a(!1)})]})};export{i as default};