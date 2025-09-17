import React, { useState } from "react";
import { IKImage, IKContext } from "imagekitio-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../components/Header-2";

const images = [
  "/landscapes/still_life.jpg",
  "/landscapes/Lucia_DSC4543-1_nQjuuaZu_.jpg?updatedAt=1722897593162",
  "/landscapes/sCanouan2_DSC4809_PGV5ELhsU.jpg?updatedAt=1722897592195",
  "/landscapes/IMG_0192_Zkwsb_iPa.JPG?updatedAt=1722897535246",
  "/landscapes/IMG_0288_vwhYtYH18.JPG?updatedAt=1722897541879",
  "/landscapes/Canouan_DSC4611_6oeioFzSd.jpg?updatedAt=1723413467676",
  "/landscapes/Flat_Iron_Building_ZVltHZq8k.jpg?updatedAt=1722897535593",
  "/landscapes/stranger-1_uIRGA6OJz.jpg?updatedAt=1722159732412",
  "/landscapes/con_DSC5622_yHevVlBjk.jpg?updatedAt=1722897216889",
  "/landscapes/beach-1662_RB7OnlWL9.jpg?updatedAt=1722897206968",
  "/landscapes/Canouan_DSC4867_5g60NB0rX.jpg?updatedAt=1722897204762",
  "/landscapes/IMG_0326_PBb6oOTP0t.JPG?updatedAt=1722897548003",
  "/landscapes/_DSC8952-2_hp9shkGZI.jpg?updatedAt=1723413455405",
  "/landscapes/_DSC1725_vHwDSKRdg.jpg?updatedAt=1723413444979",
  "/landscapes/_DSC17712_cfXmmwWLh.jpg?updatedAt=1723413460693",
];

const LandscapeGrid = () => {
  return (
    <div className="p-4 mt-12">
      <Header />
      <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
        <ResponsiveMasonry
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid pt-8"
          columnClassName="my-masonry-grid_column"
        >
          <Masonry gutter={18}>
            <IKImage
              path={images[2]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[13]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[14]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[1]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />{" "}
            <IKImage
              path={images[0]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[6]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[9]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[10]}
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
              path={images[5]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[8]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
            <IKImage
              path={images[12]}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Image 1"
            />
          </Masonry>
        </ResponsiveMasonry>
      </IKContext>
    </div>
  );
};

export default LandscapeGrid;
