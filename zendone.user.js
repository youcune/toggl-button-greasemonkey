// ==UserScript==
// @name        Toggl-Button Zendone
// @namespace   https://github.com/jurgenhaas/toggl-button-greasemonkey
// @version     1.0-beta.3
// @include     https://drupal.org/node/*
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_info
// @grant       GM_registerMenuCommand
// @require     https://raw.githubusercontent.com/jurgenhaas/toggl-button-greasemonkey/v1.0-beta.3/TogglLibrary.js
// @resource    togglStyle https://raw.githubusercontent.com/jurgenhaas/toggl-button-greasemonkey/v1.0-beta.3/TogglLibrary.css
// ==/UserScript==


// @require     http://sizzlemctwizzle.com/423249.js

/*
Not working yet!
TogglButtonGM.fetchUser(TogglButtonGM.$newApiUrl, function() {
  TogglButtonGM.render('.actions-table tr', {}, function (elem) {
    console.log('ZENDONE Toggl');
    var description, projectIds = [],
      titleElem = $('.colMain .action-title', elem),
      projectElem = $('.field-name-field-project .field-items .field-item');

    description = titleElem.textContent.trim();
    if (id !== null) {
      description = id + " " + description;
    }

    if (projectElem !== null) {
      projectIds.push(projectElem.textContent.trim());
    }

    TogglButtonGM.createTimerLink({
      className: 'zendone',
      description: description,
      projectIds: projectIds,
      targetSelectors: {
        link: '.colMain .action-title',
        projectSelect: '.colMain .action-title'
      }
    });
  });
});
*/