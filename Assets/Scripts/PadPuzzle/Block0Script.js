#pragma strict

var touchSound : AudioClip;
var maxForwardPos : float;
var minForwardPos : float;

function Start () {
	maxForwardPos = transform.position.z + 15;
	minForwardPos = transform.position.z;
	transform.Rotate(Vector3.up*45);
}

function Update () {
	if(transform.position.z > maxForwardPos)
	{
		transform.position.z = maxForwardPos;
	}
	else if(transform.position.z < minForwardPos)
	{
		transform.position.z = minForwardPos;
	}
}

function OnCollisionEnter(collision : Collision)
{
	if(collision.collider.tag == "Player")
	{
		audio.PlayOneShot(touchSound);
	}
}