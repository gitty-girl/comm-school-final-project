import {
  SignIn,
  SignUp,
  Dashboard,
  User,
  Search,
  Favorites,
  NotFound,
} from "../pages";

import { ROUTES } from "../constants/routes";
import { GuestGuard, AuthGuard } from "../components";

const { SiGN_IN, SIGN_UP, DASHBOARD, USER, SEARCH, FAVORITES, NOT_FOUND } =
  ROUTES;

const ROUTES_CONFIG = [
  {
    path: SiGN_IN,
    exact: true,
    page: SignIn,
    guard: GuestGuard,
  },
  {
    path: SIGN_UP,
    exact: false,
    page: SignUp,
    guard: GuestGuard,
  },
  {
    path: DASHBOARD,
    exact: false,
    page: Dashboard,
    guard: AuthGuard,
  },
  {
    path: USER,
    exact: false,
    page: User,
    guard: AuthGuard,
  },
  {
    path: SEARCH,
    exact: false,
    page: Search,
    guard: AuthGuard,
  },
  {
    path: FAVORITES,
    exact: false,
    page: Favorites,
    guard: AuthGuard,
  },
  {
    path: NOT_FOUND,
    exact: false,
    page: NotFound,
    guard: AuthGuard,
  },
];

const HEADER_ROUTES_CONFIG = [
  {
    path: DASHBOARD,
    name: "Dashboard",
  },
  {
    path: SEARCH,
    name: "Search",
  },
  {
    path: FAVORITES,
    name: "Favorites",
  },
];

const LOGO_ROUTE_CONFIG = {
  path: DASHBOARD,
  exact: false,
  page: Dashboard,
};

export { LOGO_ROUTE_CONFIG, ROUTES_CONFIG, HEADER_ROUTES_CONFIG };
