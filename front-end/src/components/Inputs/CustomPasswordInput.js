import React from 'react';

const CustomPasswordInput = (props) => {
    const { input, meta } = props;
    return (
        <div>
            <input type="password" className="form-control" {...input}
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)} />
            {
                meta.touched && meta.error && <span className="text-danger">{meta.error}</span>
            }
        </div>
    )
};

export default CustomPasswordInput;