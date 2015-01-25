#pragma strict

var longevity : double = 3.2;
var age : double = 0;

var hasBeenHit : boolean;

function Start () {
	longevity = 3.2;

	rigidbody.AddForce(Vector3.back*300);
}

function Update () {
	age += Time.deltaTime;
	
	if(age > longevity)
	{
		if(!hasBeenHit)
		{
			transform.parent.GetComponent(FallingBlockPuzzleScript).refillArray();
		}
		Destroy(gameObject);
	}
	
}

function OnCollisionEnter(collision : Collision)
{
	hasBeenHit = true;
	renderer.material.color = Color.cyan;
}