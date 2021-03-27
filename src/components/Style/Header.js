//used by User and Story

import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames'
import styled from 'styled-components'
import {Meta,LinkStyled} from './BaseStyles'
import {Link} from "react-router-dom";

const colors = {
    red: 'rgb(187, 46, 31)',
    grey: '#DADADA',
    black: 'black',
}

const HeaderStyled = styled.div`
  margin: 0;
  * + & {
    margin-top: 1em;
  }
`

const HeaderTitle = styled.h2`
  color: ${props => colors[props.color]};
  font-size: ${props => props.large ? '1.7em' : '1em'};
  margin: 0;
`

const HeaderSubtitle = Meta

export {HeaderStyled, HeaderTitle, HeaderSubtitle, LinkStyled}

/*Header.defaultProps = {
    large: false,
    contextClass: 'list'//TODO may want to make it so that a context class has
    // to be passed
}

Header.propTypes = {
    header: PropTypes.string.isRequired,
    subtitle: PropTypes.element.isRequired,
    large: PropTypes.bool.isRequired,
}*/
