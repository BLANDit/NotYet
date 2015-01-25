#pragma strict

function Start () {
	Debug.Log("started");
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