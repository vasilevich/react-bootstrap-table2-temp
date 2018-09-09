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
          responsive = _props2.responsive,
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
        'table-condensed': condensed,
        'table-responsive': responsive
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
  responsive: _propTypes2.default.bool,
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
  responsive: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhYTU1MzFiMmUxM2IyNjcyM2Q5MyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9yb3dzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Jvb3RzdHJhcC10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1ldmVudC1kZWxlZ2F0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtcm93LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2NvbHVtbi1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9leHBhbmQtcm93LXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2RhdGEtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvc2VsZWN0aW9uLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvcm93LWV4cGFuZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvZXhwYW5kLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL211dGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIl0sIm5hbWVzIjpbIlNPUlRfQVNDIiwiU09SVF9ERVNDIiwiUk9XX1NFTEVDVF9TSU5HTEUiLCJST1dfU0VMRUNUX01VTFRJUExFIiwiUk9XX1NFTEVDVF9ESVNBQkxFRCIsIkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIiwiQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUiLCJDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEIiwic3BsaXROZXN0ZWQiLCJzdHIiLCJqb2luIiwicmVwbGFjZSIsInNwbGl0IiwiZ2V0IiwidGFyZ2V0IiwiZmllbGQiLCJwYXRoQXJyYXkiLCJyZXN1bHQiLCJyZWR1Y2UiLCJjdXJyIiwicGF0aCIsImUiLCJzZXQiLCJ2YWx1ZSIsInNhZmUiLCJsZXZlbCIsImEiLCJiIiwiRXJyb3IiLCJsZW5ndGgiLCJpc0VtcHR5T2JqZWN0Iiwib2JqIiwiaXNPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImtleXMiLCJpIiwiY2FsbCIsImlzRGVmaW5lZCIsInNsZWVwIiwiZm4iLCJtcyIsInNldFRpbWVvdXQiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiYXNzaWduIiwiQm9vdHN0cmFwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJib290c3RyYXA0IiwibWF0Y2hSb3ciLCJrZXlGaWVsZCIsImlkIiwicm93IiwiZ2V0Um93QnlSb3dJZCIsImRhdGEiLCJmaW5kIiwiZ2V0U2VsZWN0aW9uU3VtbWFyeSIsInNlbGVjdGVkIiwiYWxsUm93c1NlbGVjdGVkIiwiYWxsUm93c05vdFNlbGVjdGVkIiwicm93S2V5cyIsIm1hcCIsImQiLCJ4Iiwic2VsZWN0YWJsZUtleXMiLCJza2lwcyIsImZpbHRlciIsImluY2x1ZGVzIiwidW5TZWxlY3RhYmxlS2V5cyIsImdldFNlbGVjdGVkUm93cyIsImsiLCJCb290c3RyYXBUYWJsZSIsInByb3BzIiwiZ2V0RGF0YSIsInZhbGlkYXRlUHJvcHMiLCJyZWdpc3RlckV4cG9zZWRBUEkiLCJsb2FkaW5nIiwib3ZlcmxheSIsIkxvYWRpbmdPdmVybGF5IiwicmVuZGVyVGFibGUiLCJjb2x1bW5zIiwiY2xhc3NlcyIsInN0cmlwZWQiLCJob3ZlciIsImJvcmRlcmVkIiwiY29uZGVuc2VkIiwicmVzcG9uc2l2ZSIsIm5vRGF0YUluZGljYXRpb24iLCJjYXB0aW9uIiwicm93U3R5bGUiLCJyb3dDbGFzc2VzIiwid3JhcHBlckNsYXNzZXMiLCJyb3dFdmVudHMiLCJ0YWJsZVdyYXBwZXJDbGFzcyIsInRhYmxlQ2xhc3MiLCJjZWxsU2VsZWN0aW9uSW5mbyIsInJlc29sdmVTZWxlY3RSb3dQcm9wcyIsIm9uUm93U2VsZWN0IiwiaGVhZGVyQ2VsbFNlbGVjdGlvbkluZm8iLCJyZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIiLCJvbkFsbFJvd3NTZWxlY3QiLCJ0YWJsZUNhcHRpb24iLCJleHBhbmRSb3ciLCJyZXNvbHZlRXhwYW5kUm93UHJvcHMiLCJoZWFkZXJDbGFzc2VzIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwib25Tb3J0Iiwib25GaWx0ZXIiLCJvbkV4dGVybmFsRmlsdGVyIiwiaXNFbXB0eSIsInZpc2libGVDb2x1bW5TaXplIiwiY2VsbEVkaXQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJib29sIiwicmVtb3RlIiwib25lT2ZUeXBlIiwic2hhcGUiLCJwYWdpbmF0aW9uIiwibm9kZSIsIm9iamVjdCIsInNlbGVjdFJvdyIsIm1vZGUiLCJvbmVPZiIsImNsaWNrVG9TZWxlY3QiLCJjbGlja1RvRWRpdCIsIm9uU2VsZWN0Iiwib25TZWxlY3RBbGwiLCJzdHlsZSIsIm5vblNlbGVjdGFibGUiLCJiZ0NvbG9yIiwiaGlkZVNlbGVjdENvbHVtbiIsInNlbGVjdGlvblJlbmRlcmVyIiwic2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIiLCJyZW5kZXJlciIsImV4cGFuZGVkIiwib25FeHBhbmQiLCJvbkV4cGFuZEFsbCIsIm5vbkV4cGFuZGFibGUiLCJzaG93RXhwYW5kQ29sdW1uIiwiZXhwYW5kQ29sdW1uUmVuZGVyZXIiLCJleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciIsIm9uUm93RXhwYW5kIiwib25BbGxSb3dFeHBhbmQiLCJpc0FueUV4cGFuZHMiLCJkZWZhdWx0U29ydGVkIiwiYXJyYXlPZiIsImRhdGFGaWVsZCIsIm9yZGVyIiwiZGVmYXVsdFNvcnREaXJlY3Rpb24iLCJvblRhYmxlQ2hhbmdlIiwic2VhcmNoIiwic2VhcmNoVGV4dCIsInNlYXJjaENvbnRleHQiLCJzZXREZXBlbmRlbmN5TW9kdWxlcyIsImRlZmF1bHRQcm9wcyIsIkhlYWRlciIsImNsYXNzTmFtZSIsImNvbHVtbiIsImhpZGRlbiIsImN1cnJTb3J0IiwiaXNMYXN0U29ydGluZyIsIkhlYWRlckNlbGwiLCJpbmRleCIsInNvcnRpbmciLCJ0ZXh0Iiwic29ydCIsImZpbHRlclJlbmRlcmVyIiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJBbGlnbiIsImhlYWRlckZvcm1hdHRlciIsImhlYWRlckV2ZW50cyIsImhlYWRlclN0eWxlIiwiaGVhZGVyQXR0cnMiLCJoZWFkZXJTb3J0aW5nQ2xhc3NlcyIsImhlYWRlclNvcnRpbmdTdHlsZSIsImNlbGxBdHRycyIsImlzRnVuY3Rpb24iLCJzb3J0U3ltYm9sIiwiZmlsdGVyRWxtIiwiY2VsbFN0eWxlIiwiY2VsbENsYXNzZXMiLCJ0aXRsZSIsInRleHRBbGlnbiIsImN1c3RvbUNsaWNrIiwib25DbGljayIsIm9uQ3VzdG9tRmlsdGVyIiwidHlwZSIsImNoaWxkcmVuIiwic29ydEVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzRHVtbXlGaWVsZCIsImZvcm1hdHRlciIsImZvcm1hdEV4dHJhRGF0YSIsImFueSIsImV2ZW50cyIsImFsaWduIiwiYXR0cnMiLCJzb3J0RnVuYyIsImVkaXRvciIsImVkaXRhYmxlIiwiZWRpdENlbGxTdHlsZSIsImVkaXRDZWxsQ2xhc3NlcyIsImVkaXRvclN0eWxlIiwiZWRpdG9yQ2xhc3NlcyIsImVkaXRvclJlbmRlcmVyIiwidmFsaWRhdG9yIiwiZmlsdGVyVmFsdWUiLCJudW1iZXIiLCJTb3J0U3ltYm9sIiwiU29ydENhcmV0Iiwib3JkZXJDbGFzcyIsImRyb3B1cCIsIkNoZWNrQm94IiwiY2hlY2tlZCIsImluZGV0ZXJtaW5hdGUiLCJpbnB1dCIsIlNlbGVjdGlvbkhlYWRlckNlbGwiLCJoYW5kbGVDaGVja0JveENsaWNrIiwiYmluZCIsIm5leHRQcm9wcyIsImNoZWNrZWRTdGF0dXMiLCJpc1VuU2VsZWN0IiwiY29udGVudCIsImFueUV4cGFuZHMiLCJDYXB0aW9uIiwiQm9keSIsInNlbGVjdGVkUm93S2V5cyIsImluZGljYXRpb24iLCJub25FZGl0YWJsZVJvd3MiLCJrZXkiLCJpbmRleE9mIiwic2VsZWN0ZWRTdHlsZSIsInNlbGVjdGVkQ2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsInNlbGVjdGFibGUiLCJleHBhbmRhYmxlIiwicHVzaCIsIlJvdyIsInJvd0luZGV4IiwiZWRpdGFibGVSb3ciLCJvblN0YXJ0IiwiRWRpdGluZ0NlbGwiLCJlZGl0aW5nUm93SWR4IiwicmlkeCIsImVkaXRpbmdDb2xJZHgiLCJjaWR4IiwiQ0xJQ0tfVE9fQ0VMTF9FRElUIiwiREJDTElDS19UT19DRUxMX0VESVQiLCJyZXN0IiwidHJBdHRycyIsImRlbGVnYXRlIiwiZWRpdENlbGxzdHlsZSIsImVkaXRDZWxsY2xhc3NlcyIsImNlbGxUaXRsZSIsIkNlbGwiLCJoYW5kbGVFZGl0aW5nQ2VsbCIsInNob3VsZFVwZGF0ZSIsImlzRXF1YWwiLCJjb2x1bW5JbmRleCIsImRiY2xpY2tUb0VkaXQiLCJjdXN0b21EYkNsaWNrIiwib25Eb3VibGVDbGljayIsIlNlbGVjdGlvbkNlbGwiLCJoYW5kbGVDbGljayIsImlucHV0VHlwZSIsInJvd0tleSIsImRpc2FibGVkIiwiRXhwYW5kQ2VsbCIsImNsaWNrTnVtIiwiY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciIsImNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyIiwiY2IiLCJERUxBWV9GT1JfREJDTElDSyIsImNsaWNrRm4iLCJuZXdBdHRycyIsImZvckVhY2giLCJhdHRyIiwiRXh0ZW5kQmFzZSIsIkV4cGFuZFJvdyIsIlJvd1NlY3Rpb24iLCJjb2xTcGFuIiwib3B0aW9ucyIsImluY2x1ZGVTZWxlY3RDb2x1bW4iLCJjb2x1bW5MZW4iLCJjIiwid2l0aENvbnRleHQiLCJEYXRhQ29udGV4dCIsImNvbCIsIlNvcnRDb250ZXh0IiwiaXNSZW1vdGVTb3J0IiwiaGFuZGxlUmVtb3RlU29ydENoYW5nZSIsIlNlbGVjdGlvbkNvbnRleHQiLCJSb3dFeHBhbmRDb250ZXh0IiwiQ2VsbEVkaXRDb250ZXh0IiwiaXNSZW1vdGVDZWxsRWRpdCIsImhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UiLCJGaWx0ZXJDb250ZXh0IiwiaXNSZW1vdGVGaWx0ZXJpbmciLCJoYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UiLCJQYWdpbmF0aW9uQ29udGV4dCIsImlzUmVtb3RlUGFnaW5hdGlvbiIsImhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UiLCJTZWFyY2hDb250ZXh0IiwiaXNSZW1vdGVTZWFyY2giLCJoYW5kbGVSZW1vdGVTZWFyY2hDaGFuZ2UiLCJyb290UHJvcHMiLCJjZWxsRWRpdFByb3BzIiwiZmlsdGVyUHJvcHMiLCJzZWFyY2hQcm9wcyIsInNvcnRQcm9wcyIsInBhZ2luYXRpb25Qcm9wcyIsImV4cGFuZFByb3BzIiwic2VsZWN0aW9uUHJvcHMiLCJiYXNlIiwiYmFzZVByb3BzIiwicGFnaW5hdGlvbkNvbnRleHQiLCJuIiwic29ydENvbnRleHQiLCJmaWx0ZXJDb250ZXh0IiwicmVuZGVyQmFzZSIsInJlbmRlcldpdGhTZWxlY3Rpb25DdHgiLCJyZW5kZXJXaXRoUm93RXhwYW5kQ3R4IiwicmVuZGVyV2l0aFBhZ2luYXRpb25DdHgiLCJyZW5kZXJXaXRoU29ydEN0eCIsInJlbmRlcldpdGhTZWFyY2hDdHgiLCJyZW5kZXJXaXRoRmlsdGVyQ3R4IiwicmVuZGVyV2l0aENlbGxFZGl0Q3R4IiwiRGF0YVByb3ZpZGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJkYXRhT3BlcmF0b3IiLCJoYW5kbGVTb3J0Q2hhbmdlIiwiU29ydFByb3ZpZGVyIiwic29ydENvbHVtbiIsInNvcnRDb2x1bW5zIiwiaGFuZGxlU29ydCIsIkNvbXBvbmVudCIsIm5leHRPcmRlciIsIlNlbGVjdGlvblByb3ZpZGVyIiwiaGFuZGxlUm93U2VsZWN0IiwiY3VyclNlbGVjdGVkIiwiaGFuZGxlQWxsUm93c1NlbGVjdCIsImNvbmNhdCIsInMiLCJnZXRTZWxlY3RlZCIsIlJvd0V4cGFuZFByb3ZpZGVyIiwiaGFuZGxlUm93RXhwYW5kIiwiY3VyckV4cGFuZGVkIiwiaGFuZGxlQWxsUm93RXhwYW5kIiwiZXhwYW5kQWxsIiwiZXhwYW5kYWJsZUtleXMiLCJnZXRFeHBhbmRlZFJvd3MiLCJnZXROZXdlc3RTdGF0ZSIsInBhZ2UiLCJzaXplUGVyUGFnZSIsImZpbHRlcnMiLCJjdXJyRmlsdGVycyIsImN1cnJQYWdlIiwiY3VyclNpemVQZXJQYWdlIiwibmV3U3RhdGUiLCJwYWdlU3RhcnRJbmRleCIsInJvd0lkIiwibmV3VmFsdWUiLCJyb3dzIiwic2VsZWN0aW9uIiwiZXhwYW5kIiwibXV0YXRlIiwiZWRpdENlbGwiLCJjb21wYXJhdG9yIiwibG9jYWxlQ29tcGFyZSIsIl9kYXRhIiwidmFsdWVBIiwidmFsdWVCIiwiY3VycmVudFNvcnRDb2x1bW4iLCJkZWZhdWx0T3JkZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBRUEsUUFBSWpMLFFBQUosRUFBYztBQUNaak0sZUFBU2lNLFNBQVNnTCxNQUFULEVBQWlCQyxNQUFqQixFQUF5QmpSLFNBQXpCLEVBQW9DNEMsU0FBcEMsRUFBK0NwSSxDQUEvQyxFQUFrREMsQ0FBbEQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUl1RixjQUFjLGdCQUFNakgsU0FBeEIsRUFBbUM7QUFDakNnQixpQkFBUzhXLFdBQVdHLE1BQVgsRUFBbUJDLE1BQW5CLENBQVQ7QUFDRCxPQUZELE1BRU87QUFDTGxYLGlCQUFTOFcsV0FBV0ksTUFBWCxFQUFtQkQsTUFBbkIsQ0FBVDtBQUNEO0FBQ0Y7QUFDRCxXQUFPalgsTUFBUDtBQUNELEdBakJEO0FBa0JBLFNBQU9nWCxLQUFQO0FBQ0QsQ0FyQk07O0FBdUJBLElBQU1qQyxnQ0FBWSxTQUFaQSxTQUFZLENBQ3ZCb0MsaUJBRHVCLFNBSXBCO0FBQUEsTUFGRGxSLFNBRUMsU0FGREEsU0FFQztBQUFBLE1BRlUwTyxVQUVWLFNBRlVBLFVBRVY7QUFBQSxNQURIeUMsWUFDRyx1RUFEWSxnQkFBTXBZLFNBQ2xCOztBQUNILE1BQUksQ0FBQzJWLFVBQUQsSUFBZXdDLGtCQUFrQnRPLFNBQWxCLEtBQWdDOEwsV0FBVzlMLFNBQTlELEVBQXlFLE9BQU91TyxZQUFQO0FBQ3pFLFNBQU9uUixjQUFjLGdCQUFNakgsU0FBcEIsR0FBZ0MsZ0JBQU1ELFFBQXRDLEdBQWlELGdCQUFNQyxTQUE5RDtBQUNELENBUE0sQyIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAtdGFibGUyL2Rpc3QvcmVhY3QtYm9vdHN0cmFwLXRhYmxlLW5leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFhNTUzMWIyZTEzYjI2NzIzZDkzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNPUlRfQVNDOiAnYXNjJyxcbiAgU09SVF9ERVNDOiAnZGVzYycsXG4gIFJPV19TRUxFQ1RfU0lOR0xFOiAncmFkaW8nLFxuICBST1dfU0VMRUNUX01VTFRJUExFOiAnY2hlY2tib3gnLFxuICBST1dfU0VMRUNUX0RJU0FCTEVEOiAnUk9XX1NFTEVDVF9ESVNBQkxFRCcsXG4gIENIRUNLQk9YX1NUQVRVU19DSEVDS0VEOiAnY2hlY2tlZCcsXG4gIENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFOiAnaW5kZXRlcm1pbmF0ZScsXG4gIENIRUNLQk9YX1NUQVRVU19VTkNIRUNLRUQ6ICd1bmNoZWNrZWQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29uc3QuanMiLCIvKiBlc2xpbnQgbm8tZW1wdHk6IDAgKi9cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHByZWZlci1yZXN0LXBhcmFtczogMCAqL1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmZ1bmN0aW9uIHNwbGl0TmVzdGVkKHN0cikge1xuICByZXR1cm4gW3N0cl1cbiAgICAuam9pbignLicpXG4gICAgLnJlcGxhY2UoL1xcWy9nLCAnLicpXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcbiAgICAuc3BsaXQoJy4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgZmllbGQpIHtcbiAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXROZXN0ZWQoZmllbGQpO1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIHJlc3VsdCA9IHBhdGhBcnJheS5yZWR1Y2UoKGN1cnIsIHBhdGgpID0+IGN1cnJbcGF0aF0sIHRhcmdldCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIGZpZWxkLCB2YWx1ZSwgc2FmZSA9IGZhbHNlKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgcGF0aEFycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xuICAgIGxldmVsICs9IDE7XG4gICAgaWYgKHR5cGVvZiBhW2JdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFzYWZlKSB0aHJvdyBuZXcgRXJyb3IoYCR7YX0uJHtifSBpcyB1bmRlZmluZWRgKTtcbiAgICAgIGFbYl0gPSB7fTtcbiAgICAgIHJldHVybiBhW2JdO1xuICAgIH1cblxuICAgIGlmIChsZXZlbCA9PT0gcGF0aEFycmF5Lmxlbmd0aCkge1xuICAgICAgYVtiXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYVtiXTtcbiAgfSwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmopIHtcbiAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKGZuLCBtcykge1xuICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiBmbigpLCBtcyk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dDtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCB8fCAwKTtcblxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKF8sIHsgZ2V0LCBzZXQsIGlzRGVmaW5lZCwgaXNFbXB0eU9iamVjdCwgc2xlZXAsIGRlYm91bmNlIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQm9vdHN0cmFwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBib290c3RyYXA0OiBmYWxzZVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9ib290c3RyYXAuanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuZXhwb3J0IGNvbnN0IG1hdGNoUm93ID0gKGtleUZpZWxkLCBpZCkgPT4gcm93ID0+IHJvd1trZXlGaWVsZF0gPT09IGlkO1xuXG5leHBvcnQgY29uc3QgZ2V0Um93QnlSb3dJZCA9IChkYXRhLCBrZXlGaWVsZCwgaWQpID0+IGRhdGEuZmluZChtYXRjaFJvdyhrZXlGaWVsZCwgaWQpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3Jvd3MuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGlvblN1bW1hcnkgPSAoXG4gIGRhdGEsXG4gIGtleUZpZWxkLFxuICBzZWxlY3RlZCA9IFtdXG4pID0+IHtcbiAgbGV0IGFsbFJvd3NTZWxlY3RlZCA9IHRydWU7XG4gIGxldCBhbGxSb3dzTm90U2VsZWN0ZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHJvd0tleXMgPSBkYXRhLm1hcChkID0+IGRba2V5RmllbGRdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY3VyciA9IHJvd0tleXNbaV07XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RlZC5maW5kKHggPT4geCA9PT0gY3VycikgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsUm93c05vdFNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIGFsbFJvd3NOb3RTZWxlY3RlZFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGFibGVLZXlzID0gKGRhdGEsIGtleUZpZWxkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZGF0YS5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbiAgfVxuICByZXR1cm4gZGF0YVxuICAgIC5maWx0ZXIocm93ID0+ICFza2lwcy5pbmNsdWRlcyhfLmdldChyb3csIGtleUZpZWxkKSkpXG4gICAgLm1hcChyb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuU2VsZWN0YWJsZUtleXMgPSAoc2VsZWN0ZWQsIHNraXBzID0gW10pID0+IHtcbiAgaWYgKHNraXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHggPT4gc2tpcHMuaW5jbHVkZXMoeCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUm93cyA9IChkYXRhLCBrZXlGaWVsZCwgc2VsZWN0ZWQpID0+XG4gIHNlbGVjdGVkLm1hcChrID0+IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIGspKS5maWx0ZXIoeCA9PiAhIXgpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zZWxlY3Rpb24uanMiLCJpbXBvcnQgQm9vdHN0cmFwVGFibGUgZnJvbSAnLi9zcmMvYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuL3NyYy9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250ZXh0KEJvb3RzdHJhcFRhYmxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvaW5kZXguanMiLCIvKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgQ2FwdGlvbiBmcm9tICcuL2NhcHRpb24nO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5JztcbmltcG9ydCBQcm9wc0Jhc2VSZXNvbHZlciBmcm9tICcuL3Byb3BzLXJlc29sdmVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7IGdldFNlbGVjdGlvblN1bW1hcnkgfSBmcm9tICcuL3N0b3JlL3NlbGVjdGlvbic7XG5cbmNsYXNzIEJvb3RzdHJhcFRhYmxlIGV4dGVuZHMgUHJvcHNCYXNlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuICAgIGlmIChwcm9wcy5yZWdpc3RlckV4cG9zZWRBUEkpIHtcbiAgICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB0aGlzLmdldERhdGEoKTtcbiAgICAgIHByb3BzLnJlZ2lzdGVyRXhwb3NlZEFQSShnZXREYXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBFeHBvc2VkIEFQSXNcbiAgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgb3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgY29uc3QgTG9hZGluZ092ZXJsYXkgPSBvdmVybGF5KGxvYWRpbmcpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRpbmdPdmVybGF5PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJUYWJsZSgpIH1cbiAgICAgICAgPC9Mb2FkaW5nT3ZlcmxheT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclRhYmxlKCk7XG4gIH1cblxuICByZW5kZXJUYWJsZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgaWQsXG4gICAgICBjbGFzc2VzLFxuICAgICAgc3RyaXBlZCxcbiAgICAgIGhvdmVyLFxuICAgICAgYm9yZGVyZWQsXG4gICAgICBjb25kZW5zZWQsXG4gICAgICByZXNwb25zaXZlLFxuICAgICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICAgIGNhcHRpb24sXG4gICAgICByb3dTdHlsZSxcbiAgICAgIHJvd0NsYXNzZXMsXG4gICAgICB3cmFwcGVyQ2xhc3NlcyxcbiAgICAgIHJvd0V2ZW50cyxcbiAgICAgIHNlbGVjdGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiBjb25kZW5zZWQsXG4gICAgICAndGFibGUtcmVzcG9uc2l2ZSc6IHJlc3BvbnNpdmVcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGNvbnN0IGNlbGxTZWxlY3Rpb25JbmZvID0gdGhpcy5yZXNvbHZlU2VsZWN0Um93UHJvcHMoe1xuICAgICAgb25Sb3dTZWxlY3Q6IHRoaXMucHJvcHMub25Sb3dTZWxlY3RcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgYWxsUm93c1NlbGVjdGVkLCBhbGxSb3dzTm90U2VsZWN0ZWQgfSA9IGdldFNlbGVjdGlvblN1bW1hcnkoZGF0YSwga2V5RmllbGQsIHNlbGVjdGVkKTtcbiAgICBjb25zdCBoZWFkZXJDZWxsU2VsZWN0aW9uSW5mbyA9IHRoaXMucmVzb2x2ZVNlbGVjdFJvd1Byb3BzRm9ySGVhZGVyKHtcbiAgICAgIG9uQWxsUm93c1NlbGVjdDogdGhpcy5wcm9wcy5vbkFsbFJvd3NTZWxlY3QsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFibGVDYXB0aW9uID0gKGNhcHRpb24gJiYgPENhcHRpb24+eyBjYXB0aW9uIH08L0NhcHRpb24+KTtcbiAgICBjb25zdCBleHBhbmRSb3cgPSB0aGlzLnJlc29sdmVFeHBhbmRSb3dQcm9wcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFibGVXcmFwcGVyQ2xhc3MgfT5cbiAgICAgICAgPHRhYmxlIGlkPXsgaWQgfSBjbGFzc05hbWU9eyB0YWJsZUNsYXNzIH0+XG4gICAgICAgICAgeyB0YWJsZUNhcHRpb24gfVxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuaGVhZGVyQ2xhc3NlcyB9XG4gICAgICAgICAgICBzb3J0RmllbGQ9eyB0aGlzLnByb3BzLnNvcnRGaWVsZCB9XG4gICAgICAgICAgICBzb3J0T3JkZXI9eyB0aGlzLnByb3BzLnNvcnRPcmRlciB9XG4gICAgICAgICAgICBvblNvcnQ9eyB0aGlzLnByb3BzLm9uU29ydCB9XG4gICAgICAgICAgICBvbkZpbHRlcj17IHRoaXMucHJvcHMub25GaWx0ZXIgfVxuICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBoZWFkZXJDZWxsU2VsZWN0aW9uSW5mbyB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgaXNFbXB0eT17IHRoaXMuaXNFbXB0eSgpIH1cbiAgICAgICAgICAgIHZpc2libGVDb2x1bW5TaXplPXsgdGhpcy52aXNpYmxlQ29sdW1uU2l6ZSgpIH1cbiAgICAgICAgICAgIG5vRGF0YUluZGljYXRpb249eyBub0RhdGFJbmRpY2F0aW9uIH1cbiAgICAgICAgICAgIGNlbGxFZGl0PXsgdGhpcy5wcm9wcy5jZWxsRWRpdCB8fCB7fSB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBjZWxsU2VsZWN0aW9uSW5mbyB9XG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgcm93U3R5bGU9eyByb3dTdHlsZSB9XG4gICAgICAgICAgICByb3dDbGFzc2VzPXsgcm93Q2xhc3NlcyB9XG4gICAgICAgICAgICByb3dFdmVudHM9eyByb3dFdmVudHMgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvb3RzdHJhcFRhYmxlLnByb3BUeXBlcyA9IHtcbiAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVtb3RlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbFxuICB9KV0pLFxuICBub0RhdGFJbmRpY2F0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29uZGVuc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVzcG9uc2l2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNhcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2VsbEVkaXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLCBDb25zdC5ST1dfU0VMRUNUX01VTFRJUExFXSkuaXNSZXF1aXJlZCxcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvRWRpdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIG5vblNlbGVjdGFibGU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmNcbiAgfSksXG4gIG9uUm93U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXhwYW5kQWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub25FeHBhbmRhYmxlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0V4cGFuZENvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgb25Sb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkFsbFJvd0V4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzQW55RXhwYW5kczogUHJvcFR5cGVzLmJvb2wsXG4gIHJvd1N0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICByb3dFdmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJvd0NsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIGhlYWRlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgfSkpLFxuICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gSW5qZWN0IGZyb20gdG9vbGtpdFxuICBzZWFyY2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hDb250ZXh0OiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgc2V0RGVwZW5kZW5jeU1vZHVsZXM6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvb3RzdHJhcDQ6IGZhbHNlLFxuICByZW1vdGU6IGZhbHNlLFxuICBzdHJpcGVkOiBmYWxzZSxcbiAgYm9yZGVyZWQ6IHRydWUsXG4gIGhvdmVyOiBmYWxzZSxcbiAgY29uZGVuc2VkOiBmYWxzZSxcbiAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gIG5vRGF0YUluZGljYXRpb246IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9vdHN0cmFwLXRhYmxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuXG5pbXBvcnQgSGVhZGVyQ2VsbCBmcm9tICcuL2hlYWRlci1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25IZWFkZXJDZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24taGVhZGVyLWNlbGwnO1xuaW1wb3J0IEV4cGFuZEhlYWRlckNlbGwgZnJvbSAnLi9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbCc7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IFJPV19TRUxFQ1RfRElTQUJMRUQgfSA9IENvbnN0O1xuXG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29sdW1ucyxcbiAgICBvblNvcnQsXG4gICAgb25GaWx0ZXIsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgICBzZWxlY3RSb3csXG4gICAgb25FeHRlcm5hbEZpbHRlcixcbiAgICBleHBhbmRSb3csXG4gICAgYm9vdHN0cmFwNFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8dGhlYWQ+XG4gICAgICA8dHIgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG4gICAgICAgIHtcbiAgICAgICAgICAoZXhwYW5kUm93ICYmIGV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKVxuICAgICAgICAgICAgPyA8RXhwYW5kSGVhZGVyQ2VsbFxuICAgICAgICAgICAgICBvbkFsbFJvd0V4cGFuZD17IGV4cGFuZFJvdy5vbkFsbFJvd0V4cGFuZCB9XG4gICAgICAgICAgICAgIGFueUV4cGFuZHM9eyBleHBhbmRSb3cuaXNBbnlFeHBhbmRzIH1cbiAgICAgICAgICAgICAgcmVuZGVyZXI9eyBleHBhbmRSb3cuZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXIgfVxuICAgICAgICAgICAgLz4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIChzZWxlY3RSb3cubW9kZSAhPT0gUk9XX1NFTEVDVF9ESVNBQkxFRCAmJiAhc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pXG4gICAgICAgICAgICA/IDxTZWxlY3Rpb25IZWFkZXJDZWxsIHsgLi4uc2VsZWN0Um93IH0gLz4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGNvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghY29sdW1uLmhpZGRlbikge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyU29ydCA9IGNvbHVtbi5kYXRhRmllbGQgPT09IHNvcnRGaWVsZDtcbiAgICAgICAgICAgICAgY29uc3QgaXNMYXN0U29ydGluZyA9IGNvbHVtbi5kYXRhRmllbGQgPT09IHNvcnRGaWVsZDtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsXG4gICAgICAgICAgICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwND17IGJvb3RzdHJhcDQgfVxuICAgICAgICAgICAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgICAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgICAgICAgICAgb25Tb3J0PXsgb25Tb3J0IH1cbiAgICAgICAgICAgICAgICAgIHNvcnRpbmc9eyBjdXJyU29ydCB9XG4gICAgICAgICAgICAgICAgICBvbkZpbHRlcj17IG9uRmlsdGVyIH1cbiAgICAgICAgICAgICAgICAgIG9uRXh0ZXJuYWxGaWx0ZXI9eyBvbkV4dGVybmFsRmlsdGVyIH1cbiAgICAgICAgICAgICAgICAgIHNvcnRPcmRlcj17IHNvcnRPcmRlciB9XG4gICAgICAgICAgICAgICAgICBpc0xhc3RTb3J0aW5nPXsgaXNMYXN0U29ydGluZyB9XG4gICAgICAgICAgICAgICAgLz4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4cGFuZFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgYm9vdHN0cmFwNDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgU29ydFN5bWJvbCBmcm9tICcuL3NvcnQvc3ltYm9sJztcbmltcG9ydCBTb3J0Q2FyZXQgZnJvbSAnLi9zb3J0L2NhcmV0JztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5cbmNvbnN0IEhlYWRlckNlbGwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbixcbiAgICBpbmRleCxcbiAgICBvblNvcnQsXG4gICAgc29ydGluZyxcbiAgICBzb3J0T3JkZXIsXG4gICAgaXNMYXN0U29ydGluZyxcbiAgICBvbkZpbHRlcixcbiAgICBvbkV4dGVybmFsRmlsdGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdGV4dCxcbiAgICBzb3J0LFxuICAgIGZpbHRlcixcbiAgICBmaWx0ZXJSZW5kZXJlcixcbiAgICBoZWFkZXJUaXRsZSxcbiAgICBoZWFkZXJBbGlnbixcbiAgICBoZWFkZXJGb3JtYXR0ZXIsXG4gICAgaGVhZGVyRXZlbnRzLFxuICAgIGhlYWRlckNsYXNzZXMsXG4gICAgaGVhZGVyU3R5bGUsXG4gICAgaGVhZGVyQXR0cnMsXG4gICAgaGVhZGVyU29ydGluZ0NsYXNzZXMsXG4gICAgaGVhZGVyU29ydGluZ1N0eWxlXG4gIH0gPSBjb2x1bW47XG5cbiAgY29uc3QgY2VsbEF0dHJzID0ge1xuICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJBdHRycykgPyBoZWFkZXJBdHRycyhjb2x1bW4sIGluZGV4KSA6IGhlYWRlckF0dHJzLFxuICAgIC4uLmhlYWRlckV2ZW50c1xuICB9O1xuXG4gIGxldCBzb3J0U3ltYm9sO1xuICBsZXQgZmlsdGVyRWxtO1xuICBsZXQgY2VsbFN0eWxlID0ge307XG4gIGxldCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihoZWFkZXJDbGFzc2VzKSA/IGhlYWRlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBoZWFkZXJDbGFzc2VzO1xuXG4gIGlmIChoZWFkZXJTdHlsZSkge1xuICAgIGNlbGxTdHlsZSA9IF8uaXNGdW5jdGlvbihoZWFkZXJTdHlsZSkgPyBoZWFkZXJTdHlsZShjb2x1bW4sIGluZGV4KSA6IGhlYWRlclN0eWxlO1xuICB9XG5cbiAgaWYgKGhlYWRlclRpdGxlKSB7XG4gICAgY2VsbEF0dHJzLnRpdGxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclRpdGxlKSA/IGhlYWRlclRpdGxlKGNvbHVtbiwgaW5kZXgpIDogdGV4dDtcbiAgfVxuXG4gIGlmIChoZWFkZXJBbGlnbikge1xuICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oaGVhZGVyQWxpZ24pID8gaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleCkgOiBoZWFkZXJBbGlnbjtcbiAgfVxuXG4gIGlmIChzb3J0KSB7XG4gICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBjZWxsQXR0cnMub25DbGljaztcbiAgICBjZWxsQXR0cnMub25DbGljayA9IChlKSA9PiB7XG4gICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY3VzdG9tQ2xpY2spKSBjdXN0b21DbGljayhlKTtcbiAgICB9O1xuICAgIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCAnc29ydGFibGUnKTtcblxuICAgIGlmIChzb3J0aW5nKSB7XG4gICAgICBzb3J0U3ltYm9sID0gPFNvcnRDYXJldCBvcmRlcj17IHNvcnRPcmRlciB9IC8+O1xuXG4gICAgICAvLyBhcHBlbmQgY3VzdG9taXplZCBjbGFzc2VzIG9yIHN0eWxlIGlmIHRhYmxlIHdhcyBzb3J0aW5nIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbHVtbi5cbiAgICAgIGNlbGxDbGFzc2VzID0gY3MoXG4gICAgICAgIGNlbGxDbGFzc2VzLFxuICAgICAgICBfLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ0NsYXNzZXMpXG4gICAgICAgICAgPyBoZWFkZXJTb3J0aW5nQ2xhc3Nlcyhjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgOiBoZWFkZXJTb3J0aW5nQ2xhc3Nlc1xuICAgICAgKTtcblxuICAgICAgY2VsbFN0eWxlID0ge1xuICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgIC4uLl8uaXNGdW5jdGlvbihoZWFkZXJTb3J0aW5nU3R5bGUpXG4gICAgICAgICAgPyBoZWFkZXJTb3J0aW5nU3R5bGUoY29sdW1uLCBzb3J0T3JkZXIsIGlzTGFzdFNvcnRpbmcsIGluZGV4KVxuICAgICAgICAgIDogaGVhZGVyU29ydGluZ1N0eWxlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0U3ltYm9sID0gPFNvcnRTeW1ib2wgLz47XG4gICAgfVxuICB9XG5cbiAgaWYgKGNlbGxDbGFzc2VzKSBjZWxsQXR0cnMuY2xhc3NOYW1lID0gY3MoY2VsbEF0dHJzLmNsYXNzTmFtZSwgY2VsbENsYXNzZXMpO1xuICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgaWYgKGZpbHRlclJlbmRlcmVyKSB7XG4gICAgY29uc3Qgb25DdXN0b21GaWx0ZXIgPSBvbkV4dGVybmFsRmlsdGVyKGNvbHVtbiwgZmlsdGVyLnByb3BzLnR5cGUpO1xuICAgIGZpbHRlckVsbSA9IGZpbHRlclJlbmRlcmVyKG9uQ3VzdG9tRmlsdGVyLCBjb2x1bW4pO1xuICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgIGZpbHRlckVsbSA9IDxmaWx0ZXIuRmlsdGVyIHsgLi4uZmlsdGVyLnByb3BzIH0gb25GaWx0ZXI9eyBvbkZpbHRlciB9IGNvbHVtbj17IGNvbHVtbiB9IC8+O1xuICB9XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBoZWFkZXJGb3JtYXR0ZXIgP1xuICAgIGhlYWRlckZvcm1hdHRlcihjb2x1bW4sIGluZGV4LCB7IHNvcnRFbGVtZW50OiBzb3J0U3ltYm9sLCBmaWx0ZXJFbGVtZW50OiBmaWx0ZXJFbG0gfSkgOlxuICAgIHRleHQ7XG5cbiAgaWYgKGhlYWRlckZvcm1hdHRlcikge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIGNlbGxBdHRycywgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbiwgc29ydFN5bWJvbCwgZmlsdGVyRWxtKTtcbn07XG5cbkhlYWRlckNlbGwucHJvcFR5cGVzID0ge1xuICBjb2x1bW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlzRHVtbXlGaWVsZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoZWFkZXJGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0RXh0cmFEYXRhOiBQcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJUaXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlckV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBldmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaGVhZGVyQWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyQXR0cnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgYXR0cnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc29ydDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZWRpdG9yOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0Q2VsbFN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWxpZGF0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWx0ZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9BU0MsIENvbnN0LlNPUlRfREVTQ10pLFxuICBpc0xhc3RTb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5jb25zdCBTb3J0U3ltYm9sID0gKCkgPT4gKFxuICA8Qm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICB7XG4gICAgICAoeyBib290c3RyYXA0IH0pID0+IChib290c3RyYXA0ID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlci00XCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcHVwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApKVxuICAgIH1cbiAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvc3ltYm9sLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBCb290c3RyYXBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvYm9vdHN0cmFwJztcblxuXG5jb25zdCBTb3J0Q2FyZXQgPSAoeyBvcmRlciB9KSA9PiB7XG4gIGNvbnN0IG9yZGVyQ2xhc3MgPSBjcygncmVhY3QtYm9vdHN0cmFwLXRhYmxlLXNvcnQtb3JkZXInLCB7XG4gICAgZHJvcHVwOiBvcmRlciA9PT0gQ29uc3QuU09SVF9BU0NcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIHtcbiAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoYm9vdHN0cmFwNCA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBgY2FyZXQtNC0ke29yZGVyfWAgfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IG9yZGVyQ2xhc3MgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICApO1xufTtcblxuU29ydENhcmV0LnByb3BUeXBlcyA9IHtcbiAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9BU0MsIENvbnN0LlNPUlRfREVTQ10pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRDYXJldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjkuMVxuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxOCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIChgc2VsZmApIGluIHRoZSBicm93c2VyLCBgZ2xvYmFsYFxuICAvLyBvbiB0aGUgc2VydmVyLCBvciBgdGhpc2AgaW4gc29tZSB2aXJ0dWFsIG1hY2hpbmVzLiBXZSB1c2UgYHNlbGZgXG4gIC8vIGluc3RlYWQgb2YgYHdpbmRvd2AgZm9yIGBXZWJXb3JrZXJgIHN1cHBvcnQuXG4gIHZhciByb290ID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYgfHxcbiAgICAgICAgICAgIHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCB8fFxuICAgICAgICAgICAgdGhpcyB8fFxuICAgICAgICAgICAge307XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgU3ltYm9sUHJvdG8gPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbC5wcm90b3R5cGUgOiBudWxsO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXIgcHVzaCA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICAgIHNsaWNlID0gQXJyYXlQcm90by5zbGljZSxcbiAgICAgIHRvU3RyaW5nID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgICBoYXNPd25Qcm9wZXJ0eSA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgdmFyIG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgICAgbmF0aXZlS2V5cyA9IE9iamVjdC5rZXlzLFxuICAgICAgbmF0aXZlQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuICAvLyBOYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG4gIHZhciBDdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlaXIgb2xkIG1vZHVsZSBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdC5cbiAgLy8gKGBub2RlVHlwZWAgaXMgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBgbW9kdWxlYFxuICAvLyBhbmQgYGV4cG9ydHNgIGFyZSBub3QgSFRNTCBlbGVtZW50cy4pXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiAhZXhwb3J0cy5ub2RlVHlwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuOS4xJztcblxuICAvLyBJbnRlcm5hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZWZmaWNpZW50IChmb3IgY3VycmVudCBlbmdpbmVzKSB2ZXJzaW9uXG4gIC8vIG9mIHRoZSBwYXNzZWQtaW4gY2FsbGJhY2ssIHRvIGJlIHJlcGVhdGVkbHkgYXBwbGllZCBpbiBvdGhlciBVbmRlcnNjb3JlXG4gIC8vIGZ1bmN0aW9ucy5cbiAgdmFyIG9wdGltaXplQ2IgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHJldHVybiBmdW5jO1xuICAgIHN3aXRjaCAoYXJnQ291bnQgPT0gbnVsbCA/IDMgOiBhcmdDb3VudCkge1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgLy8gVGhlIDItYXJndW1lbnQgY2FzZSBpcyBvbWl0dGVkIGJlY2F1c2Ugd2XigJlyZSBub3QgdXNpbmcgaXQuXG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgYnVpbHRpbkl0ZXJhdGVlO1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNhbGxiYWNrcyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGVhY2hcbiAgLy8gZWxlbWVudCBpbiBhIGNvbGxlY3Rpb24sIHJldHVybmluZyB0aGUgZGVzaXJlZCByZXN1bHQg4oCUIGVpdGhlciBgaWRlbnRpdHlgLFxuICAvLyBhbiBhcmJpdHJhcnkgY2FsbGJhY2ssIGEgcHJvcGVydHkgbWF0Y2hlciwgb3IgYSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAgdmFyIGNiID0gZnVuY3Rpb24odmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKF8uaXRlcmF0ZWUgIT09IGJ1aWx0aW5JdGVyYXRlZSkgcmV0dXJuIF8uaXRlcmF0ZWUodmFsdWUsIGNvbnRleHQpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXy5pZGVudGl0eTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIG9wdGltaXplQ2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkgJiYgIV8uaXNBcnJheSh2YWx1ZSkpIHJldHVybiBfLm1hdGNoZXIodmFsdWUpO1xuICAgIHJldHVybiBfLnByb3BlcnR5KHZhbHVlKTtcbiAgfTtcblxuICAvLyBFeHRlcm5hbCB3cmFwcGVyIGZvciBvdXIgY2FsbGJhY2sgZ2VuZXJhdG9yLiBVc2VycyBtYXkgY3VzdG9taXplXG4gIC8vIGBfLml0ZXJhdGVlYCBpZiB0aGV5IHdhbnQgYWRkaXRpb25hbCBwcmVkaWNhdGUvaXRlcmF0ZWUgc2hvcnRoYW5kIHN0eWxlcy5cbiAgLy8gVGhpcyBhYnN0cmFjdGlvbiBoaWRlcyB0aGUgaW50ZXJuYWwtb25seSBhcmdDb3VudCBhcmd1bWVudC5cbiAgXy5pdGVyYXRlZSA9IGJ1aWx0aW5JdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNiKHZhbHVlLCBjb250ZXh0LCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gU29tZSBmdW5jdGlvbnMgdGFrZSBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIG9yIGEgZmV3IGV4cGVjdGVkXG4gIC8vIGFyZ3VtZW50cyBhdCB0aGUgYmVnaW5uaW5nIGFuZCB0aGVuIGEgdmFyaWFibGUgbnVtYmVyIG9mIHZhbHVlcyB0byBvcGVyYXRlXG4gIC8vIG9uLiBUaGlzIGhlbHBlciBhY2N1bXVsYXRlcyBhbGwgcmVtYWluaW5nIGFyZ3VtZW50cyBwYXN0IHRoZSBmdW5jdGlvbuKAmXNcbiAgLy8gYXJndW1lbnQgbGVuZ3RoIChvciBhbiBleHBsaWNpdCBgc3RhcnRJbmRleGApLCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lc1xuICAvLyB0aGUgbGFzdCBhcmd1bWVudC4gU2ltaWxhciB0byBFUzbigJlzIFwicmVzdCBwYXJhbWV0ZXJcIi5cbiAgdmFyIHJlc3RBcmd1bWVudHMgPSBmdW5jdGlvbihmdW5jLCBzdGFydEluZGV4KSB7XG4gICAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggPT0gbnVsbCA/IGZ1bmMubGVuZ3RoIC0gMSA6ICtzdGFydEluZGV4O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChhcmd1bWVudHMubGVuZ3RoIC0gc3RhcnRJbmRleCwgMCksXG4gICAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3RbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4ICsgc3RhcnRJbmRleF07XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCByZXN0KTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCByZXN0KTtcbiAgICAgIH1cbiAgICAgIHZhciBhcmdzID0gQXJyYXkoc3RhcnRJbmRleCArIDEpO1xuICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc3RhcnRJbmRleDsgaW5kZXgrKykge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICB9XG4gICAgICBhcmdzW3N0YXJ0SW5kZXhdID0gcmVzdDtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbiAgdmFyIGJhc2VDcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICBpZiAoIV8uaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICAgIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHNoYWxsb3dQcm9wZXJ0eSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9ialtrZXldO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhcyA9IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcGF0aCk7XG4gIH1cblxuICB2YXIgZGVlcEdldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGggPyBvYmogOiB2b2lkIDA7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZvciBjb2xsZWN0aW9uIG1ldGhvZHMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBjb2xsZWN0aW9uXG4gIC8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3QuXG4gIC8vIFJlbGF0ZWQ6IGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoXG4gIC8vIEF2b2lkcyBhIHZlcnkgbmFzdHkgaU9TIDggSklUIGJ1ZyBvbiBBUk0tNjQuICMyMDk0XG4gIHZhciBNQVhfQVJSQVlfSU5ERVggPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICB2YXIgZ2V0TGVuZ3RoID0gc2hhbGxvd1Byb3BlcnR5KCdsZW5ndGgnKTtcbiAgdmFyIGlzQXJyYXlMaWtlID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID49IDAgJiYgbGVuZ3RoIDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfTtcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIHJhdyBvYmplY3RzIGluIGFkZGl0aW9uIHRvIGFycmF5LWxpa2VzLiBUcmVhdHMgYWxsXG4gIC8vIHNwYXJzZSBhcnJheS1saWtlcyBhcyBpZiB0aGV5IHdlcmUgZGVuc2UuXG4gIF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBpLCBsZW5ndGg7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudC5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICByZXN1bHRzW2luZGV4XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24gaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG4gIHZhciBjcmVhdGVSZWR1Y2UgPSBmdW5jdGlvbihkaXIpIHtcbiAgICAvLyBXcmFwIGNvZGUgdGhhdCByZWFzc2lnbnMgYXJndW1lbnQgdmFyaWFibGVzIGluIGEgc2VwYXJhdGUgZnVuY3Rpb24gdGhhblxuICAgIC8vIHRoZSBvbmUgdGhhdCBhY2Nlc3NlcyBgYXJndW1lbnRzLmxlbmd0aGAgdG8gYXZvaWQgYSBwZXJmIGhpdC4gKCMxOTkxKVxuICAgIHZhciByZWR1Y2VyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgaW5pdGlhbCkge1xuICAgICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2tleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgICAgaW5kZXggKz0gZGlyO1xuICAgICAgfVxuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgICBtZW1vID0gaXRlcmF0ZWUobWVtbywgb2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMztcbiAgICAgIHJldHVybiByZWR1Y2VyKG9iaiwgb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgNCksIG1lbW8sIGluaXRpYWwpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGNyZWF0ZVJlZHVjZSgxKTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBjcmVhdGVSZWR1Y2UoLTEpO1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBrZXlGaW5kZXIgPSBpc0FycmF5TGlrZShvYmopID8gXy5maW5kSW5kZXggOiBfLmZpbmRLZXk7XG4gICAgdmFyIGtleSA9IGtleUZpbmRlcihvYmosIHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgaWYgKGtleSAhPT0gdm9pZCAwICYmIGtleSAhPT0gLTEpIHJldHVybiBvYmpba2V5XTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubmVnYXRlKGNiKHByZWRpY2F0ZSkpLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICBpZiAocHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIGl0ZW0gKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZXNgIGFuZCBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGVzID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCBpdGVtLCBmcm9tSW5kZXgsIGd1YXJkKSB7XG4gICAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSBfLnZhbHVlcyhvYmopO1xuICAgIGlmICh0eXBlb2YgZnJvbUluZGV4ICE9ICdudW1iZXInIHx8IGd1YXJkKSBmcm9tSW5kZXggPSAwO1xuICAgIHJldHVybiBfLmluZGV4T2Yob2JqLCBpdGVtLCBmcm9tSW5kZXgpID49IDA7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIHBhdGgsIGFyZ3MpIHtcbiAgICB2YXIgY29udGV4dFBhdGgsIGZ1bmM7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihwYXRoKSkge1xuICAgICAgZnVuYyA9IHBhdGg7XG4gICAgfSBlbHNlIGlmIChfLmlzQXJyYXkocGF0aCkpIHtcbiAgICAgIGNvbnRleHRQYXRoID0gcGF0aC5zbGljZSgwLCAtMSk7XG4gICAgICBwYXRoID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICB2YXIgbWV0aG9kID0gZnVuYztcbiAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgIGlmIChjb250ZXh0UGF0aCAmJiBjb250ZXh0UGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICBjb250ZXh0ID0gZGVlcEdldChjb250ZXh0LCBjb250ZXh0UGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgbWV0aG9kID0gY29udGV4dFtwYXRoXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXRob2QgPT0gbnVsbCA/IG1ldGhvZCA6IG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgXy5wcm9wZXJ0eShrZXkpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maW5kKG9iaiwgXy5tYXRjaGVyKGF0dHJzKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gLUluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSAtSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCB8fCB0eXBlb2YgaXRlcmF0ZWUgPT0gJ251bWJlcicgJiYgdHlwZW9mIG9ialswXSAhPSAnb2JqZWN0JyAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odiwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2LCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA+IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gLUluZmluaXR5ICYmIHJlc3VsdCA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPCByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodiwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IEluZmluaXR5ICYmIHJlc3VsdCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBTaHVmZmxlIGEgY29sbGVjdGlvbi5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uc2FtcGxlKG9iaiwgSW5maW5pdHkpO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYSBjb2xsZWN0aW9uIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSB7XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHZhciBzYW1wbGUgPSBpc0FycmF5TGlrZShvYmopID8gXy5jbG9uZShvYmopIDogXy52YWx1ZXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKHNhbXBsZSk7XG4gICAgbiA9IE1hdGgubWF4KE1hdGgubWluKG4sIGxlbmd0aCksIDApO1xuICAgIHZhciBsYXN0ID0gbGVuZ3RoIC0gMTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbjsgaW5kZXgrKykge1xuICAgICAgdmFyIHJhbmQgPSBfLnJhbmRvbShpbmRleCwgbGFzdCk7XG4gICAgICB2YXIgdGVtcCA9IHNhbXBsZVtpbmRleF07XG4gICAgICBzYW1wbGVbaW5kZXhdID0gc2FtcGxlW3JhbmRdO1xuICAgICAgc2FtcGxlW3JhbmRdID0gdGVtcDtcbiAgICB9XG4gICAgcmV0dXJuIHNhbXBsZS5zbGljZSgwLCBuKTtcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0ZWUuXG4gIF8uc29ydEJ5ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGluZGV4OiBpbmRleCsrLFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0ZWUodmFsdWUsIGtleSwgbGlzdClcbiAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgICAgdmFyIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgICBpZiAoYSA8IGIgfHwgYiA9PT0gdm9pZCAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdC5pbmRleCAtIHJpZ2h0LmluZGV4O1xuICAgIH0pLCAndmFsdWUnKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIGZvciBhZ2dyZWdhdGUgXCJncm91cCBieVwiIG9wZXJhdGlvbnMuXG4gIHZhciBncm91cCA9IGZ1bmN0aW9uKGJlaGF2aW9yLCBwYXJ0aXRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHBhcnRpdGlvbiA/IFtbXSwgW11dIDoge307XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldLnB1c2godmFsdWUpOyBlbHNlIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgfSk7XG5cbiAgLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBncm91cEJ5YCwgYnV0IGZvclxuICAvLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG4gIF8uaW5kZXhCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH0pO1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0rKzsgZWxzZSByZXN1bHRba2V5XSA9IDE7XG4gIH0pO1xuXG4gIHZhciByZVN0clN5bWJvbCA9IC9bXlxcdWQ4MDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkZmZmXS9nO1xuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAoXy5pc1N0cmluZyhvYmopKSB7XG4gICAgICAvLyBLZWVwIHN1cnJvZ2F0ZSBwYWlyIGNoYXJhY3RlcnMgdG9nZXRoZXJcbiAgICAgIHJldHVybiBvYmoubWF0Y2gocmVTdHJTeW1ib2wpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiBpc0FycmF5TGlrZShvYmopID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBwYXNzKSB7XG4gICAgcmVzdWx0W3Bhc3MgPyAwIDogMV0ucHVzaCh2YWx1ZSk7XG4gIH0sIHRydWUpO1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsID8gdm9pZCAwIDogW107XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5WzBdO1xuICAgIHJldHVybiBfLmluaXRpYWwoYXJyYXksIGFycmF5Lmxlbmd0aCAtIG4pO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGxhc3QgZW50cnkgb2YgdGhlIGFycmF5LiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuICAvLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuICAvLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gKG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKSkpO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS5cbiAgXy5sYXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwgfHwgYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIG4gPT0gbnVsbCA/IHZvaWQgMCA6IFtdO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gXy5yZXN0KGFycmF5LCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSBuKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgQm9vbGVhbik7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBzdHJpY3QsIG91dHB1dCkge1xuICAgIG91dHB1dCA9IG91dHB1dCB8fCBbXTtcbiAgICB2YXIgaWR4ID0gb3V0cHV0Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGlucHV0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAgIC8vIEZsYXR0ZW4gY3VycmVudCBsZXZlbCBvZiBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0LlxuICAgICAgICBpZiAoc2hhbGxvdykge1xuICAgICAgICAgIHZhciBqID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlIChqIDwgbGVuKSBvdXRwdXRbaWR4KytdID0gdmFsdWVbaisrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBzdHJpY3QsIG91dHB1dCk7XG4gICAgICAgICAgaWR4ID0gb3V0cHV0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc3RyaWN0KSB7XG4gICAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIGZhbHNlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgb3RoZXJBcnJheXMpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBvdGhlckFycmF5cyk7XG4gIH0pO1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gVGhlIGZhc3RlciBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGFuIGl0ZXJhdGVlIGlmIHRoZSBpdGVyYXRlZVxuICAvLyBpcyBub3QgYSBvbmUtdG8tb25lIGZ1bmN0aW9uLCBzbyBwcm92aWRpbmcgYW4gaXRlcmF0ZWUgd2lsbCBkaXNhYmxlXG4gIC8vIHRoZSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBBbGlhc2VkIGFzIGB1bmlxdWVgLlxuICBfLnVuaXEgPSBfLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIV8uaXNCb29sZWFuKGlzU29ydGVkKSkge1xuICAgICAgY29udGV4dCA9IGl0ZXJhdGVlO1xuICAgICAgaXRlcmF0ZWUgPSBpc1NvcnRlZDtcbiAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpdGVyYXRlZSAhPSBudWxsKSBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcnJheVtpXSxcbiAgICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUsIGksIGFycmF5KSA6IHZhbHVlO1xuICAgICAgaWYgKGlzU29ydGVkICYmICFpdGVyYXRlZSkge1xuICAgICAgICBpZiAoIWkgfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoc2VlbiwgY29tcHV0ZWQpKSB7XG4gICAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIV8uY29udGFpbnMocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXlzKSB7XG4gICAgcmV0dXJuIF8udW5pcShmbGF0dGVuKGFycmF5cywgdHJ1ZSwgdHJ1ZSkpO1xuICB9KTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgICBpZiAoXy5jb250YWlucyhyZXN1bHQsIGl0ZW0pKSBjb250aW51ZTtcbiAgICAgIHZhciBqO1xuICAgICAgZm9yIChqID0gMTsgaiA8IGFyZ3NMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoaiA9PT0gYXJnc0xlbmd0aCkgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5LCByZXN0KSB7XG4gICAgcmVzdCA9IGZsYXR0ZW4ocmVzdCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBDb21wbGVtZW50IG9mIF8uemlwLiBVbnppcCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyBhbmQgZ3JvdXBzXG4gIC8vIGVhY2ggYXJyYXkncyBlbGVtZW50cyBvbiBzaGFyZWQgaW5kaWNlcy5cbiAgXy51bnppcCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ICYmIF8ubWF4KGFycmF5LCBnZXRMZW5ndGgpLmxlbmd0aCB8fCAwO1xuICAgIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IF8ucGx1Y2soYXJyYXksIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IHJlc3RBcmd1bWVudHMoXy51bnppcCk7XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBQYXNzaW5nIGJ5IHBhaXJzIGlzIHRoZSByZXZlcnNlIG9mIF8ucGFpcnMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgobGlzdCk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpbmRJbmRleCBhbmQgZmluZExhc3RJbmRleCBmdW5jdGlvbnMuXG4gIHZhciBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlciA9IGZ1bmN0aW9uKGRpcikge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICB2YXIgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3QuXG4gIF8uZmluZEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoMSk7XG4gIF8uZmluZExhc3RJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKC0xKTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0ZWUob2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuICAgICAgaWYgKGl0ZXJhdGVlKGFycmF5W21pZF0pIDwgdmFsdWUpIGxvdyA9IG1pZCArIDE7IGVsc2UgaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBpbmRleE9mIGFuZCBsYXN0SW5kZXhPZiBmdW5jdGlvbnMuXG4gIHZhciBjcmVhdGVJbmRleEZpbmRlciA9IGZ1bmN0aW9uKGRpciwgcHJlZGljYXRlRmluZCwgc29ydGVkSW5kZXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlkeCkge1xuICAgICAgdmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgaWYgKHR5cGVvZiBpZHggPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGRpciA+IDApIHtcbiAgICAgICAgICBpID0gaWR4ID49IDAgPyBpZHggOiBNYXRoLm1heChpZHggKyBsZW5ndGgsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlbmd0aCA9IGlkeCA+PSAwID8gTWF0aC5taW4oaWR4ICsgMSwgbGVuZ3RoKSA6IGlkeCArIGxlbmd0aCArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydGVkSW5kZXggJiYgaWR4ICYmIGxlbmd0aCkge1xuICAgICAgICBpZHggPSBzb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpZHhdID09PSBpdGVtID8gaWR4IDogLTE7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICBpZHggPSBwcmVkaWNhdGVGaW5kKHNsaWNlLmNhbGwoYXJyYXksIGksIGxlbmd0aCksIF8uaXNOYU4pO1xuICAgICAgICByZXR1cm4gaWR4ID49IDAgPyBpZHggKyBpIDogLTE7XG4gICAgICB9XG4gICAgICBmb3IgKGlkeCA9IGRpciA+IDAgPyBpIDogbGVuZ3RoIC0gMTsgaWR4ID49IDAgJiYgaWR4IDwgbGVuZ3RoOyBpZHggKz0gZGlyKSB7XG4gICAgICAgIGlmIChhcnJheVtpZHhdID09PSBpdGVtKSByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhbiBpdGVtIGluIGFuIGFycmF5LFxuICAvLyBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuICAvLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbiAgLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbiAgXy5pbmRleE9mID0gY3JlYXRlSW5kZXhGaW5kZXIoMSwgXy5maW5kSW5kZXgsIF8uc29ydGVkSW5kZXgpO1xuICBfLmxhc3RJbmRleE9mID0gY3JlYXRlSW5kZXhGaW5kZXIoLTEsIF8uZmluZExhc3RJbmRleCk7XG5cbiAgLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuICAvLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuICAvLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuICBfLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoc3RvcCA9PSBudWxsKSB7XG4gICAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICBzdGVwID0gc3RvcCA8IHN0YXJ0ID8gLTEgOiAxO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gICAgdmFyIHJhbmdlID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGxlbmd0aDsgaWR4KyssIHN0YXJ0ICs9IHN0ZXApIHtcbiAgICAgIHJhbmdlW2lkeF0gPSBzdGFydDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLy8gQ2h1bmsgYSBzaW5nbGUgYXJyYXkgaW50byBtdWx0aXBsZSBhcnJheXMsIGVhY2ggY29udGFpbmluZyBgY291bnRgIG9yIGZld2VyXG4gIC8vIGl0ZW1zLlxuICBfLmNodW5rID0gZnVuY3Rpb24oYXJyYXksIGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID09IG51bGwgfHwgY291bnQgPCAxKSByZXR1cm4gW107XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICByZXN1bHQucHVzaChzbGljZS5jYWxsKGFycmF5LCBpLCBpICs9IGNvdW50KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZXhlY3V0ZSBhIGZ1bmN0aW9uIGFzIGEgY29uc3RydWN0b3JcbiAgLy8gb3IgYSBub3JtYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICB2YXIgZXhlY3V0ZUJvdW5kID0gZnVuY3Rpb24oc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICAgIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgdmFyIHNlbGYgPSBiYXNlQ3JlYXRlKHNvdXJjZUZ1bmMucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICBpZiAoXy5pc09iamVjdChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCBjb250ZXh0LCBhcmdzKSB7XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvbicpO1xuICAgIHZhciBib3VuZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oY2FsbEFyZ3MpIHtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIGNvbnRleHQsIHRoaXMsIGFyZ3MuY29uY2F0KGNhbGxBcmdzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9KTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBfIGFjdHNcbiAgLy8gYXMgYSBwbGFjZWhvbGRlciBieSBkZWZhdWx0LCBhbGxvd2luZyBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzIHRvIGJlXG4gIC8vIHByZS1maWxsZWQuIFNldCBgXy5wYXJ0aWFsLnBsYWNlaG9sZGVyYCBmb3IgYSBjdXN0b20gcGxhY2Vob2xkZXIgYXJndW1lbnQuXG4gIF8ucGFydGlhbCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgYm91bmRBcmdzKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0gXy5wYXJ0aWFsLnBsYWNlaG9sZGVyO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gMCwgbGVuZ3RoID0gYm91bmRBcmdzLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJnc1tpXSA9IGJvdW5kQXJnc1tpXSA9PT0gcGxhY2Vob2xkZXIgPyBhcmd1bWVudHNbcG9zaXRpb24rK10gOiBib3VuZEFyZ3NbaV07XG4gICAgICB9XG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIHRoaXMsIHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9KTtcblxuICBfLnBhcnRpYWwucGxhY2Vob2xkZXIgPSBfO1xuXG4gIC8vIEJpbmQgYSBudW1iZXIgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gUmVtYWluaW5nIGFyZ3VtZW50c1xuICAvLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3NcbiAgLy8gZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIGtleXMgPSBmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgdmFyIGluZGV4ID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGluZGV4IDwgMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgIG9ialtrZXldID0gXy5iaW5kKG9ialtrZXldLCBvYmopO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW9pemUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgICB2YXIgYWRkcmVzcyA9ICcnICsgKGhhc2hlciA/IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDoga2V5KTtcbiAgICAgIGlmICghaGFzKGNhY2hlLCBhZGRyZXNzKSkgY2FjaGVbYWRkcmVzc10gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gY2FjaGVbYWRkcmVzc107XG4gICAgfTtcbiAgICBtZW1vaXplLmNhY2hlID0ge307XG4gICAgcmV0dXJuIG1lbW9pemU7XG4gIH07XG5cbiAgLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICAvLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gIF8uZGVsYXkgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGFyZ3MpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIHdhaXQpO1xuICB9KTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IF8ucGFydGlhbChfLmRlbGF5LCBfLCAxKTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIHRpbWVvdXQsIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogXy5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gXy5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhyb3R0bGVkLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgcHJldmlvdXMgPSAwO1xuICAgICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRocm90dGxlZDtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgcmVzdWx0O1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oY29udGV4dCwgYXJncykge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoYXJncykgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgdmFyIGRlYm91bmNlZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJncykge1xuICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgdmFyIGNhbGxOb3cgPSAhdGltZW91dDtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICBpZiAoY2FsbE5vdykgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVvdXQgPSBfLmRlbGF5KGxhdGVyLCB3YWl0LCB0aGlzLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGRlYm91bmNlZC5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVib3VuY2VkO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gXy5wYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIHBhc3NlZC1pbiBwcmVkaWNhdGUuXG4gIF8ubmVnYXRlID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBzdGFydCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IHN0YXJ0O1xuICAgICAgdmFyIHJlc3VsdCA9IGFyZ3Nbc3RhcnRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB3aGlsZSAoaS0tKSByZXN1bHQgPSBhcmdzW2ldLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb24gYW5kIGFmdGVyIHRoZSBOdGggY2FsbC5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgdXAgdG8gKGJ1dCBub3QgaW5jbHVkaW5nKSB0aGUgTnRoIGNhbGwuXG4gIF8uYmVmb3JlID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICB2YXIgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA+IDApIHtcbiAgICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lcyA8PSAxKSBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IF8ucGFydGlhbChfLmJlZm9yZSwgMik7XG5cbiAgXy5yZXN0QXJndW1lbnRzID0gcmVzdEFyZ3VtZW50cztcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBLZXlzIGluIElFIDwgOSB0aGF0IHdvbid0IGJlIGl0ZXJhdGVkIGJ5IGBmb3Iga2V5IGluIC4uLmAgYW5kIHRodXMgbWlzc2VkLlxuICB2YXIgaGFzRW51bUJ1ZyA9ICF7dG9TdHJpbmc6IG51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuICB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4gIHZhciBjb2xsZWN0Tm9uRW51bVByb3BzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gICAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcHJvdG8gPSBfLmlzRnVuY3Rpb24oY29uc3RydWN0b3IpICYmIGNvbnN0cnVjdG9yLnByb3RvdHlwZSB8fCBPYmpQcm90bztcblxuICAgIC8vIENvbnN0cnVjdG9yIGlzIGEgc3BlY2lhbCBjYXNlLlxuICAgIHZhciBwcm9wID0gJ2NvbnN0cnVjdG9yJztcbiAgICBpZiAoaGFzKG9iaiwgcHJvcCkgJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIGtleXMucHVzaChwcm9wKTtcblxuICAgIHdoaWxlIChub25FbnVtSWR4LS0pIHtcbiAgICAgIHByb3AgPSBub25FbnVtZXJhYmxlUHJvcHNbbm9uRW51bUlkeF07XG4gICAgICBpZiAocHJvcCBpbiBvYmogJiYgb2JqW3Byb3BdICE9PSBwcm90b1twcm9wXSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkge1xuICAgICAgICBrZXlzLnB1c2gocHJvcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYC5cbiAgXy5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChoYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSBhbGwgdGhlIHByb3BlcnR5IG5hbWVzIG9mIGFuIG9iamVjdC5cbiAgXy5hbGxLZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvYmpba2V5c1tpXV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0ZWUgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBvYmplY3QuXG4gIC8vIEluIGNvbnRyYXN0IHRvIF8ubWFwIGl0IHJldHVybnMgYW4gb2JqZWN0LlxuICBfLm1hcE9iamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0cyA9IHt9O1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5c1tpbmRleF07XG4gICAgICByZXN1bHRzW2N1cnJlbnRLZXldID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgLy8gVGhlIG9wcG9zaXRlIG9mIF8ub2JqZWN0LlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHBhaXJzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWlyc1tpXSA9IFtrZXlzW2ldLCBvYmpba2V5c1tpXV1dO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnM7XG4gIH07XG5cbiAgLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuICBfLmludmVydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbb2JqW2tleXNbaV1dXSA9IGtleXNbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuICAvLyBBbGlhc2VkIGFzIGBtZXRob2RzYC5cbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhc3NpZ25lciBmdW5jdGlvbnMuXG4gIHZhciBjcmVhdGVBc3NpZ25lciA9IGZ1bmN0aW9uKGtleXNGdW5jLCBkZWZhdWx0cykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKGRlZmF1bHRzKSBvYmogPSBPYmplY3Qob2JqKTtcbiAgICAgIGlmIChsZW5ndGggPCAyIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgIGtleXMgPSBrZXlzRnVuYyhzb3VyY2UpLFxuICAgICAgICAgICAgbCA9IGtleXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmICghZGVmYXVsdHMgfHwgb2JqW2tleV0gPT09IHZvaWQgMCkgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cyk7XG5cbiAgLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIC8vIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduKVxuICBfLmV4dGVuZE93biA9IF8uYXNzaWduID0gY3JlYXRlQXNzaWduZXIoXy5rZXlzKTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBrZXkgb24gYW4gb2JqZWN0IHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3QuXG4gIF8uZmluZEtleSA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopLCBrZXk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAocHJlZGljYXRlKG9ialtrZXldLCBrZXksIG9iaikpIHJldHVybiBrZXk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEludGVybmFsIHBpY2sgaGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBgb2JqYCBoYXMga2V5IGBrZXlgLlxuICB2YXIga2V5SW5PYmogPSBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHtcbiAgICByZXR1cm4ga2V5IGluIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHZhciByZXN1bHQgPSB7fSwgaXRlcmF0ZWUgPSBrZXlzWzBdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBrZXlzWzFdKTtcbiAgICAgIGtleXMgPSBfLmFsbEtleXMob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBrZXlJbk9iajtcbiAgICAgIGtleXMgPSBmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgICBvYmogPSBPYmplY3Qob2JqKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gICAgdmFyIGl0ZXJhdGVlID0ga2V5c1swXSwgY29udGV4dDtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgICAgaXRlcmF0ZWUgPSBfLm5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSBjb250ZXh0ID0ga2V5c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IF8ubWFwKGZsYXR0ZW4oa2V5cywgZmFsc2UsIGZhbHNlKSwgU3RyaW5nKTtcbiAgICAgIGl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gIV8uY29udGFpbnMoa2V5cywga2V5KTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBfLnBpY2sob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG4gIH0pO1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMsIHRydWUpO1xuXG4gIC8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbiAgLy8gSWYgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBwcm92aWRlZCB0aGVuIHRoZXkgd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAgLy8gY3JlYXRlZCBvYmplY3QuXG4gIF8uY3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlLCBwcm9wcykge1xuICAgIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgaWYgKHByb3BzKSBfLmV4dGVuZE93bihyZXN1bHQsIHByb3BzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5pc01hdGNoID0gZnVuY3Rpb24ob2JqZWN0LCBhdHRycykge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKGF0dHJzKSwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgICB2YXIgb2JqID0gT2JqZWN0KG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0gfHwgIShrZXkgaW4gb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSwgZGVlcEVxO1xuICBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gYG51bGxgIG9yIGB1bmRlZmluZWRgIG9ubHkgZXF1YWwgdG8gaXRzZWxmIChzdHJpY3QgY29tcGFyaXNvbikuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgIGlmIChhICE9PSBhKSByZXR1cm4gYiAhPT0gYjtcbiAgICAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjayk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgZGVlcEVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiAnJyArIGEgPT09ICcnICsgYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOLlxuICAgICAgICBpZiAoK2EgIT09ICthKSByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3ltYm9sXSc6XG4gICAgICAgIHJldHVybiBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYSkgPT09IFN5bWJvbFByb3RvLnZhbHVlT2YuY2FsbChiKTtcbiAgICB9XG5cbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIGlmICghYXJlQXJyYXlzKSB7XG4gICAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgdmFyIGtleXMgPSBfLmtleXMoYSksIGtleTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgICAgaWYgKF8ua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICAgIGlmICghKGhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKTtcbiAgICBiU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYik7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4gIC8vIEFuIFwiZW1wdHlcIiBvYmplY3QgaGFzIG5vIGVudW1lcmFibGUgb3duLXByb3BlcnRpZXMuXG4gIF8uaXNFbXB0eSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikgJiYgKF8uaXNBcnJheShvYmopIHx8IF8uaXNTdHJpbmcob2JqKSB8fCBfLmlzQXJndW1lbnRzKG9iaikpKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICByZXR1cm4gXy5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbiAgXy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbiAgLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIEFycmF5LmlzQXJyYXlcbiAgXy5pc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuICBfLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLCBpc0Vycm9yLCBpc01hcCwgaXNXZWFrTWFwLCBpc1NldCwgaXNXZWFrU2V0LlxuICBfLmVhY2goWydBcmd1bWVudHMnLCAnRnVuY3Rpb24nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCcsICdFcnJvcicsICdTeW1ib2wnLCAnTWFwJywgJ1dlYWtNYXAnLCAnU2V0JywgJ1dlYWtTZXQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGhhcyhvYmosICdjYWxsZWUnKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLiBXb3JrIGFyb3VuZCBzb21lIHR5cGVvZiBidWdzIGluIG9sZCB2OCxcbiAgLy8gSUUgMTEgKCMxNjIxKSwgU2FmYXJpIDggKCMxOTI5KSwgYW5kIFBoYW50b21KUyAoIzIyMzYpLlxuICB2YXIgbm9kZWxpc3QgPSByb290LmRvY3VtZW50ICYmIHJvb3QuZG9jdW1lbnQuY2hpbGROb2RlcztcbiAgaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnICYmIHR5cGVvZiBub2RlbGlzdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gIV8uaXNTeW1ib2wob2JqKSAmJiBpc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xuICB9O1xuXG4gIC8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD9cbiAgXy5pc05hTiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLmlzTnVtYmVyKG9iaikgJiYgaXNOYU4ob2JqKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgIGlmICghXy5pc0FycmF5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gaGFzKG9iaiwgcGF0aCk7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gcGF0aFtpXTtcbiAgICAgIGlmIChvYmogPT0gbnVsbCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiAhIWxlbmd0aDtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdGVlcy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9ucy4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbiAgXy5jb25zdGFudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgXy5ub29wID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIHBhc3NlZCBhbiBvYmplY3QsIHdpbGwgdHJhdmVyc2UgdGhhdCBvYmplY3TigJlzXG4gIC8vIHByb3BlcnRpZXMgZG93biB0aGUgZ2l2ZW4gYHBhdGhgLCBzcGVjaWZpZWQgYXMgYW4gYXJyYXkgb2Yga2V5cyBvciBpbmRleGVzLlxuICBfLnByb3BlcnR5ID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIGlmICghXy5pc0FycmF5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gc2hhbGxvd1Byb3BlcnR5KHBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gZGVlcEdldChvYmosIHBhdGgpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gR2VuZXJhdGVzIGEgZnVuY3Rpb24gZm9yIGEgZ2l2ZW4gb2JqZWN0IHRoYXQgcmV0dXJucyBhIGdpdmVuIHByb3BlcnR5LlxuICBfLnByb3BlcnR5T2YgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpe307XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihwYXRoKSB7XG4gICAgICByZXR1cm4gIV8uaXNBcnJheShwYXRoKSA/IG9ialtwYXRoXSA6IGRlZXBHZXQob2JqLCBwYXRoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBwcmVkaWNhdGUgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZlxuICAvLyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5tYXRjaGVyID0gXy5tYXRjaGVzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBhdHRycyA9IF8uZXh0ZW5kT3duKHt9LCBhdHRycyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIF8uaXNNYXRjaChvYmosIGF0dHJzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRlZShpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gQSAocG9zc2libHkgZmFzdGVyKSB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyLlxuICBfLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcblxuICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZXNjYXBlTWFwID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjeDI3OycsXG4gICAgJ2AnOiAnJiN4NjA7J1xuICB9O1xuICB2YXIgdW5lc2NhcGVNYXAgPSBfLmludmVydChlc2NhcGVNYXApO1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgdmFyIGNyZWF0ZUVzY2FwZXIgPSBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWFwW21hdGNoXTtcbiAgICB9O1xuICAgIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZC5cbiAgICB2YXIgc291cmNlID0gJyg/OicgKyBfLmtleXMobWFwKS5qb2luKCd8JykgKyAnKSc7XG4gICAgdmFyIHRlc3RSZWdleHAgPSBSZWdFeHAoc291cmNlKTtcbiAgICB2YXIgcmVwbGFjZVJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UsICdnJyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgc3RyaW5nID0gc3RyaW5nID09IG51bGwgPyAnJyA6ICcnICsgc3RyaW5nO1xuICAgICAgcmV0dXJuIHRlc3RSZWdleHAudGVzdChzdHJpbmcpID8gc3RyaW5nLnJlcGxhY2UocmVwbGFjZVJlZ2V4cCwgZXNjYXBlcikgOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgXy5lc2NhcGUgPSBjcmVhdGVFc2NhcGVyKGVzY2FwZU1hcCk7XG4gIF8udW5lc2NhcGUgPSBjcmVhdGVFc2NhcGVyKHVuZXNjYXBlTWFwKTtcblxuICAvLyBUcmF2ZXJzZXMgdGhlIGNoaWxkcmVuIG9mIGBvYmpgIGFsb25nIGBwYXRoYC4gSWYgYSBjaGlsZCBpcyBhIGZ1bmN0aW9uLCBpdFxuICAvLyBpcyBpbnZva2VkIHdpdGggaXRzIHBhcmVudCBhcyBjb250ZXh0LiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmluYWxcbiAgLy8gY2hpbGQsIG9yIGBmYWxsYmFja2AgaWYgYW55IGNoaWxkIGlzIHVuZGVmaW5lZC5cbiAgXy5yZXN1bHQgPSBmdW5jdGlvbihvYmosIHBhdGgsIGZhbGxiYWNrKSB7XG4gICAgaWYgKCFfLmlzQXJyYXkocGF0aCkpIHBhdGggPSBbcGF0aF07XG4gICAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKGZhbGxiYWNrKSA/IGZhbGxiYWNrLmNhbGwob2JqKSA6IGZhbGxiYWNrO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcHJvcCA9IG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW3BhdGhbaV1dO1xuICAgICAgaWYgKHByb3AgPT09IHZvaWQgMCkge1xuICAgICAgICBwcm9wID0gZmFsbGJhY2s7XG4gICAgICAgIGkgPSBsZW5ndGg7IC8vIEVuc3VyZSB3ZSBkb24ndCBjb250aW51ZSBpdGVyYXRpbmcuXG4gICAgICB9XG4gICAgICBvYmogPSBfLmlzRnVuY3Rpb24ocHJvcCkgPyBwcm9wLmNhbGwob2JqKSA6IHByb3A7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZTogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZTogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiBcIidcIixcbiAgICAnXFxcXCc6ICdcXFxcJyxcbiAgICAnXFxyJzogJ3InLFxuICAgICdcXG4nOiAnbicsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5J1xuICB9O1xuXG4gIHZhciBlc2NhcGVSZWdFeHAgPSAvXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgdmFyIGVzY2FwZUNoYXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbiAgfTtcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICAvLyBOQjogYG9sZFNldHRpbmdzYCBvbmx5IGV4aXN0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVSZWdFeHAsIGVzY2FwZUNoYXIpO1xuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZnNldC5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArICdyZXR1cm4gX19wO1xcbic7XG5cbiAgICB2YXIgcmVuZGVyO1xuICAgIHRyeSB7XG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdmFyIGFyZ3VtZW50ID0gc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaic7XG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyBhcmd1bWVudCArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLiBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfKG9iaik7XG4gICAgaW5zdGFuY2UuX2NoYWluID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIGNoYWluUmVzdWx0ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9iaikge1xuICAgIHJldHVybiBpbnN0YW5jZS5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBfLmVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGNoYWluUmVzdWx0KHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gXztcbiAgfTtcblxuICAvLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG4gIF8ubWl4aW4oXyk7XG5cbiAgLy8gQWRkIGFsbCBtdXRhdG9yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09PSAnc2hpZnQnIHx8IG5hbWUgPT09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSBkZWxldGUgb2JqWzBdO1xuICAgICAgcmV0dXJuIGNoYWluUmVzdWx0KHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoYWluUmVzdWx0KHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgXy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgfTtcblxuICAvLyBQcm92aWRlIHVud3JhcHBpbmcgcHJveHkgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4gIC8vIHN1Y2ggYXMgYXJpdGhtZXRpYyBhbmQgSlNPTiBzdHJpbmdpZmljYXRpb24uXG4gIF8ucHJvdG90eXBlLnZhbHVlT2YgPSBfLnByb3RvdHlwZS50b0pTT04gPSBfLnByb3RvdHlwZS52YWx1ZTtcblxuICBfLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy5fd3JhcHBlZCk7XG4gIH07XG5cbiAgLy8gQU1EIHJlZ2lzdHJhdGlvbiBoYXBwZW5zIGF0IHRoZSBlbmQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQgbG9hZGVyc1xuICAvLyB0aGF0IG1heSBub3QgZW5mb3JjZSBuZXh0LXR1cm4gc2VtYW50aWNzIG9uIG1vZHVsZXMuIEV2ZW4gdGhvdWdoIGdlbmVyYWxcbiAgLy8gcHJhY3RpY2UgZm9yIEFNRCByZWdpc3RyYXRpb24gaXMgdG8gYmUgYW5vbnltb3VzLCB1bmRlcnNjb3JlIHJlZ2lzdGVyc1xuICAvLyBhcyBhIG5hbWVkIG1vZHVsZSBiZWNhdXNlLCBsaWtlIGpRdWVyeSwgaXQgaXMgYSBiYXNlIGxpYnJhcnkgdGhhdCBpc1xuICAvLyBwb3B1bGFyIGVub3VnaCB0byBiZSBidW5kbGVkIGluIGEgdGhpcmQgcGFydHkgbGliLCBidXQgbm90IGJlIHBhcnQgb2ZcbiAgLy8gYW4gQU1EIGxvYWQgcmVxdWVzdC4gVGhvc2UgY2FzZXMgY291bGQgZ2VuZXJhdGUgYW4gZXJyb3Igd2hlbiBhblxuICAvLyBhbm9ueW1vdXMgZGVmaW5lKCkgaXMgY2FsbGVkIG91dHNpZGUgb2YgYSBsb2FkZXIgcmVxdWVzdC5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCd1bmRlcnNjb3JlJywgW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF87XG4gICAgfSk7XG4gIH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tCb3ggPSAoeyBjbGFzc05hbWUsIGNoZWNrZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT4gKFxuICA8aW5wdXRcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICBjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuICAgIHJlZj17IChpbnB1dCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSBpbnB1dC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH0gfVxuICAgIG9uQ2hhbmdlPXsgKCkgPT4ge30gfVxuICAvPlxuKTtcblxuQ2hlY2tCb3gucHJvcFR5cGVzID0ge1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbkhlYWRlckNlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkU3RhdHVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQWxsUm93c1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGF2b2lkIHVwZGF0aW5nIGlmIGJ1dHRvbiBpc1xuICAgKiAxLiByYWRpb1xuICAgKiAyLiBzdGF0dXMgd2FzIG5vdCBjaGFuZ2VkLlxuICAgKi9cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgUk9XX1NFTEVDVF9TSU5HTEUgfSA9IENvbnN0O1xuICAgIGNvbnN0IHsgbW9kZSwgY2hlY2tlZFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChtb2RlID09PSBST1dfU0VMRUNUX1NJTkdMRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIG5leHRQcm9wcy5jaGVja2VkU3RhdHVzICE9PSBjaGVja2VkU3RhdHVzO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tCb3hDbGljayhlKSB7XG4gICAgY29uc3QgeyBvbkFsbFJvd3NTZWxlY3QsIGNoZWNrZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNVblNlbGVjdCA9XG4gICAgICBjaGVja2VkU3RhdHVzID09PSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCB8fFxuICAgICAgY2hlY2tlZFN0YXR1cyA9PT0gQ29uc3QuQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU7XG5cbiAgICBvbkFsbFJvd3NTZWxlY3QoZSwgaXNVblNlbGVjdCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQsIENIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFLCBST1dfU0VMRUNUX01VTFRJUExFXG4gICAgfSA9IENvbnN0O1xuXG4gICAgY29uc3QgeyBtb2RlLCBjaGVja2VkU3RhdHVzLCBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcblxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyIHx8IG1vZGUgPT09IFJPV19TRUxFQ1RfTVVMVElQTEUpIHtcbiAgICAgIGF0dHJzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9NVUxUSVBMRSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGJvb3RzdHJhcDQgPyAnc2VsZWN0aW9uLWlucHV0LTQnIDogJycgfVxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IGluZGV0ZXJtaW5hdGUgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dGggZGF0YS1yb3ctc2VsZWN0aW9uIHsgLi4uYXR0cnMgfT57IGNvbnRlbnQgfTwvdGg+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYW55RXhwYW5kczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkFsbFJvd0V4cGFuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDaGVja0JveENsaWNrID0gdGhpcy5oYW5kbGVDaGVja0JveENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGVja0JveENsaWNrKGUpIHtcbiAgICBjb25zdCB7IGFueUV4cGFuZHMsIG9uQWxsUm93RXhwYW5kIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25BbGxSb3dFeHBhbmQoZSwgIWFueUV4cGFuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYW55RXhwYW5kcywgcmVuZGVyZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2tcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0aCBkYXRhLXJvdy1zZWxlY3Rpb24geyAuLi5hdHRycyB9PlxuICAgICAgICB7XG4gICAgICAgICAgcmVuZGVyZXIgP1xuICAgICAgICAgICAgcmVuZGVyZXIoeyBpc0FueUV4cGFuZHM6IGFueUV4cGFuZHMgfSkgOlxuICAgICAgICAgICAgKGFueUV4cGFuZHMgPyAnKC0pJyA6ICcoKyknKVxuICAgICAgICB9XG4gICAgICA8L3RoPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLWhlYWRlci1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENhcHRpb24gPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPGNhcHRpb24+eyBwcm9wcy5jaGlsZHJlbiB9PC9jYXB0aW9uPlxuICApO1xufTtcblxuQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2FwdGlvbi5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO1xuaW1wb3J0IEV4cGFuZFJvdyBmcm9tICcuL3Jvdy1leHBhbmQvZXhwYW5kLXJvdyc7XG5pbXBvcnQgUm93U2VjdGlvbiBmcm9tICcuL3Jvdy1zZWN0aW9uJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY29uc3QgQm9keSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sdW1ucyxcbiAgICBkYXRhLFxuICAgIGtleUZpZWxkLFxuICAgIGlzRW1wdHksXG4gICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICBjZWxsRWRpdCxcbiAgICBzZWxlY3RSb3csXG4gICAgc2VsZWN0ZWRSb3dLZXlzLFxuICAgIHJvd1N0eWxlLFxuICAgIHJvd0NsYXNzZXMsXG4gICAgcm93RXZlbnRzLFxuICAgIGV4cGFuZFJvd1xuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGJnQ29sb3IsXG4gICAgbm9uU2VsZWN0YWJsZVxuICB9ID0gc2VsZWN0Um93O1xuXG4gIGxldCBjb250ZW50O1xuXG4gIGlmIChpc0VtcHR5KSB7XG4gICAgY29uc3QgaW5kaWNhdGlvbiA9IF8uaXNGdW5jdGlvbihub0RhdGFJbmRpY2F0aW9uKSA/IG5vRGF0YUluZGljYXRpb24oKSA6IG5vRGF0YUluZGljYXRpb247XG4gICAgaWYgKCFpbmRpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29udGVudCA9IDxSb3dTZWN0aW9uIGNvbnRlbnQ9eyBpbmRpY2F0aW9uIH0gY29sU3Bhbj17IHZpc2libGVDb2x1bW5TaXplIH0gLz47XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uRWRpdGFibGVSb3dzID0gY2VsbEVkaXQubm9uRWRpdGFibGVSb3dzIHx8IFtdO1xuICAgIGNvbnRlbnQgPSBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9ICEobm9uRWRpdGFibGVSb3dzLmxlbmd0aCA+IDAgJiYgbm9uRWRpdGFibGVSb3dzLmluZGV4T2Yoa2V5KSA+IC0xKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRFxuICAgICAgICA/IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgICAgIDogbnVsbDtcblxuICAgICAgY29uc3QgYXR0cnMgPSByb3dFdmVudHMgfHwge307XG4gICAgICBsZXQgc3R5bGUgPSBfLmlzRnVuY3Rpb24ocm93U3R5bGUpID8gcm93U3R5bGUocm93LCBpbmRleCkgOiByb3dTdHlsZTtcbiAgICAgIGxldCBjbGFzc2VzID0gKF8uaXNGdW5jdGlvbihyb3dDbGFzc2VzKSA/IHJvd0NsYXNzZXMocm93LCBpbmRleCkgOiByb3dDbGFzc2VzKTtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFN0eWxlID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5zdHlsZSlcbiAgICAgICAgICA/IHNlbGVjdFJvdy5zdHlsZShyb3csIGluZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LnN0eWxlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cuY2xhc3NlcylcbiAgICAgICAgICA/IHNlbGVjdFJvdy5jbGFzc2VzKHJvdywgaW5kZXgpXG4gICAgICAgICAgOiBzZWxlY3RSb3cuY2xhc3NlcztcblxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAuLi5zZWxlY3RlZFN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIGNsYXNzZXMgPSBjcyhjbGFzc2VzLCBzZWxlY3RlZENsYXNzZXMpO1xuXG4gICAgICAgIGlmIChiZ0NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfLmlzRnVuY3Rpb24oYmdDb2xvcikgPyBiZ0NvbG9yKHJvdywgaW5kZXgpIDogYmdDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RhYmxlID0gIW5vblNlbGVjdGFibGUgfHwgIW5vblNlbGVjdGFibGUuaW5jbHVkZXMoa2V5KTtcbiAgICAgIGNvbnN0IGV4cGFuZGFibGUgPSBleHBhbmRSb3cgJiYgIWV4cGFuZFJvdy5ub25FeHBhbmRhYmxlLmluY2x1ZGVzKGtleSk7XG4gICAgICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZFJvdyAmJiBleHBhbmRSb3cuZXhwYW5kZWQuaW5jbHVkZXMoa2V5KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gW1xuICAgICAgICA8Um93XG4gICAgICAgICAga2V5PXsga2V5IH1cbiAgICAgICAgICByb3c9eyByb3cgfVxuICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgIHJvd0luZGV4PXsgaW5kZXggfVxuICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICBjZWxsRWRpdD17IGNlbGxFZGl0IH1cbiAgICAgICAgICBlZGl0YWJsZT17IGVkaXRhYmxlIH1cbiAgICAgICAgICBzZWxlY3RhYmxlPXsgc2VsZWN0YWJsZSB9XG4gICAgICAgICAgZXhwYW5kYWJsZT17IGV4cGFuZGFibGUgfVxuICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc2VzIH1cbiAgICAgICAgICBhdHRycz17IGF0dHJzIH1cbiAgICAgICAgLz5cbiAgICAgIF07XG5cbiAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICByZXN1bHQucHVzaCgoXG4gICAgICAgICAgPEV4cGFuZFJvd1xuICAgICAgICAgICAga2V5PXsgYCR7a2V5fS1leHBhbmRpbmdgIH1cbiAgICAgICAgICAgIGNvbFNwYW49eyB2aXNpYmxlQ29sdW1uU2l6ZSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyBleHBhbmRSb3cucmVuZGVyZXIocm93KSB9XG4gICAgICAgICAgPC9FeHBhbmRSb3c+XG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGJvZHk+eyBjb250ZW50IH08L3Rib2R5PlxuICApO1xufTtcblxuQm9keS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25DZWxsIGZyb20gJy4vcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbCc7XG5pbXBvcnQgRXhwYW5kQ2VsbCBmcm9tICcuL3Jvdy1leHBhbmQvZXhwYW5kLWNlbGwnO1xuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vcm93LWV2ZW50LWRlbGVnYXRlcic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNsYXNzIFJvdyBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKENvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAgY29sdW1ucyxcbiAgICAgIGtleUZpZWxkLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGF0dHJzLFxuICAgICAgY2VsbEVkaXQsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgZXhwYW5kUm93LFxuICAgICAgc2VsZWN0YWJsZSxcbiAgICAgIGVkaXRhYmxlOiBlZGl0YWJsZVJvd1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgbW9kZSxcbiAgICAgIG9uU3RhcnQsXG4gICAgICBFZGl0aW5nQ2VsbCxcbiAgICAgIHJpZHg6IGVkaXRpbmdSb3dJZHgsXG4gICAgICBjaWR4OiBlZGl0aW5nQ29sSWR4LFxuICAgICAgQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICAgICAgREJDTElDS19UT19DRUxMX0VESVQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IGNlbGxFZGl0O1xuXG4gICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgY29uc3QgeyBoaWRlU2VsZWN0Q29sdW1uIH0gPSBzZWxlY3RSb3c7XG4gICAgY29uc3QgeyBzaG93RXhwYW5kQ29sdW1uIH0gPSBleHBhbmRSb3cgfHwge307XG4gICAgY29uc3QgdHJBdHRycyA9IHRoaXMuZGVsZWdhdGUoYXR0cnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBzdHlsZT17IHN0eWxlIH0gY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0geyAuLi50ckF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93RXhwYW5kQ29sdW1uID8gKFxuICAgICAgICAgICAgPEV4cGFuZENlbGxcbiAgICAgICAgICAgICAgeyAuLi5leHBhbmRSb3cgfVxuICAgICAgICAgICAgICByb3dLZXk9eyBrZXkgfVxuICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgZXhwYW5kZWQ9eyBleHBhbmRlZCB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIChzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRCAmJiAhaGlkZVNlbGVjdENvbHVtbilcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8U2VsZWN0aW9uQ2VsbFxuICAgICAgICAgICAgICAgIHsgLi4uc2VsZWN0Um93IH1cbiAgICAgICAgICAgICAgICByb3dLZXk9eyBrZXkgfVxuICAgICAgICAgICAgICAgIHJvd0luZGV4PXsgcm93SW5kZXggfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgIXNlbGVjdGFibGUgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbi5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBkYXRhRmllbGQgfSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgICAgbGV0IGVkaXRhYmxlID0gXy5pc0RlZmluZWQoY29sdW1uLmVkaXRhYmxlKSA/IGNvbHVtbi5lZGl0YWJsZSA6IHRydWU7XG4gICAgICAgICAgICAgIGlmIChkYXRhRmllbGQgPT09IGtleUZpZWxkIHx8ICFlZGl0YWJsZVJvdykgZWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdGFibGUpKSB7XG4gICAgICAgICAgICAgICAgZWRpdGFibGUgPSBjb2x1bW4uZWRpdGFibGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gZWRpdGluZ1Jvd0lkeCAmJiBpbmRleCA9PT0gZWRpdGluZ0NvbElkeCkge1xuICAgICAgICAgICAgICAgIGxldCBlZGl0Q2VsbHN0eWxlID0gY29sdW1uLmVkaXRDZWxsU3R5bGUgfHwge307XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRDZWxsY2xhc3NlcyA9IGNvbHVtbi5lZGl0Q2VsbENsYXNzZXM7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdENlbGxTdHlsZSkpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRDZWxsc3R5bGUgPSBjb2x1bW4uZWRpdENlbGxTdHlsZShjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRDZWxsQ2xhc3NlcykpIHtcbiAgICAgICAgICAgICAgICAgIGVkaXRDZWxsY2xhc3NlcyA9IGNvbHVtbi5lZGl0Q2VsbENsYXNzZXMoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEVkaXRpbmdDZWxsXG4gICAgICAgICAgICAgICAgICAgIGtleT17IGAke2NvbnRlbnR9LSR7aW5kZXh9YCB9XG4gICAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4PXsgcm93SW5kZXggfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleD17IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgZWRpdENlbGxjbGFzc2VzIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyBlZGl0Q2VsbHN0eWxlIH1cbiAgICAgICAgICAgICAgICAgICAgeyAuLi5yZXN0IH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyByZW5kZXIgY2VsbFxuICAgICAgICAgICAgICBsZXQgY2VsbFRpdGxlO1xuICAgICAgICAgICAgICBsZXQgY2VsbFN0eWxlID0ge307XG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgICAgICAgICAgICAuLi5fLmlzRnVuY3Rpb24oY29sdW1uLmF0dHJzKVxuICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uYXR0cnMoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICA6IGNvbHVtbi5hdHRycyxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uZXZlbnRzXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgY29uc3QgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oY29sdW1uLmNsYXNzZXMpXG4gICAgICAgICAgICAgICAgPyBjb2x1bW4uY2xhc3Nlcyhjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICA6IGNvbHVtbi5jbGFzc2VzO1xuXG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oY29sdW1uLnN0eWxlKVxuICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uc3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICA6IGNvbHVtbi5zdHlsZTtcbiAgICAgICAgICAgICAgICBjZWxsU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBjZWxsU3R5bGUpIHx8IHt9O1xuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICBpZiAoY29sdW1uLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgY2VsbFRpdGxlID0gXy5pc0Z1bmN0aW9uKGNvbHVtbi50aXRsZSlcbiAgICAgICAgICAgICAgICAgID8gY29sdW1uLnRpdGxlKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgOiBjb250ZW50O1xuICAgICAgICAgICAgICAgIGNlbGxBdHRycy50aXRsZSA9IGNlbGxUaXRsZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uYWxpZ24pIHtcbiAgICAgICAgICAgICAgICBjZWxsU3R5bGUudGV4dEFsaWduID1cbiAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihjb2x1bW4uYWxpZ24pXG4gICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmFsaWduKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5hbGlnbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNlbGxDbGFzc2VzO1xuICAgICAgICAgICAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAgICAgICAga2V5PXsgYCR7Y29udGVudH0tJHtpbmRleH1gIH1cbiAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4PXsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICAgICAgICAgIG9uU3RhcnQ9eyBvblN0YXJ0IH1cbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXsgZWRpdGFibGUgfVxuICAgICAgICAgICAgICAgICAgY2xpY2tUb0VkaXQ9eyBtb2RlID09PSBDTElDS19UT19DRUxMX0VESVQgfVxuICAgICAgICAgICAgICAgICAgZGJjbGlja1RvRWRpdD17IG1vZGUgPT09IERCQ0xJQ0tfVE9fQ0VMTF9FRElUIH1cbiAgICAgICAgICAgICAgICAgIHsgLi4uY2VsbEF0dHJzIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF0dHJzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgc3R5bGU6IHt9LFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGF0dHJzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdGluZ0NlbGwgPSB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgIGlmIChuZXh0UHJvcHMuY29sdW1uLmlzRHVtbXlGaWVsZCkge1xuICAgICAgc2hvdWxkVXBkYXRlID0gIV8uaXNFcXVhbCh0aGlzLnByb3BzLnJvdywgbmV4dFByb3BzLnJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3VsZFVwZGF0ZSA9XG4gICAgICAgIF8uZ2V0KHRoaXMucHJvcHMucm93LCB0aGlzLnByb3BzLmNvbHVtbi5kYXRhRmllbGQpXG4gICAgICAgICAgIT09IF8uZ2V0KG5leHRQcm9wcy5yb3csIG5leHRQcm9wcy5jb2x1bW4uZGF0YUZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHNob3VsZFVwZGF0ZSA9XG4gICAgICB0aGlzLnByb3BzLmNvbHVtbi5oaWRkZW4gIT09IG5leHRQcm9wcy5jb2x1bW4uaGlkZGVuIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uSW5kZXggIT09IG5leHRQcm9wcy5jb2x1bW5JbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUgIT09IG5leHRQcm9wcy50aXRsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5lZGl0YWJsZSAhPT0gbmV4dFByb3BzLmVkaXRhYmxlIHx8XG4gICAgICB0aGlzLnByb3BzLmNsaWNrVG9FZGl0ICE9PSBuZXh0UHJvcHMuY2xpY2tUb0VkaXQgfHxcbiAgICAgIHRoaXMucHJvcHMuZGJjbGlja1RvRWRpdCAhPT0gbmV4dFByb3BzLmRiY2xpY2tUb0VkaXQgfHxcbiAgICAgICFfLmlzRXF1YWwodGhpcy5wcm9wcy5zdHlsZSwgbmV4dFByb3BzLnN0eWxlKSB8fFxuICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLmNvbHVtbi5mb3JtYXRFeHRyYURhdGEsIG5leHRQcm9wcy5jb2x1bW4uZm9ybWF0RXh0cmFEYXRhKSB8fFxuICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLmNvbHVtbi5ldmVudHMsIG5leHRQcm9wcy5jb2x1bW4uZXZlbnRzKSB8fFxuICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLmNvbHVtbi5hdHRycywgbmV4dFByb3BzLmNvbHVtbi5hdHRycyk7XG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRpbmdDZWxsKGUpIHtcbiAgICBjb25zdCB7IGNvbHVtbiwgb25TdGFydCwgcm93SW5kZXgsIGNvbHVtbkluZGV4LCBjbGlja1RvRWRpdCwgZGJjbGlja1RvRWRpdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gY29sdW1uO1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGlmIChjbGlja1RvRWRpdCkge1xuICAgICAgICBjb25zdCBjdXN0b21DbGljayA9IGV2ZW50cy5vbkNsaWNrO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbUNsaWNrKSkgY3VzdG9tQ2xpY2soZSk7XG4gICAgICB9IGVsc2UgaWYgKGRiY2xpY2tUb0VkaXQpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tRGJDbGljayA9IGV2ZW50cy5vbkRvdWJsZUNsaWNrO1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGN1c3RvbURiQ2xpY2spKSBjdXN0b21EYkNsaWNrKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob25TdGFydCkge1xuICAgICAgb25TdGFydChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNvbHVtbixcbiAgICAgIGNvbHVtbkluZGV4LFxuICAgICAgb25TdGFydCxcbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xpY2tUb0VkaXQsXG4gICAgICBkYmNsaWNrVG9FZGl0LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFGaWVsZCxcbiAgICAgIGZvcm1hdHRlcixcbiAgICAgIGZvcm1hdEV4dHJhRGF0YVxuICAgIH0gPSBjb2x1bW47XG4gICAgY29uc3QgYXR0cnMgPSB7IC4uLnJlc3QgfTtcbiAgICBsZXQgY29udGVudCA9IGNvbHVtbi5pc0R1bW15RmllbGQgPyBudWxsIDogXy5nZXQocm93LCBkYXRhRmllbGQpO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgY29udGVudCA9IGNvbHVtbi5mb3JtYXR0ZXIoY29udGVudCwgcm93LCByb3dJbmRleCwgZm9ybWF0RXh0cmFEYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoY2xpY2tUb0VkaXQgJiYgZWRpdGFibGUpIHtcbiAgICAgIGF0dHJzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUVkaXRpbmdDZWxsO1xuICAgIH0gZWxzZSBpZiAoZGJjbGlja1RvRWRpdCAmJiBlZGl0YWJsZSkge1xuICAgICAgYXR0cnMub25Eb3VibGVDbGljayA9IHRoaXMuaGFuZGxlRWRpdGluZ0NlbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCB7IC4uLmF0dHJzIH0+XG4gICAgICAgIHsgdHlwZW9mIGNvbnRlbnQgPT09ICdib29sZWFuJyA/IGAke2NvbnRlbnR9YCA6IGNvbnRlbnQgfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG59XG5cbkNlbGwucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY29sdW1uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbHVtbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jZWxsLmpzIiwiLyogZXNsaW50XG4gIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMFxuICBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMFxuKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25DZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gbmV4dFByb3BzLnNlbGVjdGVkICE9PSBzZWxlY3RlZDtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RlOiBpbnB1dFR5cGUsXG4gICAgICByb3dLZXksXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uUm93U2VsZWN0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGNsaWNrVG9TZWxlY3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmIChjbGlja1RvU2VsZWN0KSByZXR1cm47XG5cbiAgICBjb25zdCBjaGVja2VkID0gaW5wdXRUeXBlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRVxuICAgICAgPyB0cnVlXG4gICAgICA6ICFzZWxlY3RlZDtcblxuICAgIG9uUm93U2VsZWN0KHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzZWxlY3Rpb25SZW5kZXJlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoXG4gICAgICAgICAgICA8dGQgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyID8gc2VsZWN0aW9uUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH0pIDogKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9eyBpbnB1dFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYm9vdHN0cmFwNCA/ICdzZWxlY3Rpb24taW5wdXQtNCcgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCkgPT4ge30gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L0Jvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9zZWxlY3Rpb24tY2VsbC5qcyIsIi8qIGVzbGludFxuICByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDBcbiAganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnM6IDBcbiovXG4vKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBhbmRDZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByb3dLZXk6IFByb3BUeXBlcy5hbnksXG4gICAgZXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3QgeyByb3dLZXksIGV4cGFuZGVkLCBvblJvd0V4cGFuZCwgcm93SW5kZXggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvblJvd0V4cGFuZChyb3dLZXksIGV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBhbmRlZCwgZXhwYW5kQ29sdW1uUmVuZGVyZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBleHBhbmRDb2x1bW5SZW5kZXJlciA/IGV4cGFuZENvbHVtblJlbmRlcmVyKHtcbiAgICAgICAgICAgIGV4cGFuZGVkXG4gICAgICAgICAgfSkgOiAoZXhwYW5kZWQgPyAnKC0pJyA6ICcoKyknKVxuICAgICAgICB9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLWNlbGwuanMiLCJpbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY29uc3QgZXZlbnRzID0gW1xuICAnb25DbGljaycsXG4gICdvbkRvdWJsZUNsaWNrJyxcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFJvd0V2ZW50RGVsZWdhdGVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoY2IpIHtcbiAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHJvdywgcm93SW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNiKGUsIHJvdywgcm93SW5kZXgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGlja0V2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICByb3csXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAga2V5RmllbGQsXG4gICAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgICBleHBhbmRhYmxlLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGV4cGFuZGVkLFxuICAgICAgICAgIGV4cGFuZFJvdyxcbiAgICAgICAgICBzZWxlY3RSb3csXG4gICAgICAgICAgY2VsbEVkaXQ6IHtcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBEQkNMSUNLX1RPX0NFTExfRURJVCxcbiAgICAgICAgICAgIERFTEFZX0ZPUl9EQkNMSUNLXG4gICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjbGlja0ZuID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICAgIGlmIChleHBhbmRSb3cgJiYgZXhwYW5kYWJsZSkge1xuICAgICAgICAgICAgZXhwYW5kUm93Lm9uUm93RXhwYW5kKGtleSwgIWV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRCAmJiBzZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICBzZWxlY3RSb3cub25Sb3dTZWxlY3Qoa2V5LCAhc2VsZWN0ZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1vZGUgPT09IERCQ0xJQ0tfVE9fQ0VMTF9FRElUICYmIHNlbGVjdFJvdy5jbGlja1RvRWRpdCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tOdW0gKz0gMTtcbiAgICAgICAgICBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrTnVtID09PSAxKSB7XG4gICAgICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgICAgIH0sIERFTEFZX0ZPUl9EQkNMSUNLKSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsaWNrRm4oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxlZ2F0ZShhdHRycyA9IHt9KSB7XG4gICAgICBjb25zdCBuZXdBdHRycyA9IHt9O1xuICAgICAgY29uc3QgeyBleHBhbmRSb3csIHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChleHBhbmRSb3cgJiYgKHNlbGVjdFJvdyAmJiBzZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCkpIHtcbiAgICAgICAgbmV3QXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIoYXR0cnMub25DbGljayk7XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBpZiAoIW5ld0F0dHJzW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKGV2ZW50cy5pbmNsdWRlcyhhdHRyKSkge1xuICAgICAgICAgICAgbmV3QXR0cnNbYXR0cl0gPSB0aGlzLmNyZWF0ZURlZmF1bHRFdmVudEhhbmRsZXIoYXR0cnNbYXR0cl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdBdHRyc1thdHRyXSA9IGF0dHJzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3QXR0cnM7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV2ZW50LWRlbGVnYXRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFeHBhbmRSb3cgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDx0ciBjbGFzc05hbWU9XCJleHBhbmRpbmctcm93XCI+XG4gICAgPHRkIHsgLi4ucmVzdCB9PnsgY2hpbGRyZW4gfTwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5FeHBhbmRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5cbkV4cGFuZFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1yb3cuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUm93U2VjdGlvbiA9ICh7IGNvbnRlbnQsIGNvbFNwYW4gfSkgPT4gKFxuICA8dHI+XG4gICAgPHRkXG4gICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgIGNvbFNwYW49eyBjb2xTcGFuIH1cbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLW5vLWRhdGFcIlxuICAgID5cbiAgICAgIHsgY29udGVudCB9XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cblJvd1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICBjb2xTcGFuOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5Sb3dTZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogbnVsbCxcbiAgY29sU3BhbjogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93U2VjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWN0aW9uLmpzIiwiaW1wb3J0IENvbHVtblJlc29sdmVyIGZyb20gJy4vY29sdW1uLXJlc29sdmVyJztcbmltcG9ydCBFeHBhbmRSb3dSZXNvbHZlciBmcm9tICcuL2V4cGFuZC1yb3ctcmVzb2x2ZXInO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBUYWJsZVJlc29sdmVyIGV4dGVuZHNcbiAgICBFeHBhbmRSb3dSZXNvbHZlcihDb2x1bW5SZXNvbHZlcihFeHRlbmRCYXNlKSkge1xuICAgIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFrZXlGaWVsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBzcGVjaWZ5IGEgZmllbGQgYXMga2V5IHZpYSBrZXlGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtblNpemUoZmFsc2UpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aXNpYmxlIGNvbHVtbnMgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJvcHMgcmVzb2x2ZXIgZm9yIGNlbGwgc2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhZGR0aW9uYWwgb3B0aW9ucyBsaWtlIGNhbGxiYWNrIHdoaWNoIGFyZSBhYm91dCB0byBtZXJnZSBpbnRvIHByb3BzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZXN1bHQgLSBwcm9wcyBmb3IgY2VsbCBzZWxlY3Rpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ30gcmVzdWx0Lm1vZGUgLSBpbnB1dCB0eXBlIG9mIHJvdyBzZWxlY3Rpb24gb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcmVzb2x2ZVNlbGVjdFJvd1Byb3BzKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0Um93IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBST1dfU0VMRUNUX0RJU0FCTEVEIH0gPSBDb25zdDtcblxuICAgICAgaWYgKF8uaXNEZWZpbmVkKHNlbGVjdFJvdykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZWxlY3RSb3csXG4gICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBST1dfU0VMRUNUX0RJU0FCTEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByb3BzIHJlc29sdmVyIGZvciBoZWFkZXIgY2VsbCBzZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGFkZHRpb25hbCBvcHRpb25zIGxpa2UgY2FsbGJhY2sgd2hpY2ggYXJlIGFib3V0IHRvIG1lcmdlIGludG8gcHJvcHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3VsdCAtIHByb3BzIGZvciBjZWxsIHNlbGVjdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSByZXN1bHQubW9kZSAtIGlucHV0IHR5cGUgb2Ygcm93IHNlbGVjdGlvbiBvciBkaXNhYmxlZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSByZXN1bHQuY2hlY2tlZFN0YXR1cyAtIGNoZWNrYm94IHN0YXR1cyBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgcm93cyBjb3VudHNcbiAgICAgKi9cbiAgICByZXNvbHZlU2VsZWN0Um93UHJvcHNGb3JIZWFkZXIob3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgYWxsUm93c1NlbGVjdGVkLCBhbGxSb3dzTm90U2VsZWN0ZWQsIC4uLnJlc3QgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7XG4gICAgICAgIFJPV19TRUxFQ1RfRElTQUJMRUQsIENIRUNLQk9YX1NUQVRVU19DSEVDS0VELFxuICAgICAgICBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURSwgQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRFxuICAgICAgfSA9IENvbnN0O1xuXG4gICAgICBpZiAoXy5pc0RlZmluZWQoc2VsZWN0Um93KSkge1xuICAgICAgICBsZXQgY2hlY2tlZFN0YXR1cztcblxuICAgICAgICAvLyBjaGVja2JveCBzdGF0dXMgZGVwZW5kaW5nIG9uIHNlbGVjdGVkIHJvd3MgY291bnRzXG4gICAgICAgIGlmIChhbGxSb3dzU2VsZWN0ZWQpIGNoZWNrZWRTdGF0dXMgPSBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcbiAgICAgICAgZWxzZSBpZiAoYWxsUm93c05vdFNlbGVjdGVkKSBjaGVja2VkU3RhdHVzID0gQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDtcbiAgICAgICAgZWxzZSBjaGVja2VkU3RhdHVzID0gQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZWxlY3RSb3csXG4gICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICBjaGVja2VkU3RhdHVzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1vZGU6IFJPV19TRUxFQ1RfRElTQUJMRURcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIENvbHVtblJlc29sdmVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgdmlzaWJsZUNvbHVtblNpemUoaW5jbHVkZVNlbGVjdENvbHVtbiA9IHRydWUpIHtcbiAgICAgIGxldCBjb2x1bW5MZW4gPSB0aGlzLnByb3BzLmNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuaGlkZGVuKS5sZW5ndGg7XG4gICAgICBpZiAoIWluY2x1ZGVTZWxlY3RDb2x1bW4pIHJldHVybiBjb2x1bW5MZW47XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIHtcbiAgICAgICAgY29sdW1uTGVuICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRSb3cgJiYgdGhpcy5wcm9wcy5leHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgICAgICBjb2x1bW5MZW4gKz0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2x1bW5MZW47XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvY29sdW1uLXJlc29sdmVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBFeHBhbmRSb3dSZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHJlc29sdmVFeHBhbmRSb3dQcm9wcygpIHtcbiAgICAgIGNvbnN0IHsgZXhwYW5kUm93LCBleHBhbmRlZCwgb25Sb3dFeHBhbmQsIG9uQWxsUm93RXhwYW5kLCBpc0FueUV4cGFuZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoZXhwYW5kUm93KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZXhwYW5kUm93LFxuICAgICAgICAgIGV4cGFuZGVkLFxuICAgICAgICAgIG9uUm93RXhwYW5kLFxuICAgICAgICAgIG9uQWxsUm93RXhwYW5kLFxuICAgICAgICAgIGlzQW55RXhwYW5kcyxcbiAgICAgICAgICBub25FeHBhbmRhYmxlOiBleHBhbmRSb3cubm9uRXhwYW5kYWJsZSB8fCBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvZXhwYW5kLXJvdy1yZXNvbHZlci5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4vKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBjcmVhdGVEYXRhQ29udGV4dCBmcm9tICcuL2RhdGEtY29udGV4dCc7XG5pbXBvcnQgY3JlYXRlU29ydENvbnRleHQgZnJvbSAnLi9zb3J0LWNvbnRleHQnO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdGlvbkNvbnRleHQgZnJvbSAnLi9zZWxlY3Rpb24tY29udGV4dCc7XG5pbXBvcnQgY3JlYXRlUm93RXhwYW5kQ29udGV4dCBmcm9tICcuL3Jvdy1leHBhbmQtY29udGV4dCc7XG5pbXBvcnQgcmVtb3RlUmVzb2x2ZXIgZnJvbSAnLi4vcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyJztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgZGF0YU9wZXJhdG9yIGZyb20gJy4uL3N0b3JlL29wZXJhdG9ycyc7XG5cbmNvbnN0IHdpdGhDb250ZXh0ID0gQmFzZSA9PlxuICBjbGFzcyBCb290c3RyYXBUYWJsZUNvbnRhaW5lciBleHRlbmRzIHJlbW90ZVJlc29sdmVyKENvbXBvbmVudCkge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLkRhdGFDb250ZXh0ID0gY3JlYXRlRGF0YUNvbnRleHQoKTtcblxuICAgICAgaWYgKHByb3BzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gY3JlYXRlU29ydENvbnRleHQoXG4gICAgICAgICAgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlU29ydCwgdGhpcy5oYW5kbGVSZW1vdGVTb3J0Q2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNlbGVjdFJvdykge1xuICAgICAgICB0aGlzLlNlbGVjdGlvbkNvbnRleHQgPSBjcmVhdGVTZWxlY3Rpb25Db250ZXh0KGRhdGFPcGVyYXRvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRSb3cpIHtcbiAgICAgICAgdGhpcy5Sb3dFeHBhbmRDb250ZXh0ID0gY3JlYXRlUm93RXhwYW5kQ29udGV4dChkYXRhT3BlcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY2VsbEVkaXQgJiYgcHJvcHMuY2VsbEVkaXQuY3JlYXRlQ29udGV4dCkge1xuICAgICAgICB0aGlzLkNlbGxFZGl0Q29udGV4dCA9IHByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQoXG4gICAgICAgICAgXywgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlQ2VsbEVkaXQsIHRoaXMuaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgdGhpcy5GaWx0ZXJDb250ZXh0ID0gcHJvcHMuZmlsdGVyLmNyZWF0ZUNvbnRleHQoXG4gICAgICAgICAgXywgdGhpcy5pc1JlbW90ZUZpbHRlcmluZywgdGhpcy5oYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLlBhZ2luYXRpb25Db250ZXh0ID0gcHJvcHMucGFnaW5hdGlvbi5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VhcmNoICYmIHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuU2VhcmNoQ29udGV4dCA9IHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVTZWFyY2gsIHRoaXMuaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKSB7XG4gICAgICAgIHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKF8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckJhc2UoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHMsXG4gICAgICAgIGV4cGFuZFByb3BzLFxuICAgICAgICBzZWxlY3Rpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDxCYXNlXG4gICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICB7IC4uLnNlbGVjdGlvblByb3BzIH1cbiAgICAgICAgICB7IC4uLnNvcnRQcm9wcyB9XG4gICAgICAgICAgeyAuLi5jZWxsRWRpdFByb3BzIH1cbiAgICAgICAgICB7IC4uLmZpbHRlclByb3BzIH1cbiAgICAgICAgICB7IC4uLnNlYXJjaFByb3BzIH1cbiAgICAgICAgICB7IC4uLnBhZ2luYXRpb25Qcm9wcyB9XG4gICAgICAgICAgeyAuLi5leHBhbmRQcm9wcyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgZXhwYW5kUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5TZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHNlbGVjdFJvdz17IHRoaXMucHJvcHMuc2VsZWN0Um93IH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICAgICAgICAgIGV4cGFuZFByb3BzLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIGV4cGFuZFJvdz17IHRoaXMucHJvcHMuZXhwYW5kUm93IH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuUm93RXhwYW5kQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZXhwYW5kUHJvcHMgPT4gYmFzZShcbiAgICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICAgICAgICAgIGV4cGFuZFByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuUm93RXhwYW5kQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlJvd0V4cGFuZENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhQYWdpbmF0aW9uQ3R4KGJhc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5QYWdpbmF0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5wYWdpbmF0aW9uQ29udGV4dCA9IG4gfVxuICAgICAgICAgIHBhZ2luYXRpb249eyB0aGlzLnByb3BzLnBhZ2luYXRpb24gfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcykgfVxuICAgICAgICAgIGJvb3RzdHJhcDQ9eyB0aGlzLnByb3BzLmJvb3RzdHJhcDQgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICAgICAgICAgIHNvcnRQcm9wcyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGhpcy5QYWdpbmF0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlBhZ2luYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoU29ydEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgY2VsbEVkaXRQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuU29ydENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLnNvcnRDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZGVmYXVsdFNvcnRlZD17IHRoaXMucHJvcHMuZGVmYXVsdFNvcnRlZCB9XG4gICAgICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb249eyB0aGlzLnByb3BzLmRlZmF1bHRTb3J0RGlyZWN0aW9uIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzKSB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5Tb3J0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc29ydFByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHMsXG4gICAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLlNvcnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuU29ydENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhTZWFyY2hDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuU2VhcmNoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuc2VhcmNoQ29udGV4dCA9IG4gfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcykgfVxuICAgICAgICAgIHNlYXJjaFRleHQ9eyB0aGlzLnByb3BzLnNlYXJjaC5zZWFyY2hUZXh0IH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlNlYXJjaENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGNlbGxFZGl0UHJvcHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoUHJvcHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGhpcy5TZWFyY2hDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICA8L3RoaXMuU2VhcmNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aEZpbHRlckN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgY2VsbEVkaXRQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLkZpbHRlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLmZpbHRlckNvbnRleHQgPSBuIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoKSB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5GaWx0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBjZWxsRWRpdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuRmlsdGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLkZpbHRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhDZWxsRWRpdEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiByb290UHJvcHMgPT4gKFxuICAgICAgICA8dGhpcy5DZWxsRWRpdENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgc2VsZWN0Um93PXsgdGhpcy5wcm9wcy5zZWxlY3RSb3cgfVxuICAgICAgICAgIGNlbGxFZGl0PXsgdGhpcy5wcm9wcy5jZWxsRWRpdCB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKCkgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuQ2VsbEVkaXRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjZWxsRWRpdFByb3BzID0+IGJhc2Uocm9vdFByb3BzLCBjZWxsRWRpdFByb3BzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGhpcy5DZWxsRWRpdENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5DZWxsRWRpdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsga2V5RmllbGQsIGNvbHVtbnMsIGJvb3RzdHJhcDQsIHJlZ2lzdGVyRXhwb3NlZEFQSSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGJhc2VQcm9wcyA9IHsga2V5RmllbGQsIGNvbHVtbnMgfTtcbiAgICAgIGlmIChyZWdpc3RlckV4cG9zZWRBUEkpIGJhc2VQcm9wcy5yZWdpc3RlckV4cG9zZWRBUEkgPSByZWdpc3RlckV4cG9zZWRBUEk7XG5cbiAgICAgIGxldCBiYXNlID0gdGhpcy5yZW5kZXJCYXNlKCk7XG5cbiAgICAgIGlmICh0aGlzLlNlbGVjdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5Sb3dFeHBhbmRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuUGFnaW5hdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFBhZ2luYXRpb25DdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU2VhcmNoQ29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoU2VhcmNoQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLkZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aEZpbHRlckN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5DZWxsRWRpdENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aENlbGxFZGl0Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb290c3RyYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBib290c3RyYXA0IH0gfT5cbiAgICAgICAgICA8dGhpcy5EYXRhQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMucHJvcHMuZGF0YSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRoaXMuRGF0YUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiYXNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGhpcy5EYXRhQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICA8L3RoaXMuRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgRGF0YVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRlID0geyBkYXRhOiB0aGlzLnByb3BzLmRhdGEgfTtcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGRhdGE6IG5leHRQcm9wcy5kYXRhIH0pKTtcbiAgICB9XG5cbiAgICBnZXREYXRhID0gKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpID0+IHtcbiAgICAgIGlmIChwYWdpbmF0aW9uUHJvcHMpIHJldHVybiBwYWdpbmF0aW9uUHJvcHMuZGF0YTtcbiAgICAgIGVsc2UgaWYgKHNvcnRQcm9wcykgcmV0dXJuIHNvcnRQcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoc2VhcmNoUHJvcHMpIHJldHVybiBzZWFyY2hQcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoZmlsdGVyUHJvcHMpIHJldHVybiBmaWx0ZXJQcm9wcy5kYXRhO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZGF0YSxcbiAgICAgICAgICAgIGdldERhdGE6IHRoaXMuZ2V0RGF0YVxuICAgICAgICAgIH0gfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IERhdGFQcm92aWRlcixcbiAgICBDb25zdW1lcjogRGF0YUNvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9kYXRhLWNvbnRleHQuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgZGF0YU9wZXJhdG9yLFxuICBpc1JlbW90ZVNvcnQsXG4gIGhhbmRsZVNvcnRDaGFuZ2VcbikgPT4ge1xuICBjb25zdCBTb3J0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBTb3J0UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICBkZWZhdWx0U29ydGVkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBkYXRhRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgICAgIH0pKSxcbiAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBsZXQgc29ydE9yZGVyO1xuICAgICAgbGV0IHNvcnRDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMsIGRlZmF1bHRTb3J0ZWQsIGRlZmF1bHRTb3J0RGlyZWN0aW9uIH0gPSBwcm9wcztcblxuICAgICAgaWYgKGRlZmF1bHRTb3J0ZWQgJiYgZGVmYXVsdFNvcnRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGaWVsZCA9IGRlZmF1bHRTb3J0ZWRbMF0uZGF0YUZpZWxkO1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWZhdWx0U29ydGVkWzBdLm9yZGVyIHx8IGRlZmF1bHRTb3J0RGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBzb3J0Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YUZpZWxkID09PSBzb3J0RmllbGQpO1xuICAgICAgICBpZiAoc29ydENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNvcnRDb2x1bW4gPSBzb3J0Q29sdW1uc1swXTtcblxuICAgICAgICAgIGlmIChzb3J0Q29sdW1uLm9uU29ydCkge1xuICAgICAgICAgICAgc29ydENvbHVtbi5vblNvcnQoc29ydEZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmIChpc1JlbW90ZVNvcnQoKSAmJiBzb3J0T3JkZXIgJiYgc29ydENvbHVtbikge1xuICAgICAgICBoYW5kbGVTb3J0Q2hhbmdlKHNvcnRDb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVNvcnQgPSAoY29sdW1uKSA9PiB7XG4gICAgICBjb25zdCBzb3J0T3JkZXIgPSBkYXRhT3BlcmF0b3IubmV4dE9yZGVyKGNvbHVtbiwgdGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbik7XG5cbiAgICAgIGlmIChjb2x1bW4ub25Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi5vblNvcnQoY29sdW1uLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUmVtb3RlU29ydCgpKSB7XG4gICAgICAgIGhhbmRsZVNvcnRDaGFuZ2UoY29sdW1uLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICBzb3J0Q29sdW1uOiBjb2x1bW5cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBzb3J0T3JkZXIsIHNvcnRDb2x1bW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoIWlzUmVtb3RlU29ydCgpICYmIHNvcnRDb2x1bW4pIHtcbiAgICAgICAgZGF0YSA9IGRhdGFPcGVyYXRvci5zb3J0KGRhdGEsIHNvcnRPcmRlciwgc29ydENvbHVtbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTb3J0Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHNvcnRPcmRlcixcbiAgICAgICAgICAgIG9uU29ydDogdGhpcy5oYW5kbGVTb3J0LFxuICAgICAgICAgICAgc29ydEZpZWxkOiBzb3J0Q29sdW1uID8gc29ydENvbHVtbi5kYXRhRmllbGQgOiBudWxsXG4gICAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L1NvcnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogU29ydFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBTb3J0Q29udGV4dC5Db25zdW1lclxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NvcnQtY29udGV4dC5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgZGF0YU9wZXJhdG9yXG4pID0+IHtcbiAgY29uc3QgU2VsZWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBTZWxlY3Rpb25Qcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGlmIChwcm9wcy5yZWdpc3RlckV4cG9zZWRBUEkpIHtcbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiB0aGlzLmdldFNlbGVjdGVkKCk7XG4gICAgICAgIHByb3BzLnJlZ2lzdGVyRXhwb3NlZEFQSShnZXRTZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUgPSB7IHNlbGVjdGVkOiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgdGhpcy5wcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQpIHx8IFtdIH07XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5zZWxlY3RSb3cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHNlbGVjdGVkOiBuZXh0UHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cG9zZWQgQVBJXG4gICAgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBoYW5kbGVSb3dTZWxlY3QgPSAocm93S2V5LCBjaGVja2VkLCByb3dJbmRleCwgZSkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCwgc2VsZWN0Um93OiB7IG1vZGUsIG9uU2VsZWN0IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IFJPV19TRUxFQ1RfU0lOR0xFIH0gPSBDb25zdDtcblxuICAgICAgbGV0IGN1cnJTZWxlY3RlZCA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkXTtcblxuICAgICAgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfU0lOR0xFKSB7IC8vIHdoZW4gc2VsZWN0IG1vZGUgaXMgcmFkaW9cbiAgICAgICAgY3VyclNlbGVjdGVkID0gW3Jvd0tleV07XG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHsgLy8gd2hlbiBzZWxlY3QgbW9kZSBpcyBjaGVja2JveFxuICAgICAgICBjdXJyU2VsZWN0ZWQucHVzaChyb3dLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gY3VyclNlbGVjdGVkLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gcm93S2V5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRhdGFPcGVyYXRvci5nZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dLZXkpO1xuICAgICAgICBvblNlbGVjdChyb3csIGNoZWNrZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBzZWxlY3RlZDogY3VyclNlbGVjdGVkIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBbGxSb3dzU2VsZWN0ID0gKGUsIGlzVW5TZWxlY3QpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAga2V5RmllbGQsXG4gICAgICAgIHNlbGVjdFJvdzoge1xuICAgICAgICAgIG9uU2VsZWN0QWxsLFxuICAgICAgICAgIG5vblNlbGVjdGFibGVcbiAgICAgICAgfVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICBsZXQgY3VyclNlbGVjdGVkO1xuXG4gICAgICBpZiAoIWlzVW5TZWxlY3QpIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gc2VsZWN0ZWQuY29uY2F0KGRhdGFPcGVyYXRvci5zZWxlY3RhYmxlS2V5cyhkYXRhLCBrZXlGaWVsZCwgbm9uU2VsZWN0YWJsZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKHMgPT4gdHlwZW9mIGRhdGEuZmluZChkID0+IGRba2V5RmllbGRdID09PSBzKSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25TZWxlY3RBbGwpIHtcbiAgICAgICAgb25TZWxlY3RBbGwoIWlzVW5TZWxlY3QsIGRhdGFPcGVyYXRvci5nZXRTZWxlY3RlZFJvd3MoZGF0YSwga2V5RmllbGQsIGN1cnJTZWxlY3RlZCksIGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHNlbGVjdGVkOiBjdXJyU2VsZWN0ZWQgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIG9uUm93U2VsZWN0OiB0aGlzLmhhbmRsZVJvd1NlbGVjdCxcbiAgICAgICAgICAgIG9uQWxsUm93c1NlbGVjdDogdGhpcy5oYW5kbGVBbGxSb3dzU2VsZWN0XG4gICAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L1NlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBTZWxlY3Rpb25Qcm92aWRlcixcbiAgICBDb25zdW1lcjogU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lclxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIGRhdGFPcGVyYXRvclxuKSA9PiB7XG4gIGNvbnN0IFJvd0V4cGFuZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgUm93RXhwYW5kUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRlID0geyBleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRSb3cuZXhwYW5kZWQgfHwgW10gfTtcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmV4cGFuZFJvdykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgZXhwYW5kZWQ6IG5leHRQcm9wcy5leHBhbmRSb3cuZXhwYW5kZWQgfHwgdGhpcy5zdGF0ZS5leHBhbmRlZFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUm93RXhwYW5kID0gKHJvd0tleSwgZXhwYW5kZWQsIHJvd0luZGV4LCBlKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEsIGtleUZpZWxkLCBleHBhbmRSb3c6IHsgb25FeHBhbmQgfSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgbGV0IGN1cnJFeHBhbmRlZCA9IFsuLi50aGlzLnN0YXRlLmV4cGFuZGVkXTtcblxuICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgIGN1cnJFeHBhbmRlZC5wdXNoKHJvd0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyRXhwYW5kZWQgPSBjdXJyRXhwYW5kZWQuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSByb3dLZXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25FeHBhbmQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YU9wZXJhdG9yLmdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIHJvd0tleSk7XG4gICAgICAgIG9uRXhwYW5kKHJvdywgZXhwYW5kZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZXhwYW5kZWQ6IGN1cnJFeHBhbmRlZCB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWxsUm93RXhwYW5kID0gKGUsIGV4cGFuZEFsbCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhLFxuICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgZXhwYW5kUm93OiB7XG4gICAgICAgICAgb25FeHBhbmRBbGwsXG4gICAgICAgICAgbm9uRXhwYW5kYWJsZVxuICAgICAgICB9XG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGxldCBjdXJyRXhwYW5kZWQ7XG5cbiAgICAgIGlmIChleHBhbmRBbGwpIHtcbiAgICAgICAgY3VyckV4cGFuZGVkID0gZXhwYW5kZWQuY29uY2F0KGRhdGFPcGVyYXRvci5leHBhbmRhYmxlS2V5cyhkYXRhLCBrZXlGaWVsZCwgbm9uRXhwYW5kYWJsZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckV4cGFuZGVkID0gZXhwYW5kZWQuZmlsdGVyKHMgPT4gdHlwZW9mIGRhdGEuZmluZChkID0+IGRba2V5RmllbGRdID09PSBzKSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25FeHBhbmRBbGwpIHtcbiAgICAgICAgb25FeHBhbmRBbGwoZXhwYW5kQWxsLCBkYXRhT3BlcmF0b3IuZ2V0RXhwYW5kZWRSb3dzKGRhdGEsIGtleUZpZWxkLCBjdXJyRXhwYW5kZWQpLCBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBleHBhbmRlZDogY3VyckV4cGFuZGVkIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvd0V4cGFuZENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17IHtcbiAgICAgICAgICAgIGlzQW55RXhwYW5kczogZGF0YU9wZXJhdG9yLmlzQW55RXhwYW5kcyhkYXRhLCBrZXlGaWVsZCwgdGhpcy5zdGF0ZS5leHBhbmRlZCksXG4gICAgICAgICAgICBleHBhbmRlZDogdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgICAgIG9uUm93RXhwYW5kOiB0aGlzLmhhbmRsZVJvd0V4cGFuZCxcbiAgICAgICAgICAgIG9uQWxsUm93RXhwYW5kOiB0aGlzLmhhbmRsZUFsbFJvd0V4cGFuZFxuICAgICAgICAgIH0gfVxuICAgICAgICA+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogUm93RXhwYW5kUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IFJvd0V4cGFuZENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUmVtb3RlUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBnZXROZXdlc3RTdGF0ZSA9IChzdGF0ZSA9IHt9KSA9PiB7XG4gICAgICBsZXQgc29ydE9yZGVyO1xuICAgICAgbGV0IHNvcnRGaWVsZDtcbiAgICAgIGxldCBwYWdlO1xuICAgICAgbGV0IHNpemVQZXJQYWdlO1xuICAgICAgbGV0IHNlYXJjaFRleHQ7XG4gICAgICBsZXQgZmlsdGVycyA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5zb3J0Q29udGV4dCkge1xuICAgICAgICBzb3J0T3JkZXIgPSB0aGlzLnNvcnRDb250ZXh0LnN0YXRlLnNvcnRPcmRlcjtcbiAgICAgICAgc29ydEZpZWxkID0gdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0Q29sdW1uID9cbiAgICAgICAgICB0aGlzLnNvcnRDb250ZXh0LnN0YXRlLnNvcnRDb2x1bW4uZGF0YUZpZWxkIDpcbiAgICAgICAgICBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maWx0ZXJDb250ZXh0KSB7XG4gICAgICAgIGZpbHRlcnMgPSB0aGlzLmZpbHRlckNvbnRleHQuY3VyckZpbHRlcnM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb25Db250ZXh0KSB7XG4gICAgICAgIHBhZ2UgPSB0aGlzLnBhZ2luYXRpb25Db250ZXh0LmN1cnJQYWdlO1xuICAgICAgICBzaXplUGVyUGFnZSA9IHRoaXMucGFnaW5hdGlvbkNvbnRleHQuY3VyclNpemVQZXJQYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hDb250ZXh0KSB7XG4gICAgICAgIHNlYXJjaFRleHQgPSB0aGlzLnByb3BzLnNlYXJjaC5zZWFyY2hUZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgIHNvcnRGaWVsZCxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgc2l6ZVBlclBhZ2UsXG4gICAgICAgIHNlYXJjaFRleHQsXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGFcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaXNSZW1vdGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuc2VhcmNoKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5wYWdpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZUZpbHRlcmluZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5maWx0ZXIpIHx8IHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVTb3J0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnNvcnQpIHx8IHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVDZWxsRWRpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5jZWxsRWRpdCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlUGFnZUNoYW5nZSA9IChwYWdlLCBzaXplUGVyUGFnZSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdwYWdpbmF0aW9uJywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IHBhZ2UsIHNpemVQZXJQYWdlIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UgPSAoZmlsdGVycykgPT4ge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IGZpbHRlcnMgfTtcbiAgICAgIGlmICh0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLnBhZ2luYXRpb24ub3B0aW9ucyB8fCB7fTtcbiAgICAgICAgbmV3U3RhdGUucGFnZSA9IF8uaXNEZWZpbmVkKG9wdGlvbnMucGFnZVN0YXJ0SW5kZXgpID8gb3B0aW9ucy5wYWdlU3RhcnRJbmRleCA6IDE7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ2ZpbHRlcicsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUobmV3U3RhdGUpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVTb3J0Q2hhbmdlID0gKHNvcnRGaWVsZCwgc29ydE9yZGVyKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NvcnQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgc29ydEZpZWxkLCBzb3J0T3JkZXIgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UgPSAocm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxFZGl0ID0geyByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSB9O1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdjZWxsRWRpdCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBjZWxsRWRpdCB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlID0gKHNlYXJjaFRleHQpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnc2VhcmNoJywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IHNlYXJjaFRleHQgfSkpO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL3JlbW90ZS1yZXNvbHZlci5qcyIsImltcG9ydCAqIGFzIHJvd3MgZnJvbSAnLi9yb3dzJztcbmltcG9ydCAqIGFzIHNlbGVjdGlvbiBmcm9tICcuL3NlbGVjdGlvbic7XG5pbXBvcnQgKiBhcyBleHBhbmQgZnJvbSAnLi9leHBhbmQnO1xuaW1wb3J0ICogYXMgbXV0YXRlIGZyb20gJy4vbXV0YXRlJztcbmltcG9ydCAqIGFzIHNvcnQgZnJvbSAnLi9zb3J0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5yb3dzLFxuICAuLi5zZWxlY3Rpb24sXG4gIC4uLmV4cGFuZCxcbiAgLi4ubXV0YXRlLFxuICAuLi5zb3J0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvb3BlcmF0b3JzLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Um93QnlSb3dJZCB9IGZyb20gJy4vcm93cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FueUV4cGFuZHMgPSAoXG4gIGRhdGEsXG4gIGtleUZpZWxkLFxuICBleHBhbmRlZCA9IFtdXG4pID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93S2V5ID0gXy5nZXQoZGF0YVtpXSwga2V5RmllbGQpO1xuICAgIGlmICh0eXBlb2YgZXhwYW5kZWQuZmluZCh4ID0+IHggPT09IHJvd0tleSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZGFibGVLZXlzID0gKGRhdGEsIGtleUZpZWxkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZGF0YS5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbiAgfVxuICByZXR1cm4gZGF0YVxuICAgIC5maWx0ZXIocm93ID0+ICFza2lwcy5pbmNsdWRlcyhfLmdldChyb3csIGtleUZpZWxkKSkpXG4gICAgLm1hcChyb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEV4cGFuZGVkUm93cyA9IChkYXRhLCBrZXlGaWVsZCwgZXhwYW5kZWQpID0+XG4gIGV4cGFuZGVkLm1hcChrID0+IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIGspKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL2V4cGFuZC5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgZWRpdENlbGwgPSAoZGF0YSwga2V5RmllbGQsIHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGdldFJvd0J5Um93SWQoZGF0YSwga2V5RmllbGQsIHJvd0lkKTtcbiAgaWYgKHJvdykgXy5zZXQocm93LCBkYXRhRmllbGQsIG5ld1ZhbHVlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9tdXRhdGUuanMiLCIvKiBlc2xpbnQgbm8tbmVzdGVkLXRlcm5hcnk6IDAgKi9cbi8qIGVzbGludCBuby1sb25lbHktaWY6IDAgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogMCAqL1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZnVuY3Rpb24gY29tcGFyYXRvcihhLCBiKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBiLmxvY2FsZUNvbXBhcmUoYSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gYSA+IGIgPyAtMSA6ICgoYSA8IGIpID8gMSA6IDApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gKGRhdGEsIHNvcnRPcmRlciwgeyBkYXRhRmllbGQsIHNvcnRGdW5jIH0pID0+IHtcbiAgY29uc3QgX2RhdGEgPSBbLi4uZGF0YV07XG4gIF9kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCB2YWx1ZUEgPSBfLmdldChhLCBkYXRhRmllbGQpO1xuICAgIGxldCB2YWx1ZUIgPSBfLmdldChiLCBkYXRhRmllbGQpO1xuICAgIHZhbHVlQSA9IF8uaXNEZWZpbmVkKHZhbHVlQSkgPyB2YWx1ZUEgOiAnJztcbiAgICB2YWx1ZUIgPSBfLmlzRGVmaW5lZCh2YWx1ZUIpID8gdmFsdWVCIDogJyc7XG5cbiAgICBpZiAoc29ydEZ1bmMpIHtcbiAgICAgIHJlc3VsdCA9IHNvcnRGdW5jKHZhbHVlQSwgdmFsdWVCLCBzb3J0T3JkZXIsIGRhdGFGaWVsZCwgYSwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQSwgdmFsdWVCKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmF0b3IodmFsdWVCLCB2YWx1ZUEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbiAgcmV0dXJuIF9kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IG5leHRPcmRlciA9IChcbiAgY3VycmVudFNvcnRDb2x1bW4sXG4gIHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH0sXG4gIGRlZmF1bHRPcmRlciA9IENvbnN0LlNPUlRfREVTQ1xuKSA9PiB7XG4gIGlmICghc29ydENvbHVtbiB8fCBjdXJyZW50U29ydENvbHVtbi5kYXRhRmllbGQgIT09IHNvcnRDb2x1bW4uZGF0YUZpZWxkKSByZXR1cm4gZGVmYXVsdE9yZGVyO1xuICByZXR1cm4gc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MgPyBDb25zdC5TT1JUX0FTQyA6IENvbnN0LlNPUlRfREVTQztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=react-bootstrap-table-next.js.map