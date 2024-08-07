// src/components/services/otpService.js

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig'; // Adjust path

export const sendOtp = async (phoneNumber, recaptchaContainerId) => {
    const recaptchaVerifier = new RecaptchaVerifier(recaptchaContainerId, {
        size: 'invisible',
        callback: (response) => {
            // Handle successful reCAPTCHA response here
        },
        'expired-callback': () => {
            // Handle reCAPTCHA expiration here
        }
    }, auth);

    try {
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
        return confirmationResult;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};

export const verifyOtp = async (confirmationResult, otp) => {
    try {
        await confirmationResult.confirm(otp);
    } catch (error) {
        console.error('Error verifying OTP:', error);
        throw error;
    }
};
