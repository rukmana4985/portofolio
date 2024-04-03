const id = "ppg";
const collection = "showcase";
const data = {title:"PPG Akses Education",image:
						new Proxy({"src":"/_astro/ppg.Hs1a9p3v.png","width":3360,"height":1854,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,url:"https://firebase.blog/",featured:6};
const _internal = {
	type: 'data',
	filePath: "/Users/administrator/Web Development/Frontend/astro-landing-page/src/content/showcase/ppg.json",
	rawData: "",
};

export { _internal, collection, data, id };
