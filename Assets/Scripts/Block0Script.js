#pragma strict

var touchSound : AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision)
{
	if(collision.collider.tag == "Player")
	{
		audio.PlayOneShot(touchSound);
	}
}