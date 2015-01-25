#pragma strict
var tone: AudioClip;
var scriptName : GameObject;
var objectEnabled : boolean;

function Start () {
	objectEnabled=true;
}

function Update () {
	if(rigidbody.velocity.magnitude < 7 && objectEnabled == true)
	{
        rigidbody.AddForce(Vector3.forward * -40);
	}
}

function OnCollisionEnter(collision : Collision)
{
	if(collision.collider.tag == "Player")
	{
		renderer.material.color = Color.red;
		var zValue : int = -7 +GameObject.Find("FallingBlockSpawner").GetComponent(FallingBlockSpawner).getCubesScored();
		Debug.Log(zValue);
		rigidbody.isKinematic=true;
		transform.position = Vector3(9,.5, zValue);
		transform.rotation = Quaternion.identity;
		objectEnabled=false;
		scriptName.GetComponent(FallingBlockSpawner).playNextNote();
		yield WaitForSeconds (3);
		scriptName.GetComponent(FallingBlockSpawner).spawnBlock();
	}
	
	if(collision.collider.tag == "BackWall")
	{
		Debug.Log("Hit the backwall.");

		if(objectEnabled==true)
		{
			// Start Over Here
			Debug.Log("Hit the backwall.");
			transform.position = Vector3(100,.3,-7.9);
	 		yield WaitForSeconds (3);
 			scriptName.GetComponent(FallingBlockSpawner).spawnBlock();
			Destroy(this);
		}
	
	}
	
}