import{j as g}from"./styled-components.browser.esm-BiQtg4p9.js";import{R as s}from"./index-BjzEU6Zr.js";import{L as o}from"./LinearProgress-BulaN-sJ.js";const v={id:"LinearProgress",title:"Components/LinearProgress",component:o.type,argTypes:{}},f=i=>{const[m,c]=s.useState(0);return s.useEffect(()=>{const p=setInterval(()=>{c(r=>{if(r===100)return 0;const u=Math.random()*10;return Math.min(r+u,100)})},500);return()=>{clearInterval(p)}},[]),g.jsx(o.type,{...i,value:m})},e=f.bind({});e.storyName="default";e.args={};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A118"}};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(previousProgress => {
        if (previousProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <LinearProgress.type {...args} value={progress} />;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const y=["Basic"];export{e as Basic,y as __namedExportsOrder,v as default};
