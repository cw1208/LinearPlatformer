// Game Object bobs gently up and down continuously
// Output logic

function Bobbing () {
	while (true){
		// Bob up
		for (var u : float = 7.8; u<8.1; u+=0.01) {
			transform.position.y = u; 
			yield; }
		// Bob down
		for (var d : float = 8.1; d>7.8; d-=0.01) {
			transform.position.y = d; 
			yield; }
			}
}