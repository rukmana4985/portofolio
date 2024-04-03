const id = "marketing";
const collection = "showcase";
const data = {title:"Marketing Akses",image:
						new Proxy({"src":"/_astro/marketing.5P0oSaVs.png","width":3360,"height":1849,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://akseseducation.com/1",featured:5};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/marketing.json",
	rawData: "",
};

export { _internal, collection, data, id };
