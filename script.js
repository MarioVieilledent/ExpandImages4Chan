window.toggleImages = function() {
	var thumbs = document.getElementsByClassName("fileThumb");
	if(!expanded) {
		expanded = true;
		for(var i = 0; i < thumbs.length; i++) {
			var img = thumbs[i].getElementsByTagName('img')[0];
			if (img.alt != "File deleted.") {
                                 ImageExpansion.expand(img);
                        }
		}
	}else{
		expanded = false;
		var collapseWebm = document.getElementsByClassName("collapseWebm");
		var expandedWebm = document.getElementsByClassName("expandedWebm");
		while(collapseWebm.length > 0){
			collapseWebm[0].remove();
		}
		while(expandedWebm.length > 0){
			expandedWebm[0].remove();
		}
		for(var i = 0; i < thumbs.length; i++) {
			if(thumbs[i].style.display=="none"){
				thumbs[i].style.display = null;
			}
			var img = thumbs[i].getElementsByTagName('img')[1];
			if (img !== undefined) {
			         ImageExpansion.contract(img);
			}
		}
	}
}
toggleImages();
