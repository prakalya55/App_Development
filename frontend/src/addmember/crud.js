import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { Employeelist } from './Employeelist';

export const Crud = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">CRUD with React Context API and Hooks</h3>
                    <Heading />
                    <Employeelist />
                </div>
            </div>
        </Fragment>
    )
}