
/**
* Opens the options page.
*/
function openOptionsPage() {

	/**
	* Gets called when the tab was successfully created.
	*/
	function onCreated(tab) {
		console.log(`Created new tab: ${tab.id}`);
	}

	/**
	* Gets called when there was an error while creating the new tab.
	*/
	function onError(tab) {
		console.error(`Error: ${error}`);
	}

	var creating = browser.tabs.create({
		active: true,
		url: '/options/options.html',
	});
	creating.then(onCreated, onError);
}

openOptionsPage();
