/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { getSemanticProps } from "../util";
import {utils} from '@rjsf/core';

function TextWidget({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  name,
  label,
  schema,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  formContext,
}) {
  const semanticProps = getSemanticProps({ formContext, options });
  const { eventOnChange } = utils.hooks.useEmptyValueOnChange({ onChange, options, value });
  const _onBlur = () => onBlur && onBlur(id, value);
  const _onFocus = () => onFocus && onFocus(id, value);
  const inputType = schema.type === 'string' ?  'text' : `${schema.type}`;

  return (
    <Form.Input
      key={id}
      id={id}
      placeholder={placeholder}
      type={inputType}
      label={schema.title || label}
      required={required}
      autoFocus={autofocus}
      disabled={disabled || readonly}
      name={name}
      {...semanticProps}
      value={value || value === 0 ? value : ""}
      onChange={eventOnChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
}

TextWidget.defaultProps = {
  options: {
    semantic: {
      fluid: true,
      inverted: false,
    },
  },
};

TextWidget.propTypes = {
  options: PropTypes.object,
};

export default TextWidget;
