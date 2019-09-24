import React from 'react';

const CustomTextInput = (props) => {
    const { input, meta } = props;
    return (
        <div>
            <input type="text" className="form-control" {...input}
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)} />
            {
                meta.touched && meta.error && <span className="text-danger">{meta.error}</span>
            }
        </div>

    )
};

export default CustomTextInput;