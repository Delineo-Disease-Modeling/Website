"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("../styles");

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _utils = require("../utils");

// @inheritedComponent ButtonBase
const styles = theme => ({
  /* Styles applied to the root element. */
  root: (0, _extends2.default)({}, theme.typography.button, {
    borderRadius: theme.shape.borderRadius,
    padding: 11,
    border: `1px solid ${(0, _styles.alpha)(theme.palette.action.active, 0.12)}`,
    color: (0, _styles.alpha)(theme.palette.action.active, 0.38),
    '&$selected': {
      color: theme.palette.action.active,
      backgroundColor: (0, _styles.alpha)(theme.palette.action.active, 0.12),
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette.action.active, 0.15)
      }
    },
    '&$disabled': {
      color: (0, _styles.alpha)(theme.palette.action.disabled, 0.12)
    },
    '&:hover': {
      textDecoration: 'none',
      // Reset on mouse devices
      backgroundColor: (0, _styles.alpha)(theme.palette.text.primary, 0.05),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }),

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {},

  /* Styles applied to the `label` wrapper element. */
  label: {
    width: '100%',
    // Ensure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },

  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: 7,
    fontSize: theme.typography.pxToRem(13)
  },

  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    padding: 15,
    fontSize: theme.typography.pxToRem(15)
  }
});

exports.styles = styles;
const ToggleButton = /*#__PURE__*/React.forwardRef(function ToggleButton(props, ref) {
  const {
    children,
    classes,
    className,
    disabled = false,
    disableFocusRipple = false,
    onChange,
    onClick,
    selected,
    size = 'medium',
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "disabled", "disableFocusRipple", "onChange", "onClick", "selected", "size", "value"]);

  const handleChange = event => {
    if (onClick) {
      onClick(event, value);

      if (event.isDefaultPrevented()) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return /*#__PURE__*/React.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, disabled && classes.disabled, selected && classes.selected, size !== 'medium' && classes[`size${(0, _utils.capitalize)(size)}`]),
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    ref: ref,
    onClick: handleChange,
    onChange: onChange,
    value: value,
    "aria-pressed": selected
  }, other), /*#__PURE__*/React.createElement("span", {
    className: classes.label
  }, children));
});
process.env.NODE_ENV !== "production" ? ToggleButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
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
   * If `true`, the button is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   * @default false
   */
  disableRipple: _propTypes.default.bool,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * If `true`, the button is rendered in an active state.
   */
  selected: _propTypes.default.bool,

  /**
   * The size of the button.
   * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['large', 'medium', 'small']),

  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: _propTypes.default.any.isRequired
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiToggleButton'
})(ToggleButton);

exports.default = _default;