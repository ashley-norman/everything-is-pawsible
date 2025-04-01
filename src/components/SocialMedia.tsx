import { Facebook, Instagram } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialMedia = () => (
  <Box display="flex" justifyContent="center" mt={4}>
    <IconButton
      aria-label="Facebook"
      color="primary"
      href="https://www.facebook.com/everythingispawsiblejax"
      target="_blank"
    >
      <Facebook fontSize="large" />
    </IconButton>
    <IconButton
      aria-label="Instagram"
      color="primary"
      href="https://www.instagram.com/everythingispawsiblejax/"
      target="_blank"
    >
      <Instagram fontSize="large" />
    </IconButton>
  </Box>
);

export default SocialMedia;
