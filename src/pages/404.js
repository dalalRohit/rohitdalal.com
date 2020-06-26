import React from "react"
import Head from "./../components/helpers/head"

import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <>
        <Head title={"404"} info={"Rohit Dalal"} />
        <SEO />
        <div
            style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#feded1",
                height: "100vh",
            }}
        >
            <h1 style={{ fontSize: "10em" }}>404</h1>

            <Link to="/">
                <h3>Go to see Rohit Dalal's portfolio instead ;) </h3>
            </Link>
        </div>
    </>
)

export default NotFoundPage
