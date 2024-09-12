import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './otp.module.scss';

const OTP = () => {
    const [otp, setOtp] = useState(new Array(5).fill(""));
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    useEffect(() => {
        if (otp.every(digit => digit !== "")) {
            navigate('/anasayfa');
        }
    }, [otp, navigate]);

    return (
        <div className={styles.otpWrapper}>
            <div className={styles.otpContainer}>

                <h2>SMS Doğrulama</h2>
                <p>Telefonunuza gelen sms koduyla giriş yapın.</p>
                <div className={styles.otpInputs}>
                    {otp.map((data, index) => (
                        <input
                            className={styles.otpField}
                            type="text"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OTP;