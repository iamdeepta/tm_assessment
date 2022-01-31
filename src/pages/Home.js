import React from "react";
import AboutUs from "../components/about_us/AboutUs";
import AboutUsImg from "../components/about_us/AboutUsImg";
import AboutUsText from "../components/about_us/AboutUsText";
import Blogs from "../components/blogs/Blogs";
import ChooseTm from "../components/choose-tm/ChooseTm";
import EasySteps from "../components/easy-steps/EasySteps";
import Expert from "../components/expert/Expert";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import OrderMedicine from "../components/order-medicine/OrderMedicine";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";

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
            header_text_display={"none"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            text={"Read More"}
          />
        }
        circle={"block"}
        circle_big_top={"20px"}
        circle_big_left={"174px"}
        circle_small_top={"355px"}
        circle_small_left={"140px"}
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
            header_text_display={"none"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            text={"Read More"}
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
        right_img={"images/video_consultation.svg"}
        right_bg_top={"-30px"}
        padding={"30px 120px"}
      />

      <ChooseTm />
      <EasySteps />
      <OrderMedicine />
      <Services />
      <Expert />

      <AboutUs
        header={"Are You a Qualified & Expert Doctor?"}
        header_bottom={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
        }
        first={
          <AboutUsText
            header_text={"Be a Part of TM"}
            header_text_display={"block"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            text={"Sign Up Now"}
          />
        }
        second={
          <AboutUsImg img={"images/qualified_img.svg"} borderRadius={"50%"} />
        }
        circle={"block"}
        circle_big_top={"40px"}
        circle_big_right={"120px"}
        circle_small_top={"355px"}
        circle_small_right={"65px"}
        left_bg={"none"}
        right_bg={"block"}
        right_img={"images/qualified.svg"}
        right_bg_top={"80px"}
        padding={"30px 160px"}
      />

      <FAQ />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
