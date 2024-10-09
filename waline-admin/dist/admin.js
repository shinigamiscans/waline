(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";.cropt-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none;pointer-events:none}.cropt-container .cr-image,.cropt-container .cr-overlay{-webkit-user-select:none;user-select:none}.cropt-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;height:320px}.cropt-container .cr-boundary,.cropt-container .cr-slider-wrap{width:320px}.cropt-container .cr-viewport{position:absolute;box-sizing:border-box;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px #00000080;z-index:0}.cropt-container .cr-vp-circle{border-radius:50%}.cropt-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.cropt-container .cr-slider-wrap{margin:15px auto}.cropt-container .cr-slider{width:100%}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#373c42;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#292d33}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#373c42}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}.cropt-container .cr-boundary{width:300px;height:300px;margin:0}.cropt-container .cr-slider-wrap{width:300px;margin:15px 0}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Ip = Object.defineProperty;
var Ca = (e) => {
  throw TypeError(e);
};
var $p = (e, t, n) => t in e ? Ip(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var nt = (e, t, n) => $p(e, typeof t != "symbol" ? t + "" : t, n), Ao = (e, t, n) => t.has(e) || Ca("Cannot " + n);
var te = (e, t, n) => (Ao(e, t, "read from private field"), n ? n.call(e) : t.get(e)), cn = (e, t, n) => t.has(e) ? Ca("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Zr = (e, t, n, r) => (Ao(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), z = (e, t, n) => (Ao(e, t, "access private method"), n);
function _p(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xc = { exports: {} }, go = {}, Sc = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br = Symbol.for("react.element"), Mp = Symbol.for("react.portal"), Fp = Symbol.for("react.fragment"), bp = Symbol.for("react.strict_mode"), Ap = Symbol.for("react.profiler"), zp = Symbol.for("react.provider"), Dp = Symbol.for("react.context"), Up = Symbol.for("react.forward_ref"), Bp = Symbol.for("react.suspense"), Vp = Symbol.for("react.memo"), Hp = Symbol.for("react.lazy"), Na = Symbol.iterator;
function Kp(e) {
  return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ec = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, kc = Object.assign, Cc = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = Cc, this.updater = n || Ec;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nc() {
}
Nc.prototype = Hn.prototype;
function Cl(e, t, n) {
  this.props = e, this.context = t, this.refs = Cc, this.updater = n || Ec;
}
var Nl = Cl.prototype = new Nc();
Nl.constructor = Cl;
kc(Nl, Hn.prototype);
Nl.isPureReactComponent = !0;
var ja = Array.isArray, jc = Object.prototype.hasOwnProperty, jl = { current: null }, Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) jc.call(t, r) && !Pc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Br, type: e, key: o, ref: s, props: i, _owner: jl.current };
}
function Wp(e, t) {
  return { $$typeof: Br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Pl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Br;
}
function Qp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pa = /\/+/g;
function zo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qp("" + e.key) : t.toString(36);
}
function Ei(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Br:
        case Mp:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + zo(s, 0) : r, ja(i) ? (n = "", e != null && (n = e.replace(Pa, "$&/") + "/"), Ei(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Pl(i) && (i = Wp(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Pa, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ja(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var l = r + zo(o, a);
    s += Ei(o, t, n, l, i);
  }
  else if (l = Kp(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done; ) o = o.value, l = r + zo(o, a++), s += Ei(o, t, n, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function qr(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ei(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Yp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null }, ki = { transition: null }, Xp = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ki, ReactCurrentOwner: jl };
function Rc() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: qr, forEach: function(e, t, n) {
  qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Pl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = Hn;
M.Fragment = Fp;
M.Profiler = Ap;
M.PureComponent = Cl;
M.StrictMode = bp;
M.Suspense = Bp;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
M.act = Rc;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = kc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = jl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) jc.call(t, l) && !Pc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Br, type: e.type, key: i, ref: o, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: Dp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zp, _context: e }, e.Consumer = e;
};
M.createElement = Lc;
M.createFactory = function(e) {
  var t = Lc.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Up, render: e };
};
M.isValidElement = Pl;
M.lazy = function(e) {
  return { $$typeof: Hp, _payload: { _status: -1, _result: e }, _init: Yp };
};
M.memo = function(e, t) {
  return { $$typeof: Vp, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = ki.transition;
  ki.transition = {};
  try {
    e();
  } finally {
    ki.transition = t;
  }
};
M.unstable_act = Rc;
M.useCallback = function(e, t) {
  return Se.current.useCallback(e, t);
};
M.useContext = function(e) {
  return Se.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return Se.current.useEffect(e, t);
};
M.useId = function() {
  return Se.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return Se.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return Se.current.useRef(e);
};
M.useState = function(e) {
  return Se.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return Se.current.useTransition();
};
M.version = "18.3.1";
Sc.exports = M;
var C = Sc.exports;
const vo = /* @__PURE__ */ mo(C), vs = /* @__PURE__ */ _p({
  __proto__: null,
  default: vo
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp = C, Jp = Symbol.for("react.element"), Zp = Symbol.for("react.fragment"), qp = Object.prototype.hasOwnProperty, eh = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, th = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) qp.call(t, r) && !th.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Jp, type: e, key: o, ref: s, props: i, _owner: eh.current };
}
go.Fragment = Zp;
go.jsx = Oc;
go.jsxs = Oc;
xc.exports = go;
var p = xc.exports, Tc = { exports: {} }, $e = {}, Ic = { exports: {} }, $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(P, I) {
    var T = P.length;
    P.push(I);
    e: for (; 0 < T; ) {
      var D = T - 1 >>> 1, G = P[D];
      if (0 < i(G, I)) P[D] = I, P[T] = G, T = D;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var I = P[0], T = P.pop();
    if (T !== I) {
      P[0] = T;
      e: for (var D = 0, G = P.length, un = G >>> 1; D < un; ) {
        var Ut = 2 * (D + 1) - 1, bo = P[Ut], Bt = Ut + 1, Jr = P[Bt];
        if (0 > i(bo, T)) Bt < G && 0 > i(Jr, bo) ? (P[D] = Jr, P[Bt] = T, D = Bt) : (P[D] = bo, P[Ut] = T, D = Ut);
        else if (Bt < G && 0 > i(Jr, T)) P[D] = Jr, P[Bt] = T, D = Bt;
        else break e;
      }
    }
    return I;
  }
  function i(P, I) {
    var T = P.sortIndex - I.sortIndex;
    return T !== 0 ? T : P.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, g = !1, y = !1, x = !1, S = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(P) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= P) r(u), I.sortIndex = I.expirationTime, t(l, I);
      else break;
      I = n(u);
    }
  }
  function v(P) {
    if (x = !1, w(P), !y) if (n(l) !== null) y = !0, Xe(E);
    else {
      var I = n(u);
      I !== null && pt(v, I.startTime - P);
    }
  }
  function E(P, I) {
    y = !1, x && (x = !1, h(L), L = -1), g = !0;
    var T = f;
    try {
      for (w(I), d = n(l); d !== null && (!(d.expirationTime > I) || P && !A()); ) {
        var D = d.callback;
        if (typeof D == "function") {
          d.callback = null, f = d.priorityLevel;
          var G = D(d.expirationTime <= I);
          I = e.unstable_now(), typeof G == "function" ? d.callback = G : d === n(l) && r(l), w(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var un = !0;
      else {
        var Ut = n(u);
        Ut !== null && pt(v, Ut.startTime - I), un = !1;
      }
      return un;
    } finally {
      d = null, f = T, g = !1;
    }
  }
  var k = !1, N = null, L = -1, $ = 5, O = -1;
  function A() {
    return !(e.unstable_now() - O < $);
  }
  function ee() {
    if (N !== null) {
      var P = e.unstable_now();
      O = P;
      var I = !0;
      try {
        I = N(!0, P);
      } finally {
        I ? fe() : (k = !1, N = null);
      }
    } else k = !1;
  }
  var fe;
  if (typeof m == "function") fe = function() {
    m(ee);
  };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(), H = ye.port2;
    ye.port1.onmessage = ee, fe = function() {
      H.postMessage(null);
    };
  } else fe = function() {
    S(ee, 0);
  };
  function Xe(P) {
    N = P, k || (k = !0, fe());
  }
  function pt(P, I) {
    L = S(function() {
      P(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, Xe(E));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = f;
    }
    var T = f;
    f = I;
    try {
      return P();
    } finally {
      f = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, I) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var T = f;
    f = P;
    try {
      return I();
    } finally {
      f = T;
    }
  }, e.unstable_scheduleCallback = function(P, I, T) {
    var D = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? D + T : D) : T = D, P) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = T + G, P = { id: c++, callback: I, priorityLevel: P, startTime: T, expirationTime: G, sortIndex: -1 }, T > D ? (P.sortIndex = T, t(u, P), n(l) === null && P === n(u) && (x ? (h(L), L = -1) : x = !0, pt(v, T - D))) : (P.sortIndex = G, t(l, P), y || g || (y = !0, Xe(E))), P;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(P) {
    var I = f;
    return function() {
      var T = f;
      f = I;
      try {
        return P.apply(this, arguments);
      } finally {
        f = T;
      }
    };
  };
})($c);
Ic.exports = $c;
var nh = Ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rh = C, Ie = nh;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _c = /* @__PURE__ */ new Set(), xr = {};
function rn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (xr[e] = t, e = 0; e < t.length; e++) _c.add(t[e]);
}
var at = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ys = Object.prototype.hasOwnProperty, ih = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, La = {}, Ra = {};
function oh(e) {
  return ys.call(Ra, e) ? !0 : ys.call(La, e) ? !1 : ih.test(e) ? Ra[e] = !0 : (La[e] = !0, !1);
}
function sh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lh(e, t, n, r) {
  if (t === null || typeof t > "u" || sh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ee(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ll = /[\-:]([a-z])/g;
function Rl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ll,
    Rl
  );
  ce[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ll, Rl);
  ce[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ll, Rl);
  ce[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ol(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lh(t, n, i, r) && (n = null), r || i === null ? oh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ei = Symbol.for("react.element"), mn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Tl = Symbol.for("react.strict_mode"), ws = Symbol.for("react.profiler"), Mc = Symbol.for("react.provider"), Fc = Symbol.for("react.context"), Il = Symbol.for("react.forward_ref"), xs = Symbol.for("react.suspense"), Ss = Symbol.for("react.suspense_list"), $l = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), bc = Symbol.for("react.offscreen"), Oa = Symbol.iterator;
function Yn(e) {
  return e === null || typeof e != "object" ? null : (e = Oa && e[Oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Do;
function sr(e) {
  if (Do === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Do = t && t[1] || "";
  }
  return `
` + Do + e;
}
var Uo = !1;
function Bo(e, t) {
  if (!e || Uo) return "";
  Uo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || i[s] !== o[a]) {
              var l = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Uo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function ah(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Bo(e.type, !1), e;
    case 11:
      return e = Bo(e.type.render, !1), e;
    case 1:
      return e = Bo(e.type, !0), e;
    default:
      return "";
  }
}
function Es(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case mn:
      return "Portal";
    case ws:
      return "Profiler";
    case Tl:
      return "StrictMode";
    case xs:
      return "Suspense";
    case Ss:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Fc:
      return (e.displayName || "Context") + ".Consumer";
    case Mc:
      return (e._context.displayName || "Context") + ".Provider";
    case Il:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case $l:
      return t = e.displayName || null, t !== null ? t : Es(e.type) || "Memo";
    case vt:
      t = e._payload, e = e._init;
      try {
        return Es(e(t));
      } catch {
      }
  }
  return null;
}
function uh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Es(t);
    case 8:
      return t === Tl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ac(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ch(e) {
  var t = Ac(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ti(e) {
  e._valueTracker || (e._valueTracker = ch(e));
}
function zc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ac(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function bi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ks(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Dc(e, t) {
  t = t.checked, t != null && Ol(e, "checked", t, !1);
}
function Cs(e, t) {
  Dc(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ns(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ns(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ia(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ns(e, t, n) {
  (t !== "number" || bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function js(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $a(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Uc(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ps(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Bc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ni, Vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ni = ni || document.createElement("div"), ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ni.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, dh = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
  dh.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e];
  });
});
function Hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px";
}
function Kc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Hc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var fh = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ls(e, t) {
  if (t) {
    if (fh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Rs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Os = null;
function _l(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ts = null, On = null, Tn = null;
function Ma(e) {
  if (e = Kr(e)) {
    if (typeof Ts != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = Eo(t), Ts(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  On ? Tn ? Tn.push(e) : Tn = [e] : On = e;
}
function Qc() {
  if (On) {
    var e = On, t = Tn;
    if (Tn = On = null, Ma(e), t) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function Yc(e, t) {
  return e(t);
}
function Xc() {
}
var Vo = !1;
function Gc(e, t, n) {
  if (Vo) return e(t, n);
  Vo = !0;
  try {
    return Yc(e, t, n);
  } finally {
    Vo = !1, (On !== null || Tn !== null) && (Xc(), Qc());
  }
}
function Er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Is = !1;
if (at) try {
  var Xn = {};
  Object.defineProperty(Xn, "passive", { get: function() {
    Is = !0;
  } }), window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn);
} catch {
  Is = !1;
}
function ph(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var dr = !1, Ai = null, zi = !1, $s = null, hh = { onError: function(e) {
  dr = !0, Ai = e;
} };
function mh(e, t, n, r, i, o, s, a, l) {
  dr = !1, Ai = null, ph.apply(hh, arguments);
}
function gh(e, t, n, r, i, o, s, a, l) {
  if (mh.apply(this, arguments), dr) {
    if (dr) {
      var u = Ai;
      dr = !1, Ai = null;
    } else throw Error(j(198));
    zi || (zi = !0, $s = u);
  }
}
function on(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fa(e) {
  if (on(e) !== e) throw Error(j(188));
}
function vh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Fa(i), e;
        if (o === r) return Fa(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          s = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            s = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Zc(e) {
  return e = vh(e), e !== null ? qc(e) : null;
}
function qc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ed = Ie.unstable_scheduleCallback, ba = Ie.unstable_cancelCallback, yh = Ie.unstable_shouldYield, wh = Ie.unstable_requestPaint, J = Ie.unstable_now, xh = Ie.unstable_getCurrentPriorityLevel, Ml = Ie.unstable_ImmediatePriority, td = Ie.unstable_UserBlockingPriority, Di = Ie.unstable_NormalPriority, Sh = Ie.unstable_LowPriority, nd = Ie.unstable_IdlePriority, yo = null, et = null;
function Eh(e) {
  if (et && typeof et.onCommitFiberRoot == "function") try {
    et.onCommitFiberRoot(yo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : Nh, kh = Math.log, Ch = Math.LN2;
function Nh(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (kh(e) / Ch | 0) | 0;
}
var ri = 64, ii = 4194304;
function ar(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ui(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? r = ar(a) : (o &= s, o !== 0 && (r = ar(o)));
  } else s = n & ~i, s !== 0 ? r = ar(s) : o !== 0 && (r = ar(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function jh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ph(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - We(o), a = 1 << s, l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = jh(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function _s(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function rd() {
  var e = ri;
  return ri <<= 1, !(ri & 4194240) && (ri = 64), e;
}
function Ho(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function Lh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - We(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Fl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var b = 0;
function id(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var od, bl, sd, ld, ad, Ms = !1, oi = [], Ct = null, Nt = null, jt = null, kr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), wt = [], Rh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Aa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Kr(t), t !== null && bl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Oh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ct = Gn(Ct, e, t, n, r, i), !0;
    case "dragenter":
      return Nt = Gn(Nt, e, t, n, r, i), !0;
    case "mouseover":
      return jt = Gn(jt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return kr.set(o, Gn(kr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Cr.set(o, Gn(Cr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ud(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Jc(n), t !== null) {
          e.blockedOn = t, ad(e.priority, function() {
            sd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Os = r, n.target.dispatchEvent(r), Os = null;
    } else return t = Kr(n), t !== null && bl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  Ci(e) && n.delete(t);
}
function Th() {
  Ms = !1, Ct !== null && Ci(Ct) && (Ct = null), Nt !== null && Ci(Nt) && (Nt = null), jt !== null && Ci(jt) && (jt = null), kr.forEach(za), Cr.forEach(za);
}
function Jn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ms || (Ms = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Th)));
}
function Nr(e) {
  function t(i) {
    return Jn(i, e);
  }
  if (0 < oi.length) {
    Jn(oi[0], e);
    for (var n = 1; n < oi.length; n++) {
      var r = oi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && Jn(Ct, e), Nt !== null && Jn(Nt, e), jt !== null && Jn(jt, e), kr.forEach(t), Cr.forEach(t), n = 0; n < wt.length; n++) r = wt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && (n = wt[0], n.blockedOn === null); ) ud(n), n.blockedOn === null && wt.shift();
}
var In = ft.ReactCurrentBatchConfig, Bi = !0;
function Ih(e, t, n, r) {
  var i = b, o = In.transition;
  In.transition = null;
  try {
    b = 1, Al(e, t, n, r);
  } finally {
    b = i, In.transition = o;
  }
}
function $h(e, t, n, r) {
  var i = b, o = In.transition;
  In.transition = null;
  try {
    b = 4, Al(e, t, n, r);
  } finally {
    b = i, In.transition = o;
  }
}
function Al(e, t, n, r) {
  if (Bi) {
    var i = Fs(e, t, n, r);
    if (i === null) es(e, t, r, Vi, n), Aa(e, r);
    else if (Oh(i, e, t, n, r)) r.stopPropagation();
    else if (Aa(e, r), t & 4 && -1 < Rh.indexOf(e)) {
      for (; i !== null; ) {
        var o = Kr(i);
        if (o !== null && od(o), o = Fs(e, t, n, r), o === null && es(e, t, r, Vi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else es(e, t, r, null, n);
  }
}
var Vi = null;
function Fs(e, t, n, r) {
  if (Vi = null, e = _l(r), e = Kt(e), e !== null) if (t = on(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Jc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Vi = e, null;
}
function cd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (xh()) {
        case Ml:
          return 1;
        case td:
          return 4;
        case Di:
        case Sh:
          return 16;
        case nd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null, zl = null, Ni = null;
function dd() {
  if (Ni) return Ni;
  var e, t = zl, n = t.length, r, i = "value" in St ? St.value : St.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return Ni = i.slice(e, 1 < r ? 1 - r : void 0);
}
function ji(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function si() {
  return !0;
}
function Da() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? si : Da, this.isPropagationStopped = Da, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = si);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = si);
  }, persist: function() {
  }, isPersistent: si }), t;
}
var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Dl = _e(Kn), Hr = Y({}, Kn, { view: 0, detail: 0 }), _h = _e(Hr), Ko, Wo, Zn, wo = Y({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ul, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (Ko = e.screenX - Zn.screenX, Wo = e.screenY - Zn.screenY) : Wo = Ko = 0, Zn = e), Ko);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wo;
} }), Ua = _e(wo), Mh = Y({}, wo, { dataTransfer: 0 }), Fh = _e(Mh), bh = Y({}, Hr, { relatedTarget: 0 }), Qo = _e(bh), Ah = Y({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zh = _e(Ah), Dh = Y({}, Kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uh = _e(Dh), Bh = Y({}, Kn, { data: 0 }), Ba = _e(Bh), Vh = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Hh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Kh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Wh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kh[e]) ? !!t[e] : !1;
}
function Ul() {
  return Wh;
}
var Qh = Y({}, Hr, { key: function(e) {
  if (e.key) {
    var t = Vh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ul, charCode: function(e) {
  return e.type === "keypress" ? ji(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Yh = _e(Qh), Xh = Y({}, wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Va = _e(Xh), Gh = Y({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ul }), Jh = _e(Gh), Zh = Y({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qh = _e(Zh), em = Y({}, wo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), tm = _e(em), nm = [9, 13, 27, 32], Bl = at && "CompositionEvent" in window, fr = null;
at && "documentMode" in document && (fr = document.documentMode);
var rm = at && "TextEvent" in window && !fr, fd = at && (!Bl || fr && 8 < fr && 11 >= fr), Ha = " ", Ka = !1;
function pd(e, t) {
  switch (e) {
    case "keyup":
      return nm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vn = !1;
function im(e, t) {
  switch (e) {
    case "compositionend":
      return hd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ka = !0, Ha);
    case "textInput":
      return e = t.data, e === Ha && Ka ? null : e;
    default:
      return null;
  }
}
function om(e, t) {
  if (vn) return e === "compositionend" || !Bl && pd(e, t) ? (e = dd(), Ni = zl = St = null, vn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sm[e.type] : t === "textarea";
}
function md(e, t, n, r) {
  Wc(r), t = Hi(t, "onChange"), 0 < t.length && (n = new Dl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var pr = null, jr = null;
function lm(e) {
  jd(e, 0);
}
function xo(e) {
  var t = xn(e);
  if (zc(t)) return e;
}
function am(e, t) {
  if (e === "change") return t;
}
var gd = !1;
if (at) {
  var Yo;
  if (at) {
    var Xo = "oninput" in document;
    if (!Xo) {
      var Qa = document.createElement("div");
      Qa.setAttribute("oninput", "return;"), Xo = typeof Qa.oninput == "function";
    }
    Yo = Xo;
  } else Yo = !1;
  gd = Yo && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  pr && (pr.detachEvent("onpropertychange", vd), jr = pr = null);
}
function vd(e) {
  if (e.propertyName === "value" && xo(jr)) {
    var t = [];
    md(t, jr, e, _l(e)), Gc(lm, t);
  }
}
function um(e, t, n) {
  e === "focusin" ? (Ya(), pr = t, jr = n, pr.attachEvent("onpropertychange", vd)) : e === "focusout" && Ya();
}
function cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xo(jr);
}
function dm(e, t) {
  if (e === "click") return xo(t);
}
function fm(e, t) {
  if (e === "input" || e === "change") return xo(t);
}
function pm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ye = typeof Object.is == "function" ? Object.is : pm;
function Pr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ys.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Xa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ga(e, t) {
  var n = Xa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xa(n);
  }
}
function yd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wd() {
  for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bi(e.document);
  }
  return t;
}
function Vl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function hm(e) {
  var t = wd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && yd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ga(n, o);
        var s = Ga(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var mm = at && "documentMode" in document && 11 >= document.documentMode, yn = null, bs = null, hr = null, As = !1;
function Ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  As || yn == null || yn !== bi(r) || (r = yn, "selectionStart" in r && Vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hr && Pr(hr, r) || (hr = r, r = Hi(bs, "onSelect"), 0 < r.length && (t = new Dl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function li(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: li("Animation", "AnimationEnd"), animationiteration: li("Animation", "AnimationIteration"), animationstart: li("Animation", "AnimationStart"), transitionend: li("Transition", "TransitionEnd") }, Go = {}, xd = {};
at && (xd = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function So(e) {
  if (Go[e]) return Go[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in xd) return Go[e] = t[n];
  return e;
}
var Sd = So("animationend"), Ed = So("animationiteration"), kd = So("animationstart"), Cd = So("transitionend"), Nd = /* @__PURE__ */ new Map(), Za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  Nd.set(e, t), rn(t, [e]);
}
for (var Jo = 0; Jo < Za.length; Jo++) {
  var Zo = Za[Jo], gm = Zo.toLowerCase(), vm = Zo[0].toUpperCase() + Zo.slice(1);
  Ft(gm, "on" + vm);
}
Ft(Sd, "onAnimationEnd");
Ft(Ed, "onAnimationIteration");
Ft(kd, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Cd, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, gh(r, t, void 0, e), e.currentTarget = null;
}
function jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
        qa(i, a, u), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
        qa(i, a, u), o = l;
      }
    }
  }
  if (zi) throw e = $s, zi = !1, $s = null, e;
}
function B(e, t) {
  var n = t[Vs];
  n === void 0 && (n = t[Vs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Pd(t, e, 2, !1), n.add(r));
}
function qo(e, t, n) {
  var r = 0;
  t && (r |= 4), Pd(n, e, r, t);
}
var ai = "_reactListening" + Math.random().toString(36).slice(2);
function Lr(e) {
  if (!e[ai]) {
    e[ai] = !0, _c.forEach(function(n) {
      n !== "selectionchange" && (ym.has(n) || qo(n, !1, e), qo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ai] || (t[ai] = !0, qo("selectionchange", !1, t));
  }
}
function Pd(e, t, n, r) {
  switch (cd(t)) {
    case 1:
      var i = Ih;
      break;
    case 4:
      i = $h;
      break;
    default:
      i = Al;
  }
  n = i.bind(null, t, n, e), i = void 0, !Is || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function es(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = Kt(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Gc(function() {
    var u = o, c = _l(n), d = [];
    e: {
      var f = Nd.get(e);
      if (f !== void 0) {
        var g = Dl, y = e;
        switch (e) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Yh;
            break;
          case "focusin":
            y = "focus", g = Qo;
            break;
          case "focusout":
            y = "blur", g = Qo;
            break;
          case "beforeblur":
          case "afterblur":
            g = Qo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Fh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Jh;
            break;
          case Sd:
          case Ed:
          case kd:
            g = zh;
            break;
          case Cd:
            g = qh;
            break;
          case "scroll":
            g = _h;
            break;
          case "wheel":
            g = tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Uh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Va;
        }
        var x = (t & 4) !== 0, S = !x && e === "scroll", h = x ? f !== null ? f + "Capture" : null : f;
        x = [];
        for (var m = u, w; m !== null; ) {
          w = m;
          var v = w.stateNode;
          if (w.tag === 5 && v !== null && (w = v, h !== null && (v = Er(m, h), v != null && x.push(Rr(m, v, w)))), S) break;
          m = m.return;
        }
        0 < x.length && (f = new g(f, y, null, n, c), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== Os && (y = n.relatedTarget || n.fromElement) && (Kt(y) || y[ut])) break e;
        if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? Kt(y) : null, y !== null && (S = on(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
          if (x = Ua, v = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = Va, v = "onPointerLeave", h = "onPointerEnter", m = "pointer"), S = g == null ? f : xn(g), w = y == null ? f : xn(y), f = new x(v, m + "leave", g, n, c), f.target = S, f.relatedTarget = w, v = null, Kt(c) === u && (x = new x(h, m + "enter", y, n, c), x.target = w, x.relatedTarget = S, v = x), S = v, g && y) t: {
            for (x = g, h = y, m = 0, w = x; w; w = dn(w)) m++;
            for (w = 0, v = h; v; v = dn(v)) w++;
            for (; 0 < m - w; ) x = dn(x), m--;
            for (; 0 < w - m; ) h = dn(h), w--;
            for (; m--; ) {
              if (x === h || h !== null && x === h.alternate) break t;
              x = dn(x), h = dn(h);
            }
            x = null;
          }
          else x = null;
          g !== null && eu(d, f, g, x, !1), y !== null && S !== null && eu(d, S, y, x, !0);
        }
      }
      e: {
        if (f = u ? xn(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var E = am;
        else if (Wa(f)) if (gd) E = fm;
        else {
          E = cm;
          var k = um;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = dm);
        if (E && (E = E(e, u))) {
          md(d, E, n, c);
          break e;
        }
        k && k(e, f, u), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Ns(f, "number", f.value);
      }
      switch (k = u ? xn(u) : window, e) {
        case "focusin":
          (Wa(k) || k.contentEditable === "true") && (yn = k, bs = u, hr = null);
          break;
        case "focusout":
          hr = bs = yn = null;
          break;
        case "mousedown":
          As = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          As = !1, Ja(d, n, c);
          break;
        case "selectionchange":
          if (mm) break;
        case "keydown":
        case "keyup":
          Ja(d, n, c);
      }
      var N;
      if (Bl) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else vn ? pd(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (fd && n.locale !== "ko" && (vn || L !== "onCompositionStart" ? L === "onCompositionEnd" && vn && (N = dd()) : (St = c, zl = "value" in St ? St.value : St.textContent, vn = !0)), k = Hi(u, L), 0 < k.length && (L = new Ba(L, e, null, n, c), d.push({ event: L, listeners: k }), N ? L.data = N : (N = hd(n), N !== null && (L.data = N)))), (N = rm ? im(e, n) : om(e, n)) && (u = Hi(u, "onBeforeInput"), 0 < u.length && (c = new Ba("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = N));
    }
    jd(d, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Er(e, n), o != null && r.unshift(Rr(e, o, i)), o = Er(e, t), o != null && r.push(Rr(e, o, i))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Er(n, o), l != null && s.unshift(Rr(n, l, a))) : i || (l = Er(n, o), l != null && s.push(Rr(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var wm = /\r\n?/g, xm = /\u0000|\uFFFD/g;
function tu(e) {
  return (typeof e == "string" ? e : "" + e).replace(wm, `
`).replace(xm, "");
}
function ui(e, t, n) {
  if (t = tu(t), tu(e) !== t && n) throw Error(j(425));
}
function Ki() {
}
var zs = null, Ds = null;
function Us(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bs = typeof setTimeout == "function" ? setTimeout : void 0, Sm = typeof clearTimeout == "function" ? clearTimeout : void 0, nu = typeof Promise == "function" ? Promise : void 0, Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof nu < "u" ? function(e) {
  return nu.resolve(null).then(e).catch(km);
} : Bs;
function km(e) {
  setTimeout(function() {
    throw e;
  });
}
function ts(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Nr(t);
}
function Pt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wn = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + Wn, Or = "__reactProps$" + Wn, ut = "__reactContainer$" + Wn, Vs = "__reactEvents$" + Wn, Cm = "__reactListeners$" + Wn, Nm = "__reactHandles$" + Wn;
function Kt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ut] || n[Ze]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ru(e); e !== null; ) {
        if (n = e[Ze]) return n;
        e = ru(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Kr(e) {
  return e = e[Ze] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Eo(e) {
  return e[Or] || null;
}
var Hs = [], Sn = -1;
function bt(e) {
  return { current: e };
}
function V(e) {
  0 > Sn || (e.current = Hs[Sn], Hs[Sn] = null, Sn--);
}
function U(e, t) {
  Sn++, Hs[Sn] = e.current, e.current = t;
}
var _t = {}, ve = bt(_t), Ne = bt(!1), Gt = _t;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function je(e) {
  return e = e.childContextTypes, e != null;
}
function Wi() {
  V(Ne), V(ve);
}
function iu(e, t, n) {
  if (ve.current !== _t) throw Error(j(168));
  U(ve, t), U(Ne, n);
}
function Ld(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, uh(e) || "Unknown", i));
  return Y({}, n, r);
}
function Qi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Gt = ve.current, U(ve, e), U(Ne, Ne.current), !0;
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = Ld(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, V(Ne), V(ve), U(ve, e)) : V(Ne), U(Ne, n);
}
var it = null, ko = !1, ns = !1;
function Rd(e) {
  it === null ? it = [e] : it.push(e);
}
function jm(e) {
  ko = !0, Rd(e);
}
function At() {
  if (!ns && it !== null) {
    ns = !0;
    var e = 0, t = b;
    try {
      var n = it;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      it = null, ko = !1;
    } catch (i) {
      throw it !== null && (it = it.slice(e + 1)), ed(Ml, At), i;
    } finally {
      b = t, ns = !1;
    }
  }
  return null;
}
var En = [], kn = 0, Yi = null, Xi = 0, Me = [], Fe = 0, Jt = null, ot = 1, st = "";
function Vt(e, t) {
  En[kn++] = Xi, En[kn++] = Yi, Yi = e, Xi = t;
}
function Od(e, t, n) {
  Me[Fe++] = ot, Me[Fe++] = st, Me[Fe++] = Jt, Jt = e;
  var r = ot;
  e = st;
  var i = 32 - We(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - We(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, ot = 1 << 32 - We(t) + i | n << i | r, st = o + e;
  } else ot = 1 << o | n << i | r, st = e;
}
function Hl(e) {
  e.return !== null && (Vt(e, 1), Od(e, 1, 0));
}
function Kl(e) {
  for (; e === Yi; ) Yi = En[--kn], En[kn] = null, Xi = En[--kn], En[kn] = null;
  for (; e === Jt; ) Jt = Me[--Fe], Me[Fe] = null, st = Me[--Fe], Me[Fe] = null, ot = Me[--Fe], Me[Fe] = null;
}
var Te = null, Re = null, K = !1, Ke = null;
function Td(e, t) {
  var n = Ae(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, Re = Pt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: ot, overflow: st } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ae(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Te = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ws(e) {
  if (K) {
    var t = Re;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Ks(e)) throw Error(j(418));
        t = Pt(n.nextSibling);
        var r = Te;
        t && su(e, t) ? Td(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Te = e);
      }
    } else {
      if (Ks(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, K = !1, Te = e;
    }
  }
}
function lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function ci(e) {
  if (e !== Te) return !1;
  if (!K) return lu(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Us(e.type, e.memoizedProps)), t && (t = Re)) {
    if (Ks(e)) throw Id(), Error(j(418));
    for (; t; ) Td(e, t), t = Pt(t.nextSibling);
  }
  if (lu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Pt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Te ? Pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Id() {
  for (var e = Re; e; ) e = Pt(e.nextSibling);
}
function zn() {
  Re = Te = null, K = !1;
}
function Wl(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
var Pm = ft.ReactCurrentBatchConfig;
function qn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var a = i.refs;
        s === null ? delete a[o] : a[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function di(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function au(e) {
  var t = e._init;
  return t(e._payload);
}
function $d(e) {
  function t(h, m) {
    if (e) {
      var w = h.deletions;
      w === null ? (h.deletions = [m], h.flags |= 16) : w.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function i(h, m) {
    return h = Tt(h, m), h.index = 0, h.sibling = null, h;
  }
  function o(h, m, w) {
    return h.index = w, e ? (w = h.alternate, w !== null ? (w = w.index, w < m ? (h.flags |= 2, m) : w) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, w, v) {
    return m === null || m.tag !== 6 ? (m = us(w, h.mode, v), m.return = h, m) : (m = i(m, w), m.return = h, m);
  }
  function l(h, m, w, v) {
    var E = w.type;
    return E === gn ? c(h, m, w.props.children, v, w.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === vt && au(E) === m.type) ? (v = i(m, w.props), v.ref = qn(h, m, w), v.return = h, v) : (v = $i(w.type, w.key, w.props, null, h.mode, v), v.ref = qn(h, m, w), v.return = h, v);
  }
  function u(h, m, w, v) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== w.containerInfo || m.stateNode.implementation !== w.implementation ? (m = cs(w, h.mode, v), m.return = h, m) : (m = i(m, w.children || []), m.return = h, m);
  }
  function c(h, m, w, v, E) {
    return m === null || m.tag !== 7 ? (m = Xt(w, h.mode, v, E), m.return = h, m) : (m = i(m, w), m.return = h, m);
  }
  function d(h, m, w) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = us("" + m, h.mode, w), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ei:
          return w = $i(m.type, m.key, m.props, null, h.mode, w), w.ref = qn(h, null, m), w.return = h, w;
        case mn:
          return m = cs(m, h.mode, w), m.return = h, m;
        case vt:
          var v = m._init;
          return d(h, v(m._payload), w);
      }
      if (lr(m) || Yn(m)) return m = Xt(m, h.mode, w, null), m.return = h, m;
      di(h, m);
    }
    return null;
  }
  function f(h, m, w, v) {
    var E = m !== null ? m.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : a(h, m, "" + w, v);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ei:
          return w.key === E ? l(h, m, w, v) : null;
        case mn:
          return w.key === E ? u(h, m, w, v) : null;
        case vt:
          return E = w._init, f(
            h,
            m,
            E(w._payload),
            v
          );
      }
      if (lr(w) || Yn(w)) return E !== null ? null : c(h, m, w, v, null);
      di(h, w);
    }
    return null;
  }
  function g(h, m, w, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return h = h.get(w) || null, a(m, h, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ei:
          return h = h.get(v.key === null ? w : v.key) || null, l(m, h, v, E);
        case mn:
          return h = h.get(v.key === null ? w : v.key) || null, u(m, h, v, E);
        case vt:
          var k = v._init;
          return g(h, m, w, k(v._payload), E);
      }
      if (lr(v) || Yn(v)) return h = h.get(w) || null, c(m, h, v, E, null);
      di(m, v);
    }
    return null;
  }
  function y(h, m, w, v) {
    for (var E = null, k = null, N = m, L = m = 0, $ = null; N !== null && L < w.length; L++) {
      N.index > L ? ($ = N, N = null) : $ = N.sibling;
      var O = f(h, N, w[L], v);
      if (O === null) {
        N === null && (N = $);
        break;
      }
      e && N && O.alternate === null && t(h, N), m = o(O, m, L), k === null ? E = O : k.sibling = O, k = O, N = $;
    }
    if (L === w.length) return n(h, N), K && Vt(h, L), E;
    if (N === null) {
      for (; L < w.length; L++) N = d(h, w[L], v), N !== null && (m = o(N, m, L), k === null ? E = N : k.sibling = N, k = N);
      return K && Vt(h, L), E;
    }
    for (N = r(h, N); L < w.length; L++) $ = g(N, h, L, w[L], v), $ !== null && (e && $.alternate !== null && N.delete($.key === null ? L : $.key), m = o($, m, L), k === null ? E = $ : k.sibling = $, k = $);
    return e && N.forEach(function(A) {
      return t(h, A);
    }), K && Vt(h, L), E;
  }
  function x(h, m, w, v) {
    var E = Yn(w);
    if (typeof E != "function") throw Error(j(150));
    if (w = E.call(w), w == null) throw Error(j(151));
    for (var k = E = null, N = m, L = m = 0, $ = null, O = w.next(); N !== null && !O.done; L++, O = w.next()) {
      N.index > L ? ($ = N, N = null) : $ = N.sibling;
      var A = f(h, N, O.value, v);
      if (A === null) {
        N === null && (N = $);
        break;
      }
      e && N && A.alternate === null && t(h, N), m = o(A, m, L), k === null ? E = A : k.sibling = A, k = A, N = $;
    }
    if (O.done) return n(
      h,
      N
    ), K && Vt(h, L), E;
    if (N === null) {
      for (; !O.done; L++, O = w.next()) O = d(h, O.value, v), O !== null && (m = o(O, m, L), k === null ? E = O : k.sibling = O, k = O);
      return K && Vt(h, L), E;
    }
    for (N = r(h, N); !O.done; L++, O = w.next()) O = g(N, h, L, O.value, v), O !== null && (e && O.alternate !== null && N.delete(O.key === null ? L : O.key), m = o(O, m, L), k === null ? E = O : k.sibling = O, k = O);
    return e && N.forEach(function(ee) {
      return t(h, ee);
    }), K && Vt(h, L), E;
  }
  function S(h, m, w, v) {
    if (typeof w == "object" && w !== null && w.type === gn && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ei:
          e: {
            for (var E = w.key, k = m; k !== null; ) {
              if (k.key === E) {
                if (E = w.type, E === gn) {
                  if (k.tag === 7) {
                    n(h, k.sibling), m = i(k, w.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === vt && au(E) === k.type) {
                  n(h, k.sibling), m = i(k, w.props), m.ref = qn(h, k, w), m.return = h, h = m;
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            w.type === gn ? (m = Xt(w.props.children, h.mode, v, w.key), m.return = h, h = m) : (v = $i(w.type, w.key, w.props, null, h.mode, v), v.ref = qn(h, m, w), v.return = h, h = v);
          }
          return s(h);
        case mn:
          e: {
            for (k = w.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === w.containerInfo && m.stateNode.implementation === w.implementation) {
                n(h, m.sibling), m = i(m, w.children || []), m.return = h, h = m;
                break e;
              } else {
                n(h, m);
                break;
              }
              else t(h, m);
              m = m.sibling;
            }
            m = cs(w, h.mode, v), m.return = h, h = m;
          }
          return s(h);
        case vt:
          return k = w._init, S(h, m, k(w._payload), v);
      }
      if (lr(w)) return y(h, m, w, v);
      if (Yn(w)) return x(h, m, w, v);
      di(h, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, m !== null && m.tag === 6 ? (n(h, m.sibling), m = i(m, w), m.return = h, h = m) : (n(h, m), m = us(w, h.mode, v), m.return = h, h = m), s(h)) : n(h, m);
  }
  return S;
}
var Dn = $d(!0), _d = $d(!1), Gi = bt(null), Ji = null, Cn = null, Ql = null;
function Yl() {
  Ql = Cn = Ji = null;
}
function Xl(e) {
  var t = Gi.current;
  V(Gi), e._currentValue = t;
}
function Qs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  Ji = e, Ql = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function De(e) {
  var t = e._currentValue;
  if (Ql !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
    if (Ji === null) throw Error(j(308));
    Cn = e, Ji.dependencies = { lanes: 0, firstContext: e };
  } else Cn = Cn.next = e;
  return t;
}
var Wt = null;
function Gl(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function Md(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Gl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function Jl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Fd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ct(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Gl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ct(e, n);
}
function Pi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fl(e, n);
  }
}
function uu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Zi(e, t, n, r) {
  var i = e.updateQueue;
  yt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? o = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var d = i.baseState;
    s = 0, c = u = l = null, a = o;
    do {
      var f = a.lane, g = a.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, x = a;
          switch (f = t, g = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                d = y.call(g, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, f = typeof y == "function" ? y.call(g, d, f) : y, f == null) break e;
              d = Y({}, d, f);
              break e;
            case 2:
              yt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a));
      } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = g, l = d) : c = c.next = g, s |= f;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    qt |= s, e.lanes = s, e.memoizedState = d;
  }
}
function cu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(j(191, i));
      i.call(r);
    }
  }
}
var Wr = {}, tt = bt(Wr), Tr = bt(Wr), Ir = bt(Wr);
function Qt(e) {
  if (e === Wr) throw Error(j(174));
  return e;
}
function Zl(e, t) {
  switch (U(Ir, t), U(Tr, e), U(tt, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ps(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ps(t, e);
  }
  V(tt), U(tt, t);
}
function Un() {
  V(tt), V(Tr), V(Ir);
}
function bd(e) {
  Qt(Ir.current);
  var t = Qt(tt.current), n = Ps(t, e.type);
  t !== n && (U(Tr, e), U(tt, n));
}
function ql(e) {
  Tr.current === e && (V(tt), V(Tr));
}
var W = bt(0);
function qi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var rs = [];
function ea() {
  for (var e = 0; e < rs.length; e++) rs[e]._workInProgressVersionPrimary = null;
  rs.length = 0;
}
var Li = ft.ReactCurrentDispatcher, is = ft.ReactCurrentBatchConfig, Zt = 0, Q = null, ne = null, oe = null, eo = !1, mr = !1, $r = 0, Lm = 0;
function pe() {
  throw Error(j(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, i, o) {
  if (Zt = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Li.current = e === null || e.memoizedState === null ? Im : $m, e = n(r, i), mr) {
    o = 0;
    do {
      if (mr = !1, $r = 0, 25 <= o) throw Error(j(301));
      o += 1, oe = ne = null, t.updateQueue = null, Li.current = _m, e = n(r, i);
    } while (mr);
  }
  if (Li.current = to, t = ne !== null && ne.next !== null, Zt = 0, oe = ne = Q = null, eo = !1, t) throw Error(j(300));
  return e;
}
function ra() {
  var e = $r !== 0;
  return $r = 0, e;
}
function Je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? Q.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Ue() {
  if (ne === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? Q.memoizedState : oe.next;
  if (t !== null) oe = t, ne = e;
  else {
    if (e === null) throw Error(j(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, oe === null ? Q.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function _r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function os(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ne, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = s = null, l = null, u = o;
    do {
      var c = u.lane;
      if ((Zt & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, Q.lanes |= c, qt |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? s = r : l.next = a, Ye(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Q.lanes |= o, qt |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ss(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    Ye(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ad() {
}
function zd(e, t) {
  var n = Q, r = Ue(), i = t(), o = !Ye(r.memoizedState, i);
  if (o && (r.memoizedState = i, Ce = !0), r = r.queue, ia(Bd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Mr(9, Ud.bind(null, n, r, i, t), void 0, null), se === null) throw Error(j(349));
    Zt & 30 || Dd(n, t, i);
  }
  return i;
}
function Dd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ud(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Vd(t) && Hd(e);
}
function Bd(e, t, n) {
  return n(function() {
    Vd(t) && Hd(e);
  });
}
function Vd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Hd(e) {
  var t = ct(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function du(e) {
  var t = Je();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _r, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tm.bind(null, Q, e), [t.memoizedState, e];
}
function Mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Kd() {
  return Ue().memoizedState;
}
function Ri(e, t, n, r) {
  var i = Je();
  Q.flags |= e, i.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Co(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (o = s.destroy, r !== null && ta(r, s.deps)) {
      i.memoizedState = Mr(t, n, o, r);
      return;
    }
  }
  Q.flags |= e, i.memoizedState = Mr(1 | t, n, o, r);
}
function fu(e, t) {
  return Ri(8390656, 8, e, t);
}
function ia(e, t) {
  return Co(2048, 8, e, t);
}
function Wd(e, t) {
  return Co(4, 2, e, t);
}
function Qd(e, t) {
  return Co(4, 4, e, t);
}
function Yd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Xd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Co(4, 4, Yd.bind(null, t, e), n);
}
function oa() {
}
function Gd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Jd(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Zd(e, t, n) {
  return Zt & 21 ? (Ye(n, t) || (n = rd(), Q.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Rm(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = is.transition;
  is.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, is.transition = r;
  }
}
function qd() {
  return Ue().memoizedState;
}
function Om(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ef(e)) tf(t, n);
  else if (n = Md(e, t, n, r), n !== null) {
    var i = xe();
    Qe(n, e, r, i), nf(n, t, r);
  }
}
function Tm(e, t, n) {
  var r = Ot(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ef(e)) tf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, a = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = a, Ye(a, s)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Gl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Md(e, t, i, r), n !== null && (i = xe(), Qe(n, e, r, i), nf(n, t, r));
  }
}
function ef(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function tf(e, t) {
  mr = eo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function nf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fl(e, n);
  }
}
var to = { readContext: De, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Im = { readContext: De, useCallback: function(e, t) {
  return Je().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: De, useEffect: fu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ri(
    4194308,
    4,
    Yd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ri(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ri(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Je();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Je();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Om.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Je();
  return e = { current: e }, t.memoizedState = e;
}, useState: du, useDebugValue: oa, useDeferredValue: function(e) {
  return Je().memoizedState = e;
}, useTransition: function() {
  var e = du(!1), t = e[0];
  return e = Rm.bind(null, e[1]), Je().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, i = Je();
  if (K) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(j(349));
    Zt & 30 || Dd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, fu(Bd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Mr(9, Ud.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Je(), t = se.identifierPrefix;
  if (K) {
    var n = st, r = ot;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Lm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, $m = {
  readContext: De,
  useCallback: Gd,
  useContext: De,
  useEffect: ia,
  useImperativeHandle: Xd,
  useInsertionEffect: Wd,
  useLayoutEffect: Qd,
  useMemo: Jd,
  useReducer: os,
  useRef: Kd,
  useState: function() {
    return os(_r);
  },
  useDebugValue: oa,
  useDeferredValue: function(e) {
    var t = Ue();
    return Zd(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = os(_r)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: Ad,
  useSyncExternalStore: zd,
  useId: qd,
  unstable_isNewReconciler: !1
}, _m = { readContext: De, useCallback: Gd, useContext: De, useEffect: ia, useImperativeHandle: Xd, useInsertionEffect: Wd, useLayoutEffect: Qd, useMemo: Jd, useReducer: ss, useRef: Kd, useState: function() {
  return ss(_r);
}, useDebugValue: oa, useDeferredValue: function(e) {
  var t = Ue();
  return ne === null ? t.memoizedState = e : Zd(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = ss(_r)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: Ad, useSyncExternalStore: zd, useId: qd, unstable_isNewReconciler: !1 };
function Ve(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ys(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), i = Ot(e), o = lt(r, i);
  o.payload = t, n != null && (o.callback = n), t = Lt(e, o, i), t !== null && (Qe(t, e, i, r), Pi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), i = Ot(e), o = lt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Lt(e, o, i), t !== null && (Qe(t, e, i, r), Pi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = Ot(e), i = lt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Lt(e, i, r), t !== null && (Qe(t, e, r, n), Pi(t, e, r));
} };
function pu(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(i, o) : !0;
}
function rf(e, t, n) {
  var r = !1, i = _t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = De(o) : (i = je(t) ? Gt : ve.current, r = t.contextTypes, o = (r = r != null) ? An(e, i) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = No, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function hu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function Xs(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Jl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = De(o) : (o = je(t) ? Gt : ve.current, i.context = An(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ys(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && No.enqueueReplaceState(i, i.state, null), Zi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += ah(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ls(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Mm = typeof WeakMap == "function" ? WeakMap : Map;
function of(e, t, n) {
  n = lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ro || (ro = !0, sl = r), Gs(e, t);
  }, n;
}
function sf(e, t, n) {
  n = lt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Gs(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Gs(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Xm.bind(null, e, t, n), t.then(e, e));
}
function gu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e);
}
var Fm = ft.ReactCurrentOwner, Ce = !1;
function we(e, t, n, r) {
  t.child = e === null ? _d(t, null, n, r) : Dn(t, e.child, n, r);
}
function yu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return $n(t, i), r = na(e, t, n, r, o, i), n = ra(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : (K && n && Hl(t), t.flags |= 1, we(e, t, r, i), t.child);
}
function wu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !pa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, lf(e, t, o, r, i)) : (e = $i(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return dt(e, t, i);
  }
  return t.flags |= 1, e = Tt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, dt(e, t, i);
  }
  return Js(e, t, n, r, i);
}
function af(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(jn, Le), Le |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(jn, Le), Le |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(jn, Le), Le |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(jn, Le), Le |= r;
  return we(e, t, i, n), t.child;
}
function uf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Js(e, t, n, r, i) {
  var o = je(n) ? Gt : ve.current;
  return o = An(t, o), $n(t, i), n = na(e, t, n, r, o, i), r = ra(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : (K && r && Hl(t), t.flags |= 1, we(e, t, n, i), t.child);
}
function xu(e, t, n, r, i) {
  if (je(n)) {
    var o = !0;
    Qi(t);
  } else o = !1;
  if ($n(t, i), t.stateNode === null) Oi(e, t), rf(t, n, r), Xs(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = De(u) : (u = je(n) ? Gt : ve.current, u = An(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && hu(t, s, r, u), yt = !1;
    var f = t.memoizedState;
    s.state = f, Zi(t, r, s, i), l = t.memoizedState, a !== r || f !== l || Ne.current || yt ? (typeof c == "function" && (Ys(t, n, c, r), l = t.memoizedState), (a = yt || pu(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Fd(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ve(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = De(l) : (l = je(n) ? Gt : ve.current, l = An(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && hu(t, s, r, l), yt = !1, f = t.memoizedState, s.state = f, Zi(t, r, s, i);
    var y = t.memoizedState;
    a !== d || f !== y || Ne.current || yt ? (typeof g == "function" && (Ys(t, n, g, r), y = t.memoizedState), (u = yt || pu(t, n, u, r, f, y, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Zs(e, t, n, r, o, i);
}
function Zs(e, t, n, r, i, o) {
  uf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ou(t, n, !1), dt(e, t, o);
  r = t.stateNode, Fm.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Dn(t, e.child, null, o), t.child = Dn(t, null, a, o)) : we(e, t, a, o), t.memoizedState = r.state, i && ou(t, n, !0), t.child;
}
function cf(e) {
  var t = e.stateNode;
  t.pendingContext ? iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iu(e, t.context, !1), Zl(e, t.containerInfo);
}
function Su(e, t, n, r, i) {
  return zn(), Wl(i), t.flags |= 256, we(e, t, n, r), t.child;
}
var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function el(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function df(e, t, n) {
  var r = t.pendingProps, i = W.current, o = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(W, i & 1), e === null)
    return Ws(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Lo(s, r, 0, null), e = Xt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = el(n), t.memoizedState = qs, e) : sa(t, s));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return bm(e, t, s, r, a, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Tt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Tt(a, o) : (o = Xt(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? el(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = qs, r;
  }
  return o = e.child, e = o.sibling, r = Tt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sa(e, t) {
  return t = Lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fi(e, t, n, r) {
  return r !== null && Wl(r), Dn(t, e.child, null, n), e = sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function bm(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ls(Error(j(422))), fi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Lo({ mode: "visible", children: r.children }, i, 0, null), o = Xt(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Dn(t, e.child, null, s), t.child.memoizedState = el(s), t.memoizedState = qs, o);
  if (!(t.mode & 1)) return fi(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(j(419)), r = ls(o, r, void 0), fi(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, Ce || a) {
    if (r = se, r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, ct(e, i), Qe(r, e, i, -1));
    }
    return fa(), r = ls(Error(j(421))), fi(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Gm.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Re = Pt(i.nextSibling), Te = t, K = !0, Ke = null, e !== null && (Me[Fe++] = ot, Me[Fe++] = st, Me[Fe++] = Jt, ot = e.id, st = e.overflow, Jt = t), t = sa(t, r.children), t.flags |= 4096, t);
}
function Eu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qs(e.return, t, n);
}
function as(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function ff(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Eu(e, n, t);
      else if (e.tag === 19) Eu(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (U(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && qi(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), as(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && qi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      as(t, !0, n, null, o);
      break;
    case "together":
      as(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Am(e, t, n) {
  switch (t.tag) {
    case 3:
      cf(t), zn();
      break;
    case 5:
      bd(t);
      break;
    case 1:
      je(t.type) && Qi(t);
      break;
    case 4:
      Zl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Gi, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? df(e, t, n) : (U(W, W.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ff(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, af(e, t, n);
  }
  return dt(e, t, n);
}
var pf, tl, hf, mf;
pf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
tl = function() {
};
hf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Qt(tt.current);
    var o = null;
    switch (n) {
      case "input":
        i = ks(e, i), r = ks(e, r), o = [];
        break;
      case "select":
        i = Y({}, i, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = js(e, i), r = js(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ki);
    }
    Ls(n, r);
    var s;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xr.hasOwnProperty(u) ? (l != null && u === "onScroll" && B("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
mf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function er(e, t) {
  if (!K) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function zm(e, t, n) {
  var r = t.pendingProps;
  switch (Kl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return je(t.type) && Wi(), he(t), null;
    case 3:
      return r = t.stateNode, Un(), V(Ne), V(ve), ea(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ci(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ke !== null && (ul(Ke), Ke = null))), tl(e, t), he(t), null;
    case 5:
      ql(t);
      var i = Qt(Ir.current);
      if (n = t.type, e !== null && t.stateNode != null) hf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return he(t), null;
        }
        if (e = Qt(tt.current), ci(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ze] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ur.length; i++) B(ur[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Ta(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              $a(r, o), B("invalid", r);
          }
          Ls(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var a = o[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ui(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ui(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : xr.hasOwnProperty(s) && a != null && s === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              ti(r), Ia(r, o, !0);
              break;
            case "textarea":
              ti(r), _a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ki);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ze] = t, e[Or] = r, pf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Rs(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ur.length; i++) B(ur[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                Ta(e, r), i = ks(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Y({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                $a(e, r), i = js(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ls(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "style" ? Kc(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Vc(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Sr(e, l) : typeof l == "number" && Sr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? l != null && o === "onScroll" && B("scroll", e) : l != null && Ol(e, o, l, s));
            }
            switch (n) {
              case "input":
                ti(e), Ia(e, r, !1);
                break;
              case "textarea":
                ti(e), _a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Rn(e, !!r.multiple, o, !1) : r.defaultValue != null && Rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ki);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) mf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = Qt(Ir.current), Qt(tt.current), ci(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (o = r.nodeValue !== n) && (e = Te, e !== null)) switch (e.tag) {
            case 3:
              ui(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ui(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (V(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Re !== null && t.mode & 1 && !(t.flags & 128)) Id(), zn(), t.flags |= 98560, o = !1;
        else if (o = ci(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(j(317));
            o[Ze] = t;
          } else zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else Ke !== null && (ul(Ke), Ke = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? re === 0 && (re = 3) : fa())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return Un(), tl(e, t), e === null && Lr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Xl(t.type._context), he(t), null;
    case 17:
      return je(t.type) && Wi(), he(t), null;
    case 19:
      if (V(W), o = t.memoizedState, o === null) return he(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) er(o, !1);
      else {
        if (re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = qi(e), s !== null) {
            for (t.flags |= 128, er(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > Vn && (t.flags |= 128, r = !0, er(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = qi(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), er(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !K) return he(t), null;
        } else 2 * J() - o.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128, r = !0, er(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = W.current, U(W, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Le & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Dm(e, t) {
  switch (Kl(t), t.tag) {
    case 1:
      return je(t.type) && Wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Un(), V(Ne), V(ve), ea(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ql(t), null;
    case 13:
      if (V(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        zn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(W), null;
    case 4:
      return Un(), null;
    case 10:
      return Xl(t.type._context), null;
    case 22:
    case 23:
      return da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pi = !1, ge = !1, Um = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function nl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ku = !1;
function Bm(e, t) {
  if (zs = Bi, e = wd(), Vl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (g = d.firstChild) !== null; )
            f = d, d = g;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === i && (a = s), f === o && ++c === r && (l = s), (g = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = g;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ds = { focusedElem: e, selectionRange: n }, Bi = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, S = y.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ve(t.type, x), S);
            h.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (v) {
      X(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return y = ku, ku = !1, y;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && nl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function jo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function gf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[Or], delete t[Vs], delete t[Cm], delete t[Nm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function vf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || vf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ki));
  else if (r !== 4 && (e = e.child, e !== null)) for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), e = e.sibling;
}
function ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ol(e, t, n), e = e.sibling; e !== null; ) ol(e, t, n), e = e.sibling;
}
var le = null, He = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) yf(e, t, n), n = n.sibling;
}
function yf(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function") try {
    et.onCommitFiberUnmount(yo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ge || Nn(n, t);
    case 6:
      var r = le, i = He;
      le = null, ht(e, t, n), le = r, He = i, le !== null && (He ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (He ? (e = le, n = n.stateNode, e.nodeType === 8 ? ts(e.parentNode, n) : e.nodeType === 1 && ts(e, n), Nr(e)) : ts(le, n.stateNode));
      break;
    case 4:
      r = le, i = He, le = n.stateNode.containerInfo, He = !0, ht(e, t, n), le = r, He = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && nl(n, t, s), i = i.next;
        } while (i !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (!ge && (Nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        X(n, t, a);
      }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, ht(e, t, n), ge = r) : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function Nu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Um()), t.forEach(function(r) {
      var i = Jm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            le = a.stateNode, He = !1;
            break e;
          case 3:
            le = a.stateNode.containerInfo, He = !0;
            break e;
          case 4:
            le = a.stateNode.containerInfo, He = !0;
            break e;
        }
        a = a.return;
      }
      if (le === null) throw Error(j(160));
      yf(o, s, i), le = null, He = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      X(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wf(t, e), t = t.sibling;
}
function wf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Be(t, e), Ge(e), r & 4) {
        try {
          gr(3, e, e.return), jo(3, e);
        } catch (x) {
          X(e, e.return, x);
        }
        try {
          gr(5, e, e.return);
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 1:
      Be(t, e), Ge(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (Be(t, e), Ge(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Sr(i, "");
        } catch (x) {
          X(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && o.type === "radio" && o.name != null && Dc(i, o), Rs(a, s);
          var u = Rs(a, o);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], d = l[s + 1];
            c === "style" ? Kc(i, d) : c === "dangerouslySetInnerHTML" ? Vc(i, d) : c === "children" ? Sr(i, d) : Ol(i, c, d, u);
          }
          switch (a) {
            case "input":
              Cs(i, o);
              break;
            case "textarea":
              Uc(i, o);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? Rn(i, !!o.multiple, g, !1) : f !== !!o.multiple && (o.defaultValue != null ? Rn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Rn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Or] = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Be(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Be(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (x) {
        X(e, e.return, x);
      }
      break;
    case 4:
      Be(t, e), Ge(e);
      break;
    case 13:
      Be(t, e), Ge(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ua = J())), r & 4 && Nu(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (u = ge) || c, Be(t, e), ge = u) : Be(t, e), Ge(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (R = e, c = e.child; c !== null; ) {
          for (d = R = c; R !== null; ) {
            switch (f = R, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, f, f.return);
                break;
              case 1:
                Nn(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    X(r, n, x);
                  }
                }
                break;
              case 5:
                Nn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Pu(d);
                  continue;
                }
            }
            g !== null ? (g.return = f, R = g) : Pu(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Hc("display", s));
              } catch (x) {
                X(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (x) {
              X(e, e.return, x);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Be(t, e), Ge(e), r & 4 && Nu(e);
      break;
    case 21:
      break;
    default:
      Be(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Sr(i, ""), r.flags &= -33);
          var o = Cu(e);
          ol(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Cu(e);
          il(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      X(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vm(e, t, n) {
  R = e, xf(e);
}
function xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || pi;
      if (!s) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || ge;
        a = pi;
        var u = ge;
        if (pi = s, (ge = l) && !u) for (R = i; R !== null; ) s = R, l = s.child, s.tag === 22 && s.memoizedState !== null ? Lu(i) : l !== null ? (l.return = s, R = l) : Lu(i);
        for (; o !== null; ) R = o, xf(o), o = o.sibling;
        R = i, pi = a, ge = u;
      }
      ju(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, R = o) : ju(e);
  }
}
function ju(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ge || jo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ge) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && cu(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              cu(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && Nr(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(j(163));
        }
        ge || t.flags & 512 && rl(t);
      } catch (f) {
        X(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Pu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Lu(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jo(4, t);
          } catch (l) {
            X(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              X(t, i, l);
            }
          }
          var o = t.return;
          try {
            rl(t);
          } catch (l) {
            X(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rl(t);
          } catch (l) {
            X(t, s, l);
          }
      }
    } catch (l) {
      X(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, R = a;
      break;
    }
    R = t.return;
  }
}
var Hm = Math.ceil, no = ft.ReactCurrentDispatcher, la = ft.ReactCurrentOwner, ze = ft.ReactCurrentBatchConfig, F = 0, se = null, Z = null, ue = 0, Le = 0, jn = bt(0), re = 0, Fr = null, qt = 0, Po = 0, aa = 0, vr = null, ke = null, ua = 0, Vn = 1 / 0, rt = null, ro = !1, sl = null, Rt = null, hi = !1, Et = null, io = 0, yr = 0, ll = null, Ti = -1, Ii = 0;
function xe() {
  return F & 6 ? J() : Ti !== -1 ? Ti : Ti = J();
}
function Ot(e) {
  return e.mode & 1 ? F & 2 && ue !== 0 ? ue & -ue : Pm.transition !== null ? (Ii === 0 && (Ii = rd()), Ii) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cd(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < yr) throw yr = 0, ll = null, Error(j(185));
  Vr(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Po |= n), re === 4 && xt(e, ue)), Pe(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Vn = J() + 500, ko && At()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Ph(e, t);
  var r = Ui(e, e === se ? ue : 0);
  if (r === 0) n !== null && ba(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ba(n), t === 1) e.tag === 0 ? jm(Ru.bind(null, e)) : Rd(Ru.bind(null, e)), Em(function() {
      !(F & 6) && At();
    }), n = null;
    else {
      switch (id(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = td;
          break;
        case 16:
          n = Di;
          break;
        case 536870912:
          n = nd;
          break;
        default:
          n = Di;
      }
      n = Lf(n, Sf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Sf(e, t) {
  if (Ti = -1, Ii = 0, F & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = Ui(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oo(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = kf();
    (se !== e || ue !== t) && (rt = null, Vn = J() + 500, Yt(e, t));
    do
      try {
        Qm();
        break;
      } catch (a) {
        Ef(e, a);
      }
    while (!0);
    Yl(), no.current = o, F = i, Z !== null ? t = 0 : (se = null, ue = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (i = _s(e), i !== 0 && (r = i, t = al(e, i))), t === 1) throw n = Fr, Yt(e, 0), xt(e, r), Pe(e, J()), n;
    if (t === 6) xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Km(i) && (t = oo(e, r), t === 2 && (o = _s(e), o !== 0 && (r = o, t = al(e, o))), t === 1)) throw n = Fr, Yt(e, 0), xt(e, r), Pe(e, J()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Ht(e, ke, rt);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = ua + 500 - J(), 10 < t)) {
            if (Ui(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Bs(Ht.bind(null, e, ke, rt), t);
            break;
          }
          Ht(e, ke, rt);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - We(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bs(Ht.bind(null, e, ke, rt), r);
            break;
          }
          Ht(e, ke, rt);
          break;
        case 5:
          Ht(e, ke, rt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? Sf.bind(null, e) : null;
}
function al(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = oo(e, t), e !== 2 && (t = ke, ke = n, t !== null && ul(t)), e;
}
function ul(e) {
  ke === null ? ke = e : ke.push.apply(ke, e);
}
function Km(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Ye(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function xt(e, t) {
  for (t &= ~aa, t &= ~Po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ru(e) {
  if (F & 6) throw Error(j(327));
  _n();
  var t = Ui(e, 0);
  if (!(t & 1)) return Pe(e, J()), null;
  var n = oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _s(e);
    r !== 0 && (t = r, n = al(e, r));
  }
  if (n === 1) throw n = Fr, Yt(e, 0), xt(e, t), Pe(e, J()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, ke, rt), Pe(e, J()), null;
}
function ca(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Vn = J() + 500, ko && At());
  }
}
function en(e) {
  Et !== null && Et.tag === 0 && !(F & 6) && _n();
  var t = F;
  F |= 1;
  var n = ze.transition, r = b;
  try {
    if (ze.transition = null, b = 1, e) return e();
  } finally {
    b = r, ze.transition = n, F = t, !(F & 6) && At();
  }
}
function da() {
  Le = jn.current, V(jn);
}
function Yt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Sm(n)), Z !== null) for (n = Z.return; n !== null; ) {
    var r = n;
    switch (Kl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wi();
        break;
      case 3:
        Un(), V(Ne), V(ve), ea();
        break;
      case 5:
        ql(r);
        break;
      case 4:
        Un();
        break;
      case 13:
        V(W);
        break;
      case 19:
        V(W);
        break;
      case 10:
        Xl(r.type._context);
        break;
      case 22:
      case 23:
        da();
    }
    n = n.return;
  }
  if (se = e, Z = e = Tt(e.current, null), ue = Le = t, re = 0, Fr = null, aa = Po = qt = 0, ke = vr = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++) if (n = Wt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    Wt = null;
  }
  return e;
}
function Ef(e, t) {
  do {
    var n = Z;
    try {
      if (Yl(), Li.current = to, eo) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        eo = !1;
      }
      if (Zt = 0, oe = ne = Q = null, mr = !1, $r = 0, la.current = null, n === null || n.return === null) {
        re = 1, Fr = t, Z = null;
        break;
      }
      e: {
        var o = e, s = n.return, a = n, l = t;
        if (t = ue, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = gu(s);
          if (g !== null) {
            g.flags &= -257, vu(g, s, a, o, t), g.mode & 1 && mu(o, u, t), t = g, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              mu(o, u, t), fa();
              break e;
            }
            l = Error(j(426));
          }
        } else if (K && a.mode & 1) {
          var S = gu(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), vu(S, s, a, o, t), Wl(Bn(l, a));
            break e;
          }
        }
        o = l = Bn(l, a), re !== 4 && (re = 2), vr === null ? vr = [o] : vr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var h = of(o, l, t);
              uu(o, h);
              break e;
            case 1:
              a = l;
              var m = o.type, w = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Rt === null || !Rt.has(w)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = sf(o, a, t);
                uu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nf(n);
    } catch (E) {
      t = E, Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kf() {
  var e = no.current;
  return no.current = to, e === null ? to : e;
}
function fa() {
  (re === 0 || re === 3 || re === 2) && (re = 4), se === null || !(qt & 268435455) && !(Po & 268435455) || xt(se, ue);
}
function oo(e, t) {
  var n = F;
  F |= 2;
  var r = kf();
  (se !== e || ue !== t) && (rt = null, Yt(e, t));
  do
    try {
      Wm();
      break;
    } catch (i) {
      Ef(e, i);
    }
  while (!0);
  if (Yl(), F = n, no.current = r, Z !== null) throw Error(j(261));
  return se = null, ue = 0, re;
}
function Wm() {
  for (; Z !== null; ) Cf(Z);
}
function Qm() {
  for (; Z !== null && !yh(); ) Cf(Z);
}
function Cf(e) {
  var t = Pf(e.alternate, e, Le);
  e.memoizedProps = e.pendingProps, t === null ? Nf(e) : Z = t, la.current = null;
}
function Nf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Dm(n, t), n !== null) {
        n.flags &= 32767, Z = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, Z = null;
        return;
      }
    } else if (n = zm(n, t, Le), n !== null) {
      Z = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Ht(e, t, n) {
  var r = b, i = ze.transition;
  try {
    ze.transition = null, b = 1, Ym(e, t, n, r);
  } finally {
    ze.transition = i, b = r;
  }
  return null;
}
function Ym(e, t, n, r) {
  do
    _n();
  while (Et !== null);
  if (F & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Lh(e, o), e === se && (Z = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hi || (hi = !0, Lf(Di, function() {
    return _n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = ze.transition, ze.transition = null;
    var s = b;
    b = 1;
    var a = F;
    F |= 4, la.current = null, Bm(e, n), wf(n, e), hm(Ds), Bi = !!zs, Ds = zs = null, e.current = n, Vm(n), wh(), F = a, b = s, ze.transition = o;
  } else e.current = n;
  if (hi && (hi = !1, Et = e, io = i), o = e.pendingLanes, o === 0 && (Rt = null), Eh(n.stateNode), Pe(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ro) throw ro = !1, e = sl, sl = null, e;
  return io & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === ll ? yr++ : (yr = 0, ll = e) : yr = 0, At(), null;
}
function _n() {
  if (Et !== null) {
    var e = id(io), t = ze.transition, n = b;
    try {
      if (ze.transition = null, b = 16 > e ? 16 : e, Et === null) var r = !1;
      else {
        if (e = Et, Et = null, io = 0, F & 6) throw Error(j(331));
        var i = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var o = R, s = o.child;
          if (R.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, R = d;
                  else for (; R !== null; ) {
                    c = R;
                    var f = c.sibling, g = c.return;
                    if (gf(c), c === u) {
                      R = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = g, R = f;
                      break;
                    }
                    R = g;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var S = x.sibling;
                    x.sibling = null, x = S;
                  } while (x !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, R = s;
          else e: for (; R !== null; ) {
            if (o = R, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                gr(9, o, o.return);
            }
            var h = o.sibling;
            if (h !== null) {
              h.return = o.return, R = h;
              break e;
            }
            R = o.return;
          }
        }
        var m = e.current;
        for (R = m; R !== null; ) {
          s = R;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) w.return = s, R = w;
          else e: for (s = m; R !== null; ) {
            if (a = R, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  jo(9, a);
              }
            } catch (E) {
              X(a, a.return, E);
            }
            if (a === s) {
              R = null;
              break e;
            }
            var v = a.sibling;
            if (v !== null) {
              v.return = a.return, R = v;
              break e;
            }
            R = a.return;
          }
        }
        if (F = i, At(), et && typeof et.onPostCommitFiberRoot == "function") try {
          et.onPostCommitFiberRoot(yo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      b = n, ze.transition = t;
    }
  }
  return !1;
}
function Ou(e, t, n) {
  t = Bn(n, t), t = of(e, t, 1), e = Lt(e, t, 1), t = xe(), e !== null && (Vr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Ou(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ou(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
        e = Bn(n, e), e = sf(t, e, 1), t = Lt(t, e, 1), e = xe(), t !== null && (Vr(t, 1, e), Pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Xm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (re === 4 || re === 3 && (ue & 130023424) === ue && 500 > J() - ua ? Yt(e, 0) : aa |= n), Pe(e, t);
}
function jf(e, t) {
  t === 0 && (e.mode & 1 ? (t = ii, ii <<= 1, !(ii & 130023424) && (ii = 4194304)) : t = 1);
  var n = xe();
  e = ct(e, t), e !== null && (Vr(e, t, n), Pe(e, n));
}
function Gm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), jf(e, n);
}
function Jm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), jf(e, n);
}
var Pf;
Pf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ne.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, Am(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, K && t.flags & 1048576 && Od(t, Xi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oi(e, t), e = t.pendingProps;
      var i = An(t, ve.current);
      $n(t, n), i = na(null, t, r, e, i, n);
      var o = ra();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (o = !0, Qi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Jl(t), i.updater = No, t.stateNode = i, i._reactInternals = t, Xs(t, r, e, n), t = Zs(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Hl(t), we(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = qm(r), e = Ve(r, e), i) {
          case 0:
            t = Js(null, t, r, e, n);
            break e;
          case 1:
            t = xu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = wu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), Js(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), xu(e, t, r, i, n);
    case 3:
      e: {
        if (cf(t), e === null) throw Error(j(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Fd(e, t), Zi(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Bn(Error(j(423)), t), t = Su(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Bn(Error(j(424)), t), t = Su(e, t, r, n, i);
          break e;
        } else for (Re = Pt(t.stateNode.containerInfo.firstChild), Te = t, K = !0, Ke = null, n = _d(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zn(), r === i) {
            t = dt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bd(t), e === null && Ws(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Us(r, i) ? s = null : o !== null && Us(r, o) && (t.flags |= 32), uf(e, t), we(e, t, s, n), t.child;
    case 6:
      return e === null && Ws(t), null;
    case 13:
      return df(e, t, n);
    case 4:
      return Zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Dn(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), yu(e, t, r, i, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, U(Gi, r._currentValue), r._currentValue = s, o !== null) if (Ye(o.value, s)) {
          if (o.children === i.children && !Ne.current) {
            t = dt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            s = o.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = lt(-1, n & -n), l.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Qs(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(j(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Qs(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        we(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, $n(t, n), i = De(i), r = r(i), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ve(r, t.pendingProps), i = Ve(r.type, i), wu(e, t, r, i, n);
    case 15:
      return lf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ve(r, i), Oi(e, t), t.tag = 1, je(r) ? (e = !0, Qi(t)) : e = !1, $n(t, n), rf(t, r, i), Xs(t, r, i, n), Zs(null, t, r, !0, e, n);
    case 19:
      return ff(e, t, n);
    case 22:
      return af(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Lf(e, t) {
  return ed(e, t);
}
function Zm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ae(e, t, n, r) {
  return new Zm(e, t, n, r);
}
function pa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function qm(e) {
  if (typeof e == "function") return pa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Il) return 11;
    if (e === $l) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ae(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $i(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") pa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case gn:
      return Xt(n.children, i, o, t);
    case Tl:
      s = 8, i |= 8;
      break;
    case ws:
      return e = Ae(12, n, t, i | 2), e.elementType = ws, e.lanes = o, e;
    case xs:
      return e = Ae(13, n, t, i), e.elementType = xs, e.lanes = o, e;
    case Ss:
      return e = Ae(19, n, t, i), e.elementType = Ss, e.lanes = o, e;
    case bc:
      return Lo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Mc:
          s = 10;
          break e;
        case Fc:
          s = 9;
          break e;
        case Il:
          s = 11;
          break e;
        case $l:
          s = 14;
          break e;
        case vt:
          s = 16, r = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = Ae(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Xt(e, t, n, r) {
  return e = Ae(7, e, r, t), e.lanes = n, e;
}
function Lo(e, t, n, r) {
  return e = Ae(22, e, r, t), e.elementType = bc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function us(e, t, n) {
  return e = Ae(6, e, null, t), e.lanes = n, e;
}
function cs(e, t, n) {
  return t = Ae(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function eg(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ha(e, t, n, r, i, o, s, a, l) {
  return e = new eg(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ae(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jl(o), e;
}
function tg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Rf(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return Ld(e, n, t);
  }
  return t;
}
function Of(e, t, n, r, i, o, s, a, l) {
  return e = ha(n, r, !0, e, i, o, s, a, l), e.context = Rf(null), n = e.current, r = xe(), i = Ot(n), o = lt(r, i), o.callback = t ?? null, Lt(n, o, i), e.current.lanes = i, Vr(e, i, r), Pe(e, r), e;
}
function Ro(e, t, n, r) {
  var i = t.current, o = xe(), s = Ot(i);
  return n = Rf(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(i, t, s), e !== null && (Qe(e, i, s, o), Pi(e, i, s)), s;
}
function so(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function ng() {
  return null;
}
var Tf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ga(e) {
  this._internalRoot = e;
}
Oo.prototype.render = ga.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Ro(e, t, null, null);
};
Oo.prototype.unmount = ga.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function() {
      Ro(null, e, null, null);
    }), t[ut] = null;
  }
};
function Oo(e) {
  this._internalRoot = e;
}
Oo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ld();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++) ;
    wt.splice(n, 0, e), n === 0 && ud(e);
  }
};
function va(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function To(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Iu() {
}
function rg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = so(s);
        o.call(u);
      };
    }
    var s = Of(t, r, e, 0, null, !1, !1, "", Iu);
    return e._reactRootContainer = s, e[ut] = s.current, Lr(e.nodeType === 8 ? e.parentNode : e), en(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = so(l);
      a.call(u);
    };
  }
  var l = ha(e, 0, !1, null, null, !1, !1, "", Iu);
  return e._reactRootContainer = l, e[ut] = l.current, Lr(e.nodeType === 8 ? e.parentNode : e), en(function() {
    Ro(t, l, n, r);
  }), l;
}
function Io(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = so(s);
        a.call(l);
      };
    }
    Ro(t, s, e, i);
  } else s = rg(n, t, e, i, r);
  return so(s);
}
od = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 && (Fl(t, n | 1), Pe(t, J()), !(F & 6) && (Vn = J() + 500, At()));
      }
      break;
    case 13:
      en(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var i = xe();
          Qe(r, e, 1, i);
        }
      }), ma(e, 1);
  }
};
bl = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = xe();
      Qe(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
sd = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = ct(e, t);
    if (n !== null) {
      var r = xe();
      Qe(n, e, t, r);
    }
    ma(e, t);
  }
};
ld = function() {
  return b;
};
ad = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
Ts = function(e, t, n) {
  switch (t) {
    case "input":
      if (Cs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Eo(r);
            if (!i) throw Error(j(90));
            zc(r), Cs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Uc(e, n);
      break;
    case "select":
      t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
  }
};
Yc = ca;
Xc = en;
var ig = { usingClientEntryPoint: !1, Events: [Kr, xn, Eo, Wc, Qc, ca] }, tr = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, og = { bundleType: tr.bundleType, version: tr.version, rendererPackageName: tr.rendererPackageName, rendererConfig: tr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: tr.findFiberByHostInstance || ng, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mi.isDisabled && mi.supportsFiber) try {
    yo = mi.inject(og), et = mi;
  } catch {
  }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!va(t)) throw Error(j(200));
  return tg(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!va(e)) throw Error(j(299));
  var n = !1, r = "", i = Tf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ha(e, 1, !1, null, null, n, !1, r, i), e[ut] = t.current, Lr(e.nodeType === 8 ? e.parentNode : e), new ga(t);
};
$e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Zc(t), e = e === null ? null : e.stateNode, e;
};
$e.flushSync = function(e) {
  return en(e);
};
$e.hydrate = function(e, t, n) {
  if (!To(t)) throw Error(j(200));
  return Io(null, e, t, !0, n);
};
$e.hydrateRoot = function(e, t, n) {
  if (!va(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Tf;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Of(t, null, e, 1, n ?? null, i, !1, o, s), e[ut] = t.current, Lr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Oo(t);
};
$e.render = function(e, t, n) {
  if (!To(t)) throw Error(j(200));
  return Io(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function(e) {
  if (!To(e)) throw Error(j(40));
  return e._reactRootContainer ? (en(function() {
    Io(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ut] = null;
    });
  }), !0) : !1;
};
$e.unstable_batchedUpdates = ca;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!To(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Io(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function If() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If);
    } catch (e) {
      console.error(e);
    }
}
If(), Tc.exports = $e;
var sg = Tc.exports, $f, $u = sg;
$f = $u.createRoot, $u.hydrateRoot;
var _f = { exports: {} }, Mf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr = C;
function lg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ag = typeof Object.is == "function" ? Object.is : lg, ug = Qr.useSyncExternalStore, cg = Qr.useRef, dg = Qr.useEffect, fg = Qr.useMemo, pg = Qr.useDebugValue;
Mf.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var o = cg(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = fg(function() {
    function l(g) {
      if (!u) {
        if (u = !0, c = g, g = r(g), i !== void 0 && s.hasValue) {
          var y = s.value;
          if (i(y, g)) return d = y;
        }
        return d = g;
      }
      if (y = d, ag(c, g)) return y;
      var x = r(g);
      return i !== void 0 && i(y, x) ? y : (c = g, d = x);
    }
    var u = !1, c, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, i]);
  var a = ug(e, o[0], o[1]);
  return dg(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), pg(a), a;
};
_f.exports = Mf;
var hg = _f.exports, Oe = (
  // prettier-ignore
  // @ts-ignore
  "default" in vs ? vo : vs
), _u = Symbol.for("react-redux-context"), Mu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function mg() {
  if (!Oe.createContext)
    return {};
  const e = Mu[_u] ?? (Mu[_u] = /* @__PURE__ */ new Map());
  let t = e.get(Oe.createContext);
  return t || (t = Oe.createContext(
    null
  ), e.set(Oe.createContext, t)), t;
}
var Mt = /* @__PURE__ */ mg(), gg = () => {
  throw new Error("uSES not initialized!");
};
function ya(e = Mt) {
  return function() {
    return Oe.useContext(e);
  };
}
var Ff = /* @__PURE__ */ ya(), bf = gg, vg = (e) => {
  bf = e;
}, yg = (e, t) => e === t;
function wg(e = Mt) {
  const t = e === Mt ? Ff : ya(e), n = (r, i = {}) => {
    const { equalityFn: o = yg, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i, {
      store: a,
      subscription: l,
      getServerState: u,
      stabilityCheck: c,
      identityFunctionCheck: d
    } = t();
    Oe.useRef(!0);
    const f = Oe.useCallback(
      {
        [r.name](y) {
          return r(y);
        }
      }[r.name],
      [r, c, s.stabilityCheck]
    ), g = bf(
      l.addNestedSub,
      a.getState,
      u || a.getState,
      f,
      o
    );
    return Oe.useDebugValue(g), g;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zt = /* @__PURE__ */ wg();
function xg(e) {
  e();
}
function Sg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      xg(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = t = {
        callback: n,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Fu = {
  notify() {
  },
  get: () => []
};
function Eg(e, t) {
  let n, r = Fu, i = 0, o = !1;
  function s(x) {
    c();
    const S = r.subscribe(x);
    let h = !1;
    return () => {
      h || (h = !0, S(), d());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return o;
  }
  function c() {
    i++, n || (n = e.subscribe(l), r = Sg());
  }
  function d() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Fu);
  }
  function f() {
    o || (o = !0, c());
  }
  function g() {
    o && (o = !1, d());
  }
  const y = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: g,
    getListeners: () => r
  };
  return y;
}
var kg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Cg = typeof navigator < "u" && navigator.product === "ReactNative", Ng = kg || Cg ? Oe.useLayoutEffect : Oe.useEffect;
function jg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = Oe.useMemo(() => {
    const u = Eg(e);
    return {
      store: e,
      subscription: u,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), a = Oe.useMemo(() => e.getState(), [e]);
  Ng(() => {
    const { subscription: u } = s;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || Mt;
  return /* @__PURE__ */ Oe.createElement(l.Provider, { value: s }, n);
}
var Pg = jg;
function Af(e = Mt) {
  const t = e === Mt ? Ff : (
    // @ts-ignore
    ya(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Lg = /* @__PURE__ */ Af();
function Rg(e = Mt) {
  const t = e === Mt ? Lg : Af(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Yr = /* @__PURE__ */ Rg();
vg(hg.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, br.apply(this, arguments);
}
var kt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(kt || (kt = {}));
const bu = "popstate";
function Og(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: o,
      search: s,
      hash: a
    } = r.location;
    return cl(
      "",
      {
        pathname: o,
        search: s,
        hash: a
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : lo(i);
  }
  return Ig(t, n, null, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function zf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Tg() {
  return Math.random().toString(36).substr(2, 8);
}
function Au(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function cl(e, t, n, r) {
  return n === void 0 && (n = null), br({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Qn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Tg()
  });
}
function lo(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Qn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Ig(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, s = i.history, a = kt.Pop, l = null, u = c();
  u == null && (u = 0, s.replaceState(br({}, s.state, {
    idx: u
  }), ""));
  function c() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function d() {
    a = kt.Pop;
    let S = c(), h = S == null ? null : S - u;
    u = S, l && l({
      action: a,
      location: x.location,
      delta: h
    });
  }
  function f(S, h) {
    a = kt.Push;
    let m = cl(x.location, S, h);
    u = c() + 1;
    let w = Au(m, u), v = x.createHref(m);
    try {
      s.pushState(w, "", v);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError")
        throw E;
      i.location.assign(v);
    }
    o && l && l({
      action: a,
      location: x.location,
      delta: 1
    });
  }
  function g(S, h) {
    a = kt.Replace;
    let m = cl(x.location, S, h);
    u = c();
    let w = Au(m, u), v = x.createHref(m);
    s.replaceState(w, "", v), o && l && l({
      action: a,
      location: x.location,
      delta: 0
    });
  }
  function y(S) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href, m = typeof S == "string" ? S : lo(S);
    return m = m.replace(/ $/, "%20"), q(h, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, h);
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(bu, d), l = S, () => {
        i.removeEventListener(bu, d), l = null;
      };
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let h = y(S);
      return {
        pathname: h.pathname,
        search: h.search,
        hash: h.hash
      };
    },
    push: f,
    replace: g,
    go(S) {
      return s.go(S);
    }
  };
  return x;
}
var zu;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(zu || (zu = {}));
function $g(e, t, n) {
  return n === void 0 && (n = "/"), _g(e, t, n, !1);
}
function _g(e, t, n, r) {
  let i = typeof t == "string" ? Qn(t) : t, o = wa(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = Df(e);
  Mg(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Wg(o);
    a = Hg(s[l], u, r);
  }
  return a;
}
function Df(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    l.relativePath.startsWith("/") && (q(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
    let u = It([r, l.relativePath]), c = n.concat(l);
    o.children && o.children.length > 0 && (q(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), Df(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: Bg(u, o.index),
      routesMeta: c
    });
  };
  return e.forEach((o, s) => {
    var a;
    if (o.path === "" || !((a = o.path) != null && a.includes("?")))
      i(o, s);
    else
      for (let l of Uf(o.path))
        i(o, s, l);
  }), t;
}
function Uf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = Uf(r.join("/")), a = [];
  return a.push(...s.map((l) => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function Mg(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Vg(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Fg = /^:[\w-]+$/, bg = 3, Ag = 2, zg = 1, Dg = 10, Ug = -2, Du = (e) => e === "*";
function Bg(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Du) && (r += Ug), t && (r += Ag), n.filter((i) => !Du(i)).reduce((i, o) => i + (Fg.test(o) ? bg : o === "" ? zg : Dg), r);
}
function Vg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Hg(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, o = "/", s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a], u = a === r.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", d = Uu({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, c), f = l.route;
    if (!d && u && n && !r[r.length - 1].route.index && (d = Uu({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: !1
    }, c)), !d)
      return null;
    Object.assign(i, d.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: It([o, d.pathname]),
      pathnameBase: Gg(It([o, d.pathnameBase])),
      route: f
    }), d.pathnameBase !== "/" && (o = It([o, d.pathnameBase]));
  }
  return s;
}
function Uu(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Kg(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let {
        paramName: f,
        isOptional: g
      } = c;
      if (f === "*") {
        let x = a[d] || "";
        s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[d];
      return g && !y ? u[f] = void 0 : u[f] = (y || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function Kg(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), zf(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
    paramName: a,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Wg(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return zf(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function wa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Qn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Yg(n, t) : t,
    search: Jg(r),
    hash: Zg(i)
  };
}
function Yg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function ds(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Xg(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Bf(e, t) {
  let n = Xg(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Vf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Qn(e) : (i = br({}, e), q(!i.pathname || !i.pathname.includes("?"), ds("?", "pathname", "search", i)), q(!i.pathname || !i.pathname.includes("#"), ds("#", "pathname", "hash", i)), q(!i.search || !i.search.includes("#"), ds("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (s == null)
    a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), d -= 1;
      i.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = Qg(i, a), u = s && s !== "/" && s.endsWith("/"), c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"), Gg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Jg = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Zg = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function qg(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Hf = ["post", "put", "patch", "delete"];
new Set(Hf);
const e1 = ["get", ...Hf];
new Set(e1);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ar.apply(this, arguments);
}
const xa = /* @__PURE__ */ C.createContext(null), t1 = /* @__PURE__ */ C.createContext(null), sn = /* @__PURE__ */ C.createContext(null), $o = /* @__PURE__ */ C.createContext(null), ln = /* @__PURE__ */ C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Kf = /* @__PURE__ */ C.createContext(null);
function n1(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Xr() || q(!1);
  let {
    basename: r,
    navigator: i
  } = C.useContext(sn), {
    hash: o,
    pathname: s,
    search: a
  } = Qf(e, {
    relative: n
  }), l = s;
  return r !== "/" && (l = s === "/" ? r : It([r, s])), i.createHref({
    pathname: l,
    search: a,
    hash: o
  });
}
function Xr() {
  return C.useContext($o) != null;
}
function _o() {
  return Xr() || q(!1), C.useContext($o).location;
}
function Wf(e) {
  C.useContext(sn).static || C.useLayoutEffect(e);
}
function Gr() {
  let {
    isDataRoute: e
  } = C.useContext(ln);
  return e ? m1() : r1();
}
function r1() {
  Xr() || q(!1);
  let e = C.useContext(xa), {
    basename: t,
    future: n,
    navigator: r
  } = C.useContext(sn), {
    matches: i
  } = C.useContext(ln), {
    pathname: o
  } = _o(), s = JSON.stringify(Bf(i, n.v7_relativeSplatPath)), a = C.useRef(!1);
  return Wf(() => {
    a.current = !0;
  }), C.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), !a.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let d = Vf(u, JSON.parse(s), o, c.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : It([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c);
  }, [t, r, s, o, e]);
}
function Qf(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = C.useContext(sn), {
    matches: i
  } = C.useContext(ln), {
    pathname: o
  } = _o(), s = JSON.stringify(Bf(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Vf(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function i1(e, t) {
  return o1(e, t);
}
function o1(e, t, n, r) {
  Xr() || q(!1);
  let {
    navigator: i
  } = C.useContext(sn), {
    matches: o
  } = C.useContext(ln), s = o[o.length - 1], a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = _o(), c;
  if (t) {
    var d;
    let S = typeof t == "string" ? Qn(t) : t;
    l === "/" || (d = S.pathname) != null && d.startsWith(l) || q(!1), c = S;
  } else
    c = u;
  let f = c.pathname || "/", g = f;
  if (l !== "/") {
    let S = l.replace(/^\//, "").split("/");
    g = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = $g(e, {
    pathname: g
  }), x = c1(y && y.map((S) => Object.assign({}, S, {
    params: Object.assign({}, a, S.params),
    pathname: It([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname
    ]),
    pathnameBase: S.pathnameBase === "/" ? l : It([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase
    ])
  })), o, n, r);
  return t && x ? /* @__PURE__ */ C.createElement($o.Provider, {
    value: {
      location: Ar({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: kt.Pop
    }
  }, x) : x;
}
function s1() {
  let e = h1(), t = qg(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ C.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ C.createElement("pre", {
    style: i
  }, n) : null, null);
}
const l1 = /* @__PURE__ */ C.createElement(s1, null);
class a1 extends C.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ C.createElement(ln.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ C.createElement(Kf.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function u1(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = C.useContext(xa);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ C.createElement(ln.Provider, {
    value: t
  }, r);
}
function c1(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let s = e, a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
    c >= 0 || q(!1), s = s.slice(0, Math.min(s.length, c + 1));
  }
  let l = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
        let {
          loaderData: f,
          errors: g
        } = n, y = d.route.loader && f[d.route.id] === void 0 && (!g || g[d.route.id] === void 0);
        if (d.route.lazy || y) {
          l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let g, y = !1, x = null, S = null;
    n && (g = a && d.route.id ? a[d.route.id] : void 0, x = d.route.errorElement || l1, l && (u < 0 && f === 0 ? (y = !0, S = null) : u === f && (y = !0, S = d.route.hydrateFallbackElement || null)));
    let h = t.concat(s.slice(0, f + 1)), m = () => {
      let w;
      return g ? w = x : y ? w = S : d.route.Component ? w = /* @__PURE__ */ C.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = c, /* @__PURE__ */ C.createElement(u1, {
        match: d,
        routeContext: {
          outlet: c,
          matches: h,
          isDataRoute: n != null
        },
        children: w
      });
    };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? /* @__PURE__ */ C.createElement(a1, {
      location: n.location,
      revalidation: n.revalidation,
      component: x,
      error: g,
      children: m(),
      routeContext: {
        outlet: null,
        matches: h,
        isDataRoute: !0
      }
    }) : m();
  }, null);
}
var Yf = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Yf || {}), ao = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ao || {});
function d1(e) {
  let t = C.useContext(xa);
  return t || q(!1), t;
}
function f1(e) {
  let t = C.useContext(t1);
  return t || q(!1), t;
}
function p1(e) {
  let t = C.useContext(ln);
  return t || q(!1), t;
}
function Xf(e) {
  let t = p1(), n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function h1() {
  var e;
  let t = C.useContext(Kf), n = f1(ao.UseRouteError), r = Xf(ao.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function m1() {
  let {
    router: e
  } = d1(Yf.UseNavigateStable), t = Xf(ao.UseNavigateStable), n = C.useRef(!1);
  return Wf(() => {
    n.current = !0;
  }), C.useCallback(function(i, o) {
    o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Ar({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function gt(e) {
  q(!1);
}
function g1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = kt.Pop,
    navigator: o,
    static: s = !1,
    future: a
  } = e;
  Xr() && q(!1);
  let l = t.replace(/^\/*/, "/"), u = C.useMemo(() => ({
    basename: l,
    navigator: o,
    static: s,
    future: Ar({
      v7_relativeSplatPath: !1
    }, a)
  }), [l, a, o, s]);
  typeof r == "string" && (r = Qn(r));
  let {
    pathname: c = "/",
    search: d = "",
    hash: f = "",
    state: g = null,
    key: y = "default"
  } = r, x = C.useMemo(() => {
    let S = wa(c, l);
    return S == null ? null : {
      location: {
        pathname: S,
        search: d,
        hash: f,
        state: g,
        key: y
      },
      navigationType: i
    };
  }, [l, c, d, f, g, y, i]);
  return x == null ? null : /* @__PURE__ */ C.createElement(sn.Provider, {
    value: u
  }, /* @__PURE__ */ C.createElement($o.Provider, {
    children: n,
    value: x
  }));
}
function v1(e) {
  let {
    children: t,
    location: n
  } = e;
  return i1(dl(t), n);
}
new Promise(() => {
});
function dl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return C.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ C.isValidElement(r))
      return;
    let o = [...t, i];
    if (r.type === C.Fragment) {
      n.push.apply(n, dl(r.props.children, o));
      return;
    }
    r.type !== gt && q(!1), !r.props.index || !r.props.children || q(!1);
    let s = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = dl(r.props.children, o)), n.push(s);
  }), n;
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fl.apply(this, arguments);
}
function y1(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function w1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function x1(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !w1(e);
}
const S1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], E1 = "6";
try {
  window.__reactRouterVersion = E1;
} catch {
}
const k1 = "startTransition", Bu = vs[k1];
function C1(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, o = C.useRef();
  o.current == null && (o.current = Og({
    window: i,
    v5Compat: !0
  }));
  let s = o.current, [a, l] = C.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: u
  } = r || {}, c = C.useCallback((d) => {
    u && Bu ? Bu(() => l(d)) : l(d);
  }, [l, u]);
  return C.useLayoutEffect(() => s.listen(c), [s, c]), /* @__PURE__ */ C.createElement(g1, {
    basename: t,
    children: n,
    location: a.location,
    navigationType: a.action,
    navigator: s,
    future: r
  });
}
const N1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", j1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, be = /* @__PURE__ */ C.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: o,
    replace: s,
    state: a,
    target: l,
    to: u,
    preventScrollReset: c,
    unstable_viewTransition: d
  } = t, f = y1(t, S1), {
    basename: g
  } = C.useContext(sn), y, x = !1;
  if (typeof u == "string" && j1.test(u) && (y = u, N1))
    try {
      let w = new URL(window.location.href), v = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u), E = wa(v.pathname, g);
      v.origin === w.origin && E != null ? u = E + v.search + v.hash : x = !0;
    } catch {
    }
  let S = n1(u, {
    relative: i
  }), h = P1(u, {
    replace: s,
    state: a,
    target: l,
    preventScrollReset: c,
    relative: i,
    unstable_viewTransition: d
  });
  function m(w) {
    r && r(w), w.defaultPrevented || h(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ C.createElement("a", fl({}, f, {
      href: y || S,
      onClick: x || o ? r : m,
      ref: n,
      target: l
    }))
  );
});
var Vu;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Vu || (Vu = {}));
var Hu;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Hu || (Hu = {}));
function P1(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    unstable_viewTransition: a
  } = t === void 0 ? {} : t, l = Gr(), u = _o(), c = Qf(e, {
    relative: s
  });
  return C.useCallback((d) => {
    if (x1(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : lo(u) === lo(c);
      l(e, {
        replace: f,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: a
      });
    }
  }, [u, l, c, r, i, n, e, o, s, a]);
}
var L1 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const R1 = /* @__PURE__ */ mo(L1);
var O1 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ku(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (R1[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var r = e.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? e.slice(4, r) : "" };
  }
  for (var i = new RegExp(O1), o = null; (o = i.exec(e)) !== null; ) if (o[0].trim()) if (o[1]) {
    var s = o[1].trim(), a = [s, ""];
    s.indexOf("=") > -1 && (a = s.split("=")), t.attrs[a[0]] = a[1], i.lastIndex--;
  } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
  return t;
}
var T1 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, I1 = /^\s*$/, $1 = /* @__PURE__ */ Object.create(null);
function Gf(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var r = [];
        for (var i in n) r.push(i + '="' + n[i] + '"');
        return r.length ? " " + r.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Gf, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var _1 = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = $1);
  var n, r = [], i = [], o = -1, s = !1;
  if (e.indexOf("<") !== 0) {
    var a = e.indexOf("<");
    r.push({ type: "text", content: a === -1 ? e : e.substring(0, a) });
  }
  return e.replace(T1, function(l, u) {
    if (s) {
      if (l !== "</" + n.name + ">") return;
      s = !1;
    }
    var c, d = l.charAt(1) !== "/", f = l.startsWith("<!--"), g = u + l.length, y = e.charAt(g);
    if (f) {
      var x = Ku(l);
      return o < 0 ? (r.push(x), r) : ((c = i[o]).children.push(x), r);
    }
    if (d && (o++, (n = Ku(l)).type === "tag" && t.components[n.name] && (n.type = "component", s = !0), n.voidElement || s || !y || y === "<" || n.children.push({ type: "text", content: e.slice(g, e.indexOf("<", g)) }), o === 0 && r.push(n), (c = i[o - 1]) && c.children.push(n), i[o] = n), (!d || n.voidElement) && (o > -1 && (n.voidElement || n.name === l.slice(2, -1)) && (o--, n = o === -1 ? r : i[o]), !s && y !== "<" && y)) {
      c = o === -1 ? r : i[o].children;
      var S = e.indexOf("<", g), h = e.slice(g, S === -1 ? void 0 : S);
      I1.test(h) && (h = " "), (S > -1 && o + c.length >= 0 || h !== " ") && c.push({ type: "text", content: h });
    }
  }), r;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + Gf("", n);
  }, "");
} };
function _i() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Wu = {};
function uo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Wu[t[0]] || (typeof t[0] == "string" && (Wu[t[0]] = /* @__PURE__ */ new Date()), _i(...t));
}
const Jf = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Qu(e, t, n) {
  e.loadNamespaces(t, Jf(e, n));
}
function Yu(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, Jf(e, r));
}
function M1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (a, l) => {
    const u = t.services.backendConnector.state[`${a}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function F1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (uo("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (i, o) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !o(i.isLanguageChangingTo, e)) return !1;
    }
  }) : M1(e, t, n);
}
const b1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, A1 = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, z1 = (e) => A1[e], D1 = (e) => e.replace(b1, z1);
let pl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: D1
};
function U1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  pl = {
    ...pl,
    ...e
  };
}
function Zf() {
  return pl;
}
let qf;
function B1(e) {
  qf = e;
}
function Sa() {
  return qf;
}
function fs(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function ps(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? Pn(t) : t;
}
function V1(e) {
  return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every((t) => C.isValidElement(t));
}
function Pn(e) {
  return Array.isArray(e) ? e : [e];
}
function H1(e, t) {
  const n = {
    ...t
  };
  return n.props = Object.assign(e.props, t.props), n;
}
function ep(e, t) {
  if (!e) return "";
  let n = "";
  const r = Pn(e), i = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return r.forEach((o, s) => {
    if (typeof o == "string")
      n += `${o}`;
    else if (C.isValidElement(o)) {
      const a = Object.keys(o.props).length, l = i.indexOf(o.type) > -1, u = o.props.children;
      if (!u && l && a === 0)
        n += `<${o.type}/>`;
      else if (!u && (!l || a !== 0))
        n += `<${s}></${s}>`;
      else if (o.props.i18nIsDynamicList)
        n += `<${s}></${s}>`;
      else if (l && a === 1 && typeof u == "string")
        n += `<${o.type}>${u}</${o.type}>`;
      else {
        const c = ep(u, t);
        n += `<${s}>${c}</${s}>`;
      }
    } else if (o === null)
      _i("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof o == "object") {
      const {
        format: a,
        ...l
      } = o, u = Object.keys(l);
      if (u.length === 1) {
        const c = a ? `${u[0]}, ${a}` : u[0];
        n += `{{${c}}}`;
      } else
        _i("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o);
    } else
      _i("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o);
  }), n;
}
function K1(e, t, n, r, i, o) {
  if (t === "") return [];
  const s = r.transKeepBasicHtmlNodesFor || [], a = t && new RegExp(s.map((S) => `<${S}`).join("|")).test(t);
  if (!e && !a && !o) return [t];
  const l = {};
  function u(S) {
    Pn(S).forEach((m) => {
      typeof m != "string" && (fs(m) ? u(ps(m)) : typeof m == "object" && !C.isValidElement(m) && Object.assign(l, m));
    });
  }
  u(e);
  const c = _1.parse(`<0>${t}</0>`), d = {
    ...l,
    ...i
  };
  function f(S, h, m) {
    const w = ps(S), v = y(w, h.children, m);
    return V1(w) && v.length === 0 || S.props && S.props.i18nIsDynamicList ? w : v;
  }
  function g(S, h, m, w, v) {
    S.dummy ? (S.children = h, m.push(C.cloneElement(S, {
      key: w
    }, v ? void 0 : h))) : m.push(...C.Children.map([S], (E) => {
      const k = {
        ...E.props
      };
      return delete k.i18nIsDynamicList, C.createElement(E.type, {
        ...k,
        key: w,
        ref: E.ref
      }, v ? null : h);
    }));
  }
  function y(S, h, m) {
    const w = Pn(S);
    return Pn(h).reduce((E, k, N) => {
      const L = k.children && k.children[0] && k.children[0].content && n.services.interpolator.interpolate(k.children[0].content, d, n.language);
      if (k.type === "tag") {
        let $ = w[parseInt(k.name, 10)];
        m.length === 1 && !$ && ($ = m[0][k.name]), $ || ($ = {});
        const O = Object.keys(k.attrs).length !== 0 ? H1({
          props: k.attrs
        }, $) : $, A = C.isValidElement(O), ee = A && fs(k, !0) && !k.voidElement, fe = a && typeof O == "object" && O.dummy && !A, ye = typeof e == "object" && e !== null && Object.hasOwnProperty.call(e, k.name);
        if (typeof O == "string") {
          const H = n.services.interpolator.interpolate(O, d, n.language);
          E.push(H);
        } else if (fs(O) || ee) {
          const H = f(O, k, m);
          g(O, H, E, N);
        } else if (fe) {
          const H = y(w, k.children, m);
          g(O, H, E, N);
        } else if (Number.isNaN(parseFloat(k.name)))
          if (ye) {
            const H = f(O, k, m);
            g(O, H, E, N, k.voidElement);
          } else if (r.transSupportBasicHtmlNodes && s.indexOf(k.name) > -1)
            if (k.voidElement)
              E.push(C.createElement(k.name, {
                key: `${k.name}-${N}`
              }));
            else {
              const H = y(w, k.children, m);
              E.push(C.createElement(k.name, {
                key: `${k.name}-${N}`
              }, H));
            }
          else if (k.voidElement)
            E.push(`<${k.name} />`);
          else {
            const H = y(w, k.children, m);
            E.push(`<${k.name}>${H}</${k.name}>`);
          }
        else if (typeof O == "object" && !A) {
          const H = k.children[0] ? L : null;
          H && E.push(H);
        } else
          g(O, L, E, N, k.children.length !== 1 || !L);
      } else if (k.type === "text") {
        const $ = r.transWrapTextNodes, O = o ? r.unescape(n.services.interpolator.interpolate(k.content, d, n.language)) : n.services.interpolator.interpolate(k.content, d, n.language);
        $ ? E.push(C.createElement($, {
          key: `${k.name}-${N}`
        }, O)) : E.push(O);
      }
      return E;
    }, []);
  }
  const x = y([{
    dummy: !0,
    children: e || []
  }], c, Pn(e || []));
  return ps(x[0]);
}
function W1(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: a,
    defaults: l,
    components: u,
    ns: c,
    i18n: d,
    t: f,
    shouldUnescape: g,
    ...y
  } = e;
  const x = d || Sa();
  if (!x)
    return uo("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  const S = f || x.t.bind(x) || ((ee) => ee), h = {
    ...Zf(),
    ...x.options && x.options.react
  };
  let m = c || S.ns || x.options && x.options.defaultNS;
  m = typeof m == "string" ? [m] : m || ["translation"];
  const w = ep(t, h), v = l || w || h.transEmptyNodeValue || i, {
    hashTransKey: E
  } = h, k = i || (E ? E(w || v) : w || v);
  x.options && x.options.interpolation && x.options.interpolation.defaultVariables && (a = a && Object.keys(a).length > 0 ? {
    ...a,
    ...x.options.interpolation.defaultVariables
  } : {
    ...x.options.interpolation.defaultVariables
  });
  const N = a || n !== void 0 || !t ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, L = {
    ...s,
    context: o || s.context,
    count: n,
    ...a,
    ...N,
    defaultValue: v,
    ns: m
  }, $ = k ? S(k, L) : v;
  u && Object.keys(u).forEach((ee) => {
    const fe = u[ee];
    if (typeof fe.type == "function" || !fe.props || !fe.props.children || $.indexOf(`${ee}/>`) < 0 && $.indexOf(`${ee} />`) < 0) return;
    function ye() {
      return C.createElement(C.Fragment, null, fe);
    }
    u[ee] = C.createElement(ye);
  });
  const O = K1(u || t, $, x, h, L, g), A = r !== void 0 ? r : h.defaultTransParent;
  return A ? C.createElement(A, y, O) : O;
}
const Q1 = {
  type: "3rdParty",
  init(e) {
    U1(e.options.react), B1(e);
  }
}, tp = C.createContext();
class Y1 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function hn(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: a,
    defaults: l,
    components: u,
    ns: c,
    i18n: d,
    t: f,
    shouldUnescape: g,
    ...y
  } = e;
  const {
    i18n: x,
    defaultNS: S
  } = C.useContext(tp) || {}, h = d || x || Sa(), m = f || h && h.t.bind(h);
  return W1({
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s,
    values: a,
    defaults: l,
    components: u,
    ns: c || m && m.ns || S || h && h.options && h.options.defaultNS,
    i18n: h,
    t: f,
    shouldUnescape: g,
    ...y
  });
}
const X1 = (e, t) => {
  const n = C.useRef();
  return C.useEffect(() => {
    n.current = e;
  }, [e, t]), n.current;
};
function np(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function G1(e, t, n, r) {
  return C.useCallback(np(e, t, n, r), [e, t, n, r]);
}
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: i
  } = C.useContext(tp) || {}, o = n || r || Sa();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Y1()), !o) {
    uo("You will need to pass in an i18next instance by using initReactI18next");
    const v = (k, N) => typeof N == "string" ? N : N && typeof N == "object" && typeof N.defaultValue == "string" ? N.defaultValue : Array.isArray(k) ? k[k.length - 1] : k, E = [v, {}, !1];
    return E.t = v, E.i18n = {}, E.ready = !1, E;
  }
  o.options.react && o.options.react.wait !== void 0 && uo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Zf(),
    ...o.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: l
  } = s;
  let u = i || o.options && o.options.defaultNS;
  u = typeof u == "string" ? [u] : u || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(u);
  const c = (o.isInitialized || o.initializedStoreOnce) && u.every((v) => F1(v, o, s)), d = G1(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l), f = () => d, g = () => np(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l), [y, x] = C.useState(f);
  let S = u.join();
  t.lng && (S = `${t.lng}${S}`);
  const h = X1(S), m = C.useRef(!0);
  C.useEffect(() => {
    const {
      bindI18n: v,
      bindI18nStore: E
    } = s;
    m.current = !0, !c && !a && (t.lng ? Yu(o, t.lng, u, () => {
      m.current && x(g);
    }) : Qu(o, u, () => {
      m.current && x(g);
    })), c && h && h !== S && m.current && x(g);
    function k() {
      m.current && x(g);
    }
    return v && o && o.on(v, k), E && o && o.store.on(E, k), () => {
      m.current = !1, v && o && v.split(" ").forEach((N) => o.off(N, k)), E && o && E.split(" ").forEach((N) => o.store.off(N, k));
    };
  }, [o, S]), C.useEffect(() => {
    m.current && c && x(f);
  }, [o, l, c]);
  const w = [y, o, c];
  if (w.t = y, w.i18n = o, w.ready = c, c || !c && !a) return w;
  throw new Promise((v) => {
    t.lng ? Yu(o, t.lng, u, () => v()) : Qu(o, u, () => v());
  });
}
const J1 = "Management", Z1 = "Comment", q1 = "Login", e0 = "Logout", t0 = "Register", n0 = "Email", r0 = "Password", i0 = "Nickname", o0 = "Personal Website", s0 = "Setting", l0 = "Profile", a0 = "Homepage", u0 = "All", c0 = "Mine", d0 = "Approved", f0 = "Waiting", p0 = "Spam", h0 = "Sticky", m0 = "Edit", g0 = "Reply", v0 = "Action", y0 = "Filter", w0 = "Author", x0 = "Content", S0 = "Username", E0 = "Submit", k0 = "Cancel", C0 = "At", N0 = "Migration", j0 = "Exporting…", P0 = "Under verification", L0 = "Administrator", R0 = "Guest", O0 = "User", T0 = "Role", gi = {
  management: J1,
  comment: Z1,
  login: q1,
  logout: e0,
  register: t0,
  email: n0,
  password: r0,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: i0,
  website: o0,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: s0,
  profile: l0,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: a0,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: u0,
  mine: c0,
  approved: d0,
  "approved button": "Approved",
  waiting: f0,
  spam: p0,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: h0,
  edit: m0,
  reply: g0,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: v0,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: y0,
  author: w0,
  content: x0,
  username: S0,
  submit: E0,
  cancel: k0,
  at: C0,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: N0,
  exporting: j0,
  export: "Export",
  import: "Import",
  "import success": "Import Success",
  "import clear data confirm": "Notice! All current data will be overwrited by importing data, do you really want to continue?",
  "importing {{importedLength}}/{{maxLength}}": "Importing {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Comment data index relationship reconstruction",
  "index updating {{importedLength}}/{{maxLength}}": "Index updating {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Please input avatar URL",
  "change avatar": "Change avatar",
  "minimum 6 characters required": "Minimum 6 characters required!",
  "close 2fa confirm": "Two-step verification can greatly improve the security of your account. Are you sure to turn it off?",
  "two factor auth": "Two-step verification",
  "enable 2fa": "Enable Two-step verification",
  "disable 2fa": "Disable Two-step verification",
  "2fa description 1": 'Two-step verification, as can be seen from the name, "two-step" is the focus of 2FA, and 2FA in a broad sense refers to providing a variety of solutions to complete user authorization authentication.',
  "2fa description 2": "After enabling two-step verification, to log in to the background of the system, in addition to the user name and password, additional tokens must be provided, which can greatly improve the security of the system.",
  "next step": "Next Step",
  "download 2fa app": "Download Two-step verification app",
  "open app and scan qrcode": "Open the Two-step verification app and scan the QR code below",
  "input 2fa code": "Input Two-step verification code",
  "2fa code": "Two-step verification code",
  "forgot password": "Forgot Password",
  "get new password": "Get a new password",
  "you will receive an email which contains a link to create new password": "You'll receive an email which contains a link to create new password.",
  "find password success! please go to your mailbox to reset it!": "The reset password email has been sent successfully, please check it in your mailbox!",
  "find password error! try again later": "Failed to send reset password email, please try again later!",
  "set administrator": "Set Admin",
  "set guest": "Set Guest",
  "set label": "Set Label",
  verify: P0,
  administrator: L0,
  guest: R0,
  user: O0,
  "manage users": "Manage Users",
  role: T0,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, I0 = "管理", $0 = "评论", _0 = "登录", M0 = "登出", F0 = "用户注册", b0 = "邮箱", A0 = "密码", z0 = "昵称", D0 = "个人网站", U0 = "个人设置", B0 = "个人资料", V0 = "个人主页地址", H0 = "所有", K0 = "我的", W0 = "已通过", Q0 = "待审核", Y0 = "垃圾", X0 = "置顶评论", G0 = "编辑", J0 = "回复", Z0 = "操作", q0 = "筛选", ev = "作者", tv = "内容", nv = "用户名", rv = "提交", iv = "取消", ov = "于", sv = "导入导出", lv = "导出中...", av = "待认证", uv = "管理员", cv = "普通用户", dv = "用户", fv = "角色", Xu = {
  management: I0,
  comment: $0,
  login: _0,
  logout: M0,
  register: F0,
  email: b0,
  password: A0,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: z0,
  website: D0,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: U0,
  profile: B0,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: V0,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: H0,
  mine: K0,
  approved: W0,
  "approved button": "通过",
  waiting: Q0,
  spam: Y0,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: X0,
  edit: G0,
  reply: J0,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: Z0,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: q0,
  author: ev,
  content: tv,
  username: nv,
  submit: rv,
  cancel: iv,
  at: ov,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: sv,
  exporting: lv,
  export: "导出",
  import: "导入",
  "import success": "导入成功",
  "import clear data confirm": "注意！导入数据会覆盖当前所有数据，请确认是否继续操作？",
  "importing {{importedLength}}/{{maxLength}}": "开始导入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "评论数据索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "请输入 URL",
  "change avatar": "修改头像",
  "minimum 6 characters required": "请输入 6 位验证码",
  "close 2fa confirm": "两步验证可以大大提升账户的安全性，确定关闭吗？",
  "two factor auth": "两步验证",
  "enable 2fa": "开启两步验证",
  "disable 2fa": "关闭两步验证",
  "2fa description 1": "两步验证，对应的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。从名字可以看出， 「两步」是 2FA 的重点，广义的 2FA 是指提供多种方案完成用户权限鉴定。",
  "2fa description 2": "开启两步验证后，登录系统后台，除了要提供用户名和密码外，还要提供额外的 Token，这样可以大大提高系统的安全性。",
  "next step": "下一步",
  "download 2fa app": "下载对应的应用",
  "open app and scan qrcode": "打开两步验证的应用，扫描下面的二维码",
  "input 2fa code": "填写 6 位验证码",
  "2fa code": "两步验证码",
  "forgot password": "忘记密码",
  "get new password": "获取新密码",
  "you will receive an email which contains a link to create new password": "您会收到一封包含创建新密码链接的电子邮件。",
  "find password success! please go to your mailbox to reset it!": "重置密码邮件发送成功，请去邮箱中查收！",
  "find password error! try again later": "重置密码邮件发送失败，请稍后再试！",
  "set administrator": "成为管理员",
  "set guest": "成为普通用户",
  "set label": "设置专属标签",
  verify: av,
  administrator: uv,
  guest: cv,
  user: dv,
  "manage users": "管理用户",
  role: fv,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, pv = "管理", hv = "留言", mv = "登入", gv = "登出", vv = "使用者註冊", yv = "信箱", wv = "密碼", xv = "暱稱", Sv = "個人網站", Ev = "個人設定", kv = "個人資料", Cv = "個人首頁網址", Nv = "所有", jv = "我的", Pv = "已通過", Lv = "待審核", Rv = "垃圾", Ov = "置頂留言", Tv = "編輯", Iv = "回覆", $v = "動作", _v = "篩選", Mv = "作者", Fv = "內容", bv = "使用者名稱", Av = "送出", zv = "取消", Dv = "於", Uv = "匯入匯出", Bv = "匯出中...", Vv = "待認證", Hv = "管理員", Kv = "使用者", Wv = "使用者", Qv = "角色", Yv = {
  management: pv,
  comment: hv,
  login: mv,
  logout: gv,
  register: vv,
  email: yv,
  password: wv,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: xv,
  website: Sv,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: Ev,
  profile: kv,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: Cv,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: Nv,
  mine: jv,
  approved: Pv,
  "approved button": "通過",
  waiting: Lv,
  spam: Rv,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: Ov,
  edit: Tv,
  reply: Iv,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: $v,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: _v,
  author: Mv,
  content: Fv,
  username: bv,
  submit: Av,
  cancel: zv,
  at: Dv,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: Uv,
  exporting: Bv,
  export: "匯出",
  import: "匯入",
  "import success": "匯入成功",
  "import clear data confirm": "注意！匯入資料會覆蓋目前所有資料，請確認是否繼續？",
  "importing {{importedLength}}/{{maxLength}}": "開始導入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "留言資料索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "請輸入頭像 URL",
  "change avatar": "修改頭像",
  "minimum 6 characters required": "請輸入 6 位驗證碼",
  "close 2fa confirm": "兩步驟驗證可以大大提升帳戶的安全性，確定關閉嗎？",
  "two factor auth": "兩步驟驗證",
  "enable 2fa": "開啟兩步驟驗證",
  "disable 2fa": "關閉兩步驟驗證",
  "2fa description 1": "兩步驟驗證，對應的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。從名字可以看出， 「兩步驟」是 2FA 的重點，廣義的 2FA 是指提供多種方法完成使用者身分識別。",
  "2fa description 2": "開啟兩步驟驗證後，登入系統後台時，除了要提供使用者名稱和密碼外，還要提供額外的 Token，這樣可以大大提高系統的安全性。",
  "next step": "下一步",
  "download 2fa app": "下載對應的應用",
  "open app and scan qrcode": "打開兩步驟驗證的應用程式，掃描下面的QR Code",
  "input 2fa code": "填寫 6 位驗證碼",
  "2fa code": "兩步驟驗證碼",
  "forgot password": "忘記密碼",
  "get new password": "取得新密碼",
  "you will receive an email which contains a link to create new password": "您會收到一封包含建立新密碼連結的電子郵件。",
  "find password success! please go to your mailbox to reset it!": "重設密碼郵件發送成功，請到信箱中確認！",
  "find password error! try again later": "重設密碼郵件發送失敗，請稍後再試！",
  "set administrator": "成為管理員",
  "set guest": "成為使用者",
  "set label": "設定專屬標籤",
  verify: Vv,
  administrator: Hv,
  guest: Kv,
  user: Wv,
  "manage users": "使用者管理",
  role: Qv,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, Gu = [
  {
    label: "中文简体",
    value: "zh-CN",
    alias: ["zh-CN", "zh-cn"]
  },
  {
    label: "中文繁體",
    value: "zh-TW",
    alias: ["zh-TW"]
  },
  {
    label: "English",
    value: "en-US",
    alias: ["en", "en-US", "jp", "jp-JP"]
  }
], Xv = {
  "zh-cn": { translations: Xu },
  "zh-CN": { translations: Xu },
  en: { translations: gi },
  "en-US": { translations: gi },
  "zh-TW": { translations: Yv },
  jp: { translations: gi },
  "jp-JP": { translations: gi }
};
function an() {
  const e = Yr(), t = Gr(), n = zt((c) => c.user), { t: r, i18n: i } = Dt(), [o, s] = C.useState(null), a = C.useMemo(() => {
    const c = Gu.find(
      (d) => d.alias.includes(i.language)
    );
    return (c == null ? void 0 : c.value) ?? "";
  }, [i.language]);
  C.useEffect(() => {
    !(n != null && n.email) || !(n != null && n.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((c) => c.json()).then((c) => {
      n.__version !== c.version && s(c.version);
    });
  }, [n == null ? void 0 : n.email]);
  const l = function(c) {
    i.changeLanguage(c.target.value);
  }, u = function(c) {
    c.preventDefault(), e.user.logout(), t("/ui/login");
  };
  return [
    /* @__PURE__ */ p.jsxs("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (n == null ? void 0 : n.type) === "administrator" ? /* @__PURE__ */ p.jsx("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ p.jsxs("ul", { className: "root", children: [
        /* @__PURE__ */ p.jsx("li", { className: "parent", children: /* @__PURE__ */ p.jsx(be, { to: "/ui", children: r("management") }) }),
        /* @__PURE__ */ p.jsxs("ul", { className: "child", children: [
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(be, { to: "/ui", children: r("comment") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(be, { to: "/ui/user", children: r("user") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(be, { to: "/ui/migration", children: r("migration") }) })
        ] })
      ] }) }) : null,
      /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
        /* @__PURE__ */ p.jsx("div", { className: "language-select", children: /* @__PURE__ */ p.jsx(
          "select",
          {
            defaultValue: a,
            onChange: l,
            style: { width: 120 },
            children: Gu.map((c) => /* @__PURE__ */ p.jsx("option", { value: c.value, children: c.label }, c.value))
          }
        ) }),
        n != null && n.type ? /* @__PURE__ */ p.jsx(be, { to: "/ui/profile", className: "author", children: n.display_name }) : null,
        n != null && n.type ? /* @__PURE__ */ p.jsx("a", { className: "exit", href: "#", onClick: u, children: r("logout") }) : null
      ] })
    ] }, "header"),
    o ? /* @__PURE__ */ p.jsx("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ p.jsx(
      hn,
      {
        i18nKey: "new version tips",
        defaults: "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
        components: {
          a: /* @__PURE__ */ p.jsx("a", {})
        },
        values: {
          version: o
        },
        transKeepBasicHtmlNodesFor: ["a"]
      }
    ) }, "upgrade") : null
  ];
}
function Gv() {
  const { t: e } = Dt(), t = Yr(), n = Gr(), r = zt((u) => u.user), [i, o] = C.useState(!1), [s, a] = C.useState(!1);
  C.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const l = async function(u) {
    u.preventDefault(), o(!1);
    const c = u.target.email.value;
    if (!c)
      return o(e("please input email"));
    try {
      a(!0), await t.user.forgot({
        email: c
      }), alert(e("find password success! please go to your mailbox to reset it!")), n("/ui/login");
    } catch {
      o(e("find password error! try again later"));
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: l, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          ),
          /* @__PURE__ */ p.jsx("p", { className: "description", style: { textAlign: "left" }, children: e(
            "you will receive an email which contains a link to create new password"
          ) })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("get new password")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(be, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(be, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
const Jv = (e) => /* @__PURE__ */ C.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), Zv = (e) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...e }, /* @__PURE__ */ C.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ C.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), qv = (e) => /* @__PURE__ */ C.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), ey = (e) => /* @__PURE__ */ C.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ C.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ C.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), ty = (e) => /* @__PURE__ */ C.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ C.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), ny = (e) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...e }, /* @__PURE__ */ C.createElement("path", { fill: "var(--color-1, #808080)", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ C.createElement("path", { fill: "var(--color-2, #808080)", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ C.createElement("path", { fill: "var(--color-3, #808080)", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ C.createElement("path", { fill: "var(--color-4, #808080)", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: qv,
  github: Jv,
  google: ny,
  qq: ty,
  twitter: Zv,
  weibo: ey
}, Symbol.toStringTag, { value: "Module" })), Mi = {}, Ju = (e) => {
  const t = document.querySelector(`script[src="${e}"]`);
  if (t)
    return Mi[e] = {
      loading: !1,
      error: null,
      scriptEl: t
    };
};
function rp({
  src: e,
  checkForExisting: t = !1,
  ...n
}) {
  let r = e ? Mi[e] : void 0;
  !r && t && e && Zu && (r = Ju(e));
  const [i, o] = C.useState(
    r ? r.loading : !!e
  ), [s, a] = C.useState(r ? r.error : null), [l, u] = C.useState(!1);
  return C.useEffect(() => {
    if (!Zu || !e || l || s) return;
    r = Mi[e], !r && t && (r = Ju(e));
    let c;
    r ? c = r.scriptEl : (c = document.createElement("script"), c.src = e, Object.keys(n).forEach((g) => {
      c[g] === void 0 ? c.setAttribute(g, n[g]) : c[g] = n[g];
    }), r = Mi[e] = {
      loading: !0,
      error: null,
      scriptEl: c
    });
    const d = () => {
      r && (r.loading = !1), o(!1), u(!0);
    }, f = (g) => {
      r && (r.error = g), a(g);
    };
    return c.addEventListener("load", d), c.addEventListener("error", f), document.body.appendChild(c), () => {
      c.removeEventListener("load", d), c.removeEventListener("error", f);
    };
  }, [e]), [i, s];
}
const Zu = typeof window < "u" && typeof window.document < "u";
function iy({
  sitekey: e,
  hideDefaultBadge: t = !1,
  checkForExisting: n = !0
}) {
  const [r, i] = C.useState();
  return C.useEffect(() => {
    oy && t && sy(".grecaptcha-badge { visibility: hidden; }");
  }, [t]), rp({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${e}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    }),
    checkForExisting: n
  }), C.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    });
  }, []), (o) => new Promise((s, a) => {
    r ? s(r.execute(e, { action: o })) : a(new Error("Recaptcha script not available"));
  });
}
const oy = typeof window < "u" && typeof window.document < "u", sy = (e) => {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const n = t.sheet;
  n && n.insertRule(e, n.cssRules.length);
};
function ly({ sitekey: e, checkForExisting: t = !0 }) {
  const [n, r] = C.useState();
  return rp({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      r(window.turnstile);
    }),
    async: !1,
    checkForExisting: t
  }), C.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      r(window.turnstile);
    });
  }, []), (i) => new Promise((o, s) => {
    if (!n)
      return s(new Error("Turnstile script not available"));
    n.render(".captcha-container", {
      sitekey: e,
      action: i,
      callback: o
    });
  });
}
function ip(e) {
  const t = iy(e), n = ly(e);
  return window.turnstileKey ? n : window.recaptchaV3Key ? t : () => {
  };
}
const ay = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class co {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || ay, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new co(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new co(this.logger, t);
  }
}
var qe = new co();
class Mo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [a, l] = s;
      for (let u = 0; u < l; u++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [a, l] = s;
      for (let u = 0; u < l; u++)
        a.apply(a, [t, ...r]);
    });
  }
}
function nr() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function qu(e) {
  return e == null ? "" : "" + e;
}
function uy(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const cy = /###/g;
function wr(e, t, n) {
  function r(a) {
    return a && a.indexOf("###") > -1 ? a.replace(cy, ".") : a;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < o.length - 1; ) {
    if (i()) return {};
    const a = r(o[s]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++s;
  }
  return i() ? {} : {
    obj: e,
    k: r(o[s])
  };
}
function ec(e, t, n) {
  const {
    obj: r,
    k: i
  } = wr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1], s = t.slice(0, t.length - 1), a = wr(e, s, Object);
  for (; a.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), a = wr(e, s, Object), a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = n;
}
function dy(e, t, n, r) {
  const {
    obj: i,
    k: o
  } = wr(e, t, Object);
  i[o] = i[o] || [], i[o].push(n);
}
function fo(e, t) {
  const {
    obj: n,
    k: r
  } = wr(e, t);
  if (n)
    return n[r];
}
function fy(e, t, n) {
  const r = fo(e, n);
  return r !== void 0 ? r : fo(t, n);
}
function op(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : op(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function fn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var py = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function hy(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => py[t]) : e;
}
class my {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const gy = [" ", ",", "?", "!", ";"], vy = new my(20);
function yy(e, t, n) {
  t = t || "", n = n || "";
  const r = gy.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = vy.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function hl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, a = "";
    for (let l = o; l < r.length; ++l)
      if (l !== o && (a += n), a += r[l], s = i[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    i = s;
  }
  return i;
}
function po(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class tc extends Mo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && o ? a.push(...r.split(o)) : a.push(r)));
    const l = fo(this.data, a);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), l || !s || typeof r != "string" ? l : hl(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), i = n, n = a[1]), this.addNamespaces(n), ec(this.data, a, i), o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), i = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = fo(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? op(l, r, o) : l = {
      ...l,
      ...r
    }, ec(this.data, a, l), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var sp = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((o) => {
      this.processors[o] && (t = this.processors[o].process(t, n, r, i));
    }), t;
  }
};
const nc = {};
class ho extends Mo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), uy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = qe.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !yy(t, r, i);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: o
        };
      const u = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), t = u.join(i);
    }
    return typeof o == "string" && (o = [o]), {
      key: t,
      namespaces: o
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], n), l = a[a.length - 1], u = n.lng || this.language, c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const v = n.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${l}${v}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${v}${s}`;
      }
      return i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const g = d && d.usedKey || s, y = d && d.exactUsedKey || s, x = Object.prototype.toString.apply(f), S = ["[object Number]", "[object Function]", "[object RegExp]"], h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, m = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (m && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && S.indexOf(x) < 0 && !(typeof h == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (d.res = v, d.usedParams = this.getUsedParamsDetails(n), d) : v;
      }
      if (o) {
        const v = Array.isArray(f), E = v ? [] : {}, k = v ? y : g;
        for (const N in f)
          if (Object.prototype.hasOwnProperty.call(f, N)) {
            const L = `${k}${o}${N}`;
            E[N] = this.translate(L, {
              ...n,
              joinArrays: !1,
              ns: a
            }), E[N] === L && (E[N] = f[N]);
          }
        f = E;
      }
    } else if (m && typeof h == "string" && Array.isArray(f))
      f = f.join(h), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let v = !1, E = !1;
      const k = n.count !== void 0 && typeof n.count != "string", N = ho.hasDefaultValue(n), L = k ? this.pluralResolver.getSuffix(u, n.count, n) : "", $ = n.ordinal && k ? this.pluralResolver.getSuffix(u, n.count, {
        ordinal: !1
      }) : "", O = k && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), A = O && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${L}`] || n[`defaultValue${$}`] || n.defaultValue;
      !this.isValidLookup(f) && N && (v = !0, f = A), this.isValidLookup(f) || (E = !0, f = s);
      const fe = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : f, ye = N && A !== f && this.options.updateMissing;
      if (E || v || ye) {
        if (this.logger.log(ye ? "updateKey" : "missingKey", u, l, s, ye ? A : f), o) {
          const P = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let H = [];
        const Xe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Xe && Xe[0])
          for (let P = 0; P < Xe.length; P++)
            H.push(Xe[P]);
        else this.options.saveMissingTo === "all" ? H = this.languageUtils.toResolveHierarchy(n.lng || this.language) : H.push(n.lng || this.language);
        const pt = (P, I, T) => {
          const D = N && T !== f ? T : fe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, l, I, D, ye, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(P, l, I, D, ye, n), this.emit("missingKey", P, l, I, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && k ? H.forEach((P) => {
          const I = this.pluralResolver.getSuffixes(P, n);
          O && n[`defaultValue${this.options.pluralSeparator}zero`] && I.indexOf(`${this.options.pluralSeparator}zero`) < 0 && I.push(`${this.options.pluralSeparator}zero`), I.forEach((T) => {
            pt([P], s + T, n[`defaultValue${T}`] || A);
          });
        }) : pt(H, s, A));
      }
      f = this.extendTranslation(f, t, n, d, r), E && f === s && this.options.appendNamespaceToMissingKey && (f = `${l}:${s}`), (E || v) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, v ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return i ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language, r), u) {
        const f = t.match(this.interpolator.nestingRegexp), g = f && f.length;
        c < g && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var f = arguments.length, g = new Array(f), y = 0; y < f; y++)
          g[y] = arguments[y];
        return o && o[0] === g[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`), null) : s.translate(...g, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = typeof a == "string" ? [a] : a;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = sp.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, a;
    return typeof t == "string" && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(l, n), c = u.key;
      i = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", g = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), y = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", x = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((S) => {
        this.isValidLookup(r) || (a = S, !nc[`${x[0]}-${S}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (nc[`${x[0]}-${S}`] = !0, this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((h) => {
          if (this.isValidLookup(r)) return;
          s = h;
          const m = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(m, c, h, S, n);
          else {
            let v;
            f && (v = this.pluralResolver.getSuffix(h, n.count, n));
            const E = `${this.options.pluralSeparator}zero`, k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (m.push(c + v), n.ordinal && v.indexOf(k) === 0 && m.push(c + v.replace(k, this.options.pluralSeparator)), g && m.push(c + E)), y) {
              const N = `${c}${this.options.contextSeparator}${n.context}`;
              m.push(N), f && (m.push(N + v), n.ordinal && v.indexOf(k) === 0 && m.push(N + v.replace(k, this.options.pluralSeparator)), g && m.push(N + E));
            }
          }
          let w;
          for (; w = m.pop(); )
            this.isValidLookup(r) || (o = w, r = this.getResource(h, S, w, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of n)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function hs(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class rc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = qe.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = po(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = po(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((i) => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = hs(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = hs(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = hs(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
let wy = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], xy = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const Sy = ["v1", "v2", "v3"], Ey = ["v4"], ic = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function ky() {
  const e = {};
  return wy.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: xy[t.fc]
      };
    });
  }), e;
}
class Cy {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = qe.create("pluralResolver"), (!this.options.compatibilityJSON || Ey.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = ky();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(po(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i, o) => ic[i] - ic[o]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map((i) => this.getSuffix(t, i, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
    const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !Sy.includes(this.options.compatibilityJSON);
  }
}
function oc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = fy(e, t, n);
  return !o && i && typeof n == "string" && (o = hl(e, n, r), o === void 0 && (o = hl(t, n, r))), o;
}
class Ny {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = qe.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: g,
      nestingSuffix: y,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: S,
      maxReplaces: h,
      alwaysFormat: m
    } = t.interpolation;
    this.escape = n !== void 0 ? n : hy, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? fn(o) : s || "{{", this.suffix = a ? fn(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? fn(f) : g || fn("$t("), this.nestingSuffix = y ? fn(y) : x || fn(")"), this.nestingOptionsSeparator = S || ",", this.maxReplaces = h || 1e3, this.alwaysFormat = m !== void 0 ? m : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    let o, s, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(y) {
      return y.replace(/\$/g, "$$$$");
    }
    const c = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const m = oc(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(m, void 0, r, {
          ...i,
          ...n,
          interpolationkey: y
        }) : m;
      }
      const x = y.split(this.formatSeparator), S = x.shift().trim(), h = x.join(this.formatSeparator).trim();
      return this.format(oc(n, l, S, this.options.keySeparator, this.options.ignoreJSONStructure), h, r, {
        ...i,
        ...n,
        interpolationkey: S
      });
    };
    this.resetRegExp();
    const d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, f = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (y) => u(y)
    }, {
      regex: this.regexp,
      safeValue: (y) => this.escapeValue ? u(this.escape(y)) : u(y)
    }].forEach((y) => {
      for (a = 0; o = y.regex.exec(t); ) {
        const x = o[1].trim();
        if (s = c(x), s === void 0)
          if (typeof d == "function") {
            const h = d(t, o, i);
            s = typeof h == "string" ? h : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, x))
            s = "";
          else if (f) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`), s = "";
        else typeof s != "string" && !this.useRawValueToEscape && (s = qu(s));
        const S = y.safeValue(s);
        if (t = t.replace(o[0], S), f ? (y.regex.lastIndex += s.length, y.regex.lastIndex -= o[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, s);
      const g = f.match(/'/g), y = f.match(/"/g);
      (g && g.length % 2 === 0 && !y || y.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), u && (s = {
          ...u,
          ...s
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, x), `${l}${c}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
    }
    for (; i = this.nestingRegexp.exec(t); ) {
      let l = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        i[1] = c.shift(), l = c, u = !0;
      }
      if (o = n(a.call(this, i[1].trim(), s), s), o && i[0] === t && typeof o != "string") return o;
      typeof o != "string" && (o = qu(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), o = ""), u && (o = l.reduce((c, d) => this.format(c, d, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), t = t.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function jy(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [a, ...l] = s.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function pn(e) {
  const t = {};
  return function(r, i, o) {
    const s = i + JSON.stringify(o);
    let a = t[s];
    return a || (a = e(po(i), o), t[s] = a), a(r);
  };
}
class Py {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = qe.create("formatter"), this.options = t, this.formats = {
      number: pn((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: pn((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: pn((n, r) => {
        const i = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: pn((n, r) => {
        const i = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: pn((n, r) => {
        const i = new Intl.ListFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = pn(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = jy(l);
      if (this.formats[u]) {
        let d = a;
        try {
          const f = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, g = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[u](a, g, {
            ...c,
            ...i,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
function Ly(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Ry extends Mo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = qe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {}, s = {}, a = {}, l = {};
    return t.forEach((u) => {
      let c = !0;
      n.forEach((d) => {
        const f = `${u}|${d}`;
        !r.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, c = !1, s[f] === void 0 && (s[f] = !0), o[f] === void 0 && (o[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), c || (a[u] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), o = i[0], s = i[1];
    n && this.emit("failedLoading", o, s, n), r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((l) => {
      dy(l.loaded, [o], s), Ly(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((d) => {
          a[u][d] === void 0 && (a[u][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(u, c);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a), this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...s,
          isUpdate: o
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(t, n, r, i, l) : c = u(t, n, r, i), c && typeof c.then == "function" ? c.then((d) => a(null, d)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
        else
          u(t, n, r, i, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function sc() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function lc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function vi() {
}
function Oy(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class zr extends Mo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = lc(t), this.services = {}, this.logger = qe, this.modules = {
      external: []
    }, Oy(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = sc();
    this.options = {
      ...i,
      ...this.options,
      ...lc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? typeof c == "function" ? new c() : c : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? qe.init(o(this.modules.logger), this.options) : qe.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = Py);
      const d = new rc(this.options);
      this.store = new tc(this.options.resources, this.options);
      const f = this.services;
      f.logger = qe, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Cy(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (f.formatter = o(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Ny(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Ry(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(g) {
        for (var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++)
          x[S - 1] = arguments[S];
        t.emit(g, ...x);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new ho(this.services, this.options), this.translator.on("*", function(g) {
        for (var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++)
          x[S - 1] = arguments[S];
        t.emit(g, ...x);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = vi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments), t;
      };
    });
    const l = nr(), u = () => {
      const c = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const i = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const o = [], s = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
        });
      };
      i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => s(l)), this.options.preload && this.options.preload.forEach((a) => s(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = nr();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = vi), this.services.backendConnector.reload(t, n, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && sp.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = nr();
    this.emit("languageChanging", t);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, s = (l, u) => {
      u ? (o(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      !t && !l && this.services.languageDetector && (l = []);
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        s(c, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), i;
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function(s, a) {
      let l;
      if (typeof a != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
          c[d - 2] = arguments[d];
        l = i.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const f = i.options.keySeparator || ".";
      let g;
      return l.keyPrefix && Array.isArray(s) ? g = s.map((y) => `${l.keyPrefix}${f}${y}`) : g = l.keyPrefix ? `${l.keyPrefix}${f}${s}` : s, i.t(g, l);
    };
    return typeof t == "string" ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)));
  }
  loadNamespaces(t, n) {
    const r = nr();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = nr();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [], o = t.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new rc(sc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new zr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new zr(i);
    return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new tc(this.store.data, i), o.services.resourceStore = o.store), o.translator = new ho(o.services, i), o.translator.on("*", function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      o.emit(a, ...u);
    }), o.init(i, n), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const de = zr.createInstance();
de.createInstance = zr.createInstance;
de.createInstance;
de.dir;
de.init;
de.loadResources;
de.reloadResources;
de.use;
de.changeLanguage;
de.getFixedT;
de.t;
de.exists;
de.setDefaultNamespace;
de.hasLoadedNamespace;
de.loadNamespaces;
de.loadLanguages;
async function ae(e, t = {}) {
  typeof e == "object" ? t = e : typeof e == "string" && (t.url = e), t.headers || (t.headers = {}), t.body && !(t.body instanceof FormData) && (t.headers["Content-Type"] = "application/json", t.body = JSON.stringify(t.body));
  let n = window.TOKEN || sessionStorage.getItem("TOKEN");
  n || (n = localStorage.getItem("TOKEN")), n && (t.headers.Authorization = `Bearer ${n}`);
  let r = window.serverURL;
  if (!r) {
    const l = location.pathname.match(/(.*?\/)ui/);
    r = l ? l[1] : "/";
  }
  const i = t.url.includes("?") ? "&" : "?", o = await fetch(
    `${r}${t.url}${i}lang=${de.language}`,
    t
  );
  if (!o.ok) {
    if (o.status === 401)
      throw new Error(401);
    let l;
    try {
      l = await o.json();
    } catch {
    }
    throw new Error(`${o.status}: ${(l == null ? void 0 : l.errmsg) || o.statusText}`);
  }
  const s = await o.json();
  if (s.errno !== 0)
    throw new Error(s.errmsg);
  return { __version: o.headers.get("x-waline-version"), ...s.data };
}
function Ty(e) {
  const t = e ? `?email=${encodeURIComponent(e)}` : "";
  return ae({ url: "token/2fa" + t, method: "GET" });
}
function Iy(e) {
  return ae({ url: "user", method: "PUT", body: e });
}
function $y({ page: e }) {
  return ae({
    url: `user?page=${e}`,
    method: "GET"
  });
}
function ms({ id: e, ...t }) {
  return ae({ url: `user/${e}`, method: "PUT", body: t });
}
function _y() {
  const { t: e } = Dt(), t = Yr(), n = Gr(), r = zt((h) => h.user), [i, o] = C.useState(!1), [s, a] = C.useState(!1), [l, u] = C.useState(!1), c = ip({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), d = location.pathname.match(/(.*?\/)ui/), f = d && d[1] ? d[1] : "/";
  C.useEffect(() => {
    if (!r || !r.email)
      return;
    const h = new URLSearchParams(location.search), m = r.type === "administrator", w = m ? "/ui/profile" : "/ui", v = m && h.get("redirect") ? h.get("redirect") : w;
    console.log(v), n(v.replace(/\/+/g, "/"));
  }, [r]);
  const g = async function(h) {
    h.preventDefault(), a(!1), o(!0);
    const m = h.target.email.value, w = h.target.password.value, v = h.target.code ? h.target.code.value : "", E = h.target.remember.checked;
    if (!m)
      return a(e("please input email"));
    if (!w)
      return a(e("please input password"));
    if (h.target.code && !v)
      return a(e("please input 2fa code"));
    const k = await c("login");
    try {
      await t.user.login({
        email: m,
        password: w,
        code: v,
        remember: E,
        recaptchaV3: window.recaptchaV3Key ? k : void 0,
        turnstile: window.turnstileKey ? k : void 0
      });
    } catch {
      a(e("email or password error"));
    } finally {
      o(!1);
    }
  }, y = async (h) => {
    const m = h.target.value;
    if (!m)
      return;
    const w = await Ty(m);
    u(w.enable);
  };
  let x = window.serverURL;
  if (!x) {
    const h = location.pathname.match(/(.*?\/)ui/);
    x = h ? h[1] : "/";
  }
  const S = ["google"];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: s ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: s ? /* @__PURE__ */ p.jsx("li", { children: s }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: g, style: { minWidth: "300px" }, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100",
              onBlur: y
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        l && /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "code", className: "sr-only", children: e("2fa code") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "code",
              name: "code",
              className: "text-l w-100",
              placeholder: e("2fa code")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            className: "btn btn-l w-100 primary",
            disabled: i,
            children: e("login")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ p.jsxs("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "checkbox",
                name: "remember",
                className: "checkbox",
                id: "remember"
              }
            ),
            " ",
            e("remember me")
          ] }),
          /* @__PURE__ */ p.jsx("span", { className: "right forgot-password", children: /* @__PURE__ */ p.jsx(be, { to: "/ui/forgot", children: e("forgot password") }) })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "social-accounts", children: (window.ALLOW_SOCIALS || S).map((h) => /* @__PURE__ */ p.jsx(
        "a",
        {
          href: `${x}oauth${window.ALLOW_SOCIALS ? "/" + h + "?" : `?type=${h}`}&redirect=${f}ui/profile`,
          children: vo.createElement(ry[h])
        },
        h
      )) }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(be, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(be, { to: "/ui/register", children: e("register") })
      ] })
    ] }) })
  ] });
}
var lp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var a in o)
        t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(lp);
var My = lp.exports;
const ml = /* @__PURE__ */ mo(My);
var ap = { exports: {} }, up = { exports: {} };
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
    // Bit-wise rotation left
    rotl: function(n, r) {
      return n << r | n >>> 32 - r;
    },
    // Bit-wise rotation right
    rotr: function(n, r) {
      return n << 32 - r | n >>> r;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number)
        return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
      for (var r = 0; r < n.length; r++)
        n[r] = t.endian(n[r]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var r = []; n > 0; n--)
        r.push(Math.floor(Math.random() * 256));
      return r;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(n) {
      for (var r = [], i = 0, o = 0; i < n.length; i++, o += 8)
        r[o >>> 5] |= n[i] << 24 - o % 32;
      return r;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(n) {
      for (var r = [], i = 0; i < n.length * 32; i += 8)
        r.push(n[i >>> 5] >>> 24 - i % 32 & 255);
      return r;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(n) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push((n[i] >>> 4).toString(16)), r.push((n[i] & 15).toString(16));
      return r.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(n) {
      for (var r = [], i = 0; i < n.length; i += 2)
        r.push(parseInt(n.substr(i, 2), 16));
      return r;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(n) {
      for (var r = [], i = 0; i < n.length; i += 3)
        for (var o = n[i] << 16 | n[i + 1] << 8 | n[i + 2], s = 0; s < 4; s++)
          i * 8 + s * 6 <= n.length * 8 ? r.push(e.charAt(o >>> 6 * (3 - s) & 63)) : r.push("=");
      return r.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(n) {
      n = n.replace(/[^A-Z0-9+\/]/ig, "");
      for (var r = [], i = 0, o = 0; i < n.length; o = ++i % 4)
        o != 0 && r.push((e.indexOf(n.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(n.charAt(i)) >>> 6 - o * 2);
      return r;
    }
  };
  up.exports = t;
})();
var Fy = up.exports, gl = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return gl.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(gl.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(e.charCodeAt(n) & 255);
      return t;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
      return t.join("");
    }
  }
}, ac = gl;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var by = function(e) {
  return e != null && (cp(e) || Ay(e) || !!e._isBuffer);
};
function cp(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Ay(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && cp(e.slice(0, 0));
}
(function() {
  var e = Fy, t = ac.utf8, n = by, r = ac.bin, i = function(o, s) {
    o.constructor == String ? s && s.encoding === "binary" ? o = r.stringToBytes(o) : o = t.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
    for (var a = e.bytesToWords(o), l = o.length * 8, u = 1732584193, c = -271733879, d = -1732584194, f = 271733878, g = 0; g < a.length; g++)
      a[g] = (a[g] << 8 | a[g] >>> 24) & 16711935 | (a[g] << 24 | a[g] >>> 8) & 4278255360;
    a[l >>> 5] |= 128 << l % 32, a[(l + 64 >>> 9 << 4) + 14] = l;
    for (var y = i._ff, x = i._gg, S = i._hh, h = i._ii, g = 0; g < a.length; g += 16) {
      var m = u, w = c, v = d, E = f;
      u = y(u, c, d, f, a[g + 0], 7, -680876936), f = y(f, u, c, d, a[g + 1], 12, -389564586), d = y(d, f, u, c, a[g + 2], 17, 606105819), c = y(c, d, f, u, a[g + 3], 22, -1044525330), u = y(u, c, d, f, a[g + 4], 7, -176418897), f = y(f, u, c, d, a[g + 5], 12, 1200080426), d = y(d, f, u, c, a[g + 6], 17, -1473231341), c = y(c, d, f, u, a[g + 7], 22, -45705983), u = y(u, c, d, f, a[g + 8], 7, 1770035416), f = y(f, u, c, d, a[g + 9], 12, -1958414417), d = y(d, f, u, c, a[g + 10], 17, -42063), c = y(c, d, f, u, a[g + 11], 22, -1990404162), u = y(u, c, d, f, a[g + 12], 7, 1804603682), f = y(f, u, c, d, a[g + 13], 12, -40341101), d = y(d, f, u, c, a[g + 14], 17, -1502002290), c = y(c, d, f, u, a[g + 15], 22, 1236535329), u = x(u, c, d, f, a[g + 1], 5, -165796510), f = x(f, u, c, d, a[g + 6], 9, -1069501632), d = x(d, f, u, c, a[g + 11], 14, 643717713), c = x(c, d, f, u, a[g + 0], 20, -373897302), u = x(u, c, d, f, a[g + 5], 5, -701558691), f = x(f, u, c, d, a[g + 10], 9, 38016083), d = x(d, f, u, c, a[g + 15], 14, -660478335), c = x(c, d, f, u, a[g + 4], 20, -405537848), u = x(u, c, d, f, a[g + 9], 5, 568446438), f = x(f, u, c, d, a[g + 14], 9, -1019803690), d = x(d, f, u, c, a[g + 3], 14, -187363961), c = x(c, d, f, u, a[g + 8], 20, 1163531501), u = x(u, c, d, f, a[g + 13], 5, -1444681467), f = x(f, u, c, d, a[g + 2], 9, -51403784), d = x(d, f, u, c, a[g + 7], 14, 1735328473), c = x(c, d, f, u, a[g + 12], 20, -1926607734), u = S(u, c, d, f, a[g + 5], 4, -378558), f = S(f, u, c, d, a[g + 8], 11, -2022574463), d = S(d, f, u, c, a[g + 11], 16, 1839030562), c = S(c, d, f, u, a[g + 14], 23, -35309556), u = S(u, c, d, f, a[g + 1], 4, -1530992060), f = S(f, u, c, d, a[g + 4], 11, 1272893353), d = S(d, f, u, c, a[g + 7], 16, -155497632), c = S(c, d, f, u, a[g + 10], 23, -1094730640), u = S(u, c, d, f, a[g + 13], 4, 681279174), f = S(f, u, c, d, a[g + 0], 11, -358537222), d = S(d, f, u, c, a[g + 3], 16, -722521979), c = S(c, d, f, u, a[g + 6], 23, 76029189), u = S(u, c, d, f, a[g + 9], 4, -640364487), f = S(f, u, c, d, a[g + 12], 11, -421815835), d = S(d, f, u, c, a[g + 15], 16, 530742520), c = S(c, d, f, u, a[g + 2], 23, -995338651), u = h(u, c, d, f, a[g + 0], 6, -198630844), f = h(f, u, c, d, a[g + 7], 10, 1126891415), d = h(d, f, u, c, a[g + 14], 15, -1416354905), c = h(c, d, f, u, a[g + 5], 21, -57434055), u = h(u, c, d, f, a[g + 12], 6, 1700485571), f = h(f, u, c, d, a[g + 3], 10, -1894986606), d = h(d, f, u, c, a[g + 10], 15, -1051523), c = h(c, d, f, u, a[g + 1], 21, -2054922799), u = h(u, c, d, f, a[g + 8], 6, 1873313359), f = h(f, u, c, d, a[g + 15], 10, -30611744), d = h(d, f, u, c, a[g + 6], 15, -1560198380), c = h(c, d, f, u, a[g + 13], 21, 1309151649), u = h(u, c, d, f, a[g + 4], 6, -145523070), f = h(f, u, c, d, a[g + 11], 10, -1120210379), d = h(d, f, u, c, a[g + 2], 15, 718787259), c = h(c, d, f, u, a[g + 9], 21, -343485551), u = u + m >>> 0, c = c + w >>> 0, d = d + v >>> 0, f = f + E >>> 0;
    }
    return e.endian([u, c, d, f]);
  };
  i._ff = function(o, s, a, l, u, c, d) {
    var f = o + (s & a | ~s & l) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._gg = function(o, s, a, l, u, c, d) {
    var f = o + (s & l | a & ~l) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._hh = function(o, s, a, l, u, c, d) {
    var f = o + (s ^ a ^ l) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._ii = function(o, s, a, l, u, c, d) {
    var f = o + (a ^ (s | ~l)) + (u >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._blocksize = 16, i._digestsize = 16, ap.exports = function(o, s) {
    if (o == null)
      throw new Error("Illegal argument " + o);
    var a = e.wordsToBytes(i(o, s));
    return s && s.asBytes ? a : s && s.asString ? r.bytesToString(a) : e.bytesToHex(a);
  };
})();
var zy = ap.exports;
const Dy = /* @__PURE__ */ mo(zy);
function dp(e = "", t = "") {
  return t || (typeof e != "string" && (e = ""), `https://sdn.geekzu.org/avatar/${Dy(e)}?s=40&r=G&d=`);
}
function Uy(e) {
  return window.SITE_URL ? window.SITE_URL + e : e;
}
function By(e) {
  let t;
  typeof e == "number" ? t = new Date(e) : t = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(e) ? e.replace(/-/g, "/") : e
  );
  const n = (o) => o < 10 ? "0" + o : o, r = [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-"), i = [t.getHours(), t.getMinutes(), t.getSeconds()].map(n).join(":");
  return r + " " + i;
}
function fp({ current: e, total: t, onChange: n }) {
  return t < 1 ? null : /* @__PURE__ */ p.jsxs("ul", { className: "typecho-pager", children: [
    e > 1 ? /* @__PURE__ */ p.jsx("li", { className: "prev", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e - 1), children: "«" }) }) : null,
    e > 4 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(1), children: "1" }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) })
    ] }) : null,
    [
      e - 3,
      e - 2,
      e - 1,
      e,
      e + 1,
      e + 2,
      e + 3
    ].filter((r) => r > 0 && r <= t).map((r) => /* @__PURE__ */ p.jsx("li", { className: ml({ current: r === e }), children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(r), children: r }) }, r)),
    e < t - 3 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(t), children: t }) })
    ] }) : null,
    e < t ? /* @__PURE__ */ p.jsx("li", { className: "next", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e + 1), children: "»" }) }) : null
  ] });
}
async function rr({ page: e = 1, filter: t }) {
  return ae({
    url: `comment?type=list&owner=${t.owner}&status=${t.status}&keyword=${t.keyword}&page=${e}`,
    method: "GET"
  });
}
async function mt(e, t) {
  return ae({
    url: `comment/${e}`,
    method: "PUT",
    body: t
  });
}
async function Vy(e) {
  return ae({
    url: "comment",
    method: "POST",
    body: e
  });
}
async function uc(e) {
  return ae({
    url: `comment/${e}`,
    method: "DELETE"
  });
}
function Hy() {
  const { t: e } = Dt(), t = C.useRef(null), n = C.useRef(null), r = C.useRef({}), i = zt((v) => v.user), [o, s] = C.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [a, l] = C.useReducer(
    function(v, E) {
      return { ...v, ...E };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [u, c] = C.useState({}), [d, f] = C.useState(!1), [g, y] = C.useState([]), x = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ p.jsx(hn, { i18nKey: "all" }) },
        { type: "mine", name: /* @__PURE__ */ p.jsx(hn, { i18nKey: "mine" }) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ p.jsx(hn, { i18nKey: "approved" }) },
        { type: "waiting", name: /* @__PURE__ */ p.jsx(hn, { i18nKey: "waiting" }) },
        { type: "spam", name: /* @__PURE__ */ p.jsx(hn, { i18nKey: "spam" }) }
      ]
    ]
  ];
  C.useEffect(() => {
    rr({ page: o.page, filter: a }).then((v) => {
      s({ ...o, ...v }), y([]);
    });
  }, [a, o.page]);
  const S = (v) => [
    {
      key: "approved",
      name: e("approved button"),
      show: !0,
      disable: v && v.status === "approved",
      async action() {
        if (v) {
          switch (await mt(v.objectId, { status: "approved" }), o.data = o.data.filter(
            ({ objectId: E }) => E !== v.objectId
          ), v.status) {
            case "waiting":
              o.waitingCount -= 1;
              break;
            case "spam":
              o.spamCount -= 1;
              break;
          }
          s({ ...o });
        } else
          await Promise.all(
            g.map(
              (E) => mt(E, { status: "approved" })
            )
          ), rr({ page: o.page, filter: a }).then((E) => {
            s({ ...o, ...E }), y([]);
          });
      }
    },
    {
      key: "waiting",
      name: e("waiting"),
      show: !0,
      disable: v && v.status === "waiting",
      async action() {
        v ? (await mt(v.objectId, { status: "waiting" }), o.data = o.data.filter(
          ({ objectId: E }) => E !== v.objectId
        ), v.status === "spam" && (o.spamCount -= 1), o.waitingCount += 1, s({ ...o })) : (await Promise.all(
          g.map(
            (E) => mt(E, { status: "waiting" })
          )
        ), rr({ page: o.page, filter: a }).then((E) => {
          s({ ...o, ...E }), y([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: e(v ? "spam" : "mark as spam"),
      disable: v && v.status === "spam",
      async action() {
        v ? (await mt(v.objectId, { status: "spam" }), o.data = o.data.filter(
          ({ objectId: E }) => E !== v.objectId
        ), o.spamCount += 1, s({ ...o })) : (await Promise.all(
          g.map(
            (E) => mt(E, { status: "spam" })
          )
        ), rr({ page: o.page, filter: a }).then((E) => {
          s({ ...o, ...E }), y([]);
        }));
      }
    },
    {
      key: "sticky",
      show: v && !v.rid && v.status === "approved",
      name: v && v.sticky ? e("disable sticky") : e("sticky"),
      async action(E) {
        E.preventDefault();
        const k = !v.sticky;
        o.data.forEach((N) => {
          N.objectId === v.objectId && (N.sticky = k);
        }), await mt(v.objectId, { sticky: k ? 1 : 0 }), s({ ...o });
      }
    },
    {
      key: "edit",
      show: v,
      name: e("edit"),
      action() {
        const E = {};
        u.id !== v.objectId && u.action !== "edit" && (E.id = v.objectId, E.action = "edit"), c(E);
      }
    },
    {
      key: "reply",
      show: v && v.status === "approved",
      name: e("reply"),
      action() {
        const E = {};
        u.id !== v.objectId && u.action !== "reply" && (E.id = v.objectId, E.action = "reply"), c(E);
      }
    },
    {
      key: "delete",
      name: e("delete"),
      show: !0,
      async action() {
        const E = v ? e("delete one confirm", { nick: v.nick }) : e("delete multiple confirm");
        confirm(E) && (v ? (await uc(v.objectId), o.data = o.data.filter(
          ({ objectId: k }) => k !== v.objectId
        ), s({ ...o })) : (await Promise.all(g.map(uc)), rr({ page: o.page, filter: a }).then((k) => {
          s({ ...o, ...k }), y([]);
        })));
      }
    }
  ].filter(({ show: E }) => E), h = async ({ pid: v, rid: E, url: k, at: N }) => {
    const L = n.current.value;
    if (!L)
      return null;
    const { display_name: $, email: O, url: A } = i;
    await Vy({
      nick: $,
      mail: O,
      ua: navigator.userAgent,
      link: A,
      url: k,
      comment: L,
      pid: v,
      rid: E || v,
      at: N
    }), location.reload();
  }, m = async (v) => {
    const E = o.data[v];
    await mt(E.objectId, r.current), o.data[v] = { ...E, ...r.current }, s({ ...o }), c({});
  }, w = o.data.length && o.data.every(({ objectId: v }) => g.includes(v));
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: e("manage comments") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx("div", { className: "clear-fix", children: x.map(([v, E]) => /* @__PURE__ */ p.jsx(
          "ul",
          {
            className: ml("typecho-option-tabs", {
              right: v === "owner"
            }),
            children: E.map(({ type: k, name: N }) => /* @__PURE__ */ p.jsx(
              "li",
              {
                className: ml({ current: k === a[v] }),
                children: /* @__PURE__ */ p.jsxs(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => l({ [v]: k }),
                    children: [
                      N,
                      v === "status" && k !== "approved" && o[`${k}Count`] > 0 ? /* @__PURE__ */ p.jsx("span", { className: "balloon", children: o[`${k}Count`] }) : null
                    ]
                  }
                )
              },
              k
            ))
          },
          v
        )) }),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsxs("form", { method: "get", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
            /* @__PURE__ */ p.jsxs("label", { children: [
              /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("select all") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: w,
                  onChange: () => y(
                    w ? [] : o.data.map(({ objectId: v }) => v)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => f(!d),
                  children: [
                    /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("action") }),
                    e("selected items"),
                    " ",
                    /* @__PURE__ */ p.jsx("i", { className: "i-caret-down" })
                  ]
                }
              ),
              /* @__PURE__ */ p.jsx(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: d ? "block" : "none" },
                  onClick: () => f(!1),
                  children: S().map(({ key: v, name: E, action: k }) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "javascript:void(0)", onClick: k, children: E }) }, v))
                }
              ),
              " "
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                ref: t,
                className: "text-s",
                placeholder: e("please input keywords")
              }
            ),
            " ",
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (v) => {
                  v.preventDefault(), l({ keyword: t.current.value });
                },
                children: e("filter")
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "3%" }),
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "71%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: e("author") }),
                /* @__PURE__ */ p.jsx("th", { children: e("content") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: o.data.map(
                ({
                  objectId: v,
                  nick: E,
                  mail: k,
                  avatar: N,
                  link: L,
                  comment: $,
                  ip: O,
                  addr: A,
                  url: ee,
                  status: fe,
                  rid: ye,
                  pid: H,
                  sticky: Xe,
                  time: pt,
                  insertedAt: P
                }, I) => u.id === v && u.action === "edit" ? /* @__PURE__ */ p.jsxs("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ p.jsx("td", { children: " " }),
                  /* @__PURE__ */ p.jsx("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "label",
                        {
                          htmlFor: `comment-${v}-author`,
                          children: e("username")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${v}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: E,
                          onChange: (T) => r.current.nick = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${v}-mail`, children: e("email") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${v}-mail`,
                          defaultValue: k,
                          onChange: (T) => r.current.mail = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${v}-url`, children: e("homepage") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${v}-author`,
                          defaultValue: L,
                          onChange: (T) => r.current.link = T.target.value
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${v}-text`, children: e("content") }),
                      /* @__PURE__ */ p.jsx(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${v}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: $,
                          onChange: (T) => r.current.comment = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => m(I),
                          children: e("submit")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => c({}),
                          children: e("cancel")
                        }
                      )
                    ] })
                  ] }) })
                ] }, v) : /* @__PURE__ */ p.jsxs("tr", { id: `comment-${v}`, children: [
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: v,
                      checked: g.includes(v),
                      onChange: () => y(
                        g.includes(v) ? g.filter(
                          (T) => T !== v
                        ) : [...g, v]
                      )
                    }
                  ) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "comment-avatar", children: /* @__PURE__ */ p.jsx(
                    "img",
                    {
                      className: "avatar",
                      src: dp(k, N),
                      alt: E,
                      width: "40",
                      height: "40"
                    }
                  ) }) }),
                  /* @__PURE__ */ p.jsx(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ p.jsxs("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ p.jsx("strong", { className: "comment-author", children: L ? /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: /^https:\/\//.test(L) ? L : "https://" + L,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: E
                          }
                        ) : E }),
                        /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: `mailto:${k}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: k
                          }
                        ) }),
                        k && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: O }),
                        O && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: A })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "comment-date", children: [
                          By(P || pt),
                          " ",
                          e("at"),
                          " ",
                          /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: Uy(ee),
                              target: "_blank",
                              rel: "noreferrer",
                              children: ee
                            }
                          )
                        ] }),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: $ }
                          }
                        ),
                        u.id === v && u.action === "reply" ? /* @__PURE__ */ p.jsxs("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx("label", { htmlFor: "text", className: "sr-only", children: e("content") }),
                            /* @__PURE__ */ p.jsx(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: n
                              }
                            )
                          ] }),
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (T) => {
                                  T.preventDefault(), h({
                                    rid: ye,
                                    pid: v,
                                    url: ee,
                                    at: E
                                  });
                                },
                                children: e("reply")
                              }
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => c({}),
                                children: e("cancel")
                              }
                            )
                          ] })
                        ] }) : null,
                        /* @__PURE__ */ p.jsx("div", { className: "comment-action hidden-by-mouse", children: S({
                          objectId: v,
                          nick: E,
                          status: fe,
                          rid: ye,
                          pid: H,
                          sticky: Xe
                        }).map(
                          ({ key: T, disable: D, name: G, action: un }) => D ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: G }, T) : /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${T}`,
                              onClick: un,
                              children: G
                            },
                            T
                          )
                        ) })
                      ]
                    }
                  )
                ] }, v)
              ) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          fp,
          {
            current: o.page,
            total: o.totalPages,
            onChange: (v) => s({ ...o, page: v })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function Ky(e, t, n) {
  const r = new Blob([e], { type: n }), i = document.createElement("a"), o = URL.createObjectURL(r);
  i.href = o, i.download = t, document.body.appendChild(i), i.click(), setTimeout(() => {
    document.body.removeChild(i), window.URL.revokeObjectURL(o);
  }, 0);
}
function Wy(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = (i) => t(i.target.result), r.onerror = n, r.readAsText(e);
  });
}
function Qy() {
  const [e, t] = C.useState(!1), [n, r] = C.useState(!1), { t: i } = Dt(), o = C.useRef(null), s = () => {
    confirm(i("import clear data confirm")) && o.current.click();
  }, a = async (u) => {
    try {
      const c = await Wy(u.target.files[0]), d = JSON.parse(c);
      if (!d || d.type !== "waline")
        return alert("import data format not support!");
      const f = d.tables.reduce(
        (h, m) => {
          var w;
          return h + (((w = d.data[m]) == null ? void 0 : w.length) || 0);
        },
        0
      );
      let g = 0;
      t([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: g, maxLength: f }
      ]);
      const y = {};
      for (const h of d.tables) {
        const m = d.data[h];
        if (h !== "Users" && await ae({
          url: "db?table=" + h,
          method: "DELETE"
        }), y[h] || (y[h] = {}), !!Array.isArray(m))
          for (const w of m) {
            let v = !1;
            if (h === "Users") {
              const $ = await ae("user?email=" + w.email);
              $.objectId && (v = $.objectId);
            }
            const k = h == "Users" && v ? "PUT" : "POST", N = h === "Comment" ? Object.assign({}, w, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : w;
            for (const $ in N)
              (N[$] === null || N[$] === void 0) && delete N[$];
            const L = await ae({
              url: `db?table=${h}${k === "PUT" ? `&objectId=${v}` : ""}`,
              method: k,
              body: N
            });
            y[h][w.objectId] = L.objectId, g += 1, t([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: g, maxLength: f }
            ]);
          }
      }
      t(["comment data index relationship reconstruction"]);
      const x = d.data.Comment, S = [];
      for (const h of x) {
        const m = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: w, field: v }) => {
          if (!h[v])
            return;
          const E = h[v], k = y[w][h[v]];
          E && k && E !== k && (m[v] = k);
        }), Object.keys(m).length && S.push([
          m,
          { objectId: y.Comment[h.objectId] }
        ]);
      }
      g = 0;
      for (const [h, m] of S)
        await ae({
          url: `db?table=Comment&objectId=${m.objectId}`,
          method: "PUT",
          body: h
        }), g += 1, t([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: g, maxLength: S.length }
        ]);
      alert(i("import success")), location.reload();
    } catch (c) {
      throw console.log(c), alert(c.message), c;
    } finally {
      t(!1), u.target.value = null;
    }
  }, l = async () => {
    r(!0);
    try {
      const u = await ae("db");
      Ky(
        JSON.stringify(u, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("migration") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsx("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ p.jsx(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: l,
            disabled: n,
            children: i(n ? "exporting" : "export")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: s,
              disabled: e,
              children: Array.isArray(e) ? i(...e) : i("import")
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              ref: o,
              onChange: a,
              type: "file",
              style: { display: "none" }
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
class Ln {
  constructor(t, n, r) {
    nt(this, "x");
    nt(this, "y");
    nt(this, "scale");
    this.x = t, this.y = n, this.scale = r;
  }
  toString() {
    return "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
  }
  static parse(t) {
    var r = t.style.transform.split(") "), i = r[0].substring(10).split(","), o = r.length > 1 ? r[1].substring(6) : "1", s = i.length > 1 ? i[0] : "0", a = i.length > 1 ? i[1] : "0";
    return new Ln(parseFloat(s), parseFloat(a), parseFloat(o));
  }
}
class yi {
  constructor(t) {
    nt(this, "x");
    nt(this, "y");
    if (!t || !t.style.transformOrigin) {
      this.x = 0, this.y = 0;
      return;
    }
    var n = t.style.transformOrigin.split(" ");
    this.x = parseFloat(n[0]), this.y = parseFloat(n[1]);
  }
  toString() {
    return this.x + "px " + this.y + "px";
  }
}
function Yy(e, t) {
  let n = 0;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => e(...r), t);
  };
}
function vl(e, t) {
  return e.toFixed(t);
}
function Xy(e, t) {
  const n = parseFloat(t.min), r = parseFloat(t.max);
  t.value = vl(Math.max(n, Math.min(r, e)), 3);
}
function Gy(e) {
  var t = new Image();
  return new Promise(function(n, r) {
    t.onload = () => {
      n(t);
    }, t.onerror = r, t.src = e;
  });
}
function cc() {
  return {
    boundary: document.createElement("div"),
    viewport: document.createElement("div"),
    preview: document.createElement("img"),
    overlay: document.createElement("div"),
    zoomerWrap: document.createElement("div"),
    zoomer: document.createElement("input")
  };
}
function Jy(e) {
  return e === "ArrowLeft" ? [2, 0] : e === "ArrowUp" ? [0, 2] : e === "ArrowRight" ? [-2, 0] : [0, -2];
}
function Zy() {
  return document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
}
var Mn, me, Fn, Ur, _, pp, yl, hp, mp, gp, wl, vp, yp, wp, xp, xl, Fi, Sp, Sl, El, kl, Ep, kp;
class qy {
  constructor(t, n) {
    cn(this, _);
    nt(this, "element");
    nt(this, "elements");
    nt(this, "options", {
      mouseWheelZoom: "on",
      viewport: {
        width: 220,
        height: 220,
        type: "square"
      },
      zoomerInputClass: "cr-slider"
    });
    cn(this, Mn, null);
    cn(this, me, 1);
    cn(this, Fn, null);
    cn(this, Ur, Yy(() => {
      z(this, _, Sl).call(this);
    }, 200));
    if (t.classList.contains("cropt-container"))
      throw new Error("Cropt is already initialized on this element");
    n.viewport && (n.viewport = { ...this.options.viewport, ...n.viewport }), this.options = { ...this.options, ...n }, this.element = t, this.element.classList.add("cropt-container"), this.elements = cc(), this.elements.zoomerWrap.classList.add("cr-slider-wrap"), this.elements.boundary.classList.add("cr-boundary"), this.elements.viewport.classList.add("cr-viewport"), this.elements.overlay.classList.add("cr-overlay"), this.elements.viewport.setAttribute("tabindex", "0"), z(this, _, xl).call(this, this.elements.preview), this.elements.boundary.appendChild(this.elements.preview), this.elements.boundary.appendChild(this.elements.viewport), this.elements.boundary.appendChild(this.elements.overlay), this.elements.zoomer.type = "range", this.elements.zoomer.step = "0.001", this.elements.zoomer.value = "1", this.elements.zoomer.setAttribute("aria-label", "zoom"), this.element.appendChild(this.elements.boundary), this.element.appendChild(this.elements.zoomerWrap), this.elements.zoomerWrap.appendChild(this.elements.zoomer), z(this, _, yl).call(this), z(this, _, vp).call(this), z(this, _, yp).call(this);
  }
  /**
   * Bind an image from an src string.
   * Returns a Promise which resolves when the image has been loaded and state is initialized.
   */
  bind(t, n = null) {
    if (!t)
      throw new Error("src cannot be empty");
    return Zr(this, Mn, n), Gy(t).then((r) => {
      z(this, _, xp).call(this, r), z(this, _, El).call(this);
    });
  }
  /**
   * Returns a Promise resolving to an HTMLCanvasElement object for the cropped image.
   * If size is specified, the image will be scaled with its longest side set to size.
   */
  toCanvas(t = null) {
    var n = this.elements.viewport.getBoundingClientRect(), r = n.width / n.height, i = z(this, _, pp).call(this), o = i.right - i.left, s = i.bottom - i.top;
    return t !== null && (r > 1 ? (o = t, s = t / r) : (s = t, o = t * r)), Promise.resolve(z(this, _, mp).call(this, i, o, s));
  }
  toBlob(t = null, n = "image/webp", r = 1) {
    return n === "image/webp" && r < 1 && !Zy() && (n = "image/jpeg"), new Promise((i, o) => {
      this.toCanvas(t).then((s) => {
        s.toBlob((a) => {
          a === null ? o("Canvas blob is null") : i(a);
        }, n, r);
      });
    });
  }
  refresh() {
    z(this, _, El).call(this);
  }
  setOptions(t) {
    const n = this.options.viewport.width, r = this.options.viewport.height;
    t.viewport && (t.viewport = { ...this.options.viewport, ...t.viewport }), this.options = { ...this.options, ...t }, z(this, _, yl).call(this), (this.options.viewport.width !== n || this.options.viewport.height !== r) && this.refresh();
  }
  setZoom(t) {
    Xy(t, this.elements.zoomer);
    var n = new Event("input");
    this.elements.zoomer.dispatchEvent(n);
  }
  destroy() {
    te(this, Fn) && document.removeEventListener("keydown", te(this, Fn)), this.element.removeChild(this.elements.boundary), this.element.classList.remove("cropt-container"), this.element.removeChild(this.elements.zoomerWrap), this.elements = cc();
  }
}
Mn = new WeakMap(), me = new WeakMap(), Fn = new WeakMap(), Ur = new WeakMap(), _ = new WeakSet(), pp = function() {
  var t = this.elements.preview.getBoundingClientRect(), n = this.elements.viewport.getBoundingClientRect(), r = n.left - t.left, i = n.top - t.top, o = (n.width - this.elements.viewport.offsetWidth) / 2, s = (n.height - this.elements.viewport.offsetHeight) / 2, a = r + this.elements.viewport.offsetWidth + o, l = i + this.elements.viewport.offsetHeight + s;
  return r = Math.max(0, r / te(this, me)), i = Math.max(0, i / te(this, me)), a = Math.max(0, a / te(this, me)), l = Math.max(0, l / te(this, me)), {
    left: Math.round(r),
    top: Math.round(i),
    right: Math.round(a),
    bottom: Math.round(l)
  };
}, yl = function() {
  this.elements.zoomer.className = this.options.zoomerInputClass;
  const t = "cr-vp-circle", n = this.elements.viewport;
  this.options.viewport.type === "circle" ? n.classList.add(t) : n.classList.remove(t), n.style.width = this.options.viewport.width + "px", n.style.height = this.options.viewport.height + "px";
}, hp = function(t) {
  var n = t.right - t.left, r = t.bottom - t.top, i = document.createElement("canvas"), o = i.getContext("2d");
  if (o === null)
    throw new Error("Canvas context cannot be null");
  return i.width = n, i.height = r, o.drawImage(this.elements.preview, t.left, t.top, n, r, 0, 0, i.width, i.height), i;
}, mp = function(t, n, r) {
  var i = z(this, _, hp).call(this, t), o = i.getContext("2d"), s = document.createElement("canvas"), a = s.getContext("2d"), l = document.createElement("canvas"), u = l.getContext("2d");
  if (l.width = n, l.height = r, u === null || o === null || a === null)
    throw new Error("Canvas context cannot be null");
  for (var c = {
    width: i.width,
    height: i.height
  }; c.width * 0.5 > l.width; ) {
    let d = c.width, f = c.height;
    c = {
      width: Math.floor(c.width * 0.5),
      height: Math.floor(c.height * 0.5)
    }, s.width = d, s.height = f, a.clearRect(0, 0, s.width, s.height), a.drawImage(i, 0, 0), o.clearRect(0, 0, d, f), o.drawImage(s, 0, 0, d, f, 0, 0, c.width, c.height);
  }
  return u.drawImage(i, 0, 0, c.width, c.height, 0, 0, l.width, l.height), l;
}, gp = function() {
  var t = te(this, me), n = this.elements.viewport.getBoundingClientRect(), r = n.width, i = n.height, o = this.elements.boundary.clientWidth / 2, s = this.elements.boundary.clientHeight / 2, a = this.elements.preview.getBoundingClientRect(), l = a.width, u = a.height, c = r / 2, d = i / 2, f = (c / t - o) * -1, g = f - (l * (1 / t) - r * (1 / t)), y = (d / t - s) * -1, x = y - (u * (1 / t) - i * (1 / t)), S = 1 / t * c, h = l * (1 / t) - S, m = 1 / t * d, w = u * (1 / t) - m;
  return {
    translate: {
      maxX: f,
      minX: g,
      maxY: y,
      minY: x
    },
    origin: {
      maxX: h,
      minX: S,
      maxY: w,
      minY: m
    }
  };
}, wl = function(t, n) {
  const r = this.elements.preview.getBoundingClientRect(), i = this.elements.viewport.getBoundingClientRect(), o = Ln.parse(this.elements.preview);
  i.top > r.top + n && i.bottom < r.bottom + n && (o.y = o.y + n), i.left > r.left + t && i.right < r.right + t && (o.x = o.x + t), z(this, _, kl).call(this, o), te(this, Ur).call(this);
}, vp = function() {
  let t = 0, n = 0, r = [], i = 0, o = (u) => {
    u.preventDefault();
    const c = r.findIndex((d) => d.pointerId === u.pointerId);
    if (c !== -1) {
      if (r[c] = u, r.length === 2) {
        let d = r[0], f = r[1], g = Math.sqrt((d.pageX - f.pageX) * (d.pageX - f.pageX) + (d.pageY - f.pageY) * (d.pageY - f.pageY));
        i === 0 && (i = g / te(this, me)), this.setZoom(g / i);
        return;
      } else if (i !== 0)
        return;
      z(this, _, wl).call(this, u.pageX - t, u.pageY - n), t = u.pageX, n = u.pageY;
    }
  }, s = (u) => {
    const c = r.findIndex((d) => d.pointerId === u.pointerId);
    c !== -1 && r.splice(c, 1), r.length === 0 && (this.elements.overlay.removeEventListener("pointermove", o), this.elements.overlay.removeEventListener("pointerup", s), this.elements.overlay.removeEventListener("pointerout", s), z(this, _, Fi).call(this, !1, this.elements.preview), i = 0);
  }, a = (u) => {
    u.button || (u.preventDefault(), r.push(u), this.elements.overlay.setPointerCapture(u.pointerId), !(r.length > 1) && (t = u.pageX, n = u.pageY, z(this, _, Fi).call(this, !0, this.elements.preview), this.elements.overlay.addEventListener("pointermove", o), this.elements.overlay.addEventListener("pointerup", s), this.elements.overlay.addEventListener("pointerout", s)));
  }, l = (u) => {
    if (document.activeElement === this.elements.viewport) {
      if (u.shiftKey && (u.key === "ArrowUp" || u.key === "ArrowDown")) {
        u.preventDefault();
        let c = parseFloat(this.elements.zoomer.value), d = u.key === "ArrowUp" ? 0.01 : -0.01;
        this.setZoom(c + d);
      } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(u.key)) {
        u.preventDefault();
        let [c, d] = Jy(u.key);
        z(this, _, wl).call(this, c, d);
      }
    }
  };
  this.elements.overlay.addEventListener("pointerdown", a), document.addEventListener("keydown", l), Zr(this, Fn, l);
}, yp = function() {
  let t = () => {
    z(this, _, wp).call(this);
  }, n = (r) => {
    const i = this.options.mouseWheelZoom;
    let o = 0;
    i === "off" || i === "ctrl" && !r.ctrlKey || (r.deltaY && (o = r.deltaY * -1 / 2e3), r.preventDefault(), this.setZoom(te(this, me) + o * te(this, me)));
  };
  this.elements.zoomer.addEventListener("input", t), this.elements.boundary.addEventListener("wheel", n);
}, wp = function() {
  const t = Ln.parse(this.elements.preview), n = new yi(this.elements.preview);
  let r = () => {
    this.elements.preview.style.transform = t.toString(), this.elements.preview.style.transformOrigin = n.toString();
  };
  Zr(this, me, parseFloat(this.elements.zoomer.value)), t.scale = te(this, me), r();
  var i = z(this, _, gp).call(this), o = i.translate, s = i.origin;
  t.x >= o.maxX && (n.x = s.minX, t.x = o.maxX), t.x <= o.minX && (n.x = s.maxX, t.x = o.minX), t.y >= o.maxY && (n.y = s.minY, t.y = o.maxY), t.y <= o.minY && (n.y = s.maxY, t.y = o.minY), r(), te(this, Ur).call(this);
}, xp = function(t) {
  z(this, _, xl).call(this, t), this.elements.preview.parentNode && this.elements.preview.parentNode.replaceChild(t, this.elements.preview), this.elements.preview = t;
}, xl = function(t) {
  t.classList.add("cr-image"), t.setAttribute("alt", "preview"), z(this, _, Fi).call(this, !1, t);
}, Fi = function(t, n) {
  n.setAttribute("aria-grabbed", t.toString()), this.elements.boundary.setAttribute("aria-dropeffect", t ? "move" : "none");
}, Sp = function() {
  return this.elements.preview.offsetParent !== null;
}, Sl = function() {
  const t = this.elements.boundary.getBoundingClientRect(), n = this.elements.preview.getBoundingClientRect(), r = this.elements.overlay;
  r.style.width = n.width + "px", r.style.height = n.height + "px", r.style.top = n.top - t.top + "px", r.style.left = n.left - t.left + "px";
}, El = function() {
  if (!z(this, _, Sp).call(this))
    return;
  const t = this.elements.preview, n = new Ln(0, 0, 1);
  t.style.transform = n.toString(), t.style.transformOrigin = new yi().toString(), z(this, _, Ep).call(this), n.scale = te(this, me), t.style.transform = n.toString(), t.style.transformOrigin = new yi().toString(), z(this, _, kp).call(this), z(this, _, Sl).call(this);
}, kl = function(t) {
  var n = te(this, me), r = this.elements.preview.getBoundingClientRect(), i = this.elements.viewport.getBoundingClientRect(), o = new yi(this.elements.preview), s = i.top - r.top + i.height / 2, a = i.left - r.left + i.width / 2, l = { x: a / n, y: s / n }, u = {
    x: (l.x - o.x) * (1 - n),
    y: (l.y - o.y) * (1 - n)
  };
  t.x -= u.x, t.y -= u.y, this.elements.preview.style.transform = t.toString(), this.elements.preview.style.transformOrigin = l.x + "px " + l.y + "px";
}, Ep = function() {
  var t = 0.85, n = this.elements.boundary.getBoundingClientRect(), r = this.elements.preview, i = this.elements.viewport.getBoundingClientRect(), o = i.width / r.naturalWidth, s = i.height / r.naturalHeight, a = Math.max(o, s);
  a >= t && (t += a), this.elements.zoomer.min = vl(a, 3), this.elements.zoomer.max = vl(t, 3);
  var l = Math.max(n.width / r.naturalWidth, n.height / r.naturalHeight);
  this.setZoom(te(this, Mn) !== null ? te(this, Mn) : l);
}, kp = function() {
  var t = this.elements.preview.getBoundingClientRect(), n = this.elements.viewport.getBoundingClientRect(), r = this.elements.boundary.getBoundingClientRect(), i = n.left - r.left, o = n.top - r.top, s = i - (t.width - n.width) / 2, a = o - (t.height - n.height) / 2, l = new Ln(s, a, te(this, me));
  z(this, _, kl).call(this, l);
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var tn;
((e) => {
  const t = class {
    constructor(l, u, c, d) {
      if (this.version = l, this.errorCorrectionLevel = u, this.modules = [], this.isFunction = [], l < t.MIN_VERSION || l > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (d < -1 || d > 7)
        throw new RangeError("Mask value out of range");
      this.size = l * 4 + 17;
      let f = [];
      for (let y = 0; y < this.size; y++)
        f.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(c);
      if (this.drawCodewords(g), d == -1) {
        let y = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const S = this.getPenaltyScore();
          S < y && (d = x, y = S), this.applyMask(x);
        }
      }
      o(0 <= d && d <= 7), this.mask = d, this.applyMask(d), this.drawFormatBits(d), this.isFunction = [];
    }
    static encodeText(l, u) {
      const c = e.QrSegment.makeSegments(l);
      return t.encodeSegments(c, u);
    }
    static encodeBinary(l, u) {
      const c = e.QrSegment.makeBytes(l);
      return t.encodeSegments([c], u);
    }
    static encodeSegments(l, u, c = 1, d = 40, f = -1, g = !0) {
      if (!(t.MIN_VERSION <= c && c <= d && d <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let y, x;
      for (y = c; ; y++) {
        const w = t.getNumDataCodewords(y, u) * 8, v = a.getTotalBits(l, y);
        if (v <= w) {
          x = v;
          break;
        }
        if (y >= d)
          throw new RangeError("Data too long");
      }
      for (const w of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        g && x <= t.getNumDataCodewords(y, w) * 8 && (u = w);
      let S = [];
      for (const w of l) {
        r(w.mode.modeBits, 4, S), r(w.numChars, w.mode.numCharCountBits(y), S);
        for (const v of w.getData())
          S.push(v);
      }
      o(S.length == x);
      const h = t.getNumDataCodewords(y, u) * 8;
      o(S.length <= h), r(0, Math.min(4, h - S.length), S), r(0, (8 - S.length % 8) % 8, S), o(S.length % 8 == 0);
      for (let w = 236; S.length < h; w ^= 253)
        r(w, 8, S);
      let m = [];
      for (; m.length * 8 < S.length; )
        m.push(0);
      return S.forEach((w, v) => m[v >>> 3] |= w << 7 - (v & 7)), new t(y, u, m, f);
    }
    getModule(l, u) {
      return 0 <= l && l < this.size && 0 <= u && u < this.size && this.modules[u][l];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const l = this.getAlignmentPatternPositions(), u = l.length;
      for (let c = 0; c < u; c++)
        for (let d = 0; d < u; d++)
          c == 0 && d == 0 || c == 0 && d == u - 1 || c == u - 1 && d == 0 || this.drawAlignmentPattern(l[c], l[d]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(l) {
      const u = this.errorCorrectionLevel.formatBits << 3 | l;
      let c = u;
      for (let f = 0; f < 10; f++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const d = (u << 10 | c) ^ 21522;
      o(d >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, i(d, f));
      this.setFunctionModule(8, 7, i(d, 6)), this.setFunctionModule(8, 8, i(d, 7)), this.setFunctionModule(7, 8, i(d, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, i(d, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, i(d, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, i(d, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let l = this.version;
      for (let c = 0; c < 12; c++)
        l = l << 1 ^ (l >>> 11) * 7973;
      const u = this.version << 12 | l;
      o(u >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const d = i(u, c), f = this.size - 11 + c % 3, g = Math.floor(c / 3);
        this.setFunctionModule(f, g, d), this.setFunctionModule(g, f, d);
      }
    }
    drawFinderPattern(l, u) {
      for (let c = -4; c <= 4; c++)
        for (let d = -4; d <= 4; d++) {
          const f = Math.max(Math.abs(d), Math.abs(c)), g = l + d, y = u + c;
          0 <= g && g < this.size && 0 <= y && y < this.size && this.setFunctionModule(g, y, f != 2 && f != 4);
        }
    }
    drawAlignmentPattern(l, u) {
      for (let c = -2; c <= 2; c++)
        for (let d = -2; d <= 2; d++)
          this.setFunctionModule(l + d, u + c, Math.max(Math.abs(d), Math.abs(c)) != 1);
    }
    setFunctionModule(l, u, c) {
      this.modules[u][l] = c, this.isFunction[u][l] = !0;
    }
    addEccAndInterleave(l) {
      const u = this.version, c = this.errorCorrectionLevel;
      if (l.length != t.getNumDataCodewords(u, c))
        throw new RangeError("Invalid argument");
      const d = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][u], f = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][u], g = Math.floor(t.getNumRawDataModules(u) / 8), y = d - g % d, x = Math.floor(g / d);
      let S = [];
      const h = t.reedSolomonComputeDivisor(f);
      for (let w = 0, v = 0; w < d; w++) {
        let E = l.slice(v, v + x - f + (w < y ? 0 : 1));
        v += E.length;
        const k = t.reedSolomonComputeRemainder(E, h);
        w < y && E.push(0), S.push(E.concat(k));
      }
      let m = [];
      for (let w = 0; w < S[0].length; w++)
        S.forEach((v, E) => {
          (w != x - f || E >= y) && m.push(v[w]);
        });
      return o(m.length == g), m;
    }
    drawCodewords(l) {
      if (l.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let u = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let d = 0; d < this.size; d++)
          for (let f = 0; f < 2; f++) {
            const g = c - f, x = (c + 1 & 2) == 0 ? this.size - 1 - d : d;
            !this.isFunction[x][g] && u < l.length * 8 && (this.modules[x][g] = i(l[u >>> 3], 7 - (u & 7)), u++);
          }
      }
      o(u == l.length * 8);
    }
    applyMask(l) {
      if (l < 0 || l > 7)
        throw new RangeError("Mask value out of range");
      for (let u = 0; u < this.size; u++)
        for (let c = 0; c < this.size; c++) {
          let d;
          switch (l) {
            case 0:
              d = (c + u) % 2 == 0;
              break;
            case 1:
              d = u % 2 == 0;
              break;
            case 2:
              d = c % 3 == 0;
              break;
            case 3:
              d = (c + u) % 3 == 0;
              break;
            case 4:
              d = (Math.floor(c / 3) + Math.floor(u / 2)) % 2 == 0;
              break;
            case 5:
              d = c * u % 2 + c * u % 3 == 0;
              break;
            case 6:
              d = (c * u % 2 + c * u % 3) % 2 == 0;
              break;
            case 7:
              d = ((c + u) % 2 + c * u % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[u][c] && d && (this.modules[u][c] = !this.modules[u][c]);
        }
    }
    getPenaltyScore() {
      let l = 0;
      for (let f = 0; f < this.size; f++) {
        let g = !1, y = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[f][S] == g ? (y++, y == 5 ? l += t.PENALTY_N1 : y > 5 && l++) : (this.finderPenaltyAddHistory(y, x), g || (l += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), g = this.modules[f][S], y = 1);
        l += this.finderPenaltyTerminateAndCount(g, y, x) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let g = !1, y = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[S][f] == g ? (y++, y == 5 ? l += t.PENALTY_N1 : y > 5 && l++) : (this.finderPenaltyAddHistory(y, x), g || (l += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), g = this.modules[S][f], y = 1);
        l += this.finderPenaltyTerminateAndCount(g, y, x) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let g = 0; g < this.size - 1; g++) {
          const y = this.modules[f][g];
          y == this.modules[f][g + 1] && y == this.modules[f + 1][g] && y == this.modules[f + 1][g + 1] && (l += t.PENALTY_N2);
        }
      let u = 0;
      for (const f of this.modules)
        u = f.reduce((g, y) => g + (y ? 1 : 0), u);
      const c = this.size * this.size, d = Math.ceil(Math.abs(u * 20 - c * 10) / c) - 1;
      return o(0 <= d && d <= 9), l += d * t.PENALTY_N4, o(0 <= l && l <= 2568888), l;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const l = Math.floor(this.version / 7) + 2, u = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (l * 2 - 2)) * 2;
        let c = [6];
        for (let d = this.size - 7; c.length < l; d -= u)
          c.splice(1, 0, d);
        return c;
      }
    }
    static getNumRawDataModules(l) {
      if (l < t.MIN_VERSION || l > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let u = (16 * l + 128) * l + 64;
      if (l >= 2) {
        const c = Math.floor(l / 7) + 2;
        u -= (25 * c - 10) * c - 55, l >= 7 && (u -= 36);
      }
      return o(208 <= u && u <= 29648), u;
    }
    static getNumDataCodewords(l, u) {
      return Math.floor(t.getNumRawDataModules(l) / 8) - t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][l] * t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][l];
    }
    static reedSolomonComputeDivisor(l) {
      if (l < 1 || l > 255)
        throw new RangeError("Degree out of range");
      let u = [];
      for (let d = 0; d < l - 1; d++)
        u.push(0);
      u.push(1);
      let c = 1;
      for (let d = 0; d < l; d++) {
        for (let f = 0; f < u.length; f++)
          u[f] = t.reedSolomonMultiply(u[f], c), f + 1 < u.length && (u[f] ^= u[f + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return u;
    }
    static reedSolomonComputeRemainder(l, u) {
      let c = u.map((d) => 0);
      for (const d of l) {
        const f = d ^ c.shift();
        c.push(0), u.forEach((g, y) => c[y] ^= t.reedSolomonMultiply(g, f));
      }
      return c;
    }
    static reedSolomonMultiply(l, u) {
      if (l >>> 8 || u >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let d = 7; d >= 0; d--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (u >>> d & 1) * l;
      return o(c >>> 8 == 0), c;
    }
    finderPenaltyCountPatterns(l) {
      const u = l[1];
      o(u <= this.size * 3);
      const c = u > 0 && l[2] == u && l[3] == u * 3 && l[4] == u && l[5] == u;
      return (c && l[0] >= u * 4 && l[6] >= u ? 1 : 0) + (c && l[6] >= u * 4 && l[0] >= u ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(l, u, c) {
      return l && (this.finderPenaltyAddHistory(u, c), u = 0), u += this.size, this.finderPenaltyAddHistory(u, c), this.finderPenaltyCountPatterns(c);
    }
    finderPenaltyAddHistory(l, u) {
      u[0] == 0 && (l += this.size), u.pop(), u.unshift(l);
    }
  };
  let n = t;
  n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], n.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], e.QrCode = n;
  function r(l, u, c) {
    if (u < 0 || u > 31 || l >>> u)
      throw new RangeError("Value out of range");
    for (let d = u - 1; d >= 0; d--)
      c.push(l >>> d & 1);
  }
  function i(l, u) {
    return (l >>> u & 1) != 0;
  }
  function o(l) {
    if (!l)
      throw new Error("Assertion error");
  }
  const s = class {
    constructor(l, u, c) {
      if (this.mode = l, this.numChars = u, this.bitData = c, u < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    static makeBytes(l) {
      let u = [];
      for (const c of l)
        r(c, 8, u);
      return new s(s.Mode.BYTE, l.length, u);
    }
    static makeNumeric(l) {
      if (!s.isNumeric(l))
        throw new RangeError("String contains non-numeric characters");
      let u = [];
      for (let c = 0; c < l.length; ) {
        const d = Math.min(l.length - c, 3);
        r(parseInt(l.substr(c, d), 10), d * 3 + 1, u), c += d;
      }
      return new s(s.Mode.NUMERIC, l.length, u);
    }
    static makeAlphanumeric(l) {
      if (!s.isAlphanumeric(l))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let u = [], c;
      for (c = 0; c + 2 <= l.length; c += 2) {
        let d = s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)) * 45;
        d += s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c + 1)), r(d, 11, u);
      }
      return c < l.length && r(s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)), 6, u), new s(s.Mode.ALPHANUMERIC, l.length, u);
    }
    static makeSegments(l) {
      return l == "" ? [] : s.isNumeric(l) ? [s.makeNumeric(l)] : s.isAlphanumeric(l) ? [s.makeAlphanumeric(l)] : [s.makeBytes(s.toUtf8ByteArray(l))];
    }
    static makeEci(l) {
      let u = [];
      if (l < 0)
        throw new RangeError("ECI assignment value out of range");
      if (l < 128)
        r(l, 8, u);
      else if (l < 16384)
        r(2, 2, u), r(l, 14, u);
      else if (l < 1e6)
        r(6, 3, u), r(l, 21, u);
      else
        throw new RangeError("ECI assignment value out of range");
      return new s(s.Mode.ECI, 0, u);
    }
    static isNumeric(l) {
      return s.NUMERIC_REGEX.test(l);
    }
    static isAlphanumeric(l) {
      return s.ALPHANUMERIC_REGEX.test(l);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(l, u) {
      let c = 0;
      for (const d of l) {
        const f = d.mode.numCharCountBits(u);
        if (d.numChars >= 1 << f)
          return 1 / 0;
        c += 4 + f + d.bitData.length;
      }
      return c;
    }
    static toUtf8ByteArray(l) {
      l = encodeURI(l);
      let u = [];
      for (let c = 0; c < l.length; c++)
        l.charAt(c) != "%" ? u.push(l.charCodeAt(c)) : (u.push(parseInt(l.substr(c + 1, 2), 16)), c += 2);
      return u;
    }
  };
  let a = s;
  a.NUMERIC_REGEX = /^[0-9]*$/, a.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, a.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = a;
})(tn || (tn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.ordinal = i, this.formatBits = o;
      }
    };
    let r = n;
    r.LOW = new n(0, 1), r.MEDIUM = new n(1, 0), r.QUARTILE = new n(2, 3), r.HIGH = new n(3, 2), t.Ecc = r;
  })(e.QrCode || (e.QrCode = {}));
})(tn || (tn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.modeBits = i, this.numBitsCharCount = o;
      }
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    let r = n;
    r.NUMERIC = new n(1, [10, 12, 14]), r.ALPHANUMERIC = new n(2, [9, 11, 13]), r.BYTE = new n(4, [8, 16, 16]), r.KANJI = new n(8, [8, 10, 12]), r.ECI = new n(7, [0, 0, 0]), t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(tn || (tn = {}));
var wi = tn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
wi.QrCode.Ecc.LOW, wi.QrCode.Ecc.MEDIUM, wi.QrCode.Ecc.QUARTILE, wi.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function ew() {
  C.useState(!1);
  const [e, t] = C.useState(!1), n = Yr(), r = zt((x) => x.user), { t: i } = Dt();
  let o = null, s = null;
  const a = async function(x) {
    x.preventDefault(), t(!0);
    const S = x.target.screenName.value;
    let h;
    s ? h = s : h = x.target.avatar.files[0];
    let m = r.avatar;
    h && (m = await d(h));
    try {
      await n.user.updateProfile({ display_name: S, avatar: m });
    } catch (w) {
      alert(w);
    } finally {
      t(!1), location.reload();
    }
  }, l = (x) => {
    x.preventDefault();
    const S = document.getElementById("image-container"), h = document.getElementById("image-container-wrapper"), m = document.getElementById("image-result");
    if (h.setAttribute("style", "display: none;"), x.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", m.removeAttribute("src"), m.setAttribute("style", "display: none;");
      return;
    }
    const w = x.target.files[0].size;
    if (parseInt(w) > 31 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    h.removeAttribute("style"), o && o.destroy(), o = new qy(S, {
      viewport: {
        width: 219,
        height: 220,
        type: "square"
      },
      mouseWheelZoom: "on"
    });
    const v = new FileReader();
    v.onload = function(E) {
      o.bind(E.target.result);
    }, v.readAsDataURL(x.target.files[0]);
  }, u = (x) => {
    x.preventDefault(), o.toCanvas(300).then((S) => {
      const h = document.getElementById("image-result");
      h.removeAttribute("style"), h.src = S.toDataURL("image/jpeg", 1), s = S.toDataURL("image/jpeg", 1).replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    });
  }, c = (x) => {
    x.preventDefault(), o.refresh(), document.getElementById("image-result").setAttribute("style", "display: none;");
  }, d = async function(x) {
    try {
      let S = new FormData();
      return S.append("image", x), S.append("key", "d8dc5b96ed210c8360b48acb0fa5ee32"), (await (await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        // headers: {
        // 	'Content-Type': 'multipart/form-data',
        // },
        body: S
      })).json()).data.url;
    } catch (S) {
      throw console.error(S), S;
    }
  };
  let f = window.serverURL;
  if (!f) {
    const x = location.pathname.match(/(.*?\/)ui/);
    f = x ? x[1] : "/";
  }
  const g = new URLSearchParams(location.search);
  let y = window.TOKEN || sessionStorage.getItem("TOKEN") || g.get("token");
  return y || (y = localStorage.getItem("TOKEN")), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("setting") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "profile-avatar",
                  src: r.avatar || `https://seccdn.libravatar.org/avatar/${r.mailMd5}?s=220&amp;r=X&amp;d=mm`
                }
              )
            }
          ) }),
          /* @__PURE__ */ p.jsx("h2", { children: r.display_name }),
          /* @__PURE__ */ p.jsx("p", { children: r.email })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ p.jsxs("section", { children: [
                /* @__PURE__ */ p.jsx("h3", { children: i("profile") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: a, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: i("nickname") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: r.display_name
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsxs("div", { id: "image-container-wrapper", style: { display: "none" }, children: [
                    /* @__PURE__ */ p.jsx("div", { id: "image-container" }),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        onClick: u,
                        type: "button",
                        className: "btn primary",
                        children: "Crop"
                      }
                    ),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        onClick: c,
                        type: "button",
                        className: "btn",
                        style: { marginLeft: "10px" },
                        children: "Reset"
                      }
                    )
                  ] }) }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("img", { id: "image-result", src: "", alt: "", style: { display: "none" } }) }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-3", children: i("change avatar") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: l,
                        accept: "image/*"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: e,
                      children: i("update my profile")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsx("br", {})
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function tw() {
  const { t: e } = Dt(), t = Yr(), n = Gr(), r = zt((c) => c.user), [i, o] = C.useState(!1), [s, a] = C.useState(!1), l = ip({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  C.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const u = async function(c) {
    c.preventDefault(), o(!1);
    const d = c.target.nick.value;
    if (!d || d.length < 2)
      return o(e("nickname illegal"));
    const f = c.target.email.value;
    if (!f)
      return o(e("please input email"));
    const g = c.target.link.value, y = c.target.password.value, x = c.target["password-again"].value;
    if (!y || !x || x !== y)
      return o(e("passwords don't match"));
    try {
      a(!0);
      const S = await l("login"), h = await t.user.register({
        display_name: d,
        email: f,
        url: g,
        password: y,
        recaptchaV3: window.recaptchaV3Key ? S : void 0,
        turnstile: window.turnstileKey ? S : void 0
      });
      h && h.verify && alert(e("register success! please go to your mailbox to verify it!")), n("/ui/login");
    } catch (S) {
      o(S.message);
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: u, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "nick", className: "sr-only", children: e("nickname") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: e("nickname"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "link", className: "sr-only", children: e("website") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "link",
              name: "link",
              placeholder: e("website"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password-again", className: "sr-only", children: e("password again") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: e("password again")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("register")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(be, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(be, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
function nw() {
  const e = zt((s) => s.user), { t } = Dt(), [n, r] = C.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  C.useEffect(() => {
    $y({ page: n.page }).then((s) => {
      console.log(s), r({ ...n, ...s });
    });
  }, [n.page]);
  const i = (s) => [
    {
      key: "administrator",
      name: t("set administrator"),
      show: s.type === "guest",
      async action(a) {
        a.preventDefault(), await ms({
          id: s.objectId,
          type: "administrator"
        }), s.type = "administrator", r({ ...n });
      }
    },
    {
      key: "guest",
      name: t("set guest"),
      show: s.type === "administrator",
      async action(a) {
        if (a.preventDefault(), s.objectId === e.objectId)
          return alert(t("You can't set yourself to be guest!"));
        await ms({
          id: s.objectId,
          type: "guest"
        }), s.type = "guest", r({ ...n });
      }
    },
    {
      key: "label",
      name: t("set label"),
      show: !0,
      async action(a) {
        a.preventDefault();
        const l = prompt(t("please enter an exclusive label"));
        await ms({
          id: s.objectId,
          label: l
        }), s.label = l, r({ ...n });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: a }) => a), o = (s) => /^verify/.test(s) ? t("verify") : t(s);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: t("manage users") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: t("nickname") }),
                /* @__PURE__ */ p.jsx("th", { children: t("email") }),
                /* @__PURE__ */ p.jsx("th", { children: t("role") }),
                /* @__PURE__ */ p.jsx("th", { children: t("exclusive label") }),
                /* @__PURE__ */ p.jsx("th", { children: t("action") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: n.data.map((s) => /* @__PURE__ */ p.jsxs("tr", { id: `user-${s.objectId}`, children: [
                /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "user-avatar", children: /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    className: "avatar",
                    src: dp(s.email, s.avatar),
                    alt: s.display_name,
                    width: "40",
                    height: "40"
                  }
                ) }) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: /^https:\/\//.test(s.url) ? s.url : "https://" + s.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: s.display_name
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: `mailto:${s.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: s.email
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: o(s.type) }),
                /* @__PURE__ */ p.jsx("td", { children: s.label }),
                /* @__PURE__ */ p.jsx("td", { className: "comment-action", children: i(s).map(
                  ({ key: a, disable: l, name: u, action: c }) => l ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: u }, a) : /* @__PURE__ */ p.jsx(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${a}`,
                      onClick: c,
                      children: u
                    },
                    a
                  )
                ) })
              ] }, s.objectId)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          fp,
          {
            current: n.page,
            total: n.totalPages,
            onChange: (s) => r({ ...n, page: s })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function ie(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var rw = typeof Symbol == "function" && Symbol.observable || "@@observable", dc = rw, gs = () => Math.random().toString(36).substring(7).split("").join("."), iw = {
  INIT: `@@redux/INIT${/* @__PURE__ */ gs()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ gs()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${gs()}`
}, Dr = iw;
function Ea(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Fo(e, t, n) {
  if (typeof e != "function")
    throw new Error(ie(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ie(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ie(1));
    return n(Fo)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), s = o, a = 0, l = !1;
  function u() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((S, h) => {
      s.set(h, S);
    }));
  }
  function c() {
    if (l)
      throw new Error(ie(3));
    return i;
  }
  function d(S) {
    if (typeof S != "function")
      throw new Error(ie(4));
    if (l)
      throw new Error(ie(5));
    let h = !0;
    u();
    const m = a++;
    return s.set(m, S), function() {
      if (h) {
        if (l)
          throw new Error(ie(6));
        h = !1, u(), s.delete(m), o = null;
      }
    };
  }
  function f(S) {
    if (!Ea(S))
      throw new Error(ie(7));
    if (typeof S.type > "u")
      throw new Error(ie(8));
    if (typeof S.type != "string")
      throw new Error(ie(17));
    if (l)
      throw new Error(ie(9));
    try {
      l = !0, i = r(i, S);
    } finally {
      l = !1;
    }
    return (o = s).forEach((m) => {
      m();
    }), S;
  }
  function g(S) {
    if (typeof S != "function")
      throw new Error(ie(10));
    r = S, f({
      type: Dr.REPLACE
    });
  }
  function y() {
    const S = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(h) {
        if (typeof h != "object" || h === null)
          throw new Error(ie(11));
        function m() {
          const v = h;
          v.next && v.next(c());
        }
        return m(), {
          unsubscribe: S(m)
        };
      },
      [dc]() {
        return this;
      }
    };
  }
  return f({
    type: Dr.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: c,
    replaceReducer: g,
    [dc]: y
  };
}
function ow(e, t, n) {
  return Fo(e, t, n);
}
function sw(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Dr.INIT
    }) > "u")
      throw new Error(ie(12));
    if (typeof n(void 0, {
      type: Dr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ie(13));
  });
}
function Cp(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    sw(n);
  } catch (o) {
    i = o;
  }
  return function(s = {}, a) {
    if (i)
      throw i;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c], f = n[d], g = s[d], y = f(g, a);
      if (typeof y > "u")
        throw a && a.type, new Error(ie(14));
      u[d] = y, l = l || y !== g;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function fc(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function lw(e, t) {
  if (typeof e == "function")
    return fc(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(ie(16));
  const n = {};
  for (const r in e) {
    const i = e[r];
    typeof i == "function" && (n[r] = fc(i, t));
  }
  return n;
}
function ka(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Np(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(ie(15));
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...u) => o(l, ...u)
    }, a = e.map((l) => l(s));
    return o = ka(...a)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function aw(e) {
  return Ea(e) && "type" in e && typeof e.type == "string";
}
const uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Dr,
  applyMiddleware: Np,
  bindActionCreators: lw,
  combineReducers: Cp,
  compose: ka,
  createStore: Fo,
  isAction: aw,
  isPlainObject: Ea,
  legacy_createStore: ow
}, Symbol.toStringTag, { value: "Module" }));
function nn() {
  return nn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nn.apply(this, arguments);
}
function cw(e) {
  var t;
  e.models.forEach(function(l) {
    return jp(e, l);
  });
  var n = Pp(e), r = Np.apply(uw, e.reduxConfig.middlewares), i = e.reduxConfig.devtoolComposer ? (t = e.reduxConfig).devtoolComposer.apply(t, e.reduxConfig.enhancers.concat([r])) : fw(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([r])), o = e.reduxConfig.createStore || Fo, s = e.reduxConfig.initialState, a = s === void 0 ? {} : s;
  return o(n, a, i);
}
function jp(e, t) {
  var n = {}, r = Object.keys(t.reducers);
  r.forEach(function(a) {
    var l = pw(a) ? a : t.name + "/" + a;
    n[l] = t.reducers[a];
  });
  var i = function(l, u) {
    return l === void 0 && (l = t.state), u.type in n ? n[u.type](l, u.payload, u.meta) : l;
  }, o = t.baseReducer, s = o ? function(a, l) {
    return a === void 0 && (a = t.state), i(o(a, l), l);
  } : i;
  e.forEachPlugin("onReducer", function(a) {
    s = a(s, t.name, e) || s;
  }), e.reduxConfig.reducers[t.name] = s;
}
function Pp(e) {
  var t = e.reduxConfig.rootReducers, n = dw(e.reduxConfig), r = n;
  return t && Object.keys(t).length && (r = function(o, s) {
    var a = t[s.type];
    return n(a ? a(o, s) : o, s);
  }), e.forEachPlugin("onRootReducer", function(i) {
    r = i(r, e) || r;
  }), r;
}
function dw(e) {
  var t = e.combineReducers || Cp;
  return Object.keys(e.reducers).length ? t(e.reducers) : function(n) {
    return n;
  };
}
function fw(e) {
  return e === void 0 && (e = {}), !e.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : ka;
}
function pw(e) {
  return e.indexOf("/") > -1;
}
var hw = function(t, n, r) {
}, mw = function(t, n, r) {
}, Lp = function(t, n, r, i) {
  return Object.assign(function(o, s) {
    var a = {
      type: n + "/" + r
    };
    return typeof o < "u" && (a.payload = o), typeof s < "u" && (a.meta = s), t.dispatch(a);
  }, {
    isEffect: i
  });
}, gw = function(t, n) {
  var r = t.dispatch[n.name], i = Object.keys(n.reducers);
  i.forEach(function(o) {
    hw(n.name, n.reducers), r[o] = Lp(t, n.name, o, !1);
  });
}, vw = function(t, n, r) {
  var i = t.dispatch[r.name], o = {};
  r.effects && (o = typeof r.effects == "function" ? r.effects(t.dispatch) : r.effects);
  var s = Object.keys(o);
  s.forEach(function(a) {
    mw(r.name), n.effects[r.name + "/" + a] = o[a].bind(i), i[a] = Lp(t, r.name, a, !0);
  });
};
function yw(e) {
  return {
    models: ww(e.models),
    reduxConfig: e.redux,
    forEachPlugin: function(n, r) {
      e.plugins.forEach(function(i) {
        i[n] && r(i[n]);
      });
    },
    effects: {}
  };
}
function ww(e) {
  return Object.keys(e).map(function(t) {
    var n = xw(t, e[t]);
    return n;
  });
}
function xw(e, t) {
  return nn({
    name: e,
    reducers: {}
  }, t);
}
function Sw(e) {
  var t = yw(e);
  t.reduxConfig.middlewares.push(Ew(t)), t.forEachPlugin("createMiddleware", function(i) {
    t.reduxConfig.middlewares.push(i(t));
  });
  var n = cw(t), r = nn({}, n, {
    name: e.name,
    addModel: function(o) {
      jp(t, o), pc(r, o), hc(r, t, o), n.replaceReducer(Pp(t)), n.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return kw(r, e.plugins), t.models.forEach(function(i) {
    return pc(r, i);
  }), t.models.forEach(function(i) {
    return hc(r, t, i);
  }), t.forEachPlugin("onStoreCreated", function(i) {
    r = i(r, t) || r;
  }), r;
}
function Ew(e) {
  return function(t) {
    return function(n) {
      return function(r) {
        return r.type in e.effects ? (n(r), e.effects[r.type](r.payload, t.getState(), r.meta)) : n(r);
      };
    };
  };
}
function pc(e, t) {
  var n = {};
  e.dispatch["" + t.name] = n, gw(e, t);
}
function hc(e, t, n) {
  vw(e, t, n), t.forEachPlugin("onModel", function(r) {
    r(n, e);
  });
}
function kw(e, t) {
  t.forEach(function(n) {
    if (n.exposed) {
      var r = Object.keys(n.exposed);
      r.forEach(function(i) {
        if (n.exposed) {
          var o = n.exposed[i], s = typeof o == "function";
          e[i] = s ? function() {
            for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
              l[u] = arguments[u];
            return o.apply(void 0, [e].concat(l));
          } : Object.create(n.exposed[i]);
        }
      });
    }
  });
}
var mc = 0;
function Cw(e) {
  var t, n, r, i = (t = e.name) != null ? t : "Rematch Store " + mc;
  mc += 1;
  var o = {
    name: i,
    models: e.models || {},
    plugins: e.plugins || [],
    redux: nn({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, e.redux, {
      devtoolOptions: nn({
        name: i
      }, (n = (r = e.redux) == null ? void 0 : r.devtoolOptions) != null ? n : {})
    })
  };
  return o.plugins.forEach(function(s) {
    s.config && (o.models = xi(o.models, s.config.models), s.config.redux && (o.redux.initialState = xi(o.redux.initialState, s.config.redux.initialState), o.redux.reducers = xi(o.redux.reducers, s.config.redux.reducers), o.redux.rootReducers = xi(o.redux.rootReducers, s.config.redux.reducers), o.redux.enhancers = [].concat(o.redux.enhancers, s.config.redux.enhancers || []), o.redux.middlewares = [].concat(o.redux.middlewares, s.config.redux.middlewares || []), o.redux.combineReducers = o.redux.combineReducers || s.config.redux.combineReducers, o.redux.createStore = o.redux.createStore || s.config.redux.createStore));
  }), o;
}
function xi(e, t) {
  return t ? nn({}, t, e) : e;
}
var Nw = function(t) {
  var n = Cw(t || {});
  return Sw(n);
};
async function jw() {
  return ae("token").catch(() => {
    Rp(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function Pw({ email: e, password: t, code: n, recaptchaV3: r, turnstile: i }) {
  return ae({
    url: "token",
    method: "POST",
    body: { email: e, password: t, code: n, recaptchaV3: r, turnstile: i }
  });
}
async function Rp() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function Lw(e) {
  return ae({ url: "user", method: "POST", body: e });
}
async function Rw({ email: e }) {
  return ae({
    url: "user/password",
    method: "PUT",
    body: { email: e }
  });
}
const Ow = {
  state: null,
  reducers: {
    setUser(e, t) {
      return t;
    },
    updateUser(e, t) {
      return { ...e, ...t };
    }
  },
  effects: (e) => ({
    async loadUserInfo() {
      const t = await jw();
      if (t != null && t.email) {
        if (window.opener) {
          const n = localStorage.getItem("TOKEN"), r = !!n, i = n || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: i, remember: r, ...t } },
            "*"
          );
        }
        return e.user.setUser(t);
      }
    },
    async login({ email: t, password: n, code: r, remember: i, recaptchaV3: o, turnstile: s }) {
      const { token: a, ...l } = await Pw({
        email: t,
        password: n,
        code: r,
        recaptchaV3: o,
        turnstile: s
      });
      return a && (window.TOKEN = a, sessionStorage.setItem("TOKEN", a), i && localStorage.setItem("TOKEN", a), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: a, remember: i, ...l } },
        "*"
      )), e.user.setUser(l);
    },
    logout() {
      Rp(), e.user.setUser(null);
    },
    register(t) {
      return Lw(t);
    },
    forgot(t) {
      return Rw(t);
    },
    async updateProfile(t) {
      return await Iy(t), window.opener && window.opener.postMessage({ type: "profile", data: t }, "*"), e.user.updateUser(t);
    }
  })
}, Op = Nw({ models: { user: Ow } });
function Si(e) {
  const t = zt((n) => n.user);
  return C.useEffect(() => {
    const n = e.meta || {}, r = e.basename || "";
    if (!(t != null && t.email))
      return location.href = r + "/ui/login?redirect=" + location.pathname.replace(r, "");
    if (n.auth ? e.meta.auth !== t.type : !1)
      return location.href = r + "/ui/profile";
  }, [t, e.meta]), t ? e.children : null;
}
function Tw() {
  const e = location.pathname.match(/(.*?)\/ui/), t = e ? e[1] : "/";
  return /* @__PURE__ */ p.jsx(Pg, { store: Op, children: /* @__PURE__ */ p.jsx(C1, { basename: t, children: /* @__PURE__ */ p.jsxs(v1, { children: [
    /* @__PURE__ */ p.jsx(
      gt,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(Hy, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      gt,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(nw, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      gt,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(Qy, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(gt, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ p.jsx(_y, {}) }),
    /* @__PURE__ */ p.jsx(gt, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ p.jsx(tw, {}) }),
    /* @__PURE__ */ p.jsx(gt, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ p.jsx(Gv, {}) }),
    /* @__PURE__ */ p.jsx(
      gt,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { children: /* @__PURE__ */ p.jsx(ew, {}) })
      }
    )
  ] }) }) });
}
const {
  slice: Iw,
  forEach: $w
} = [];
function _w(e) {
  return $w.call(Iw.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const gc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Mw = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const i = encodeURIComponent(t);
  let o = `${e}=${i}`;
  if (r.maxAge > 0) {
    const s = r.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(s)}`;
  }
  if (r.domain) {
    if (!gc.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!gc.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, vc = {
  create(e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)), r && (i.domain = r), document.cookie = Mw(e, encodeURIComponent(t), i);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var Fw = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return vc.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: i,
      cookieOptions: o
    } = t;
    n && typeof document < "u" && vc.create(n, e, r, i, o);
  }
}, bw = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var r;
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: i
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      const s = i.substring(1).split("&");
      for (let a = 0; a < s.length; a++) {
        const l = s[a].indexOf("=");
        l > 0 && s[a].substring(0, l) === t && (n = s[a].substring(l + 1));
      }
    }
    return n;
  }
};
let ir = null;
const yc = () => {
  if (ir !== null) return ir;
  try {
    ir = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    ir = !1;
  }
  return ir;
};
var Aw = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && yc())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && yc() && window.localStorage.setItem(n, e);
  }
};
let or = null;
const wc = () => {
  if (or !== null) return or;
  try {
    or = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    or = !1;
  }
  return or;
};
var zw = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && wc())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && wc() && window.sessionStorage.setItem(n, e);
  }
}, Dw = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: i
      } = navigator;
      if (n)
        for (let o = 0; o < n.length; o++)
          t.push(n[o]);
      r && t.push(r), i && t.push(i);
    }
    return t.length > 0 ? t : void 0;
  }
}, Uw = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Bw = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var i;
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (i = n[typeof t == "number" ? t : 0]) == null ? void 0 : i.replace("/", "") : void 0;
  }
}, Vw = {
  name: "subdomain",
  lookup(e) {
    var i, o;
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && ((o = (i = window.location) == null ? void 0 : i.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[n];
  }
};
function Hw() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (e) => e
  };
}
class Tp {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = _w(n, this.options || {}, Hw()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Fw), this.addDetector(bw), this.addDetector(Aw), this.addDetector(zw), this.addDetector(Dw), this.addDetector(Uw), this.addDetector(Bw), this.addDetector(Vw);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let i = this.detectors[r].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
Tp.type = "languageDetector";
de.use(Tp).use(Q1).init({
  // we init with resources
  resources: Xv,
  fallbackLng: "zh-CN",
  debug: !0,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: !1,
  // we use content as keys
  interpolation: {
    escapeValue: !1
  }
});
async function Kw() {
  await Promise.race([
    new Promise((n) => setTimeout(n, 50)),
    new Promise((n) => {
      window.addEventListener("message", (r) => {
        r && r.type === "TOKEN" && r.data && n(r);
      });
    }),
    new Promise((n) => {
      const i = new URLSearchParams(location.search).get("token");
      i && n(i);
    })
  ]).then((n) => {
    n && (window.TOKEN = n, sessionStorage.setItem("TOKEN", n));
  }), await Promise.all([Op.dispatch({ type: "user/loadUserInfo" })]).catch(
    (n) => {
      console.error(n);
    }
  );
  const e = document.createElement("div");
  e.style.height = "100%", document.body.appendChild(e), $f(e).render(
    /* @__PURE__ */ p.jsx(vo.StrictMode, { children: /* @__PURE__ */ p.jsx(Tw, {}) })
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
Kw();
