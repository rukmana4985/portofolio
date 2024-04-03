const id = "tryout";
const collection = "showcase";
const data = {title:"Tryout Akses Education",image:
						new Proxy({"src":"/_astro/tryout.VS5fvOkg.png","width":3358,"height":1846,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"http://tryout.akseseducation.id/",featured:7};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/tryout.json",
	rawData: "",
};

export { _internal, collection, data, id };
