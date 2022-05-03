
import {

  Card,
  CardHeader,
  Table,
  Container,
  Row,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Administrador de Archivos</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tag</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Users</th>
                    <th scope="col">Nro de serie</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                      
                        
                
                    
      
                  </tr>
                  <tr>
                    
                    
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
