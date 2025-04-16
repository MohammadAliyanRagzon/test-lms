"use client";
import React from "react";
import { Layout } from "antd";
import styled from "@emotion/styled";
import Sidebar from "./sidebar";
import Header from "./header";
import { SidebarProvider } from "../contexts/sidebar-context";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex w-full flex-1 lg:pl-7 lg:pt-12 !bg-main-background">
        <Sidebar />
        <StyledLayout className="flex flex-1 w-0 !min-h-screen !bg-none">
          <div className="flex-1">
            <Header />
            <div className="w-full px-5 md:px-8 xl:px-12">{children}</div>
          </div>
        </StyledLayout>
      </div>
    </SidebarProvider>
  );
}

const StyledLayout = styled(Layout)`
  background: none;
`;