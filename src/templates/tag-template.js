import React from 'react'
import Head from '../components/helpers/head';
import PageLayout from './../components/pageLayout';
import {styled} from 'styled-components';

export default function Tag(props) {

    return (
        <PageLayout scroll={false} >
            <Head  title={`Blogs of "${props.pathContext ? props.pathContext.tag : 'aslkd'}" `} info={"Rohit Dalal"} />
            <h1>Tags</h1>

            <div>
                <ul>
                    <li>Display blogs with given `tag`</li>
                </ul>
            </div>
        </PageLayout>
    )
}
