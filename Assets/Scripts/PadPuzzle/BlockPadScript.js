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

function timedPlay(clipIndex : int)
{
	audio.PlayOneShot(clipList[clipIndex]);
}

function OnTriggerExit(collider : Collider)
{
	if(collider.tag == "PushBlock")
	{
		if(name == "BlockAPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(0);
		}
		else if(name == "BlockBPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(1);
		}
		else if(name == "BlockCPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(2);
		}
		else if(name == "BlockDPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(3);
		}
		else if(name == "BlockEPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(4);
		}
		else if(name == "BlockFPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(5);
		}
		else if(name == "BlockGPad(Clone)")
		{
			renderer.material.color = Color.white;
			transform.parent.GetComponent(PadBarScript).moveOut(6);			
		}
	}
}

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "PushBlock")
	{
		if(name == "BlockAPad(Clone)")
		{
			renderer.material.color = Color.red;
			transform.parent.GetComponent(PadBarScript).moveIn(0);
		}
		else if(name == "BlockBPad(Clone)")
		{
			renderer.material.color = Color(255/255.0F,129/255.0F,0/255.0F,255/255.0F);
			transform.parent.GetComponent(PadBarScript).moveIn(1);
		}
		else if(name == "BlockCPad(Clone)")
		{
			renderer.material.color = Color.yellow;
			transform.parent.GetComponent(PadBarScript).moveIn(2);
		}
		else if(name == "BlockDPad(Clone)")
		{
			renderer.material.color = Color.green;
			transform.parent.GetComponent(PadBarScript).moveIn(3);
		}
		else if(name == "BlockEPad(Clone)")
		{
			renderer.material.color = Color.blue;
			transform.parent.GetComponent(PadBarScript).moveIn(4);
		}
		else if(name == "BlockFPad(Clone)")
		{
			renderer.material.color = Color(84/255.0F,22/255.0F,180/255.0F,255/255.0F);
			transform.parent.GetComponent(PadBarScript).moveIn(5);
		}
		else if(name == "BlockGPad(Clone)")
		{
			renderer.material.color = Color(164/255.0F,66/255.0F,220/255.0F,255/255.0F);
			transform.parent.GetComponent(PadBarScript).moveIn(6);
		}
	}
}