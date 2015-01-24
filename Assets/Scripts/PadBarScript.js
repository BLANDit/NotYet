#pragma strict

var BlockPadA : GameObject;
var BlockPadB : GameObject;
var BlockPadC : GameObject;
var BlockPadD : GameObject;
var BlockPadE : GameObject;
var BlockPadF : GameObject;
var BlockPadG : GameObject;

var blockA : GameObject;
var blockB : GameObject;
var blockC : GameObject;
var blockD : GameObject;
var blockE : GameObject;
var blockF : GameObject;
var blockG : GameObject;

var padBlocks = [blockA, blockB, blockC, blockD, blockE, blockF, blockG];

var timeBetweenPlays : float = 4.0;
var timeSincePlay : float = 0.0;

var occupancyList = [0, 0, 0, 0, 0, 0, 0];

var alreadyWon : boolean = false;

function Start () {

	occupancyList = [0, 0, 0, 0, 0, 0, 0];
		
	blockA = Instantiate(BlockPadA, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockA.transform.Translate(transform.right*-6);
	blockA.transform.parent = transform;
	blockB = Instantiate(BlockPadB, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockB.transform.Translate(transform.right*-4);
	blockB.transform.parent = transform;
	blockC = Instantiate(BlockPadC, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockC.transform.Translate(transform.right*-2);
	blockC.transform.parent = transform;
	blockD = Instantiate(BlockPadD, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockD.transform.Translate(transform.right*0);
	blockD.transform.parent = transform;
	blockE = Instantiate(BlockPadE, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockE.transform.Translate(transform.right*2);
	blockE.transform.parent = transform;
	blockF = Instantiate(BlockPadF, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockF.transform.Translate(transform.right*4);
	blockF.transform.parent = transform;
	blockG = Instantiate(BlockPadG, Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
	blockG.transform.Translate(transform.right*6);
	blockG.transform.parent = transform;
	//padBlocks = [[blockA], [blockB], [blockC], [blockD], [blockE], [blockF], [blockG]];
	padBlocks = [blockA, blockB, blockC, blockD, blockE, blockF, blockG];
	
	renderer.material.color = Color.black;
}

function moveIn(index : int)
{
	occupancyList[index] += 1;
}

function moveOut(index : int)
{
	occupancyList[index] -= 1;
}

function Update () {

	transform.parent.GetComponent(PadPuzzleScript).checkVictoryCondition();
	
	if(timeSincePlay >= timeBetweenPlays)
	{
		for (var i = 0; i < occupancyList.Length; i++)
		{
			if(occupancyList[i] > 0)
			{
				padBlocks[i].GetComponent(BlockPadScript).timedPlay(i);
				break;
			}
		}
		if(!alreadyWon)
		{
			renderer.material.color = Color.white;
		}
		
		timeSincePlay = 0;
	}
	else
	{
		if(timeSincePlay > .2 && !alreadyWon)
		{
			renderer.material.color = Color.black;
		}
		timeSincePlay += Time.deltaTime;
	}
}

function victorySequence()
{
	alreadyWon = true;
	renderer.material.color = Color(255/255.0F,185/255.0F,16/255.0F,255/255.0F);
}