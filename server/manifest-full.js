export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/Resume.pdf","assets/particles.json","images/profile.png","s.webp"]),
	mimeTypes: {".pdf":"application/pdf",".json":"application/json",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.c1da9e3d.js","app":"_app/immutable/entry/app.2f6f6c92.js","imports":["_app/immutable/entry/start.c1da9e3d.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.5bc85453.js","_app/immutable/entry/app.2f6f6c92.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.1673c172.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
