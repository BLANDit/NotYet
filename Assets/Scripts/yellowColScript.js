﻿#pragma strict

function Start () {

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