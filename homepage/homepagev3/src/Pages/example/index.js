import React from "react";
import { Box} from "@material-ui/core";
import GridPage from "../../Components/GridPage";
import ImageCard from "../../Components/ImageCard";
import Logo from "../../logo512.png"
export default () => {
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage
        rows={[{xs: 12, sm: 6, md: 4},{xs: 12, sm: 6, md: 4},{xs: 12, sm: 6, md: 4},{xs: 12, sm: 6, md: 4}, {xs: 12, sm: 6, md: 4},{xs: 12, sm: 6, md: 4},]}
        spacing={2}
      >
        <ImageCard image={Logo}>asd</ImageCard>
        <ImageCard  image={Logo}>asd</ImageCard>
        <ImageCard  image={Logo}>asd</ImageCard>
        <ImageCard  image={Logo}>asd</ImageCard>
        <ImageCard  image={Logo}>asd</ImageCard>
      </GridPage>
    </Box>
  );
};
