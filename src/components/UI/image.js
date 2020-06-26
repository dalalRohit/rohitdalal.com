import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Me = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 100%;

    @media (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`
export default function Image(props) {
    return (
        <Me>
            <Img
                alt={"Rohit Dalal | Full Stack Software Developer"}
                title={"Rohit Dalal | Full Stack Software Developer"}
                style={{
                    margin: "2rem",
                    maxWidth: "100%",
                    maxHeight: "calc(65vh - 8rem)",
                }}
                imgStyle={{ objectFit: "contain" }}
                fluid={props.fluid}
            />
        </Me>
    )
}
