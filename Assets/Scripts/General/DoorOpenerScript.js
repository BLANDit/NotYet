#pragma strict

static var spherePuzzleFinished = false;
static var fallingBlockPuzzleFinished = false;
static var padPuzzleFinished = false;

var doorUnlocked = false;
function Start () 
{

}

function Update () 
{
	if(spherePuzzleFinished && fallingBlockPuzzleFinished && padPuzzleFinished)
	{
		//Light up/open the door
		doorUnlocked = true;
	}
}

function OnTriggerEnter(collider : Collider)
{	
	if(doorUnlocked)
	{
		//Take player to credits. 
		 Application.LoadLevel ("Credits"); 
	}
	else
	{
		//Door is not unlocked, flash a color or something.
	}
}