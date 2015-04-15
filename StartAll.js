// Calls all co-routines at beginning of game
// Input logic upon player starting game
function Start () {
	GetComponent("CharMover").Mover();
	// Call EyeRoll script to roll the eyeball sprite/avatar
	GameObject.FindWithTag("Player").GetComponent("EyeRoll").Rolling();
	GameObject.FindWithTag("Enemy").GetComponent("IdleBob").Bobbing();
	Debug.Log("Start");
}
