(self.webpackChunkuxp_photoshop_documentation_2021=self.webpackChunkuxp_photoshop_documentation_2021||[]).push([[5992],{3999:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return s}});var a=n(22122),m=n(19756),r=(n(15007),n(64983)),o=n(99536),d=["components"],p={},l={_frontmatter:p},i=o.Z;function s(e){var t=e.components,n=(0,m.Z)(e,d);return(0,r.mdx)(i,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"photoshop-app"},"Photoshop App"),(0,r.mdx)("p",null,"The top level application object, root of our DOM"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const app = require('photoshop').app\n")),(0,r.mdx)("p",null,"From here, you can access open documents, tools, UI elements and run commands or menu items."),(0,r.mdx)("h2",{id:"accessors"},"Accessors"),(0,r.mdx)("h3",{id:"actiontree"},"actionTree"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"get actionTree"),"(): ",(0,r.mdx)("em",{parentName:"p"},(0,r.mdx)("a",{parentName:"em",href:"/uxp-photoshop-2021/ps_reference/classes/actionset/"},"ActionSet"),"[]")),(0,r.mdx)("p",null,"Returns the action tree shown in Actions panel, as an array of ActionSets, each containing actions"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"activedocument"},"activeDocument"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"get activeDocument"),"(): ",(0,r.mdx)("em",{parentName:"p"},(0,r.mdx)("a",{parentName:"em",href:"/uxp-photoshop-2021/ps_reference/classes/document/"},"Document"))),(0,r.mdx)("p",null,"The current active document"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const doc = Photoshop.activeDocument;\n")),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"set activeDocument"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"doc"),": ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop-2021/ps_reference/classes/document/"},"Document"),"): ",(0,r.mdx)("em",{parentName:"p"},"void")),(0,r.mdx)("p",null,"Set the current active document to be given one"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const doc = Photoshop.activeDocument;\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"doc")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop-2021/ps_reference/classes/document/"},"Document"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"get backgroundColor"),"(): ",(0,r.mdx)("em",{parentName:"p"},"Color")),(0,r.mdx)("p",null,"The default background color and color style for documents."),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"currenttool"},"currentTool"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"get currentTool"),"(): ",(0,r.mdx)("em",{parentName:"p"},"Tool")),(0,r.mdx)("p",null,"Current selected tool. For now, the Tool class is an object with\nonly an ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field. In the future, we aim to provide tools with their own classes"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"documents"},"documents"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"get documents"),"(): ",(0,r.mdx)("em",{parentName:"p"},(0,r.mdx)("a",{parentName:"em",href:"/uxp-photoshop-2021/ps_reference/classes/document/"},"Document"),"[]")),(0,r.mdx)("p",null,"List of currently open documents"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const documents = app.documents;\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"eventnotifier"},"eventNotifier"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"set eventNotifier"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"handler"),": function): ",(0,r.mdx)("em",{parentName:"p"},"void")),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Dev environments only.")),(0,r.mdx)("p",null,"A callback for event notifications in Photoshop. This will cause your plugin to get a notification\non every event the user is doing, so it may slow things down. But it will be helpful to figure out\ndifferent descriptors"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.eventNotifier = (event, descriptor) => {\n   console.log(event, JSON.stringify(descriptor, null, ' '));\n}\n")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"This is temporary while we are in Alpha, we are working on a more structured notification system\nThis setter will not function outside developer mode")),(0,r.mdx)("p",null,"To register listeners to specific events in production, follow ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop-2021/ps_reference/media/advanced/event-listener/"},"Event Listeners")," in the Advanced section."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("p",null,"▪ ",(0,r.mdx)("strong",{parentName:"p"},"handler"),": ",(0,r.mdx)("em",{parentName:"p"},"function")),(0,r.mdx)("p",null,"▸ (",(0,r.mdx)("inlineCode",{parentName:"p"},"event"),": string, ",(0,r.mdx)("inlineCode",{parentName:"p"},"descriptor"),": object): ",(0,r.mdx)("em",{parentName:"p"},"void")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"event")),(0,r.mdx)("td",{parentName:"tr",align:null},"string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"descriptor")),(0,r.mdx)("td",{parentName:"tr",align:null},"object")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"foregroundcolor"},"foregroundColor"),(0,r.mdx)("p",null,"• ",(0,r.mdx)("strong",{parentName:"p"},"get foregroundColor"),"(): ",(0,r.mdx)("em",{parentName:"p"},"Color")),(0,r.mdx)("p",null,"The default foreground color (used to paint, fill, and stroke selections)"),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"batchplay"},"batchPlay"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"batchPlay"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"commands"),": any, ",(0,r.mdx)("inlineCode",{parentName:"p"},"options"),": any): ",(0,r.mdx)("em",{parentName:"p"},"Promise‹Descriptor[]›")),(0,r.mdx)("p",null,"At the heart of all our APIs is ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop-2021/ps_reference/media/advanced/batchplay/"},"batchPlay"),". It is the evolution of executeAction. It accepts ActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially without updating the UI. This API is subject to change and may be accessible in other ways in the future. Learn more in our ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop-2021/ps_reference/media/advanced/batchplay/"},"batchPlay reference"),"."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"commands")),(0,r.mdx)("td",{parentName:"tr",align:null},"any")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:null},"any")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"bringtofront"},"bringToFront"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"bringToFront"),"(): ",(0,r.mdx)("em",{parentName:"p"},"void")),(0,r.mdx)("p",null,"Brings application to focus, useful when your script ends, or requires an input"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"createdocument"},"createDocument"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"createDocument"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"options?"),": DocumentCreateOptions): ",(0,r.mdx)("em",{parentName:"p"},"Promise‹",(0,r.mdx)("a",{parentName:"em",href:"/uxp-photoshop-2021/ps_reference/classes/document/"},"Document")," | null›")),(0,r.mdx)("p",null,"Create a new document. See @DocumentCreateOptions."),(0,r.mdx)("p",null,"Documents not created from presets must specify width, height, resolution, (color) mode, and fill."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'let newDoc1 = app.createDocument(); // creates a 2100px * 1500px document\nlet newDoc2 = app.createDocument({width: 800, height: 600, resolution: 300, mode: "RGBColorMode", fill: "transparent"});\nlet newDoc3 = app.createDocument({preset: "My Default Size 1"});\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"options?")),(0,r.mdx)("td",{parentName:"tr",align:null},"DocumentCreateOptions")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"open"},"open"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"open"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"entry?"),": File): ",(0,r.mdx)("em",{parentName:"p"},"Promise‹",(0,r.mdx)("a",{parentName:"em",href:"/uxp-photoshop-2021/ps_reference/classes/document/"},"Document"),"›")),(0,r.mdx)("p",null,"Opens the specified document and returns it's model"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"(0.4.0) Please note that this API now requires you to provide a UXPFileEntry")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Open a file given entry\nlet entry = await require('uxp').storage.localFileSystem.getFileForOpening()\nconst document = await app.open(entry);\n\n// Show open file dialog\nconst document = await app.open();\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"entry?")),(0,r.mdx)("td",{parentName:"tr",align:null},"File")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"showalert"},"showAlert"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"showAlert"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"message"),": string): ",(0,r.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,r.mdx)("p",null,"Shows an alert in Photoshop with the given message"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parameters:")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"message")),(0,r.mdx)("td",{parentName:"tr",align:null},"string")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-photoshop-md-2b46155cf4abaff7e642.js.map