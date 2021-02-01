import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { isFragment } from 'react-is';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import isMuiElement from '../utils/isMuiElement';
import ImageListContext from '../ImageList/ImageListContext';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-block',
    position: 'relative',
    lineHeight: 0 // 🤷🏻‍♂️Fixes masonry item gap

  },

  /* Styles applied to an `img` element to ensure it covers the item. */
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },

  /* Styles applied to the root element if `variant="standard"`. */
  standard: {
    // For titlebar under list item
    display: 'flex',
    flexDirection: 'column',
    '& $img': {
      height: 'auto',
      flexGrow: 1
    }
  },

  /* Styles applied to the root element if `variant="woven"`. */
  woven: {
    height: '100%',
    alignSelf: 'center',
    '&:nth-child(even)': {
      height: '70%'
    }
  }
};
var ImageListItem = /*#__PURE__*/React.forwardRef(function ImageListItem(props, ref) {
  // TODO: - Use jsdoc @default?: "cols rows default values are for docs only"
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 1 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 1 : _props$rows,
      style = props.style,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "cols", "component", "rows", "style"]);

  var _React$useContext = React.useContext(ImageListContext),
      _React$useContext$row = _React$useContext.rowHeight,
      rowHeight = _React$useContext$row === void 0 ? 'auto' : _React$useContext$row,
      gap = _React$useContext.gap,
      variant = _React$useContext.variant;

  var height = 'auto';

  if (variant === 'woven') {
    height = undefined;
  } else if (rowHeight !== 'auto') {
    height = rowHeight * rows + gap * (rows - 1);
  }

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: clsx(classes.root, classes[variant], className),
    ref: ref,
    style: _extends({
      height: height,
      gridColumnEnd: variant !== 'masonry' ? "span ".concat(cols) : undefined,
      gridRowEnd: variant !== 'masonry' ? "span ".concat(rows) : undefined,
      marginBottom: variant === 'masonry' ? gap : undefined
    }, style)
  }, other), React.Children.map(children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return null;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(["Material-UI: The ImageListItem component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (child.type === 'img' || isMuiElement(child, ['Image'])) {
      return /*#__PURE__*/React.cloneElement(child, {
        className: clsx(classes.img, child.props.className)
      });
    }

    return child;
  }));
});
process.env.NODE_ENV !== "production" ? ImageListItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * While you can pass any node as children, the main use case is for an img.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Width of the item in number of grid columns.
   * @default 1
   */
  cols: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Height of the item in number of grid rows.
   * @default 1
   */
  rows: PropTypes.number,

  /**
   * @ignore
   */
  style: PropTypes.object
} : void 0;
export default withStyles(styles, {
  name: 'MuiImageListItem'
})(ImageListItem);