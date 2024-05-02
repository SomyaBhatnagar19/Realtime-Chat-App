import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

const Loaders = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        lg={3}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        height={"100%"}
      >
        <Skeleton variant="rectangular" height="100vh"/>
      </Grid>
      <Grid item  xs={6} sm={8} md={5} lg={7} height={"100%"}>
      <Stack spacing={"1rem"}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} variant="rounded" height={"5rem"} />
      ))}
    </Stack>
      </Grid>

      <Grid
        item xs={2} md={4} lg={2}
        height={"100%"}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Skeleton variant="rectangular" height="100vh"/>
      </Grid>
    </Grid>
  );
};

export default Loaders;
