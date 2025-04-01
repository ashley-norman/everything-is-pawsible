import { Link } from "@mui/material";
import { getHelpfulLinks, Page } from "../constants";
import { Link as RouterLink } from "react-router";

const HelpfulLinks = () => {
  const helpfulPages: Page[] = getHelpfulLinks();

  return (
    <>
      {helpfulPages.map((page: Page) => (
        <Link
          key={page.title}
          component={RouterLink}
          gutterBottom
          to={page.link}
          color="inherit"
          variant="body1"
        >
          {page.title}
        </Link>
      ))}
    </>
  );
};

export default HelpfulLinks;
