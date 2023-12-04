import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ShoesItem from "./ShoesItem";

const ShoesList = observer(() => {
    const {shoes} = useContext(Context)
    return (
        <Row className="d-flex">
            {shoes.shoes.map(shoes =>
                <ShoesItem key={shoes.id} shoes={shoes}/>
            )}
        </Row>
    );
});

export default ShoesList;