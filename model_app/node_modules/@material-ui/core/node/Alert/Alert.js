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

var _styles = require("@material-ui/styles");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _colorManipulator = require("../styles/colorManipulator");

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _SuccessOutlined = _interopRequireDefault(require("../internal/svg-icons/SuccessOutlined"));

var _ReportProblemOutlined = _interopRequireDefault(require("../internal/svg-icons/ReportProblemOutlined"));

var _ErrorOutline = _interopRequireDefault(require("../internal/svg-icons/ErrorOutline"));

var _InfoOutlined = _interopRequireDefault(require("../internal/svg-icons/InfoOutlined"));

var _Close = _interopRequireDefault(require("../internal/svg-icons/Close"));

const styles = theme => {
  const getColor = theme.palette.mode === 'light' ? _colorManipulator.darken : _colorManipulator.lighten;
  const getBackgroundColor = theme.palette.mode === 'light' ? _colorManipulator.lighten : _colorManipulator.darken;
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {},

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {},

    /* Styles applied to the root element if `variant="standard"`. */
    standard: {},

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: `1px solid ${theme.palette.success.main}`,
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: `1px solid ${theme.palette.info.main}`,
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: `1px solid ${theme.palette.warning.main}`,
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: `1px solid ${theme.palette.error.main}`,
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};

exports.styles = styles;
const defaultIconMapping = {
  success: /*#__PURE__*/React.createElement(_SuccessOutlined.default, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/React.createElement(_ReportProblemOutlined.default, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/React.createElement(_ErrorOutline.default, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/React.createElement(_InfoOutlined.default, {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/React.createElement(_Close.default, {
  fontSize: "small"
});

const Alert = /*#__PURE__*/React.forwardRef(function Alert(props, ref) {
  const {
    action,
    children,
    classes,
    className,
    closeText = 'Close',
    color,
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = 'alert',
    severity = 'success',
    variant = 'standard'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);
  const themeVariantsClasses = (0, _styles.useThemeVariants)((0, _extends2.default)({}, props, {
    closeText,
    iconMapping,
    role,
    severity,
    variant
  }), 'MuiAlert');
  return /*#__PURE__*/React.createElement(_Paper.default, (0, _extends2.default)({
    role: role,
    square: true,
    elevation: 0,
    className: (0, _clsx.default)(classes.root, classes[variant], classes[`${variant}${(0, _capitalize.default)(color || severity)}`], themeVariantsClasses, className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/React.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/React.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
process.env.NODE_ENV !== "production" ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: _propTypes.default.node,

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
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Close'
   */
  closeText: _propTypes.default.string,

  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: _propTypes.default.node,

  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: _propTypes.default.shape({
    error: _propTypes.default.node,
    info: _propTypes.default.node,
    success: _propTypes.default.node,
    warning: _propTypes.default.node
  }),

  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: _propTypes.default.func,

  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: _propTypes.default.string,

  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['filled', 'outlined', 'standard']), _propTypes.default.string])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAlert'
})(Alert);

exports.default = _default;