import TableHeaders from "../../components/common/table-headers";
import Button from "../../components/common/button";
import AllBlogs from "../../components/pages/blogs";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-7 w-full ">
      <TableHeaders title="Manage Blog Posts" placeholder="Search Post" />
      <Button
        className="w-fit "
        variant="secondary"
        onClick={() =>
          navigate(`${ROUTES.BLOGS}${ROUTES.MANAGE_BLOG}`)
        }
      >
        Create New Post
      </Button>
      <div className="flex flex-col ">
        <AllBlogs />
      </div>
    </div>
  );
};

export default Blogs;
