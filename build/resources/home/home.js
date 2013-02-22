(function(){ var instructions={"configs":{"home-container":{"name":"home-container","children":[{"name":"DIV","events":{},"attributes":{"id":"container"},"children":[{"name":"H1","events":{},"attributes":{},"children":[{"name":"textNode","textvalue":"Go geta home"}]},{"name":"DIV","condition":"isNestedContainer()","events":{},"attributes":{"class":"nested-container-sample"},"children":[{"name":"SPAN","events":{},"attributes":{"class":"nested-element"}}]}]}]},"repeat-sample":{"name":"repeat-sample","children":[{"name":"DIV","events":{},"attributes":{"id":"repeat-sample"},"children":[{"name":"REPEAT","events":{},"attributes":{"repeatarray":"getItemArray()"},"children":[{"name":"SPAN","events":{},"attributes":{},"children":[{"name":"textNode","textvalue":"getItemElem()"}]}]}]}]},"testing":{"name":"testing","children":[{"name":"DIV","events":{},"attributes":{"id":"test"},"children":[{"name":"A","events":{"click":"clicktest"},"attributes":{"id":"yt","href":"#","class":"link"},"children":[{"name":"textNode","textvalue":"Click"}]},{"name":"A","condition":"test()","events":{"click":"clicktest"},"attributes":{"href":"#"},"children":[{"name":"textNode","textvalue":"link 2"}]},{"name":"SPAN","events":{},"attributes":{"id":"placeholder"}}]}]}},"execs":{
		isNestedContainer: function(contextData,htmlElement){
			return true; //this element and nested element will not be generated if it is false, 
		},
		getItemArray: function(contextData){
			return contextData.items;
		},
		getItemElem: function(itemName){
			return itemName;
		},
		test:function(contextData) {
			return contextData.elementcreate;
			
			},
		clicktest:function(contextData) {
			//alert('HERE');
			$('#placeholder').text('I am Here');
			},
		player:function(contextData) {
			
			var tag = document.createElement('script');
			var tag1 = document.createElement('script');
			tag1.src =  "../src/home/rnew.js";
			tag.src = "//www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('body')[0];
            firstScriptTag.appendChild(tag);
            firstScriptTag.appendChild(tag1);
               return true;
			},
		 playvideo:function(contextData) {
			playvideo12();
			return false;	
		 },	
		 stopvideo:function(contextData) {
			pausevideo();
			return false;	
		 },
		 mute_unmute:function() {
			 mute_unmute();
			 return false;
			 
			 }			
}};$.htmlBuilder.UIFunctions('resources.home.home.js',instructions);})();