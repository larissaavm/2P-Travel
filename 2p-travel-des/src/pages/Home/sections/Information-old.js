import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import destination1 from "assets/images/destinations/destination1.png";
import destination2 from "assets/images/destinations/destination2.png";
import destination3 from "assets/images/destinations/destination3.png";
import destination4 from "assets/images/destinations/destination4.png";

function Information() {
  const destinations = [
    { image: destination1, title: "Singapura" },
    { image: destination2, title: "Tailândia" },
    { image: destination3, title: "Paris" },
    { image: destination4, title: "Nova Zelândia" },
  ];

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title="Explore as Experiências"
                description="Descubra atividades próximas a você."
              />
              <RotatingCardBack
                image={bgBack}
                title="Explore Novos Lugares"
                description="Planeje sua próxima viagem com experiências únicas e inesquecíveis."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Saiba Mais",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {destinations.map((destination, index) => (
                <SwiperSlide key={index}>
                  <TransparentBlogCard
                    image={destination.image}
                    title={destination.title}
                    description=""
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Saiba Mais",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-button-prev-custom"
              style={{ fontSize: "20px", color: "#333" }}
            ></div>
            <div
              className="swiper-button-next-custom"
              style={{ fontSize: "20px", color: "#333" }}
            ></div>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
