#pragma strict

var touchSound : AudioClip;
var maxForwardPos : float;
var minForwardPos : float;

function Start () {
	maxForwardPos = transform.position.x + 15;
	minForwardPos = transform.position.x;
	transform.Rotate(Vector3.up*45);
}

function Update () {
	if(transform.position.x > maxForwardPos)
	{
		transform.position.x = maxForwardPos;
	}
	else if(transform.position.x < minForwardPos)
	{
		transform.position.x = minForwardPos;
	}
}

function OnCollisionEnter(collision : Collision)
{
	if(collision.collider.tag == "Player")
	{
		audio.PlayOneShot(touchSound);
	}
}