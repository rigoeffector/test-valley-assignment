import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { GET_ALL_PRODUCTS_LIST_REQUEST } from "../../reducers/all-products/constant";
function Content(props) {
  const { body, title, imageUrl, rating } = props;
  return (
    <div tabIndex="0">
      <Box>
        <Box
          sx={{
            height: "100%",
            // width: 200,
          }}
          id="slide_img"
        >
          <Box
            component="img"
            src={imageUrl}
            sx={{
              borderRadius: "8px",
            }}
          />
          <Box
            id="rtn"
            sx={{
              position: "absolute",
              background: "rgb(0, 158, 138)",
              top: "58%",
              left: "5%",
              zIndex: "1",
              borderRadius: "2px",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <KeyboardReturnIcon
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: 900,
              }}
            />
            <Typography
              SX={{
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              returnable
            </Typography>
          </Box>
        </Box>

        <Typography>{title}</Typography>
        {/* <Typography>{body}</Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "10px 0px",
          }}
        >
          <StarIcon
            sx={{
              fontSize: "12px",
              color: "rgb(126 126 126)",
            }}
          />
          <span
            style={{
              fontsize: "12px",
            }}
          >
            {rating}
          </span>
        </Box>
      </Box>
    </div>
  );
}

export default function DealsCarousel({ isFilterEnabled, title, subTitle }) {
  const dispatch = useDispatch();
  const { getAllProducts } = useSelector((state) => state);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS_LIST_REQUEST });
  }, [dispatch]);
  // console.log(getAllProducts);

  useEffect(() => {
    if (isFilterEnabled) {
      const deals = getAllProducts?.data?.items.filter(
        (allProducts) =>
          allProducts.viewType === "TILE" && allProducts.type === "SINGLE"
      );
      setFilteredItems(deals);
    }
  }, [getAllProducts?.data?.items, isFilterEnabled]);
  return (
    <Box>
      {getAllProducts && getAllProducts?.loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress
            sx={{
              color: "#02d095",
            }}
          />
        </Box>
      ) : (
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={400}
          isIntrinsicHeight
          infinite
          isPlaying={true}
          totalSlides={
            isFilterEnabled
              ? filteredItems[0].items?.length
              : getAllProducts &&
                getAllProducts?.data &&
                getAllProducts?.data?.totalCount
          }
          // This number can be float to let next slide show
          visibleSlides={3.25}
        >
          <Box sx={{ flexGrow: 1, margin: "0px 10%" }} height={300}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="start"
              height={"100%"}
            >
              <Grid
                container
                item
                xs={2}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 24,
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 11,
                      color: "rgb(153, 153, 153)",
                    }}
                  >
                    {subTitle}
                  </Typography>
                </Box>
                <Box>
                  <ButtonBack
                    style={{
                      background: "transparent",
                      border: "0px",
                      color: "#ddd",
                    }}
                  >
                    <ArrowBackIosIcon />
                  </ButtonBack>
                  <ButtonNext
                    style={{
                      background: "transparent",
                      border: "0px",
                      color: "#ddd",
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </ButtonNext>
                </Box>
              </Grid>

              <Grid item xs={8}>
                <Slider classNameTray="tray">
                  {getAllProducts && getAllProducts?.loading ? (
                    <CircularProgress />
                  ) : isFilterEnabled ? (
                    filteredItems[0].items?.map((p, i) => (
                      <Slide className="slide" index={i}>
                        <Content
                          body=""
                          title={p.publication?.productName}
                          imageUrl={p.publication?.media[0]?.uri}
                          rating={p.publication?.rating}
                        />
                      </Slide>
                    ))
                  ) : (
                    getAllProducts &&
                    getAllProducts.data &&
                    getAllProducts?.data.totalCount > 0 &&
                    getAllProducts?.data?.items.map((p, i) => (
                      <Slide className="slide" index={i}>
                        <Content
                          body=""
                          title={p.title}
                          imageUrl={p.thumbnail?.uri}
                          rating={p.rating}
                        />
                      </Slide>
                    ))
                  )}
                </Slider>
              </Grid>
            </Grid>
          </Box>
        </CarouselProvider>
      )}
    </Box>
  );
}
