(self.webpackChunkuxp_photoshop_documentation_2021=self.webpackChunkuxp_photoshop_documentation_2021||[]).push([[5332],{94372:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return p}});var o=a(22122),n=a(19756),s=(a(15007),a(64983)),i=a(99536),r=["components"],c={},l={_frontmatter:c},h=i.Z;function p(e){var t=e.components,a=(0,n.Z)(e,r);return(0,s.mdx)(h,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"batchplay"},"batchPlay"),(0,s.mdx)("p",null,"Photoshop is complex software, with many internal classes and methods. Not all of these are as yet exposed via UXP. New interfaces are in development and will be shipped along with each release of Photoshop. In the meantime, if there is something your plugin needs to do that is not exposed in the current DOM, you may be able to use batchPlay."),(0,s.mdx)("p",null,"BatchPlay is for accessing Photoshop functionality that has not yet been exposed via APIs. BatchPlay is a way to send multiple actions into the Photoshop event queue and return their results."),(0,s.mdx)("p",null,"ExtendScript has executeAction; this is analagous to UXP's batchPlay. However, whereas executeAction could only play one descriptor at a time, batchPlay accepts an array of action descriptors. If you have multiple Photoshop operations that need to execute in series, using an array of action descriptors in a single batchPlay call is probably what you want."),(0,s.mdx)("p",null,"Unlike ExtendScript, where there were classes to construction action descriptors, references, and values, in batchPlay these are all built from JSON objects."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"/uxp-photoshop-2021/ps_reference/media/advanced/"},"batchPlay Reference")," has examples of constructing action descriptors using JSON, as well as using batchPlay in general."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-ps-basics-batchplay-intro-index-md-ac3db4bc1635abce8634.js.map