"use client";

import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function Loader() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Rive 
        src="/websiteloader.riv"
        layout={new Layout({
          fit: Fit.Cover, 
          alignment: Alignment.Center, 
        })}
      />
    </div>
  );
}
