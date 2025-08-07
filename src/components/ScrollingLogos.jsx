import apple from "../assets/Logos/logoP.jpg";
import samsung from "../assets/Logos/logoSAM.jpg";
import xiaomi from "../assets/Logos/logoX.jpg";
import oppo from "../assets/Logos/logoO.png";
import vivo from "../assets/Logos/logoV.jpg";
import realme from "../assets/Logos/logoR.jpg";
import oneplus from "../assets/Logos/logoO.jpg";
import pixel from "../assets/Logos/logoG.jpg";
import motorola from "../assets/Logos/logoM.jpg";
import nokia from "../assets/Logos/logoN.png";
import sony from "../assets/Logos/logoS.jpg";
import asus from "../assets/Logos/logoA.jpg";
import huawei from "../assets/Logos/logoH.png";

const Logos = [
  { src: apple, title: "Apple" },
  { src: samsung, title: "Samsung" },
  { src: xiaomi, title: "Xiaomi" },
  { src: oppo, title: "Oppo" },
  { src: vivo, title: "Vivo" },
  { src: realme, title: "Realme" },
  { src: oneplus, title: "OnePlus" },
  { src: pixel, title: "Pixel" },
  { src: motorola, title: "Motorola" },
  { src: nokia, title: "Nokia" },
  { src: sony, title: "Sony" },
  { src: asus, title: "Asus" },
  { src: huawei, title: "Huawei" },
];

export default function ScrollingLogos() {
  const allLogos = [...Logos, ...Logos]; // For infinite scroll

  return (
    <div className="w-full bg-white py-4">
      {/* Header Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        📱 Our Top Phone Logos
      </h2>

      {/* Scrolling Logos */}
      <div className="overflow-hidden">
        <div className="animate-scroll flex gap-8 w-max items-center">
          {allLogos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.title}
                className="h-24 w-24 rounded-full object-contain border border-gray-300 shadow-md hover:scale-110 transition-transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700 font-medium">
                {logo.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}