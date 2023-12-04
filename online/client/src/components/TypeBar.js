import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {shoes} = useContext(Context)
    return (
        <ListGroup>
            {shoes.types.map(type =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={type.id === shoes.selectedType.id}
                    onClick={() => shoes.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;