'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          tableMaxWidth = resolvedState.maxWidth,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: tableMaxWidth === 'none' ? flex + ' 0 auto' : '1 1 ' + _utils2.default.asPx(flex),
          width: _utils2.default.asPx(width),
          maxWidth: _utils2.default.asPx(maxWidth)
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style)
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: tableMaxWidth === 'none' ? width + ' 0 auto' : '1 1 ' + _utils2.default.asPx(width),
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(isResizable && 'rt-resizable-header-content') },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style)
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: tableMaxWidth === 'none' ? width + ' 0 auto' : '1 1 ' + _utils2.default.asPx(width),
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style)
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var useOnExpanderClick = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              var interactionProps = {
                onClick: resolvedOnExpanderClick
              };

              if (tdProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  tdProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              if (columnProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  columnProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: tableMaxWidth === 'none' ? width + ' 0 auto' : '1 1 ' + _utils2.default.asPx(width),
                    width: _utils2.default.asPx(width),
                    maxWidth: _utils2.default.asPx(maxWidth)
                  })
                }, tdProps.rest, columnProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: tableMaxWidth === 'none' ? flex + ' 0 auto' : '1 1 ' + _utils2.default.asPx(flex),
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: tableMaxWidth === 'none' ? width + ' 0 auto' : '1 1 ' + _utils2.default.asPx(width),
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style)
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style)
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.propTypes = _propTypes2.default;
ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0YWJsZU1heFdpZHRoIiwibWF4V2lkdGgiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJsb2FkaW5nIiwicGFnZXMiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiVGFibGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93TWluV2lkdGgiLCJzdW0iLCJyZXNpemVkQ29sdW1uIiwiZmluZCIsIngiLCJpZCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGgiLCJtaW5XaWR0aCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsInJvb3RQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwicmVzaXplclByb3BzIiwibWFrZUhlYWRlckdyb3VwIiwiY29sdW1uIiwicmVzaXplZFZhbHVlIiwiY29sIiwiZmxleCIsImNvbHVtbnMiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJjbGFzc2VzIiwiaGVhZGVyQ2xhc3NOYW1lIiwic3R5bGVzIiwiaGVhZGVyU3R5bGUiLCJyZXN0IiwiZmxleFN0eWxlcyIsImFzUHgiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInRoZWFkR3JvdXBUclByb3BzIiwibWFrZUhlYWRlciIsInJlc2l6ZWRDb2wiLCJzb3J0Iiwic2hvdyIsInRoZWFkVGhQcm9wcyIsImlzUmVzaXphYmxlIiwicmVzaXplciIsImUiLCJpc1NvcnRhYmxlIiwiZGVzYyIsImluY2x1ZGVzIiwic2hpZnRLZXkiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlRmlsdGVyIiwidGhlYWRGaWx0ZXJUaFByb3BzIiwiZmlsdGVyIiwiUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQiLCJGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJvbkNoYW5nZSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VQYWdlUm93Iiwicm93SW5mbyIsIm9yaWdpbmFsIiwidmlld0luZGV4IiwibGV2ZWwiLCJuZXN0aW5nUGF0aCIsImFnZ3JlZ2F0ZWQiLCJncm91cGVkQnlQaXZvdCIsInN1YlJvd3MiLCJpc0V4cGFuZGVkIiwidHJHcm91cFByb3BzIiwidHJQcm9wcyIsImpvaW4iLCJpMiIsInRkUHJvcHMiLCJjb2x1bW5Qcm9wcyIsImNlbGxJbmZvIiwicGl2b3RlZCIsImV4cGFuZGVyIiwidXNlT25FeHBhbmRlckNsaWNrIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsImluZGV4T2YiLCJyZXNvbHZlZE9uRXhwYW5kZXJDbGljayIsImludGVyYWN0aW9uUHJvcHMiLCJvbkNsaWNrIiwibWFrZVBhZENvbHVtbiIsIm1ha2VQYWRSb3ciLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwibWFrZVRhYmxlIiwicGFnaW5hdGlvbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUxBOzs7QUFPTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBSW5CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFDQSxVQUFLSyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JMLElBQXBCLE9BQXRCO0FBQ0EsVUFBS00sVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCTixJQUFoQixPQUFsQjtBQUNBLFVBQUtPLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjUCxJQUFkLE9BQWhCO0FBQ0EsVUFBS1EsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCUixJQUFoQixPQUFsQjtBQUNBLFVBQUtTLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQlQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLVSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQlYsSUFBdEIsT0FBeEI7QUFDQSxVQUFLVyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JY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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcFR5cGVzJ1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBwcm9wVHlwZXNcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCByZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlKClcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgbWF4V2lkdGg6IHRhYmxlTWF4V2lkdGgsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJHcm91cFByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBtYW51YWwsXG4gICAgICBsb2FkaW5nVGV4dCxcbiAgICAgIG5vRGF0YVRleHQsXG4gICAgICBzb3J0YWJsZSxcbiAgICAgIG11bHRpU29ydCxcbiAgICAgIHJlc2l6YWJsZSxcbiAgICAgIGZpbHRlcmFibGUsXG4gICAgICAvLyBQaXZvdGluZyBTdGF0ZVxuICAgICAgcGl2b3RJREtleSxcbiAgICAgIHBpdm90VmFsS2V5LFxuICAgICAgcGl2b3RCeSxcbiAgICAgIHN1YlJvd3NLZXksXG4gICAgICBhZ2dyZWdhdGVkS2V5LFxuICAgICAgb3JpZ2luYWxLZXksXG4gICAgICBpbmRleEtleSxcbiAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyR3JvdXBDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiAoW1xuICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICBpbmRleCArPSAxXG4gICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XG4gICAgICAgICAgLi4ucm93LFxuICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLmNvbmNhdChbaV0pXG4gICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgIFtyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICB9KSxcbiAgICAgIGluZGV4LFxuICAgIF0pXG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgY29uc3Qgcm93TWluV2lkdGggPSBfLnN1bShcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplZENvbHVtbiA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGQuaWQpIHx8IHt9XG4gICAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sdW1uLnZhbHVlLCBkLndpZHRoLCBkLm1pbldpZHRoKVxuICAgICAgfSksXG4gICAgKVxuXG4gICAgbGV0IHJvd0luZGV4ID0gLTFcblxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSB7XG4gICAgICAuLi5yZXNvbHZlZFN0YXRlLFxuICAgICAgc3RhcnRSb3csXG4gICAgICBlbmRSb3csXG4gICAgICBwYWdlUm93cyxcbiAgICAgIG1pblJvd3MsXG4gICAgICBwYWRSb3dzLFxuICAgICAgaGFzQ29sdW1uRm9vdGVyLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgICAgcm93TWluV2lkdGgsXG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgIClcbiAgICBjb25zdCB0YWJsZVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgKVxuICAgIGNvbnN0IHRCb2R5UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICApXG4gICAgY29uc3QgbG9hZGluZ1Byb3BzID0gZ2V0TG9hZGluZ1Byb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3QgcmVzaXplclByb3BzID0gZ2V0UmVzaXplclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRWYWx1ZSA9IGNvbCA9PlxuICAgICAgICAocmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sLmlkKSB8fCB7fSkudmFsdWVcbiAgICAgIGNvbnN0IGZsZXggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKFxuICAgICAgICAgIGNvbCA9PiAoY29sLndpZHRoIHx8IHJlc2l6ZWRWYWx1ZShjb2wpID8gMCA6IGNvbC5taW5XaWR0aCksXG4gICAgICAgICksXG4gICAgICApXG4gICAgICBjb25zdCB3aWR0aCA9IF8uc3VtKFxuICAgICAgICBjb2x1bW4uY29sdW1ucy5tYXAoY29sID0+XG4gICAgICAgICAgXy5nZXRGaXJzdERlZmluZWQocmVzaXplZFZhbHVlKGNvbCksIGNvbC53aWR0aCwgY29sLm1pbldpZHRoKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT5cbiAgICAgICAgICBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWF4V2lkdGgpLFxuICAgICAgICApLFxuICAgICAgKVxuXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkR3JvdXBUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbGV4U3R5bGVzID0ge1xuICAgICAgICBmbGV4OiB0YWJsZU1heFdpZHRoID09PSAnbm9uZScgPyBgJHtmbGV4fSAwIGF1dG9gIDogYDEgMSAke18uYXNQeChmbGV4KX1gLFxuICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIC4uLmZsZXhTdHlsZXMsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkR3JvdXBQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGVcbiAgICAgICAgPyAoPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbHVtbiwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbHVtbiwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz4pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgaXNSZXNpemFibGUgJiYgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgc29ydCA/IChzb3J0LmRlc2MgPyAnLXNvcnQtZGVzYycgOiAnLXNvcnQtYXNjJykgOiAnJyxcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgJy1jdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICBwaXZvdEJ5ICYmXG4gICAgICAgICAgICAgIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCkgJiZcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCcsXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogdGFibGVNYXhXaWR0aCA9PT0gJ25vbmUnID8gYCR7d2lkdGh9IDAgYXV0b2AgOiBgMSAxICR7Xy5hc1B4KHdpZHRoKX1gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRvZ2dsZVNvcnQ9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU29ydGFibGUpIHRoaXMuc29ydENvbHVtbihjb2x1bW4sIG11bHRpU29ydCA/IGUuc2hpZnRLZXkgOiBmYWxzZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoaXNSZXNpemFibGUgJiYgJ3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCcpfT5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRGaWx0ZXJUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcmVkLmZpbmQoZmlsdGVyID0+IGZpbHRlci5pZCA9PT0gY29sdW1uLmlkKVxuXG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50XG5cbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgZmlsdGVyYWJsZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICApXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IHRhYmxlTWF4V2lkdGggPT09ICdub25lJyA/IGAke3dpZHRofSAwIGF1dG9gIDogYDEgMSAke18uYXNQeCh3aWR0aCl9YCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5jb2x1bW4uRmlsdGVyLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1maWx0ZXJzJywgdGhlYWRGaWx0ZXJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZEZpbHRlclByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6IHJvd0luZGV4ICs9IDEsXG4gICAgICAgIHBhZ2VTaXplLFxuICAgICAgICBwYWdlLFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbaV0pLFxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXG4gICAgICAgIGdyb3VwZWRCeVBpdm90OiByb3dbZ3JvdXBlZEJ5UGl2b3RLZXldLFxuICAgICAgICBzdWJSb3dzOiByb3dbc3ViUm93c0tleV0sXG4gICAgICB9XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gXy5nZXQoZXhwYW5kZWQsIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnQga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICAgICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICAgICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKSxcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXG5cbiAgICAgICAgICAgICAgbGV0IHVzZU9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNvbHVtbi5DZWxsLFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAgICghY29sdW1uLmFnZ3JlZ2F0ZSA/IEFnZ3JlZ2F0ZWRDb21wb25lbnQgOiBjb2x1bW4uQ2VsbClcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgICAocHJvcHMgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCB8fCBjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICB1c2VPbkV4cGFuZGVyQ2xpY2sgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCAmJiAhY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICAgIGlzQnJhbmNoID1cbiAgICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICAgIGlmIChpc0JyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVkUGl2b3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZE9uRXhwYW5kZXJDbGljayA9IHVzZU9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICAgID8gb25FeHBhbmRlckNsaWNrXG4gICAgICAgICAgICAgICAgOiAoKSA9PiB7fVxuXG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBvbkNsaWNrIGV2ZW50cywgbWFrZSBzdXJlIHRoZXkgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gb3ZlcnJpZGUgZWFjaG90aGVyLiBUaGlzIHNob3VsZCBtYXliZSBiZSBleHBhbmRlZCB0byBoYW5kbGUgYWxsXG4gICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0ZFByb3BzLnJlc3Qub25DbGljaykge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMub25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGRQcm9wcy5yZXN0Lm9uQ2xpY2soZSwgKCkgPT4gcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2soZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNvbHVtblByb3BzLnJlc3Qub25DbGljaykge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMub25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgY29sdW1uUHJvcHMucmVzdC5vbkNsaWNrKGUsICgpID0+IHJlc29sdmVkT25FeHBhbmRlckNsaWNrKGUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtpMn0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogdGFibGVNYXhXaWR0aCA9PT0gJ25vbmUnID8gYCR7d2lkdGh9IDAgYXV0b2AgOiBgMSAxICR7Xy5hc1B4KHdpZHRoKX1gLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICAgIHtyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7U3ViQ29tcG9uZW50ICYmXG4gICAgICAgICAgICAhcm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgICBTdWJDb21wb25lbnQocm93SW5mbyl9XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgZmxleCA9IHdpZHRoXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IHRhYmxlTWF4V2lkdGggPT09ICdub25lJyA/IGAke2ZsZXh9IDAgYXV0b2AgOiBgMSAxICR7Xy5hc1B4KGZsZXgpfWAsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRSb3cgPSAocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoXG4gICAgICAgIGZpbmFsU3RhdGUsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLFxuICAgICAgKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJHcm91cENvbXBvbmVudCBrZXk9e2l9IHsuLi50ckdyb3VwUHJvcHN9PlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAnLXBhZFJvdycsXG4gICAgICAgICAgICAgIChwYWdlUm93cy5sZW5ndGggKyBpKSAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCB0Rm9vdFRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0Rm9vdFRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkZvb3RlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICdoaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogdGFibGVNYXhXaWR0aCA9PT0gJ25vbmUnID8gYCR7d2lkdGh9IDAgYXV0b2AgOiBgMSAxICR7Xy5hc1B4KHdpZHRoKX1gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Rm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tdG9wXCI+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIHRhYmxlUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJyxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0hlYWRlckdyb3VwcyA/IG1ha2VIZWFkZXJHcm91cHMoKSA6IG51bGx9XG4gICAgICAgICAgICB7bWFrZUhlYWRlcnMoKX1cbiAgICAgICAgICAgIHtoYXNGaWx0ZXJzID8gbWFrZUZpbHRlcnMoKSA6IG51bGx9XG4gICAgICAgICAgICA8VGJvZHlDb21wb25lbnRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRCb2R5UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgIHtwYWRSb3dzLm1hcChtYWtlUGFkUm93KX1cbiAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICB7aGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGx9XG4gICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b21cbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJvdHRvbVwiPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICA8Tm9EYXRhQ29tcG9uZW50IHsuLi5ub0RhdGFQcm9wc30+XG4gICAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChub0RhdGFUZXh0KX1cbiAgICAgICAgICAgIDwvTm9EYXRhQ29tcG9uZW50Pn1cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH1cbiAgICAgICAgICAgIHsuLi5sb2FkaW5nUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gY2hpbGRQcm9wcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgdG8gYSBmdW5jdGlvbi1hcy1hLWNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXG4gIH1cbn1cbiJdfQ==