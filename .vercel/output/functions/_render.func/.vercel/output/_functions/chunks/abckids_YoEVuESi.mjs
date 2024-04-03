const id = "abckids";
const collection = "showcase";
const data = {title:"Abc Kids Brighton",image:
						new Proxy({"src":"/_astro/abckids.3z-bEKr9.png","width":3352,"height":1854,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://abckids-brighton.sch.id/",featured:1};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/abckids.json",
	rawData: "",
};

export { _internal, collection, data, id };
