
import {Container, Row, Col } from "reactstrap";

const UserHeaderTP = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "200x",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/Portu.jpeg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center left",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">olá</h1>
              <p className="text-white mt-0 mb-5">
                Esta es la pagina de tipo de maquina, aqui puedes ver, editar 
                y agregar tipos de maquina a la lista!
              </p>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeaderTP;