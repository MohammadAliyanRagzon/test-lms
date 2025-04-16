import { createBrowserRouter, Outlet } from "react-router-dom";
import { ROUTES } from "./routes";
import LoginPage from "../pages/login-page";
import Layout from "../layout";
import Dashboard from "../pages/dashboard";
import Tutors from "../pages/tutors";
import Students from "../pages/students";
import ContactUs from "../pages/contact-us";
import Testimonials from "../pages/testimonials";
import Subjects from "../pages/subjects";
import Courses from "../pages/courses";
import FAQ from "../pages/faq";
import Blogs from "../pages/blogs";
import PaymentInfo from "../pages/payment-info";
import PaymentDetails from "../pages/payment-info/payment-details";
import ManageBlog from "../pages/blogs/manage-blog";
import ManageStudent from "../pages/students/view-profile";

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: (
          <Layout>
            <Dashboard />
          </Layout>
        ),
      },
    ],
  },
  {
    path: ROUTES.TUTORS,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.TUTORS,
        element: (
          <Layout>
            <Tutors />
          </Layout>
        ),
      },
    ],
  },
  {
    path: `${ROUTES.STUDENTS}${ROUTES.MANAGE_STUDENT}`,
    element: (
      <Layout>
        <ManageStudent />
      </Layout>
    ),
  },
  {
    path: ROUTES.PAYMENT_INFO,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.PAYMENT_INFO,
        element: (
          <Layout>
            <PaymentInfo />
          </Layout>
        ),
      },
    ],
  },
  {
    path: `${ROUTES.PAYMENT_INFO}/:studentName`,
    element: (
      <Layout>
        <PaymentDetails />
      </Layout>
    ),
  },
  {
    path: ROUTES.STUDENTS,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.STUDENTS,
        element: (
          <Layout>
            <Students />
          </Layout>
        ),
      },
    ],
  },
  {
    path: `${ROUTES.TUTORS}${ROUTES.MANAGE_TUTOR}`,
    element: (
      <Layout>
        <ManageBlog />
      </Layout>
    ),
  },
  {
    path: ROUTES.SUBJECTS,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.SUBJECTS,
        element: (
          <Layout>
            <Subjects />
          </Layout>
        ),
      },
    ],
  },
  {
    path: ROUTES.COURSES,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.COURSES,
        element: (
          <Layout>
            <Courses />
          </Layout>
        ),
      },
    ],
  },
  {
    path: ROUTES.CONTACT_US,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.CONTACT_US,
        element: (
          <Layout>
            <ContactUs />
          </Layout>
        ),
      },
    ],
  },
  {
    path: ROUTES.FAQS,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.FAQS,
        element: (
          <Layout>
            <FAQ />
          </Layout>
        ),
      },
    ],
  },
  {
    path: ROUTES.BLOGS,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.BLOGS,
        element: (
          <Layout>
            <Blogs />
          </Layout>
        ),
      },
    ],
  },
  {
    path: `${ROUTES.BLOGS}${ROUTES.MANAGE_BLOG}`,
    element: (
      <Layout>
        <ManageBlog />
      </Layout>
    ),
  },
  {
    path: ROUTES.TESTIMONIALS,
    element: <Outlet />,
    children: [
      {
        path: ROUTES.TESTIMONIALS,
        element: (
          <Layout>
            <Testimonials />
          </Layout>
        ),
      },
    ],
  },
]);
