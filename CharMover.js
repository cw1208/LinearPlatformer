// Character automatically moves right until it collides with enemy
// Game logic.  Separate from input logic because the player gave input in StartAll script
function Mover () {
	// Move avatar forward constantly
	for (var i : float = -68; i<-40; i=i+0.05) {
		transform.position.x = i;
		yield;
		}
}