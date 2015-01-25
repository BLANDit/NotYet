#pragma strict

var spawnLocation0 : Vector3;
var spawnLocation1 : Vector3;
var spawnLocation2 : Vector3;
var spawnLocation3 : Vector3;
var spawnLocation4 : Vector3;
var spawnLocation5 : Vector3;
var spawnLocation6 : Vector3;

var TriggerColumn : GameObject;
var myTriggerColumn : GameObject;

var FallingBlock : GameObject;

var locationArray = new Array();

var timeSinceFire : double;
var timeBetweenFires : double = 1.0;

var isStarted : boolean = false;

var isBeaten : boolean = false;

function Start () {
	
	var yPos = transform.position.y + 1;
	var zPos = transform.position.z + 8;
	spawnLocation0 = Vector3(transform.position.x - 6, yPos, zPos);
	spawnLocation1 = Vector3(transform.position.x - 4, yPos, zPos);
	spawnLocation2 = Vector3(transform.position.x - 2, yPos, zPos);
	spawnLocation3 = Vector3(transform.position.x - 0, yPos, zPos);
	spawnLocation4 = Vector3(transform.position.x + 2, yPos, zPos);
	spawnLocation5 = Vector3(transform.position.x + 4, yPos, zPos);
	spawnLocation6 = Vector3(transform.position.x + 6, yPos, zPos);
	
	locationArray = [spawnLocation0, spawnLocation1, spawnLocation2,
	 spawnLocation3, spawnLocation4, spawnLocation5, spawnLocation6,
	  spawnLocation4, spawnLocation2, spawnLocation0, spawnLocation0,
	   spawnLocation4, spawnLocation5, spawnLocation1, spawnLocation3,
	spawnLocation4, spawnLocation6, spawnLocation5, spawnLocation4,
	 spawnLocation3, spawnLocation2, spawnLocation1, spawnLocation3,
	  spawnLocation4, spawnLocation2, spawnLocation0, spawnLocation0,
	   spawnLocation4, spawnLocation5, spawnLocation1, spawnLocation3,
	    spawnLocation0];
	    
	myTriggerColumn = Instantiate(TriggerColumn, Vector3(transform.position.x, transform.position.y + .5, transform.position.z - 9), Quaternion.identity);
	myTriggerColumn.transform.parent = transform;
}

function Update () {
	if(isStarted)
	{
		timeSinceFire += Time.deltaTime;
		if(timeSinceFire > timeBetweenFires)
		{
			fireNext();
			timeSinceFire = 0;
		}
	}
}

function fireNext()
{
	if(!isBeaten)
	{
		for(var i : int; i < locationArray.length; i++)
		{
			if(locationArray[i] != null)
			{
				var thisFallingBlock : GameObject = Instantiate(FallingBlock, locationArray[i], Quaternion.identity);
				locationArray[i] = null;
				thisFallingBlock.transform.parent = transform;
				thisFallingBlock = null;
				break;
			}
		}
		if(i == locationArray.length)
		{
			declareVictory();
		}
	}
	
}

function refillArray()
{
	
	locationArray = [spawnLocation0, spawnLocation1, spawnLocation2,
	 spawnLocation3, spawnLocation4, spawnLocation5, spawnLocation6,
	  spawnLocation4, spawnLocation2, spawnLocation0, spawnLocation0,
	   spawnLocation4, spawnLocation5, spawnLocation1, spawnLocation3,
	spawnLocation4, spawnLocation6, spawnLocation5, spawnLocation4,
	 spawnLocation3, spawnLocation2, spawnLocation1, spawnLocation3,
	  spawnLocation4, spawnLocation2, spawnLocation0, spawnLocation0,
	   spawnLocation4, spawnLocation5, spawnLocation1, spawnLocation3,
	    spawnLocation0];
}

function declareVictory()
{
	isBeaten = true;
	transform.Find("Plane").renderer.material.color = Color(255/255.0F,185/255.0F,16/255.0F,255/255.0F);
	GameObject.FindGameObjectWithTag("door").GetComponent(DoorOpenerScript).fallingBlockPuzzleFinished = true;

}

function beginPuzzle()
{
	isStarted = true;
}