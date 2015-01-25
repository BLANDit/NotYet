#pragma strict

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

function Start () 
{

}

function Update () 
{
	//Debug.Log(blocksRemaining);
}

function spawnBlock()
{	
	if(notesToPlay.length > 0)
	{
		var lane = Random.Range(0,3);
		if(lane==0)
		{
			 Instantiate(fallingBlock, Vector3(-5, 2, 3.0), Quaternion.identity);

		}
		else if(lane==1)
		{
			Instantiate(fallingBlock, Vector3(0, 2, 3.0), Quaternion.identity);	
		}
		else
		{
			Instantiate(fallingBlock, Vector3(5, 2, 3.0), Quaternion.identity);
		}
	}
	else
	{
		Debug.Log("No blocks left to spawn!");
		for(var i: int = 0; i < 5; i++)
		{
				Camera.main.orthographicSize -=1;
				yield WaitForSeconds (0.001);
		}
	}
}

function playNextNote()
{
	lastNote = notesToPlay.pop();
	Debug.Log(lastNote);
	GameObject.Find("AudioManager").GetComponent(PlaySound).PlaySound(lastNote);
}

function replaceLastNote()
{
	notesToPlay.push(lastNote);
}

function getCubesScored()
{
	return initialNumberOfNotes - notesToPlay.length;
}