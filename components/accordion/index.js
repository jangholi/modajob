import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import styles from './index.module.scss'

const AccordionComponent = ({ id, children }) => (
    <Accordion className={styles['accordion']} defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey={id} className={styles['card-header']}>
            {children?.[0]}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={id}>
            <Card.Body>
                {children?.[1]}
            </Card.Body>
        </Accordion.Collapse>
    </Accordion>
);

export default AccordionComponent;
