package com.tns.gen.com.google.android.gms.ads;

public class AdListener_ftns_modules_nativescript_plugin_firebase_firebase_l504_c80__ extends com.google.android.gms.ads.AdListener implements com.tns.NativeScriptHashCodeProvider {
	public AdListener_ftns_modules_nativescript_plugin_firebase_firebase_l504_c80__(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onAdLoaded()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onAdLoaded", void.class, args);
	}

	public void onAdFailedToLoad(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAdFailedToLoad", void.class, args);
	}

	public void onAdClosed()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onAdClosed", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
