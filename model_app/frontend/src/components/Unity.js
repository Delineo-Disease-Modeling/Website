import React, { useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityCreator() {
  
  const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "./Build/UnityBuild.loader.js",
  dataUrl: "./Build/UnityBuild.data",
  frameworkUrl: "./Build/UnityBuild.framework.js",
  codeUrl: "./Build/UnityBuild.wasm",
  });

  const handleCreateExcel = useCallback((file) => {
    let text = file;
    let csvContent = atob(text);
    var blob = new Blob([csvContent], {type: "data:application/octet-stream;base64"});
    var url  = window.URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
  }, []);

  React.useEffect(() => {
    addEventListener("ExcelCreated", handleCreateExcel);
    return () => {
      removeEventListener("ExcelCreated", handleCreateExcel);
    };
  }, [addEventListener, removeEventListener, handleCreateExcel]);



  return (
  <Unity unityProvider={unityProvider}  
  style={{
    height: "100%",
    width: "950px",
    border: "2px solid black",
    background: "grey",
  }} />
  );
} export default UnityCreator;