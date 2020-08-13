import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Paper } from "@material-ui/core";
import GridPage from "../../Components/GridPage";
const styles = (theme) => ({});
export default function About(props) {
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]} height={"100%"}>
      <GridPage
        spacing={2}
        rows={[
          { xs: 12, md: 6 },
          { xs: 12, md: 6 },
          { xs: 12, md: 6 },
          { xs: 12, md: 6 },
        ]}
      >
        <Paper>
          <Typography align="center">Hello</Typography>
        </Paper>
        <Paper>
          <Typography align="center">Hello</Typography>
        </Paper>
        <Paper>
          <Typography align="center">Hello</Typography>
        </Paper>
        <Paper>
          <Typography align="center">Hello</Typography>
        </Paper>
      </GridPage>
    </Box>
  );
}
