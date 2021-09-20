import React from 'react'
import { Helmet } from "react-helmet";

import { IHelmetProps } from '../../types/components';

const DocHelmet: React.FC<IHelmetProps> = (props) => (
    <>
    <Helmet title={props.title} />
    <Helmet htmlAttributes={{lang: props.lang}} title={props.title}>​
        <meta name="description" content={props.description} />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content={props.username}></meta>
        <meta name="twitter:creator" content={props.username}></meta>
        <meta name="twitter:title" content={props.title}></meta>
        <meta name="twitter:description" content={props.description}></meta>
        <meta name="twitter:image" content={props.img.twitter}></meta>
​
        <meta property="og:locale" content={props.og.locale} />
        <meta property="og:site_name" content="https://anclaev.com/" />
        <meta property="og:title" content={props.title}></meta>
        <meta property="og:url" content={props.url}></meta>
        <meta property="og:description" content={props.description}></meta>
        <meta property="og:image" content={props.img.og}></meta>
        <meta property="og:image:alt" content={props.og.alt}></meta>
        <meta property="og:type" content={props.og.type} />
    </Helmet>
</>
)

export default DocHelmet