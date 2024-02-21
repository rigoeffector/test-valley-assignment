import { Box } from "@mui/material";
import "./App.css";
import CarouselHeaderUI from "./ui-components/carousels";
import HeaderBarMenu from "./ui-components/header";
import Categories from "./ui-components/categories";
import DealsCarousel from "./ui-components/deals";

function App() {
  return (
    <Box>
      <HeaderBarMenu />
      <CarouselHeaderUI />
      <Categories />
      <Box sx={{
        margin:'30px 0px'
      }}>
      <DealsCarousel isFilterEnabled={true} title={'HOT DEAL'} subTitle={'[UP TO 34 % OFF ] HAPPY HOUR'}/>

      </Box>
      <Box sx={{
        margin:'30px 0px'
      }}>
      <DealsCarousel isFilterEnabled={false} title={'New In'} subTitle={'가격,성능,디자인까지'}/>

      </Box>
    </Box>
  );
}

export default App;
