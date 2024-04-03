const id = "madania";
const collection = "showcase";
const data = {title:"Madania School",image:
						new Proxy({"src":"/_astro/madania.jgqA_lYd.png","width":3358,"height":1859,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://www.madania.sch.id/",featured:4};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/madania.json",
	rawData: "",
};

export { _internal, collection, data, id };
