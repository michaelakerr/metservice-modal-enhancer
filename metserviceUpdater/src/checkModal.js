const maxChecks = 15;
const clickableNodeSelector = ".Slot .ModalContent .Modal-expander span";

let currentChecks = 0; // Keep track of how many times we have checked for a node to not get stuck in a loop

function checkIfNodeIsAvailable(millisecondsDelay) {
	// Delay the function as requested
	setTimeout(function() {
		// Try to find the target node
		const node = document.querySelector(clickableNodeSelector);
		if (node !== null) {
			// If it exists, click it
			node.click()
		} else if (currentChecks < maxChecks) {
			// If it doesn't exist and we haven't made an excessive amount of checks, try to find it later
			currentChecks++;
			console.log(`Node not yet available (checks: ${currentChecks})`);
			checkIfNodeIsAvailable(500);
		}
	
	}, millisecondsDelay);
}

window.addEventListener('load', function() {
	// Check straight away after page load
	checkIfNodeIsAvailable(0);
});
