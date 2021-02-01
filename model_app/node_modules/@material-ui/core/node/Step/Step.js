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

var _StepperContext = _interopRequireDefault(require("../Stepper/StepperContext"));

var _StepContext = _interopRequireDefault(require("./StepContext"));

const styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  },

  /* Pseudo-class applied to the root element if `completed={true}`. */
  completed: {}
};
exports.styles = styles;
const Step = /*#__PURE__*/React.forwardRef(function Step(props, ref) {
  const {
    active: activeProp,
    children,
    classes,
    className,
    completed: completedProp,
    disabled: disabledProp,
    expanded = false,
    index,
    last
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["active", "children", "classes", "className", "completed", "disabled", "expanded", "index", "last"]);
  const {
    activeStep,
    connector,
    alternativeLabel,
    orientation,
    nonLinear
  } = React.useContext(_StepperContext.default);
  let [active = false, completed = false, disabled = false] = [activeProp, completedProp, disabledProp];

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }

  const contextValue = React.useMemo(() => ({
    index,
    last,
    expanded,
    icon: index + 1,
    active,
    completed,
    disabled
  }), [index, last, expanded, active, completed, disabled]);
  const newChildren = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, completed && classes.completed),
    ref: ref
  }, other), connector && alternativeLabel && index !== 0 ? connector : null, children);
  return /*#__PURE__*/React.createElement(_StepContext.default.Provider, {
    value: contextValue
  }, connector && !alternativeLabel && index !== 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, connector, newChildren) : newChildren);
});
process.env.NODE_ENV !== "production" ? Step.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes.default.bool,

  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
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
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes.default.bool,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: _propTypes.default.bool,

  /**
   * Expand the step.
   * @default false
   */
  expanded: _propTypes.default.bool,

  /**
   * The position of the step.
   * The prop defaults to the value inherited from the parent Stepper component.
   */
  index: _propTypes.default.number,

  /**
   * If `true`, the Step is displayed as rendered last.
   * The prop defaults to the value inherited from the parent Stepper component.
   */
  last: _propTypes.default.bool
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStep'
})(Step);

exports.default = _default;