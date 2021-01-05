
import React, { useState } from 'react';

function ForgotPassword() {
    const email = useFormInput('');

    const forgotPassword = () => {
        /** 
        * API
        */
        console.log('forgot password');
    }

    return (
        <>
            <div className="auth-wrapper" style={{ paddingTop: "100px" }}>
                <div className="auth-inner">
                    <form>
                        <h3>Forgot Password</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" {...email} />
                        </div>
                        <input type="submit" name="forgot-password" value="Submit" onClick={forgotPassword} className="btn btn-primary btn-block" />
                    </form>
                </div>
            </div>
        </>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default ForgotPassword;