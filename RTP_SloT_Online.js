const u=4;function h(t){var e=0;for(var s=0;s<t.length;s++){var o=t.charCodeAt(s);e=(e<<5)-e+o}var r=e+=1831565813;r=Math.imul(r^r>>>15,r|1);r^=r+Math.imul(r^r>>>7,r|61);return((r^r>>>14)>>>0)/4294967296}const t=()=>{const s=document.querySelectorAll("#progressApp");for(let e=0;e<s.length;e++){const o=s[e].getAttribute("seed");const r=(new Date).toISOString().split("T");const n=r[0];const a=Math.floor((Number(r[1].substring(0,2))+7)/u);const c=o+"-"+n+"-"+a;const f=Math.round(h(c)*87)+2;let t="#43aa8b";if(f<=30)t="#f94144";else if(f<=70)t="#f9c74f";s[e].querySelector(".progress").style="width: "+f+"%; background: "+t;s[e].querySelector(".progressText").innerHTML=f+"%"}};setTimeout(()=>{t()},1);setInterval(()=>{t()},u*3600*1e3);
