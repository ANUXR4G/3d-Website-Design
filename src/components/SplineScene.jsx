import "./SplineScene.scss";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="spline-scene">
      {/* Update the spline compoment below with your spline scene url */}
      <Spline scene="https://prod.spline.design/RiRx1720pMgOKAQZ/scene.splinecode" />
    </div>
  );
}
