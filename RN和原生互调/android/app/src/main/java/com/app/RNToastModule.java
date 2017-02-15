/*
******************************* Copyright (c)*********************************\
**
**                 (c) Copyright 2015, Allen, china, shanghai
**                          All Rights Reserved
**
**                          
**                         
**-----------------------------------版本信息------------------------------------
** 版    本: V0.1
**
**------------------------------------------------------------------------------
********************************End of Head************************************\
*/
package com.app;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 文 件 名: RNToastModule
 * 创 建 人: Allen
 * 创建日期: 17/1/2 23:17
 * 邮   箱: AllenCoder@126.com
 * 修改时间：
 * 修改备注：
 */
public class RNToastModule extends ReactContextBaseJavaModule{
    public RNToastModule(final ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNToastAndroid";
    }
    @ReactMethod
    public void show(String msg, Callback callback){
        Toast.makeText(getReactApplicationContext(),"Js调用显示原生传递的参数是:"+msg,Toast.LENGTH_LONG).show();
        callback.invoke("RNToastModule 调用JS方法");
    }
}