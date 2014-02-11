
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'public';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var buttonPoursuivre = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonPoursuivre.click = function buttonPoursuivre_click (event)// @startlock
	{// @endlock
		$$('mainComponent').loadComponent('/inventaire.waComponent');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonPoursuivre", "click", buttonPoursuivre.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
