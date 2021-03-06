﻿#pragma strict

var APad : AudioClip;
var BPad : AudioClip;
var CPad : AudioClip;
var DPad : AudioClip;
var EPad : AudioClip;
var FPad : AudioClip;
var GPad : AudioClip;
var fallingBlock : GameObject;
var lastNote : int;
static var notesToPlay : Array = new Array(0,6,4,2,0,4,2,0,6,5,4,3,2,1,0);

var initialNumberOfNotes : int = notesToPlay.length; 

var currentBlock : GameObject;
var isStarted : boolean;

function Start () 
{

}

function Update () 
{
	if(currentBlock == null && isStarted)
	{
		spawnBlock();
	}
}

function spawnBlock()
{	
	if(!isStarted)
	{
		isStarted = true;
	}
	
	if(notesToPlay.length > 0)
	{
		var lane = Random.Range(0,3);
		var yVal : int = transform.position.y + 2;
		var zVal : int = transform.position.z + 3;
		if(lane==0)
		{
			currentBlock = Instantiate(fallingBlock, Vector3(transform.parent.transform.position.x-5, yVal, zVal), Quaternion.identity);

		}
		else if(lane==1)
		{
			currentBlock = Instantiate(fallingBlock, Vector3(transform.parent.transform.position.x+0, yVal, zVal), Quaternion.identity);	
		}
		else
		{
			currentBlock = Instantiate(fallingBlock, Vector3(transform.parent.transform.position.x+5, yVal, zVal), Quaternion.identity);
		}
	}
	else
	{
		for(var i: int = 0; i < 5; i++)
		{
				Camera.main.orthographicSize -=1;
				yield WaitForSeconds (0.001);
		}
	}
}

function playNextNote()
{
	//lastNote = notesToPlay.pop();
	//Debug.Log(lastNote);
	//GameObject.Find("AudioManager").GetComponent(PlaySound).PlaySound(lastNote);
}

function getCubesScored()
{
	return initialNumberOfNotes - notesToPlay.length;
}