"use client";
import { GoBell } from "react-icons/go";
import { Dropdown, MenuProps, Modal } from "antd";
import DropdownHeading from "./dropdown-heading";
import { MdMenu } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NotificationModal from "./notification-modal";
import styled from "@emotion/styled";
import ChangePasswordModal from "./change-password-modal";
import { ROUTES } from "../../routes/routes";
import { useSidebar } from "../../contexts/sidebar-context";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const [notificationModal1Open, setNotificationModal1Open] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: <DropdownHeading title="Profile" className="text-secondary" />,
      key: "0",
      onClick: () => navigate(ROUTES.PROFILE),
      className: pathname === ROUTES.PROFILE ? "bg-primary/20 text-white" : "",
    },
    {
      label: (
        <DropdownHeading title="Payment Method" className="text-secondary" />
      ),
      key: "2",
      onClick: () => navigate(ROUTES.PAYMENT_METHOD),
      className:
        pathname === ROUTES.PAYMENT_METHOD ? "bg-primary/20 text-white" : "",
    },
    {
      label: (
        <DropdownHeading title="Change Password" className="text-secondary" />
      ),
      key: "3",
      onClick: () => setChangePasswordModal(true),
    },
    {
      type: "divider",
    },
    {
      label: <DropdownHeading title="Logout" className="text-main-red" />,
      key: "4",
    },
  ];

  return (
    <div
      className={`w-full flex items-center ${
        pathname === ROUTES.DASHBOARD
          ? "justify-between"
          : "justify-between lg:justify-end"
      } py-5 lg:py-0 px-5 md:px-8 xl:px-12`}
    >
      {pathname === ROUTES.DASHBOARD && (
        <h1 className="hidden lg:flex items-center gap-2.5 text-2xl !font-family-barlow font-bold text-secondary">
          Welcome back Imran Khan{" "}
          <img className="h-8 w-8" src="/images/dashboard/wave.png" />
        </h1>
      )}
      <MdMenu
        onClick={(e) => {
          toggleSidebar(!isCollapsed);
          e.stopPropagation();
        }}
        size={24}
        className="hover:text-primary cursor-pointer transition-all duration-300 block lg:hidden"
      />
      <div className="flex items-center gap-5">
        <div
          onClick={() => setNotificationModal1Open(true)}
          className="relative cursor-pointer"
        >
          <GoBell className="text-2xl" />
          <span className="absolute top-0.5 -right-0.5 bg-red-500 h-2.5 w-4 flex items-center justify-center rounded-[38px] text-white text-[6px] font-bold">
            3
          </span>
        </div>
        <StyledModal
          open={notificationModal1Open}
          footer={false}
          onCancel={() => setNotificationModal1Open(false)}
          closable={false}
          className="!absolute !top-20 lg:!top-24 right-5 md:right-8 xl:right-12 !w-60 sm:!w-80 !rounded-t-[20px] !pb-0"
        >
          <NotificationModal />
        </StyledModal>
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          overlayClassName="custom-profile-dropdown"
        >
          <img
            src="https://picsum.photos/200/300"
            alt="user-img"
            className="rounded-full border-[3px] border-primary h-9 w-9 cursor-pointer hover:opacity-70 transition-all duration-300"
          />
        </Dropdown>
        <StyledChangePasswordModal
          open={changePasswordModal}
          footer={false}
          onCancel={() => setChangePasswordModal(false)}
          centered
          className="!p-0"
          width={580}
        >
          <ChangePasswordModal />
        </StyledChangePasswordModal>
      </div>
    </div>
  );
};

export default Header;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 20px 20px 0px 0px;
  }
`;

const StyledChangePasswordModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 20px;

    .ant-modal-close {
      top: 19px;
      right: 28px;

      @media (max-width: 640px) {
        right: 20px;
      }
    }
  }
`;