import React from "react";
import Form from "../components/Form/Form";

const styles = {
  display: "flex",
  justifyContent: "center",

  background: "#F2F2F2",
};



const Generate = ({history}) => (
  <main style={styles}>
      <Form url='https://demoautodoc.herokuapp.com/api/data'
      //'https://demoautodoc.herokuapp.com/api/data'
      //'http://localhost:3001/api/data'
      history={history}/>
  </main>
);

export default Generate;
