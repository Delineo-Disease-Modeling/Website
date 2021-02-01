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

var _styles = require("@material-ui/styles");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },

  /* Styles applied to the root element unless `disableGutters={true}`. */
  gutters: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },

  /* Styles applied to the root element if `variant="regular"`. */
  regular: theme.mixins.toolbar,

  /* Styles applied to the root element if `variant="dense"`. */
  dense: {
    minHeight: 48
  }
});

exports.styles = styles;
const Toolbar = /*#__PURE__*/React.forwardRef(function Toolbar(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div',
    disableGutters = false,
    variant = 'regular'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "component", "disableGutters", "variant"]);
  const themeVariantsClasses = (0, _styles.useThemeVariants)((0, _extends2.default)({}, props, {
    component: Component,
    disableGutters,
    variant
  }), 'MuiToolbar');
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, classes[variant], themeVariantsClasses, className, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Toolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: _propTypes.default.bool,

  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['dense', 'regular']), _propTypes.default.string])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiToolbar'
})(Toolbar);

exports.default = _default;