var enabled = false;

function setEnabled() { 
	var node = document.getElementById('enabled');
	node.classList.add('enabled');
	node.classList.remove('disabled');
	node.textContent = 'Enabled';
	enabled = true;
	chrome.storage.sync.set({'enabled': true});
}

function setDisabled() { 
	var node = document.getElementById('enabled');
	node.classList.add('disabled');
	node.classList.remove('enabled');
	node.textContent = 'Disabled';
	enabled = false;
	chrome.storage.sync.set({'enabled': false});
}

window.addEventListener('load', function() {
	chrome.storage.sync.get({'skipped': 0, 'enabled': true}, function(obj) {
		document.getElementById('skipped').textContent = obj.skipped;
		if (obj.enabled) {
			setEnabled();
		} else {
			setDisabled();
		}
	});
	
	document.getElementById('enabled').addEventListener('click', function() {
		if (enabled) {
			setDisabled();
		} else {
			setEnabled();
		}
	});
});
