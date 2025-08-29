import React from 'react';

function ValidationErrorComponent({
                                      msg,
                                      errorColor,
                                  }: {
    msg: string;
    errorColor?: string;
}) {
    return (
        <div className="invalid-feedback" style={{ display: 'block', color: errorColor }}>
            {msg}
        </div>
    );
}

export default ValidationErrorComponent;
