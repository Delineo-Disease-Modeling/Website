import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import ImageListContext from './ImageListContext';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'grid',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  },

  /* Styles applied to the root element if `variant="masonry"`. */
  masonry: {
    display: 'block'
  },

  /* Styles applied to the root element if `variant="quilted"`. */
  quilted: {},

  /* Styles applied to the root element if `variant="standard"`. */
  standard: {},

  /* Styles applied to the root element if `variant="woven"`. */
  woven: {}
};
var ImageList = /*#__PURE__*/React.forwardRef(function ImageList(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$rowHeight = props.rowHeight,
      rowHeight = _props$rowHeight === void 0 ? 'auto' : _props$rowHeight,
      _props$gap = props.gap,
      gap = _props$gap === void 0 ? 4 : _props$gap,
      styleProp = props.style,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "cols", "component", "rowHeight", "gap", "style", "variant"]);

  var contextValue = React.useMemo(function () {
    return {
      rowHeight: rowHeight,
      gap: gap,
      variant: variant
    };
  }, [rowHeight, gap, variant]);
  React.useEffect(function () {
    if (process.env.NODE_ENV !== 'production') {
      // Detect Internet Explorer 8+
      if (document !== undefined && 'objectFit' in document.documentElement.style === false) {
        console.error(['Material-UI: ImageList v5+ no longer natively supports Internet Explorer.', 'Use v4 of this component instead, or polyfill CSS object-fit.'].join('\n'));
      }
    }
  }, []);
  var style = variant === 'masonry' ? _extends({
    columnCount: cols,
    columnGap: gap
  }, styleProp) : _extends({
    gridTemplateColumns: "repeat(".concat(cols, ", 1fr)"),
    gap: gap
  }, styleProp);
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: clsx(classes.root, classes[variant], className),
    ref: ref,
    style: style
  }, other), /*#__PURE__*/React.createElement(ImageListContext.Provider, {
    value: contextValue
  }, children));
});
process.env.NODE_ENV !== "production" ? ImageList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Items that will be in the image list.
   */
  children: PropTypes
  /* @typescript-to-proptypes-ignore */
  .node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Number of columns.
   * @default 2
   */
  cols: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The gap between items in px.
   * @default 4
   */
  gap: PropTypes.number,

  /**
   * The height of one row in px.
   * @default 'auto'
   */
  rowHeight: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([PropTypes.oneOf(['masonry', 'quilted', 'standard', 'woven']), PropTypes.string])
} : void 0;
export default withStyles(styles, {
  name: 'MuiImageList'
})(ImageList);