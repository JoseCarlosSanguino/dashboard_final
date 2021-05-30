import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactTable from "react-table-v6";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  // Button,
  // Modal,
  // ModalHeader,
  // ModalBody,
  // Form,
  // FormGroup,
  // Label,
  // Input,
} from "reactstrap";

import {
  Chat,
  EarningCards,
  ProductYearlySales,
  SalesWeek,
  BalanceCard,
  ManageUsers,
  TodoList,
  MyCalendar,
  PostCard,
  ChatListing,
  UserActivity,
  SelectUser,
} from "../../components/dashboard/";

const Classic = () => {
  const [data, setData] = useState([])
  const instanceLogin = axios.create({
    baseURL: 'https://gdp-api-eu.telemedcare.com/',
    timeout: 5000,
  })
  const instanceAPI = axios.create({
    baseURL: 'https://gdp-api-eu.telemedcare.com/',
  });

  const getData = async () => {
    const { data } = await instanceLogin.post('doLogin', {
      "username": "josecarlos.sanguino",
      "password": "Sanguino@2021"
    })
    localStorage.setItem('token', data.item.userLogged.token);
    localStorage.setItem('groupId', data.item.userLogged.groupId);
    localStorage.setItem('userId', data.item.userLogged.id);

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        token: data.item.userLogged.token
      }
    }
    const resultado = await instanceAPI.get('patients?filter=&init=0&size=10', axiosConfig)
    let datosParse = resultado.data.item.items.map(item => {
      return {
        lastName: item.lastName,
        name: item.firstName,
        pattien: item.access,
        user: item.username,
      }
    });
    setData(datosParse)
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Row>
        <Col xs={12}>


          {/* Start Action table*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
              <i className="mdi mdi-border-right mr-2"></i>Action Table
            </CardTitle>
            <CardBody>
              <ReactTable
                columns={[
                  {
                    Header: "First Name",
                    accessor: "name",
                  },
                  {
                    Header: "Last Name",
                    accessor: "lastName",
                  },
                  {
                    Header: "Tpe",
                    accessor: "pattien",
                  },
                  {
                    Header: "Email",
                    accessor: "user",
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false,
                  },
                ]}
                defaultPageSize={10}
                showPaginationBottom={true}
                className="-striped -highlight"
                data={data}
                filterable
              />
            </CardBody>
          </Card>
          {/*--------------------------------------------------------------------------------*/}
          {/* End Action table*/}
          {/*--------------------------------------------------------------------------------*/}


          <EarningCards />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <ProductYearlySales />
        </Col>
        <Col lg={4}>
          <SalesWeek />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <SelectUser />
        </Col>
        <Col lg={4}>
          <BalanceCard />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ManageUsers />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <TodoList />
        </Col>
        <Col lg={8}>
          <MyCalendar />
        </Col>
      </Row>
      <PostCard />
      <Row>
        <Col lg={4}>
          <ChatListing />
        </Col>
        <Col lg={4}>
          <UserActivity />
        </Col>
        <Col lg={4}>
          <Chat />
        </Col>
      </Row>
    </div>
  );
};

export default Classic;
