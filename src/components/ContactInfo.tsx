import { Typography, Link } from "@mui/material";
import { emailAddress, phoneNumber } from "../constants";

const ContactInfo = () => {
  return (
    <>
      <Typography variant="overline">Phone</Typography>
      <Link
        href="tel:+19045952640"
        gutterBottom
        color="inherit"
        display="block"
      >
        {phoneNumber}
      </Link>
      <Typography variant="overline">Email</Typography>
      <Link
        href="mailto:everythingispawsiblejax@gmail.com"
        color="inherit"
        display="block"
        gutterBottom
      >
        {emailAddress}
      </Link>
      <Typography variant="overline">Address</Typography>
      <Typography>925 8th Ave S</Typography>
      <Typography gutterBottom>Jacksonville Beach, FL 32250</Typography>
    </>
  );
};

export default ContactInfo;
