(function () {
    var unicons = ['uil-0-plus', 'uil-10-plus', 'uil-12-plus', 'uil-13-plus', 'uil-16-plus', 'uil-17-plus', 'uil-18-plus', 'uil-21-plus', 'uil-3-plus', 'uil-500px', 'uil-6-plus', 'uil-abacus', 'uil-accessible-icon-alt', 'uil-adjust-alt', 'uil-adjust-circle', 'uil-adjust-half', 'uil-adjust', 'uil-adobe-alt', 'uil-adobe', 'uil-airplay', 'uil-align-alt', 'uil-align-center-alt', 'uil-align-center-h', 'uil-align-center-justify', 'uil-align-center-v', 'uil-align-center', 'uil-align-justify', 'uil-align-left-justify', 'uil-align-left', 'uil-align-letter-right', 'uil-align-right-justify', 'uil-align-right', 'uil-align', 'uil-amazon', 'uil-ambulance', 'uil-analysis', 'uil-analytics', 'uil-anchor', 'uil-android-alt', 'uil-android-phone-slash', 'uil-android', 'uil-angle-double-down', 'uil-angle-double-left', 'uil-angle-double-right', 'uil-angle-double-up', 'uil-angle-down', 'uil-angle-left', 'uil-angle-right-b', 'uil-angle-right', 'uil-angle-up', 'uil-angry', 'uil-ankh', 'uil-annoyed-alt', 'uil-annoyed', 'uil-apple-alt', 'uil-apple', 'uil-apps', 'uil-archive-alt', 'uil-archive', 'uil-archway', 'uil-arrow-break', 'uil-arrow-circle-down', 'uil-arrow-circle-left', 'uil-arrow-circle-right', 'uil-arrow-circle-up', 'uil-arrow-compress-h', 'uil-arrow-down-left', 'uil-arrow-down-right', 'uil-arrow-down', 'uil-arrow-from-right', 'uil-arrow-from-top', 'uil-arrow-growth', 'uil-arrow-left', 'uil-arrow-random', 'uil-arrow-resize-diagonal', 'uil-arrow-right', 'uil-arrow-to-bottom', 'uil-arrow-to-right', 'uil-arrow-up-left', 'uil-arrow-up-right', 'uil-arrow-up', 'uil-arrow', 'uil-arrows-h-alt', 'uil-arrows-h', 'uil-arrows-left-down', 'uil-arrows-maximize', 'uil-arrows-merge', 'uil-arrows-resize-h', 'uil-arrows-resize-v', 'uil-arrows-resize', 'uil-arrows-right-down', 'uil-arrows-shrink-h', 'uil-arrows-shrink-v', 'uil-arrows-up-right', 'uil-arrows-v-alt', 'uil-arrows-v', 'uil-assistive-listening-systems', 'uil-asterisk', 'uil-at', 'uil-atm-card', 'uil-atom', 'uil-auto-flash', 'uil-award-alt', 'uil-award', 'uil-baby-carriage', 'uil-backpack', 'uil-backspace', 'uil-backward', 'uil-bag-alt', 'uil-bag-slash', 'uil-bag', 'uil-balance-scale', 'uil-ball', 'uil-ban', 'uil-bars', 'uil-baseball-ball', 'uil-basketball-hoop', 'uil-basketball', 'uil-bath', 'uil-battery-bolt', 'uil-battery-empty', 'uil-bed-double', 'uil-bed', 'uil-behance-alt', 'uil-behance', 'uil-bell-school', 'uil-bell-slash', 'uil-bell', 'uil-bill', 'uil-bitcoin-alt', 'uil-bitcoin-bold', 'uil-bitcoin-circle', 'uil-bitcoin', 'uil-black-berry', 'uil-blogger-alt', 'uil-blogger', 'uil-bluetooth-b', 'uil-bold', 'uil-bolt-alt', 'uil-bolt-slash', 'uil-bolt', 'uil-book-alt', 'uil-book-medical', 'uil-book-open', 'uil-book-reader', 'uil-book', 'uil-bookmark-full', 'uil-bookmark', 'uil-books', 'uil-boombox', 'uil-border-alt', 'uil-border-bottom', 'uil-border-clear', 'uil-border-horizontal', 'uil-border-inner', 'uil-border-left', 'uil-border-out', 'uil-border-right', 'uil-border-top', 'uil-border-vertical', 'uil-bowling-ball', 'uil-box', 'uil-briefcase-alt', 'uil-briefcase', 'uil-bright', 'uil-brightness-empty', 'uil-brightness-half', 'uil-brightness-low', 'uil-brightness-minus', 'uil-brightness-plus', 'uil-brightness', 'uil-bring-bottom', 'uil-bring-front', 'uil-brush-alt', 'uil-bug', 'uil-building', 'uil-bullseye', 'uil-bus-alt', 'uil-bus-school', 'uil-bus', 'uil-calcualtor', 'uil-calculator-alt', 'uil-calculator', 'uil-calendar-alt', 'uil-calendar-slash', 'uil-calender', 'uil-calling', 'uil-camera-change', 'uil-camera-plus', 'uil-camera-slash', 'uil-camera', 'uil-cancel', 'uil-capsule', 'uil-capture', 'uil-car-sideview', 'uil-car-slash', 'uil-car-wash', 'uil-car', 'uil-card-atm', 'uil-caret-right', 'uil-cart', 'uil-cell', 'uil-celsius', 'uil-chart-bar-alt', 'uil-chart-bar', 'uil-chart-down', 'uil-chart-growth-alt', 'uil-chart-growth', 'uil-chart-line', 'uil-chart-pie-alt', 'uil-chart-pie', 'uil-chart', 'uil-chat-bubble-user', 'uil-chat-info', 'uil-chat', 'uil-check-circle', 'uil-check-square', 'uil-check', 'uil-circle-layer', 'uil-circle', 'uil-circuit', 'uil-clapper-board', 'uil-clipboard-alt', 'uil-clipboard-blank', 'uil-clipboard-notes', 'uil-clipboard', 'uil-clock-eight', 'uil-clock-five', 'uil-clock-nine', 'uil-clock-seven', 'uil-clock-ten', 'uil-clock-three', 'uil-clock-two', 'uil-clock', 'uil-closed-captioning', 'uil-cloud-block', 'uil-cloud-bookmark', 'uil-cloud-check', 'uil-cloud-computing', 'uil-cloud-data-connection', 'uil-cloud-database-tree', 'uil-cloud-download', 'uil-cloud-drizzle', 'uil-cloud-exclamation', 'uil-cloud-hail', 'uil-cloud-heart', 'uil-cloud-info', 'uil-cloud-lock', 'uil-cloud-meatball', 'uil-cloud-moon-hail', 'uil-cloud-moon-meatball', 'uil-cloud-moon-rain', 'uil-cloud-moon-showers', 'uil-cloud-moon', 'uil-cloud-question', 'uil-cloud-rain-sun', 'uil-cloud-rain', 'uil-cloud-redo', 'uil-cloud-set', 'uil-cloud-share', 'uil-cloud-shield', 'uil-cloud-showers-alt', 'uil-cloud-showers-heavy', 'uil-cloud-showers', 'uil-cloud-slash', 'uil-cloud-sun-hail', 'uil-cloud-sun-meatball', 'uil-cloud-sun-rain-alt', 'uil-cloud-sun-rain', 'uil-cloud-sun-tear', 'uil-cloud-sun', 'uil-cloud-times', 'uil-cloud-unlock', 'uil-cloud-upload', 'uil-cloud-wifi', 'uil-cloud-wind', 'uil-cloud', 'uil-clouds', 'uil-club', 'uil-code', 'uil-coffee', 'uil-cog', 'uil-coins', 'uil-columns', 'uil-comment-alt-block', 'uil-comment-alt-chart-lines', 'uil-comment-alt-check', 'uil-comment-alt-dots', 'uil-comment-alt-download', 'uil-comment-alt-edit', 'uil-comment-alt-exclamation', 'uil-comment-alt-heart', 'uil-comment-alt-image', 'uil-comment-alt-info', 'uil-comment-alt-lines', 'uil-comment-alt-lock', 'uil-comment-alt-medical', 'uil-comment-alt-message', 'uil-comment-alt-notes', 'uil-comment-alt-plus', 'uil-comment-alt-question', 'uil-comment-alt-redo', 'uil-comment-alt-search', 'uil-comment-alt-share', 'uil-comment-alt-shield', 'uil-comment-alt-slash', 'uil-comment-alt-upload', 'uil-comment-alt-verify', 'uil-comment-alt', 'uil-comment-block', 'uil-comment-chart-line', 'uil-comment-check', 'uil-comment-dots', 'uil-comment-download', 'uil-comment-edit', 'uil-comment-exclamation', 'uil-comment-heart', 'uil-comment-image', 'uil-comment-info-alt', 'uil-comment-info', 'uil-comment-lines', 'uil-comment-lock', 'uil-comment-medical', 'uil-comment-message', 'uil-comment-notes', 'uil-comment-plus', 'uil-comment-question', 'uil-comment-redo', 'uil-comment-search', 'uil-comment-share', 'uil-comment-shield', 'uil-comment-slash', 'uil-comment-upload', 'uil-comment-verify', 'uil-comment', 'uil-comments-alt', 'uil-comments', 'uil-commnet-alt-slash', 'uil-compact-disc', 'uil-compass', 'uil-compress-alt-left', 'uil-compress-alt', 'uil-compress-arrows', 'uil-compress-lines', 'uil-compress-point', 'uil-compress-v', 'uil-compress', 'uil-computer-mouse', 'uil-confused', 'uil-constructor', 'uil-copy-alt', 'uil-copy-landscape', 'uil-copy', 'uil-copyright', 'uil-corner-down-left', 'uil-corner-down-right-alt', 'uil-corner-down-right', 'uil-corner-left-down', 'uil-corner-right-down', 'uil-corner-up-left-alt', 'uil-corner-up-left', 'uil-corner-up-right-alt', 'uil-corner-up-right', 'uil-creative-commons-pd-alt', 'uil-creative-commons-pd', 'uil-crockery', 'uil-crop-alt-rotate-left', 'uil-crop-alt-rotate-right', 'uil-crop-alt', 'uil-crosshair-alt', 'uil-crosshair', 'uil-crosshairs', 'uil-cube', 'uil-dashboard', 'uil-data-sharing', 'uil-database-alt', 'uil-database', 'uil-desert', 'uil-desktop-alt-slash', 'uil-desktop-alt', 'uil-desktop-cloud-alt', 'uil-desktop-slash', 'uil-desktop', 'uil-dialpad-alt', 'uil-dialpad', 'uil-diamond', 'uil-diary-alt', 'uil-diary', 'uil-dice-five', 'uil-dice-four', 'uil-dice-one', 'uil-dice-six', 'uil-dice-three', 'uil-dice-two', 'uil-direction', 'uil-directions', 'uil-dizzy-meh', 'uil-dna', 'uil-document-layout-center', 'uil-document-layout-left', 'uil-document-layout-right', 'uil-document', 'uil-dollar-alt', 'uil-dollar-sign-alt', 'uil-dollar-sign', 'uil-down-arrow', 'uil-download-alt', 'uil-dribbble', 'uil-drill', 'uil-dropbox', 'uil-dumbbell', 'uil-ear', 'uil-edit-alt', 'uil-edit', 'uil-ellipsis-h', 'uil-ellipsis-v', 'uil-emoji', 'uil-enter', 'uil-entry', 'uil-envelope-add', 'uil-envelope-alt', 'uil-envelope-block', 'uil-envelope-bookmark', 'uil-envelope-check', 'uil-envelope-download-alt', 'uil-envelope-download', 'uil-envelope-edit', 'uil-envelope-exclamation', 'uil-envelope-heart', 'uil-envelope-info', 'uil-envelope-lock', 'uil-envelope-minus', 'uil-envelope-open', 'uil-envelope-question', 'uil-envelope-receive', 'uil-envelope-redo', 'uil-envelope-search', 'uil-envelope-send', 'uil-envelope-share', 'uil-envelope-shield', 'uil-envelope-star', 'uil-envelope-times', 'uil-envelope-upload-alt', 'uil-envelope-upload', 'uil-envelope', 'uil-envelopes', 'uil-equal-circle', 'uil-euro-circle', 'uil-euro', 'uil-exchange-alt', 'uil-exchange', 'uil-exclamation-circle', 'uil-exclamation-octagon', 'uil-exclamation-triangle', 'uil-exclude', 'uil-exit', 'uil-expand-alt', 'uil-expand-arrows-alt', 'uil-expand-arrows', 'uil-expand-from-corner', 'uil-expand-left', 'uil-expand-right', 'uil-export', 'uil-exposure-alt', 'uil-exposure-increase', 'uil-external-link-alt', 'uil-eye-slash', 'uil-eye', 'uil-facebook-f', 'uil-facebook-messenger-alt', 'uil-facebook-messenger', 'uil-facebook', 'uil-fahrenheit', 'uil-fast-mail-alt', 'uil-fast-mail', 'uil-favorite', 'uil-feedback', 'uil-file-alt', 'uil-file-blank', 'uil-file-block-alt', 'uil-file-bookmark-alt', 'uil-file-check-alt', 'uil-file-check', 'uil-file-contract-dollar', 'uil-file-copy-alt', 'uil-file-download-alt', 'uil-file-download', 'uil-file-edit-alt', 'uil-file-exclamation-alt', 'uil-file-exclamation', 'uil-file-heart', 'uil-file-info-alt', 'uil-file-landscape-alt', 'uil-file-landscape', 'uil-file-lanscape-slash', 'uil-file-lock-alt', 'uil-file-medical-alt', 'uil-file-medical', 'uil-file-minus-alt', 'uil-file-minus', 'uil-file-network', 'uil-file-plus-alt', 'uil-file-plus', 'uil-file-question-alt', 'uil-file-question', 'uil-file-redo-alt', 'uil-file-search-alt', 'uil-file-share-alt', 'uil-file-shield-alt', 'uil-file-slash', 'uil-file-times-alt', 'uil-file-times', 'uil-file-upload-alt', 'uil-file-upload', 'uil-file', 'uil-files-landscapes-alt', 'uil-files-landscapes', 'uil-film', 'uil-filter-slash', 'uil-filter', 'uil-fire', 'uil-flask-potion', 'uil-flask', 'uil-flip-h-alt', 'uil-flip-h', 'uil-flip-v-alt', 'uil-flip-v', 'uil-flower', 'uil-focus-add', 'uil-focus-target', 'uil-focus', 'uil-folder-check', 'uil-folder-download', 'uil-folder-exclamation', 'uil-folder-heart', 'uil-folder-info', 'uil-folder-lock', 'uil-folder-medical', 'uil-folder-minus', 'uil-folder-network', 'uil-folder-plus', 'uil-folder-question', 'uil-folder-slash', 'uil-folder-times', 'uil-folder-upload', 'uil-folder', 'uil-food', 'uil-football-american', 'uil-football-ball', 'uil-football', 'uil-forecastcloud-moon-tear', 'uil-forwaded-call', 'uil-forward', 'uil-frown', 'uil-game-structure', 'uil-game', 'uil-gift', 'uil-github-alt', 'uil-github', 'uil-glass-martini-alt-slash', 'uil-glass-martini-alt', 'uil-glass-martini', 'uil-glass-tea', 'uil-glass', 'uil-globe', 'uil-gold', 'uil-google-drive-alt', 'uil-google-drive', 'uil-google-hangouts-alt', 'uil-google-hangouts', 'uil-google-play', 'uil-google', 'uil-graduation-hat', 'uil-graph-bar', 'uil-grid', 'uil-grids', 'uil-grin-tongue-wink-alt', 'uil-grin-tongue-wink', 'uil-grin', 'uil-grip-horizontal-line', 'uil-hdd', 'uil-headphones-alt', 'uil-headphones', 'uil-heart-alt', 'uil-heart-medical', 'uil-heart-rate', 'uil-heart-sign', 'uil-heart', 'uil-heartbeat', 'uil-history-alt', 'uil-history', 'uil-home-alt', 'uil-home', 'uil-horizontal-align-center', 'uil-horizontal-align-left', 'uil-horizontal-align-right', 'uil-horizontal-distribution-center', 'uil-horizontal-distribution-left', 'uil-horizontal-distribution-right', 'uil-hourglass', 'uil-html3-alt', 'uil-html3', 'uil-hunting', 'uil-image-alt-slash', 'uil-image-block', 'uil-image-broken', 'uil-image-check', 'uil-image-download', 'uil-image-edit', 'uil-image-lock', 'uil-image-minus', 'uil-image-plus', 'uil-image-question', 'uil-image-redo', 'uil-image-resize-landscape', 'uil-image-resize-square', 'uil-image-search', 'uil-image-share', 'uil-image-shield', 'uil-image-slash', 'uil-image-times', 'uil-image-upload', 'uil-image-v', 'uil-image', 'uil-images', 'uil-import', 'uil-incoming-call', 'uil-info-circle', 'uil-instagram-alt', 'uil-instagram', 'uil-intercom-alt', 'uil-intercom', 'uil-invoice', 'uil-italic', 'uil-jackhammer', 'uil-java-script', 'uil-kayak', 'uil-key-skeleton-alt', 'uil-key-skeleton', 'uil-keyboard-alt', 'uil-keyboard-hide', 'uil-keyboard-show', 'uil-keyboard', 'uil-keyhole-circle', 'uil-keyhole-square-full', 'uil-keyhole-square', 'uil-kid', 'uil-label-alt', 'uil-label', 'uil-lamp', 'uil-laptop-cloud', 'uil-laptop', 'uil-laughing', 'uil-layer-group-slash', 'uil-layer-group', 'uil-layers-alt', 'uil-layers-slash', 'uil-layers', 'uil-left-arrow-from-left', 'uil-left-arrow-to-left', 'uil-left-indent-alt', 'uil-left-indent', 'uil-left-to-right-text-direction', 'uil-life-ring', 'uil-lightbulb-alt', 'uil-lightbulb', 'uil-line-alt', 'uil-line-spacing', 'uil-line', 'uil-link-alt', 'uil-link-broken', 'uil-link-h', 'uil-link', 'uil-linkedin-alt', 'uil-linkedin', 'uil-list-ui-alt', 'uil-list-ul', 'uil-location-arrow-alt', 'uil-location-arrow', 'uil-location-pin-alt', 'uil-location-point', 'uil-location', 'uil-lock-access', 'uil-lock-alt', 'uil-lock-open-alt', 'uil-lock-slash', 'uil-lock', 'uil-mailbox-alt', 'uil-mailbox', 'uil-map-marker-alt', 'uil-map-marker-edit', 'uil-map-marker-info', 'uil-map-marker-minus', 'uil-map-marker-plus', 'uil-map-marker-question', 'uil-map-marker-shield', 'uil-map-marker-slash', 'uil-map-marker', 'uil-map-pin-alt', 'uil-map-pin', 'uil-map', 'uil-mars', 'uil-master-card', 'uil-maximize-left', 'uil-medal', 'uil-medical-drip', 'uil-medical-square-full', 'uil-medical-square', 'uil-medical', 'uil-medium-m', 'uil-medkit', 'uil-meeting-board', 'uil-megaphone', 'uil-meh-alt', 'uil-meh-closed-eye', 'uil-meh', 'uil-message', 'uil-metro', 'uil-microphone-slash', 'uil-microphone', 'uil-minus-circle', 'uil-minus-path', 'uil-minus-square-full', 'uil-minus-square', 'uil-minus', 'uil-missed-call', 'uil-mobey-bill-slash', 'uil-mobile-android-alt', 'uil-mobile-android', 'uil-mobile-vibrate', 'uil-modem', 'uil-money-bill-stack', 'uil-money-bill', 'uil-money-insert', 'uil-money-stack', 'uil-money-withdraw', 'uil-money-withdrawal', 'uil-moneybag-alt', 'uil-moneybag', 'uil-monitor-heart-rate', 'uil-monitor', 'uil-moon-eclipse', 'uil-moon', 'uil-moonset', 'uil-mountains-sun', 'uil-mountains', 'uil-mouse-alt', 'uil-mouse', 'uil-multiply', 'uil-music-note', 'uil-music-tune-slash', 'uil-music', 'uil-n-a', 'uil-navigator', 'uil-nerd', 'uil-newspaper', 'uil-ninja', 'uil-no-entry', 'uil-notebooks', 'uil-notes', 'uil-object-group', 'uil-object-ungroup', 'uil-octagon', 'uil-opera-alt', 'uil-opera', 'uil-outgoing-call', 'uil-package', 'uil-padlock', 'uil-paint-tool', 'uil-palette', 'uil-panorama-h-alt', 'uil-panorama-h', 'uil-panorama-v', 'uil-paperclip', 'uil-paragraph', 'uil-parcel', 'uil-parking-square', 'uil-pathfinder-unite', 'uil-pathfinder', 'uil-pause-circle', 'uil-pause', 'uil-paypal', 'uil-pen', 'uil-pentagon', 'uil-percentage', 'uil-phone-alt', 'uil-phone-pause', 'uil-phone-slash', 'uil-phone-times', 'uil-phone-volume', 'uil-phone', 'uil-picture', 'uil-plane-arrival', 'uil-plane-departure', 'uil-plane-fly', 'uil-plane', 'uil-play-circle', 'uil-play', 'uil-plug', 'uil-plus-circle', 'uil-plus-square', 'uil-plus', 'uil-podium', 'uil-polygon', 'uil-post-stamp', 'uil-postcard', 'uil-pound-circle', 'uil-pound', 'uil-power', 'uil-prescription-bottle', 'uil-presentation-check', 'uil-presentation-edit', 'uil-presentation-line', 'uil-presentation-lines-alt', 'uil-presentation-minus', 'uil-presentation-play', 'uil-presentation-plus', 'uil-presentation-times', 'uil-presentation', 'uil-previous', 'uil-pricetag-alt', 'uil-print-slash', 'uil-print', 'uil-process', 'uil-processor', 'uil-pump', 'uil-puzzle-piece', 'uil-question-circle', 'uil-raddit-alien-alt', 'uil-rainbow', 'uil-raindrops-alt', 'uil-raindrops', 'uil-react', 'uil-receipt-alt', 'uil-receipt', 'uil-record-audio', 'uil-reddit-alien-alt', 'uil-redo', 'uil-refresh', 'uil-registered', 'uil-repeat', 'uil-restaurant', 'uil-right-indent-alt', 'uil-right-to-left-text-direction', 'uil-robot', 'uil-rope-way', 'uil-rotate-360', 'uil-rss-alt', 'uil-rss-interface', 'uil-rss', 'uil-ruler-combined', 'uil-ruler', 'uil-sad-cry', 'uil-sad-crying', 'uil-sad-dizzy', 'uil-sad-squint', 'uil-sad', 'uil-scaling-left', 'uil-scaling-right', 'uil-scenery', 'uil-schedule', 'uil-science', 'uil-screw', 'uil-scroll-h', 'uil-scroll', 'uil-search-alt', 'uil-search-minus', 'uil-search-plus', 'uil-search', 'uil-selfie', 'uil-server-alt', 'uil-server-connection', 'uil-server-network-alt', 'uil-server-network', 'uil-server', 'uil-servers', 'uil-servicemark', 'uil-share-alt', 'uil-shield-check', 'uil-shield-exclamation', 'uil-shield-question', 'uil-shield-slash', 'uil-shield', 'uil-ship', 'uil-shop', 'uil-shopping-basket', 'uil-shopping-cart-alt', 'uil-shopping-trolley', 'uil-shovel', 'uil-shrink', 'uil-shuffle', 'uil-shutter-alt', 'uil-shutter', 'uil-sick', 'uil-sigma', 'uil-sign-alt', 'uil-sign-in-alt', 'uil-sign-left', 'uil-sign-out-alt', 'uil-sync-exclamation', 'uil-sync-slash', 'uil-sync', 'uil-syringe', 'uil-table', 'uil-tablet', 'uil-tablets', 'uil-tachometer-fast', 'uil-tag-alt', 'uil-tag', 'uil-tape', 'uil-taxi', 'uil-tear', 'uil-technology', 'uil-telegram-alt', 'uil-telegram', 'uil-telescope', 'uil-temperature-empty', 'uil-temperature-half', 'uil-temperature-minus', 'uil-temperature-plus', 'uil-temperature-quarter', 'uil-temperature-three-quarter', 'uil-temperature', 'uil-text-fields', 'uil-text-size', 'uil-text-strike-through', 'uil-text', 'uil-th-large', 'uil-th-slash', 'uil-th', 'uil-thermometer', 'uil-thumbs-down', 'uil-thumbs-up', 'uil-thunderstorm-moon', 'uil-thunderstorm-sun', 'uil-thunderstorm', 'uil-ticket', 'uil-times-circle', 'uil-times-square', 'uil-times', 'uil-toggle-off', 'uil-toggle-on', 'uil-top-arrow-from-top', 'uil-top-arrow-to-top', 'uil-tornado', 'uil-trademark-circle', 'uil-trademark', 'uil-traffic-barrier', 'uil-trash-alt', 'uil-trash', 'uil-trees', 'uil-triangle', 'uil-trophy', 'uil-trowel', 'uil-truck-case', 'uil-truck-loading', 'uil-truck', 'uil-tumblr-alt', 'uil-tumblr-square', 'uil-tumblr', 'uil-tv-retro-slash', 'uil-tv-retro', 'uil-twitter-alt', 'uil-twitter', 'uil-umbrella', 'uil-unamused', 'uil-underline', 'uil-university', 'uil-unlock-alt', 'uil-unlock', 'uil-upload-alt', 'uil-upload', 'uil-usd-circle', 'uil-usd-square', 'uil-user-check', 'uil-user-circle', 'uil-user-exclamation', 'uil-user-hard-hat', 'uil-user-minus', 'uil-user-plus', 'uil-user-square', 'uil-user-times', 'uil-user', 'uil-users-alt', 'uil-utensils-alt', 'uil-utensils', 'uil-vector-square-alt', 'uil-vector-square', 'uil-venus', 'uil-vertical-align-bottom', 'uil-vertical-align-center', 'uil-vertical-align-top', 'uil-vertical-distribute-bottom', 'uil-vertical-distribution-center', 'uil-vertical-distribution-top', 'uil-video-slash', 'uil-video', 'uil-visual-studio', 'uil-vk-alt', 'uil-vk', 'uil-voicemail-rectangle', 'uil-voicemail', 'uil-volleyball', 'uil-volume-down', 'uil-volume-mute', 'uil-volume-off', 'uil-volume-up', 'uil-volume', 'uil-vuejs-alt', 'uil-vuejs', 'uil-wall', 'uil-wallet', 'uil-watch-alt', 'uil-watch', 'uil-water-drop-slash', 'uil-water-glass', 'uil-water', 'uil-web-grid-alt', 'uil-web-grid', 'uil-web-section-alt', 'uil-web-section', 'uil-webcam', 'uil-weight', 'uil-whatsapp', 'uil-wheel-barrow', 'uil-wheelchair-alt', 'uil-wheelchair', 'uil-wifi-router', 'uil-wifi-slash', 'uil-wifi', 'uil-wind-moon', 'uil-wind-sun', 'uil-wind', 'uil-window-grid', 'uil-window-maximize', 'uil-window-restore', 'uil-window-section', 'uil-window', 'uil-windsock', 'uil-wrap-text', 'uil-wrench', 'uil-yellow', 'uil-yen-circle', 'uil-yen', 'uil-yin-yang', 'uil-youtube-alt', 'uil-youtube'];


    $('input[type="text"].use-unicons-icon-picker').each(function () {
        // Change focus
        $(this).focus(function () {
            $search.focus();
        })
        // Add the current icon as a prefix, and update when the field changes.
        $(this).before('<i class="uil unicons-icon-picker-prefix prefix"></i>');
        $(this).on('change keyup', function () {
            $(this).prev().text($(this).val());
        });
        $(this).prev().text($(this).val());
        // Append the picker and the search box.
        var $picker = $('<div class="unicons-icon-picker" tabindex="-1"></div>');
        var $search = $('<input type="text" placeholder="Search..." class="search">');
        // Do simple filtering based on the search.
        $search.on('keyup', function () {
            var search = $search.val().toLowerCase();
            var $icons = $(this).siblings('.icons');
            $icons.find('i').css('display', 'none');
            $icons.find('i:contains(' + search + ')').css('display', 'inline-block');
        });
        $picker.append($search);
        // Append each icon into the picker.
        var $icons = $('<div class="icons"></div>');
        function onIconClick() {
            $(this).closest('.unicons-icon-picker').prev().val($(this).text()).trigger('change');
            $picker.fadeOut(200);
        }
        unicons.forEach(function (icon) {
            var $icon = $('<i class="uil"></i>');
            $icon.text(icon);
            $icon.on('click', onIconClick);
            $icons.append($icon);
        });
        // Show the picker when the input field gets focus.
        $picker.append($icons).hide();
        $(this).after($picker);
        $(this).on('focusin', function () {
            $picker.fadeIn(200);
        });
    });
    // Hide any picker when it or the input field loses focus.
    $(document).on('mouseup', function (e) {
        var $picker = $('.unicons-icon-picker');
        if ($picker.length && !$picker.is(e.target) && !$(e.target).hasClass('use-unicons-icon-picker') && $picker.has(e.target).length === 0) {
            $picker.fadeOut(200);
        }
    });
});