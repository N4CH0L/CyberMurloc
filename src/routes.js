/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



import AdminProveedores from "components/Proveedores/AdminProveedores";
import AdminMarcas from "components/Marcas/AdminMarcas";
import AdminMaquina from "components/Tipo de Maquina/AdminTipoMaquina";
import AdminUsuarios from "components/Usuarios/AdminUsuarios";
import ManageLogin from "components/Login/ManageLogin";
import ApiAdmin from "components/Api-work/ApiAdmin";




var routes = [
  
 
  
  {
    path: "/proveedores",
    name: "Proveedores",
    icon: "ni ni-bus-front-12 text-blue",
    component: AdminProveedores,
    layout: "/admin",
    
  },
 

  {
    path: "/marcas",
    name: "Marcas",
    icon: "ni ni-book-bookmark text-blue",
    component: AdminMarcas,
    layout: "/admin",
  },
  
  {
    path: "/Tipo Maquina",
    name: "Tipo Maquina",
    icon: "ni ni-settings text-blue",
    component: AdminMaquina,
    layout: "/admin",
  },
  {
    path: "/Usuarios",
    name: "Administrar Usuarios",
    icon: "ni ni-circle-08 text-blue",
    component: AdminUsuarios,
    layout: "/admin",
  },




  {
    path: "/api",
    name: "ApiWork",
    icon: "ni ni-circle-08 text-blue",
    component: ApiAdmin,
    layout: "/admin",
    
  },
  
  {
    path: "/login",
  
    component: ManageLogin,
    layout: "/auth",
    invisible: true
  },

  
];
export default routes;
