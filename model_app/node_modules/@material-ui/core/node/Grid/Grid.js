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

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _requirePropFactory = _interopRequireDefault(require("../utils/requirePropFactory"));

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {};
  GRID_SIZES.forEach(size => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    const width = `${Math.round(size / 12 * 10e7) / 10e5}%`; // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val, div = 1) {
  const parse = parseFloat(val);
  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`;
}

function generateGutter(theme, breakpoint) {
  const styles = {};
  SPACINGS.forEach(spacing => {
    const themeSpacing = theme.spacing(spacing);

    if (themeSpacing === '0px') {
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: `-${getOffset(themeSpacing, 2)}`,
      width: `calc(100% + ${getOffset(themeSpacing)})`,
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


const styles = theme => (0, _extends2.default)({
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `container={true}`. */
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },

  /* Styles applied to the root element if `item={true}`. */
  item: {
    boxSizing: 'border-box',
    margin: '0' // For instance, it's useful when used with a `figure` element.

  },

  /* Styles applied to the root element if `zeroMinWidth={true}`. */
  zeroMinWidth: {
    minWidth: 0
  },

  /* Styles applied to the root element if `direction="column"`. */
  'direction-xs-column': {
    flexDirection: 'column'
  },

  /* Styles applied to the root element if `direction="column-reverse"`. */
  'direction-xs-column-reverse': {
    flexDirection: 'column-reverse'
  },

  /* Styles applied to the root element if `direction="row-reverse"`. */
  'direction-xs-row-reverse': {
    flexDirection: 'row-reverse'
  },

  /* Styles applied to the root element if `wrap="nowrap"`. */
  'wrap-xs-nowrap': {
    flexWrap: 'nowrap'
  },

  /* Styles applied to the root element if `wrap="reverse"`. */
  'wrap-xs-wrap-reverse': {
    flexWrap: 'wrap-reverse'
  },

  /* Styles applied to the root element if `alignItems="center"`. */
  'align-items-xs-center': {
    alignItems: 'center'
  },

  /* Styles applied to the root element if `alignItems="flex-start"`. */
  'align-items-xs-flex-start': {
    alignItems: 'flex-start'
  },

  /* Styles applied to the root element if `alignItems="flex-end"`. */
  'align-items-xs-flex-end': {
    alignItems: 'flex-end'
  },

  /* Styles applied to the root element if `alignItems="baseline"`. */
  'align-items-xs-baseline': {
    alignItems: 'baseline'
  },

  /* Styles applied to the root element if `alignContent="center"`. */
  'align-content-xs-center': {
    alignContent: 'center'
  },

  /* Styles applied to the root element if `alignContent="flex-start"`. */
  'align-content-xs-flex-start': {
    alignContent: 'flex-start'
  },

  /* Styles applied to the root element if `alignContent="flex-end"`. */
  'align-content-xs-flex-end': {
    alignContent: 'flex-end'
  },

  /* Styles applied to the root element if `alignContent="space-between"`. */
  'align-content-xs-space-between': {
    alignContent: 'space-between'
  },

  /* Styles applied to the root element if `alignContent="space-around"`. */
  'align-content-xs-space-around': {
    alignContent: 'space-around'
  },

  /* Styles applied to the root element if `justifyContent="center"`. */
  'justify-content-xs-center': {
    justifyContent: 'center'
  },

  /* Styles applied to the root element if `justifyContent="flex-end"`. */
  'justify-content-xs-flex-end': {
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `justifyContent="space-between"`. */
  'justify-content-xs-space-between': {
    justifyContent: 'space-between'
  },

  /* Styles applied to the root element if `justifyContent="space-around"`. */
  'justify-content-xs-space-around': {
    justifyContent: 'space-around'
  },

  /* Styles applied to the root element if `justifyContent="space-evenly"`. */
  'justify-content-xs-space-evenly': {
    justifyContent: 'space-evenly'
  }
}, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce((accumulator, key) => {
  // Use side effect over immutability for better performance.
  generateGrid(accumulator, theme, key);
  return accumulator;
}, {}));

exports.styles = styles;
const Grid = /*#__PURE__*/React.forwardRef(function Grid(props, ref) {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    classes,
    className: classNameProp,
    component: Component = 'div',
    container = false,
    direction = 'row',
    item = false,
    justifyContent = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justifyContent", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  const className = (0, _clsx.default)(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes[`spacing-xs-${String(spacing)}`]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes[`direction-xs-${String(direction)}`], wrap !== 'wrap' && classes[`wrap-xs-${String(wrap)}`], alignItems !== 'stretch' && classes[`align-items-xs-${String(alignItems)}`], alignContent !== 'stretch' && classes[`align-content-xs-${String(alignContent)}`], justifyContent !== 'flex-start' && classes[`justify-content-xs-${String(justifyContent)}`], xs !== false && classes[`grid-xs-${String(xs)}`], sm !== false && classes[`grid-sm-${String(sm)}`], md !== false && classes[`grid-md-${String(md)}`], lg !== false && classes[`grid-lg-${String(lg)}`], xl !== false && classes[`grid-xl-${String(xl)}`]);
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: className,
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Grid.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   * @default 'stretch'
   */
  alignContent: _propTypes.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   * @default 'stretch'
   */
  alignItems: _propTypes.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),

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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: _propTypes.default.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: _propTypes.default.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: _propTypes.default.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   * @default 'flex-start'
   */
  justifyContent: _propTypes.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), _propTypes.default.bool]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), _propTypes.default.bool]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), _propTypes.default.bool]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: _propTypes.default.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap-reverse', 'wrap']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   * @default false
   */
  xl: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), _propTypes.default.bool]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), _propTypes.default.bool]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: _propTypes.default.bool
} : void 0;
const StyledGrid = (0, _withStyles.default)(styles, {
  name: 'MuiGrid'
})(Grid);

if (process.env.NODE_ENV !== 'production') {
  const requireProp = (0, _requirePropFactory.default)('Grid');
  StyledGrid.propTypes = (0, _extends2.default)({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justifyContent: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

var _default = StyledGrid;
exports.default = _default;