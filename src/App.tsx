import {
  AuthBindings,
  Authenticated,
  GitHubBanner,
  Refine,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import axios from "axios";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { CredentialResponse } from "./interfaces/google";
import { Login } from "./pages/login";
import { parseJwt } from "./utils/parse-jwt";

import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';


const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

import { Create } from "@refinedev/mui";
import { Typography } from "@mui/material";
import Form from "./components/login/Form";
import { Uploadlist } from "./pages/Uploadlist";
import { Sample } from "./pages/sample";

const CreatePage: React.FC = () => {
  return (
    <Create
      title={<Typography variant="h5">Custom Title</Typography>
    }
    >
      <span>Rest of your page here</span>
    </Create>
  );
};

function App() {
  const authProvider: AuthBindings = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
          })
        );

        localStorage.setItem("token", `${credential}`);

        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
      };
    },
    logout: async () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return {};
        });
      }

      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  {
                    name: "Dashboards",
                    list: "/sample",
                    meta: {
                      canDelete: true,
                      icon:<DashboardTwoToneIcon/>
                    },
                  },
                  {
                    name: "Upload",
                    list: "/upload",
                    meta: {
                      canDelete: true,
                      icon:<UploadFileIcon/>
                    },
                  },
                  {
                    name: "Invoice",
                    list: "/sample",
                    meta: {
                      canDelete: true,
                      icon:<AssignmentTwoToneIcon/>
                    },
                  },
                  {
                    name: "Schedule",
                    list: "/sample",
                    meta: {
                      canDelete: true,
                      icon:<DescriptionTwoToneIcon/>
                    },
                  },
                  {
                    name: "Calender",
                    list: "/sample",
                    meta: {
                      canDelete: true,
                      icon:<CalendarMonthTwoToneIcon/>
                    },
                  },
                  {
                    name: "Notification",
                    list: "/sample",
                    meta: {
                      canDelete: true,
                      icon:<NotificationsNoneTwoToneIcon/>
                    },
                  },
                  {
                    name: "Settings",
                    list: "/sample",
                    meta: {
                      canDelete: true,
                      icon:<SettingsTwoToneIcon/>
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "lQ6Fif-yXLLtX-3uuxMW",
                }}
    
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2 Header={() => <Header sticky />} Title={() => <div>
                          <img src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706289402/Openinapp/Logo_and_company_i5x2lf.svg" alt="logo" />
                        </div>}>
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    
                
                <Route path="/upload" element={<Uploadlist/>}></Route>
                <Route path="/sample" element={<Sample/>}></Route>
                    
                   
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                
    
                <DocumentTitleHandler />
              
              </Refine>
              {/* <DevtoolsPanel /> */}
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
   
  );
}

export default App;
