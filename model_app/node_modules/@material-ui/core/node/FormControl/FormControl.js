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

var _utils = require("../InputBase/utils");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _isMuiElement = _interopRequireDefault(require("../utils/isMuiElement"));

var _FormControlContext = _interopRequireDefault(require("./FormControlContext"));

const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `InputBase` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 */

exports.styles = styles;
const FormControl = /*#__PURE__*/React.forwardRef(function FormControl(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'primary',
    component: Component = 'div',
    disabled = false,
    error = false,
    fullWidth = false,
    focused: visuallyFocused,
    hiddenLabel = false,
    margin = 'none',
    required = false,
    size,
    variant = 'standard'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);
  const [adornedStart, setAdornedStart] = React.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialAdornedStart = false;

    if (children) {
      React.Children.forEach(children, child => {
        if (!(0, _isMuiElement.default)(child, ['Input', 'Select'])) {
          return;
        }

        const input = (0, _isMuiElement.default)(child, ['Select']) ? child.props.input : child;

        if (input && (0, _utils.isAdornedStart)(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  });
  const [filled, setFilled] = React.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialFilled = false;

    if (children) {
      React.Children.forEach(children, child => {
        if (!(0, _isMuiElement.default)(child, ['Input', 'Select'])) {
          return;
        }

        if ((0, _utils.isFilled)(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  });
  const [focusedState, setFocused] = React.useState(false);
  const focused = visuallyFocused !== undefined ? visuallyFocused : focusedState;

  if (disabled && focused) {
    setFocused(false);
  }

  let registerEffect;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const registeredInput = React.useRef(false);

    registerEffect = () => {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple `InputBase` components inside a FormControl.', 'This creates visual inconsistencies, only use one `InputBase`.'].join('\n'));
      }

      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }

  const onFilled = React.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = React.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = {
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return /*#__PURE__*/React.createElement(_FormControlContext.default.Provider, {
    value: childContext
  }, /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, margin !== 'none' && classes[`margin${(0, _capitalize.default)(margin)}`], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
process.env.NODE_ENV !== "production" ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
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
  color: _propTypes.default.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   * @default false
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: _propTypes.default.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: _propTypes.default.bool,

  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: _propTypes.default.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: _propTypes.default.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: _propTypes.default.bool,

  /**
   * The size of the text field.
   */
  size: _propTypes.default.oneOf(['medium', 'small']),

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: _propTypes.default.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormControl'
})(FormControl);

exports.default = _default;