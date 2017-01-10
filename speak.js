chrome.contextMenus.create({
	title: "Speak", 
	contexts:["selection"], 
	onclick: onClickHandler,
});  

// The onClicked callback function.
function onClickHandler(info, tab) {
	var text = info.selectionText;
	var msg = new SpeechSynthesisUtterance(text);
	window.speechSynthesis.speak(msg);
};
