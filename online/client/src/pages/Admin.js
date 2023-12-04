import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/models/CreateBrand";
import CreateShoes from "../components/models/CreateShoes";
import CreateType from "../components/models/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [shoesVisible, setShoesVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setTypeVisible(true)}
            >Додати тип
            </Button>
            <Button variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setBrandVisible(true)}
            >
                Додати бренд
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateShoes show={shoesVisible} onHide={() => setShoesVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;