#pragma strict

var APad : AudioClip;
var BPad : AudioClip;
var CPad : AudioClip;
var DPad : AudioClip;
var EPad : AudioClip;
var FPad : AudioClip;
var GPad : AudioClip;

var clipList = [APad, BPad, CPad, DPad, EPad, FPad, GPad];

function Start () {
	clipList = [APad, BPad, CPad, DPad, EPad, FPad, GPad];
}

function Update () {

}

function PlaySound(id : int)
{
	Debug.Log("Need to play "+id);
	if(id >=0 && id <= 7)
	{
		Debug.Log("Got command to play "+clipList[id]);
		audio.PlayOneShot(clipList[id]);
	}
}