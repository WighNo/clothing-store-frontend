import{k as n,Q as o}from"./entry.6a536ff6.js";import{a as r}from"./user-request-group.23c589e2.js";async function f(s,t,e){await new r(n()).getUserInfo(async a=>{if(a.role!=s){if(e==null)return o("/login");e()}else await t()})}export{f as c};
