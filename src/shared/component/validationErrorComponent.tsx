import React from 'react';

function ValidationErrorComponent({
                                      msg,
                                      errorColor,
                                  }: {
    msg: string;
    errorColor?: string;
}) {
    return (
        <div className="invalid-feedback font-10" style={{ display: 'block', color: errorColor }}>
            {msg}
        </div>
    );
}

export default ValidationErrorComponent;
