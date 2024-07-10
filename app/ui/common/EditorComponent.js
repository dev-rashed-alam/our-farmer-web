'use client'
import React from 'react';
import {Form} from 'react-bootstrap';
import '@/public/styles/farmer/Editor.css';

const EditorComponent = ({label, value, onChange, disabled = false}) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <br/>
            <textarea
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)} rows={10}
                className="text-area"
                value={value || ''}
            />
        </Form.Group>
    );
};

export default EditorComponent;
