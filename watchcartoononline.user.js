// ==UserScript==
// @name         Pocket's WatchCartoonsOnline
// @namespace    http://pocketdeer.com/projects/watchcartoononline/watchcartoononline.user.js
// @version      0.5
// @author       PocketGrok
// @description  Script to make WatchCartoonsOnline how Pocket likes it.
// @homepage     http://pocketdeer.com/
// @updateURL    https://github.com/PocketGrok/berrytube/raw/master/berrytube.user.js
// @match        http*://*.watchcartoononline.com/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @resource     styles_css https://github.com/PocketGrok/berrytube/raw/master/styles.min.css
// @resource     foundation https://cdnjs.cloudflare.com/ajax/libs/foundation/6.0.1/css/foundation.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

$('style').remove();
$('[rel=stylesheet]').remove();

GM_addStyle( GM_getResourceText( 'foundation' ) );
GM_addStyle( GM_getResourceText( 'styles_css' ) );

// Move page contents to temp location
var body = $('body');
body.prepend('<div id="app" class="app"><header id="header" class="header top-bar"><div class="top-bar-left"></div><div class="top-bar-right"></div></header><main id="main" class="main"><div id="player" class="player"><div id="video-panels" class="tabs-content" data-tabs-content="example-tabs"></div><ul class="tabs" data-tabs id="video-tabs"></ul></div><div id="content" class="row content"><div class="columns large-9"><div id="info" class="card"></div><div id="episodes" class="card"></div></div><div class="columns large-3"><div id="recents" class="card"></div></div></div></main></div>');
var app    = $('#app');
var header = $('#header');
var main   = $('#main');

// Rebuild Page
//// Heaer
var headerNav = $('#nav');
var headerSearch = $('#searchform');
var suggestions  = $('#suggestions');

headerNav.addClass('nav menu');
headerSearch.children().wrapAll('<ul class="menu" />').wrap('<li />');
headerSearch.find('select').attr('style','margin:0;');

headerNav.appendTo( header.find('.top-bar-right') );
headerSearch.appendTo( header.find('.top-bar-left') );

suggestions.attr('style', '').addClass('suggestions');
suggestions.parent().attr('style','vertical-align: bottom;');

//// Content
///// Player
var videos = $('.postTabs_divs iframe');

var vPlayer = $('#player');
var vPanelsContainer = $('#video-panels');
var vTabsContainer   = $('#video-tabs');
var videoPanels;
var videoTabs = '';

videos.appendTo(vPanelsContainer).wrap('<div class="tabs-panel" />');
videoPanels = vPanelsContainer.children();

videoPanels.each(function(i) {
  var n    = i+1;
  var id   = 'video' + i;
  var name = 'Video ' + n;
  videoTabs = videoTabs + '<li class="tabs-title"><a href="#'+id+'" role="tab" aria-controls="'+id+'" aria-selected="false" id="'+id+'-label">'+name+'</a></li>';

  ''

  $(videoPanels[i]).attr( 'id', id );
});

vTabsContainer.append(videoTabs);
videoTabs = vTabsContainer.children();

$(videoPanels[0]).addClass('is-active');
$(videoTabs[0]).addClass('is-active');
$(videoTabs[0]).children(':first-child').attr('aria-selected', 'true');

videoTabs.on('click', 'a', function(e) {
  e.preventDefault();
  var a = $(this);
  var tab = $(a.parent());
  var panel = $(a.attr('href'));
  tab.siblings().children().attr('aria-selected', 'false');
  a.attr('aria-selected', 'true');
  tab.siblings().removeClass('is-active');
  tab.addClass('is-active');
  panel.siblings().removeClass('is-active');
  panel.addClass('is-active');
});

///// Info
var title = $('.ilxbaslik8').children(':first-child');

var info = $('#info');

title.appendTo(info);


///// vvvvvvvv
var sidebar = $('#sidebar');
///// Episodes
var episodeList = sidebar.children(':last-of-type').find('ul');

var episodes = $('#episodes');

episodes.append('<h2>Episodes</h2>');
episodeList.appendTo(episodes);

///// Recents
var recentList = sidebar.children(':first-of-type').find('ul');

var recents = $('#recents');

recents.append('<h2>Recents</h2>');
recentList.appendTo(recents);

// End.
$('#wrap').detach();
