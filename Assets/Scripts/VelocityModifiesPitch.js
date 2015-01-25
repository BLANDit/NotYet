#pragma strict
var pitchOneThreshold = 1;
var pitchTwoThreshold = 2;
var pitchThreeThreshold =3;
var pitchFourThreshold = 4;
var pitchFiveThreshold = 5;
var pitchSixThreshold = 6;
var pitchSevenThreshold = 7;

var APad : AudioClip;
var BPad : AudioClip;
var CPad : AudioClip;
var DPad : AudioClip;
var EPad : AudioClip;
var FPad : AudioClip;
var GPad : AudioClip;

function Start () {

}

function Update () 
{
	if( transform.rigidbody.velocity.magnitude > 0)
	{
		if(transform.rigidbody.velocity.magnitude < pitchOneThreshold)
		{	
			audio.PlayOneShot(APad);
		}
		
		else if(transform.rigidbody.velocity.magnitude > pitchOneThreshold && transform.rigidbody.velocity.magnitude < pitchTwoThreshold)
		{
			audio.PlayOneShot(BPad);
		}
		
		else if(transform.rigidbody.velocity.magnitude > pitchTwoThreshold && transform.rigidbody.velocity.magnitude < pitchThreeThreshold)
		{
			audio.PlayOneShot(CPad);
		}
		
		else if(transform.rigidbody.velocity.magnitude > pitchThreeThreshold && transform.rigidbody.velocity.magnitude < pitchFourThreshold)
		{
			audio.PlayOneShot(DPad);
		}
		
		else if(transform.rigidbody.velocity.magnitude > pitchFourThreshold && transform.rigidbody.velocity.magnitude < pitchFiveThreshold)
		{
			audio.PlayOneShot(EPad);
		}
		
		else if(transform.rigidbody.velocity.magnitude > pitchFiveThreshold && transform.rigidbody.velocity.magnitude < pitchSixThreshold)
		{
			audio.PlayOneShot(FPad);
		}
		
		else if(transform.rigidbody.velocity.magnitude > pitchSixThreshold && transform.rigidbody.velocity.magnitude < pitchSevenThreshold)
		{
			audio.PlayOneShot(GPad);
		}

	}

}