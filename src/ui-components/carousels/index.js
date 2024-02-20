import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_BANNER_LIST_REQUEST } from "../../reducers/banner/constant";

const CarouselHeaderUI = () => {
  const dispatch = useDispatch();
  const {
    getBannersList
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: GET_ALL_BANNER_LIST_REQUEST });
  }, [dispatch]);
  console.log(getBannersList);
  return (
    <Box>
    {getBannersList?.loading && <Skeleton/>}
     {
        !getBannersList?.loading &&
        getBannersList?.success &&
        getBannersList?.data &&  getBannersList?.data.length > 0 && (
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={2500}
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            dotListClass="custom-dot-list-style"
            draggable={false}
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 100,
              },
              mobile: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 10,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {getBannersList?.data && getBannersList?.data.length > 0 &&getBannersList?.data?.map((c, i) => (
              <Box
                key={i}
                sx={{
                  height: 300,
                }}
                component="img"
                src={c.pcImageUrl}
              />
            ))}
          </Carousel>
        )
     }
    </Box>
  );
};

export default CarouselHeaderUI;
