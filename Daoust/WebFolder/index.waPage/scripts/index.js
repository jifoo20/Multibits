
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	login.logout = function login_logout (event)// @startlock
	{// @endlock
		window.location = 'index.html';
	};// @lock

	login.login = function login_login (event)// @startlock
	{// @endlock
		window.location = 'index.html';
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() == null){
			//$$('mainComponent').loadComponent('/admin.waComponent');
			$$('mainComponent').loadComponent('/public.waComponent');
		} else {
			//$$('mainComponent').loadComponent('/public.waComponent');
			$$('mainComponent').loadComponent('/admin.waComponent');
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login", "logout", login.logout, "WAF");
	WAF.addListener("login", "login", login.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
