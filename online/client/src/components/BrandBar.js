import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {shoes} = useContext(Context)
    return (
        <Row className="d-flex">
            {shoes.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                key={brand.id}
                className="p-3"
                onClick={() => shoes.setSelectedBrand(brand)}
                border={brand.id === shoes.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;