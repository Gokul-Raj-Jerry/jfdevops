import React from "react";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeThreeFooter from "../HomeThree/HomeThreeFooter/HomeThreeFooter";
import StyleHeaderSeven from "./StyleHeaderSeven/StyleHeaderSeven";
import HeaderConsultant from "./StyleHeaderSeven/HeaderConsultant";

const HeaderStyleSeven = () => {
   return (
      <>
         <PageHelmet pageTitle="Header Style Seven" />

         <StyleHeaderSeven />
         <HeaderConsultant />
         <CommonCtaArea />
         <HomeThreeFooter />
      </>
   );
};

export default HeaderStyleSeven;
