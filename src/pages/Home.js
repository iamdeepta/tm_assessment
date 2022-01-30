import React from "react";
import AboutUs from "../components/about_us/AboutUs";
import AboutUsImg from "../components/about_us/AboutUsImg";
import AboutUsText from "../components/about_us/AboutUsText";
import ChooseTm from "../components/choose-tm/ChooseTm";
import EasySteps from "../components/easy-steps/EasySteps";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import OrderMedicine from "../components/order-medicine/OrderMedicine";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />

      <AboutUs
        header={"About Us"}
        header_bottom={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        }
        first={
          <AboutUsImg img={"images/about_us_img.svg"} borderRadius={"50%"} />
        }
        second={
          <AboutUsText
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
        }
        circle={"block"}
        left_bg={"block"}
        right_bg={"none"}
        padding={"15px 220px"}
      />

      <AboutUs
        header={"Video Consultation from the Best doctors "}
        header_bottom={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        }
        first={
          <AboutUsText
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
        }
        second={
          <AboutUsImg
            img={"images/video_consultation_img.svg"}
            borderRadius={"0%"}
          />
        }
        circle={"none"}
        left_bg={"none"}
        right_bg={"block"}
        padding={"30px 120px"}
      />

      <ChooseTm />
      <EasySteps />
      <OrderMedicine />
    </div>
  );
};

export default Home;
