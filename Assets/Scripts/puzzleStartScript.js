#pragma strict
var scriptName : GameObject;
var zoomedOut : boolean;
function Start () {
zoomedOut=false;
}

function Update () {

}

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Player" || collider.tag == "PushBlock")
	{
		renderer.material.color = Color.green;
		if(zoomedOut == false)
		{
			for(var i: int = 0; i < 5; i++)
			{
				Camera.main.orthographicSize +=1;
				yield WaitForSeconds (0.001);
			}
			zoomedOut=true;
			// Activate Falling Block Puzzle
			GameObject.Find("FallingBlockSpawner").GetComponent(FallingBlockSpawner).spawnBlock();
		}
		


		
	}
	
}