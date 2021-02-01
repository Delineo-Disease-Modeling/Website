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

var _utils = require("@material-ui/utils");

var _SwitchBase = _interopRequireDefault(require("../internal/SwitchBase"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("../internal/svg-icons/CheckBoxOutlineBlank"));

var _CheckBox = _interopRequireDefault(require("../internal/svg-icons/CheckBox"));

var _colorManipulator = require("../styles/colorManipulator");

var _IndeterminateCheckBox = _interopRequireDefault(require("../internal/svg-icons/IndeterminateCheckBox"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary
  },

  /* Pseudo-class applied to the root element if `checked={true}`. */
  checked: {},

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if `indeterminate={true}`. */
  indeterminate: {},

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    '&$checked, &$indeterminate': {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    '&$checked, &$indeterminate': {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.alpha)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  }
});

exports.styles = styles;
const defaultCheckedIcon = /*#__PURE__*/React.createElement(_CheckBox.default, null);
const defaultIcon = /*#__PURE__*/React.createElement(_CheckBoxOutlineBlank.default, null);
const defaultIndeterminateIcon = /*#__PURE__*/React.createElement(_IndeterminateCheckBox.default, null);
const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox(props, ref) {
  const {
    checkedIcon = defaultCheckedIcon,
    classes,
    color = 'secondary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return /*#__PURE__*/React.createElement(_SwitchBase.default, (0, _extends2.default)({
    type: "checkbox",
    classes: {
      root: (0, _clsx.default)(classes.root, classes[`color${(0, _capitalize.default)(color)}`], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color,
    inputProps: (0, _extends2.default)({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/React.cloneElement(icon, {
      fontSize: icon.props.fontSize === undefined && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: /*#__PURE__*/React.cloneElement(indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === undefined && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'secondary'
   */
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary']),

  /**
   * If `true`, the checkbox is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: _propTypes.default.node,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: _propTypes.default.bool,

  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: _propTypes.default.node,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _utils.refType,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: _propTypes.default.func,

  /**
   * If `true`, the `input` element is required.
   */
  required: _propTypes.default.bool,

  /**
   * The size of the checkbox.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['medium', 'small']),

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: _propTypes.default.any
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiCheckbox'
})(Checkbox);

exports.default = _default;