const id = "widyatama";
const collection = "showcase";
const data = {title:"Siakad Widyatama",image:
						new Proxy({"src":"/_astro/widyatama.2M_xv-Ai.png","width":3360,"height":1834,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://www.widyatama.ac.id/",featured:8};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/widyatama.json",
	rawData: "",
};

export { _internal, collection, data, id };
