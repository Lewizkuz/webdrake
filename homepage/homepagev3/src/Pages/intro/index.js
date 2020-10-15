import React from "react";
import {Box} from "@material-ui/core";
import TextBox from "../../Components/TextBox";
import GridPage from "../../Components/GridPage";
export default () => {
  const row = ["ok", "nice", "sweet", "it", "works", "finally"];
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <GridPage spacing={2} rows={row.map(() => ({xs: 12, sm: 4}))}>
        {row.map((e, i) => (
          <TextBox key={i}>{e}</TextBox>
        ))}
      </GridPage>
    </Box>
  );
};
