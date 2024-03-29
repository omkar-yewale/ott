import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            We take security and privacy with the utmost regard. Following is the information about the policies and procedures of OTT (On Time Tiffin). and the collection, usage, disclosure, and dissemination of information. By visiting this Website you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our Wwebsite. By use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically. We receive information about you from various sources, including but not limited to: (i) if you register for the site and the offerings, through your user account on the offerings (your “Account”); (ii) your use of the offerings generally; and (iii) from third-party websites and services. When you use the offerings, you are consenting to the collection, transfer, manipulation, storage, disclosure, and other uses of your information as described in this Privacy Policy. This Privacy Policy covers the treatment of personally identifiable information (“Personal Information”) gathered when you are using or accessing the Offerings.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2 className="policy">Privacy Policy</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;