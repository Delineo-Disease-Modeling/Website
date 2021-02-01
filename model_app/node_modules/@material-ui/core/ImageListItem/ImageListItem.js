import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import { isFragment } from 'react-is';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import isMuiElement from '../utils/isMuiElement';
import ImageListContext from '../ImageList/ImageListContext';
export const styles = {
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
const ImageListItem = /*#__PURE__*/React.forwardRef(function ImageListItem(props, ref) {
  // TODO: - Use jsdoc @default?: "cols rows default values are for docs only"
  const {
    children,
    classes,
    className,
    cols = 1,
    component: Component = 'li',
    rows = 1,
    style
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "cols", "component", "rows", "style"]);

  const {
    rowHeight = 'auto',
    gap,
    variant
  } = React.useContext(ImageListContext);
  let height = 'auto';

  if (variant === 'woven') {
    height = undefined;
  } else if (rowHeight !== 'auto') {
    height = rowHeight * rows + gap * (rows - 1);
  }

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: clsx(classes.root, classes[variant], className),
    ref: ref,
    style: _extends({
      height,
      gridColumnEnd: variant !== 'masonry' ? `span ${cols}` : undefined,
      gridRowEnd: variant !== 'masonry' ? `span ${rows}` : undefined,
      marginBottom: variant === 'masonry' ? gap : undefined
    }, style)
  }, other), React.Children.map(children, child => {
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