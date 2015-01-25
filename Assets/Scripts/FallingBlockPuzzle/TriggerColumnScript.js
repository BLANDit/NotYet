#pragma strict

function Start () {
}

function Update () {

}

function OnTriggerEnter(collider : Collider)
{	
	if(collider.tag == "Player")
	{
		renderer.material.color = Color.yellow;
		transform.parent.GetComponent(FallingBlockPuzzleScript).beginPuzzle();
	}
}