
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'inventaire';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var buttonHome = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonHome.click = function buttonHome_click (event)// @startlock
	{// @endlock
		$$('mainComponent').loadComponent('/public.waComponent');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonHome", "click", buttonHome.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
