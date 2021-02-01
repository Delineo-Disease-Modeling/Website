import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import StepperContext from '../Stepper/StepperContext';
import StepContext from './StepContext';
export var styles = {
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
var Step = /*#__PURE__*/React.forwardRef(function Step(props, ref) {
  var activeProp = props.active,
      children = props.children,
      classes = props.classes,
      className = props.className,
      completedProp = props.completed,
      disabledProp = props.disabled,
      _props$expanded = props.expanded,
      expanded = _props$expanded === void 0 ? false : _props$expanded,
      index = props.index,
      last = props.last,
      other = _objectWithoutProperties(props, ["active", "children", "classes", "className", "completed", "disabled", "expanded", "index", "last"]);

  var _React$useContext = React.useContext(StepperContext),
      activeStep = _React$useContext.activeStep,
      connector = _React$useContext.connector,
      alternativeLabel = _React$useContext.alternativeLabel,
      orientation = _React$useContext.orientation,
      nonLinear = _React$useContext.nonLinear;

  var _activeProp = activeProp,
      active = _activeProp === void 0 ? false : _activeProp,
      _completedProp = completedProp,
      completed = _completedProp === void 0 ? false : _completedProp,
      _disabledProp = disabledProp,
      disabled = _disabledProp === void 0 ? false : _disabledProp;

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }

  var contextValue = React.useMemo(function () {
    return {
      index: index,
      last: last,
      expanded: expanded,
      icon: index + 1,
      active: active,
      completed: completed,
      disabled: disabled
    };
  }, [index, last, expanded, active, completed, disabled]);
  var newChildren = /*#__PURE__*/React.createElement("div", _extends({
    className: clsx(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, completed && classes.completed),
    ref: ref
  }, other), connector && alternativeLabel && index !== 0 ? connector : null, children);
  return /*#__PURE__*/React.createElement(StepContext.Provider, {
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
  active: PropTypes.bool,

  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: PropTypes.bool,

  /**
   * Expand the step.
   * @default false
   */
  expanded: PropTypes.bool,

  /**
   * The position of the step.
   * The prop defaults to the value inherited from the parent Stepper component.
   */
  index: PropTypes.number,

  /**
   * If `true`, the Step is displayed as rendered last.
   * The prop defaults to the value inherited from the parent Stepper component.
   */
  last: PropTypes.bool
} : void 0;
export default withStyles(styles, {
  name: 'MuiStep'
})(Step);