import React from 'react';
import {Card,Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom";
import {SHOES_ROUTE} from "../utils/consts";

const ShoesItem = ({shoes}) => {
const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(SHOES_ROUTE + '/' + shoes.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + shoes.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                <div></div>
                </div>
                <div>{shoes.name}</div>
            </Card>
        </Col>
    );
};


export default ShoesItem;