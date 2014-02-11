
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buttonFin = {};	// @button
	var buttonMilieu = {};	// @button
	var buttonMenu = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock
function metroRadioSelect(buttonRef) {
	var theRadioButton = $(buttonRef.$domNode),
		radioButtonsContainer = theRadioButton.parent();
		
	radioButtonsContainer.children().removeClass('selectedRadio');
	theRadioButton.addClass('selectedRadio');
};
// eventHandlers// @lock


	buttonFin.click = function buttonFin_click (event)// @startlock
	{// @endlock
		metroRadioSelect(this);
	};// @lock

	buttonMilieu.click = function buttonMilieu_click (event)// @startlock
	{// @endlock
		metroRadioSelect(this);
	};// @lock

	buttonMenu.click = function buttonMenu_click (event)// @startlock
	{// @endlock
		metroRadioSelect(this);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		/*if (WAF.directory.currentUser() == null) {
			$$('containerMain').loadComponent('home.waComponent');
			
		} else {
			$$('containerMain').loadComponent('vide.waComponent');
		}*/
		$$('radioButtonsContainer').addClass('metroRadio');
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buttonFin", "click", buttonFin.click, "WAF");
	WAF.addListener("buttonMilieu", "click", buttonMilieu.click, "WAF");
	WAF.addListener("buttonMenu", "click", buttonMenu.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
