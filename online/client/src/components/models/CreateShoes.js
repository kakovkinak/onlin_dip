import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form,} from "react-bootstrap";
import {Context} from "../../index";
import {createShoes, fetchBrands, fetchShoes, fetchTypes} from "../../http/shoesAPI";
import {observer} from "mobx-react-lite";

const CreateShoes = observer(({show, onHide}) => {
    const {shoes} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => shoes.setTypes(data))
        fetchBrands().then(data => shoes.setBrands(data))
    },[])

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addShoes = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', shoes.selectedBrand.id)
        formData.append('typeId', shoes.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createShoes(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати взуття
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <Dropdown className="mt-2 mb-2">
                       <Dropdown.Toggle>{shoes.selectedType.name || "Оберіть тип"}</Dropdown.Toggle>
                       <Dropdown.Menu>
                           {shoes.types.map(type =>
                           <Dropdown.Item
                               onClick={() => shoes.setSelectedType(type)}
                               key={type.id}>{type.name}</Dropdown.Item>
                           )}
                       </Dropdown.Menu>
                   </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{shoes.selectedBrand.name || "Оберіть бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {shoes.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => shoes.setSelectedBrand(brand)}
                                    key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                    placeholder="Введіть назву взуття"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введіть вартість взуття"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addShoes}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateShoes;