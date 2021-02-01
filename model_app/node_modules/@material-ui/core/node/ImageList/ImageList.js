"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ImageListContext = _interopRequireDefault(require("./ImageListContext"));

const styles = {
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
exports.styles = styles;
const ImageList = /*#__PURE__*/React.forwardRef(function ImageList(props, ref) {
  const {
    children,
    classes,
    className,
    cols = 2,
    component: Component = 'ul',
    rowHeight = 'auto',
    gap = 4,
    style: styleProp,
    variant = 'standard'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "cols", "component", "rowHeight", "gap", "style", "variant"]);
  const contextValue = React.useMemo(() => ({
    rowHeight,
    gap,
    variant
  }), [rowHeight, gap, variant]);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // Detect Internet Explorer 8+
      if (document !== undefined && 'objectFit' in document.documentElement.style === false) {
        console.error(['Material-UI: ImageList v5+ no longer natively supports Internet Explorer.', 'Use v4 of this component instead, or polyfill CSS object-fit.'].join('\n'));
      }
    }
  }, []);
  const style = variant === 'masonry' ? (0, _extends2.default)({
    columnCount: cols,
    columnGap: gap
  }, styleProp) : (0, _extends2.default)({
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap
  }, styleProp);
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, classes[variant], className),
    ref: ref,
    style: style
  }, other), /*#__PURE__*/React.createElement(_ImageListContext.default.Provider, {
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
  children: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Number of columns.
   * @default 2
   */
  cols: _propTypes.default.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * The gap between items in px.
   * @default 4
   */
  gap: _propTypes.default.number,

  /**
   * The height of one row in px.
   * @default 'auto'
   */
  rowHeight: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto']), _propTypes.default.number]),

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['masonry', 'quilted', 'standard', 'woven']), _propTypes.default.string])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiImageList'
})(ImageList);

exports.default = _default;