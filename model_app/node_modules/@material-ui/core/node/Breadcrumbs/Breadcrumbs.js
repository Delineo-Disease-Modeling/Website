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

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _BreadcrumbCollapsed = _interopRequireDefault(require("./BreadcrumbCollapsed"));

const styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the ol element. */
  ol: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },

  /* Styles applied to the li element. */
  li: {},

  /* Styles applied to the separator element. */
  separator: {
    display: 'flex',
    userSelect: 'none',
    marginLeft: 8,
    marginRight: 8
  }
};
exports.styles = styles;

function insertSeparators(items, className, separator) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, /*#__PURE__*/React.createElement("li", {
        "aria-hidden": true,
        key: `separator-${index}`,
        className: className
      }, separator));
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

const Breadcrumbs = /*#__PURE__*/React.forwardRef(function Breadcrumbs(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'nav',
    expandText = 'Show path',
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = '/'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "component", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"]);
  const [expanded, setExpanded] = React.useState(false);
  const listRef = React.useRef(null);

  const renderItemsBeforeAndAfter = allItems => {
    const handleClickExpand = () => {
      setExpanded(true); // The clicked element received the focus but gets removed from the DOM.
      // Let's keep the focus in the component after expanding.
      // Moving it the the <ol> or <nav> does not cause any announcement in NVDA.
      // By moving it to some link/button at least we have some announcement.

      const focusable = listRef.current.querySelector('a[href],button,[tabindex]');

      if (focusable) {
        focusable.focus();
      }
    }; // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem


    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(['Material-UI: You have provided an invalid combination of props to the Breadcrumbs.', `itemsAfterCollapse={${itemsAfterCollapse}} + itemsBeforeCollapse={${itemsBeforeCollapse}} >= maxItems={${maxItems}}`].join('\n'));
      }

      return allItems;
    }

    return [...allItems.slice(0, itemsBeforeCollapse), /*#__PURE__*/React.createElement(_BreadcrumbCollapsed.default, {
      "aria-label": expandText,
      key: "ellipsis",
      onClick: handleClickExpand
    }), ...allItems.slice(allItems.length - itemsAfterCollapse, allItems.length)];
  };

  const allItems = React.Children.toArray(children).filter(child => {
    if (process.env.NODE_ENV !== 'production') {
      if ((0, _reactIs.isFragment)(child)) {
        console.error(["Material-UI: The Breadcrumbs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/React.isValidElement(child);
  }).map((child, index) => /*#__PURE__*/React.createElement("li", {
    className: classes.li,
    key: `child-${index}`
  }, child));
  return /*#__PURE__*/React.createElement(_Typography.default, (0, _extends2.default)({
    ref: ref,
    component: Component,
    color: "textSecondary",
    className: (0, _clsx.default)(classes.root, className)
  }, other), /*#__PURE__*/React.createElement("ol", {
    className: classes.ol,
    ref: listRef
  }, insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator)));
});
process.env.NODE_ENV !== "production" ? Breadcrumbs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The breadcrumb children.
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
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Show path'
   */
  expandText: _propTypes.default.string,

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: _propTypes.default.number,

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: _propTypes.default.number,

  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: _propTypes.default.number,

  /**
   * Custom separator node.
   * @default '/'
   */
  separator: _propTypes.default.node
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBreadcrumbs'
})(Breadcrumbs);

exports.default = _default;