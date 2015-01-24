#pragma strict

var PadBar : GameObject;

var padBarLeft : GameObject;
var padBarTop : GameObject;
var padBarRight : GameObject;

var padBars = [padBarLeft, padBarTop, padBarRight];

var victorySound : AudioClip;

var alreadyWon : boolean = false;

function Start () {

	padBarLeft = Instantiate(PadBar, Vector3(transform.position.x-8, transform.position.y+.5, transform.position.z), Quaternion.identity);
	padBarLeft.transform.Rotate(0, 270, 0);
	padBarLeft.transform.parent = transform;
	padBarTop = Instantiate(PadBar, Vector3(transform.position.x, transform.position.y+.5, transform.position.z+8), Quaternion.identity);
	padBarTop.transform.Rotate(0, 0, 0);
	padBarTop.transform.parent = transform;
	padBarRight = Instantiate(PadBar, Vector3(transform.position.x+8, transform.position.y+.5, transform.position.z), Quaternion.identity);
	padBarRight.transform.Rotate(0, 90, 0);
	padBarRight.transform.parent = transform;
	
	padBars = [padBarLeft, padBarTop, padBarRight];
}

function Update () {

}

function checkVictoryCondition()
{
	if(!alreadyWon)
	{
		var padBarLeftScript = padBarLeft.GetComponent(PadBarScript);
		var padBarTopScript = padBarTop.GetComponent(PadBarScript);
		var padBarRightScript = padBarRight.GetComponent(PadBarScript);
		if(padBarLeftScript.occupancyList[0]>0 && padBarTopScript.occupancyList[2]>0 && padBarRightScript.occupancyList[6]>0)
		{
			declareVictory();
		}
		else if(padBarLeftScript.occupancyList[0]>0 && padBarTopScript.occupancyList[6]>0 && padBarRightScript.occupancyList[2]>0)
		{
			declareVictory();
		}
		else if(padBarLeftScript.occupancyList[2]>0 && padBarTopScript.occupancyList[0]>0 && padBarRightScript.occupancyList[6]>0)
		{
			declareVictory();
		}
		else if(padBarLeftScript.occupancyList[2]>0 && padBarTopScript.occupancyList[6]>0 && padBarRightScript.occupancyList[0]>0)
		{
			declareVictory();
		}
		else if(padBarLeftScript.occupancyList[6]>0 && padBarTopScript.occupancyList[0]>0 && padBarRightScript.occupancyList[2]>0)
		{
			declareVictory();
		}
		else if(padBarLeftScript.occupancyList[6]>0 && padBarTopScript.occupancyList[2]>0 && padBarRightScript.occupancyList[0]>0)
		{
			declareVictory();
		}
	}
}

function declareVictory()
{
	Debug.Log("Victory!");

	audio.volume = 0.04;
	audio.PlayOneShot(victorySound);
	audio.volume = 1;
	
	alreadyWon = true;
	
//	for (var i = 0; i < padBars.Length; i++)
//	{
//		padBars[i].renderer.material.color = Color.blue;
//	}
}

