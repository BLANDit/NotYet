﻿#pragma strict

var tone : AudioClip;


function Start () 
{

}

function Update () 
{

}

function OnCollisionEnter(collision : Collision)
{
	if(collision.collider.name != "Plane")
	{
		Debug.Log("Playing single tone.");
		audio.PlayOneShot(this.tone);
		transform.parent.GetComponent(CircleOfBallsPuzzle).TonePlayed(tone);
	}
}