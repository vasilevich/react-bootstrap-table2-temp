(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTIPLE: 'checkbox',
  ROW_SELECT_DISABLED: 'ROW_SELECT_DISABLED',
  CHECKBOX_STATUS_CHECKED: 'checked',
  CHECKBOX_STATUS_INDETERMINATE: 'indeterminate',
  CHECKBOX_STATUS_UNCHECKED: 'unchecked'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(18);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitNested(str) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
} /* eslint no-empty: 0 */
/* eslint no-param-reassign: 0 */
/* eslint prefer-rest-params: 0 */


function get(target, field) {
  var pathArray = splitNested(field);
  var result = void 0;
  try {
    result = pathArray.reduce(function (curr, path) {
      return curr[path];
    }, target);
  } catch (e) {}
  return result;
}

function set(target, field, value) {
  var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var pathArray = splitNested(field);
  var level = 0;
  pathArray.reduce(function (a, b) {
    level += 1;
    if (typeof a[b] === 'undefined') {
      if (!safe) throw new Error(a + '.' + b + ' is undefined');
      a[b] = {};
      return a[b];
    }

    if (level === pathArray.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, target);
}

function isEmptyObject(obj) {
  if (!_underscore2.default.isObject(obj)) return false;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, keys[i])) return false;
  }

  return true;
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function sleep(fn, ms) {
  return setTimeout(function () {
    return fn();
  }, ms);
}

function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.apply(_this, _arguments);
    }
  };
}

exports.default = Object.assign(_underscore2.default, { get: get, set: set, isDefined: isDefined, isEmptyObject: isEmptyObject, sleep: sleep, debounce: debounce });

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapContext = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapContext = exports.BootstrapContext = _react2.default.createContext({
  bootstrap4: false
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var matchRow = exports.matchRow = function matchRow(keyField, id) {
  return function (row) {
    return row[keyField] === id;
  };
};

var getRowByRowId = exports.getRowByRowId = function getRowByRowId(data, keyField, id) {
  return data.find(matchRow(keyField, id));
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRows = exports.unSelectableKeys = exports.selectableKeys = exports.getSelectionSummary = undefined;

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSelectionSummary = exports.getSelectionSummary = function getSelectionSummary(data, keyField) {
  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var allRowsSelected = true;
  var allRowsNotSelected = true;

  var rowKeys = data.map(function (d) {
    return d[keyField];
  });

  var _loop = function _loop(i) {
    var curr = rowKeys[i];
    if (typeof selected.find(function (x) {
      return x === curr;
    }) === 'undefined') {
      allRowsSelected = false;
    } else {
      allRowsNotSelected = false;
    }
  };

  for (var i = 0; i < rowKeys.length; i += 1) {
    _loop(i);
  }
  return {
    allRowsSelected: allRowsSelected,
    allRowsNotSelected: allRowsNotSelected
  };
};

var selectableKeys = exports.selectableKeys = function selectableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !skips.includes(_utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var unSelectableKeys = exports.unSelectableKeys = function unSelectableKeys(selected) {
  var skips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (skips.length === 0) {
    return [];
  }
  return selected.filter(function (x) {
    return skips.includes(x);
  });
};

var getSelectedRows = exports.getSelectedRows = function getSelectedRows(data, keyField, selected) {
  return selected.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  }).filter(function (x) {
    return !!x;
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bootstrapTable = __webpack_require__(9);

var _bootstrapTable2 = _interopRequireDefault(_bootstrapTable);

var _contexts = __webpack_require__(35);

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _contexts2.default)(_bootstrapTable2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _header = __webpack_require__(14);

var _header2 = _interopRequireDefault(_header);

var _caption = __webpack_require__(23);

var _caption2 = _interopRequireDefault(_caption);

var _body = __webpack_require__(24);

var _body2 = _interopRequireDefault(_body);

var _propsResolver = __webpack_require__(32);

var _propsResolver2 = _interopRequireDefault(_propsResolver);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _selection = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint arrow-body-style: 0 */

var BootstrapTable = function (_PropsBaseResolver) {
  _inherits(BootstrapTable, _PropsBaseResolver);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.getData = function () {
      return _this.props.data;
    };

    _this.validateProps();
    if (props.registerExposedAPI) {
      var getData = function getData() {
        return _this.getData();
      };
      props.registerExposedAPI(getData);
    }
    return _this;
  }

  // Exposed APIs


  _createClass(BootstrapTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          overlay = _props.overlay;

      if (overlay) {
        var LoadingOverlay = overlay(loading);
        return _react2.default.createElement(
          LoadingOverlay,
          null,
          this.renderTable()
        );
      }
      return this.renderTable();
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          data = _props2.data,
          columns = _props2.columns,
          keyField = _props2.keyField,
          id = _props2.id,
          classes = _props2.classes,
          striped = _props2.striped,
          hover = _props2.hover,
          bordered = _props2.bordered,
          condensed = _props2.condensed,
          noDataIndication = _props2.noDataIndication,
          caption = _props2.caption,
          rowStyle = _props2.rowStyle,
          rowClasses = _props2.rowClasses,
          wrapperClasses = _props2.wrapperClasses,
          rowEvents = _props2.rowEvents,
          selected = _props2.selected;


      var tableWrapperClass = (0, _classnames2.default)('react-bootstrap-table', wrapperClasses);

      var tableClass = (0, _classnames2.default)('table', {
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered,
        'table-condensed': condensed
      }, classes);

      var cellSelectionInfo = this.resolveSelectRowProps({
        onRowSelect: this.props.onRowSelect
      });

      var _getSelectionSummary = (0, _selection.getSelectionSummary)(data, keyField, selected),
          allRowsSelected = _getSelectionSummary.allRowsSelected,
          allRowsNotSelected = _getSelectionSummary.allRowsNotSelected;

      var headerCellSelectionInfo = this.resolveSelectRowPropsForHeader({
        onAllRowsSelect: this.props.onAllRowsSelect,
        selected: selected,
        allRowsSelected: allRowsSelected,
        allRowsNotSelected: allRowsNotSelected
      });

      var tableCaption = caption && _react2.default.createElement(
        _caption2.default,
        null,
        caption
      );
      var expandRow = this.resolveExpandRowProps();

      return _react2.default.createElement(
        'div',
        { className: tableWrapperClass },
        _react2.default.createElement(
          'table',
          { id: id, className: tableClass },
          tableCaption,
          _react2.default.createElement(_header2.default, {
            columns: columns,
            className: this.props.headerClasses,
            sortField: this.props.sortField,
            sortOrder: this.props.sortOrder,
            onSort: this.props.onSort,
            onFilter: this.props.onFilter,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: headerCellSelectionInfo,
            expandRow: expandRow
          }),
          _react2.default.createElement(_body2.default, {
            data: data,
            keyField: keyField,
            columns: columns,
            isEmpty: this.isEmpty(),
            visibleColumnSize: this.visibleColumnSize(),
            noDataIndication: noDataIndication,
            cellEdit: this.props.cellEdit || {},
            selectRow: cellSelectionInfo,
            selectedRowKeys: selected,
            expandRow: expandRow,
            rowStyle: rowStyle,
            rowClasses: rowClasses,
            rowEvents: rowEvents
          })
        )
      );
    }
  }]);

  return BootstrapTable;
}((0, _propsResolver2.default)(_react.Component));

BootstrapTable.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  bootstrap4: _propTypes2.default.bool,
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    pagination: _propTypes2.default.bool
  })]),
  noDataIndication: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  condensed: _propTypes2.default.bool,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  pagination: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  cellEdit: _propTypes2.default.object,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_const2.default.ROW_SELECT_SINGLE, _const2.default.ROW_SELECT_MULTIPLE]).isRequired,
    clickToSelect: _propTypes2.default.bool,
    clickToEdit: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectable: _propTypes2.default.array,
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    hideSelectColumn: _propTypes2.default.bool,
    selectionRenderer: _propTypes2.default.func,
    selectionHeaderRenderer: _propTypes2.default.func
  }),
  onRowSelect: _propTypes2.default.func,
  onAllRowsSelect: _propTypes2.default.func,
  expandRow: _propTypes2.default.shape({
    renderer: _propTypes2.default.func.isRequired,
    expanded: _propTypes2.default.array,
    onExpand: _propTypes2.default.func,
    onExpandAll: _propTypes2.default.func,
    nonExpandable: _propTypes2.default.array,
    showExpandColumn: _propTypes2.default.bool,
    expandColumnRenderer: _propTypes2.default.func,
    expandHeaderColumnRenderer: _propTypes2.default.func
  }),
  onRowExpand: _propTypes2.default.func,
  onAllRowExpand: _propTypes2.default.func,
  isAnyExpands: _propTypes2.default.bool,
  rowStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  rowEvents: _propTypes2.default.object,
  rowClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  headerClasses: _propTypes2.default.string,
  defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
  })),
  defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
  overlay: _propTypes2.default.func,
  onTableChange: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func,
  // Inject from toolkit
  search: _propTypes2.default.shape({
    searchText: _propTypes2.default.string,
    searchContext: _propTypes2.default.func
  }),
  setDependencyModules: _propTypes2.default.func
};

BootstrapTable.defaultProps = {
  bootstrap4: false,
  remote: false,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  noDataIndication: null
};

exports.default = BootstrapTable;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(11);
var invariant = __webpack_require__(12);
var ReactPropTypesSecret = __webpack_require__(13);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _headerCell = __webpack_require__(15);

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = __webpack_require__(21);

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

var _expandHeaderCell = __webpack_require__(22);

var _expandHeaderCell2 = _interopRequireDefault(_expandHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Header = function Header(props) {
  var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED;
  var className = props.className,
      columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow,
      onExternalFilter = props.onExternalFilter,
      expandRow = props.expandRow,
      bootstrap4 = props.bootstrap4;


  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      { className: className },
      expandRow && expandRow.showExpandColumn ? _react2.default.createElement(_expandHeaderCell2.default, {
        onAllRowExpand: expandRow.onAllRowExpand,
        anyExpands: expandRow.isAnyExpands,
        renderer: expandRow.expandHeaderColumnRenderer
      }) : null,
      selectRow.mode !== ROW_SELECT_DISABLED && !selectRow.hideSelectColumn ? _react2.default.createElement(_selectionHeaderCell2.default, selectRow) : null,
      columns.map(function (column, i) {
        if (!column.hidden) {
          var currSort = column.dataField === sortField;
          var isLastSorting = column.dataField === sortField;

          return _react2.default.createElement(_headerCell2.default, {
            index: i,
            bootstrap4: bootstrap4,
            key: column.dataField,
            column: column,
            onSort: onSort,
            sorting: currSort,
            onFilter: onFilter,
            onExternalFilter: onExternalFilter,
            sortOrder: sortOrder,
            isLastSorting: isLastSorting
          });
        }
        return false;
      })
    )
  );
};

Header.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  sortField: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  className: _propTypes2.default.string,
  expandRow: _propTypes2.default.object,
  bootstrap4: _propTypes2.default.bool
};

exports.default = Header;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/require-default-props: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _symbol = __webpack_require__(16);

var _symbol2 = _interopRequireDefault(_symbol);

var _caret = __webpack_require__(17);

var _caret2 = _interopRequireDefault(_caret);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderCell = function HeaderCell(props) {
  var column = props.column,
      index = props.index,
      onSort = props.onSort,
      sorting = props.sorting,
      sortOrder = props.sortOrder,
      isLastSorting = props.isLastSorting,
      onFilter = props.onFilter,
      onExternalFilter = props.onExternalFilter;
  var text = column.text,
      sort = column.sort,
      filter = column.filter,
      filterRenderer = column.filterRenderer,
      headerTitle = column.headerTitle,
      headerAlign = column.headerAlign,
      headerFormatter = column.headerFormatter,
      headerEvents = column.headerEvents,
      headerClasses = column.headerClasses,
      headerStyle = column.headerStyle,
      headerAttrs = column.headerAttrs,
      headerSortingClasses = column.headerSortingClasses,
      headerSortingStyle = column.headerSortingStyle;


  var cellAttrs = _extends({}, _utils2.default.isFunction(headerAttrs) ? headerAttrs(column, index) : headerAttrs, headerEvents);

  var sortSymbol = void 0;
  var filterElm = void 0;
  var cellStyle = {};
  var cellClasses = _utils2.default.isFunction(headerClasses) ? headerClasses(column, index) : headerClasses;

  if (headerStyle) {
    cellStyle = _utils2.default.isFunction(headerStyle) ? headerStyle(column, index) : headerStyle;
  }

  if (headerTitle) {
    cellAttrs.title = _utils2.default.isFunction(headerTitle) ? headerTitle(column, index) : text;
  }

  if (headerAlign) {
    cellStyle.textAlign = _utils2.default.isFunction(headerAlign) ? headerAlign(column, index) : headerAlign;
  }

  if (sort) {
    var customClick = cellAttrs.onClick;
    cellAttrs.onClick = function (e) {
      onSort(column);
      if (_utils2.default.isFunction(customClick)) customClick(e);
    };
    cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, 'sortable');

    if (sorting) {
      sortSymbol = _react2.default.createElement(_caret2.default, { order: sortOrder });

      // append customized classes or style if table was sorting based on the current column.
      cellClasses = (0, _classnames2.default)(cellClasses, _utils2.default.isFunction(headerSortingClasses) ? headerSortingClasses(column, sortOrder, isLastSorting, index) : headerSortingClasses);

      cellStyle = _extends({}, cellStyle, _utils2.default.isFunction(headerSortingStyle) ? headerSortingStyle(column, sortOrder, isLastSorting, index) : headerSortingStyle);
    } else {
      sortSymbol = _react2.default.createElement(_symbol2.default, null);
    }
  }

  if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
  if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

  if (filterRenderer) {
    var onCustomFilter = onExternalFilter(column, filter.props.type);
    filterElm = filterRenderer(onCustomFilter, column);
  } else if (filter) {
    filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, { onFilter: onFilter, column: column }));
  }

  var children = headerFormatter ? headerFormatter(column, index, { sortElement: sortSymbol, filterElement: filterElm }) : text;

  if (headerFormatter) {
    return _react2.default.createElement('th', cellAttrs, children);
  }

  return _react2.default.createElement('th', cellAttrs, children, sortSymbol, filterElm);
};

HeaderCell.propTypes = {
  column: _propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    isDummyField: _propTypes2.default.bool,
    hidden: _propTypes2.default.bool,
    headerFormatter: _propTypes2.default.func,
    formatter: _propTypes2.default.func,
    formatExtraData: _propTypes2.default.any,
    headerClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    headerTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    headerEvents: _propTypes2.default.object,
    events: _propTypes2.default.object,
    headerAlign: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerAttrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    attrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    sort: _propTypes2.default.bool,
    sortFunc: _propTypes2.default.func,
    onSort: _propTypes2.default.func,
    editor: _propTypes2.default.object,
    editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    editCellStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editCellClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editorClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorRenderer: _propTypes2.default.func,
    validator: _propTypes2.default.func,
    filter: _propTypes2.default.object,
    filterRenderer: _propTypes2.default.func,
    filterValue: _propTypes2.default.func
  }).isRequired,
  index: _propTypes2.default.number.isRequired,
  onSort: _propTypes2.default.func,
  sorting: _propTypes2.default.bool,
  sortOrder: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]),
  isLastSorting: _propTypes2.default.bool,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func
};

exports.default = HeaderCell;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortSymbol = function SortSymbol() {
  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref) {
      var bootstrap4 = _ref.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'order-4' }) : _react2.default.createElement(
        'span',
        { className: 'order' },
        _react2.default.createElement(
          'span',
          { className: 'dropdown' },
          _react2.default.createElement('span', { className: 'caret' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'dropup' },
          _react2.default.createElement('span', { className: 'caret' })
        )
      );
    }
  );
};

exports.default = SortSymbol;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortCaret = function SortCaret(_ref) {
  var order = _ref.order;

  var orderClass = (0, _classnames2.default)('react-bootstrap-table-sort-order', {
    dropup: order === _const2.default.SORT_ASC
  });

  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref2) {
      var bootstrap4 = _ref2.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'caret-4-' + order }) : _react2.default.createElement(
        'span',
        { className: orderClass },
        _react2.default.createElement('span', { className: 'caret' })
      );
    }
  );
};

SortCaret.propTypes = {
  order: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]).isRequired
};

exports.default = SortCaret;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(20)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return _react2.default.createElement('input', {
    type: 'checkbox',
    checked: checked,
    className: className,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {}
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  indeterminate: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props = this.props,
          mode = _props.mode,
          checkedStatus = _props.checkedStatus;


      if (mode === ROW_SELECT_SINGLE) return false;

      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props2 = this.props,
          onAllRowsSelect = _props2.onAllRowsSelect,
          checkedStatus = _props2.checkedStatus;

      var isUnSelect = checkedStatus === _const2.default.CHECKBOX_STATUS_CHECKED || checkedStatus === _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      onAllRowsSelect(e, isUnSelect);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_MULTIPLE = _const2.default.ROW_SELECT_MULTIPLE;
      var _props3 = this.props,
          mode = _props3.mode,
          checkedStatus = _props3.checkedStatus,
          selectionHeaderRenderer = _props3.selectionHeaderRenderer;


      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;

      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;

      var attrs = {};
      var content = void 0;
      if (selectionHeaderRenderer || mode === ROW_SELECT_MULTIPLE) {
        attrs.onClick = this.handleCheckBoxClick;
      }

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref2) {
          var bootstrap4 = _ref2.bootstrap4;

          if (selectionHeaderRenderer) {
            content = selectionHeaderRenderer({
              mode: mode,
              checked: checked,
              indeterminate: indeterminate
            });
          } else if (mode === ROW_SELECT_MULTIPLE) {
            content = _react2.default.createElement(CheckBox, _extends({}, _this2.props, {
              checked: checked,
              className: bootstrap4 ? 'selection-input-4' : '',
              indeterminate: indeterminate
            }));
          }
          return _react2.default.createElement(
            'th',
            _extends({ 'data-row-selection': true }, attrs),
            content
          );
        }
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  checkedStatus: _propTypes2.default.string,
  onAllRowsSelect: _propTypes2.default.func,
  selectionHeaderRenderer: _propTypes2.default.func
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-nested-ternary: 0 */


var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  _createClass(SelectionHeaderCell, [{
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props = this.props,
          anyExpands = _props.anyExpands,
          onAllRowExpand = _props.onAllRowExpand;


      onAllRowExpand(e, !anyExpands);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          anyExpands = _props2.anyExpands,
          renderer = _props2.renderer;

      var attrs = {
        onClick: this.handleCheckBoxClick
      };

      return _react2.default.createElement(
        'th',
        _extends({ 'data-row-selection': true }, attrs),
        renderer ? renderer({ isAnyExpands: anyExpands }) : anyExpands ? '(-)' : '(+)'
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  anyExpands: _propTypes2.default.bool.isRequired,
  onAllRowExpand: _propTypes2.default.func.isRequired,
  renderer: _propTypes2.default.func
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Caption = function Caption(props) {
  if (!props.children) return null;
  return _react2.default.createElement(
    'caption',
    null,
    props.children
  );
};

Caption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string])
};

exports.default = Caption;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _row = __webpack_require__(25);

var _row2 = _interopRequireDefault(_row);

var _expandRow = __webpack_require__(30);

var _expandRow2 = _interopRequireDefault(_expandRow);

var _rowSection = __webpack_require__(31);

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(props) {
  var columns = props.columns,
      data = props.data,
      keyField = props.keyField,
      isEmpty = props.isEmpty,
      noDataIndication = props.noDataIndication,
      visibleColumnSize = props.visibleColumnSize,
      cellEdit = props.cellEdit,
      selectRow = props.selectRow,
      selectedRowKeys = props.selectedRowKeys,
      rowStyle = props.rowStyle,
      rowClasses = props.rowClasses,
      rowEvents = props.rowEvents,
      expandRow = props.expandRow;
  var bgColor = selectRow.bgColor,
      nonSelectable = selectRow.nonSelectable;


  var content = void 0;

  if (isEmpty) {
    var indication = _utils2.default.isFunction(noDataIndication) ? noDataIndication() : noDataIndication;
    if (!indication) {
      return null;
    }
    content = _react2.default.createElement(_rowSection2.default, { content: indication, colSpan: visibleColumnSize });
  } else {
    var nonEditableRows = cellEdit.nonEditableRows || [];
    content = data.map(function (row, index) {
      var key = _utils2.default.get(row, keyField);
      var editable = !(nonEditableRows.length > 0 && nonEditableRows.indexOf(key) > -1);

      var selected = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED ? selectedRowKeys.includes(key) : null;

      var attrs = rowEvents || {};
      var style = _utils2.default.isFunction(rowStyle) ? rowStyle(row, index) : rowStyle;
      var classes = _utils2.default.isFunction(rowClasses) ? rowClasses(row, index) : rowClasses;
      if (selected) {
        var selectedStyle = _utils2.default.isFunction(selectRow.style) ? selectRow.style(row, index) : selectRow.style;

        var selectedClasses = _utils2.default.isFunction(selectRow.classes) ? selectRow.classes(row, index) : selectRow.classes;

        style = _extends({}, style, selectedStyle);
        classes = (0, _classnames2.default)(classes, selectedClasses);

        if (bgColor) {
          style = style || {};
          style.backgroundColor = _utils2.default.isFunction(bgColor) ? bgColor(row, index) : bgColor;
        }
      }

      var selectable = !nonSelectable || !nonSelectable.includes(key);
      var expandable = expandRow && !expandRow.nonExpandable.includes(key);
      var expanded = expandRow && expandRow.expanded.includes(key);

      var result = [_react2.default.createElement(_row2.default, {
        key: key,
        row: row,
        keyField: keyField,
        rowIndex: index,
        columns: columns,
        cellEdit: cellEdit,
        editable: editable,
        selectable: selectable,
        expandable: expandable,
        selected: selected,
        expanded: expanded,
        selectRow: selectRow,
        expandRow: expandRow,
        style: style,
        className: classes,
        attrs: attrs
      })];

      if (expanded) {
        result.push(_react2.default.createElement(
          _expandRow2.default,
          {
            key: key + '-expanding',
            colSpan: visibleColumnSize
          },
          expandRow.renderer(row)
        ));
      }

      return result;
    });
  }

  return _react2.default.createElement(
    'tbody',
    null,
    content
  );
};

Body.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  selectRow: _propTypes2.default.object,
  selectedRowKeys: _propTypes2.default.array
};

exports.default = Body;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _cell = __webpack_require__(26);

var _cell2 = _interopRequireDefault(_cell);

var _selectionCell = __webpack_require__(27);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _expandCell = __webpack_require__(28);

var _expandCell2 = _interopRequireDefault(_expandCell);

var _rowEventDelegater = __webpack_require__(29);

var _rowEventDelegater2 = _interopRequireDefault(_rowEventDelegater);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */


var Row = function (_eventDelegater) {
  _inherits(Row, _eventDelegater);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          keyField = _props.keyField,
          rowIndex = _props.rowIndex,
          className = _props.className,
          style = _props.style,
          attrs = _props.attrs,
          cellEdit = _props.cellEdit,
          selected = _props.selected,
          selectRow = _props.selectRow,
          expanded = _props.expanded,
          expandRow = _props.expandRow,
          selectable = _props.selectable,
          editableRow = _props.editable;

      var mode = cellEdit.mode,
          onStart = cellEdit.onStart,
          EditingCell = cellEdit.EditingCell,
          editingRowIdx = cellEdit.ridx,
          editingColIdx = cellEdit.cidx,
          CLICK_TO_CELL_EDIT = cellEdit.CLICK_TO_CELL_EDIT,
          DBCLICK_TO_CELL_EDIT = cellEdit.DBCLICK_TO_CELL_EDIT,
          rest = _objectWithoutProperties(cellEdit, ['mode', 'onStart', 'EditingCell', 'ridx', 'cidx', 'CLICK_TO_CELL_EDIT', 'DBCLICK_TO_CELL_EDIT']);

      var key = _utils2.default.get(row, keyField);
      var hideSelectColumn = selectRow.hideSelectColumn;

      var _ref = expandRow || {},
          showExpandColumn = _ref.showExpandColumn;

      var trAttrs = this.delegate(attrs);

      return _react2.default.createElement(
        'tr',
        _extends({ style: style, className: className }, trAttrs),
        showExpandColumn ? _react2.default.createElement(_expandCell2.default, _extends({}, expandRow, {
          rowKey: key,
          rowIndex: rowIndex,
          expanded: expanded
        })) : null,
        selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && !hideSelectColumn ? _react2.default.createElement(_selectionCell2.default, _extends({}, selectRow, {
          rowKey: key,
          rowIndex: rowIndex,
          selected: selected,
          disabled: !selectable
        })) : null,
        columns.map(function (column, index) {
          if (!column.hidden) {
            var dataField = column.dataField;

            var content = _utils2.default.get(row, dataField);
            var editable = _utils2.default.isDefined(column.editable) ? column.editable : true;
            if (dataField === keyField || !editableRow) editable = false;
            if (_utils2.default.isFunction(column.editable)) {
              editable = column.editable(content, row, rowIndex, index);
            }
            if (rowIndex === editingRowIdx && index === editingColIdx) {
              var editCellstyle = column.editCellStyle || {};
              var editCellclasses = column.editCellClasses;
              if (_utils2.default.isFunction(column.editCellStyle)) {
                editCellstyle = column.editCellStyle(content, row, rowIndex, index);
              }
              if (_utils2.default.isFunction(column.editCellClasses)) {
                editCellclasses = column.editCellClasses(content, row, rowIndex, index);
              }
              return _react2.default.createElement(EditingCell, _extends({
                key: content + '-' + index,
                row: row,
                rowIndex: rowIndex,
                column: column,
                columnIndex: index,
                className: editCellclasses,
                style: editCellstyle
              }, rest));
            }
            // render cell
            var cellTitle = void 0;
            var cellStyle = {};
            var cellAttrs = _extends({}, _utils2.default.isFunction(column.attrs) ? column.attrs(content, row, rowIndex, index) : column.attrs, column.events);

            var cellClasses = _utils2.default.isFunction(column.classes) ? column.classes(content, row, rowIndex, index) : column.classes;

            if (column.style) {
              cellStyle = _utils2.default.isFunction(column.style) ? column.style(content, row, rowIndex, index) : column.style;
              cellStyle = Object.assign({}, cellStyle) || {};
            }

            if (column.title) {
              cellTitle = _utils2.default.isFunction(column.title) ? column.title(content, row, rowIndex, index) : content;
              cellAttrs.title = cellTitle;
            }

            if (column.align) {
              cellStyle.textAlign = _utils2.default.isFunction(column.align) ? column.align(content, row, rowIndex, index) : column.align;
            }

            if (cellClasses) cellAttrs.className = cellClasses;
            if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

            return _react2.default.createElement(_cell2.default, _extends({
              key: content + '-' + index,
              row: row,
              rowIndex: rowIndex,
              columnIndex: index,
              column: column,
              onStart: onStart,
              editable: editable,
              clickToEdit: mode === CLICK_TO_CELL_EDIT,
              dbclickToEdit: mode === DBCLICK_TO_CELL_EDIT
            }, cellAttrs));
          }
          return false;
        })
      );
    }
  }]);

  return Row;
}((0, _rowEventDelegater2.default)(_react.Component));

Row.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  columns: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  attrs: _propTypes2.default.object
};

Row.defaultProps = {
  editable: true,
  style: {},
  className: null,
  attrs: {}
};

exports.default = Row;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.handleEditingCell = _this.handleEditingCell.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      if (nextProps.column.isDummyField) {
        shouldUpdate = !_utils2.default.isEqual(this.props.row, nextProps.row);
      } else {
        shouldUpdate = _utils2.default.get(this.props.row, this.props.column.dataField) !== _utils2.default.get(nextProps.row, nextProps.column.dataField);
      }

      if (shouldUpdate) return true;

      shouldUpdate = this.props.column.hidden !== nextProps.column.hidden || this.props.rowIndex !== nextProps.rowIndex || this.props.columnIndex !== nextProps.columnIndex || this.props.className !== nextProps.className || this.props.title !== nextProps.title || this.props.editable !== nextProps.editable || this.props.clickToEdit !== nextProps.clickToEdit || this.props.dbclickToEdit !== nextProps.dbclickToEdit || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.column.formatExtraData, nextProps.column.formatExtraData) || !_utils2.default.isEqual(this.props.column.events, nextProps.column.events) || !_utils2.default.isEqual(this.props.column.attrs, nextProps.column.attrs);
      return shouldUpdate;
    }
  }, {
    key: 'handleEditingCell',
    value: function handleEditingCell(e) {
      var _props = this.props,
          column = _props.column,
          onStart = _props.onStart,
          rowIndex = _props.rowIndex,
          columnIndex = _props.columnIndex,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit;
      var events = column.events;

      if (events) {
        if (clickToEdit) {
          var customClick = events.onClick;
          if (_utils2.default.isFunction(customClick)) customClick(e);
        } else if (dbclickToEdit) {
          var customDbClick = events.onDoubleClick;
          if (_utils2.default.isFunction(customDbClick)) customDbClick(e);
        }
      }
      if (onStart) {
        onStart(rowIndex, columnIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          row = _props2.row,
          rowIndex = _props2.rowIndex,
          column = _props2.column,
          columnIndex = _props2.columnIndex,
          onStart = _props2.onStart,
          editable = _props2.editable,
          clickToEdit = _props2.clickToEdit,
          dbclickToEdit = _props2.dbclickToEdit,
          rest = _objectWithoutProperties(_props2, ['row', 'rowIndex', 'column', 'columnIndex', 'onStart', 'editable', 'clickToEdit', 'dbclickToEdit']);

      var dataField = column.dataField,
          formatter = column.formatter,
          formatExtraData = column.formatExtraData;

      var attrs = _extends({}, rest);
      var content = column.isDummyField ? null : _utils2.default.get(row, dataField);

      if (formatter) {
        content = column.formatter(content, row, rowIndex, formatExtraData);
      }

      if (clickToEdit && editable) {
        attrs.onClick = this.handleEditingCell;
      } else if (dbclickToEdit && editable) {
        attrs.onDoubleClick = this.handleEditingCell;
      }

      return _react2.default.createElement(
        'td',
        attrs,
        typeof content === 'boolean' ? '' + content : content
      );
    }
  }]);

  return Cell;
}(_react.Component);

Cell.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  columnIndex: _propTypes2.default.number.isRequired
};

exports.default = Cell;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectionCell = function (_Component) {
  _inherits(SelectionCell, _Component);

  function SelectionCell() {
    _classCallCheck(this, SelectionCell);

    var _this = _possibleConstructorReturn(this, (SelectionCell.__proto__ || Object.getPrototypeOf(SelectionCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectionCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var selected = this.props.selected;


      return nextProps.selected !== selected;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          inputType = _props.mode,
          rowKey = _props.rowKey,
          selected = _props.selected,
          onRowSelect = _props.onRowSelect,
          disabled = _props.disabled,
          rowIndex = _props.rowIndex,
          clickToSelect = _props.clickToSelect;


      if (disabled) return;
      if (clickToSelect) return;

      var checked = inputType === _const2.default.ROW_SELECT_SINGLE ? true : !selected;

      onRowSelect(rowKey, checked, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          inputType = _props2.mode,
          selected = _props2.selected,
          disabled = _props2.disabled,
          selectionRenderer = _props2.selectionRenderer;


      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref) {
          var bootstrap4 = _ref.bootstrap4;
          return _react2.default.createElement(
            'td',
            { onClick: _this2.handleClick },
            selectionRenderer ? selectionRenderer({
              mode: inputType,
              checked: selected,
              disabled: disabled
            }) : _react2.default.createElement('input', {
              type: inputType,
              checked: selected,
              disabled: disabled,
              className: bootstrap4 ? 'selection-input-4' : '',
              onChange: function onChange() {}
            })
          );
        }
      );
    }
  }]);

  return SelectionCell;
}(_react.Component);

SelectionCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  rowKey: _propTypes2.default.any,
  selected: _propTypes2.default.bool,
  onRowSelect: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  rowIndex: _propTypes2.default.number,
  clickToSelect: _propTypes2.default.bool,
  selectionRenderer: _propTypes2.default.func
};
exports.default = SelectionCell;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/* eslint no-nested-ternary: 0 */


var ExpandCell = function (_Component) {
  _inherits(ExpandCell, _Component);

  function ExpandCell() {
    _classCallCheck(this, ExpandCell);

    var _this = _possibleConstructorReturn(this, (ExpandCell.__proto__ || Object.getPrototypeOf(ExpandCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ExpandCell, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          rowKey = _props.rowKey,
          expanded = _props.expanded,
          onRowExpand = _props.onRowExpand,
          rowIndex = _props.rowIndex;


      onRowExpand(rowKey, expanded, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          expanded = _props2.expanded,
          expandColumnRenderer = _props2.expandColumnRenderer;


      return _react2.default.createElement(
        'td',
        { onClick: this.handleClick },
        expandColumnRenderer ? expandColumnRenderer({
          expanded: expanded
        }) : expanded ? '(-)' : '(+)'
      );
    }
  }]);

  return ExpandCell;
}(_react.Component);

ExpandCell.propTypes = {
  rowKey: _propTypes2.default.any,
  expanded: _propTypes2.default.bool.isRequired,
  onRowExpand: _propTypes2.default.func.isRequired,
  expandColumnRenderer: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number
};
exports.default = ExpandCell;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowEventDelegater, _ExtendBase);

    function RowEventDelegater(props) {
      _classCallCheck(this, RowEventDelegater);

      var _this = _possibleConstructorReturn(this, (RowEventDelegater.__proto__ || Object.getPrototypeOf(RowEventDelegater)).call(this, props));

      _this.clickNum = 0;
      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
      return _this;
    }

    _createClass(RowEventDelegater, [{
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              row = _props.row,
              rowIndex = _props.rowIndex;

          cb(e, row, rowIndex);
        };
      }
    }, {
      key: 'createClickEventHandler',
      value: function createClickEventHandler(cb) {
        var _this3 = this;

        return function (e) {
          var _props2 = _this3.props,
              row = _props2.row,
              selected = _props2.selected,
              keyField = _props2.keyField,
              selectable = _props2.selectable,
              expandable = _props2.expandable,
              rowIndex = _props2.rowIndex,
              expanded = _props2.expanded,
              expandRow = _props2.expandRow,
              selectRow = _props2.selectRow,
              _props2$cellEdit = _props2.cellEdit,
              mode = _props2$cellEdit.mode,
              DBCLICK_TO_CELL_EDIT = _props2$cellEdit.DBCLICK_TO_CELL_EDIT,
              DELAY_FOR_DBCLICK = _props2$cellEdit.DELAY_FOR_DBCLICK;


          var clickFn = function clickFn() {
            if (cb) {
              cb(e, row, rowIndex);
            }
            var key = _utils2.default.get(row, keyField);
            if (expandRow && expandable) {
              expandRow.onRowExpand(key, !expanded, rowIndex, e);
            }
            if (selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && selectable) {
              selectRow.onRowSelect(key, !selected, rowIndex, e);
            }
          };

          if (mode === DBCLICK_TO_CELL_EDIT && selectRow.clickToEdit) {
            _this3.clickNum += 1;
            _utils2.default.debounce(function () {
              if (_this3.clickNum === 1) {
                clickFn();
              }
              _this3.clickNum = 0;
            }, DELAY_FOR_DBCLICK)();
          } else {
            clickFn();
          }
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this4 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = {};
        var _props3 = this.props,
            expandRow = _props3.expandRow,
            selectRow = _props3.selectRow;

        if (expandRow && selectRow && selectRow.clickToSelect) {
          newAttrs.onClick = this.createClickEventHandler(attrs.onClick);
        }
        Object.keys(attrs).forEach(function (attr) {
          if (!newAttrs[attr]) {
            if (events.includes(attr)) {
              newAttrs[attr] = _this4.createDefaultEventHandler(attrs[attr]);
            } else {
              newAttrs[attr] = attrs[attr];
            }
          }
        });
        return newAttrs;
      }
    }]);

    return RowEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandRow = function ExpandRow(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'tr',
    { className: 'expanding-row' },
    _react2.default.createElement(
      'td',
      rest,
      children
    )
  );
};

ExpandRow.propTypes = {
  children: _propTypes2.default.node
};

ExpandRow.defaultProps = {
  children: null
};

exports.default = ExpandRow;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowSection = function RowSection(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      {
        'data-toggle': 'collapse',
        colSpan: colSpan,
        className: 'react-bs-table-no-data'
      },
      content
    )
  );
};

RowSection.propTypes = {
  content: _propTypes2.default.any,
  colSpan: _propTypes2.default.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

exports.default = RowSection;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _columnResolver = __webpack_require__(33);

var _columnResolver2 = _interopRequireDefault(_columnResolver);

var _expandRowResolver = __webpack_require__(34);

var _expandRowResolver2 = _interopRequireDefault(_expandRowResolver);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExpandRowResolver) {
    _inherits(TableResolver, _ExpandRowResolver);

    function TableResolver() {
      _classCallCheck(this, TableResolver);

      return _possibleConstructorReturn(this, (TableResolver.__proto__ || Object.getPrototypeOf(TableResolver)).apply(this, arguments));
    }

    _createClass(TableResolver, [{
      key: 'validateProps',
      value: function validateProps() {
        var keyField = this.props.keyField;

        if (!keyField) {
          throw new Error('Please specify a field as key via keyField');
        }
        if (this.visibleColumnSize(false) <= 0) {
          throw new Error('No visible columns detected');
        }
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.props.data.length === 0;
      }

      /**
       * props resolver for cell selection
       * @param {Object} options - addtional options like callback which are about to merge into props
       *
       * @returns {Object} result - props for cell selections
       * @returns {String} result.mode - input type of row selection or disabled.
       */

    }, {
      key: 'resolveSelectRowProps',
      value: function resolveSelectRowProps(options) {
        var selectRow = this.props.selectRow;
        var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED;


        if (_utils2.default.isDefined(selectRow)) {
          return _extends({}, selectRow, options);
        }

        return {
          mode: ROW_SELECT_DISABLED
        };
      }

      /**
       * props resolver for header cell selection
       * @param {Object} options - addtional options like callback which are about to merge into props
       *
       * @returns {Object} result - props for cell selections
       * @returns {String} result.mode - input type of row selection or disabled.
       * @returns {String} result.checkedStatus - checkbox status depending on selected rows counts
       */

    }, {
      key: 'resolveSelectRowPropsForHeader',
      value: function resolveSelectRowPropsForHeader() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var selectRow = this.props.selectRow;

        var allRowsSelected = options.allRowsSelected,
            allRowsNotSelected = options.allRowsNotSelected,
            rest = _objectWithoutProperties(options, ['allRowsSelected', 'allRowsNotSelected']);

        var ROW_SELECT_DISABLED = _const2.default.ROW_SELECT_DISABLED,
            CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
            CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
            CHECKBOX_STATUS_UNCHECKED = _const2.default.CHECKBOX_STATUS_UNCHECKED;


        if (_utils2.default.isDefined(selectRow)) {
          var checkedStatus = void 0;

          // checkbox status depending on selected rows counts
          if (allRowsSelected) checkedStatus = CHECKBOX_STATUS_CHECKED;else if (allRowsNotSelected) checkedStatus = CHECKBOX_STATUS_UNCHECKED;else checkedStatus = CHECKBOX_STATUS_INDETERMINATE;

          return _extends({}, selectRow, rest, {
            checkedStatus: checkedStatus
          });
        }

        return {
          mode: ROW_SELECT_DISABLED
        };
      }
    }]);

    return TableResolver;
  }((0, _expandRowResolver2.default)((0, _columnResolver2.default)(ExtendBase)));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ColumnResolver, _ExtendBase);

    function ColumnResolver() {
      _classCallCheck(this, ColumnResolver);

      return _possibleConstructorReturn(this, (ColumnResolver.__proto__ || Object.getPrototypeOf(ColumnResolver)).apply(this, arguments));
    }

    _createClass(ColumnResolver, [{
      key: "visibleColumnSize",
      value: function visibleColumnSize() {
        var includeSelectColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var columnLen = this.props.columns.filter(function (c) {
          return !c.hidden;
        }).length;
        if (!includeSelectColumn) return columnLen;
        if (this.props.selectRow && !this.props.selectRow.hideSelectColumn) {
          columnLen += 1;
        }
        if (this.props.expandRow && this.props.expandRow.showExpandColumn) {
          columnLen += 1;
        }
        return columnLen;
      }
    }]);

    return ColumnResolver;
  }(ExtendBase);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ExpandRowResolver, _ExtendBase);

    function ExpandRowResolver() {
      _classCallCheck(this, ExpandRowResolver);

      return _possibleConstructorReturn(this, (ExpandRowResolver.__proto__ || Object.getPrototypeOf(ExpandRowResolver)).apply(this, arguments));
    }

    _createClass(ExpandRowResolver, [{
      key: "resolveExpandRowProps",
      value: function resolveExpandRowProps() {
        var _props = this.props,
            expandRow = _props.expandRow,
            expanded = _props.expanded,
            onRowExpand = _props.onRowExpand,
            onAllRowExpand = _props.onAllRowExpand,
            isAnyExpands = _props.isAnyExpands;

        if (expandRow) {
          return _extends({}, expandRow, {
            expanded: expanded,
            onRowExpand: onRowExpand,
            onAllRowExpand: onAllRowExpand,
            isAnyExpands: isAnyExpands,
            nonExpandable: expandRow.nonExpandable || []
          });
        }
        return null;
      }
    }]);

    return ExpandRowResolver;
  }(ExtendBase);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _dataContext = __webpack_require__(36);

var _dataContext2 = _interopRequireDefault(_dataContext);

var _sortContext = __webpack_require__(37);

var _sortContext2 = _interopRequireDefault(_sortContext);

var _selectionContext = __webpack_require__(38);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

var _rowExpandContext = __webpack_require__(39);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

var _remoteResolver2 = __webpack_require__(40);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _bootstrap = __webpack_require__(4);

var _operators = __webpack_require__(41);

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */
/* eslint class-methods-use-this: 0 */


var withContext = function withContext(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.DataContext = (0, _dataContext2.default)();

      if (props.columns.filter(function (col) {
        return col.sort;
      }).length > 0) {
        _this.SortContext = (0, _sortContext2.default)(_operators2.default, _this.isRemoteSort, _this.handleRemoteSortChange);
      }

      if (props.selectRow) {
        _this.SelectionContext = (0, _selectionContext2.default)(_operators2.default);
      }

      if (props.expandRow) {
        _this.RowExpandContext = (0, _rowExpandContext2.default)(_operators2.default);
      }

      if (props.cellEdit && props.cellEdit.createContext) {
        _this.CellEditContext = props.cellEdit.createContext(_utils2.default, _operators2.default, _this.isRemoteCellEdit, _this.handleRemoteCellChange);
      }

      if (props.filter) {
        _this.FilterContext = props.filter.createContext(_utils2.default, _this.isRemoteFiltering, _this.handleRemoteFilterChange);
      }

      if (props.pagination) {
        _this.PaginationContext = props.pagination.createContext(_this.isRemotePagination, _this.handleRemotePageChange);
      }

      if (props.search && props.search.searchContext) {
        _this.SearchContext = props.search.searchContext(_utils2.default, _this.isRemoteSearch, _this.handleRemoteSearchChange);
      }

      if (props.setDependencyModules) {
        props.setDependencyModules(_utils2.default);
      }
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'renderBase',
      value: function renderBase() {
        var _this2 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps, selectionProps) {
          return _react2.default.createElement(Base, _extends({}, _this2.props, selectionProps, sortProps, cellEditProps, filterProps, searchProps, paginationProps, expandProps, {
            data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
          }));
        };
      }
    }, {
      key: 'renderWithSelectionCtx',
      value: function renderWithSelectionCtx(base, baseProps) {
        var _this3 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps) {
          return _react2.default.createElement(
            _this3.SelectionContext.Provider,
            _extends({}, baseProps, {
              selectRow: _this3.props.selectRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            _react2.default.createElement(
              _this3.SelectionContext.Consumer,
              null,
              function (selectionProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps, selectionProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithRowExpandCtx',
      value: function renderWithRowExpandCtx(base, baseProps) {
        var _this4 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this4.RowExpandContext.Provider,
            _extends({}, baseProps, {
              expandRow: _this4.props.expandRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            _react2.default.createElement(
              _this4.RowExpandContext.Consumer,
              null,
              function (expandProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps, expandProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithPaginationCtx',
      value: function renderWithPaginationCtx(base) {
        var _this5 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps, sortProps) {
          return _react2.default.createElement(
            _this5.PaginationContext.Provider,
            {
              ref: function ref(n) {
                return _this5.paginationContext = n;
              },
              pagination: _this5.props.pagination,
              data: rootProps.getData(filterProps, searchProps, sortProps),
              bootstrap4: _this5.props.bootstrap4
            },
            _react2.default.createElement(
              _this5.PaginationContext.Consumer,
              null,
              function (paginationProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps, paginationProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSortCtx',
      value: function renderWithSortCtx(base, baseProps) {
        var _this6 = this;

        return function (rootProps, cellEditProps, filterProps, searchProps) {
          return _react2.default.createElement(
            _this6.SortContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this6.sortContext = n;
              },
              defaultSorted: _this6.props.defaultSorted,
              defaultSortDirection: _this6.props.defaultSortDirection,
              data: rootProps.getData(filterProps, searchProps)
            }),
            _react2.default.createElement(
              _this6.SortContext.Consumer,
              null,
              function (sortProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps, sortProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSearchCtx',
      value: function renderWithSearchCtx(base, baseProps) {
        var _this7 = this;

        return function (rootProps, cellEditProps, filterProps) {
          return _react2.default.createElement(
            _this7.SearchContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this7.searchContext = n;
              },
              data: rootProps.getData(filterProps),
              searchText: _this7.props.search.searchText
            }),
            _react2.default.createElement(
              _this7.SearchContext.Consumer,
              null,
              function (searchProps) {
                return base(rootProps, cellEditProps, filterProps, searchProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithFilterCtx',
      value: function renderWithFilterCtx(base, baseProps) {
        var _this8 = this;

        return function (rootProps, cellEditProps) {
          return _react2.default.createElement(
            _this8.FilterContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this8.filterContext = n;
              },
              data: rootProps.getData()
            }),
            _react2.default.createElement(
              _this8.FilterContext.Consumer,
              null,
              function (filterProps) {
                return base(rootProps, cellEditProps, filterProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithCellEditCtx',
      value: function renderWithCellEditCtx(base, baseProps) {
        var _this9 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this9.CellEditContext.Provider,
            _extends({}, baseProps, {
              selectRow: _this9.props.selectRow,
              cellEdit: _this9.props.cellEdit,
              data: rootProps.getData()
            }),
            _react2.default.createElement(
              _this9.CellEditContext.Consumer,
              null,
              function (cellEditProps) {
                return base(rootProps, cellEditProps);
              }
            )
          );
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            keyField = _props.keyField,
            columns = _props.columns,
            bootstrap4 = _props.bootstrap4,
            registerExposedAPI = _props.registerExposedAPI;

        var baseProps = { keyField: keyField, columns: columns };
        if (registerExposedAPI) baseProps.registerExposedAPI = registerExposedAPI;

        var base = this.renderBase();

        if (this.SelectionContext) {
          base = this.renderWithSelectionCtx(base, baseProps);
        }

        if (this.RowExpandContext) {
          base = this.renderWithRowExpandCtx(base, baseProps);
        }

        if (this.PaginationContext) {
          base = this.renderWithPaginationCtx(base, baseProps);
        }

        if (this.SortContext) {
          base = this.renderWithSortCtx(base, baseProps);
        }

        if (this.SearchContext) {
          base = this.renderWithSearchCtx(base, baseProps);
        }

        if (this.FilterContext) {
          base = this.renderWithFilterCtx(base, baseProps);
        }

        if (this.CellEditContext) {
          base = this.renderWithCellEditCtx(base, baseProps);
        }

        return _react2.default.createElement(
          _bootstrap.BootstrapContext.Provider,
          { value: { bootstrap4: bootstrap4 } },
          _react2.default.createElement(
            this.DataContext.Provider,
            _extends({}, baseProps, {
              data: this.props.data
            }),
            _react2.default.createElement(
              this.DataContext.Consumer,
              null,
              base
            )
          )
        );
      }
    }]);

    return BootstrapTableContainer;
  }((0, _remoteResolver3.default)(_react.Component));
};

exports.default = withContext;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var DataContext = _react2.default.createContext();

  var DataProvider = function (_Component) {
    _inherits(DataProvider, _Component);

    function DataProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DataProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: _this.props.data }, _this.getData = function (filterProps, searchProps, sortProps, paginationProps) {
        if (paginationProps) return paginationProps.data;else if (sortProps) return sortProps.data;else if (searchProps) return searchProps.data;else if (filterProps) return filterProps.data;
        return _this.props.data;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataProvider, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState(function () {
          return { data: nextProps.data };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          DataContext.Provider,
          {
            value: {
              data: this.state.data,
              getData: this.getData
            }
          },
          this.props.children
        );
      }
    }]);

    return DataProvider;
  }(_react.Component);

  DataProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired
  };

  return {
    Provider: DataProvider,
    Consumer: DataContext.Consumer
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


exports.default = function (dataOperator, isRemoteSort, handleSortChange) {
  var SortContext = _react2.default.createContext();

  var SortProvider = function (_React$Component) {
    _inherits(SortProvider, _React$Component);

    function SortProvider(props) {
      _classCallCheck(this, SortProvider);

      var _this = _possibleConstructorReturn(this, (SortProvider.__proto__ || Object.getPrototypeOf(SortProvider)).call(this, props));

      _initialiseProps.call(_this);

      var sortOrder = void 0;
      var sortColumn = void 0;
      var columns = props.columns,
          defaultSorted = props.defaultSorted,
          defaultSortDirection = props.defaultSortDirection;


      if (defaultSorted && defaultSorted.length > 0) {
        var sortField = defaultSorted[0].dataField;
        sortOrder = defaultSorted[0].order || defaultSortDirection;
        var sortColumns = columns.filter(function (col) {
          return col.dataField === sortField;
        });
        if (sortColumns.length > 0) {
          sortColumn = sortColumns[0];

          if (sortColumn.onSort) {
            sortColumn.onSort(sortField, sortOrder);
          }
        }
      }
      _this.state = { sortOrder: sortOrder, sortColumn: sortColumn };
      return _this;
    }

    _createClass(SortProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _state = this.state,
            sortOrder = _state.sortOrder,
            sortColumn = _state.sortColumn;

        if (isRemoteSort() && sortOrder && sortColumn) {
          handleSortChange(sortColumn.dataField, sortOrder);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.data;
        var _state2 = this.state,
            sortOrder = _state2.sortOrder,
            sortColumn = _state2.sortColumn;

        if (!isRemoteSort() && sortColumn) {
          data = dataOperator.sort(data, sortOrder, sortColumn);
        }

        return _react2.default.createElement(
          SortContext.Provider,
          {
            value: {
              data: data,
              sortOrder: sortOrder,
              onSort: this.handleSort,
              sortField: sortColumn ? sortColumn.dataField : null
            }
          },
          this.props.children
        );
      }
    }]);

    return SortProvider;
  }(_react2.default.Component);

  SortProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired,
    defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      dataField: _propTypes2.default.string.isRequired,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
    })),
    defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC])
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleSort = function (column) {
      var sortOrder = dataOperator.nextOrder(column, _this2.state, _this2.props.defaultSortDirection);

      if (column.onSort) {
        column.onSort(column.dataField, sortOrder);
      }

      if (isRemoteSort()) {
        handleSortChange(column.dataField, sortOrder);
      }
      _this2.setState(function () {
        return {
          sortOrder: sortOrder,
          sortColumn: column
        };
      });
    };
  };

  return {
    Provider: SortProvider,
    Consumer: SortContext.Consumer
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (dataOperator) {
  var SelectionContext = _react2.default.createContext();

  var SelectionProvider = function (_React$Component) {
    _inherits(SelectionProvider, _React$Component);

    function SelectionProvider(props) {
      _classCallCheck(this, SelectionProvider);

      var _this = _possibleConstructorReturn(this, (SelectionProvider.__proto__ || Object.getPrototypeOf(SelectionProvider)).call(this, props));

      _this.state = { selected: _this.props.selectRow && _this.props.selectRow.selected || [] };

      _this.handleRowSelect = function (rowKey, checked, rowIndex, e) {
        var _this$props = _this.props,
            data = _this$props.data,
            keyField = _this$props.keyField,
            _this$props$selectRow = _this$props.selectRow,
            mode = _this$props$selectRow.mode,
            onSelect = _this$props$selectRow.onSelect;
        var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


        var currSelected = [].concat(_toConsumableArray(_this.state.selected));

        if (mode === ROW_SELECT_SINGLE) {
          // when select mode is radio
          currSelected = [rowKey];
        } else if (checked) {
          // when select mode is checkbox
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(function (value) {
            return value !== rowKey;
          });
        }

        if (onSelect) {
          var row = dataOperator.getRowByRowId(data, keyField, rowKey);
          onSelect(row, checked, rowIndex, e);
        }

        _this.setState(function () {
          return { selected: currSelected };
        });
      };

      _this.handleAllRowsSelect = function (e, isUnSelect) {
        var _this$props2 = _this.props,
            data = _this$props2.data,
            keyField = _this$props2.keyField,
            _this$props2$selectRo = _this$props2.selectRow,
            onSelectAll = _this$props2$selectRo.onSelectAll,
            nonSelectable = _this$props2$selectRo.nonSelectable;
        var selected = _this.state.selected;


        var currSelected = void 0;

        if (!isUnSelect) {
          currSelected = selected.concat(dataOperator.selectableKeys(data, keyField, nonSelectable));
        } else {
          currSelected = selected.filter(function (s) {
            return typeof data.find(function (d) {
              return d[keyField] === s;
            }) === 'undefined';
          });
        }

        if (onSelectAll) {
          onSelectAll(!isUnSelect, dataOperator.getSelectedRows(data, keyField, currSelected), e);
        }

        _this.setState(function () {
          return { selected: currSelected };
        });
      };

      if (props.registerExposedAPI) {
        var getSelected = function getSelected() {
          return _this.getSelected();
        };
        props.registerExposedAPI(getSelected);
      }
      return _this;
    }

    _createClass(SelectionProvider, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (nextProps.selectRow) {
          this.setState(function () {
            return {
              selected: nextProps.selectRow.selected || _this2.state.selected
            };
          });
        }
      }

      // exposed API

    }, {
      key: 'getSelected',
      value: function getSelected() {
        return this.state.selected;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          SelectionContext.Provider,
          {
            value: {
              selected: this.state.selected,
              onRowSelect: this.handleRowSelect,
              onAllRowsSelect: this.handleAllRowsSelect
            }
          },
          this.props.children
        );
      }
    }]);

    return SelectionProvider;
  }(_react2.default.Component);

  SelectionProvider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    data: _propTypes2.default.array.isRequired,
    keyField: _propTypes2.default.string.isRequired
  };

  return {
    Provider: SelectionProvider,
    Consumer: SelectionContext.Consumer
  };
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (dataOperator) {
  var RowExpandContext = _react2.default.createContext();

  var RowExpandProvider = function (_React$Component) {
    _inherits(RowExpandProvider, _React$Component);

    function RowExpandProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RowExpandProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowExpandProvider.__proto__ || Object.getPrototypeOf(RowExpandProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.expandRow.expanded || [] }, _this.handleRowExpand = function (rowKey, expanded, rowIndex, e) {
        var _this$props = _this.props,
            data = _this$props.data,
            keyField = _this$props.keyField,
            onExpand = _this$props.expandRow.onExpand;


        var currExpanded = [].concat(_toConsumableArray(_this.state.expanded));

        if (expanded) {
          currExpanded.push(rowKey);
        } else {
          currExpanded = currExpanded.filter(function (value) {
            return value !== rowKey;
          });
        }

        if (onExpand) {
          var row = dataOperator.getRowByRowId(data, keyField, rowKey);
          onExpand(row, expanded, rowIndex, e);
        }
        _this.setState(function () {
          return { expanded: currExpanded };
        });
      }, _this.handleAllRowExpand = function (e, expandAll) {
        var _this$props2 = _this.props,
            data = _this$props2.data,
            keyField = _this$props2.keyField,
            _this$props2$expandRo = _this$props2.expandRow,
            onExpandAll = _this$props2$expandRo.onExpandAll,
            nonExpandable = _this$props2$expandRo.nonExpandable;
        var expanded = _this.state.expanded;


        var currExpanded = void 0;

        if (expandAll) {
          currExpanded = expanded.concat(dataOperator.expandableKeys(data, keyField, nonExpandable));
        } else {
          currExpanded = expanded.filter(function (s) {
            return typeof data.find(function (d) {
              return d[keyField] === s;
            }) === 'undefined';
          });
        }

        if (onExpandAll) {
          onExpandAll(expandAll, dataOperator.getExpandedRows(data, keyField, currExpanded), e);
        }

        _this.setState(function () {
          return { expanded: currExpanded };
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RowExpandProvider, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (nextProps.expandRow) {
          this.setState(function () {
            return {
              expanded: nextProps.expandRow.expanded || _this2.state.expanded
            };
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            data = _props.data,
            keyField = _props.keyField;

        return _react2.default.createElement(
          RowExpandContext.Provider,
          {
            value: {
              isAnyExpands: dataOperator.isAnyExpands(data, keyField, this.state.expanded),
              expanded: this.state.expanded,
              onRowExpand: this.handleRowExpand,
              onAllRowExpand: this.handleAllRowExpand
            }
          },
          this.props.children
        );
      }
    }]);

    return RowExpandProvider;
  }(_react2.default.Component);

  RowExpandProvider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    data: _propTypes2.default.array.isRequired,
    keyField: _propTypes2.default.string.isRequired
  };

  return {
    Provider: RowExpandProvider,
    Consumer: RowExpandContext.Consumer
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RemoteResolver, _ExtendBase);

    function RemoteResolver() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RemoteResolver);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RemoteResolver.__proto__ || Object.getPrototypeOf(RemoteResolver)).call.apply(_ref, [this].concat(args))), _this), _this.getNewestState = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var sortOrder = void 0;
        var sortField = void 0;
        var page = void 0;
        var sizePerPage = void 0;
        var searchText = void 0;
        var filters = {};

        if (_this.sortContext) {
          sortOrder = _this.sortContext.state.sortOrder;
          sortField = _this.sortContext.state.sortColumn ? _this.sortContext.state.sortColumn.dataField : null;
        }

        if (_this.filterContext) {
          filters = _this.filterContext.currFilters;
        }

        if (_this.paginationContext) {
          page = _this.paginationContext.currPage;
          sizePerPage = _this.paginationContext.currSizePerPage;
        }

        if (_this.searchContext) {
          searchText = _this.props.search.searchText;
        }

        return _extends({
          sortOrder: sortOrder,
          sortField: sortField,
          filters: filters,
          page: page,
          sizePerPage: sizePerPage,
          searchText: searchText
        }, state, {
          data: _this.props.data
        });
      }, _this.isRemoteSearch = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.search || _this.isRemotePagination();
      }, _this.isRemotePagination = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.pagination;
      }, _this.isRemoteFiltering = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.filter || _this.isRemotePagination();
      }, _this.isRemoteSort = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.sort || _this.isRemotePagination();
      }, _this.isRemoteCellEdit = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.cellEdit;
      }, _this.handleRemotePageChange = function (page, sizePerPage) {
        _this.props.onTableChange('pagination', _this.getNewestState({ page: page, sizePerPage: sizePerPage }));
      }, _this.handleRemoteFilterChange = function (filters) {
        var newState = { filters: filters };
        if (_this.isRemotePagination()) {
          var options = _this.props.pagination.options || {};
          newState.page = _utils2.default.isDefined(options.pageStartIndex) ? options.pageStartIndex : 1;
        }
        _this.props.onTableChange('filter', _this.getNewestState(newState));
      }, _this.handleRemoteSortChange = function (sortField, sortOrder) {
        _this.props.onTableChange('sort', _this.getNewestState({ sortField: sortField, sortOrder: sortOrder }));
      }, _this.handleRemoteCellChange = function (rowId, dataField, newValue) {
        var cellEdit = { rowId: rowId, dataField: dataField, newValue: newValue };
        _this.props.onTableChange('cellEdit', _this.getNewestState({ cellEdit: cellEdit }));
      }, _this.handleRemoteSearchChange = function (searchText) {
        _this.props.onTableChange('search', _this.getNewestState({ searchText: searchText }));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return RemoteResolver;
  }(ExtendBase);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rows = __webpack_require__(6);

var rows = _interopRequireWildcard(_rows);

var _selection = __webpack_require__(7);

var selection = _interopRequireWildcard(_selection);

var _expand = __webpack_require__(42);

var expand = _interopRequireWildcard(_expand);

var _mutate = __webpack_require__(43);

var mutate = _interopRequireWildcard(_mutate);

var _sort = __webpack_require__(44);

var sort = _interopRequireWildcard(_sort);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, rows, selection, expand, mutate, sort);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandedRows = exports.expandableKeys = exports.isAnyExpands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAnyExpands = exports.isAnyExpands = function isAnyExpands(data, keyField) {
  var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(i) {
    var rowKey = _utils2.default.get(data[i], keyField);
    if (typeof expanded.find(function (x) {
      return x === rowKey;
    }) !== 'undefined') {
      return {
        v: true
      };
    }
  };

  for (var i = 0; i < data.length; i += 1) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return false;
};

var expandableKeys = exports.expandableKeys = function expandableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !skips.includes(_utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var getExpandedRows = exports.getExpandedRows = function getExpandedRows(data, keyField, expanded) {
  return expanded.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  });
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCell = undefined;

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editCell = exports.editCell = function editCell(data, keyField, rowId, dataField, newValue) {
  var row = (0, _rows.getRowByRowId)(data, keyField, rowId);
  if (row) _utils2.default.set(row, dataField, newValue);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextOrder = exports.sort = undefined;

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-nested-ternary: 0 */
/* eslint no-lonely-if: 0 */
/* eslint no-underscore-dangle: 0 */


function comparator(a, b) {
  var result = void 0;
  if (typeof b === 'string') {
    result = b.localeCompare(a);
  } else {
    result = a > b ? -1 : a < b ? 1 : 0;
  }
  return result;
}

var sort = exports.sort = function sort(data, sortOrder, _ref) {
  var dataField = _ref.dataField,
      sortFunc = _ref.sortFunc;

  var _data = [].concat(_toConsumableArray(data));
  _data.sort(function (a, b) {
    var result = void 0;
    var valueA = _utils2.default.get(a, dataField);
    var valueB = _utils2.default.get(b, dataField);
    valueA = _utils2.default.isDefined(valueA) ? valueA : '';
    valueB = _utils2.default.isDefined(valueB) ? valueB : '';

    if (sortFunc) {
      result = sortFunc(valueA, valueB, sortOrder, dataField, a, b);
    } else {
      if (sortOrder === _const2.default.SORT_DESC) {
        result = comparator(valueA, valueB);
      } else {
        result = comparator(valueB, valueA);
      }
    }
    return result;
  });
  return _data;
};

var nextOrder = exports.nextOrder = function nextOrder(currentSortColumn, _ref2) {
  var sortOrder = _ref2.sortOrder,
      sortColumn = _ref2.sortColumn;
  var defaultOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const2.default.SORT_DESC;

  if (!sortColumn || currentSortColumn.dataField !== sortColumn.dataField) return defaultOrder;
  return sortOrder === _const2.default.SORT_DESC ? _const2.default.SORT_ASC : _const2.default.SORT_DESC;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NGM5NzE4ZTgzYzdlZDA1ZDVkMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1ldmVudC1kZWxlZ2F0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtcm93LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9leHBhbmQtcm93LXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2RhdGEtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvc2VsZWN0aW9uLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvcm93LWV4cGFuZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvZXhwYW5kLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL211dGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIl0sIm5hbWVzIjpbIlNPUlRfQVNDIiwiU09SVF9ERVNDIiwiUk9XX1NFTEVDVF9TSU5HTEUiLCJST1dfU0VMRUNUX01VTFRJUExFIiwiUk9XX1NFTEVDVF9ESVNBQkxFRCIsIkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIiwiQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUiLCJDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEIiwic3BsaXROZXN0ZWQiLCJzdHIiLCJqb2luIiwicmVwbGFjZSIsInNwbGl0IiwiZ2V0IiwidGFyZ2V0IiwiZmllbGQiLCJwYXRoQXJyYXkiLCJyZXN1bHQiLCJyZWR1Y2UiLCJjdXJyIiwicGF0aCIsImUiLCJzZXQiLCJ2YWx1ZSIsInNhZmUiLCJsZXZlbCIsImEiLCJiIiwiRXJyb3IiLCJsZW5ndGgiLCJpc0VtcHR5T2JqZWN0Iiwib2JqIiwiaXNPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImtleXMiLCJpIiwiY2FsbCIsImlzRGVmaW5lZCIsInNsZWVwIiwiZm4iLCJtcyIsInNldFRpbWVvdXQiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiYXNzaWduIiwiQm9vdHN0cmFwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJib290c3RyYXA0IiwibWF0Y2hSb3ciLCJrZXlGaWVsZCIsImlkIiwicm93IiwiZ2V0Um93QnlSb3dJZCIsImRhdGEiLCJmaW5kIiwiZ2V0U2VsZWN0aW9uU3VtbWFyeSIsInNlbGVjdGVkIiwiYWxsUm93c1NlbGVjdGVkIiwiYWxsUm93c05vdFNlbGVjdGVkIiwicm93S2V5cyIsIm1hcCIsImQiLCJ4Iiwic2VsZWN0YWJsZUtleXMiLCJza2lwcyIsImZpbHRlciIsImluY2x1ZGVzIiwidW5TZWxlY3RhYmxlS2V5cyIsImdldFNlbGVjdGVkUm93cyIsImsiLCJCb290c3RyYXBUYWJsZSIsInByb3BzIiwiZ2V0RGF0YSIsInZhbGlkYXRlUHJvcHMiLCJyZWdpc3RlckV4cG9zZWRBUEkiLCJsb2FkaW5nIiwib3ZlcmxheSIsIkxvYWRpbmdPdmVybGF5IiwicmVuZGVyVGFibGUiLCJjb2x1bW5zIiwiY2xhc3NlcyIsInN0cmlwZWQiLCJob3ZlciIsImJvcmRlcmVkIiwiY29uZGVuc2VkIiwibm9EYXRhSW5kaWNhdGlvbiIsImNhcHRpb24iLCJyb3dTdHlsZSIsInJvd0NsYXNzZXMiLCJ3cmFwcGVyQ2xhc3NlcyIsInJvd0V2ZW50cyIsInRhYmxlV3JhcHBlckNsYXNzIiwidGFibGVDbGFzcyIsImNlbGxTZWxlY3Rpb25JbmZvIiwicmVzb2x2ZVNlbGVjdFJvd1Byb3BzIiwib25Sb3dTZWxlY3QiLCJoZWFkZXJDZWxsU2VsZWN0aW9uSW5mbyIsInJlc29sdmVTZWxlY3RSb3dQcm9wc0ZvckhlYWRlciIsIm9uQWxsUm93c1NlbGVjdCIsInRhYmxlQ2FwdGlvbiIsImV4cGFuZFJvdyIsInJlc29sdmVFeHBhbmRSb3dQcm9wcyIsImhlYWRlckNsYXNzZXMiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJvblNvcnQiLCJvbkZpbHRlciIsIm9uRXh0ZXJuYWxGaWx0ZXIiLCJpc0VtcHR5IiwidmlzaWJsZUNvbHVtblNpemUiLCJjZWxsRWRpdCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImJvb2wiLCJyZW1vdGUiLCJvbmVPZlR5cGUiLCJzaGFwZSIsInBhZ2luYXRpb24iLCJub2RlIiwib2JqZWN0Iiwic2VsZWN0Um93IiwibW9kZSIsIm9uZU9mIiwiY2xpY2tUb1NlbGVjdCIsImNsaWNrVG9FZGl0Iiwib25TZWxlY3QiLCJvblNlbGVjdEFsbCIsInN0eWxlIiwibm9uU2VsZWN0YWJsZSIsImJnQ29sb3IiLCJoaWRlU2VsZWN0Q29sdW1uIiwic2VsZWN0aW9uUmVuZGVyZXIiLCJzZWxlY3Rpb25IZWFkZXJSZW5kZXJlciIsInJlbmRlcmVyIiwiZXhwYW5kZWQiLCJvbkV4cGFuZCIsIm9uRXhwYW5kQWxsIiwibm9uRXhwYW5kYWJsZSIsInNob3dFeHBhbmRDb2x1bW4iLCJleHBhbmRDb2x1bW5SZW5kZXJlciIsImV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyIiwib25Sb3dFeHBhbmQiLCJvbkFsbFJvd0V4cGFuZCIsImlzQW55RXhwYW5kcyIsImRlZmF1bHRTb3J0ZWQiLCJhcnJheU9mIiwiZGF0YUZpZWxkIiwib3JkZXIiLCJkZWZhdWx0U29ydERpcmVjdGlvbiIsIm9uVGFibGVDaGFuZ2UiLCJzZWFyY2giLCJzZWFyY2hUZXh0Iiwic2VhcmNoQ29udGV4dCIsInNldERlcGVuZGVuY3lNb2R1bGVzIiwiZGVmYXVsdFByb3BzIiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwiY29sdW1uIiwiaGlkZGVuIiwiY3VyclNvcnQiLCJpc0xhc3RTb3J0aW5nIiwiSGVhZGVyQ2VsbCIsImluZGV4Iiwic29ydGluZyIsInRleHQiLCJzb3J0IiwiZmlsdGVyUmVuZGVyZXIiLCJoZWFkZXJUaXRsZSIsImhlYWRlckFsaWduIiwiaGVhZGVyRm9ybWF0dGVyIiwiaGVhZGVyRXZlbnRzIiwiaGVhZGVyU3R5bGUiLCJoZWFkZXJBdHRycyIsImhlYWRlclNvcnRpbmdDbGFzc2VzIiwiaGVhZGVyU29ydGluZ1N0eWxlIiwiY2VsbEF0dHJzIiwiaXNGdW5jdGlvbiIsInNvcnRTeW1ib2wiLCJmaWx0ZXJFbG0iLCJjZWxsU3R5bGUiLCJjZWxsQ2xhc3NlcyIsInRpdGxlIiwidGV4dEFsaWduIiwiY3VzdG9tQ2xpY2siLCJvbkNsaWNrIiwib25DdXN0b21GaWx0ZXIiLCJ0eXBlIiwiY2hpbGRyZW4iLCJzb3J0RWxlbWVudCIsImZpbHRlckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaXNEdW1teUZpZWxkIiwiZm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiYW55IiwiZXZlbnRzIiwiYWxpZ24iLCJhdHRycyIsInNvcnRGdW5jIiwiZWRpdG9yIiwiZWRpdGFibGUiLCJlZGl0Q2VsbFN0eWxlIiwiZWRpdENlbGxDbGFzc2VzIiwiZWRpdG9yU3R5bGUiLCJlZGl0b3JDbGFzc2VzIiwiZWRpdG9yUmVuZGVyZXIiLCJ2YWxpZGF0b3IiLCJmaWx0ZXJWYWx1ZSIsIm51bWJlciIsIlNvcnRTeW1ib2wiLCJTb3J0Q2FyZXQiLCJvcmRlckNsYXNzIiwiZHJvcHVwIiwiQ2hlY2tCb3giLCJjaGVja2VkIiwiaW5kZXRlcm1pbmF0ZSIsImlucHV0IiwiU2VsZWN0aW9uSGVhZGVyQ2VsbCIsImhhbmRsZUNoZWNrQm94Q2xpY2siLCJiaW5kIiwibmV4dFByb3BzIiwiY2hlY2tlZFN0YXR1cyIsImlzVW5TZWxlY3QiLCJjb250ZW50IiwiYW55RXhwYW5kcyIsIkNhcHRpb24iLCJCb2R5Iiwic2VsZWN0ZWRSb3dLZXlzIiwiaW5kaWNhdGlvbiIsIm5vbkVkaXRhYmxlUm93cyIsImtleSIsImluZGV4T2YiLCJzZWxlY3RlZFN0eWxlIiwic2VsZWN0ZWRDbGFzc2VzIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0YWJsZSIsImV4cGFuZGFibGUiLCJwdXNoIiwiUm93Iiwicm93SW5kZXgiLCJlZGl0YWJsZVJvdyIsIm9uU3RhcnQiLCJFZGl0aW5nQ2VsbCIsImVkaXRpbmdSb3dJZHgiLCJyaWR4IiwiZWRpdGluZ0NvbElkeCIsImNpZHgiLCJDTElDS19UT19DRUxMX0VESVQiLCJEQkNMSUNLX1RPX0NFTExfRURJVCIsInJlc3QiLCJ0ckF0dHJzIiwiZGVsZWdhdGUiLCJlZGl0Q2VsbHN0eWxlIiwiZWRpdENlbGxjbGFzc2VzIiwiY2VsbFRpdGxlIiwiQ2VsbCIsImhhbmRsZUVkaXRpbmdDZWxsIiwic2hvdWxkVXBkYXRlIiwiaXNFcXVhbCIsImNvbHVtbkluZGV4IiwiZGJjbGlja1RvRWRpdCIsImN1c3RvbURiQ2xpY2siLCJvbkRvdWJsZUNsaWNrIiwiU2VsZWN0aW9uQ2VsbCIsImhhbmRsZUNsaWNrIiwiaW5wdXRUeXBlIiwicm93S2V5IiwiZGlzYWJsZWQiLCJFeHBhbmRDZWxsIiwiY2xpY2tOdW0iLCJjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyIiwiY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIiLCJjYiIsIkRFTEFZX0ZPUl9EQkNMSUNLIiwiY2xpY2tGbiIsIm5ld0F0dHJzIiwiZm9yRWFjaCIsImF0dHIiLCJFeHRlbmRCYXNlIiwiRXhwYW5kUm93IiwiUm93U2VjdGlvbiIsImNvbFNwYW4iLCJvcHRpb25zIiwiaW5jbHVkZVNlbGVjdENvbHVtbiIsImNvbHVtbkxlbiIsImMiLCJ3aXRoQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY29sIiwiU29ydENvbnRleHQiLCJpc1JlbW90ZVNvcnQiLCJoYW5kbGVSZW1vdGVTb3J0Q2hhbmdlIiwiU2VsZWN0aW9uQ29udGV4dCIsIlJvd0V4cGFuZENvbnRleHQiLCJDZWxsRWRpdENvbnRleHQiLCJpc1JlbW90ZUNlbGxFZGl0IiwiaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSIsIkZpbHRlckNvbnRleHQiLCJpc1JlbW90ZUZpbHRlcmluZyIsImhhbmRsZVJlbW90ZUZpbHRlckNoYW5nZSIsIlBhZ2luYXRpb25Db250ZXh0IiwiaXNSZW1vdGVQYWdpbmF0aW9uIiwiaGFuZGxlUmVtb3RlUGFnZUNoYW5nZSIsIlNlYXJjaENvbnRleHQiLCJpc1JlbW90ZVNlYXJjaCIsImhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSIsInJvb3RQcm9wcyIsImNlbGxFZGl0UHJvcHMiLCJmaWx0ZXJQcm9wcyIsInNlYXJjaFByb3BzIiwic29ydFByb3BzIiwicGFnaW5hdGlvblByb3BzIiwiZXhwYW5kUHJvcHMiLCJzZWxlY3Rpb25Qcm9wcyIsImJhc2UiLCJiYXNlUHJvcHMiLCJwYWdpbmF0aW9uQ29udGV4dCIsIm4iLCJzb3J0Q29udGV4dCIsImZpbHRlckNvbnRleHQiLCJyZW5kZXJCYXNlIiwicmVuZGVyV2l0aFNlbGVjdGlvbkN0eCIsInJlbmRlcldpdGhSb3dFeHBhbmRDdHgiLCJyZW5kZXJXaXRoUGFnaW5hdGlvbkN0eCIsInJlbmRlcldpdGhTb3J0Q3R4IiwicmVuZGVyV2l0aFNlYXJjaEN0eCIsInJlbmRlcldpdGhGaWx0ZXJDdHgiLCJyZW5kZXJXaXRoQ2VsbEVkaXRDdHgiLCJEYXRhUHJvdmlkZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiUHJvdmlkZXIiLCJDb25zdW1lciIsImRhdGFPcGVyYXRvciIsImhhbmRsZVNvcnRDaGFuZ2UiLCJTb3J0UHJvdmlkZXIiLCJzb3J0Q29sdW1uIiwic29ydENvbHVtbnMiLCJoYW5kbGVTb3J0IiwiQ29tcG9uZW50IiwibmV4dE9yZGVyIiwiU2VsZWN0aW9uUHJvdmlkZXIiLCJoYW5kbGVSb3dTZWxlY3QiLCJjdXJyU2VsZWN0ZWQiLCJoYW5kbGVBbGxSb3dzU2VsZWN0IiwiY29uY2F0IiwicyIsImdldFNlbGVjdGVkIiwiUm93RXhwYW5kUHJvdmlkZXIiLCJoYW5kbGVSb3dFeHBhbmQiLCJjdXJyRXhwYW5kZWQiLCJoYW5kbGVBbGxSb3dFeHBhbmQiLCJleHBhbmRBbGwiLCJleHBhbmRhYmxlS2V5cyIsImdldEV4cGFuZGVkUm93cyIsImdldE5ld2VzdFN0YXRlIiwicGFnZSIsInNpemVQZXJQYWdlIiwiZmlsdGVycyIsImN1cnJGaWx0ZXJzIiwiY3VyclBhZ2UiLCJjdXJyU2l6ZVBlclBhZ2UiLCJuZXdTdGF0ZSIsInBhZ2VTdGFydEluZGV4Iiwicm93SWQiLCJuZXdWYWx1ZSIsInJvd3MiLCJzZWxlY3Rpb24iLCJleHBhbmQiLCJtdXRhdGUiLCJlZGl0Q2VsbCIsImNvbXBhcmF0b3IiLCJsb2NhbGVDb21wYXJlIiwiX2RhdGEiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJjdXJyZW50U29ydENvbHVtbiIsImRlZmF1bHRPcmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFD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Q0E7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMEJBQTBCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGVBQWU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtB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LENBQWxELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJc0YsY0FBYyxnQkFBTWhILFNBQXhCLEVBQW1DO0FBQ2pDZ0IsaUJBQVM2VyxXQUFXRyxNQUFYLEVBQW1CQyxNQUFuQixDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xqWCxpQkFBUzZXLFdBQVdJLE1BQVgsRUFBbUJELE1BQW5CLENBQVQ7QUFDRDtBQUNGO0FBQ0QsV0FBT2hYLE1BQVA7QUFDRCxHQWpCRDtBQWtCQSxTQUFPK1csS0FBUDtBQUNELENBckJNOztBQXVCQSxJQUFNakMsZ0NBQVksU0FBWkEsU0FBWSxDQUN2Qm9DLGlCQUR1QixTQUlwQjtBQUFBLE1BRkRsUixTQUVDLFNBRkRBLFNBRUM7QUFBQSxNQUZVME8sVUFFVixTQUZVQSxVQUVWO0FBQUEsTUFESHlDLFlBQ0csdUVBRFksZ0JBQU1uWSxTQUNsQjs7QUFDSCxNQUFJLENBQUMwVixVQUFELElBQWV3QyxrQkFBa0J0TyxTQUFsQixLQUFnQzhMLFdBQVc5TCxTQUE5RCxFQUF5RSxPQUFPdU8sWUFBUDtBQUN6RSxTQUFPblIsY0FBYyxnQkFBTWhILFNBQXBCLEdBQWdDLGdCQUFNRCxRQUF0QyxHQUFpRCxnQkFBTUMsU0FBOUQ7QUFDRCxDQVBNLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NGM5NzE4ZTgzYzdlZDA1ZDVkMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTT1JUX0FTQzogJ2FzYycsXG4gIFNPUlRfREVTQzogJ2Rlc2MnLFxuICBST1dfU0VMRUNUX1NJTkdMRTogJ3JhZGlvJyxcbiAgUk9XX1NFTEVDVF9NVUxUSVBMRTogJ2NoZWNrYm94JyxcbiAgUk9XX1NFTEVDVF9ESVNBQkxFRDogJ1JPV19TRUxFQ1RfRElTQUJMRUQnLFxuICBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDogJ2NoZWNrZWQnLFxuICBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTogJ2luZGV0ZXJtaW5hdGUnLFxuICBDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEOiAndW5jaGVja2VkJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwiLyogZXNsaW50IG5vLWVtcHR5OiAwICovXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbi8qIGVzbGludCBwcmVmZXItcmVzdC1wYXJhbXM6IDAgKi9cbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5mdW5jdGlvbiBzcGxpdE5lc3RlZChzdHIpIHtcbiAgcmV0dXJuIFtzdHJdXG4gICAgLmpvaW4oJy4nKVxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxuICAgIC5yZXBsYWNlKC9cXF0vZywgJycpXG4gICAgLnNwbGl0KCcuJyk7XG59XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIGZpZWxkKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBwYXRoQXJyYXkucmVkdWNlKChjdXJyLCBwYXRoKSA9PiBjdXJyW3BhdGhdLCB0YXJnZXQpO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBmaWVsZCwgdmFsdWUsIHNhZmUgPSBmYWxzZSkge1xuICBjb25zdCBwYXRoQXJyYXkgPSBzcGxpdE5lc3RlZChmaWVsZCk7XG4gIGxldCBsZXZlbCA9IDA7XG4gIHBhdGhBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICBsZXZlbCArPSAxO1xuICAgIGlmICh0eXBlb2YgYVtiXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICghc2FmZSkgdGhyb3cgbmV3IEVycm9yKGAke2F9LiR7Yn0gaXMgdW5kZWZpbmVkYCk7XG4gICAgICBhW2JdID0ge307XG4gICAgICByZXR1cm4gYVtiXTtcbiAgICB9XG5cbiAgICBpZiAobGV2ZWwgPT09IHBhdGhBcnJheS5sZW5ndGgpIHtcbiAgICAgIGFbYl0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFbYl07XG4gIH0sIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBzbGVlcChmbiwgbXMpIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gZm4oKSwgbXMpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgfHwgMCk7XG5cbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihfLCB7IGdldCwgc2V0LCBpc0RlZmluZWQsIGlzRW1wdHlPYmplY3QsIHNsZWVwLCBkZWJvdW5jZSB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3V0aWxzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEJvb3RzdHJhcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgYm9vdHN0cmFwNDogZmFsc2Vcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvYm9vdHN0cmFwLmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmV4cG9ydCBjb25zdCBtYXRjaFJvdyA9IChrZXlGaWVsZCwgaWQpID0+IHJvdyA9PiByb3dba2V5RmllbGRdID09PSBpZDtcblxuZXhwb3J0IGNvbnN0IGdldFJvd0J5Um93SWQgPSAoZGF0YSwga2V5RmllbGQsIGlkKSA9PiBkYXRhLmZpbmQobWF0Y2hSb3coa2V5RmllbGQsIGlkKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Um93QnlSb3dJZCB9IGZyb20gJy4vcm93cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3Rpb25TdW1tYXJ5ID0gKFxuICBkYXRhLFxuICBrZXlGaWVsZCxcbiAgc2VsZWN0ZWQgPSBbXVxuKSA9PiB7XG4gIGxldCBhbGxSb3dzU2VsZWN0ZWQgPSB0cnVlO1xuICBsZXQgYWxsUm93c05vdFNlbGVjdGVkID0gdHJ1ZTtcblxuICBjb25zdCByb3dLZXlzID0gZGF0YS5tYXAoZCA9PiBkW2tleUZpZWxkXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93S2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGN1cnIgPSByb3dLZXlzW2ldO1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0ZWQuZmluZCh4ID0+IHggPT09IGN1cnIpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICBhbGxSb3dzTm90U2VsZWN0ZWRcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RhYmxlS2V5cyA9IChkYXRhLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhc2tpcHMuaW5jbHVkZXMoXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1blNlbGVjdGFibGVLZXlzID0gKHNlbGVjdGVkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGVkLmZpbHRlcih4ID0+IHNraXBzLmluY2x1ZGVzKHgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFJvd3MgPSAoZGF0YSwga2V5RmllbGQsIHNlbGVjdGVkKSA9PlxuICBzZWxlY3RlZC5tYXAoayA9PiBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCBrKSkuZmlsdGVyKHggPT4gISF4KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc2VsZWN0aW9uLmpzIiwiaW1wb3J0IEJvb3RzdHJhcFRhYmxlIGZyb20gJy4vc3JjL2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgd2l0aENvbnRleHQgZnJvbSAnLi9zcmMvY29udGV4dHMnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dChCb290c3RyYXBUYWJsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL2luZGV4LmpzIiwiLyogZXNsaW50IGFycm93LWJvZHktc3R5bGU6IDAgKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IENhcHRpb24gZnJvbSAnLi9jYXB0aW9uJztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgUHJvcHNCYXNlUmVzb2x2ZXIgZnJvbSAnLi9wcm9wcy1yZXNvbHZlcic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgeyBnZXRTZWxlY3Rpb25TdW1tYXJ5IH0gZnJvbSAnLi9zdG9yZS9zZWxlY3Rpb24nO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFByb3BzQmFzZVJlc29sdmVyKENvbXBvbmVudCkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcbiAgICBpZiAocHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKSB7XG4gICAgICBjb25zdCBnZXREYXRhID0gKCkgPT4gdGhpcy5nZXREYXRhKCk7XG4gICAgICBwcm9wcy5yZWdpc3RlckV4cG9zZWRBUEkoZ2V0RGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRXhwb3NlZCBBUElzXG4gIGdldERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIG92ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIGNvbnN0IExvYWRpbmdPdmVybGF5ID0gb3ZlcmxheShsb2FkaW5nKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkaW5nT3ZlcmxheT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyVGFibGUoKSB9XG4gICAgICAgIDwvTG9hZGluZ092ZXJsYXk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWJsZSgpO1xuICB9XG5cbiAgcmVuZGVyVGFibGUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHN0cmlwZWQsXG4gICAgICBob3ZlcixcbiAgICAgIGJvcmRlcmVkLFxuICAgICAgY29uZGVuc2VkLFxuICAgICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICAgIGNhcHRpb24sXG4gICAgICByb3dTdHlsZSxcbiAgICAgIHJvd0NsYXNzZXMsXG4gICAgICB3cmFwcGVyQ2xhc3NlcyxcbiAgICAgIHJvd0V2ZW50cyxcbiAgICAgIHNlbGVjdGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiBjb25kZW5zZWRcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGNvbnN0IGNlbGxTZWxlY3Rpb25JbmZvID0gdGhpcy5yZXNvbHZlU2VsZWN0Um93UHJvcHMoe1xuICAgICAgb25Sb3dTZWxlY3Q6IHRoaXMucHJvcHMub25Sb3dTZWxlY3RcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgYWxsUm93c1NlbGVjdGVkLCBhbGxSb3dzTm90U2VsZWN0ZWQgfSA9IGdldFNlbGVjdGlvblN1bW1hcnkoZGF0YSwga2V5RmllbGQsIHNlbGVjdGVkKTtcbiAgICBjb25zdCBoZWFkZXJDZWxsU2VsZWN0aW9uSW5mbyA9IHRoaXMucmVzb2x2ZVNlbGVjdFJvd1Byb3BzRm9ySGVhZGVyKHtcbiAgICAgIG9uQWxsUm93c1NlbGVjdDogdGhpcy5wcm9wcy5vbkFsbFJvd3NTZWxlY3QsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFibGVDYXB0aW9uID0gKGNhcHRpb24gJiYgPENhcHRpb24+eyBjYXB0aW9uIH08L0NhcHRpb24+KTtcbiAgICBjb25zdCBleHBhbmRSb3cgPSB0aGlzLnJlc29sdmVFeHBhbmRSb3dQcm9wcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFibGVXcmFwcGVyQ2xhc3MgfT5cbiAgICAgICAgPHRhYmxlIGlkPXsgaWQgfSBjbGFzc05hbWU9eyB0YWJsZUNsYXNzIH0+XG4gICAgICAgICAgeyB0YWJsZUNhcHRpb24gfVxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuaGVhZGVyQ2xhc3NlcyB9XG4gICAgICAgICAgICBzb3J0RmllbGQ9eyB0aGlzLnByb3BzLnNvcnRGaWVsZCB9XG4gICAgICAgICAgICBzb3J0T3JkZXI9eyB0aGlzLnByb3BzLnNvcnRPcmRlciB9XG4gICAgICAgICAgICBvblNvcnQ9eyB0aGlzLnByb3BzLm9uU29ydCB9XG4gICAgICAgICAgICBvbkZpbHRlcj17IHRoaXMucHJvcHMub25GaWx0ZXIgfVxuICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBoZWFkZXJDZWxsU2VsZWN0aW9uSW5mbyB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgaXNFbXB0eT17IHRoaXMuaXNFbXB0eSgpIH1cbiAgICAgICAgICAgIHZpc2libGVDb2x1bW5TaXplPXsgdGhpcy52aXNpYmxlQ29sdW1uU2l6ZSgpIH1cbiAgICAgICAgICAgIG5vRGF0YUluZGljYXRpb249eyBub0RhdGFJbmRpY2F0aW9uIH1cbiAgICAgICAgICAgIGNlbGxFZGl0PXsgdGhpcy5wcm9wcy5jZWxsRWRpdCB8fCB7fSB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBjZWxsU2VsZWN0aW9uSW5mbyB9XG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgcm93U3R5bGU9eyByb3dTdHlsZSB9XG4gICAgICAgICAgICByb3dDbGFzc2VzPXsgcm93Q2xhc3NlcyB9XG4gICAgICAgICAgICByb3dFdmVudHM9eyByb3dFdmVudHMgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvb3RzdHJhcFRhYmxlLnByb3BUeXBlcyA9IHtcbiAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVtb3RlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbFxuICB9KV0pLFxuICBub0RhdGFJbmRpY2F0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29uZGVuc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FwdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKSxcbiAgcGFnaW5hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjZWxsRWRpdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUsIENvbnN0LlJPV19TRUxFQ1RfTVVMVElQTEVdKS5pc1JlcXVpcmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FZGl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgbm9uU2VsZWN0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGlkZVNlbGVjdENvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgb25Sb3dTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkFsbFJvd3NTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25FeHBhbmRBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vbkV4cGFuZGFibGU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzaG93RXhwYW5kQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRDb2x1bW5SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jXG4gIH0pLFxuICBvblJvd0V4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxsUm93RXhwYW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNBbnlFeHBhbmRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93U3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gIHJvd0V2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgcm93Q2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgaGVhZGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkYXRhRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSkuaXNSZXF1aXJlZFxuICB9KSksXG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKSxcbiAgb3ZlcmxheTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFibGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvLyBJbmplY3QgZnJvbSB0b29sa2l0XG4gIHNlYXJjaDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaENvbnRleHQ6IFByb3BUeXBlcy5mdW5jXG4gIH0pLFxuICBzZXREZXBlbmRlbmN5TW9kdWxlczogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkJvb3RzdHJhcFRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9vdHN0cmFwNDogZmFsc2UsXG4gIHJlbW90ZTogZmFsc2UsXG4gIHN0cmlwZWQ6IGZhbHNlLFxuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXI6IGZhbHNlLFxuICBjb25kZW5zZWQ6IGZhbHNlLFxuICBub0RhdGFJbmRpY2F0aW9uOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb290c3RyYXBUYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuaW1wb3J0IEhlYWRlckNlbGwgZnJvbSAnLi9oZWFkZXItY2VsbCc7XG5pbXBvcnQgU2VsZWN0aW9uSGVhZGVyQ2VsbCBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsJztcbmltcG9ydCBFeHBhbmRIZWFkZXJDZWxsIGZyb20gJy4vcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBST1dfU0VMRUNUX0RJU0FCTEVEIH0gPSBDb25zdDtcblxuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbHVtbnMsXG4gICAgb25Tb3J0LFxuICAgIG9uRmlsdGVyLFxuICAgIHNvcnRGaWVsZCxcbiAgICBzb3J0T3JkZXIsXG4gICAgc2VsZWN0Um93LFxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgZXhwYW5kUm93LFxuICAgIGJvb3RzdHJhcDRcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHRoZWFkPlxuICAgICAgPHRyIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PlxuICAgICAgICB7XG4gICAgICAgICAgKGV4cGFuZFJvdyAmJiBleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbilcbiAgICAgICAgICAgID8gPEV4cGFuZEhlYWRlckNlbGxcbiAgICAgICAgICAgICAgb25BbGxSb3dFeHBhbmQ9eyBleHBhbmRSb3cub25BbGxSb3dFeHBhbmQgfVxuICAgICAgICAgICAgICBhbnlFeHBhbmRzPXsgZXhwYW5kUm93LmlzQW55RXhwYW5kcyB9XG4gICAgICAgICAgICAgIHJlbmRlcmVyPXsgZXhwYW5kUm93LmV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyIH1cbiAgICAgICAgICAgIC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IFJPV19TRUxFQ1RfRElTQUJMRUQgJiYgIXNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKVxuICAgICAgICAgICAgPyA8U2VsZWN0aW9uSGVhZGVyQ2VsbCB7IC4uLnNlbGVjdFJvdyB9IC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbi5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VyclNvcnQgPSBjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0RmllbGQ7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTGFzdFNvcnRpbmcgPSBjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0RmllbGQ7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbFxuICAgICAgICAgICAgICAgICAgaW5kZXg9eyBpIH1cbiAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDQ9eyBib290c3RyYXA0IH1cbiAgICAgICAgICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgIG9uU29ydD17IG9uU29ydCB9XG4gICAgICAgICAgICAgICAgICBzb3J0aW5nPXsgY3VyclNvcnQgfVxuICAgICAgICAgICAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgICAgICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgb25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICAgICAgICBzb3J0T3JkZXI9eyBzb3J0T3JkZXIgfVxuICAgICAgICAgICAgICAgICAgaXNMYXN0U29ydGluZz17IGlzTGFzdFNvcnRpbmcgfVxuICAgICAgICAgICAgICAgIC8+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBzb3J0RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvcnRPcmRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIGJvb3RzdHJhcDQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFNvcnRTeW1ib2wgZnJvbSAnLi9zb3J0L3N5bWJvbCc7XG5pbXBvcnQgU29ydENhcmV0IGZyb20gJy4vc29ydC9jYXJldCc7XG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuXG5jb25zdCBIZWFkZXJDZWxsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW4sXG4gICAgaW5kZXgsXG4gICAgb25Tb3J0LFxuICAgIHNvcnRpbmcsXG4gICAgc29ydE9yZGVyLFxuICAgIGlzTGFzdFNvcnRpbmcsXG4gICAgb25GaWx0ZXIsXG4gICAgb25FeHRlcm5hbEZpbHRlclxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHRleHQsXG4gICAgc29ydCxcbiAgICBmaWx0ZXIsXG4gICAgZmlsdGVyUmVuZGVyZXIsXG4gICAgaGVhZGVyVGl0bGUsXG4gICAgaGVhZGVyQWxpZ24sXG4gICAgaGVhZGVyRm9ybWF0dGVyLFxuICAgIGhlYWRlckV2ZW50cyxcbiAgICBoZWFkZXJDbGFzc2VzLFxuICAgIGhlYWRlclN0eWxlLFxuICAgIGhlYWRlckF0dHJzLFxuICAgIGhlYWRlclNvcnRpbmdDbGFzc2VzLFxuICAgIGhlYWRlclNvcnRpbmdTdHlsZVxuICB9ID0gY29sdW1uO1xuXG4gIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAuLi5fLmlzRnVuY3Rpb24oaGVhZGVyQXR0cnMpID8gaGVhZGVyQXR0cnMoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJBdHRycyxcbiAgICAuLi5oZWFkZXJFdmVudHNcbiAgfTtcblxuICBsZXQgc29ydFN5bWJvbDtcbiAgbGV0IGZpbHRlckVsbTtcbiAgbGV0IGNlbGxTdHlsZSA9IHt9O1xuICBsZXQgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQ2xhc3NlcykgPyBoZWFkZXJDbGFzc2VzKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyQ2xhc3NlcztcblxuICBpZiAoaGVhZGVyU3R5bGUpIHtcbiAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyU3R5bGUpID8gaGVhZGVyU3R5bGUoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJTdHlsZTtcbiAgfVxuXG4gIGlmIChoZWFkZXJUaXRsZSkge1xuICAgIGNlbGxBdHRycy50aXRsZSA9IF8uaXNGdW5jdGlvbihoZWFkZXJUaXRsZSkgPyBoZWFkZXJUaXRsZShjb2x1bW4sIGluZGV4KSA6IHRleHQ7XG4gIH1cblxuICBpZiAoaGVhZGVyQWxpZ24pIHtcbiAgICBjZWxsU3R5bGUudGV4dEFsaWduID0gXy5pc0Z1bmN0aW9uKGhlYWRlckFsaWduKSA/IGhlYWRlckFsaWduKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyQWxpZ247XG4gIH1cblxuICBpZiAoc29ydCkge1xuICAgIGNvbnN0IGN1c3RvbUNsaWNrID0gY2VsbEF0dHJzLm9uQ2xpY2s7XG4gICAgY2VsbEF0dHJzLm9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgb25Tb3J0KGNvbHVtbik7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbUNsaWNrKSkgY3VzdG9tQ2xpY2soZSk7XG4gICAgfTtcbiAgICBjZWxsQXR0cnMuY2xhc3NOYW1lID0gY3MoY2VsbEF0dHJzLmNsYXNzTmFtZSwgJ3NvcnRhYmxlJyk7XG5cbiAgICBpZiAoc29ydGluZykge1xuICAgICAgc29ydFN5bWJvbCA9IDxTb3J0Q2FyZXQgb3JkZXI9eyBzb3J0T3JkZXIgfSAvPjtcblxuICAgICAgLy8gYXBwZW5kIGN1c3RvbWl6ZWQgY2xhc3NlcyBvciBzdHlsZSBpZiB0YWJsZSB3YXMgc29ydGluZyBiYXNlZCBvbiB0aGUgY3VycmVudCBjb2x1bW4uXG4gICAgICBjZWxsQ2xhc3NlcyA9IGNzKFxuICAgICAgICBjZWxsQ2xhc3NlcyxcbiAgICAgICAgXy5pc0Z1bmN0aW9uKGhlYWRlclNvcnRpbmdDbGFzc2VzKVxuICAgICAgICAgID8gaGVhZGVyU29ydGluZ0NsYXNzZXMoY29sdW1uLCBzb3J0T3JkZXIsIGlzTGFzdFNvcnRpbmcsIGluZGV4KVxuICAgICAgICAgIDogaGVhZGVyU29ydGluZ0NsYXNzZXNcbiAgICAgICk7XG5cbiAgICAgIGNlbGxTdHlsZSA9IHtcbiAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAuLi5fLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ1N0eWxlKVxuICAgICAgICAgID8gaGVhZGVyU29ydGluZ1N0eWxlKGNvbHVtbiwgc29ydE9yZGVyLCBpc0xhc3RTb3J0aW5nLCBpbmRleClcbiAgICAgICAgICA6IGhlYWRlclNvcnRpbmdTdHlsZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydFN5bWJvbCA9IDxTb3J0U3ltYm9sIC8+O1xuICAgIH1cbiAgfVxuXG4gIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsIGNlbGxDbGFzc2VzKTtcbiAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gIGlmIChmaWx0ZXJSZW5kZXJlcikge1xuICAgIGNvbnN0IG9uQ3VzdG9tRmlsdGVyID0gb25FeHRlcm5hbEZpbHRlcihjb2x1bW4sIGZpbHRlci5wcm9wcy50eXBlKTtcbiAgICBmaWx0ZXJFbG0gPSBmaWx0ZXJSZW5kZXJlcihvbkN1c3RvbUZpbHRlciwgY29sdW1uKTtcbiAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICBmaWx0ZXJFbG0gPSA8ZmlsdGVyLkZpbHRlciB7IC4uLmZpbHRlci5wcm9wcyB9IG9uRmlsdGVyPXsgb25GaWx0ZXIgfSBjb2x1bW49eyBjb2x1bW4gfSAvPjtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gaGVhZGVyRm9ybWF0dGVyID9cbiAgICBoZWFkZXJGb3JtYXR0ZXIoY29sdW1uLCBpbmRleCwgeyBzb3J0RWxlbWVudDogc29ydFN5bWJvbCwgZmlsdGVyRWxlbWVudDogZmlsdGVyRWxtIH0pIDpcbiAgICB0ZXh0O1xuXG4gIGlmIChoZWFkZXJGb3JtYXR0ZXIpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCBjZWxsQXR0cnMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIGNlbGxBdHRycywgY2hpbGRyZW4sIHNvcnRTeW1ib2wsIGZpbHRlckVsbSk7XG59O1xuXG5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpc0R1bW15RmllbGQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdEV4dHJhRGF0YTogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXJDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyVGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJFdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhlYWRlckFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlckF0dHJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGF0dHJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHNvcnQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNvcnRGdW5jOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBlZGl0YWJsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdENlbGxTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0Q2VsbENsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZWRpdG9yQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbHRlclZhbHVlOiBQcm9wVHlwZXMuZnVuY1xuICB9KS5pc1JlcXVpcmVkLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKSxcbiAgaXNMYXN0U29ydGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHRlcm5hbEZpbHRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9oZWFkZXItY2VsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcblxuY29uc3QgU29ydFN5bWJvbCA9ICgpID0+IChcbiAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAge1xuICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoYm9vdHN0cmFwNCA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXItNFwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3B1cFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSlcbiAgICB9XG4gIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L3N5bWJvbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5cblxuY29uc3QgU29ydENhcmV0ID0gKHsgb3JkZXIgfSkgPT4ge1xuICBjb25zdCBvcmRlckNsYXNzID0gY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1zb3J0LW9yZGVyJywge1xuICAgIGRyb3B1cDogb3JkZXIgPT09IENvbnN0LlNPUlRfQVNDXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7XG4gICAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4gKGJvb3RzdHJhcDQgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgYGNhcmV0LTQtJHtvcmRlcn1gIH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBvcmRlckNsYXNzIH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn07XG5cblNvcnRDYXJldC5wcm9wVHlwZXMgPSB7XG4gIG9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfQVNDLCBDb25zdC5TT1JUX0RFU0NdKS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2FyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zb3J0L2NhcmV0LmpzIiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS45LjFcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTggSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbiAgLy8gb24gdGhlIHNlcnZlciwgb3IgYHRoaXNgIGluIHNvbWUgdmlydHVhbCBtYWNoaW5lcy4gV2UgdXNlIGBzZWxmYFxuICAvLyBpbnN0ZWFkIG9mIGB3aW5kb3dgIGZvciBgV2ViV29ya2VyYCBzdXBwb3J0LlxuICB2YXIgcm9vdCA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHxcbiAgICAgICAgICAgIHRoaXMgfHxcbiAgICAgICAgICAgIHt9O1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIFN5bWJvbFByb3RvID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2wucHJvdG90eXBlIDogbnVsbDtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2gsXG4gICAgICBzbGljZSA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgICB0b1N0cmluZyA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgICAgaGFzT3duUHJvcGVydHkgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhciBuYXRpdmVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIG5hdGl2ZUtleXMgPSBPYmplY3Qua2V5cyxcbiAgICAgIG5hdGl2ZUNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbiAgLy8gTmFrZWQgZnVuY3Rpb24gcmVmZXJlbmNlIGZvciBzdXJyb2dhdGUtcHJvdG90eXBlLXN3YXBwaW5nLlxuICB2YXIgQ3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZWlyIG9sZCBtb2R1bGUgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QuXG4gIC8vIChgbm9kZVR5cGVgIGlzIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgYG1vZHVsZWBcbiAgLy8gYW5kIGBleHBvcnRzYCBhcmUgbm90IEhUTUwgZWxlbWVudHMuKVxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgIWV4cG9ydHMubm9kZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjkuMSc7XG5cbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVmZmljaWVudCAoZm9yIGN1cnJlbnQgZW5naW5lcykgdmVyc2lvblxuICAvLyBvZiB0aGUgcGFzc2VkLWluIGNhbGxiYWNrLCB0byBiZSByZXBlYXRlZGx5IGFwcGxpZWQgaW4gb3RoZXIgVW5kZXJzY29yZVxuICAvLyBmdW5jdGlvbnMuXG4gIHZhciBvcHRpbWl6ZUNiID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSByZXR1cm4gZnVuYztcbiAgICBzd2l0Y2ggKGFyZ0NvdW50ID09IG51bGwgPyAzIDogYXJnQ291bnQpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIC8vIFRoZSAyLWFyZ3VtZW50IGNhc2UgaXMgb21pdHRlZCBiZWNhdXNlIHdl4oCZcmUgbm90IHVzaW5nIGl0LlxuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGJ1aWx0aW5JdGVyYXRlZTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBlYWNoXG4gIC8vIGVsZW1lbnQgaW4gYSBjb2xsZWN0aW9uLCByZXR1cm5pbmcgdGhlIGRlc2lyZWQgcmVzdWx0IOKAlCBlaXRoZXIgYGlkZW50aXR5YCxcbiAgLy8gYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChfLml0ZXJhdGVlICE9PSBidWlsdGluSXRlcmF0ZWUpIHJldHVybiBfLml0ZXJhdGVlKHZhbHVlLCBjb250ZXh0KTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIF8uaWRlbnRpdHk7XG4gICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpKSByZXR1cm4gXy5tYXRjaGVyKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gRXh0ZXJuYWwgd3JhcHBlciBmb3Igb3VyIGNhbGxiYWNrIGdlbmVyYXRvci4gVXNlcnMgbWF5IGN1c3RvbWl6ZVxuICAvLyBgXy5pdGVyYXRlZWAgaWYgdGhleSB3YW50IGFkZGl0aW9uYWwgcHJlZGljYXRlL2l0ZXJhdGVlIHNob3J0aGFuZCBzdHlsZXMuXG4gIC8vIFRoaXMgYWJzdHJhY3Rpb24gaGlkZXMgdGhlIGludGVybmFsLW9ubHkgYXJnQ291bnQgYXJndW1lbnQuXG4gIF8uaXRlcmF0ZWUgPSBidWlsdGluSXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBjYih2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIFNvbWUgZnVuY3Rpb25zIHRha2UgYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCBvciBhIGZldyBleHBlY3RlZFxuICAvLyBhcmd1bWVudHMgYXQgdGhlIGJlZ2lubmluZyBhbmQgdGhlbiBhIHZhcmlhYmxlIG51bWJlciBvZiB2YWx1ZXMgdG8gb3BlcmF0ZVxuICAvLyBvbi4gVGhpcyBoZWxwZXIgYWNjdW11bGF0ZXMgYWxsIHJlbWFpbmluZyBhcmd1bWVudHMgcGFzdCB0aGUgZnVuY3Rpb27igJlzXG4gIC8vIGFyZ3VtZW50IGxlbmd0aCAob3IgYW4gZXhwbGljaXQgYHN0YXJ0SW5kZXhgKSwgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXNcbiAgLy8gdGhlIGxhc3QgYXJndW1lbnQuIFNpbWlsYXIgdG8gRVM24oCZcyBcInJlc3QgcGFyYW1ldGVyXCIuXG4gIHZhciByZXN0QXJndW1lbnRzID0gZnVuY3Rpb24oZnVuYywgc3RhcnRJbmRleCkge1xuICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ID09IG51bGwgPyBmdW5jLmxlbmd0aCAtIDEgOiArc3RhcnRJbmRleDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aCAtIHN0YXJ0SW5kZXgsIDApLFxuICAgICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICByZXN0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCArIHN0YXJ0SW5kZXhdO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzdGFydEluZGV4KSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgcmVzdCk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgcmVzdCk7XG4gICAgICB9XG4gICAgICB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHN0YXJ0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgYXJnc1tzdGFydEluZGV4XSA9IHJlc3Q7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGFub3RoZXIuXG4gIHZhciBiYXNlQ3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiB7fTtcbiAgICBpZiAobmF0aXZlQ3JlYXRlKSByZXR1cm4gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yO1xuICAgIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBzaGFsbG93UHJvcGVydHkgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpba2V5XTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYXMgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHBhdGgpO1xuICB9XG5cbiAgdmFyIGRlZXBHZXQgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoID8gb2JqIDogdm9pZCAwO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmb3IgY29sbGVjdGlvbiBtZXRob2RzIHRvIGRldGVybWluZSB3aGV0aGVyIGEgY29sbGVjdGlvblxuICAvLyBzaG91bGQgYmUgaXRlcmF0ZWQgYXMgYW4gYXJyYXkgb3IgYXMgYW4gb2JqZWN0LlxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHNoYWxsb3dQcm9wZXJ0eSgnbGVuZ3RoJyk7XG4gIHZhciBpc0FycmF5TGlrZSA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiB0eXBlb2YgbGVuZ3RoID09ICdudW1iZXInICYmIGxlbmd0aCA+PSAwICYmIGxlbmd0aCA8PSBNQVhfQVJSQVlfSU5ERVg7XG4gIH07XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuICAvLyBzcGFyc2UgYXJyYXktbGlrZXMgYXMgaWYgdGhleSB3ZXJlIGRlbnNlLlxuICBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuICB2YXIgY3JlYXRlUmVkdWNlID0gZnVuY3Rpb24oZGlyKSB7XG4gICAgLy8gV3JhcCBjb2RlIHRoYXQgcmVhc3NpZ25zIGFyZ3VtZW50IHZhcmlhYmxlcyBpbiBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRoYW5cbiAgICAvLyB0aGUgb25lIHRoYXQgYWNjZXNzZXMgYGFyZ3VtZW50cy5sZW5ndGhgIHRvIGF2b2lkIGEgcGVyZiBoaXQuICgjMTk5MSlcbiAgICB2YXIgcmVkdWNlciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGluaXRpYWwpIHtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGRpcjtcbiAgICAgIH1cbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdGVlKG1lbW8sIG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID49IDM7XG4gICAgICByZXR1cm4gcmVkdWNlcihvYmosIG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDQpLCBtZW1vLCBpbml0aWFsKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBjcmVhdGVSZWR1Y2UoMSk7XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gY3JlYXRlUmVkdWNlKC0xKTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIga2V5RmluZGVyID0gaXNBcnJheUxpa2Uob2JqKSA/IF8uZmluZEluZGV4IDogXy5maW5kS2V5O1xuICAgIHZhciBrZXkgPSBrZXlGaW5kZXIob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIGlmIChrZXkgIT09IHZvaWQgMCAmJiBrZXkgIT09IC0xKSByZXR1cm4gb2JqW2tleV07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm5lZ2F0ZShjYihwcmVkaWNhdGUpKSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKCFwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiBpdGVtICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVzYCBhbmQgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlcyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgaXRlbSwgZnJvbUluZGV4LCBndWFyZCkge1xuICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICBpZiAodHlwZW9mIGZyb21JbmRleCAhPSAnbnVtYmVyJyB8fCBndWFyZCkgZnJvbUluZGV4ID0gMDtcbiAgICByZXR1cm4gXy5pbmRleE9mKG9iaiwgaXRlbSwgZnJvbUluZGV4KSA+PSAwO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBwYXRoLCBhcmdzKSB7XG4gICAgdmFyIGNvbnRleHRQYXRoLCBmdW5jO1xuICAgIGlmIChfLmlzRnVuY3Rpb24ocGF0aCkpIHtcbiAgICAgIGZ1bmMgPSBwYXRoO1xuICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHBhdGgpKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgICAgcGF0aCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGZ1bmM7XG4gICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICBpZiAoY29udGV4dFBhdGggJiYgY29udGV4dFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGV4dCA9IGRlZXBHZXQoY29udGV4dCwgY29udGV4dFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgICAgIG1ldGhvZCA9IGNvbnRleHRbcGF0aF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWV0aG9kID09IG51bGwgPyBtZXRob2QgOiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIF8ucHJvcGVydHkoa2V5KSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmluZChvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodiwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IC1JbmZpbml0eSAmJiByZXN1bHQgPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsIHx8IHR5cGVvZiBpdGVyYXRlZSA9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqWzBdICE9ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkIDwgbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSBJbmZpbml0eSAmJiByZXN1bHQgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24uXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLnNhbXBsZShvYmosIEluZmluaXR5KTtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbiB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkge1xuICAgICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICB2YXIgc2FtcGxlID0gaXNBcnJheUxpa2Uob2JqKSA/IF8uY2xvbmUob2JqKSA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChzYW1wbGUpO1xuICAgIG4gPSBNYXRoLm1heChNYXRoLm1pbihuLCBsZW5ndGgpLCAwKTtcbiAgICB2YXIgbGFzdCA9IGxlbmd0aCAtIDE7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG47IGluZGV4KyspIHtcbiAgICAgIHZhciByYW5kID0gXy5yYW5kb20oaW5kZXgsIGxhc3QpO1xuICAgICAgdmFyIHRlbXAgPSBzYW1wbGVbaW5kZXhdO1xuICAgICAgc2FtcGxlW2luZGV4XSA9IHNhbXBsZVtyYW5kXTtcbiAgICAgIHNhbXBsZVtyYW5kXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiBzYW1wbGUuc2xpY2UoMCwgbik7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGtleSwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgrKyxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvciwgcGFydGl0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBwYXJ0aXRpb24gPyBbW10sIFtdXSA6IHt9O1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCB2YWx1ZSwga2V5KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTsgZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICB2YXIgcmVTdHJTeW1ib2wgPSAvW15cXHVkODAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGZmZl0vZztcbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKF8uaXNTdHJpbmcob2JqKSkge1xuICAgICAgLy8gS2VlcCBzdXJyb2dhdGUgcGFpciBjaGFyYWN0ZXJzIHRvZ2V0aGVyXG4gICAgICByZXR1cm4gb2JqLm1hdGNoKHJlU3RyU3ltYm9sKTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gaXNBcnJheUxpa2Uob2JqKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gU3BsaXQgYSBjb2xsZWN0aW9uIGludG8gdHdvIGFycmF5czogb25lIHdob3NlIGVsZW1lbnRzIGFsbCBzYXRpc2Z5IHRoZSBnaXZlblxuICAvLyBwcmVkaWNhdGUsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIF8ucGFydGl0aW9uID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwgcGFzcykge1xuICAgIHJlc3VsdFtwYXNzID8gMCA6IDFdLnB1c2godmFsdWUpO1xuICB9LCB0cnVlKTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwgfHwgYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIG4gPT0gbnVsbCA/IHZvaWQgMCA6IFtdO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgPyB2b2lkIDAgOiBbXTtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIF8ucmVzdChhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gbikpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgbiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIEJvb2xlYW4pO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgc3RyaWN0LCBvdXRwdXQpIHtcbiAgICBvdXRwdXQgPSBvdXRwdXQgfHwgW107XG4gICAgdmFyIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChpbnB1dCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgICAvLyBGbGF0dGVuIGN1cnJlbnQgbGV2ZWwgb2YgYXJyYXkgb3IgYXJndW1lbnRzIG9iamVjdC5cbiAgICAgICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoaiA8IGxlbikgb3V0cHV0W2lkeCsrXSA9IHZhbHVlW2orK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgc3RyaWN0LCBvdXRwdXQpO1xuICAgICAgICAgIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBmYWxzZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIG90aGVyQXJyYXlzKSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgb3RoZXJBcnJheXMpO1xuICB9KTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIFRoZSBmYXN0ZXIgYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBhbiBpdGVyYXRlZSBpZiB0aGUgaXRlcmF0ZWVcbiAgLy8gaXMgbm90IGEgb25lLXRvLW9uZSBmdW5jdGlvbiwgc28gcHJvdmlkaW5nIGFuIGl0ZXJhdGVlIHdpbGwgZGlzYWJsZVxuICAvLyB0aGUgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCAmJiAhaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHNlZW4gPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKHNlZW4sIGNvbXB1dGVkKSkge1xuICAgICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFfLmNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5cykge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcnJheXMsIHRydWUsIHRydWUpKTtcbiAgfSk7XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgaWYgKF8uY29udGFpbnMocmVzdWx0LCBpdGVtKSkgY29udGludWU7XG4gICAgICB2YXIgajtcbiAgICAgIGZvciAoaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKGFyZ3VtZW50c1tqXSwgaXRlbSkpIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGogPT09IGFyZ3NMZW5ndGgpIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgcmVzdCkge1xuICAgIHJlc3QgPSBmbGF0dGVuKHJlc3QsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQ29tcGxlbWVudCBvZiBfLnppcC4gVW56aXAgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgYW5kIGdyb3Vwc1xuICAvLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXMuXG4gIF8udW56aXAgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciBsZW5ndGggPSBhcnJheSAmJiBfLm1heChhcnJheSwgZ2V0TGVuZ3RoKS5sZW5ndGggfHwgMDtcbiAgICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBfLnBsdWNrKGFycmF5LCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSByZXN0QXJndW1lbnRzKF8udW56aXApO1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy4gUGFzc2luZyBieSBwYWlycyBpcyB0aGUgcmV2ZXJzZSBvZiBfLnBhaXJzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpc3QpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaW5kSW5kZXggYW5kIGZpbmRMYXN0SW5kZXggZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgPSBmdW5jdGlvbihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb24gYW4gYXJyYXktbGlrZSB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0LlxuICBfLmZpbmRJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKDEpO1xuICBfLmZpbmRMYXN0SW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigtMSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdGVlKG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICAgIGlmIChpdGVyYXRlZShhcnJheVttaWRdKSA8IHZhbHVlKSBsb3cgPSBtaWQgKyAxOyBlbHNlIGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgaW5kZXhPZiBhbmQgbGFzdEluZGV4T2YgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlSW5kZXhGaW5kZXIgPSBmdW5jdGlvbihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgaSA9IGlkeCA+PSAwID8gaWR4IDogTWF0aC5tYXgoaWR4ICsgbGVuZ3RoLCBpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZW5ndGggPSBpZHggPj0gMCA/IE1hdGgubWluKGlkeCArIDEsIGxlbmd0aCkgOiBpZHggKyBsZW5ndGggKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnRlZEluZGV4ICYmIGlkeCAmJiBsZW5ndGgpIHtcbiAgICAgICAgaWR4ID0gc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaWR4XSA9PT0gaXRlbSA/IGlkeCA6IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgICAgaWR4ID0gcHJlZGljYXRlRmluZChzbGljZS5jYWxsKGFycmF5LCBpLCBsZW5ndGgpLCBfLmlzTmFOKTtcbiAgICAgICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4ICsgaSA6IC0xO1xuICAgICAgfVxuICAgICAgZm9yIChpZHggPSBkaXIgPiAwID8gaSA6IGxlbmd0aCAtIDE7IGlkeCA+PSAwICYmIGlkeCA8IGxlbmd0aDsgaWR4ICs9IGRpcikge1xuICAgICAgICBpZiAoYXJyYXlbaWR4XSA9PT0gaXRlbSkgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIGlmICghc3RlcCkge1xuICAgICAgc3RlcCA9IHN0b3AgPCBzdGFydCA/IC0xIDogMTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIENodW5rIGEgc2luZ2xlIGFycmF5IGludG8gbXVsdGlwbGUgYXJyYXlzLCBlYWNoIGNvbnRhaW5pbmcgYGNvdW50YCBvciBmZXdlclxuICAvLyBpdGVtcy5cbiAgXy5jaHVuayA9IGZ1bmN0aW9uKGFycmF5LCBjb3VudCkge1xuICAgIGlmIChjb3VudCA9PSBudWxsIHx8IGNvdW50IDwgMSkgcmV0dXJuIFtdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgcmVzdWx0LnB1c2goc2xpY2UuY2FsbChhcnJheSwgaSwgaSArPSBjb3VudCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAgdmFyIGV4ZWN1dGVCb3VuZCA9IGZ1bmN0aW9uKHNvdXJjZUZ1bmMsIGJvdW5kRnVuYywgY29udGV4dCwgY2FsbGluZ0NvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciBzZWxmID0gYmFzZUNyZWF0ZShzb3VyY2VGdW5jLnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IHNvdXJjZUZ1bmMuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKF8uaXNPYmplY3QocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJncykge1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdCaW5kIG11c3QgYmUgY2FsbGVkIG9uIGEgZnVuY3Rpb24nKTtcbiAgICB2YXIgYm91bmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGNhbGxBcmdzKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChjYWxsQXJncykpO1xuICAgIH0pO1xuICAgIHJldHVybiBib3VuZDtcbiAgfSk7XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC4gXyBhY3RzXG4gIC8vIGFzIGEgcGxhY2Vob2xkZXIgYnkgZGVmYXVsdCwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZVxuICAvLyBwcmUtZmlsbGVkLiBTZXQgYF8ucGFydGlhbC5wbGFjZWhvbGRlcmAgZm9yIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGFyZ3VtZW50LlxuICBfLnBhcnRpYWwgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGJvdW5kQXJncykge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IF8ucGFydGlhbC5wbGFjZWhvbGRlcjtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IHBsYWNlaG9sZGVyID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgYXJndW1lbnRzLmxlbmd0aCkgYXJncy5wdXNoKGFyZ3VtZW50c1twb3NpdGlvbisrXSk7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfSk7XG5cbiAgXy5wYXJ0aWFsLnBsYWNlaG9sZGVyID0gXztcblxuICAvLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbiAgLy8gYXJlIHRoZSBtZXRob2QgbmFtZXMgdG8gYmUgYm91bmQuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdCBhbGwgY2FsbGJhY2tzXG4gIC8vIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgIHZhciBpbmRleCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vaXplID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgY2FjaGUgPSBtZW1vaXplLmNhY2hlO1xuICAgICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgICBpZiAoIWhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfSk7XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBfLnBhcnRpYWwoXy5kZWxheSwgXywgMSk7XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciB0aW1lb3V0LCBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IF8ubm93KCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IF8ubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHByZXZpb3VzID0gMDtcbiAgICAgIHRpbWVvdXQgPSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiB0aHJvdHRsZWQ7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGFyZ3MpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKGFyZ3MpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcblxuICAgIHZhciBkZWJvdW5jZWQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHZhciBjYWxsTm93ID0gIXRpbWVvdXQ7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gXy5kZWxheShsYXRlciwgd2FpdCwgdGhpcywgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBkZWJvdW5jZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlYm91bmNlZDtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIF8ucGFydGlhbCh3cmFwcGVyLCBmdW5jKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgbmVnYXRlZCB2ZXJzaW9uIG9mIHRoZSBwYXNzZWQtaW4gcHJlZGljYXRlLlxuICBfLm5lZ2F0ZSA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgc3RhcnQgPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGkgPSBzdGFydDtcbiAgICAgIHZhciByZXN1bHQgPSBhcmdzW3N0YXJ0XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgd2hpbGUgKGktLSkgcmVzdWx0ID0gYXJnc1tpXS5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uIGFuZCBhZnRlciB0aGUgTnRoIGNhbGwuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIHVwIHRvIChidXQgbm90IGluY2x1ZGluZykgdGhlIE50aCBjYWxsLlxuICBfLmJlZm9yZSA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgdmFyIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPiAwKSB7XG4gICAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPD0gMSkgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBfLnBhcnRpYWwoXy5iZWZvcmUsIDIpO1xuXG4gIF8ucmVzdEFyZ3VtZW50cyA9IHJlc3RBcmd1bWVudHM7XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gS2V5cyBpbiBJRSA8IDkgdGhhdCB3b24ndCBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC5cbiAgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuICB2YXIgY29sbGVjdE5vbkVudW1Qcm9wcyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciBub25FbnVtSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aDtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gICAgdmFyIHByb3RvID0gXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgfHwgT2JqUHJvdG87XG5cbiAgICAvLyBDb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICB2YXIgcHJvcCA9ICdjb25zdHJ1Y3Rvcic7XG4gICAgaWYgKGhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2AuXG4gIF8ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgaWYgKG5hdGl2ZUtleXMpIHJldHVybiBuYXRpdmVLZXlzKG9iaik7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0LlxuICAvLyBJbiBjb250cmFzdCB0byBfLm1hcCBpdCByZXR1cm5zIGFuIG9iamVjdC5cbiAgXy5tYXBPYmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSB7fTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgcmVzdWx0c1tjdXJyZW50S2V5XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIC8vIFRoZSBvcHBvc2l0ZSBvZiBfLm9iamVjdC5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2AuXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYXNzaWduZXIgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlQXNzaWduZXIgPSBmdW5jdGlvbihrZXlzRnVuYywgZGVmYXVsdHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChkZWZhdWx0cykgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICAgIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoIWRlZmF1bHRzIHx8IG9ialtrZXldID09PSB2b2lkIDApIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMpO1xuXG4gIC8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICAvLyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnbilcbiAgXy5leHRlbmRPd24gPSBfLmFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKF8ua2V5cyk7XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3Qga2V5IG9uIGFuIG9iamVjdCB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0LlxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBJbnRlcm5hbCBwaWNrIGhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgYG9iamAgaGFzIGtleSBga2V5YC5cbiAgdmFyIGtleUluT2JqID0gZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge30sIGl0ZXJhdGVlID0ga2V5c1swXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwga2V5c1sxXSk7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0ga2V5SW5PYmo7XG4gICAgICBrZXlzID0gZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgb2JqID0gT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iaikpIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciBpdGVyYXRlZSA9IGtleXNbMF0sIGNvbnRleHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICAgIGl0ZXJhdGVlID0gXy5uZWdhdGUoaXRlcmF0ZWUpO1xuICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkgY29udGV4dCA9IGtleXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBfLm1hcChmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9KTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzLCB0cnVlKTtcblxuICAvLyBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhlIGdpdmVuIHByb3RvdHlwZSBvYmplY3QuXG4gIC8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gIC8vIGNyZWF0ZWQgb2JqZWN0LlxuICBfLmNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIGlmIChwcm9wcykgXy5leHRlbmRPd24ocmVzdWx0LCBwcm9wcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uaXNNYXRjaCA9IGZ1bmN0aW9uKG9iamVjdCwgYXR0cnMpIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhhdHRycyksIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICFsZW5ndGg7XG4gICAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGF0dHJzW2tleV0gIT09IG9ialtrZXldIHx8ICEoa2V5IGluIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEsIGRlZXBFcTtcbiAgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICAgIC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICBpZiAoYSAhPT0gYSkgcmV0dXJuIGIgIT09IGI7XG4gICAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIGRlZXBFcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gJycgKyBhID09PSAnJyArIGI7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgICAgaWYgKCthICE9PSArYSkgcmV0dXJuICtiICE9PSArYjtcbiAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IFN5bWJvbF0nOlxuICAgICAgICByZXR1cm4gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYik7XG4gICAgfVxuXG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICYmICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cblxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGFyZUFycmF5cykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKGEpLCBrZXk7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgIGlmIChfLmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xuICAgICAgICBpZiAoIShoYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvciwgaXNNYXAsIGlzV2Vha01hcCwgaXNTZXQsIGlzV2Vha1NldC5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InLCAnU3ltYm9sJywgJ01hcCcsICdXZWFrTWFwJywgJ1NldCcsICdXZWFrU2V0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSA8IDkpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBoYXMob2JqLCAnY2FsbGVlJyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS4gV29yayBhcm91bmQgc29tZSB0eXBlb2YgYnVncyBpbiBvbGQgdjgsXG4gIC8vIElFIDExICgjMTYyMSksIFNhZmFyaSA4ICgjMTkyOSksIGFuZCBQaGFudG9tSlMgKCMyMjM2KS5cbiAgdmFyIG5vZGVsaXN0ID0gcm9vdC5kb2N1bWVudCAmJiByb290LmRvY3VtZW50LmNoaWxkTm9kZXM7XG4gIGlmICh0eXBlb2YgLy4vICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mIEludDhBcnJheSAhPSAnb2JqZWN0JyAmJiB0eXBlb2Ygbm9kZWxpc3QgIT0gJ2Z1bmN0aW9uJykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICFfLmlzU3ltYm9sKG9iaikgJiYgaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/XG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIGlzTmFOKG9iaik7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkge1xuICAgICAgcmV0dXJuIGhhcyhvYmosIHBhdGgpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHBhdGhbaV07XG4gICAgICBpZiAob2JqID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iaiA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gISFsZW5ndGg7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRlZXMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbnMuIE9mdGVuIHVzZWZ1bCBvdXRzaWRlIG9mIFVuZGVyc2NvcmUuXG4gIF8uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIF8ubm9vcCA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBwYXNzZWQgYW4gb2JqZWN0LCB3aWxsIHRyYXZlcnNlIHRoYXQgb2JqZWN04oCZc1xuICAvLyBwcm9wZXJ0aWVzIGRvd24gdGhlIGdpdmVuIGBwYXRoYCwgc3BlY2lmaWVkIGFzIGFuIGFycmF5IG9mIGtleXMgb3IgaW5kZXhlcy5cbiAgXy5wcm9wZXJ0eSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkge1xuICAgICAgcmV0dXJuIHNoYWxsb3dQcm9wZXJ0eShwYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGRlZXBHZXQob2JqLCBwYXRoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgcmV0dXJuICFfLmlzQXJyYXkocGF0aCkgPyBvYmpbcGF0aF0gOiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVzY2FwZU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICdgJzogJyYjeDYwOydcbiAgfTtcbiAgdmFyIHVuZXNjYXBlTWFwID0gXy5pbnZlcnQoZXNjYXBlTWFwKTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIHZhciBjcmVhdGVFc2NhcGVyID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIGVzY2FwZXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hcFttYXRjaF07XG4gICAgfTtcbiAgICAvLyBSZWdleGVzIGZvciBpZGVudGlmeWluZyBhIGtleSB0aGF0IG5lZWRzIHRvIGJlIGVzY2FwZWQuXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gVHJhdmVyc2VzIHRoZSBjaGlsZHJlbiBvZiBgb2JqYCBhbG9uZyBgcGF0aGAuIElmIGEgY2hpbGQgaXMgYSBmdW5jdGlvbiwgaXRcbiAgLy8gaXMgaW52b2tlZCB3aXRoIGl0cyBwYXJlbnQgYXMgY29udGV4dC4gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpbmFsXG4gIC8vIGNoaWxkLCBvciBgZmFsbGJhY2tgIGlmIGFueSBjaGlsZCBpcyB1bmRlZmluZWQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCBmYWxsYmFjaykge1xuICAgIGlmICghXy5pc0FycmF5KHBhdGgpKSBwYXRoID0gW3BhdGhdO1xuICAgIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuIF8uaXNGdW5jdGlvbihmYWxsYmFjaykgPyBmYWxsYmFjay5jYWxsKG9iaikgOiBmYWxsYmFjaztcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtwYXRoW2ldXTtcbiAgICAgIGlmIChwcm9wID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJvcCA9IGZhbGxiYWNrO1xuICAgICAgICBpID0gbGVuZ3RoOyAvLyBFbnN1cmUgd2UgZG9uJ3QgY29udGludWUgaXRlcmF0aW5nLlxuICAgICAgfVxuICAgICAgb2JqID0gXy5pc0Z1bmN0aW9uKHByb3ApID8gcHJvcC5jYWxsKG9iaikgOiBwcm9wO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGU6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGU6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZTogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogXCInXCIsXG4gICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgJ1xccic6ICdyJyxcbiAgICAnXFxuJzogJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlUmVnRXhwID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIHZhciBlc2NhcGVDaGFyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07XG4gIH07XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgc2V0dGluZ3MsIG9sZFNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncyAmJiBvbGRTZXR0aW5ncykgc2V0dGluZ3MgPSBvbGRTZXR0aW5ncztcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCBlc2NhcGVDaGFyKTtcbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZG9iZSBWTXMgbmVlZCB0aGUgbWF0Y2ggcmV0dXJuZWQgdG8gcHJvZHVjZSB0aGUgY29ycmVjdCBvZmZzZXQuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdmFyIHJlbmRlcjtcbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonO1xuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbi4gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGluc3RhbmNlID0gXyhvYmopO1xuICAgIGluc3RhbmNlLl9jaGFpbiA9IHRydWU7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciBjaGFpblJlc3VsdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvYmopIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgXy5lYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF87XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gIF8ucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB1bndyYXBwaW5nIHByb3h5IGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuICAvLyBzdWNoIGFzIGFyaXRobWV0aWMgYW5kIEpTT04gc3RyaW5naWZpY2F0aW9uLlxuICBfLnByb3RvdHlwZS52YWx1ZU9mID0gXy5wcm90b3R5cGUudG9KU09OID0gXy5wcm90b3R5cGUudmFsdWU7XG5cbiAgXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMuX3dyYXBwZWQpO1xuICB9O1xuXG4gIC8vIEFNRCByZWdpc3RyYXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQU1EIGxvYWRlcnNcbiAgLy8gdGhhdCBtYXkgbm90IGVuZm9yY2UgbmV4dC10dXJuIHNlbWFudGljcyBvbiBtb2R1bGVzLiBFdmVuIHRob3VnaCBnZW5lcmFsXG4gIC8vIHByYWN0aWNlIGZvciBBTUQgcmVnaXN0cmF0aW9uIGlzIHRvIGJlIGFub255bW91cywgdW5kZXJzY29yZSByZWdpc3RlcnNcbiAgLy8gYXMgYSBuYW1lZCBtb2R1bGUgYmVjYXVzZSwgbGlrZSBqUXVlcnksIGl0IGlzIGEgYmFzZSBsaWJyYXJ5IHRoYXQgaXNcbiAgLy8gcG9wdWxhciBlbm91Z2ggdG8gYmUgYnVuZGxlZCBpbiBhIHRoaXJkIHBhcnR5IGxpYiwgYnV0IG5vdCBiZSBwYXJ0IG9mXG4gIC8vIGFuIEFNRCBsb2FkIHJlcXVlc3QuIFRob3NlIGNhc2VzIGNvdWxkIGdlbmVyYXRlIGFuIGVycm9yIHdoZW4gYW5cbiAgLy8gYW5vbnltb3VzIGRlZmluZSgpIGlzIGNhbGxlZCBvdXRzaWRlIG9mIGEgbG9hZGVyIHJlcXVlc3QuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcblxuZXhwb3J0IGNvbnN0IENoZWNrQm94ID0gKHsgY2xhc3NOYW1lLCBjaGVja2VkLCBpbmRldGVybWluYXRlIH0pID0+IChcbiAgPGlucHV0XG4gICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICBjaGVja2VkPXsgY2hlY2tlZCB9XG4gICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICByZWY9eyAoaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dCkgaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9IH1cbiAgICBvbkNoYW5nZT17ICgpID0+IHt9IH1cbiAgLz5cbik7XG5cbkNoZWNrQm94LnByb3BUeXBlcyA9IHtcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25IZWFkZXJDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZFN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkFsbFJvd3NTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhdm9pZCB1cGRhdGluZyBpZiBidXR0b24gaXNcbiAgICogMS4gcmFkaW9cbiAgICogMi4gc3RhdHVzIHdhcyBub3QgY2hhbmdlZC5cbiAgICovXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IFJPV19TRUxFQ1RfU0lOR0xFIH0gPSBDb25zdDtcbiAgICBjb25zdCB7IG1vZGUsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9TSU5HTEUpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBuZXh0UHJvcHMuY2hlY2tlZFN0YXR1cyAhPT0gY2hlY2tlZFN0YXR1cztcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgb25BbGxSb3dzU2VsZWN0LCBjaGVja2VkU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzVW5TZWxlY3QgPVxuICAgICAgY2hlY2tlZFN0YXR1cyA9PT0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQgfHxcbiAgICAgIGNoZWNrZWRTdGF0dXMgPT09IENvbnN0LkNIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgb25BbGxSb3dzU2VsZWN0KGUsIGlzVW5TZWxlY3QpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENIRUNLQk9YX1NUQVRVU19DSEVDS0VELCBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURSwgUk9XX1NFTEVDVF9NVUxUSVBMRVxuICAgIH0gPSBDb25zdDtcblxuICAgIGNvbnN0IHsgbW9kZSwgY2hlY2tlZFN0YXR1cywgc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjaGVja2VkID0gY2hlY2tlZFN0YXR1cyA9PT0gQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG5cbiAgICBjb25zdCBpbmRldGVybWluYXRlID0gY2hlY2tlZFN0YXR1cyA9PT0gQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU7XG5cbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGxldCBjb250ZW50O1xuICAgIGlmIChzZWxlY3Rpb25IZWFkZXJSZW5kZXJlciB8fCBtb2RlID09PSBST1dfU0VMRUNUX01VTFRJUExFKSB7XG4gICAgICBhdHRycy5vbkNsaWNrID0gdGhpcy5oYW5kbGVDaGVja0JveENsaWNrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge1xuICAgICAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfTVVMVElQTEUpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXsgY2hlY2tlZCB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBib290c3RyYXA0ID8gJ3NlbGVjdGlvbi1pbnB1dC00JyA6ICcnIH1cbiAgICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9eyBpbmRldGVybWluYXRlIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRoIGRhdGEtcm93LXNlbGVjdGlvbiB7IC4uLmF0dHJzIH0+eyBjb250ZW50IH08L3RoPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCBuby1uZXN0ZWQtdGVybmFyeTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbkhlYWRlckNlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFueUV4cGFuZHM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25BbGxSb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tCb3hDbGljayhlKSB7XG4gICAgY29uc3QgeyBhbnlFeHBhbmRzLCBvbkFsbFJvd0V4cGFuZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQWxsUm93RXhwYW5kKGUsICFhbnlFeHBhbmRzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFueUV4cGFuZHMsIHJlbmRlcmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDaGVja0JveENsaWNrXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGggZGF0YS1yb3ctc2VsZWN0aW9uIHsgLi4uYXR0cnMgfT5cbiAgICAgICAge1xuICAgICAgICAgIHJlbmRlcmVyID9cbiAgICAgICAgICAgIHJlbmRlcmVyKHsgaXNBbnlFeHBhbmRzOiBhbnlFeHBhbmRzIH0pIDpcbiAgICAgICAgICAgIChhbnlFeHBhbmRzID8gJygtKScgOiAnKCspJylcbiAgICAgICAgfVxuICAgICAgPC90aD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBDYXB0aW9uID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxjYXB0aW9uPnsgcHJvcHMuY2hpbGRyZW4gfTwvY2FwdGlvbj5cbiAgKTtcbn07XG5cbkNhcHRpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93JztcbmltcG9ydCBFeHBhbmRSb3cgZnJvbSAnLi9yb3ctZXhwYW5kL2V4cGFuZC1yb3cnO1xuaW1wb3J0IFJvd1NlY3Rpb24gZnJvbSAnLi9yb3ctc2VjdGlvbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNvbnN0IEJvZHkgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YSxcbiAgICBrZXlGaWVsZCxcbiAgICBpc0VtcHR5LFxuICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgY2VsbEVkaXQsXG4gICAgc2VsZWN0Um93LFxuICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICByb3dTdHlsZSxcbiAgICByb3dDbGFzc2VzLFxuICAgIHJvd0V2ZW50cyxcbiAgICBleHBhbmRSb3dcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBiZ0NvbG9yLFxuICAgIG5vblNlbGVjdGFibGVcbiAgfSA9IHNlbGVjdFJvdztcblxuICBsZXQgY29udGVudDtcblxuICBpZiAoaXNFbXB0eSkge1xuICAgIGNvbnN0IGluZGljYXRpb24gPSBfLmlzRnVuY3Rpb24obm9EYXRhSW5kaWNhdGlvbikgPyBub0RhdGFJbmRpY2F0aW9uKCkgOiBub0RhdGFJbmRpY2F0aW9uO1xuICAgIGlmICghaW5kaWNhdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnRlbnQgPSA8Um93U2VjdGlvbiBjb250ZW50PXsgaW5kaWNhdGlvbiB9IGNvbFNwYW49eyB2aXNpYmxlQ29sdW1uU2l6ZSB9IC8+O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vbkVkaXRhYmxlUm93cyA9IGNlbGxFZGl0Lm5vbkVkaXRhYmxlUm93cyB8fCBbXTtcbiAgICBjb250ZW50ID0gZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgY29uc3QgZWRpdGFibGUgPSAhKG5vbkVkaXRhYmxlUm93cy5sZW5ndGggPiAwICYmIG5vbkVkaXRhYmxlUm93cy5pbmRleE9mKGtleSkgPiAtMSk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRURcbiAgICAgICAgPyBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGNvbnN0IGF0dHJzID0gcm93RXZlbnRzIHx8IHt9O1xuICAgICAgbGV0IHN0eWxlID0gXy5pc0Z1bmN0aW9uKHJvd1N0eWxlKSA/IHJvd1N0eWxlKHJvdywgaW5kZXgpIDogcm93U3R5bGU7XG4gICAgICBsZXQgY2xhc3NlcyA9IChfLmlzRnVuY3Rpb24ocm93Q2xhc3NlcykgPyByb3dDbGFzc2VzKHJvdywgaW5kZXgpIDogcm93Q2xhc3Nlcyk7XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuc3R5bGUpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuc3R5bGUocm93LCBpbmRleClcbiAgICAgICAgICA6IHNlbGVjdFJvdy5zdHlsZTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LmNsYXNzZXMpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuY2xhc3Nlcyhyb3csIGluZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LmNsYXNzZXM7XG5cbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgLi4uc2VsZWN0ZWRTdHlsZVxuICAgICAgICB9O1xuICAgICAgICBjbGFzc2VzID0gY3MoY2xhc3Nlcywgc2VsZWN0ZWRDbGFzc2VzKTtcblxuICAgICAgICBpZiAoYmdDb2xvcikge1xuICAgICAgICAgIHN0eWxlID0gc3R5bGUgfHwge307XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXy5pc0Z1bmN0aW9uKGJnQ29sb3IpID8gYmdDb2xvcihyb3csIGluZGV4KSA6IGJnQ29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0YWJsZSA9ICFub25TZWxlY3RhYmxlIHx8ICFub25TZWxlY3RhYmxlLmluY2x1ZGVzKGtleSk7XG4gICAgICBjb25zdCBleHBhbmRhYmxlID0gZXhwYW5kUm93ICYmICFleHBhbmRSb3cubm9uRXhwYW5kYWJsZS5pbmNsdWRlcyhrZXkpO1xuICAgICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRSb3cgJiYgZXhwYW5kUm93LmV4cGFuZGVkLmluY2x1ZGVzKGtleSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgICAgPFJvd1xuICAgICAgICAgIGtleT17IGtleSB9XG4gICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICBrZXlGaWVsZD17IGtleUZpZWxkIH1cbiAgICAgICAgICByb3dJbmRleD17IGluZGV4IH1cbiAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgY2VsbEVkaXQ9eyBjZWxsRWRpdCB9XG4gICAgICAgICAgZWRpdGFibGU9eyBlZGl0YWJsZSB9XG4gICAgICAgICAgc2VsZWN0YWJsZT17IHNlbGVjdGFibGUgfVxuICAgICAgICAgIGV4cGFuZGFibGU9eyBleHBhbmRhYmxlIH1cbiAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICBleHBhbmRlZD17IGV4cGFuZGVkIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyBzZWxlY3RSb3cgfVxuICAgICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NlcyB9XG4gICAgICAgICAgYXR0cnM9eyBhdHRycyB9XG4gICAgICAgIC8+XG4gICAgICBdO1xuXG4gICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goKFxuICAgICAgICAgIDxFeHBhbmRSb3dcbiAgICAgICAgICAgIGtleT17IGAke2tleX0tZXhwYW5kaW5nYCB9XG4gICAgICAgICAgICBjb2xTcGFuPXsgdmlzaWJsZUNvbHVtblNpemUgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgZXhwYW5kUm93LnJlbmRlcmVyKHJvdykgfVxuICAgICAgICAgIDwvRXhwYW5kUm93PlxuICAgICAgICApKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRib2R5PnsgY29udGVudCB9PC90Ym9keT5cbiAgKTtcbn07XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2VsZWN0ZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9ib2R5LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgU2VsZWN0aW9uQ2VsbCBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwnO1xuaW1wb3J0IEV4cGFuZENlbGwgZnJvbSAnLi9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL3Jvdy1ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5jbGFzcyBSb3cgZXh0ZW5kcyBldmVudERlbGVnYXRlcihDb21wb25lbnQpIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBhdHRycyxcbiAgICAgIGNlbGxFZGl0LFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRlZCxcbiAgICAgIGV4cGFuZFJvdyxcbiAgICAgIHNlbGVjdGFibGUsXG4gICAgICBlZGl0YWJsZTogZWRpdGFibGVSb3dcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIG1vZGUsXG4gICAgICBvblN0YXJ0LFxuICAgICAgRWRpdGluZ0NlbGwsXG4gICAgICByaWR4OiBlZGl0aW5nUm93SWR4LFxuICAgICAgY2lkeDogZWRpdGluZ0NvbElkeCxcbiAgICAgIENMSUNLX1RPX0NFTExfRURJVCxcbiAgICAgIERCQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBjZWxsRWRpdDtcblxuICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgIGNvbnN0IHsgaGlkZVNlbGVjdENvbHVtbiB9ID0gc2VsZWN0Um93O1xuICAgIGNvbnN0IHsgc2hvd0V4cGFuZENvbHVtbiB9ID0gZXhwYW5kUm93IHx8IHt9O1xuICAgIGNvbnN0IHRyQXR0cnMgPSB0aGlzLmRlbGVnYXRlKGF0dHJzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHIgc3R5bGU9eyBzdHlsZSB9IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHsgLi4udHJBdHRycyB9PlxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0V4cGFuZENvbHVtbiA/IChcbiAgICAgICAgICAgIDxFeHBhbmRDZWxsXG4gICAgICAgICAgICAgIHsgLi4uZXhwYW5kUm93IH1cbiAgICAgICAgICAgICAgcm93S2V5PXsga2V5IH1cbiAgICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAoc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQgJiYgIWhpZGVTZWxlY3RDb2x1bW4pXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPFNlbGVjdGlvbkNlbGxcbiAgICAgICAgICAgICAgICB7IC4uLnNlbGVjdFJvdyB9XG4gICAgICAgICAgICAgICAgcm93S2V5PXsga2V5IH1cbiAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICFzZWxlY3RhYmxlIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2x1bW4uaGlkZGVuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YUZpZWxkIH0gPSBjb2x1bW47XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgIGxldCBlZGl0YWJsZSA9IF8uaXNEZWZpbmVkKGNvbHVtbi5lZGl0YWJsZSkgPyBjb2x1bW4uZWRpdGFibGUgOiB0cnVlO1xuICAgICAgICAgICAgICBpZiAoZGF0YUZpZWxkID09PSBrZXlGaWVsZCB8fCAhZWRpdGFibGVSb3cpIGVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRhYmxlKSkge1xuICAgICAgICAgICAgICAgIGVkaXRhYmxlID0gY29sdW1uLmVkaXRhYmxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT09IGVkaXRpbmdSb3dJZHggJiYgaW5kZXggPT09IGVkaXRpbmdDb2xJZHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdENlbGxzdHlsZSA9IGNvbHVtbi5lZGl0Q2VsbFN0eWxlIHx8IHt9O1xuICAgICAgICAgICAgICAgIGxldCBlZGl0Q2VsbGNsYXNzZXMgPSBjb2x1bW4uZWRpdENlbGxDbGFzc2VzO1xuICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRDZWxsU3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0Q2VsbHN0eWxlID0gY29sdW1uLmVkaXRDZWxsU3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0Q2VsbENsYXNzZXMpKSB7XG4gICAgICAgICAgICAgICAgICBlZGl0Q2VsbGNsYXNzZXMgPSBjb2x1bW4uZWRpdENlbGxDbGFzc2VzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxFZGl0aW5nQ2VsbFxuICAgICAgICAgICAgICAgICAgICBrZXk9eyBgJHtjb250ZW50fS0ke2luZGV4fWAgfVxuICAgICAgICAgICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGVkaXRDZWxsY2xhc3NlcyB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgZWRpdENlbGxzdHlsZSB9XG4gICAgICAgICAgICAgICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gcmVuZGVyIGNlbGxcbiAgICAgICAgICAgICAgbGV0IGNlbGxUaXRsZTtcbiAgICAgICAgICAgICAgbGV0IGNlbGxTdHlsZSA9IHt9O1xuICAgICAgICAgICAgICBjb25zdCBjZWxsQXR0cnMgPSB7XG4gICAgICAgICAgICAgICAgLi4uXy5pc0Z1bmN0aW9uKGNvbHVtbi5hdHRycylcbiAgICAgICAgICAgICAgICAgID8gY29sdW1uLmF0dHJzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgOiBjb2x1bW4uYXR0cnMsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLmV2ZW50c1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKGNvbHVtbi5jbGFzc2VzKVxuICAgICAgICAgICAgICAgID8gY29sdW1uLmNsYXNzZXMoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgOiBjb2x1bW4uY2xhc3NlcztcblxuICAgICAgICAgICAgICBpZiAoY29sdW1uLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKGNvbHVtbi5zdHlsZSlcbiAgICAgICAgICAgICAgICAgID8gY29sdW1uLnN0eWxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgOiBjb2x1bW4uc3R5bGU7XG4gICAgICAgICAgICAgICAgY2VsbFN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgY2VsbFN0eWxlKSB8fCB7fTtcbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgaWYgKGNvbHVtbi50aXRsZSkge1xuICAgICAgICAgICAgICAgIGNlbGxUaXRsZSA9IF8uaXNGdW5jdGlvbihjb2x1bW4udGl0bGUpXG4gICAgICAgICAgICAgICAgICA/IGNvbHVtbi50aXRsZShjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICAgIDogY29udGVudDtcbiAgICAgICAgICAgICAgICBjZWxsQXR0cnMudGl0bGUgPSBjZWxsVGl0bGU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29sdW1uLmFsaWduKSB7XG4gICAgICAgICAgICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9XG4gICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oY29sdW1uLmFsaWduKVxuICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5hbGlnbihjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgOiBjb2x1bW4uYWxpZ247XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjZWxsQ2xhc3NlcztcbiAgICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENlbGxcbiAgICAgICAgICAgICAgICAgIGtleT17IGAke2NvbnRlbnR9LSR7aW5kZXh9YCB9XG4gICAgICAgICAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleD17IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgICAgICAgICBvblN0YXJ0PXsgb25TdGFydCB9XG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZT17IGVkaXRhYmxlIH1cbiAgICAgICAgICAgICAgICAgIGNsaWNrVG9FZGl0PXsgbW9kZSA9PT0gQ0xJQ0tfVE9fQ0VMTF9FRElUIH1cbiAgICAgICAgICAgICAgICAgIGRiY2xpY2tUb0VkaXQ9eyBtb2RlID09PSBEQkNMSUNLX1RPX0NFTExfRURJVCB9XG4gICAgICAgICAgICAgICAgICB7IC4uLmNlbGxBdHRycyB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdHRyczogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgZWRpdGFibGU6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBhdHRyczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIENlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICBpZiAobmV4dFByb3BzLmNvbHVtbi5pc0R1bW15RmllbGQpIHtcbiAgICAgIHNob3VsZFVwZGF0ZSA9ICFfLmlzRXF1YWwodGhpcy5wcm9wcy5yb3csIG5leHRQcm9wcy5yb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG91bGRVcGRhdGUgPVxuICAgICAgICBfLmdldCh0aGlzLnByb3BzLnJvdywgdGhpcy5wcm9wcy5jb2x1bW4uZGF0YUZpZWxkKVxuICAgICAgICAgICE9PSBfLmdldChuZXh0UHJvcHMucm93LCBuZXh0UHJvcHMuY29sdW1uLmRhdGFGaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZSkgcmV0dXJuIHRydWU7XG5cbiAgICBzaG91bGRVcGRhdGUgPVxuICAgICAgdGhpcy5wcm9wcy5jb2x1bW4uaGlkZGVuICE9PSBuZXh0UHJvcHMuY29sdW1uLmhpZGRlbiB8fFxuICAgICAgdGhpcy5wcm9wcy5yb3dJbmRleCAhPT0gbmV4dFByb3BzLnJvd0luZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLmNvbHVtbkluZGV4ICE9PSBuZXh0UHJvcHMuY29sdW1uSW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lIHx8XG4gICAgICB0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUgfHxcbiAgICAgIHRoaXMucHJvcHMuZWRpdGFibGUgIT09IG5leHRQcm9wcy5lZGl0YWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5jbGlja1RvRWRpdCAhPT0gbmV4dFByb3BzLmNsaWNrVG9FZGl0IHx8XG4gICAgICB0aGlzLnByb3BzLmRiY2xpY2tUb0VkaXQgIT09IG5leHRQcm9wcy5kYmNsaWNrVG9FZGl0IHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW4uZm9ybWF0RXh0cmFEYXRhLCBuZXh0UHJvcHMuY29sdW1uLmZvcm1hdEV4dHJhRGF0YSkgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW4uZXZlbnRzLCBuZXh0UHJvcHMuY29sdW1uLmV2ZW50cykgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW4uYXR0cnMsIG5leHRQcm9wcy5jb2x1bW4uYXR0cnMpO1xuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gIH1cblxuICBoYW5kbGVFZGl0aW5nQ2VsbChlKSB7XG4gICAgY29uc3QgeyBjb2x1bW4sIG9uU3RhcnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2xpY2tUb0VkaXQsIGRiY2xpY2tUb0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IGNvbHVtbjtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBpZiAoY2xpY2tUb0VkaXQpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0KSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbURiQ2xpY2sgPSBldmVudHMub25Eb3VibGVDbGljaztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21EYkNsaWNrKSkgY3VzdG9tRGJDbGljayhlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9uU3RhcnQpIHtcbiAgICAgIG9uU3RhcnQocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjb2x1bW4sXG4gICAgICBjb2x1bW5JbmRleCxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsaWNrVG9FZGl0LFxuICAgICAgZGJjbGlja1RvRWRpdCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkYXRhRmllbGQsXG4gICAgICBmb3JtYXR0ZXIsXG4gICAgICBmb3JtYXRFeHRyYURhdGFcbiAgICB9ID0gY29sdW1uO1xuICAgIGNvbnN0IGF0dHJzID0geyAuLi5yZXN0IH07XG4gICAgbGV0IGNvbnRlbnQgPSBjb2x1bW4uaXNEdW1teUZpZWxkID8gbnVsbCA6IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGNvbnRlbnQgPSBjb2x1bW4uZm9ybWF0dGVyKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKGNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBhdHRycy5vbkNsaWNrID0gdGhpcy5oYW5kbGVFZGl0aW5nQ2VsbDtcbiAgICB9IGVsc2UgaWYgKGRiY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGF0dHJzLm9uRG91YmxlQ2xpY2sgPSB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGQgeyAuLi5hdHRycyB9PlxuICAgICAgICB7IHR5cGVvZiBjb250ZW50ID09PSAnYm9vbGVhbicgPyBgJHtjb250ZW50fWAgOiBjb250ZW50IH1cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxufVxuXG5DZWxsLnByb3BUeXBlcyA9IHtcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2x1bW5JbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIi8qIGVzbGludFxuICByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDBcbiAganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnM6IDBcbiovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJvd0tleTogUHJvcFR5cGVzLmFueSxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Sb3dTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3Rpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIG5leHRQcm9wcy5zZWxlY3RlZCAhPT0gc2VsZWN0ZWQ7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgcm93S2V5LFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBvblJvd1NlbGVjdCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjbGlja1RvU2VsZWN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICBpZiAoY2xpY2tUb1NlbGVjdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2hlY2tlZCA9IGlucHV0VHlwZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEVcbiAgICAgID8gdHJ1ZVxuICAgICAgOiAhc2VsZWN0ZWQ7XG5cbiAgICBvblJvd1NlbGVjdChyb3dLZXksIGNoZWNrZWQsIHJvd0luZGV4LCBlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2VsZWN0aW9uUmVuZGVyZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge1xuICAgICAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4gKFxuICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25SZW5kZXJlciA/IHNlbGVjdGlvblJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB9KSA6IChcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsgaW5wdXRUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGJvb3RzdHJhcDQgPyAnc2VsZWN0aW9uLWlucHV0LTQnIDogJycgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICgpID0+IHt9IH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCIvKiBlc2xpbnRcbiAgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwXG4gIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwXG4qL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uUm93RXhwYW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZENvbHVtblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlclxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHsgcm93S2V5LCBleHBhbmRlZCwgb25Sb3dFeHBhbmQsIHJvd0luZGV4IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25Sb3dFeHBhbmQocm93S2V5LCBleHBhbmRlZCwgcm93SW5kZXgsIGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXhwYW5kZWQsIGV4cGFuZENvbHVtblJlbmRlcmVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9PlxuICAgICAgICB7XG4gICAgICAgICAgZXhwYW5kQ29sdW1uUmVuZGVyZXIgPyBleHBhbmRDb2x1bW5SZW5kZXJlcih7XG4gICAgICAgICAgICBleHBhbmRlZFxuICAgICAgICAgIH0pIDogKGV4cGFuZGVkID8gJygtKScgOiAnKCspJylcbiAgICAgICAgfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ29uQ2xpY2snLFxuICAnb25Eb3VibGVDbGljaycsXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSb3dFdmVudERlbGVnYXRlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGNiKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyByb3csIHJvd0luZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjYihlLCByb3csIHJvd0luZGV4KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIGtleUZpZWxkLFxuICAgICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgICAgZXhwYW5kYWJsZSxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgICBleHBhbmRSb3csXG4gICAgICAgICAgc2VsZWN0Um93LFxuICAgICAgICAgIGNlbGxFZGl0OiB7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgREJDTElDS19UT19DRUxMX0VESVQsXG4gICAgICAgICAgICBERUxBWV9GT1JfREJDTElDS1xuICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xpY2tGbiA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgICAgICBpZiAoZXhwYW5kUm93ICYmIGV4cGFuZGFibGUpIHtcbiAgICAgICAgICAgIGV4cGFuZFJvdy5vblJvd0V4cGFuZChrZXksICFleHBhbmRlZCwgcm93SW5kZXgsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZWN0Um93Lm1vZGUgIT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRUQgJiYgc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgc2VsZWN0Um93Lm9uUm93U2VsZWN0KGtleSwgIXNlbGVjdGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb2RlID09PSBEQkNMSUNLX1RPX0NFTExfRURJVCAmJiBzZWxlY3RSb3cuY2xpY2tUb0VkaXQpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrTnVtICs9IDE7XG4gICAgICAgICAgXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja051bSA9PT0gMSkge1xuICAgICAgICAgICAgICBjbGlja0ZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgICAgICB9LCBERUxBWV9GT1JfREJDTElDSykoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGlja0ZuKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZWdhdGUoYXR0cnMgPSB7fSkge1xuICAgICAgY29uc3QgbmV3QXR0cnMgPSB7fTtcbiAgICAgIGNvbnN0IHsgZXhwYW5kUm93LCBzZWxlY3RSb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoZXhwYW5kUm93ICYmIChzZWxlY3RSb3cgJiYgc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QpKSB7XG4gICAgICAgIG5ld0F0dHJzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKGF0dHJzLm9uQ2xpY2spO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKCFuZXdBdHRyc1thdHRyXSkge1xuICAgICAgICAgIGlmIChldmVudHMuaW5jbHVkZXMoYXR0cikpIHtcbiAgICAgICAgICAgIG5ld0F0dHJzW2F0dHJdID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGF0dHJzW2F0dHJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSBhdHRyc1thdHRyXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld0F0dHJzO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1ldmVudC1kZWxlZ2F0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXhwYW5kUm93ID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8dHIgY2xhc3NOYW1lPVwiZXhwYW5kaW5nLXJvd1wiPlxuICAgIDx0ZCB7IC4uLnJlc3QgfT57IGNoaWxkcmVuIH08L3RkPlxuICA8L3RyPlxuKTtcblxuRXhwYW5kUm93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5FeHBhbmRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtcm93LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJvd1NlY3Rpb24gPSAoeyBjb250ZW50LCBjb2xTcGFuIH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZFxuICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICBjb2xTcGFuPXsgY29sU3BhbiB9XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCJcbiAgICA+XG4gICAgICB7IGNvbnRlbnQgfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5Sb3dTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgY29sU3BhbjogUHJvcFR5cGVzLm51bWJlclxufTtcblxuUm93U2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnQ6IG51bGwsXG4gIGNvbFNwYW46IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvd1NlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VjdGlvbi5qcyIsImltcG9ydCBDb2x1bW5SZXNvbHZlciBmcm9tICcuL2NvbHVtbi1yZXNvbHZlcic7XG5pbXBvcnQgRXhwYW5kUm93UmVzb2x2ZXIgZnJvbSAnLi9leHBhbmQtcm93LXJlc29sdmVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgVGFibGVSZXNvbHZlciBleHRlbmRzXG4gICAgRXhwYW5kUm93UmVzb2x2ZXIoQ29sdW1uUmVzb2x2ZXIoRXh0ZW5kQmFzZSkpIHtcbiAgICB2YWxpZGF0ZVByb3BzKCkge1xuICAgICAgY29uc3QgeyBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICgha2V5RmllbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2Ugc3BlY2lmeSBhIGZpZWxkIGFzIGtleSB2aWEga2V5RmllbGQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZpc2libGVDb2x1bW5TaXplKGZhbHNlKSA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdmlzaWJsZSBjb2x1bW5zIGRldGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByb3BzIHJlc29sdmVyIGZvciBjZWxsIHNlbGVjdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gYWRkdGlvbmFsIG9wdGlvbnMgbGlrZSBjYWxsYmFjayB3aGljaCBhcmUgYWJvdXQgdG8gbWVyZ2UgaW50byBwcm9wc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH0gcmVzdWx0IC0gcHJvcHMgZm9yIGNlbGwgc2VsZWN0aW9uc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHJlc3VsdC5tb2RlIC0gaW5wdXQgdHlwZSBvZiByb3cgc2VsZWN0aW9uIG9yIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHJlc29sdmVTZWxlY3RSb3dQcm9wcyhvcHRpb25zKSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgUk9XX1NFTEVDVF9ESVNBQkxFRCB9ID0gQ29uc3Q7XG5cbiAgICAgIGlmIChfLmlzRGVmaW5lZChzZWxlY3RSb3cpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VsZWN0Um93LFxuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZTogUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcm9wcyByZXNvbHZlciBmb3IgaGVhZGVyIGNlbGwgc2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhZGR0aW9uYWwgb3B0aW9ucyBsaWtlIGNhbGxiYWNrIHdoaWNoIGFyZSBhYm91dCB0byBtZXJnZSBpbnRvIHByb3BzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZXN1bHQgLSBwcm9wcyBmb3IgY2VsbCBzZWxlY3Rpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0Lm1vZGUgLSBpbnB1dCB0eXBlIG9mIHJvdyBzZWxlY3Rpb24gb3IgZGlzYWJsZWQuXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0LmNoZWNrZWRTdGF0dXMgLSBjaGVja2JveCBzdGF0dXMgZGVwZW5kaW5nIG9uIHNlbGVjdGVkIHJvd3MgY291bnRzXG4gICAgICovXG4gICAgcmVzb2x2ZVNlbGVjdFJvd1Byb3BzRm9ySGVhZGVyKG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgeyBzZWxlY3RSb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGFsbFJvd3NTZWxlY3RlZCwgYWxsUm93c05vdFNlbGVjdGVkLCAuLi5yZXN0IH0gPSBvcHRpb25zO1xuICAgICAgY29uc3Qge1xuICAgICAgICBST1dfU0VMRUNUX0RJU0FCTEVELCBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCxcbiAgICAgICAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUsIENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRURcbiAgICAgIH0gPSBDb25zdDtcblxuICAgICAgaWYgKF8uaXNEZWZpbmVkKHNlbGVjdFJvdykpIHtcbiAgICAgICAgbGV0IGNoZWNrZWRTdGF0dXM7XG5cbiAgICAgICAgLy8gY2hlY2tib3ggc3RhdHVzIGRlcGVuZGluZyBvbiBzZWxlY3RlZCByb3dzIGNvdW50c1xuICAgICAgICBpZiAoYWxsUm93c1NlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ7XG4gICAgICAgIGVsc2UgaWYgKGFsbFJvd3NOb3RTZWxlY3RlZCkgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ7XG4gICAgICAgIGVsc2UgY2hlY2tlZFN0YXR1cyA9IENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VsZWN0Um93LFxuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgY2hlY2tlZFN0YXR1c1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDb2x1bW5SZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHZpc2libGVDb2x1bW5TaXplKGluY2x1ZGVTZWxlY3RDb2x1bW4gPSB0cnVlKSB7XG4gICAgICBsZXQgY29sdW1uTGVuID0gdGhpcy5wcm9wcy5jb2x1bW5zLmZpbHRlcihjID0+ICFjLmhpZGRlbikubGVuZ3RoO1xuICAgICAgaWYgKCFpbmNsdWRlU2VsZWN0Q29sdW1uKSByZXR1cm4gY29sdW1uTGVuO1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93ICYmICF0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKSB7XG4gICAgICAgIGNvbHVtbkxlbiArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuZXhwYW5kUm93ICYmIHRoaXMucHJvcHMuZXhwYW5kUm93LnNob3dFeHBhbmRDb2x1bW4pIHtcbiAgICAgICAgY29sdW1uTGVuICs9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sdW1uTGVuO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsImV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgRXhwYW5kUm93UmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICByZXNvbHZlRXhwYW5kUm93UHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGV4cGFuZFJvdywgZXhwYW5kZWQsIG9uUm93RXhwYW5kLCBvbkFsbFJvd0V4cGFuZCwgaXNBbnlFeHBhbmRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKGV4cGFuZFJvdykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmV4cGFuZFJvdyxcbiAgICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgICBvblJvd0V4cGFuZCxcbiAgICAgICAgICBvbkFsbFJvd0V4cGFuZCxcbiAgICAgICAgICBpc0FueUV4cGFuZHMsXG4gICAgICAgICAgbm9uRXhwYW5kYWJsZTogZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUgfHwgW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2V4cGFuZC1yb3ctcmVzb2x2ZXIuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IGNsYXNzLW1ldGhvZHMtdXNlLXRoaXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgY3JlYXRlRGF0YUNvbnRleHQgZnJvbSAnLi9kYXRhLWNvbnRleHQnO1xuaW1wb3J0IGNyZWF0ZVNvcnRDb250ZXh0IGZyb20gJy4vc29ydC1jb250ZXh0JztcbmltcG9ydCBjcmVhdGVTZWxlY3Rpb25Db250ZXh0IGZyb20gJy4vc2VsZWN0aW9uLWNvbnRleHQnO1xuaW1wb3J0IGNyZWF0ZVJvd0V4cGFuZENvbnRleHQgZnJvbSAnLi9yb3ctZXhwYW5kLWNvbnRleHQnO1xuaW1wb3J0IHJlbW90ZVJlc29sdmVyIGZyb20gJy4uL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlcic7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi9ib290c3RyYXAnO1xuaW1wb3J0IGRhdGFPcGVyYXRvciBmcm9tICcuLi9zdG9yZS9vcGVyYXRvcnMnO1xuXG5jb25zdCB3aXRoQ29udGV4dCA9IEJhc2UgPT5cbiAgY2xhc3MgQm9vdHN0cmFwVGFibGVDb250YWluZXIgZXh0ZW5kcyByZW1vdGVSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5EYXRhQ29udGV4dCA9IGNyZWF0ZURhdGFDb250ZXh0KCk7XG5cbiAgICAgIGlmIChwcm9wcy5jb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnNvcnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5Tb3J0Q29udGV4dCA9IGNyZWF0ZVNvcnRDb250ZXh0KFxuICAgICAgICAgIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZVNvcnQsIHRoaXMuaGFuZGxlUmVtb3RlU29ydENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5zZWxlY3RSb3cpIHtcbiAgICAgICAgdGhpcy5TZWxlY3Rpb25Db250ZXh0ID0gY3JlYXRlU2VsZWN0aW9uQ29udGV4dChkYXRhT3BlcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZXhwYW5kUm93KSB7XG4gICAgICAgIHRoaXMuUm93RXhwYW5kQ29udGV4dCA9IGNyZWF0ZVJvd0V4cGFuZENvbnRleHQoZGF0YU9wZXJhdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNlbGxFZGl0ICYmIHByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5DZWxsRWRpdENvbnRleHQgPSBwcm9wcy5jZWxsRWRpdC5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZUNlbGxFZGl0LCB0aGlzLmhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuRmlsdGVyQ29udGV4dCA9IHByb3BzLmZpbHRlci5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVGaWx0ZXJpbmcsIHRoaXMuaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5QYWdpbmF0aW9uQ29udGV4dCA9IHByb3BzLnBhZ2luYXRpb24uY3JlYXRlQ29udGV4dChcbiAgICAgICAgICB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbiwgdGhpcy5oYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNlYXJjaCAmJiBwcm9wcy5zZWFyY2guc2VhcmNoQ29udGV4dCkge1xuICAgICAgICB0aGlzLlNlYXJjaENvbnRleHQgPSBwcm9wcy5zZWFyY2guc2VhcmNoQ29udGV4dChcbiAgICAgICAgICBfLCB0aGlzLmlzUmVtb3RlU2VhcmNoLCB0aGlzLmhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5zZXREZXBlbmRlbmN5TW9kdWxlcykge1xuICAgICAgICBwcm9wcy5zZXREZXBlbmRlbmN5TW9kdWxlcyhfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJCYXNlKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgIHNvcnRQcm9wcyxcbiAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICBleHBhbmRQcm9wcyxcbiAgICAgICAgc2VsZWN0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgeyAuLi5zZWxlY3Rpb25Qcm9wcyB9XG4gICAgICAgICAgeyAuLi5zb3J0UHJvcHMgfVxuICAgICAgICAgIHsgLi4uY2VsbEVkaXRQcm9wcyB9XG4gICAgICAgICAgeyAuLi5maWx0ZXJQcm9wcyB9XG4gICAgICAgICAgeyAuLi5zZWFyY2hQcm9wcyB9XG4gICAgICAgICAgeyAuLi5wYWdpbmF0aW9uUHJvcHMgfVxuICAgICAgICAgIHsgLi4uZXhwYW5kUHJvcHMgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcywgcGFnaW5hdGlvblByb3BzKSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhTZWxlY3Rpb25DdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHMsXG4gICAgICAgIGV4cGFuZFByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuU2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlNlbGVjdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdGlvblByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgICAgICAgICBleHBhbmRQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Qcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLlNlbGVjdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoUm93RXhwYW5kQ3R4KGJhc2UsIGJhc2VQcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgIHNvcnRQcm9wcyxcbiAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuUm93RXhwYW5kQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICBleHBhbmRSb3c9eyB0aGlzLnByb3BzLmV4cGFuZFJvdyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlJvd0V4cGFuZENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGV4cGFuZFByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgICAgICAgICBleHBhbmRQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLlJvd0V4cGFuZENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoUGFnaW5hdGlvbkN0eChiYXNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMucGFnaW5hdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBwYWdpbmF0aW9uPXsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMpIH1cbiAgICAgICAgICBib290c3RyYXA0PXsgdGhpcy5wcm9wcy5ib290c3RyYXA0IH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlBhZ2luYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5QYWdpbmF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNvcnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zb3J0Q29udGV4dCA9IG4gfVxuICAgICAgICAgIGRlZmF1bHRTb3J0ZWQ9eyB0aGlzLnByb3BzLmRlZmF1bHRTb3J0ZWQgfVxuICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uPXsgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbiB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNvcnRQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICAgICAgICAgIHNvcnRQcm9wcyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGhpcy5Tb3J0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlNvcnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoU2VhcmNoQ3R4KGJhc2UsIGJhc2VQcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICBmaWx0ZXJQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNlYXJjaENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLnNlYXJjaENvbnRleHQgPSBuIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMpIH1cbiAgICAgICAgICBzZWFyY2hUZXh0PXsgdGhpcy5wcm9wcy5zZWFyY2guc2VhcmNoVGV4dCB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5TZWFyY2hDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWFyY2hQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU2VhcmNoQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlNlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhGaWx0ZXJDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5GaWx0ZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5maWx0ZXJDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKCkgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuRmlsdGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmlsdGVyUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLkZpbHRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5GaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ2VsbEVkaXRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuQ2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHNlbGVjdFJvdz17IHRoaXMucHJvcHMuc2VsZWN0Um93IH1cbiAgICAgICAgICBjZWxsRWRpdD17IHRoaXMucHJvcHMuY2VsbEVkaXQgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YSgpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLkNlbGxFZGl0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2VsbEVkaXRQcm9wcyA9PiBiYXNlKHJvb3RQcm9wcywgY2VsbEVkaXRQcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuQ2VsbEVkaXRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuQ2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkLCBjb2x1bW5zLCBib290c3RyYXA0LCByZWdpc3RlckV4cG9zZWRBUEkgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBiYXNlUHJvcHMgPSB7IGtleUZpZWxkLCBjb2x1bW5zIH07XG4gICAgICBpZiAocmVnaXN0ZXJFeHBvc2VkQVBJKSBiYXNlUHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJID0gcmVnaXN0ZXJFeHBvc2VkQVBJO1xuXG4gICAgICBsZXQgYmFzZSA9IHRoaXMucmVuZGVyQmFzZSgpO1xuXG4gICAgICBpZiAodGhpcy5TZWxlY3Rpb25Db250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhTZWxlY3Rpb25DdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuUm93RXhwYW5kQ29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoUm93RXhwYW5kQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlBhZ2luYXRpb25Db250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhQYWdpbmF0aW9uQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNvcnRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhTb3J0Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNlYXJjaENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNlYXJjaEN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5GaWx0ZXJDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhGaWx0ZXJDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuQ2VsbEVkaXRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhDZWxsRWRpdEN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm9vdHN0cmFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgYm9vdHN0cmFwNCB9IH0+XG4gICAgICAgICAgPHRoaXMuRGF0YUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICAgIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0aGlzLkRhdGFDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmFzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RoaXMuRGF0YUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgPC90aGlzLkRhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICA8L0Jvb3RzdHJhcENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbnRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIERhdGFQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHsgZGF0YTogdGhpcy5wcm9wcy5kYXRhIH07XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBkYXRhOiBuZXh0UHJvcHMuZGF0YSB9KSk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSA9IChmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcywgcGFnaW5hdGlvblByb3BzKSA9PiB7XG4gICAgICBpZiAocGFnaW5hdGlvblByb3BzKSByZXR1cm4gcGFnaW5hdGlvblByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChzb3J0UHJvcHMpIHJldHVybiBzb3J0UHJvcHMuZGF0YTtcbiAgICAgIGVsc2UgaWYgKHNlYXJjaFByb3BzKSByZXR1cm4gc2VhcmNoUHJvcHMuZGF0YTtcbiAgICAgIGVsc2UgaWYgKGZpbHRlclByb3BzKSByZXR1cm4gZmlsdGVyUHJvcHMuZGF0YTtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGE7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICBnZXREYXRhOiB0aGlzLmdldERhdGFcbiAgICAgICAgICB9IH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IERhdGFDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvZGF0YS1jb250ZXh0LmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIGRhdGFPcGVyYXRvcixcbiAgaXNSZW1vdGVTb3J0LFxuICBoYW5kbGVTb3J0Q2hhbmdlXG4pID0+IHtcbiAgY29uc3QgU29ydENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgU29ydFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG9yZGVyOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKS5pc1JlcXVpcmVkXG4gICAgICB9KSksXG4gICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0Q29sdW1uO1xuICAgICAgY29uc3QgeyBjb2x1bW5zLCBkZWZhdWx0U29ydGVkLCBkZWZhdWx0U29ydERpcmVjdGlvbiB9ID0gcHJvcHM7XG5cbiAgICAgIGlmIChkZWZhdWx0U29ydGVkICYmIGRlZmF1bHRTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBzb3J0RmllbGQgPSBkZWZhdWx0U29ydGVkWzBdLmRhdGFGaWVsZDtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmYXVsdFNvcnRlZFswXS5vcmRlciB8fCBkZWZhdWx0U29ydERpcmVjdGlvbjtcbiAgICAgICAgY29uc3Qgc29ydENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkKTtcbiAgICAgICAgaWYgKHNvcnRDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzb3J0Q29sdW1uID0gc29ydENvbHVtbnNbMF07XG5cbiAgICAgICAgICBpZiAoc29ydENvbHVtbi5vblNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRDb2x1bW4ub25Tb3J0KHNvcnRGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzb3J0T3JkZXIsIHNvcnRDb2x1bW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoaXNSZW1vdGVTb3J0KCkgJiYgc29ydE9yZGVyICYmIHNvcnRDb2x1bW4pIHtcbiAgICAgICAgaGFuZGxlU29ydENoYW5nZShzb3J0Q29sdW1uLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTb3J0ID0gKGNvbHVtbikgPT4ge1xuICAgICAgY29uc3Qgc29ydE9yZGVyID0gZGF0YU9wZXJhdG9yLm5leHRPcmRlcihjb2x1bW4sIHRoaXMuc3RhdGUsIHRoaXMucHJvcHMuZGVmYXVsdFNvcnREaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoY29sdW1uLm9uU29ydCkge1xuICAgICAgICBjb2x1bW4ub25Tb3J0KGNvbHVtbi5kYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1JlbW90ZVNvcnQoKSkge1xuICAgICAgICBoYW5kbGVTb3J0Q2hhbmdlKGNvbHVtbi5kYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHNvcnRPcmRlcixcbiAgICAgICAgc29ydENvbHVtbjogY29sdW1uXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgaWYgKCFpc1JlbW90ZVNvcnQoKSAmJiBzb3J0Q29sdW1uKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhT3BlcmF0b3Iuc29ydChkYXRhLCBzb3J0T3JkZXIsIHNvcnRDb2x1bW4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U29ydENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICBvblNvcnQ6IHRoaXMuaGFuZGxlU29ydCxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogc29ydENvbHVtbiA/IHNvcnRDb2x1bW4uZGF0YUZpZWxkIDogbnVsbFxuICAgICAgICAgIH0gfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9Tb3J0Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFNvcnRQcm92aWRlcixcbiAgICBDb25zdW1lcjogU29ydENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIGRhdGFPcGVyYXRvclxuKSA9PiB7XG4gIGNvbnN0IFNlbGVjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgU2VsZWN0aW9uUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBpZiAocHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKSB7XG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKCkgPT4gdGhpcy5nZXRTZWxlY3RlZCgpO1xuICAgICAgICBwcm9wcy5yZWdpc3RlckV4cG9zZWRBUEkoZ2V0U2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlID0geyBzZWxlY3RlZDogKHRoaXMucHJvcHMuc2VsZWN0Um93ICYmIHRoaXMucHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkKSB8fCBbXSB9O1xuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICBzZWxlY3RlZDogbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBleHBvc2VkIEFQSVxuICAgIGdldFNlbGVjdGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgaGFuZGxlUm93U2VsZWN0ID0gKHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwga2V5RmllbGQsIHNlbGVjdFJvdzogeyBtb2RlLCBvblNlbGVjdCB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG5cbiAgICAgIGxldCBjdXJyU2VsZWN0ZWQgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZF07XG5cbiAgICAgIGlmIChtb2RlID09PSBST1dfU0VMRUNUX1NJTkdMRSkgeyAvLyB3aGVuIHNlbGVjdCBtb2RlIGlzIHJhZGlvXG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IFtyb3dLZXldO1xuICAgICAgfSBlbHNlIGlmIChjaGVja2VkKSB7IC8vIHdoZW4gc2VsZWN0IG1vZGUgaXMgY2hlY2tib3hcbiAgICAgICAgY3VyclNlbGVjdGVkLnB1c2gocm93S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGN1cnJTZWxlY3RlZC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHJvd0tleSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgICBjb25zdCByb3cgPSBkYXRhT3BlcmF0b3IuZ2V0Um93QnlSb3dJZChkYXRhLCBrZXlGaWVsZCwgcm93S2V5KTtcbiAgICAgICAgb25TZWxlY3Qocm93LCBjaGVja2VkLCByb3dJbmRleCwgZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgc2VsZWN0ZWQ6IGN1cnJTZWxlY3RlZCB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWxsUm93c1NlbGVjdCA9IChlLCBpc1VuU2VsZWN0KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGtleUZpZWxkLFxuICAgICAgICBzZWxlY3RSb3c6IHtcbiAgICAgICAgICBvblNlbGVjdEFsbCxcbiAgICAgICAgICBub25TZWxlY3RhYmxlXG4gICAgICAgIH1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgbGV0IGN1cnJTZWxlY3RlZDtcblxuICAgICAgaWYgKCFpc1VuU2VsZWN0KSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IHNlbGVjdGVkLmNvbmNhdChkYXRhT3BlcmF0b3Iuc2VsZWN0YWJsZUtleXMoZGF0YSwga2V5RmllbGQsIG5vblNlbGVjdGFibGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IHNlbGVjdGVkLmZpbHRlcihzID0+IHR5cGVvZiBkYXRhLmZpbmQoZCA9PiBkW2tleUZpZWxkXSA9PT0gcykgPT09ICd1bmRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uU2VsZWN0QWxsKSB7XG4gICAgICAgIG9uU2VsZWN0QWxsKCFpc1VuU2VsZWN0LCBkYXRhT3BlcmF0b3IuZ2V0U2VsZWN0ZWRSb3dzKGRhdGEsIGtleUZpZWxkLCBjdXJyU2VsZWN0ZWQpLCBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBzZWxlY3RlZDogY3VyclNlbGVjdGVkIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICBvblJvd1NlbGVjdDogdGhpcy5oYW5kbGVSb3dTZWxlY3QsXG4gICAgICAgICAgICBvbkFsbFJvd3NTZWxlY3Q6IHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdFxuICAgICAgICAgIH0gfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogU2VsZWN0aW9uUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IFNlbGVjdGlvbkNvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zZWxlY3Rpb24tY29udGV4dC5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBkYXRhT3BlcmF0b3JcbikgPT4ge1xuICBjb25zdCBSb3dFeHBhbmRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIFJvd0V4cGFuZFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHsgZXhwYW5kZWQ6IHRoaXMucHJvcHMuZXhwYW5kUm93LmV4cGFuZGVkIHx8IFtdIH07XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5leHBhbmRSb3cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIGV4cGFuZGVkOiBuZXh0UHJvcHMuZXhwYW5kUm93LmV4cGFuZGVkIHx8IHRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVJvd0V4cGFuZCA9IChyb3dLZXksIGV4cGFuZGVkLCByb3dJbmRleCwgZSkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCwgZXhwYW5kUm93OiB7IG9uRXhwYW5kIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGxldCBjdXJyRXhwYW5kZWQgPSBbLi4udGhpcy5zdGF0ZS5leHBhbmRlZF07XG5cbiAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICBjdXJyRXhwYW5kZWQucHVzaChyb3dLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckV4cGFuZGVkID0gY3VyckV4cGFuZGVkLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gcm93S2V5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRXhwYW5kKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRhdGFPcGVyYXRvci5nZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dLZXkpO1xuICAgICAgICBvbkV4cGFuZChyb3csIGV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGV4cGFuZGVkOiBjdXJyRXhwYW5kZWQgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZUFsbFJvd0V4cGFuZCA9IChlLCBleHBhbmRBbGwpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAga2V5RmllbGQsXG4gICAgICAgIGV4cGFuZFJvdzoge1xuICAgICAgICAgIG9uRXhwYW5kQWxsLFxuICAgICAgICAgIG5vbkV4cGFuZGFibGVcbiAgICAgICAgfVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICBsZXQgY3VyckV4cGFuZGVkO1xuXG4gICAgICBpZiAoZXhwYW5kQWxsKSB7XG4gICAgICAgIGN1cnJFeHBhbmRlZCA9IGV4cGFuZGVkLmNvbmNhdChkYXRhT3BlcmF0b3IuZXhwYW5kYWJsZUtleXMoZGF0YSwga2V5RmllbGQsIG5vbkV4cGFuZGFibGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJFeHBhbmRlZCA9IGV4cGFuZGVkLmZpbHRlcihzID0+IHR5cGVvZiBkYXRhLmZpbmQoZCA9PiBkW2tleUZpZWxkXSA9PT0gcykgPT09ICd1bmRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRXhwYW5kQWxsKSB7XG4gICAgICAgIG9uRXhwYW5kQWxsKGV4cGFuZEFsbCwgZGF0YU9wZXJhdG9yLmdldEV4cGFuZGVkUm93cyhkYXRhLCBrZXlGaWVsZCwgY3VyckV4cGFuZGVkKSwgZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6IGN1cnJFeHBhbmRlZCB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgICBpc0FueUV4cGFuZHM6IGRhdGFPcGVyYXRvci5pc0FueUV4cGFuZHMoZGF0YSwga2V5RmllbGQsIHRoaXMuc3RhdGUuZXhwYW5kZWQpLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IHRoaXMuc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgICAgICBvblJvd0V4cGFuZDogdGhpcy5oYW5kbGVSb3dFeHBhbmQsXG4gICAgICAgICAgICBvbkFsbFJvd0V4cGFuZDogdGhpcy5oYW5kbGVBbGxSb3dFeHBhbmRcbiAgICAgICAgICB9IH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvUm93RXhwYW5kQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFJvd0V4cGFuZFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBSb3dFeHBhbmRDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvcm93LWV4cGFuZC1jb250ZXh0LmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFJlbW90ZVJlc29sdmVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgZ2V0TmV3ZXN0U3RhdGUgPSAoc3RhdGUgPSB7fSkgPT4ge1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0RmllbGQ7XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGxldCBzaXplUGVyUGFnZTtcbiAgICAgIGxldCBzZWFyY2hUZXh0O1xuICAgICAgbGV0IGZpbHRlcnMgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuc29ydENvbnRleHQpIHtcbiAgICAgICAgc29ydE9yZGVyID0gdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0T3JkZXI7XG4gICAgICAgIHNvcnRGaWVsZCA9IHRoaXMuc29ydENvbnRleHQuc3RhdGUuc29ydENvbHVtbiA/XG4gICAgICAgICAgdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0Q29sdW1uLmRhdGFGaWVsZCA6XG4gICAgICAgICAgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29udGV4dCkge1xuICAgICAgICBmaWx0ZXJzID0gdGhpcy5maWx0ZXJDb250ZXh0LmN1cnJGaWx0ZXJzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uQ29udGV4dCkge1xuICAgICAgICBwYWdlID0gdGhpcy5wYWdpbmF0aW9uQ29udGV4dC5jdXJyUGFnZTtcbiAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnBhZ2luYXRpb25Db250ZXh0LmN1cnJTaXplUGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoQ29udGV4dCkge1xuICAgICAgICBzZWFyY2hUZXh0ID0gdGhpcy5wcm9wcy5zZWFyY2guc2VhcmNoVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICBzb3J0RmllbGQsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlLFxuICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlzUmVtb3RlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnNlYXJjaCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUucGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVGaWx0ZXJpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuZmlsdGVyKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlU29ydCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zb3J0KSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlQ2VsbEVkaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuY2VsbEVkaXQpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UgPSAocGFnZSwgc2l6ZVBlclBhZ2UpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgncGFnaW5hdGlvbicsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBwYWdlLCBzaXplUGVyUGFnZSB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlID0gKGZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBmaWx0ZXJzIH07XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnMgfHwge307XG4gICAgICAgIG5ld1N0YXRlLnBhZ2UgPSBfLmlzRGVmaW5lZChvcHRpb25zLnBhZ2VTdGFydEluZGV4KSA/IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggOiAxO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdmaWx0ZXInLCB0aGlzLmdldE5ld2VzdFN0YXRlKG5ld1N0YXRlKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlU29ydENoYW5nZSA9IChzb3J0RmllbGQsIHNvcnRPcmRlcikgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdzb3J0JywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IHNvcnRGaWVsZCwgc29ydE9yZGVyIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVDZWxsQ2hhbmdlID0gKHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRWRpdCA9IHsgcm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUgfTtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnY2VsbEVkaXQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgY2VsbEVkaXQgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSA9IChzZWFyY2hUZXh0KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NlYXJjaCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBzZWFyY2hUZXh0IH0pKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXIuanMiLCJpbXBvcnQgKiBhcyByb3dzIGZyb20gJy4vcm93cyc7XG5pbXBvcnQgKiBhcyBzZWxlY3Rpb24gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0ICogYXMgZXhwYW5kIGZyb20gJy4vZXhwYW5kJztcbmltcG9ydCAqIGFzIG11dGF0ZSBmcm9tICcuL211dGF0ZSc7XG5pbXBvcnQgKiBhcyBzb3J0IGZyb20gJy4vc29ydCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4ucm93cyxcbiAgLi4uc2VsZWN0aW9uLFxuICAuLi5leHBhbmQsXG4gIC4uLm11dGF0ZSxcbiAgLi4uc29ydFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL29wZXJhdG9ycy5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgaXNBbnlFeHBhbmRzID0gKFxuICBkYXRhLFxuICBrZXlGaWVsZCxcbiAgZXhwYW5kZWQgPSBbXVxuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0tleSA9IF8uZ2V0KGRhdGFbaV0sIGtleUZpZWxkKTtcbiAgICBpZiAodHlwZW9mIGV4cGFuZGVkLmZpbmQoeCA9PiB4ID09PSByb3dLZXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBhbmRhYmxlS2V5cyA9IChkYXRhLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhc2tpcHMuaW5jbHVkZXMoXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeHBhbmRlZFJvd3MgPSAoZGF0YSwga2V5RmllbGQsIGV4cGFuZGVkKSA9PlxuICBleHBhbmRlZC5tYXAoayA9PiBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCBrKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGVkaXRDZWxsID0gKGRhdGEsIGtleUZpZWxkLCByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkgPT4ge1xuICBjb25zdCByb3cgPSBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dJZCk7XG4gIGlmIChyb3cpIF8uc2V0KHJvdywgZGF0YUZpZWxkLCBuZXdWYWx1ZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwiLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmZ1bmN0aW9uIGNvbXBhcmF0b3IoYSwgYikge1xuICBsZXQgcmVzdWx0O1xuICBpZiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gYi5sb2NhbGVDb21wYXJlKGEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGEgPiBiID8gLTEgOiAoKGEgPCBiKSA/IDEgOiAwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3Qgc29ydCA9IChkYXRhLCBzb3J0T3JkZXIsIHsgZGF0YUZpZWxkLCBzb3J0RnVuYyB9KSA9PiB7XG4gIGNvbnN0IF9kYXRhID0gWy4uLmRhdGFdO1xuICBfZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgdmFsdWVBID0gXy5nZXQoYSwgZGF0YUZpZWxkKTtcbiAgICBsZXQgdmFsdWVCID0gXy5nZXQoYiwgZGF0YUZpZWxkKTtcbiAgICB2YWx1ZUEgPSBfLmlzRGVmaW5lZCh2YWx1ZUEpID8gdmFsdWVBIDogJyc7XG4gICAgdmFsdWVCID0gXy5pc0RlZmluZWQodmFsdWVCKSA/IHZhbHVlQiA6ICcnO1xuXG4gICAgaWYgKHNvcnRGdW5jKSB7XG4gICAgICByZXN1bHQgPSBzb3J0RnVuYyh2YWx1ZUEsIHZhbHVlQiwgc29ydE9yZGVyLCBkYXRhRmllbGQsIGEsIGIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MpIHtcbiAgICAgICAgcmVzdWx0ID0gY29tcGFyYXRvcih2YWx1ZUEsIHZhbHVlQik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQiwgdmFsdWVBKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG4gIHJldHVybiBfZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0T3JkZXIgPSAoXG4gIGN1cnJlbnRTb3J0Q29sdW1uLFxuICB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9LFxuICBkZWZhdWx0T3JkZXIgPSBDb25zdC5TT1JUX0RFU0NcbikgPT4ge1xuICBpZiAoIXNvcnRDb2x1bW4gfHwgY3VycmVudFNvcnRDb2x1bW4uZGF0YUZpZWxkICE9PSBzb3J0Q29sdW1uLmRhdGFGaWVsZCkgcmV0dXJuIGRlZmF1bHRPcmRlcjtcbiAgcmV0dXJuIHNvcnRPcmRlciA9PT0gQ29uc3QuU09SVF9ERVNDID8gQ29uc3QuU09SVF9BU0MgOiBDb25zdC5TT1JUX0RFU0M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvc29ydC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=react-bootstrap-table-next.js.map