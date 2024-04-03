const id = "bimbelcpns";
const collection = "showcase";
const data = {title:"Bimbel CPNS",image:
						new Proxy({"src":"/_astro/bimbelcpns.AL_6jsaI.png","width":3360,"height":1843,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://bimbelcpns.build/",featured:2};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/bimbelcpns.json",
	rawData: "",
};

export { _internal, collection, data, id };
