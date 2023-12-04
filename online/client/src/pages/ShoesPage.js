import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row, ButtonGroup} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneShoes} from "../http/shoesAPI";

const ShoesPage = () => {
    const [shoes, setShoes] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneShoes(id).then(data => setShoes(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + shoes.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{shoes.name}</h2>
                        <h10>Converse — знаменитий бренд, який давно є іконою американського стилю.
                            Дизайнери компанії не обмежуються одним напрямком, тому кеди підходять майже під будь-який образ.
                            Кеди Converse стали улюбленим взуттям багатьох, адже вони стильні, довговічні та комфортні.</h10>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid solid lightblue'}}
                    >
                        <h3>350 грн</h3>
                        <h4>Розміри в наявності</h4>
                        <ButtonGroup className="me-2" >
                            <Button variant="dark">36</Button>
                            <Button variant="dark">37</Button>
                            <Button variant="dark">38</Button>
                            <Button variant="dark">39</Button>
                            <Button variant="dark">40</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h1>Характеристика товара</h1>
                <h5>Матеріал підкладки: Текстиль</h5>
                <h5>Матеріал підошви: Гума</h5>
                <h5>Колір: Білий</h5>
                <h5>Висота: Низькі</h5>
                <h5>Сезон: Літо</h5>
                {shoes.info.map((info, index) =>
                    <Row key={info.id} style={{background:index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 1}}>
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>

        </Container>
    );
};

export default ShoesPage;