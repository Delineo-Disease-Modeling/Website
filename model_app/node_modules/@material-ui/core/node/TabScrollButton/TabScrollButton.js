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

var _KeyboardArrowLeft = _interopRequireDefault(require("../internal/svg-icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("../internal/svg-icons/KeyboardArrowRight"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

/* eslint-disable jsx-a11y/aria-role */
const styles = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    '&$disabled': {
      opacity: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};
exports.styles = styles;

var _ref = /*#__PURE__*/React.createElement(_KeyboardArrowLeft.default, {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/React.createElement(_KeyboardArrowRight.default, {
  fontSize: "small"
});

const TabScrollButton = /*#__PURE__*/React.forwardRef(function TabScrollButton(props, ref) {
  const {
    classes,
    className: classNameProp,
    direction,
    orientation,
    disabled
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "direction", "orientation", "disabled"]);
  return /*#__PURE__*/React.createElement(_ButtonBase.default, (0, _extends2.default)({
    component: "div",
    className: (0, _clsx.default)(classes.root, classNameProp, disabled && classes.disabled, orientation === 'vertical' && classes.vertical),
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
process.env.NODE_ENV !== "production" ? TabScrollButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * Which direction should the button indicate?
   */
  direction: _propTypes.default.oneOf(['left', 'right']).isRequired,

  /**
   * If `true`, the element is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']).isRequired
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTabScrollButton'
})(TabScrollButton);

exports.default = _default;