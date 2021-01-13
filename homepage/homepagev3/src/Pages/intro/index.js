import React from "react";
import {Box} from "@material-ui/core";
import TextBox from "../../Components/TextBox";
import GridPage from "../../Components/GridPage";
import Article from "../../Components/Article";
export default () => {
  const row = [
    "Variable, flexible solutions. Upgrade your flow.",
    "nice",
    "sweet",
    "it",
    "works",
    "finally",
  ];
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4]}>
      <GridPage spacing={2} rows={row.map(() => ({xs: 12, sm: 6, md: 4}))}>
        {row.map((e, i) => (
          <Article key={i} head={e}>
            {row.map((e, i) => e)}
          </Article>
        ))}
      </GridPage>
    </Box>
  );
};
