"use client";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "@emotion/styled";
import { RxDashboard } from "react-icons/rx";
import {
  PiBookOpenTextLight,
  PiCreditCardLight,
  PiStudentLight,
} from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assest/icons/logo";
import Message from "../../assest/icons/message";
import { ROUTES } from "../../routes/routes";
import { SlGraduation } from "react-icons/sl";
import { TbMessageStar } from "react-icons/tb";
import { useSidebar } from "../../contexts/sidebar-context";
import { IoIosDesktop } from "react-icons/io";
import { LiaEdit } from "react-icons/lia";
import { HiOutlinePhone } from "react-icons/hi";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const items = [
    {
      key: ROUTES.DASHBOARD,
      icon: <RxDashboard />,
      label: "Dashboard",
      path: ROUTES.DASHBOARD,
    },
    {
      key: ROUTES.TUTORS,
      icon: <SlGraduation />,
      label: "Tutors",
      path: ROUTES.TUTORS,
    },
    {
      key: ROUTES.STUDENTS,
      icon: <PiStudentLight />,
      label: "Students",
      path: ROUTES.STUDENTS,
    },
    {
      key: ROUTES.SUBJECTS,
      icon: <PiBookOpenTextLight />,
      label: "Subjects",
      path: ROUTES.SUBJECTS,
    },
    {
      key: ROUTES.COURSES,
      icon: <IoIosDesktop />,
      label: "Courses",
      path: ROUTES.COURSES,
    },
    {
      key: ROUTES.PAYMENT_INFO,
      icon: <PiCreditCardLight />,
      label: "Payment Info",
      path: ROUTES.PAYMENT_INFO,
    },
    {
      key: ROUTES.BLOGS,
      icon: <LiaEdit />,
      label: "Blogs",
      path: ROUTES.BLOGS,
    },
    {
      key: ROUTES.FAQS,
      icon: <Message />,
      label: "FAQ's",
      path: ROUTES.FAQS,
    },
    {
      key: ROUTES.TESTIMONIALS,
      icon: <TbMessageStar />,
      label: "Testimonials",
      path: ROUTES.TESTIMONIALS,
    },
    {
      key: ROUTES.CONTACT_US,
      icon: <HiOutlinePhone />,
      label: "Contact Us",
      path: ROUTES.CONTACT_US,
    },
  ];

  const activeKey =
    items.find((item) => item.path === pathname)?.key ||
    (pathname.startsWith(ROUTES.BLOGS) ? ROUTES.BLOGS : "") ||
    (pathname.startsWith(ROUTES.TUTORS) ? ROUTES.TUTORS : "") ||
    (pathname.startsWith(ROUTES.STUDENTS) ? ROUTES.STUDENTS : "");

  const handleCollapse = (collapsed: boolean) => {
    toggleSidebar(collapsed);
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      toggleSidebar(true);
    }
  };

  return (
    <StyledSider
      breakpoint="lg"
      collapsedWidth="0"
      width={240}
      collapsed={isCollapsed}
      onCollapse={handleCollapse}
      onClick={(e) => e.stopPropagation()}
    >
      <Logo />
      <StyledMenu
        selectedKeys={[activeKey]}
        theme="light"
        mode="inline"
        items={items.map((item) => ({
          ...item,
          onClick: () => handleMenuClick(item.path),
        }))}
      />
    </StyledSider>
  );
};

const StyledSider = styled(Sider)`
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 30px 20px;
  background: white;
  z-index: 50;
  position: fixed;
  overflow: hidden;
  height: 100vh;

  .ant-layout-sider-zero-width-trigger {
    display: none;
  }

  @media (min-width: 1024px) {
    position: static;
  }

  &.ant-layout-sider-collapsed {
    padding: 30px 0px;
  }

  @media (max-width: 1024px) {
    border-radius: 0px;
  }
`;

const StyledMenu = styled(Menu)`
  padding: 0 !important;
  border-inline-end: none !important;
  margin-top: 37px;

  .ant-menu-item .ant-menu-title-content {
    overflow: visible !important;
  }

  .ant-menu-item {
    margin-inline: 0;
    width: 100%;
    border-radius: 56px;
    height: 49px;
    padding-left: 20px !important;

    svg {
      font-size: 18px !important;
      min-width: fit-content;
    }

    .ant-menu-title-content {
      font-family: var(--font-family-barlow);
      font-size: 14px;
    }
  }

  .ant-menu-item-selected {
    background-color: var(--primary);
    color: white;
    font-weight: 600;
  }
`;

export default Sidebar;
