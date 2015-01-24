#pragma strict

function Start () {
	transform.Rotate(Vector3.up*45);
}

function Update () {

}

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Player" || collider.tag == "PushBlock")
	{
		renderer.material.color = Color.yellow;
	}
		
}