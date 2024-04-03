const id = "estax";
const collection = "showcase";
const data = {title:"Estax Digital",image:
						new Proxy({"src":"/_astro/estax.7SMOT2ZN.png","width":3358,"height":1837,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://estax.id/",featured:3};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/estax.json",
	rawData: "",
};

export { _internal, collection, data, id };
