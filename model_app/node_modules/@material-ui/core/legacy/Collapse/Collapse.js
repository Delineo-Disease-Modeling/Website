import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { elementTypeAcceptingRef } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import { duration } from '../styles/transitions';
import { getTransitionProps } from '../transitions/utils';
import useTheme from '../styles/useTheme';
import { useForkRef } from '../utils';
export var styles = function styles(theme) {
  return {
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
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Collapse = /*#__PURE__*/React.forwardRef(function Collapse(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$collapsedSize = props.collapsedSize,
      collapsedSizeProp = _props$collapsedSize === void 0 ? '0px' : _props$collapsedSize,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'vertical' : _props$orientation,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? duration.standard : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "collapsedSize", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"]);

  var theme = useTheme();
  var timer = React.useRef();
  var wrapperRef = React.useRef(null);
  var autoTransitionDuration = React.useRef();
  var collapsedSize = typeof collapsedSizeProp === 'number' ? "".concat(collapsedSizeProp, "px") : collapsedSizeProp;
  var isHorizontal = orientation !== "vertical";
  var size = isHorizontal ? 'width' : 'height';
  React.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  var nodeRef = React.useRef(null);
  var handleRef = useForkRef(ref, nodeRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (maybeIsAppearing) {
      if (callback) {
        var node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };
  };

  var getWrapperSize = function getWrapperSize() {
    return wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    if (wrapperRef.current && isHorizontal) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = 'absolute';
    }

    node.style[size] = collapsedSize;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var wrapperSize = getWrapperSize();

    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = '';
    }

    var _getTransitionProps = getTransitionProps({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style[size] = "".concat(wrapperSize, "px");

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(function (node, isAppearing) {
    node.style[size] = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  var handleExit = normalizedTransitionCallback(function (node) {
    node.style[size] = "".concat(getWrapperSize(), "px");

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var handleExiting = normalizedTransitionCallback(function (node) {
    var wrapperSize = getWrapperSize();

    var _getTransitionProps2 = getTransitionProps({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration;

    if (timeout === 'auto') {
      // TODO: rename getAutoHeightDuration to something more generic (width support)
      // Actually it just calculates animation duration based on size
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style[size] = collapsedSize;

    if (onExiting) {
      onExiting(node);
    }
  });

  var addEndListener = function addEndListener(next) {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return /*#__PURE__*/React.createElement(TransitionComponent, _extends({
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
  }, other), function (state, childProps) {
    return /*#__PURE__*/React.createElement(Component, _extends({
      className: clsx(classes.root, className, isHorizontal && classes.horizontal, {
        'entered': classes.entered,
        'exited': !inProp && collapsedSize === '0px' && classes.hidden
      }[state]),
      style: _extends(_defineProperty({}, isHorizontal ? 'minWidth' : 'minHeight', collapsedSize), style),
      ref: handleRef
    }, childProps), /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.wrapper, isHorizontal && classes.horizontal),
      ref: wrapperRef
    }, /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.wrapperInner, isHorizontal && classes.horizontal)
    }, children)));
  });
});
process.env.NODE_ENV !== "production" ? Collapse.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content node to be collapsed.
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
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,

  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,

  /**
   * @ignore
   */
  onEnter: PropTypes.func,

  /**
   * @ignore
   */
  onEntered: PropTypes.func,

  /**
   * @ignore
   */
  onEntering: PropTypes.func,

  /**
   * @ignore
   */
  onExit: PropTypes.func,

  /**
   * @ignore
   */
  onExited: PropTypes.func,

  /**
   * @ignore
   */
  onExiting: PropTypes.func,

  /**
   * The collapse transition orientation.
   * @default 'vertical'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
Collapse.muiSupportAuto = true;
export default withStyles(styles, {
  name: 'MuiCollapse'
})(Collapse);