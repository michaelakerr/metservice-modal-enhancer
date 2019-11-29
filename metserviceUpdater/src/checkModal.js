window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
var loaded = false;

function funn(event){
	if(loaded === true){
		console.log(event.target.id);
		document.getElementById("appendedModal").remove();
		document.getElementById("ModalOverlay").className = "ModalOverlay";
		
	}
}

if(window.location.hash){
	window.addEventListener('load', function() {
		console.log('All assets are loaded');

		loaded = true;

		chrome.storage.sync.get({'skipped': 0, 'enabled': true}, function(obj) {
			var childs = document.getElementsByClassName("Slot")[2].children[1];
			var parentzone = document.getElementById("ModalContent");
			var clone = childs.cloneNode(true);
			clone.id = "appendedModal";
			parentzone.appendChild(clone);
			
			document.getElementById("ModalOverlay").className = "ModalOverlay--open";
			var exitIcon = document.getElementById("appendedModal").children[0].children[0].children[0];
			document.getElementById("appendedModal").children[0].children[0].children[0].className = "icon icon-exit";
			document.getElementById("appendedModal").children[0].children[0].children[0].id = "exiter";

			document.getElementById("exiter").addEventListener("click", funn);
			chrome.storage.sync.set({'skipped': obj.skipped + 1});
		});
	})
}
