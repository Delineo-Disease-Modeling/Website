import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { chainPropTypes } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import useTheme from '../styles/useTheme';
import { alpha, lighten, darken } from '../styles/colorManipulator';
import useIsFocusVisible from '../utils/useIsFocusVisible';
import useEnhancedEffect from '../utils/useEnhancedEffect';
import ownerDocument from '../utils/ownerDocument';
import useEventCallback from '../utils/useEventCallback';
import useForkRef from '../utils/useForkRef';
import capitalize from '../utils/capitalize';
import useControlled from '../utils/useControlled';
import ValueLabel from './ValueLabel';

function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function (acc, value, index) {
    var distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance: distance,
        index: index
      };
    }

    return acc;
  }, null),
      closestIndex = _values$reduce.index;

  return closestIndex;
}

function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split('e-');
    var matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  var nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex(_ref) {
  var values = _ref.values,
      source = _ref.source,
      newValue = _ref.newValue,
      index = _ref.index;

  // Performance shortcut
  if (source[index] === newValue) {
    return source;
  }

  var output = values.slice();
  output[index] = newValue;
  return output;
}

function focusThumb(_ref2) {
  var sliderRef = _ref2.sliderRef,
      activeIndex = _ref2.activeIndex,
      setActive = _ref2.setActive;
  var doc = ownerDocument(sliderRef.current);

  if (!sliderRef.current.contains(doc.activeElement) || Number(doc.activeElement.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current.querySelector("[role=\"slider\"][data-index=\"".concat(activeIndex, "\"]")).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  'horizontal-reverse': {
    offset: function offset(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};

var Identity = function Identity(x) {
  return x;
}; // TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.


var cachedSupportsTouchActionNone;

function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    var element = document.createElement('div');
    element.style.touchAction = 'none';
    document.body.appendChild(element);
    cachedSupportsTouchActionNone = window.getComputedStyle(element).touchAction === 'none';
    element.parentElement.removeChild(element);
  }

  return cachedSupportsTouchActionNone;
}

export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: '100%',
      boxSizing: 'content-box',
      padding: '13px 0',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      // Disable scroll capabilities.
      touchAction: 'none',
      color: theme.palette.primary.main,
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        pointerEvents: 'none',
        cursor: 'default',
        color: theme.palette.grey[400]
      },
      '&$vertical': {
        width: 2,
        height: '100%',
        padding: '0 13px'
      },
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      '@media (pointer: coarse)': {
        // Reach 42px touch target, about ~8mm on screen.
        padding: '20px 0',
        '&$vertical': {
          padding: '0 20px'
        }
      },
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {// TODO v5: move the style here
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      '&$vertical': {
        marginBottom: 'auto',
        marginRight: 20
      }
    },

    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Pseudo-class applied to the root and thumb element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the rail element. */
    rail: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      opacity: 0.38,
      '$vertical &': {
        height: '100%',
        width: 2
      }
    },

    /* Styles applied to the track element. */
    track: {
      display: 'block',
      position: 'absolute',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      '$vertical &': {
        width: 2
      }
    },

    /* Styles applied to the track element if `track={false}`. */
    trackFalse: {
      '& $track': {
        display: 'none'
      }
    },

    /* Styles applied to the track element if `track="inverted"`. */
    trackInverted: {
      '& $track': {
        backgroundColor: // Same logic as the LinearProgress track color
        theme.palette.mode === 'light' ? lighten(theme.palette.primary.main, 0.62) : darken(theme.palette.primary.main, 0.5)
      },
      '& $rail': {
        opacity: 1
      }
    },

    /* Styles applied to the thumb element. */
    thumb: {
      position: 'absolute',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: 'border-box',
      borderRadius: '50%',
      outline: 0,
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: theme.transitions.create(['box-shadow'], {
        duration: theme.transitions.duration.shortest
      }),
      '&::after': {
        position: 'absolute',
        content: '""',
        borderRadius: '50%',
        // reach 42px hit target (2 * 15 + thumb diameter)
        left: -15,
        top: -15,
        right: -15,
        bottom: -15
      },
      '&:hover, &$focusVisible': {
        boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.primary.main, 0.16)),
        '@media (hover: none)': {
          boxShadow: 'none'
        }
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.primary.main, 0.16))
      },
      '&$disabled': {
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        '&:hover': {
          boxShadow: 'none'
        }
      },
      '$vertical &': {
        marginLeft: -5,
        marginBottom: -6
      },
      '$vertical &$disabled': {
        marginLeft: -3,
        marginBottom: -4
      }
    },

    /* Styles applied to the thumb element if `color="primary"`. */
    thumbColorPrimary: {// TODO v5: move the style here
    },

    /* Styles applied to the thumb element if `color="secondary"`. */
    thumbColorSecondary: {
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.secondary.main, 0.16))
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.secondary.main, 0.16))
      }
    },

    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},

    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},

    /* Styles applied to the thumb label element. */
    valueLabel: {
      // IE11 centering bug, to remove from the customization demos once no longer supported
      left: 'calc(-50% - 4px)'
    },

    /* Styles applied to the mark element. */
    mark: {
      position: 'absolute',
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: theme.palette.background.paper,
      opacity: 0.8
    },

    /* Styles applied to the mark label element. */
    markLabel: _extends({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: 'absolute',
      top: 26,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      '$vertical &': {
        top: 'auto',
        left: 26,
        transform: 'translateY(50%)'
      },
      '@media (pointer: coarse)': {
        top: 40,
        '$vertical &': {
          left: 31
        }
      }
    }),

    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};

var Forward = function Forward(_ref3) {
  var children = _ref3.children;
  return children;
};

var Slider = /*#__PURE__*/React.forwardRef(function Slider(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledby = props['aria-labelledby'],
      ariaValuetext = props['aria-valuetext'],
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      getAriaLabel = props.getAriaLabel,
      getAriaValueText = props.getAriaValueText,
      _props$marks = props.marks,
      marksProp = _props$marks === void 0 ? false : _props$marks,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      name = props.name,
      onChange = props.onChange,
      onChangeCommitted = props.onChangeCommitted,
      onMouseDown = props.onMouseDown,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$scale = props.scale,
      scale = _props$scale === void 0 ? Identity : _props$scale,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$ThumbComponent = props.ThumbComponent,
      ThumbComponent = _props$ThumbComponent === void 0 ? 'span' : _props$ThumbComponent,
      _props$track = props.track,
      track = _props$track === void 0 ? 'normal' : _props$track,
      valueProp = props.value,
      _props$ValueLabelComp = props.ValueLabelComponent,
      ValueLabelComponentProp = _props$ValueLabelComp === void 0 ? ValueLabel : _props$ValueLabelComp,
      _props$valueLabelDisp = props.valueLabelDisplay,
      valueLabelDisplay = _props$valueLabelDisp === void 0 ? 'off' : _props$valueLabelDisp,
      _props$valueLabelForm = props.valueLabelFormat,
      valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
      other = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "color", "component", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "ThumbComponent", "track", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat"]);

  var theme = useTheme();
  var touchId = React.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.

  var _React$useState = React.useState(-1),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var _React$useState2 = React.useState(-1),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Slider'
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1];

  var handleChange = onChange && function (event, value) {
    if (!(event instanceof Event)) event.persist(); // Redefine target to allow name and value to be read.
    // This allows seamless integration with the most popular form libraries.
    // https://github.com/mui-org/material-ui/issues/13485#issuecomment-676048492

    Object.defineProperty(event, 'target', {
      writable: true,
      value: {
        value: value,
        name: name
      }
    });
    onChange(event, value);
  };

  var range = Array.isArray(valueDerived);
  var values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(function (value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? _toConsumableArray(Array(Math.floor((max - min) / step) + 1)).map(function (_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp || [];

  var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
      handleBlurVisible = _useIsFocusVisible.onBlur,
      handleFocusVisible = _useIsFocusVisible.onFocus,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState3 = React.useState(-1),
      focusVisible = _React$useState3[0],
      setFocusVisible = _React$useState3[1];

  var sliderRef = React.useRef();
  var handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  var handleRef = useForkRef(ref, handleFocusRef);
  var handleFocus = useEventCallback(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(index);
    }

    setOpen(index);
  });
  var handleBlur = useEventCallback(function (event) {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(-1);
    }

    setOpen(-1);
  });
  var handleMouseOver = useEventCallback(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  var handleMouseLeave = useEventCallback(function () {
    setOpen(-1);
  });
  useEnhancedEffect(function () {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      document.activeElement.blur();
    }
  }, [disabled]);

  if (disabled && active !== -1) {
    setActive(-1);
  }

  if (disabled && focusVisible !== -1) {
    setFocusVisible(-1);
  }

  var isRtl = theme.direction === 'rtl';
  var handleKeyDown = useEventCallback(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function (mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;
    var increaseKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    var decreaseKey = isRtl ? 'ArrowRight' : 'ArrowLeft';

    switch (event.key) {
      case 'Home':
        newValue = min;
        break;

      case 'End':
        newValue = max;
        break;

      case 'PageUp':
        if (step) {
          newValue = value + tenPercents;
        }

        break;

      case 'PageDown':
        if (step) {
          newValue = value - tenPercents;
        }

        break;

      case increaseKey:
      case 'ArrowUp':
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }

        break;

      case decreaseKey:
      case 'ArrowDown':
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }

        break;

      default:
        return;
    } // Prevent scroll of the page


    event.preventDefault();

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values,
        source: valueDerived,
        newValue: newValue,
        index: index
      }).sort(asc);
      focusThumb({
        sliderRef: sliderRef,
        activeIndex: newValue.indexOf(previousValue)
      });
    }

    setValueState(newValue);
    setFocusVisible(index);

    if (handleChange) {
      handleChange(event, newValue);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = React.useRef();
  var axis = orientation;

  if (isRtl && orientation !== "vertical") {
    axis += '-reverse';
  }

  var getFingerNewValue = function getFingerNewValue(_ref4) {
    var finger = _ref4.finger,
        _ref4$move = _ref4.move,
        move = _ref4$move === void 0 ? false : _ref4$move,
        values2 = _ref4.values,
        source = _ref4.source;
    var slider = sliderRef.current;

    var _slider$getBoundingCl = slider.getBoundingClientRect(),
        width = _slider$getBoundingCl.width,
        height = _slider$getBoundingCl.height,
        bottom = _slider$getBoundingCl.bottom,
        left = _slider$getBoundingCl.left;

    var percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    var newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      var marksValues = marks.map(function (mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    var activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source: source,
        newValue: newValue,
        index: activeIndex
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }

    return {
      newValue: newValue,
      activeIndex: activeIndex
    };
  };

  var handleTouchMove = useEventCallback(function (nativeEvent) {
    var finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    } // Cancel move in case some other element consumed a mouseup event and it was not fired.


    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }

    var _getFingerNewValue = getFingerNewValue({
      finger: finger,
      move: true,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue.newValue,
        activeIndex = _getFingerNewValue.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (handleChange) {
      handleChange(nativeEvent, newValue);
    }
  });
  var handleTouchEnd = useEventCallback(function (nativeEvent) {
    var finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue2 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue2.newValue;

    setActive(-1);

    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }

    touchId.current = undefined; // eslint-disable-next-line @typescript-eslint/no-use-before-define

    stopListening();
  });
  var handleTouchStart = useEventCallback(function (event) {
    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      event.preventDefault();
    }

    var touch = event.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    var finger = trackFinger(event, touchId);

    var _getFingerNewValue3 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue3.newValue,
        activeIndex = _getFingerNewValue3.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (handleChange) {
      handleChange(event, newValue);
    }

    var doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  var stopListening = React.useCallback(function () {
    var doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React.useEffect(function () {
    var slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return function () {
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React.useEffect(function () {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  var handleMouseDown = useEventCallback(function (event) {
    if (onMouseDown) {
      onMouseDown(event);
    } // Only handle left clicks


    if (event.button !== 0) {
      return;
    } // Avoid text selection


    event.preventDefault();
    var finger = trackFinger(event, touchId);

    var _getFingerNewValue4 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue4.newValue,
        activeIndex = _getFingerNewValue4.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (handleChange) {
      handleChange(event, newValue);
    }

    var doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });
  var trackOffset = valueToPercent(range ? values[0] : min, min, max);
  var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  var trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));

  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: handleRef,
    className: clsx(classes.root, classes["color".concat(capitalize(color))], className, disabled && classes.disabled, marks.length > 0 && marks.some(function (mark) {
      return mark.label;
    }) && classes.marked, track === false && classes.trackFalse, orientation === 'vertical' && classes.vertical, track === 'inverted' && classes.trackInverted),
    onMouseDown: handleMouseDown
  }, other), /*#__PURE__*/React.createElement("span", {
    className: classes.rail
  }), /*#__PURE__*/React.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), /*#__PURE__*/React.createElement("input", {
    value: values.join(','),
    name: name,
    type: "hidden"
  }), marks.map(function (mark, index) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive;

    if (track === false) {
      markActive = values.indexOf(mark.value) !== -1;
    } else {
      markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
    }

    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: mark.value
    }, /*#__PURE__*/React.createElement("span", {
      style: style,
      "data-index": index,
      className: clsx(classes.mark, markActive && classes.markActive)
    }), mark.label != null ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      "data-index": index,
      style: style,
      className: clsx(classes.markLabel, markActive && classes.markLabelActive)
    }, mark.label) : null);
  }), values.map(function (value, index) {
    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    var ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabelComponentProp;
    return /*#__PURE__*/React.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat: valueLabelFormat,
      valueLabelDisplay: valueLabelDisplay,
      className: classes.valueLabel,
      value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
      index: index,
      open: open === index || active === index || valueLabelDisplay === 'on',
      disabled: disabled
    }, /*#__PURE__*/React.createElement(ThumbComponent, {
      className: clsx(classes.thumb, classes["thumbColor".concat(capitalize(color))], active === index && classes.active, disabled && classes.disabled, focusVisible === index && classes.focusVisible),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style: style,
      "data-index": index,
      "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      "aria-valuenow": scale(value),
      "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
process.env.NODE_ENV !== "production" ? Slider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The label of the slider.
   */
  'aria-label': chainPropTypes(PropTypes.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-label'] != null) {
      return new Error('Material-UI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.');
    }

    return null;
  }),

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': PropTypes.string,

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': chainPropTypes(PropTypes.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext'] != null) {
      return new Error('Material-UI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.');
    }

    return null;
  }),

  /**
   * @ignore
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
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: PropTypes.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),

  /**
   * If `true`, the slider is disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   *
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: PropTypes.func,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: PropTypes.func,

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.number.isRequired
  })), PropTypes.bool]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: PropTypes.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: PropTypes.number,

  /**
   * Name attribute of the hidden `input` element.
   */
  name: PropTypes.string,

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChange: PropTypes.func,

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: PropTypes.func,

  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,

  /**
   * The slider orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale: PropTypes.func,

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: PropTypes.number,

  /**
   * The component used to display the value label.
   * @default 'span'
   */
  ThumbComponent: PropTypes.elementType,

  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: PropTypes.oneOf(['inverted', 'normal', false]),

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),

  /**
   * The value label component.
   * @default ValueLabel
   */
  ValueLabelComponent: PropTypes.elementType,

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: PropTypes.oneOf(['auto', 'off', 'on']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @default (x) => x
   */
  valueLabelFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : void 0;
export default withStyles(styles, {
  name: 'MuiSlider'
})(Slider);