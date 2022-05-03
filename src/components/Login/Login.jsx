import {React, useState} from 'react';


import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";

  //valores del login
  





  const Login = () => {
     const[nick, setNick] = useState('')
     const[pass, setPass] = useState('')

 

	function openInNewTab(url) {
		var win = window.location.assign(url);
		win.focus();
	}

    

   const handleSubmit = (e) => {
     e.preventDefault();
      if(nick === ('admin') && pass === ('admin')) {
        console.log('anda')
        openInNewTab('/admin/marcas')
        

      }
    }
    return (
        
      <Col lg="5" md="7"
      
      
      >


        
        <Col>
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form" onSubmit = {handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                       placeholder="Nombre de Usuario"
                       type="text"
                       autoComplete="new-email"
                       value={nick}
                       onChange = {(e) => setNick(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Contraseña"
                      type="password"
                      autoComplete="new-password"
                       value={pass}
                       onChange = {(e) => setPass(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Recuerdame</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type='submit' >
                    Ingresar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Olvidaste tu constraseña?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
              </a>
            </Col>
          </Row>
        </Col>
        </Col>
    );
  };

  export default Login;