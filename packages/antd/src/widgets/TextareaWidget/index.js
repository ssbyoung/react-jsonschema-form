import React from 'react';
import {utils} from '@rjsf/core';
import Input from 'antd/lib/input';

const INPUT_STYLE = {
  width: '100%',
};

const TextareaWidget = ({
  // autofocus,
  disabled,
  formContext,
  id,
  // label,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  readonly,
  // required,
  // schema,
  value,
}) => {
  const { readonlyAsDisabled = true } = formContext;

  const {onEventChange} = utils.hooks.useEmptyValueOnChange({onChange, options, value});

  const handleBlur = ({ target }) => onBlur(id, target.value);

  const handleFocus = ({ target }) => onFocus(id, target.value);

  return (
    <Input.TextArea
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? onEventChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      rows={options.rows || 4}
      style={INPUT_STYLE}
      type="textarea"
      value={value}
    />
  );
};

export default TextareaWidget;
