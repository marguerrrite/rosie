// Link component by Amelia Wattenberger | github.com/wattenberger | @wattenberger

import React, { useMemo } from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import Button from "components/_ui/Button/Button";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import "./Link.scss";

const Link = ({ to, buttonProps, isButton, doOpenInNewTab, className, children, ...props }) => {
    const isExternal = !to || !to.startsWith("/")

    const parsedClassName = useMemo(() => classNames(
        "Link",
        { "Link--is-button": isButton },
        className,
    ), [isButton, className])

    if (isExternal) return (
        <OutboundLink
            className={parsedClassName}
            href={to}
            target={doOpenInNewTab ? "_blank" : ""}
            rel={doOpenInNewTab ? "noreferrer noopener" : ""}
            {...props}>
            <LinkChildren
                {...{ buttonProps, isButton, children }}
            />
        </OutboundLink>
    )

    return (
        <GatsbyLink to={to} className={parsedClassName} {...props}>
            <LinkChildren
                {...{ buttonProps, isButton, children }}
            />
        </GatsbyLink>
    )
}

Link.propTypes = {
    to: PropTypes.string,
    buttonProps: PropTypes.object,
    isButton: PropTypes.bool,
    doOpenInNewTab: PropTypes.bool,
}
Link.defaultProps = {
    buttonProps: {},
    isButton: false,
    doOpenInNewTab: false,
}

export default Link


const LinkChildren = ({ buttonProps, isButton, children }) => (
    isButton ? (
        <Button {...buttonProps}>
            {children}
        </Button>
    ) : (
            children
        )
)