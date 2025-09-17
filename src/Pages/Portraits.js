import React, { useState } from "react";

import { IKImage, IKContext } from "imagekitio-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../components/Header-2";
// Define your images array with ImageKit URLs
const images = [
  "/portraits/_DSC5668_xzQfhjwV2.jpg?updatedAt=1722159750123",
  "/portraits/_DSC5548_fEuZY7ybU.jpg",
  "/portraits/_DSC5552_hOcVQpOvh.jpg",
  "/portraits/_DSC7495_fkorC_PVC.jpg?updatedAt=1722159757168",
  "/portraits/_DSC8685_6uwT9yJmk.jpg",
  "/portraits/wedding_DSC3871__hAHGhY6k.jpg?updatedAt=1722159750829",
  "/portraits/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/portraits/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/portraits/Tyjae%20_1_8228245642_AM2ivtiWR.jpg?updatedAt=1722159744741",
  "/portraits/tre_mtwdo6jSq.jpg?updatedAt=1722159742042",
  "/portraits/Stephen-2017-02_lBgEF8QzT.jpg?updatedAt=1722159729192",
  "/portraits/20130_sHxVVrGE9.jpg?updatedAt=1722159669819",
  "/portraits/David-2017-08_R9Nj_FV-h.jpg?updatedAt=1722159668969",
  "/portraits/Canadian-Tire-PitStop_8nIjK55CH.JPG?updatedAt=1722159711773",
];

const PortraitsGrid = () => {
  const [imagesList, setImagesList] = useState(images);

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
            <IKImage
              path={images[10]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[1]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />{" "}
            <IKImage
              path={images[11]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[3]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[4]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[7]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[12]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[5]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[8]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            {/* <div className="grid grid-cols-2 gap-4">
              <div>
                {" "}
                <IKImage
                  path={images[0]}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  alt="Image 1"
                />
              </div>
              <div>
                {" "}
                <IKImage
                  path={images[2]}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  alt="Image 1"
                />
              </div>
            </div> */}
            <IKImage
              path={images[13]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
          </Masonry>
        </ResponsiveMasonry>
      </IKContext>
    </div>
  );
};

export default PortraitsGrid;
