import React from "react";

import Form from "react-bootstrap/Form";

import { WidgetProps, utils } from "@rjsf/core";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const {onEventChange} = utils.hooks.useEmptyValueOnChange({onChange, options, value});
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Form.Group className="mb-0">
      <Form.Label>
        {label}
        {label && required ? "*" : null}
      </Form.Label>
      <Form.Control
        type="range"
        required={required}
        disabled={disabled}
        readOnly={readonly}
        onChange={onEventChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...sliderProps}
      />
      <span className="range-view">{value}</span>
    </Form.Group>
  );
};

export default RangeWidget;
