import React, { Component } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Unity/WebGL Builds/Build/UnityLoader.js",
  dataUrl: "Unity/WebGL Builds/Build/WebGL Builds.data.unityweb",
  frameworkUrl: "Unity/WebGL Builds/Build/WebGL Builds.wasm.framework.unityweb",
  codeUrl: "Unity/WebGL Builds/Build/WebGL Builds.wasm.code.unityweb",
});

const UnityGame = () => {
  return <Unity unityContext={unityContext} />;
};

export default UnityGame;