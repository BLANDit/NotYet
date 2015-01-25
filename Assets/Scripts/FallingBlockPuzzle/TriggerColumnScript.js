#pragma strict

function Start () {
}

function Update () {

}

function OnTriggerEnter(collider : Collider)
{	
	if(collider.tag == "Player")
	{
		transform.parent.GetComponent(FallingBlockPuzzleScript).beginPuzzle();
	}
}