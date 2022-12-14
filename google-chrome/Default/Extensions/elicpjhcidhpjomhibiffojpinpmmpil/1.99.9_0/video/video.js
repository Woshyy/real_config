


function BrowserActionShowDownloads()
{
    chrome.tabs.create({"url":"chrome://downloads/","selected":true}, function(tab){});
}

 
L64B.utils=
{
    crctable: "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",     
    crc32: function( /* String */ str, /* Number */ crc ) 
	{ 
        if( crc == window.undefined ) crc = 0; 
        var n = 0; //a number between 0 and 255 
        var x = 0; //an hex number 
        crc = crc ^ (-1); 
        for( var i = 0, iTop = str.length; i < iTop; i++ ) { 
            n = ( crc ^ str.charCodeAt( i ) ) & 0xFF; 
            x = "0x" + L64B.utils.crctable.substr( n * 9, 8 ); 
            crc = ( crc >>> 8 ) ^ x; 
        } 
        return crc ^ (-1); 
    } 	
};


L64B.video =
{
    checkForValidUrl:function(tabId, changeInfo, tab) 
    {
        //chrome.pageAction.show(tabId);
        return; 
    },
    isForbidden:function( url) // Lock download from youtube
    {
		if ( !url)
			return false;
		
		var hostname = new URL(url);
		if ( !hostname)
			return false;
		hostname = hostname.hostname;
		if ( !hostname)
			return false;
		if ( hostname.indexOf( "youtube.") >= 0) 
			return "YouTube";
		if ( hostname.indexOf( "googlevideo.") >= 0) 
			return "YouTube";
		if ( hostname.indexOf( "dailymotion.") >= 0) 
			return "Dailymotion";
		if ( hostname.indexOf( "instagram.") >= 0) 
			return "Instagram";
		if ( hostname.indexOf( "vk.") >= 0) 
			return "vk.com";
		if ( hostname.indexOf( "daxab.com") >= 0) 
			return "Daxab";       		
		if ( hostname.indexOf( "tiktok.") >= 0) 
			return "Tiktok";
		if ( hostname.indexOf( "/startpage/") >= 0) 
			return "YouTube";       
		
        return false;	
    },
    onUpdateTabCalled:false,
    
    onUpdateTab:function(tabId, changeInfo, tab) 
    {
    
        if ( !tab)
        {
            setTimeout( function ( ) // make sure onUpdateTab is called at least once
            {
                chrome.tabs.get( tabId, function(tab)
                {
					if (typeof (tab) == 'undefined' && chrome.runtime.lastError)
						return;			
                    L64B.video.onUpdateTab(tab.id, null, tab);
                });
            },100);
            return;               
        }

		if ( vdl.lasturl[tabId] != tab.url)// Url has changed
        {
			vdl.reset( tabId, tab.url);			
        }
        else if ( vdl.urllist[tabId]) // there's are videos in the list
            chrome.browserAction.setIcon({tabId: tabId, path: "../icon19b.png"});
        
        L64B.video.onUpdateTabCalled=true;
        popupHTML = "downloader/popup.html?";
        popupHTML+= "lang="+L64B.GetLang();
        if ( tab)
		{
			var site = L64B.video.isForbidden(tab.url); //Lock youtube
			if ( site)
				popupHTML += "&forbidden="+site;
		}
        popupHTML+= "&tabid="+tabId;
		
        // OEMBED... decide later in popup?!
        if (tab.id < 0) {
            return; 
        }
        setTimeout(function () {
            L64Oembed.isSupported(tab.id, tab.url, function (oembedurl) {
                if (oembedurl) {
                    popupHTML += "&canaddvideo=1";
                    chrome.browserAction.setIcon({ tabId: tab.id, path: "../icon19b.png" });
                    chrome.browserAction.setPopup({ tabId: tab.id, popup: popupHTML });
                }
            });
        }, 700)

        chrome.browserAction.setPopup({tabId:tab.id, popup:  popupHTML}); 
        //chrome.browserAction.show(tab.id);  
	},
    
    get_paramObj:function( txt, name)
    {
        name = "\""+name+"\":\"";
        var i = txt.indexOf( name);
        if ( i<0)
            return false;
        i += name.length;
        var i2 = txt.indexOf( "\"",i);
        if ( i2<0)
            return false;
        var s = txt.substr( i,i2-i);
        s = s.replace( /\\/g, "");
        return s;
    },

    saveInfos:function(videoUrl,info, showMsg){
        var details = {	};
        details.msg="__L64_ON_NEW_VIDEO"; 
        details.videoInfo = info;
        details.videoInfo.video_url = videoUrl; 
        //if ( videoUrl && videoUrl.toLowerCase().indexOf("youtube")>=0)
        //    details.videoInfo.source_url = L64B.video.scanHTML();
        details.videoInfo.video_id = L64B.utils.crc32(videoUrl); 
        // console.log(details);
        L64B.video.addWatchedVideoItem(details.videoInfo, showMsg);
        chrome.runtime.sendMessage(details, function (response) {
			if (typeof (response) == 'undefined' && chrome.runtime.lastError)
                return;			
            //  console.log(response);
        });
        return details.videoInfo.video_id; 
    },
    playVideo: function (tabid, video_id) {
            var url = window.location.href;
            url = url.replace("extension/background.html", "startpage/index.html?page=video&id=" + video_id);
            chrome.tabs.update(tabid, { "url": url, "selected": false }, function (tab) { });
    },
	
	addWatchedVideoItem:function(detail, fShowMessage)
	{	
		chrome.storage.sync.get('video_items', function(data)
		{
			var sitems = data['video_items'];
			var aItems =false;
			if ((sitems == null)||(typeof(sitems)== 'undefined'))
				aItems = new Array();
			else
				aItems = JSON.parse(sitems);
			if( Object.prototype.toString.call( aItems ) !== '[object Array]' ) {
    				aItems = new Array();
			}
			//aItems = new Array();
			aItems.splice(0, 0, detail.video_url);
			//aItems.push(detail.video_url);
			chrome.storage.sync.set({video_items: aItems}, function(){}); 
			var newData ={}; 
			newData.video_items = JSON.stringify(aItems); 
			newData["video_item_"+ detail.video_id] = detail; 
			chrome.storage.sync.set(newData, function(){
			    if ( fShowMessage)
			    {					
			        var title = '"'+detail.title +'"' + chrome.i18n.getMessage("idadded2"); 			        
			        alert(title); 
                }
			}); 
		}); 
	} 	 
}



setTimeout( function ( ) // make sure onUpdateTab is called at least once
{
    if ( !L64B.video.onUpdateTabCalled)
    {
        chrome.tabs.getSelected(undefined, function(tab) 
        {
			if (typeof (tab) == 'undefined' && chrome.runtime.lastError)
				return;			
            L64B.video.onUpdateTab(tab.id, null, tab);
        });
    }
}, 200);


var vdl =
{
    parentUrls:new Object(),
    lasturl:new Object(),
    videolist:new Object(),
    urllist:new Object(),
    urlPlaying:new Object(),
    downloadlist:new Object(),
	statlist:new Object(),
	enableSMIL: true,
	mainWindow:false, 
	videoHandler:[
		{mime: "flv" , urlParts: [""], isVideo: true, p:1},	
		{mime: "mp4" , urlParts: [""], isVideo: true, p:1},
		{mime: "m3u8" , urlContain:".m3u8", urlParts: [""], isVideo: true, p:1},
		{mime: "webm", urlParts: [""], isVideo: true, p:1},
		{mime: "plain" , urlParts: ["youporn", ".flv"], isVideo: true, p:1}, // Youporn		
		{mime: "octet-stream" , urlParts: ["coolcdn.ch", ".flv"], isVideo: true, p:1}, 	
		{mime: "plain" , urlParts: ["youtube.com", "videoplayback", "range"], isVideo: true, p:1}, // Youtube
		{mime: "m4v" , urlParts: [""], isVideo: true, p:1}
	],

    reset:function( tabid,lasturl)
    {
		//console.log("-->Reset "+tabid);
        vdl.lasturl[tabid] = lasturl;
        vdl.videolist[tabid]=false; 
        vdl.urllist[tabid]=false; 
	    vdl.statlist[tabid] = false; 
    },
    
    launch:function(details)
    {
		//remove found videos if tabid is invalid or url has changed
		if (typeof (details) == 'undefined' && chrome.runtime.lastError)
			return;
		
        if ( details.tabId<0)
        {
            vdl.reset(details.tabId,"");
		    return;
        }
        try
        {
            chrome.tabs.get( details.tabId, function(tab)
            {
				if (typeof (tab) == 'undefined' && chrome.runtime.lastError)
					return;			
                if ( tab && vdl.lasturl[details.tabId] != tab.url)
                {
                    vdl.reset(details.tabId,tab.url);
                }
            });
        }
        catch(e)
        {
            vdl.reset(details.tabId,"");
		    return;
        }
        return; 

    },

    launchc:function(tab)
    {
		vdl.reset(tab.id,"");
    },
	
    checkObject:function(details)
    {
		if (typeof (details) == 'undefined' && chrome.runtime.lastError)
			return;

        var type = false; 
        var len =0 ; 
		var isVideo = true;
		var priority = 0; 
		
		if ( details.initiator)
			if ( L64B.video.isForbidden(details.initiator))
			{
				//console.log("forbidden:"+details.initiator);
				return;
			}
        for (var i = 0; i < details.responseHeaders.length; ++i) 
        {            
		//	console.log(details.responseHeaders[i].name+"    - "+details.responseHeaders[i].value);			
            if (details.responseHeaders[i].name === 'Content-Type')
            {
                var mime  = details.responseHeaders[i].value; 
                var url = details.url;                                   
				
				//console.log("CheckObject: "+mime+"  "+url);
                for (var xInfo =0;  xInfo <  vdl.videoHandler.length; ++xInfo) 
			    {
			   	    var comp = vdl.videoHandler[xInfo].mime; 
					
			   		if (mime.indexOf(comp)!=-1 || ( vdl.videoHandler[xInfo].urlContain && url.indexOf(vdl.videoHandler[xInfo].urlContain)!=-1))
					{
					    //console.log("Video details: ");
			            //console.log(details); 
					
						if  (mime.indexOf(comp)!=-1)
							type = mime; 
						else
						{							
							type = comp;
						}
						var parts = vdl.videoHandler[xInfo].urlParts
						for (var xparts =0; xparts< parts.length;  xparts++  )
						{
							find = parts[xparts]; 
							if (url.indexOf(find)==-1)
								type = false; 
						}
						if (type != false)
						{
							
							isVideo = vdl.videoHandler[xInfo].isVideo;
							priority = vdl.videoHandler[xInfo].p
							break;
						}
						//console.log("isVideo:"+isVideo ); 		 
					}
					
			   }
			   
			   if ( url.indexOf( "query.yahoo.com")>=0)
			   {
                    SetVideoIcon( details.tabId, true);
			   }
            }
            if (details.responseHeaders[i].name === 'Content-Length')
                len = details.responseHeaders[i].value; 
            else if (!len && details.responseHeaders[i].name === 'Content-Range')
                len = details.responseHeaders[i].value; 
        }

        if (type !== false && ((len > 1024) || !isVideo))
        {
			vdl.statlist[details.tabId] = 1; 
			if ( !vdl.urllist[details.tabId])
			    vdl.urllist[details.tabId] = new Array();
						 
            var fAddToList=true;
            var tabid = details.tabId;
            for ( var i = 0; i < vdl.urllist[tabid].length; i++)
            {
                if ( vdl.urllist[tabid][i].url == details.url)
                {
                    fAddToList=false;// allready in
                    chrome.browserAction.setIcon({tabId: tabid, path: "../icon19b.png"});
                    break;
                }
            }
            
                
            if ( fAddToList && tabid>=0)
            {				
                chrome.tabs.get( tabid, function(tab)
                {
					if (typeof (tab) == 'undefined' && chrome.runtime.lastError)
						return;			
                    if ( tab && !L64B.video.isForbidden(tab.url)) // Don't add youtube videos
                    {
                        if (tab.url.indexOf("vimeo.com")<0) // Don't add vimeo segments
                        {							
							var item = {url: details.url, mime: type, p: priority, len:len, title:tab.title};
							if ( type.indexOf("m3u") != -1)
								item.noDL = "m3u8";
                        					
                            vdl.urllist[tabid].splice(0,0,item);
                            chrome.browserAction.setIcon({tabId: tab.id, path: "../icon19b.png"});							
    			        }

                    }
                });
            }
			
        }
        
        var filename = vdl.downloadlist[details.url];
        if ( filename)
        {
            for (var i = 0; i < details.responseHeaders.length; ++i) 
            {
                if ( details.responseHeaders[i].name && details.responseHeaders[i].name.toLowerCase() == 'content-disposition')
                {
                    details.responseHeaders[i].value = "attachment; filename=\""+filename+"\"";
                }                               
                else if ( details.responseHeaders[i].name && details.responseHeaders[i].name.toLowerCase() == 'location')
                {
                    var url = details.responseHeaders[i].value;
                    vdl.downloadlist[url] = filename;
                }
            }
            
            var u = details.url;
            setTimeout( function ( ) // make sure onUpdateTab is called at least once
            {
                vdl.downloadlist[u] = false;
            }, 200);
            
            var h = {name: "Content-Disposition",value: "attachment; filename=\""+filename+"\""};
		    details.responseHeaders.push(h);
            return {
                responseHeaders: details.responseHeaders
            };
        }
    },
    
}


chrome.webRequest.onHeadersReceived.addListener(vdl.checkObject,{

        urls: ["<all_urls>"],
        
    },["responseHeaders"]);
	
	

chrome.webRequest.onCompleted.addListener(vdl.launch,{

        urls: ["<all_urls>"],

        types:["main_frame"]

   });

	
chrome.windows.getCurrent(function(window)
{
	vdl.mainWindow = window.id; 
}); 	

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(L64B.video.onUpdateTab);
chrome.tabs.onReplaced.addListener(L64B.video.onUpdateTab);  
chrome.tabs.onCreated.addListener(vdl.launchc);

 