var instruction={
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
		  },
		 fullscreen_toggle:function() {
       toggle_fullscreen();
        return false;

		 }

};
