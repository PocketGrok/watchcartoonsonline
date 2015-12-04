// ==UserScript==
// @name         Pocket's WatchCartoonsOnline
// @namespace    http://pocketdeer.com/projects/watchcartoononline/watchcartoononline.user.js
// @version      0.1.1
// @author       PocketGrok
// @description  Script to make WatchCartoonsOnline how Pocket likes it.
// @homepage     http://pocketdeer.com/
// @updateURL    https://raw.githubusercontent.com/PocketGrok/watchcartoononline/master/watchcartoononline.user.js
// @match        http*://*.watchcartoononline.com/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @resource     styles_css https://raw.githubusercontent.com/PocketGrok/watchcartoononline/master/styles.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

GM_addStyle( GM_getResourceText( 'styles_css' ) );
