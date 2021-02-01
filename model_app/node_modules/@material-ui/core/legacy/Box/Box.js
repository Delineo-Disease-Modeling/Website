import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styleFunction from './styleFunction';
import styled from '../styles/experimentalStyled';

function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

var warnedOnce = false;
/**
 * @ignore - do not document.
 */

var BoxRoot = /*#__PURE__*/React.forwardRef(function StyledComponent(props, ref) {
  var children = props.children,
      clone = props.clone,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = _objectWithoutProperties(props, ["children", "clone", "className", "component"]);

  var spread = omit(other, styleFunction.filterProps);

  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnce && Object.keys(spread).length !== Object.keys(other).length) {
      warnedOnce = true;
      console.warn('Material-UI: You are using deprecated props on the Box component.\n' + 'You should move the properties inside the `sx` prop. For example:\n' + '<Box m={2} /> should become <Box sx={{ m: 2 }} />');
    }
  }

  if (clone) {
    return /*#__PURE__*/React.cloneElement(children, _extends({
      className: clsx(children.props.className, className)
    }, spread));
  }

  if (typeof children === 'function') {
    return children(_extends({
      className: className
    }, spread));
  }

  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    className: className
  }, spread), children);
});
process.env.NODE_ENV !== "production" ? BoxRoot.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  clone: PropTypes.bool,
  component: PropTypes.elementType
} : void 0;
/**
 * @ignore - do not document.
 */

var Box = styled(BoxRoot, {}, {
  muiName: 'MuiBox'
})(styleFunction);
export default Box;