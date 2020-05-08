var activeTab = null;
var loadedBlacklist = null;

function newBlacklist() {

  /**
  * Adds a new blacklist tab, when no such tab exists.
  */
  function addNewTab() {
    var tab = document.querySelector('#new-blacklist-tab');
    if(!tab) {
      var tab = document.createElement('button');
      tab.setAttribute('class', 'tablinks');
      tab.setAttribute('id', 'new-blacklist-tab');
      tab.innerHTML = 'New Blacklist';
      var tabs = document.querySelector('#blacklist-tabs');
      var addButton = document.querySelector('#new-blacklist-button');
      tabs.insertBefore(tab, addButton);
    }
  }

  /**
  * Add tab content for the new blacklist.
  */
  function addTabContent() {

  }

  /**
  * Sets the new tab active.
  */
  function setNewTabActive() {
    var content = document.querySelector('#content-div');
    activeTab = document.querySelector('#new-blacklist-tab');
    content.hidden = false;
  }

  addNewTab();
  setNewTabActive();
}

function closeBlacklist() {

  function handleTabContent() {
  }

  function setTabInactive() {
    var content = document.querySelector('#content-div');
    content.hidden = true;
  }

  handleTabContent();
  setTabInactive();

}

function listenForNameChange(event) {

  function calculateNewName() {
    var newName = '';
    var input = document.querySelector('#blacklist-name').value;
    if(input === '') {
      newName = 'New Blacklist';
    } else {
      newName = input;
    }
    return newName;
  }

  activeTab.innerHTML = calculateNewName();
}

function listenForBlacklistInput(event) {

  var regex = /,(?!\n)/g;
  var content = document.querySelector('#blacklist').value;
  content = content.replace(regex, ',\n');
  document.querySelector('#blacklist').value = content;

}

/**
* This function gets called when the activate or deactivate button gets clicked.
*/
function de_activate(event) {
  alert(event);
}

function loadBlacklists() {

}

loadBlacklists()
document.querySelector('#new-blacklist-button').addEventListener('click', newBlacklist);
document.querySelector('#blacklist-close-button').addEventListener('click', closeBlacklist);
document.querySelector('#blacklist-name').addEventListener('input', listenForNameChange);
document.querySelector('#blacklist').addEventListener('input', listenForBlacklistInput);
