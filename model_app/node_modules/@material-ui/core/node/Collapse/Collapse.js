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

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _utils = require("@material-ui/utils");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _transitions = require("../styles/transitions");

var _utils2 = require("../transitions/utils");

var _useTheme = _interopRequireDefault(require("../styles/useTheme"));

var _utils3 = require("../utils");

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    height: 0,
    overflow: 'hidden',
    transition: theme.transitions.create('height'),
    '&$horizontal': {
      height: 'auto',
      width: 0,
      transition: theme.transitions.create('width')
    }
  },

  /* Pseudo-class applied to the root element if `orientation="horizontal"`. */
  horizontal: {},

  /* Styles applied to the root element when the transition has entered. */
  entered: {
    height: 'auto',
    overflow: 'visible',
    '&$horizontal': {
      width: 'auto'
    }
  },

  /* Styles applied to the root element when the transition has exited and `collapsedSize` != 0px. */
  hidden: {
    visibility: 'hidden'
  },

  /* Styles applied to the outer wrapper element. */
  wrapper: {
    // Hack to get children with a negative margin to not falsify the height computation.
    display: 'flex',
    width: '100%',
    '&$horizontal': {
      width: 'auto',
      height: '100%'
    }
  },

  /* Styles applied to the inner wrapper element. */
  wrapperInner: {
    width: '100%',
    '&$horizontal': {
      width: 'auto',
      height: '100%'
    }
  }
});
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


exports.styles = styles;
const Collapse = /*#__PURE__*/React.forwardRef(function Collapse(props, ref) {
  const {
    children,
    classes,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    component: Component = 'div',
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = 'vertical',
    style,
    timeout = _transitions.duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = _reactTransitionGroup.Transition
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "collapsedSize", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"]);
  const theme = (0, _useTheme.default)();
  const timer = React.useRef();
  const wrapperRef = React.useRef(null);
  const autoTransitionDuration = React.useRef();
  const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation !== "vertical";
  const size = isHorizontal ? 'width' : 'height';
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const nodeRef = React.useRef(null);
  const handleRef = (0, _utils3.useForkRef)(ref, nodeRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = 'absolute';
    }

    node.style[size] = collapsedSize;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();

    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = '';
    }

    const {
      duration: transitionDuration
    } = (0, _utils2.getTransitionProps)({
      style,
      timeout
    }, {
      mode: 'enter'
    });

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style[size] = `${wrapperSize}px`;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback(node => {
    node.style[size] = `${getWrapperSize()}px`;

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback(node => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration
    } = (0, _utils2.getTransitionProps)({
      style,
      timeout
    }, {
      mode: 'exit'
    });

    if (timeout === 'auto') {
      // TODO: rename getAutoHeightDuration to something more generic (width support)
      // Actually it just calculates animation duration based on size
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style[size] = collapsedSize;

    if (onExiting) {
      onExiting(node);
    }
  });

  const addEndListener = next => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return /*#__PURE__*/React.createElement(TransitionComponent, (0, _extends2.default)({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    nodeRef: nodeRef,
    timeout: timeout === 'auto' ? null : timeout
  }, other), (state, childProps) => /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, isHorizontal && classes.horizontal, {
      'entered': classes.entered,
      'exited': !inProp && collapsedSize === '0px' && classes.hidden
    }[state]),
    style: (0, _extends2.default)({
      [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize
    }, style),
    ref: handleRef
  }, childProps), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(classes.wrapper, isHorizontal && classes.horizontal),
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(classes.wrapperInner, isHorizontal && classes.horizontal)
  }, children))));
});
process.env.NODE_ENV !== "production" ? Collapse.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content node to be collapsed.
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
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _utils.elementTypeAcceptingRef,

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntered: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExited: _propTypes.default.func,

  /**
   * @ignore
   */
  onExiting: _propTypes.default.func,

  /**
   * The collapse transition orientation.
   * @default 'vertical'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto']), _propTypes.default.number, _propTypes.default.shape({
    appear: _propTypes.default.number,
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : void 0;
Collapse.muiSupportAuto = true;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiCollapse'
})(Collapse);

exports.default = _default;