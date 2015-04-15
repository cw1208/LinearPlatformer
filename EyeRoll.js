// Character automatically moves right until it collides with enemy
// Add as component of sprite, separating game logic from visual output logic
function Rolling () {
	Debug.Log ("rolling");
	while (true) {
		transform.Rotate(0,0,-3);
		yield;
		}
}