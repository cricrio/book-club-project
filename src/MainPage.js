import React from "react";

import { Grid, GridCell } from "@rmwc/grid";

import { getCafes } from "./data";
import { CafeInfo } from "./CafeInfo";

const makeCafes = cafe => <CafeInfo {...cafe} />;
export const MainPage = () => {
  const cafes = getCafes();
  return (
    <Grid align="left">
      <GridCell span={2} phone={0} tablet={1} />
      <GridCell span={8} phone={4} tablet={10}>
        {cafes.map(makeCafes)}
      </GridCell>
      <GridCell span={2} phone={0} tablet={1} />
    </Grid>
  );
};
