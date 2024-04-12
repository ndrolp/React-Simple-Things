import React, { ReactNode } from 'react';

export type DynamicObject = { [key: string]: ReactNode };

export interface SimpleTableField<T> {
  /**
   * The css style for the cell
   */
  cell_style?: React.CSSProperties;
  customGetter?: (row: T) => ReactNode;
  /**
   * The style for the column header
   */
  header_style?: React.CSSProperties;

  /**
   * The Title for the column
   */
  key: ReactNode;
  /**
   * A function to make a custom render for the cell
   *
   * @param row This is the current row of the cell
   * @returns
   */

  /**
   * The max width of the column
   */
  maxWidth?: string | number | undefined;
  /**
   * The min width of the column
   */
  minWidth?: string | number | undefined;
  /**
   *
   * @param row This is the current row of the cell
   * @param stopPropagation prevent the event from triggering parent elements events
   * @returns
   */
  onClick?: (row: T) => unknown;
  stopOnClickPropagation?: boolean;

  /**
   * The field to take the value
   */
  value_field: keyof T;
  /**
   * Fixed Width for the column
   */
  width?: string | number | undefined;
}

export interface SimpleTableParams<T extends DynamicObject> {
  /**
   * The content to display on the table
   */
  datasource: T[];
  fields: SimpleTableField<T>[];
  onRowClick: (row: T) => void;
}
