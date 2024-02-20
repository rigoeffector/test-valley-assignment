import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_SHORTCUT_LIST_REQUEST } from "../../reducers/shorcuts/constant";

const Categories = () => {
  const dispatch = useDispatch();
  const { getShortCutsList } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: GET_ALL_SHORTCUT_LIST_REQUEST });
  }, [dispatch]);

  console.log(getShortCutsList)
  return (
    <Container>
      <Row
        className="justify-content-md-center"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "45px",
        }}
      >
        {getShortCutsList && getShortCutsList?.loading ? (
          <Skeleton />
        ) : (
          getShortCutsList &&
          getShortCutsList?.data &&
          getShortCutsList?.data.length > 0 &&
          getShortCutsList?.data?.map((s, i) => (
            <div
              key={i}
              style={{
                width: "64px",
                margin: "0px 18px",
              }}
            >
              <Box
                sx={{
                  height: 60,
                }}
                component="img"
                src={s.imageUrl}
              />
              <Typography
                sx={{
                  margin: "0px",
                  boxSizing: "border-box",
                  outline: "none",
                  color: "rgb(51, 51, 51)",
                }}
              >
                {s.title}
              </Typography>
            </div>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Categories;
