import React, {useContext, useEffect} from 'react';
import {Container, Pagination} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ShoesList from "../components/ShoesList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchTypes,fetchShoes} from "../http/shoesAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {shoes} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => shoes.setTypes(data))
        fetchBrands().then(data => shoes.setBrands(data))
        fetchShoes(null, null, 1, 2).then(data => {
            shoes.setShoes(data.rows)
            shoes.setTotalCount(data.count)
        })
    },[])

    useEffect(() => {
        fetchShoes(shoes.selectedType.id, shoes.selectedBrand.id, shoes.page, 2).then(data => {
            shoes.setShoes(data.rows)
            shoes.setTotalCount(data.count)
        })
    }, [shoes.page, shoes.selectedType, shoes.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ShoesList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;