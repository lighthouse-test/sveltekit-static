import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, add_attribute, each} from "svelte/internal";
import {setContext, afterUpdate, onMount, createEventDispatcher} from "svelte";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `Navigated to ${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-6d6205d3.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-6d6205d3.js", "/./_app/chunks/vendor-d457d503.js"]
    },
    fetched: void 0,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error) => String(error),
    handle_error: (error) => {
      console.error(error.stack);
      error.stack = options.get_stack(error);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template
  };
}
const empty = () => ({});
const manifest = {
  assets: [{file: "favicon.ico", size: 1150, type: "image/vnd.microsoft.icon"}, {file: "global.css", size: 0, type: "text/css"}],
  layout: "src/routes/$layout.svelte",
  error: "src/routes/$error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
      b: ["src/routes/$error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getContext: hooks.getContext || (() => ({})),
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
const module_lookup = {
  "src/routes/$layout.svelte": () => Promise.resolve().then(function() {
    return $layout$1;
  }),
  "src/routes/$error.svelte": () => Promise.resolve().then(function() {
    return $error$1;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  })
};
const metadata_lookup = {"src/routes/$layout.svelte": {entry: "/./_app/pages/$layout.svelte-abc41468.js", css: [], js: ["/./_app/pages/$layout.svelte-abc41468.js", "/./_app/chunks/vendor-d457d503.js"], styles: null}, "src/routes/$error.svelte": {entry: "/./_app/pages/$error.svelte-bad3c33d.js", css: [], js: ["/./_app/pages/$error.svelte-bad3c33d.js", "/./_app/chunks/vendor-d457d503.js"], styles: null}, "src/routes/index.svelte": {entry: "/./_app/pages/index.svelte-761a3935.js", css: [], js: ["/./_app/pages/index.svelte-761a3935.js", "/./_app/chunks/vendor-d457d503.js"], styles: null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {base: "", assets: "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
const $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><h1>SvelteKit Demo</h1>
	<nav><a href="${"/"}">Home</a></nav></header>
<br>
${slots.default ? slots.default({}) : ``}
<br>
<footer>Check the lighthouse results at
	<a href="${"https://lighthouse-test.github.io"}" rel="${"noopener"}" target="${"_blank"}">https://lighthouse-test.github.io
	</a></footer>`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
const $error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Seems like this page doesn&#39;t exist :(</h2>`;
});
var $error$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $error
});
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let {todo} = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  return `<h4>Todo</h4>
<table><tbody><tr><th align="${"left"}">Name </th>
			<td>${escape(todo.name)}</td></tr>
		<tr><th align="${"left"}">Description </th>
			<td>${escape(todo.description)}</td></tr>
		<tr><th align="${"left"}">Type </th>
			<td>${escape(todo.type)}</td></tr>
		<tr><th align="${"left"}">Confidential </th>
			<td>${escape(todo.confidential)}</td></tr>
		<tr><th align="${"left"}">Remind </th>
			<td>${escape(todo.remind)}</td>
			<td></td></tr>
		<tr><th align="${"left"}">Date </th>
			<td>${escape(todo.date)}</td></tr>
		<tr><th colspan="${"2"}" align="${"right"}"><button type="${"button"}">Close</button></th></tr></tbody></table>`;
});
const TYPES = ["Feature", "Docs", "Issue", "Backend", "Frontent"];
const TODOS = [
  {
    id: 1,
    name: "Add more frameworks",
    description: "We need to add more frameworks",
    type: "Issue",
    confidential: "Yes",
    remind: true,
    date: "2021-04-07"
  }
];
const getTodos = () => {
  return TODOS;
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let {todo} = $$props;
  let types = TYPES;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  return `<h4>${escape(todo.id ? "Update" : "Add")} Todo</h4>
<form novalidate><table><tbody><tr><th align="${"left"}"><label for="${"name"}">Name</label></th>
				<td><input id="${"name"}" type="${"text"}" name="${"name"}" required${add_attribute("value", todo.name, 1)}></td>
				<td>${``}</td></tr>
			<tr><th align="${"left"}"><label for="${"description"}">Description</label></th>
				<td><textarea id="${"description"}" name="${"description"}" required>${todo.description || ""}</textarea></td>
				<td>${``}</td></tr>
			<tr><th align="${"left"}"><label for="${"type"}">Type</label></th>
				<td><select id="${"type"}" name="${"type"}" required${add_attribute("value", todo.type, 1)}>${each(types, (type) => `<option${add_attribute("value", type, 0)}>${escape(type)}</option>`)}</select></td>
				<td>${``}</td></tr>
			<tr><th align="${"left"}">
					<label>Confidential</label></th>
				<td><label for="${"confidential1"}">Yes</label>
					<input id="${"confidential1"}" type="${"radio"}" name="${"confidential"}" value="${"Yes"}">
					<label for="${"confidential2"}">No</label>
					<input id="${"confidential2"}" type="${"radio"}" name="${"confidential"}" value="${"No"}"></td>
				<td></td></tr>
			<tr><th align="${"left"}">
					<label>Remind</label></th>
				<td><label for="${"remind"}">Yes</label>
					<input id="${"remind"}" type="${"checkbox"}" name="${"checkbox"}"${add_attribute("checked", todo.remind, 1)}></td>
				<td></td></tr>
			<tr><th align="${"left"}"><label for="${"date"}">Date</label></th>
				<td><input id="${"date"}" type="${"date"}" name="${"date"}" required${add_attribute("value", todo.date, 1)}></td>
				<td>${``}</td></tr>
			<tr><th colspan="${"2"}" align="${"right"}"><button type="${"submit"}">${escape(todo.id ? "Update" : "Add")}</button></th></tr></tbody></table></form>`;
});
const Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todos = getTodos();
  return `<h3>Todos <button>New</button></h3>
${``}
${``}
<br>
<table width="${"100%"}"><thead><tr><th align="${"left"}">Id</th>
			<th align="${"left"}">Name</th>
			<th align="${"left"}">description</th>
			<th align="${"left"}">Type</th>
			<th align="${"left"}">Confidential</th>
			<th align="${"left"}">Remind</th>
			<th align="${"left"}">Date</th>
			<th align="${"left"}">Actions</th></tr></thead>
	<tbody>${each(todos, (todo) => `<tr><td>${escape(todo.id)}</td>
				<td>${escape(todo.name)}</td>
				<td>${escape(todo.description)}</td>
				<td>${escape(todo.type)}</td>
				<td>${escape(todo.confidential)}</td>
				<td>${escape(todo.remind)}</td>
				<td>${escape(todo.date)}</td>
				<td><button type="${"button"}">View</button>
					\xA0
					<button type="${"button"}">Edit</button>
					\xA0
					<button type="${"button"}">Delete</button></td>
			</tr>`)}</tbody></table>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Lighthouse Test | Svelte Kit</title>`, ""}<meta name="${"description"}" content="${"Lighthouse Test | Svelte Kit"}" data-svelte="svelte-ahmmef">`, ""}

<h2>Home</h2>
${validate_component(Todos, "Todos").$$render($$result, {}, {}, {})}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
export {init, render};
