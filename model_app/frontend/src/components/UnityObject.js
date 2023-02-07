import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityObject(props) {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./Build/DelineoBuild.loader.js",
        dataUrl: "./Build/DelineoBuild.data",
        frameworkUrl: "./Build/DelineoBuild.framework.js",
        codeUrl: "./Build/DelineoBuild.wasm",
    });


    return <Unity unityProvider={unityProvider} style={{
        height: "100%",
        width: "950px",
        border: "2px solid black",
        background: "grey",
    }} />;
}

export default UnityObject;