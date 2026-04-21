import imgDumplingKeju from "../assets/dumplingKeju.png";
import imgEnoki from "../assets/enoki.png";
import imgKrupukBawang from "../assets/krupukBawang.png";
import imgSawi from "../assets/sawi.png";
import imgCabe from "../assets/cabe.png";

function FloatingDecorations() {
  return (
    <div className="floating-container">
      <img src={imgCabe} className="floating-asset cabe-1" alt="" />
      <img src={imgDumplingKeju} className="floating-asset dumpling-1" alt="" />
      <img src={imgEnoki} className="floating-asset enoki-1" alt="" />
      <img src={imgCabe} className="floating-asset cabe-2" alt="" />
      <img src={imgKrupukBawang} className="floating-asset krupuk-1" alt="" />
      <img src={imgSawi} className="floating-asset sawi-1" alt="" />
    </div>
  );
}

export default FloatingDecorations;
