exports.pad = function(string, padding, size) {
	if (padding === '') {
		padding = "a";
	}
	var pad = Array(size).join(padding);
	return pad.substring(0, size - string.length) + string.substring(0, size);
}