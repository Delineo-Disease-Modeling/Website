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

var _reactIs = require("react-is");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _colorManipulator = require("../styles/colorManipulator");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Button = _interopRequireDefault(require("../Button"));

// Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
_Button.default.styles;

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    borderRadius: theme.shape.borderRadius
  },

  /* Styles applied to the root element if `variant="contained"`. */
  contained: {
    boxShadow: theme.shadows[2]
  },

  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {},

  /* Styles applied to the root element if `variant="text"`. */
  text: {},

  /* Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: {
    boxShadow: 'none'
  },

  /* Pseudo-class applied to child elements if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },

  /* Styles applied to the children. */
  grouped: {
    minWidth: 40
  },

  /* Styles applied to the children if `orientation="horizontal"`. */
  groupedHorizontal: {
    '&:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    '&:not(:last-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  },

  /* Styles applied to the children if `orientation="vertical"`. */
  groupedVertical: {
    '&:not(:first-child)': {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0
    },
    '&:not(:last-child)': {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    }
  },

  /* Styles applied to the children if `variant="text"`. */
  groupedText: {},

  /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
  groupedTextHorizontal: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
    }
  },

  /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
  groupedTextVertical: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
    }
  },

  /* Styles applied to the children if `variant="text"` and `color="primary"`. */
  groupedTextPrimary: {
    '&:not(:last-child)': {
      borderColor: (0, _colorManipulator.alpha)(theme.palette.primary.main, 0.5)
    }
  },

  /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
  groupedTextSecondary: {
    '&:not(:last-child)': {
      borderColor: (0, _colorManipulator.alpha)(theme.palette.secondary.main, 0.5)
    }
  },

  /* Styles applied to the children if `variant="outlined"`. */
  groupedOutlined: {},

  /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
  groupedOutlinedHorizontal: {
    '&:not(:first-child)': {
      marginLeft: -1
    },
    '&:not(:last-child)': {
      borderRightColor: 'transparent'
    }
  },

  /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
  groupedOutlinedVertical: {
    '&:not(:first-child)': {
      marginTop: -1
    },
    '&:not(:last-child)': {
      borderBottomColor: 'transparent'
    }
  },

  /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
  groupedOutlinedPrimary: {
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },

  /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
  groupedOutlinedSecondary: {
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },

  /* Styles applied to the children if `variant="contained"`. */
  groupedContained: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    }
  },

  /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
  groupedContainedHorizontal: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.grey[400]}`,
      '&$disabled': {
        borderRight: `1px solid ${theme.palette.action.disabled}`
      }
    }
  },

  /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
  groupedContainedVertical: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
      '&$disabled': {
        borderBottom: `1px solid ${theme.palette.action.disabled}`
      }
    }
  },

  /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
  groupedContainedPrimary: {
    '&:not(:last-child)': {
      borderColor: theme.palette.primary.dark
    }
  },

  /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
  groupedContainedSecondary: {
    '&:not(:last-child)': {
      borderColor: theme.palette.secondary.dark
    }
  }
});

exports.styles = styles;
const ButtonGroup = /*#__PURE__*/React.forwardRef(function ButtonGroup(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'primary',
    component: Component = 'div',
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = 'horizontal',
    size = 'medium',
    variant = 'outlined'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);
  const themeVariantsClasses = (0, _styles.useThemeVariants)((0, _extends2.default)({}, props, {
    color,
    component: Component,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    orientation,
    size,
    variant
  }), 'MuiButtonGroup');
  const buttonClassName = (0, _clsx.default)(classes.grouped, classes[`grouped${(0, _capitalize.default)(orientation)}`], classes[`grouped${(0, _capitalize.default)(variant)}`], classes[`grouped${(0, _capitalize.default)(variant)}${(0, _capitalize.default)(orientation)}`], classes[`grouped${(0, _capitalize.default)(variant)}${color !== 'default' ? (0, _capitalize.default)(color) : ''}`], disabled && classes.disabled);
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    role: "group",
    className: (0, _clsx.default)(classes.root, themeVariantsClasses, className, fullWidth && classes.fullWidth, disableElevation && classes.disableElevation, variant === 'contained' && classes.contained, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), React.Children.map(children, child => {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return null;
    }

    if (process.env.NODE_ENV !== 'production') {
      if ((0, _reactIs.isFragment)(child)) {
        console.error(["Material-UI: The ButtonGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/React.cloneElement(child, {
      className: (0, _clsx.default)(buttonClassName, child.props.className),
      color: child.props.color || color,
      disabled: child.props.disabled || disabled,
      disableElevation: child.props.disableElevation || disableElevation,
      disableFocusRipple,
      disableRipple,
      fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
process.env.NODE_ENV !== "production" ? ButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button group.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, the buttons are disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: _propTypes.default.bool,

  /**
   * If `true`, the button keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the button ripple effect is disabled.
   * @default false
   */
  disableRipple: _propTypes.default.bool,

  /**
   * If `true`, the buttons will take up the full width of its container.
   * @default false
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The group orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['large', 'medium', 'small']),

  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['contained', 'outlined', 'text']), _propTypes.default.string])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButtonGroup'
})(ButtonGroup);

exports.default = _default;