/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, u as unescapeHTML, i as renderComponent, j as renderSlot, F as Fragment, A as AstroError, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, p as renderHead } from '../astro_os_mGpub.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
import { $ as $$Image } from './generic_Knl-dWFm.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_GxFFKq-7.mjs';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$f = createAstro("https://astro-moon-landing.netlify.app/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Icon;
  const req = Astro2.request;
  const { name = "", title, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new Error(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new Error('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new Error(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new Error(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new Error(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`} <use ${addAttribute(`#${id}`, "xlink:href")}></use> </svg>`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$e = createAstro("https://astro-moon-landing.netlify.app/");
const $$CompatibilityList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$CompatibilityList;
  const { items, title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-6xl space-y-2"> <div class="relative border border-default bg-offset px-6 pb-4 pt-8"> <h3 class="absolute right-4 top-0 -translate-y-1/2 rounded-full border border-current bg-default px-4 py-1 uppercase tracking-tight text-xs"> ${title} </h3> <ul class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6"> ${items.map((item) => renderTemplate`<li> <a class="flex flex-col items-center gap-2"${addAttribute(item.url, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-12", "name": item.icon })} <span>${item.title}</span> </a> </li>`)} </ul> </div> <p class="text-right text-sm"> <!-- <a class="text-primary" href={url}> ...and more &rarr;</a> --> </p> </div>`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/compatibility-list.astro", void 0);

const $$Astro$d = createAstro("https://astro-moon-landing.netlify.app/");
const $$ContentSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ContentSection;
  const { title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="flex scroll-mt-24 flex-col items-center gap-4 space-y-8"> <div class="flex flex-col items-center gap-4"> ${renderSlot($$result, $$slots["eyebrow"])} <h2 class="gradient-text text-center font-extrabold tracking-tight text-6xl"> ${title} </h2> </div> <p class="max-w-xl text-center font-extrabold text-2xl"> ${renderSlot($$result, $$slots["lead"])} </p> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/content-section.astro", void 0);

const $$Astro$c = createAstro("https://astro-moon-landing.netlify.app/");
const $$Compatibility = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Compatibility;
  const frameworks = [
    {
      title: "Laravel",
      icon: "fa-brands:laravel",
      url: "https://laravel.com/"
    },
    {
      title: "Bootstrap",
      icon: "fa-brands:bootstrap",
      url: "https://getbootstrap.com/"
    },
    {
      title: "Material",
      icon: "mdi:material-design",
      url: "https://m3.material.io/"
    },
    {
      title: "Vue",
      icon: "frameworks/vue",
      url: "https://vuejs.org/"
    },
    {
      title: "Javascript",
      icon: "mdi:language-javascript",
      url: "https://www.javascript.com/"
    },
    {
      title: "TailwindCss",
      icon: "mdi:tailwind",
      url: "https://www.tailwindawesome.com/"
    }
  ];
  const platforms = [
    {
      title: "Netlify",
      icon: "mdi:aws",
      url: "https://www.netlify.com/"
    },
    {
      title: "Vercel",
      icon: "platforms/vercel",
      url: "https://vercel.com/"
    },
    {
      title: "Cloudflare",
      icon: "fa-brands:cloudflare",
      url: "https://pages.cloudflare.com/"
    },
    {
      title: "Render",
      icon: "mdi:gitlab",
      url: "https://render.com/"
    },
    {
      title: "GitHub",
      icon: "fa-brands:github",
      url: "https://pages.github.com/"
    },
    {
      title: "GitLab",
      icon: "fa-brands:gitlab",
      url: "https://docs.gitlab.com/ee/user/project/pages/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "The Skills", "id": "compatibility" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "CompatibilityList", $$CompatibilityList, { "items": frameworks, "title": "Frameworks", "url": "https://docs.astro.build/core-concepts/framework-components/" })} ${renderComponent($$result2, "CompatibilityList", $$CompatibilityList, { "items": platforms, "title": "Platforms", "url": "https://docs.astro.build/guides/deploy/" })} `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
My Skill as a ${maybeRenderHead()}<span class="text-primary">web developer</span>. Can you see ${" "}<span class="text-primary">through</span>
the section <span class="text-primary">below</span>.
` })}` })}`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/compatibility.astro", void 0);

const $$Astro$b = createAstro("https://astro-moon-landing.netlify.app/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Data Research and Design",
      description: "Create a web-based application system design, starting with data collection and research.",
      icon: "mdi:handshake"
    },
    {
      title: "Processing Data Applications",
      description: "Processing researched data into digital business processes.",
      icon: "mdi:feather"
    },
    {
      title: "Deploy Data to Application",
      description: "Writing draft code and database results from data research.",
      icon: "mdi:directions-fork"
    },
    {
      title: "Testing and Application Security",
      description: "Trying to create a security feature of an application that has been created with it.",
      icon: "mdi:graph"
    },
    {
      title: "SEO Implementation",
      description: "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication.",
      icon: "mdi:search-web"
    },
    {
      title: "Website Application Launch",
      description: "Launches a developed application that can be used and accessed by Internet users.",
      icon: "mdi:account-group"
    }
  ];
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "What I Do?", "id": "features" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${features.map(({ title, description, icon }) => renderTemplate`<li class="flex flex-col items-center gap-4 border border-default bg-offset p-6"> <div class="size-16 rounded-full border-2 border-current p-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "size-full" })} </div> <p class="text-center font-extrabold text-xl">${title}</p> <p class="text-center text-offset text-sm">${description}</p> </li>`)} </ul> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
I do work as a <span class="text-primary">web developer</span>, from designing
<span class="text-primary">web applications</span>
to launching web-based <span class="text-primary">applications</span>.
` })}` })}`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/features.astro", void 0);

const moonImage = new Proxy({"src":"/_astro/moon.iU9QHMMl.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro("https://astro-moon-landing.netlify.app/");
const $$HeroImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const widths = [450, 800, 1200];
  const sizes = "100vw";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": moonImage, "widths": widths, "sizes": sizes, "alt": "The ridged surface of the moon" })}`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/hero-image.astro", void 0);

const $$Astro$9 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  const links = [
    {
      url: "#",
      description: "My Portofolio",
      icon: "mdi:home"
    },
    {
      url: "https://github.com/rukmana4985",
      description: "Find me on GitHub",
      icon: "fa-brands:github-alt"
    },
    {
      url: "https://wa.me/6283169705395",
      description: "Contact me",
      icon: "fa-brands:whatsapp"
    },
    {
      url: "https://www.linkedin.com/in/rukmana-rukmana-34707a295/",
      description: "Contact me",
      icon: "fa-brands:linkedin"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative flex h-64 items-center justify-center"> <div class="absolute inset-0 overflow-hidden opacity-40"> ${renderComponent($$result, "HeroImage", $$HeroImage, {})} </div> <ul class="relative grid grid-cols-2 gap-4 sm:grid-cols-4"> ${links.map((link) => renderTemplate`<li> <a class="flex size-16 items-center justify-center rounded-full border-2 border-current p-4"${addAttribute(link.url, "href")}> <span class="sr-only">${link.description}</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-full", "name": link.icon })} </a> </li>`)} </ul> </footer>`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/footer.astro", void 0);

const $$Astro$8 = createAstro("https://astro-moon-landing.netlify.app/");
const $$ThemeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  return renderTemplate`<!--
  negative margin is sum of button width (6) and gap size of flex parent (6)
  TODO don't hardcode these values
-->${maybeRenderHead()}<button id="theme-switcher" type="button" class="-ml-12 origin-[right_center] scale-0 transition-all duration-500" data-astro-cid-l4aeqea3> <div id="icon-theme-light" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:white-balance-sunny", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use light theme</span> </div> <div id="icon-theme-dark" class="hidden" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:weather-night", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use dark theme</span> </div> </button>  `;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/theme-switcher.astro", void 0);

const $$Astro$7 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { title: "What I Do", url: "#features" },
    { title: "My Skill", url: "#compatibility" },
    { title: "Latest Jobs", url: "#showcase" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="page-header" class="absolute bottom-0 z-20 flex w-full items-center justify-between border-b border-transparent px-8 py-4 text-white" data-astro-cid-hpnw4vwy> <!-- <a class="flex items-center gap-3 hover:!text-default" href="#">
    <h1 class="sr-only">Astro</h1>
    <Icon name="logomark" class="size-10" />
    <Icon name="wordmark" class="hidden h-4 sm:block" />
  </a> --> <div data-astro-cid-hpnw4vwy> <div class="flex items-center gap-6" data-astro-cid-hpnw4vwy> <nav class="hidden sm:block" data-astro-cid-hpnw4vwy> <ul class="flex items-center gap-6" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="text-sm"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> <button id="open-nav-button" type="button" class="btn sm:hidden" aria-label="Navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:menu", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "data-astro-cid-hpnw4vwy": true })} </div> <div id="menu-modal" class="modal hidden" aria-hidden="true" data-astro-cid-hpnw4vwy> <div class="fixed inset-0 bg-default px-8 py-4 text-default" data-astro-cid-hpnw4vwy> <div class="space-y-4" role="dialog" aria-modal="true" data-astro-cid-hpnw4vwy> <header class="text-right" data-astro-cid-hpnw4vwy> <button id="close-nav-button" type="button" class="btn" aria-label="Close navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:close", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> </header> <div class="flex justify-center" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "logomark", "class": "size-16", "data-astro-cid-hpnw4vwy": true })} </div> <nav data-astro-cid-hpnw4vwy> <ul class="flex flex-col" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="block py-4 text-center text-xl"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> </div> </div> </div> </div> </header>  <noscript> <style>
    #open-nav-button {
      display: none;
    }
  </style> </noscript> `;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/header.astro", void 0);

const $$Astro$6 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Just About Me", "id": "intro" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="grid grid-cols-1 gap-2 sm:grid-cols-2"> <a href="https://github.com/rukmana4985" class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:telescope", "class": "size-8" })} <span>My Github</span> </a> <a href="https://wa.me/6283169705395" class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:rocket", "class": "size-8" })} <span>Contact Me</span> </a> </div> `, "eyebrow": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "slot": "eyebrow", "name": "logomark", "class": "size-32" })}`, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
Hi! My name is Rukmana/Luqman, I'm a
<span class="text-primary">fullstack web developer</span>.
    Here's my web <span class="text-primary">portfolio</span>, so enjoy to see my work.
` })}` })}`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/intro.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://astro-moon-landing.netlify.app/", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/showcase/abckids.json": () => import('../abckids_YoEVuESi.mjs'),"/src/content/showcase/bimbelcpns.json": () => import('../bimbelcpns_yON8yMme.mjs'),"/src/content/showcase/estax.json": () => import('../estax_Fgjuq-bN.mjs'),"/src/content/showcase/madania.json": () => import('../madania_Y5lB7zl3.mjs'),"/src/content/showcase/marketing.json": () => import('../marketing_Uapwgdbd.mjs'),"/src/content/showcase/ppg.json": () => import('../ppg_hAaLOd9p.mjs'),"/src/content/showcase/tryout.json": () => import('../tryout_tVKvqbM9.mjs'),"/src/content/showcase/widyatama.json": () => import('../widyatama_IUKAALKX.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"showcase":{"type":"data","entries":{"abckids":"/src/content/showcase/abckids.json","bimbelcpns":"/src/content/showcase/bimbelcpns.json","estax":"/src/content/showcase/estax.json","madania":"/src/content/showcase/madania.json","marketing":"/src/content/showcase/marketing.json","ppg":"/src/content/showcase/ppg.json","tryout":"/src/content/showcase/tryout.json","widyatama":"/src/content/showcase/widyatama.json"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$5 = createAstro("https://astro-moon-landing.netlify.app/");
const $$ShowcaseCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ShowcaseCard;
  const { site } = Astro2.props;
  const widths = [450, 800];
  const sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";
  return renderTemplate`${maybeRenderHead()}<a class="group aspect-video hover:!text-default"${addAttribute(site.data.url, "href")}> <figure class="relative h-full w-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full bg-cover object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 group-focus:scale-110 group-focus:opacity-20", "src": site.data.image, "widths": widths, "sizes": sizes, "alt": `A screenshot of ${site.data.url}` })} <figcaption class="absolute inset-0"> <div class="flex h-full flex-col items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"> <h3 class="text-center font-extrabold uppercase text-xl"> ${site.data.title} </h3> <p class="border border-current px-4 py-2">${site.data.url}</p> </div> </figcaption> </figure> </a>`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/showcase-card.astro", void 0);

const $$Astro$4 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Showcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Showcase;
  const featuredSites = await getCollection(
    "showcase",
    ({ data }) => "featured" in data
  );
  const orderedSites = featuredSites.sort(
    (a, b) => a.data.featured - b.data.featured
  );
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Latest Jobs", "id": "showcase" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-6xl space-y-2"> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${orderedSites.map((site) => renderTemplate`${renderComponent($$result2, "ShowcaseCard", $$ShowcaseCard, { "site": site })}`)} </div> <p class="text-right text-sm"> <!-- <a class="text-primary" href="https://astro.build/showcase/">
        ...and more &rarr;
      </a> --> </p> </div> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
Some of  projects I've developed <span class="text-primary">the application</span>${" "}<span class="text-primary">projects </span> I've developed${" "}.
` })}` })}`;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/showcase.astro", void 0);

const astronautImage = new Proxy({"src":"/_astro/astronaut.fCAtoy9_.png","width":1250,"height":1160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Starfield = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Starfield;
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0"> <canvas id="starfield-canvas"></canvas> </div> `;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/starfield.astro", void 0);

const $$Astro$2 = createAstro("https://astro-moon-landing.netlify.app/");
const $$GithubCorner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GithubCorner;
  return renderTemplate`<!-- https://github.com/tholman/github-corners -->${maybeRenderHead()}<a href="https://github.com/rukmana4985" aria-label="View source on GitHub" class="absolute right-0 top-0 z-10 text-black hover:text-black focus:ring-0 focus:ring-offset-0" data-astro-cid-de3f4zsp><svg class="fill-white" width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" data-astro-cid-de3f4zsp> <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" data-astro-cid-de3f4zsp></path> <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm" data-astro-cid-de3f4zsp></path> <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" data-astro-cid-de3f4zsp></path> </svg> </a> `;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/github-corner.astro", void 0);

const $$Astro$1 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Splash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Splash;
  const widths = [450, 800];
  const sizes = "(min-width: 640px) 42vw, 67vw";
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full bg-black" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Starfield", $$Starfield, { "data-astro-cid-3egmgwtg": true })} ${renderComponent($$result, "GitHubCorner", $$GithubCorner, { "data-astro-cid-3egmgwtg": true })} <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40" data-astro-cid-3egmgwtg> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-3egmgwtg": true })} </div> <div class="relative grid h-full place-items-center sm:grid-cols-2" data-astro-cid-3egmgwtg> <h2 class="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Icon", $$Icon, { "name": "logomark", "class": "size-24 text-white md:size-32", "data-astro-cid-3egmgwtg": true })} <div class="gradient-text text-center font-extrabold tracking-tighter text-8xl" data-astro-cid-3egmgwtg>
Hello!
<br data-astro-cid-3egmgwtg> I'm A Fullstack,
<br data-astro-cid-3egmgwtg> Developer.
</div> </h2> <div id="astronaut" class="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": astronautImage, "widths": widths, "sizes": sizes, "loading": "eager", "alt": "A floating astronaut in a space suit", "data-astro-cid-3egmgwtg": true })} </div> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/components/splash.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { generator, site } = Astro2;
  const image = new URL("social.jpg", site);
  const description = "Build fast websites, faster. Astro is a new kind of site builder for the modern web. Lightning-fast performance meets powerful developer experience.";
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full motion-safe:scroll-smooth" data-theme="dark"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="generator"', '><title>Rukmana - Web Developer</title><meta name="description"', '><!-- social media --><meta property="og:title" content="Astro"><meta property="og:type" content="website"><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image"><!-- initialize theme --><script>\n      const themeSaved = localStorage.getItem("theme");\n\n      if (themeSaved) {\n        document.documentElement.dataset.theme = themeSaved;\n      } else {\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";\n      }\n\n      window\n        .matchMedia("(prefers-color-scheme: dark)")\n        .addEventListener("change", (event) => {\n          if (!localStorage.getItem("theme")) {\n            document.documentElement.dataset.theme = event.matches\n              ? "dark"\n              : "light";\n          }\n        });\n    <\/script>', '</head> <body class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> ', " ", ' <div class="space-y-24 px-8 py-32"> ', " ", " ", " ", " </div> ", " </body></html>"])), addAttribute(generator, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(site, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Splash", $$Splash, {}), renderComponent($$result, "Intro", $$Intro, {}), renderComponent($$result, "Features", $$Features, {}), renderComponent($$result, "Compatibility", $$Compatibility, {}), renderComponent($$result, "Showcase", $$Showcase, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/administrator/Web Development/Frontend/astro-landing-page/src/pages/index.astro", void 0);

const $$file = "/Users/administrator/Web Development/Frontend/astro-landing-page/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };