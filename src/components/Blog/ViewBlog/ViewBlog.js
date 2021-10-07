import React from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import Grid from "../../UI/Grid/Grid";
import Container from "../../layout/container/Container";
import p1 from "../../../image/1_540x.png";
const ViewBlog = () => {
  return (
    <Container>
      <Grid>
        <SingleBlog
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dolore? Alias consequuntur ab suscipit quo tempore ipsum porro minus modi."
          imageUrl={p1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dolore? Alias consequuntur ab suscipit quo tempore ipsum porro minus modi."
          type="indoor"
        />
      </Grid>
    </Container>
  );
};

export default ViewBlog;
