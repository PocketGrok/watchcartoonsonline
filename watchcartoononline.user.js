// ==UserScript==
// @name         Pocket's WatchCartoonsOnline
// @namespace    http://pocketdeer.com/projects/watchcartoononline/watchcartoononline.user.js
// @version      0.1.1
// @author       PocketGrok
// @description  Script to make WatchCartoonsOnline how Pocket likes it.
// @homepage     http://pocketdeer.com/
// @updateURL    https://github.com/PocketGrok/berrytube/raw/master/berrytube.user.js
// @match        http*://*.watchcartoononline.com/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @resource     styles_css https://github.com/PocketGrok/berrytube/raw/master/styles.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

GM_addStyle( GM_getResourceText( 'styles_css' ) );
