#pragma strict

var longevity : double = 3.2;
var age : double = 0;

var hasBeenHit : boolean;

var chime1 : AudioClip;
var chime2 : AudioClip;
var chime3 : AudioClip;
var chime4 : AudioClip;
var chime5 : AudioClip;

var chimes = new Array();

var index : int;

function Start () {
	longevity = 3.2;

	rigidbody.AddForce(Vector3.back*300);
	
	chimes = [chime1, chime2, chime3, chime4, chime5];
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
	
	index = Random.value*4;
	audio.PlayOneShot(chimes[index]);
}