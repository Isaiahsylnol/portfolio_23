import React, { useEffect, useState } from "react";

import { IKImage, IKContext } from "imagekitio-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../components/Header-2";
// Define your images array with ImageKit URLs
const images = [
  "/portraits/_DSC5668_xzQfhjwV2.jpg?updatedAt=1722159750123",
  "/portraits/_DSC5548_fEuZY7ybU.jpg",
  "/portraits/_DSC5552_hOcVQpOvh.jpg",
  "/portraits/_DSC7495_fkorC_PVC_L9U7tfXMw.webp",
  "/portraits/_DSC8685_6uwT9yJmk.jpg",
  "/portraits/wedding_DSC3871__hAHGhY6k.jpg?updatedAt=1722159750829",
  "/portraits/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/portraits/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/portraits/Tyjae%20_1_8228245642_AM2ivtiWR.jpg?updatedAt=1722159744741",
  "/portraits/tre_mtwdo6jSq.jpg?updatedAt=1722159742042",
  "/portraits/Stephen-2017-02_lBgEF8QzT.jpg?updatedAt=1722159729192",
  "/portraits/20130_sHxVVrGE9.jpg?updatedAt=1722159669819",
  "/portraits/David-2017-08_R9Nj_FV-h.jpg?updatedAt=1722159668969",
  "/portraits/Jonathan_8390602582_5HiFtdFon.webp",
  "/portraits/Canadian-Tire-PitStop_8nIjK55CH.JPG?updatedAt=1722159711773",
  "/portraits/_DSC6405-1_r5hByMsJw.webp",
  "/portraits/T4002_8557497835_efRo0cS_P.webp",
  "/portraits/Brazil-2014-1_DID0DAWJI.webp",
  "/portraits/Suits-2_jFEmOGN3A.webp",
  "/portraits/isaa_DSC6089_JZJlkwSQ2.webp",
  "/portraits/DSC_3166-2_9ei0MralE.webp",
  "/portraits/_DSC6649_w0z_Yf7xh.webp",
  "/portraits/_DSC6598_IIO4Zb2ug.webp",
  "/portraits/DSC_2607_LcpCohPDJ.webp",
  "/portraits/Johnathan-2013_1mBA7PFNWe.JPG",
  "/portraits/wedding_DSC3943_Y-nOF06VF.jpg",
];

const ImageWithSkeleton = ({ path, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative overflow-hidden min-h-[220px] block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-neutral-200 animate-pulse transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <IKImage
        path={path}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        alt={alt}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
    </button>
  );
};

const PortraitsGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const orderedImages = [
    images[10],
    images[1],
    images[11],
    images[3],
    images[4],
    images[7],
    images[12],
    images[25],
    images[5],
    images[17],
    images[8],
    images[24],
    images[16],
    images[13],
    images[15],
    images[18],
    images[19],
    images[21],
    images[22],
    images[23],
    images[14],
    images[20],
  ];

  useEffect(() => {
    if (!selectedImage) {
      return;
    }
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const prev = {
      bodyOverflow: bodyStyle.overflow,
      htmlOverflow: htmlStyle.overflow,
      bodyTouchAction: bodyStyle.touchAction,
      bodyOverscroll: bodyStyle.overscrollBehavior,
      htmlOverscroll: htmlStyle.overscrollBehavior,
    };
    const preventScroll = (event) => event.preventDefault();

    bodyStyle.overflow = "hidden";
    htmlStyle.overflow = "hidden";
    bodyStyle.touchAction = "none";
    bodyStyle.overscrollBehavior = "none";
    htmlStyle.overscrollBehavior = "none";
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      bodyStyle.overflow = prev.bodyOverflow;
      htmlStyle.overflow = prev.htmlOverflow;
      bodyStyle.touchAction = prev.bodyTouchAction;
      bodyStyle.overscrollBehavior = prev.bodyOverscroll;
      htmlStyle.overscrollBehavior = prev.htmlOverscroll;
    };
  }, [selectedImage]);

  return (
    <div className="p-4 mt-12">
      <Header />
      <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
        <ResponsiveMasonry
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Masonry gutter={18}>
            {orderedImages.map((path, index) => (
              <ImageWithSkeleton
                key={path}
                path={path}
                alt={`Portrait ${index + 1}`}
                onClick={() => setSelectedImage(path)} // this on click should open modal that shows the image larger
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedImage(null)}
            onWheel={(e) => e.preventDefault()}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-black shadow hover:bg-white"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <span aria-hidden="true">X</span>
              </button>
              <IKImage
                path={selectedImage}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded"
                alt="Selected portrait"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        )}
      </IKContext>
    </div>
  );
};

export default PortraitsGrid;
