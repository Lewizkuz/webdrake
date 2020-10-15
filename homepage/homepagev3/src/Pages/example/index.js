import React from "react";
import {Typography, Box, Paper} from "@material-ui/core";
import GridPage from "../../Components/GridPage";

export default () => {
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage
        rows={[{xs: 12, sm: 6}, {xs: 12, sm: 6}, {xs: 12}, {xs: 12}]}
        spacing={2}
      >
        <Paper elevation={0}>
          <Typography align="center">Bislenz</Typography>
        </Paper>
        <Paper elevation={0}>
          <Typography align="center">Bislenz</Typography>
        </Paper>
        <Paper elevation={0}>
          <Typography align="center">Hello</Typography>
        </Paper>
      </GridPage>
    </Box>
  );
};
